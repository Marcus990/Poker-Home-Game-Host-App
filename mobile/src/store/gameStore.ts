import { create } from 'zustand';

export interface Session {
  id: string;
  date: string;
  location?: string;
  notes?: string;
  createdAt: string;
  synced: boolean;
}

export interface Transaction {
  id: string;
  sessionId: string;
  playerName: string;
  type: 'buy_in' | 'cashout' | 'tip';
  amount: number;
  createdAt: string;
  synced: boolean;
}

interface GameState {
  sessions: Session[];
  transactions: Transaction[];
  addSession: (session: Omit<Session, 'id' | 'createdAt' | 'synced'>) => void;
  addTransaction: (
    transaction: Omit<Transaction, 'id' | 'createdAt' | 'synced'>
  ) => void;
  updateSession: (id: string, updates: Partial<Session>) => void;
  updateTransaction: (id: string, updates: Partial<Transaction>) => void;
}

export const useGameStore = create<GameState>((set) => ({
  sessions: [],
  transactions: [],
  addSession: (session) =>
    set((state) => ({
      sessions: [
        ...state.sessions,
        {
          ...session,
          id: `session_${Date.now()}_${Math.random()}`,
          createdAt: new Date().toISOString(),
          synced: false,
        },
      ],
    })),
  addTransaction: (transaction) =>
    set((state) => ({
      transactions: [
        ...state.transactions,
        {
          ...transaction,
          id: `tx_${Date.now()}_${Math.random()}`,
          createdAt: new Date().toISOString(),
          synced: false,
        },
      ],
    })),
  updateSession: (id, updates) =>
    set((state) => ({
      sessions: state.sessions.map((s) =>
        s.id === id ? { ...s, ...updates } : s
      ),
    })),
  updateTransaction: (id, updates) =>
    set((state) => ({
      transactions: state.transactions.map((t) =>
        t.id === id ? { ...t, ...updates } : t
      ),
    })),
}));

