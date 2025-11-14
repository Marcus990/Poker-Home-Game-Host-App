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

