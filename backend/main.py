import logging
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.core.config import settings
from backend.db.database import init_db
from backend.routers import user

logging.basicConfig(level=logging.INFO, format="%(asctime)s - %(name)s - %(levelname)s - %(message)s")
logger = logging.getLogger(__name__)

app = FastAPI(title=settings.APP_NAME, version=settings.APP_VERSION)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user.router)


@app.on_event("startup")
async def startup():
    init_db()
    logger.info(f"{settings.APP_NAME} started on port {settings.APP_PORT}")


@app.get("/api/health")
async def health():
    return {"status": "ok", "service": settings.APP_NAME}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("backend.main:app", host="0.0.0.0", port=settings.APP_PORT, reload=settings.DEBUG)
