import httpx
import logging
from typing import Optional, Dict
from fastapi import HTTPException, Header
from backend.db.repo import repo
from backend.core.token_manager import token_manager
from backend.core.config import settings

logger = logging.getLogger(__name__)


class AuthService:
    def __init__(self):
        self.sso_validate_url = settings.SSO_VALIDATE_URL

    async def exchange_sso_token(self, sso_token: str) -> Dict:
        async with httpx.AsyncClient() as client:
            try:
                response = await client.post(
                    self.sso_validate_url,
                    headers={"Authorization": f"Bearer {sso_token}"},
                    timeout=10.0,
                )

                if response.status_code == 401:
                    logger.warning(f"SSO token invalid or expired: {response.text}")
                    raise HTTPException(
                        status_code=401,
                        detail={
                            "error": "sso_token_expired",
                            "message": "SSO token expired or invalid. Please login again.",
                            "require_reauth": True,
                        },
                    )

                if response.status_code != 200:
                    logger.error(f"SSO Validation failed with status {response.status_code}")
                    if 400 <= response.status_code < 500:
                        raise HTTPException(
                            status_code=401,
                            detail={
                                "error": "authentication_failed",
                                "message": "Authentication failed",
                                "require_reauth": True,
                            },
                        )
                    raise HTTPException(status_code=response.status_code, detail="SSO validation failed")

                data = response.json().get("data")

                if not data or not data.get("valid"):
                    raise HTTPException(
                        status_code=401,
                        detail={
                            "error": "sso_token_invalid",
                            "message": "SSO token is not valid. Please login again.",
                            "require_reauth": True,
                        },
                    )

                if "user_info" not in data:
                    raise HTTPException(
                        status_code=401,
                        detail={
                            "error": "user_data_missing",
                            "message": "User data not found. Please login again.",
                            "require_reauth": True,
                        },
                    )

                api_key = data.get("api_key") or data["user_info"].get("api_key")

                saved_user = repo.upsert_user(data, sso_token, api_key or "")
                user_id = saved_user.get("user_id")

                access_token = token_manager.create_access_token(user_id)

                logger.info(f"SSO token exchanged for user: {data.get('user_info', {}).get('user_name')}")

                return {
                    "success": True,
                    "access_token": access_token,
                    "user": {
                        "user_info": {
                            "user_name": saved_user.get("user_name"),
                            "user_id": saved_user.get("user_id"),
                            "role": saved_user.get("role"),
                        },
                        "balance": {
                            "credit": saved_user.get("credit"),
                            "token": saved_user.get("token"),
                        },
                        "api_key": saved_user.get("api_key"),
                    },
                }

            except httpx.RequestError as e:
                logger.error(f"SSO Connection error: {e}")
                raise HTTPException(
                    status_code=503,
                    detail={
                        "error": "sso_unavailable",
                        "message": "SSO Service is currently unavailable.",
                        "require_reauth": False,
                    },
                )
            except HTTPException:
                raise
            except Exception as e:
                logger.error(f"Unexpected error: {e}")
                raise HTTPException(status_code=500, detail="Internal Server Error")

    async def validate_access_token(self, authorization: str) -> Dict:
        access_token = authorization.replace("Bearer ", "")
        user_id = token_manager.verify_access_token(access_token)

        if not user_id:
            raise HTTPException(
                status_code=401,
                detail={
                    "error": "access_token_invalid",
                    "message": "Access token is invalid or expired",
                    "require_reauth": True,
                },
            )

        user_record = repo.get_user(user_id)

        if not user_record:
            raise HTTPException(
                status_code=404,
                detail={
                    "error": "user_not_found",
                    "message": "User not found or logged out",
                    "require_reauth": True,
                },
            )

        sso_token = user_record.get("sso_token")
        if sso_token:
            user_record = await self._refresh_user_from_sso(user_id, user_record, sso_token)

        return {"success": True, "valid": True, "user": user_record}

    async def _refresh_user_from_sso(self, user_id: int, user_data: Dict, sso_token: str) -> Dict:
        try:
            async with httpx.AsyncClient() as client:
                response = await client.post(
                    self.sso_validate_url,
                    headers={"Authorization": f"Bearer {sso_token}"},
                    timeout=5.0,
                )

                if response.status_code == 401:
                    logger.warning(f"SSO token expired for user {user_id}")
                    raise HTTPException(
                        status_code=401,
                        detail={
                            "error": "sso_token_expired",
                            "message": "Your SSO session has expired. Please login again.",
                            "require_reauth": True,
                        },
                    )

                if response.status_code == 200:
                    sso_data = response.json().get("data")
                    if sso_data and sso_data.get("valid") and "user_info" in sso_data:
                        api_key = sso_data.get("api_key")
                        repo.upsert_user(sso_data, sso_token, api_key or "")
                        return sso_data

        except httpx.RequestError as e:
            logger.warning(f"SSO service unavailable, using cached data: {e}")
        except HTTPException:
            raise

        return user_data

    async def logout_user(self, authorization: Optional[str]) -> Dict:
        if authorization and authorization.startswith("Bearer "):
            access_token = authorization.replace("Bearer ", "")
            user_id = token_manager.verify_access_token(access_token)

            if user_id:
                repo.clear_user_data(user_id)
                logger.info(f"Cleared user data for user {user_id}")

        return {"success": True, "message": "Logged out successfully."}


auth_service = AuthService()


async def get_current_user_id(authorization: Optional[str] = Header(None)) -> int:
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(
            status_code=401,
            detail={"error": "missing_token", "message": "Authorization header missing", "require_reauth": True},
        )

    access_token = authorization.replace("Bearer ", "")
    user_id = token_manager.verify_access_token(access_token)

    if not user_id:
        raise HTTPException(
            status_code=401,
            detail={"error": "invalid_token", "message": "Access token invalid or expired", "require_reauth": True},
        )

    return user_id
