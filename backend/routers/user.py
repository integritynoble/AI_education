import logging
from typing import Optional
from fastapi import APIRouter, Header
from backend.db.schemas import ValidateRequest, ValidateResponse, LogoutResponse
from backend.services.auth_service import auth_service

logger = logging.getLogger(__name__)

router = APIRouter(prefix="/api/user", tags=["user"])


@router.post("/validate", response_model=ValidateResponse)
async def validate_user(
    request: ValidateRequest,
    authorization: Optional[str] = Header(None),
):
    if request.sso_token:
        return await auth_service.exchange_sso_token(request.sso_token)

    if authorization and authorization.startswith("Bearer "):
        return await auth_service.validate_access_token(authorization)

    return ValidateResponse(success=False)


@router.post("/logout", response_model=LogoutResponse)
async def logout_user(
    authorization: Optional[str] = Header(None),
):
    return await auth_service.logout_user(authorization)
