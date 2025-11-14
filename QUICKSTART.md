# Quick Start Guide

## Prerequisites Check

- ✅ Node.js LTS installed
- ✅ Python 3.11+ installed
- ✅ iOS Simulator (for iOS development)

## Initial Setup (One-time)

### 1. Mobile App

```bash
cd mobile
npm install
```

Create `mobile/.env`:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
API_BASE_URL=http://localhost:8000
```

### 2. Backend

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

Create `backend/.env`:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
API_BASE_URL=http://localhost:8000
ENVIRONMENT=development
DEBUG=true
```

## Running the Apps

### Start Backend (Terminal 1)

```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload
```

Backend will be at: http://localhost:8000
API docs: http://localhost:8000/docs

### Start Mobile App (Terminal 2)

```bash
cd mobile
npm start
```

Then:
- Press `i` to open iOS Simulator
- Press `a` to open Android Emulator
- Or scan QR code with Expo Go app

## Development Commands

### Mobile
- `npm start` - Start Expo dev server
- `npm run ios` - Open iOS simulator
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

### Backend
- `uvicorn main:app --reload` - Start dev server
- `black .` - Format code
- `ruff check .` - Lint code
- `make format` - Format and lint (if Make installed)

## Next Steps

1. Set up your Supabase project
2. Add your Supabase credentials to `.env` files
3. Start building Phase 1 features (ledger system)

