import Constants from 'expo-constants';

export const config = {
  supabaseUrl: Constants.expoConfig?.extra?.supabaseUrl || '',
  supabaseAnonKey: Constants.expoConfig?.extra?.supabaseAnonKey || '',
  apiBaseUrl: Constants.expoConfig?.extra?.apiBaseUrl || 'http://localhost:8000',
};

