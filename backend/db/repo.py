import logging
from typing import Optional, Dict
from backend.db.database import SessionLocal
from backend.db.models import UserModel

logger = logging.getLogger(__name__)


class UserRepository:
    def upsert_user(self, data: Dict, sso_token: str, api_key: str) -> Dict:
        db = SessionLocal()
        try:
            user_info = data.get("user_info", {})
            balance = data.get("balance", {})
            user_id = user_info.get("user_id")

            if not user_id:
                raise ValueError("user_id is required")

            user = db.query(UserModel).filter(UserModel.user_id == user_id).first()
            if user:
                user.user_name = user_info.get("user_name", user.user_name)
                user.role = user_info.get("role", user.role)
                user.credit = balance.get("credit", user.credit)
                user.token = balance.get("token", user.token)
                user.sso_token = sso_token
                user.api_key = api_key or user.api_key
            else:
                user = UserModel(
                    user_id=user_id,
                    user_name=user_info.get("user_name", ""),
                    role=user_info.get("role", ""),
                    credit=balance.get("credit", 0),
                    token=balance.get("token", 0),
                    sso_token=sso_token,
                    api_key=api_key or "",
                )
                db.add(user)

            db.commit()
            db.refresh(user)

            return {
                "user_id": user.user_id,
                "user_name": user.user_name,
                "role": user.role,
                "credit": user.credit,
                "token": user.token,
                "sso_token": user.sso_token,
                "api_key": user.api_key,
            }
        finally:
            db.close()

    def get_user(self, user_id: int) -> Optional[Dict]:
        db = SessionLocal()
        try:
            user = db.query(UserModel).filter(UserModel.user_id == user_id).first()
            if not user:
                return None
            return {
                "user_info": {
                    "user_id": user.user_id,
                    "user_name": user.user_name,
                    "role": user.role,
                },
                "balance": {
                    "credit": user.credit,
                    "token": user.token,
                },
                "sso_token": user.sso_token,
                "api_key": user.api_key,
            }
        finally:
            db.close()

    def clear_user_data(self, user_id: int):
        db = SessionLocal()
        try:
            user = db.query(UserModel).filter(UserModel.user_id == user_id).first()
            if user:
                user.sso_token = ""
                user.api_key = ""
                db.commit()
        finally:
            db.close()


repo = UserRepository()
