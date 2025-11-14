from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime


class SessionBase(BaseModel):
    date: str
    location: Optional[str] = None
    notes: Optional[str] = None


class SessionCreate(SessionBase):
    pass


class SessionUpdate(BaseModel):
    date: Optional[str] = None
    location: Optional[str] = None
    notes: Optional[str] = None


class SessionResponse(SessionBase):
    id: str
    created_at: datetime
    synced: bool = False

    class Config:
        from_attributes = True


class TransactionBase(BaseModel):
    session_id: str
    player_name: str
    type: str = Field(..., pattern="^(buy_in|cashout|tip)$")
    amount: float = Field(..., gt=0)


class TransactionCreate(TransactionBase):
    pass


class TransactionUpdate(BaseModel):
    player_name: Optional[str] = None
    type: Optional[str] = Field(None, pattern="^(buy_in|cashout|tip)$")
    amount: Optional[float] = Field(None, gt=0)


class TransactionResponse(TransactionBase):
    id: str
    created_at: datetime
    synced: bool = False

    class Config:
        from_attributes = True

