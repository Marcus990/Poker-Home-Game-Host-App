# Poker Home Game Host App

A mobile-first application for organizing and managing poker nights. Phase 1 focuses on a clean offline-first ledger system for recording buy-ins, cashouts, and tips.

## Project Structure

This is a monorepo containing:

- **`/mobile`** - React Native + Expo mobile app (iOS-first, Android later)
- **`/backend`** - FastAPI backend server

## Tech Stack

### Frontend (Mobile)
- **Framework**: Expo + React Native (TypeScript)
- **State Management**: Zustand
- **Server Data Fetching**: TanStack Query
- **Local Storage**: expo-sqlite
- **Auth & Backend**: Supabase client
- **Styling**: React Native StyleSheet

### Backend
- **Framework**: FastAPI (Python 3.11+)
- **Auth**: Supabase JWT validation
- **Database**: Supabase (PostgreSQL)
- **ORM**: Supabase Python SDK

## Prerequisites

- **Node.js** LTS (v18 or higher)
- **Python** 3.11 or higher
- **npm** or **yarn**
- **iOS Simulator** (for iOS development) or **Android Studio** (for Android)
- **Supabase account** (for database and auth)

## Quick Start

### 1. Environment Setup

Create `.env` files in both workspaces:

**`/mobile/.env`**:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
API_BASE_URL=http://localhost:8000
```

**`/backend/.env`**:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key-here
API_BASE_URL=http://localhost:8000
ENVIRONMENT=development
DEBUG=true
```

### 2. Mobile App Setup

```bash
cd mobile
npm install
npm start
```

Then:
- Press `i` to open iOS Simulator
- Press `a` to open Android Emulator
- Scan QR code with Expo Go app on your device

### 3. Backend Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn main:app --reload
```

The API will be available at `http://localhost:8000`
- API docs: `http://localhost:8000/docs`
- Health check: `http://localhost:8000/health`

## Development

### Mobile App

```bash
cd mobile
npm start          # Start Expo dev server
npm run ios        # Start iOS simulator
npm run android    # Start Android emulator
npm run lint       # Run ESLint
npm run format     # Format with Prettier
```

### Backend

```bash
cd backend
source venv/bin/activate
uvicorn main:app --reload    # Start dev server
black .                      # Format code
ruff check .                 # Lint code
```

## Project Phases

### Phase 1 (Current)
- ✅ Offline-first ledger system
- ✅ Record buy-ins, cashouts, and tips
- ✅ Local SQLite storage
- ✅ Basic app structure

### Phase 2 (Future)
- Social features (public/private game posts)
- Friend groups
- Player profiles
- Join requests
- Waitlists

## Architecture

### Mobile App Structure
```
mobile/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen components
│   ├── store/          # Zustand state management
│   ├── services/       # API clients, database
│   ├── hooks/          # Custom React hooks
│   ├── types/          # TypeScript type definitions
│   └── utils/          # Utility functions
├── App.tsx             # Root component
└── app.config.js       # Expo configuration
```

### Backend Structure
```
backend/
├── app/
│   ├── api/            # API route handlers
│   ├── core/           # Configuration, auth
│   ├── models/         # Pydantic models
│   ├── services/       # Business logic
│   └── utils/          # Utility functions
└── main.py             # FastAPI application entry point
```

## Database Schema (Phase 1)

### Sessions Table
- `id` (TEXT PRIMARY KEY)
- `date` (TEXT NOT NULL)
- `location` (TEXT)
- `notes` (TEXT)
- `created_at` (TEXT DEFAULT CURRENT_TIMESTAMP)
- `synced` (INTEGER DEFAULT 0)

### Transactions Table
- `id` (TEXT PRIMARY KEY)
- `session_id` (TEXT NOT NULL, FOREIGN KEY)
- `player_name` (TEXT NOT NULL)
- `type` (TEXT CHECK: 'buy_in', 'cashout', 'tip')
- `amount` (REAL NOT NULL)
- `created_at` (TEXT DEFAULT CURRENT_TIMESTAMP)
- `synced` (INTEGER DEFAULT 0)

## Supabase Integration

The app is designed to work with Supabase for:
- PostgreSQL database (via Supabase)
- Authentication (JWT tokens)
- Real-time subscriptions (future)

Connection will be configured via MCP or Supabase SDK in future updates.

## Building for Production

### Mobile (iOS)
```bash
cd mobile
eas build --platform ios
```

### Backend
Deploy to your preferred hosting (Railway, Render, Fly.io, etc.)

## License

See LICENSE file for details.

