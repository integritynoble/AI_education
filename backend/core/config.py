import os
from pydantic_settings import BaseSettings, SettingsConfigDict
from typing import List
from functools import lru_cache

BACKEND_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA_DIR = os.path.join(BACKEND_DIR, "data")
os.makedirs(DATA_DIR, exist_ok=True)


class Settings(BaseSettings):
    ENV: str = "dev"
    APP_NAME: str = "Edu Platform API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True
    APP_PORT: int = 3201

    SECRET_KEY: str = "edu-platform-secret-change-in-production"
    ACCESS_TOKEN_EXPIRE_DAYS: int = 7

    DATABASE_URL: str = f"sqlite:///{os.path.join(DATA_DIR, 'edu.db')}"

    SSO_VALIDATE_URL: str = "https://auth.comparegpt.io/sso/validate"

    CORS_ORIGINS: List[str] = [
        "https://edu.platformai.org",
        "http://localhost:3200",
        "http://localhost:3000",
    ]

    model_config = SettingsConfigDict(
        env_file=os.path.join(BACKEND_DIR, ".env"),
        env_file_encoding="utf-8",
        case_sensitive=True,
        extra="ignore",
    )


@lru_cache
def get_settings():
    return Settings()


settings = Settings()
