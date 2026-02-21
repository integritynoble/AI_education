import jwt
import uuid
import logging
from datetime import datetime, timedelta, timezone
from typing import Optional
from backend.core.config import settings

logger = logging.getLogger(__name__)


class TokenManager:
    def __init__(self):
        self.secret_key = settings.SECRET_KEY
        self.algorithm = "HS256"
        self.expire_days = settings.ACCESS_TOKEN_EXPIRE_DAYS

    def create_access_token(self, user_id: int) -> str:
        now = datetime.now(timezone.utc)
        payload = {
            "user_id": user_id,
            "exp": now + timedelta(days=self.expire_days),
            "iat": now,
            "jti": str(uuid.uuid4()),
        }
        return jwt.encode(payload, self.secret_key, algorithm=self.algorithm)

    def verify_access_token(self, token: str) -> Optional[int]:
        try:
            payload = jwt.decode(token, self.secret_key, algorithms=[self.algorithm])
            return payload.get("user_id")
        except jwt.ExpiredSignatureError:
            logger.warning("Access token expired")
            return None
        except jwt.InvalidTokenError as e:
            logger.warning(f"Invalid token: {e}")
            return None


token_manager = TokenManager()
