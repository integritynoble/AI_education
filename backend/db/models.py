from sqlalchemy import Column, Integer, String, Float, DateTime
from datetime import datetime, timezone
from backend.db.database import Base


class UserModel(Base):
    __tablename__ = "users"

    user_id = Column(Integer, primary_key=True, index=True)
    user_name = Column(String, default="")
    role = Column(String, default="")
    credit = Column(Float, default=0)
    token = Column(Float, default=0)
    sso_token = Column(String, default="")
    api_key = Column(String, default="")
    updated_at = Column(
        DateTime, default=lambda: datetime.now(timezone.utc), onupdate=lambda: datetime.now(timezone.utc)
    )
