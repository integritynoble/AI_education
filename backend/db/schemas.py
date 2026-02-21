from pydantic import BaseModel
from typing import Optional, Dict, Any


class ValidateRequest(BaseModel):
    sso_token: Optional[str] = None


class ValidateResponse(BaseModel):
    success: bool
    access_token: Optional[str] = None
    valid: Optional[bool] = None
    user: Optional[Dict[str, Any]] = None


class LogoutResponse(BaseModel):
    success: bool
    message: str
