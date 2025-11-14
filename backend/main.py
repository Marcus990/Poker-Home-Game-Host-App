from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings

app = FastAPI(
    title="Poker Home Game Host API",
    description="API for managing poker home game sessions and transactions",
    version="1.0.0",
)

# CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {
        "message": "Poker Home Game Host API",
        "version": "1.0.0",
        "status": "running",
    }


@app.get("/health")
async def health():
    return {"status": "healthy"}


# Import routers (will be added in future phases)
# from app.api import sessions, transactions

# app.include_router(sessions.router, prefix="/api/v1/sessions", tags=["sessions"])
# app.include_router(transactions.router, prefix="/api/v1/transactions", tags=["transactions"])


if __name__ == "__main__":
    import uvicorn

    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)

