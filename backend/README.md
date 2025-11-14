# Poker Home Game Host - Backend

FastAPI backend for the Poker Home Game Host application.

## Setup

1. Create a virtual environment:
```bash
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

2. Install dependencies:
```bash
pip install -r requirements.txt
```

3. Create a `.env` file from `.env.example` and fill in your Supabase credentials.

4. Run the development server:
```bash
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`

API documentation (Swagger UI) will be available at `http://localhost:8000/docs`

## Linting & Formatting

- **Black**: Code formatter
- **Ruff**: Fast Python linter

Run formatting:
```bash
black .
ruff check .
```

