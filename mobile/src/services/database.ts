import * as SQLite from 'expo-sqlite';

// Initialize local SQLite database for offline-first ledger
export const db = SQLite.openDatabaseSync('poker_game.db');

export const initDatabase = async (): Promise<void> => {
  try {
    // Create sessions table
    db.execSync(`
      CREATE TABLE IF NOT EXISTS sessions (
        id TEXT PRIMARY KEY,
        date TEXT NOT NULL,
        location TEXT,
        notes TEXT,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        synced INTEGER DEFAULT 0
      );
    `);

    // Create transactions table (buy-ins, cashouts, tips)
    db.execSync(`
      CREATE TABLE IF NOT EXISTS transactions (
        id TEXT PRIMARY KEY,
        session_id TEXT NOT NULL,
        player_name TEXT NOT NULL,
        type TEXT NOT NULL CHECK(type IN ('buy_in', 'cashout', 'tip')),
        amount REAL NOT NULL,
        created_at TEXT DEFAULT CURRENT_TIMESTAMP,
        synced INTEGER DEFAULT 0,
        FOREIGN KEY (session_id) REFERENCES sessions(id)
      );
    `);

    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Database initialization error:', error);
    throw error;
  }
};

