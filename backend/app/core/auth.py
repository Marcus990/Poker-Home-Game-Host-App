from fastapi import Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from supabase import create_client, Client
from app.core.config import settings

security = HTTPBearer()


async def verify_token(
    credentials: HTTPAuthorizationCredentials = Depends(security),
) -> dict:
    """
    Verify Supabase JWT token and return user information.
    This will be implemented when Supabase connection is set up.
    """
    # TODO: Implement Supabase JWT verification
    # For now, return a placeholder
    token = credentials.credentials

    # Placeholder implementation
    # In production, verify token with Supabase
    if not token:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
        )

    # Return user info (placeholder)
    return {"user_id": "placeholder", "email": "placeholder@example.com"}


def get_supabase_client() -> Client:
    """Get Supabase client instance."""
    return create_client(settings.SUPABASE_URL, settings.SUPABASE_SERVICE_ROLE_KEY)

