# Poker Home Game Host - Mobile App

React Native + Expo mobile application for managing poker home games.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file:
```env
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
API_BASE_URL=http://localhost:8000
```

3. Start the development server:
```bash
npm start
```

Then:
- Press `i` to open iOS Simulator
- Press `a` to open Android Emulator
- Scan QR code with Expo Go app

## Development

```bash
npm start          # Start Expo dev server
npm run ios        # Start iOS simulator
npm run android    # Start Android emulator
npm run lint       # Run ESLint
npm run lint:fix   # Fix ESLint errors
npm run format     # Format with Prettier
```

## Project Structure

```
src/
├── components/     # Reusable UI components
├── screens/        # Screen components
├── store/          # Zustand state management
├── services/       # API clients, database
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
├── utils/          # Utility functions
└── config/         # Configuration (env vars)
```

## Tech Stack

- **Expo** - React Native framework
- **TypeScript** - Type safety
- **Zustand** - State management
- **TanStack Query** - Server state management
- **expo-sqlite** - Local database
- **Supabase** - Backend services

## Building

### iOS
```bash
eas build --platform ios
```

### Android
```bash
eas build --platform android
```

