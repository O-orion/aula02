export type ThemeType = 'light' | 'dark';

export interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  border: string;
  chart: string;
}

export interface Theme {
  colors: ThemeColors;
  typography: {
    title: { fontSize: number; fontWeight: 'bold' | 'normal' };
    body: { fontSize: number };
  };
}

export const themes: Record<ThemeType, Theme> = {
  light: {
    colors: {
      background: '#f0f0f5',
      text: '#333',
      primary: '#007AFF',
      border: '#ccc',
      chart: 'rgba(0, 122, 255, 1)',
    },
    typography: {
      title: { fontSize: 24, fontWeight: 'bold' },
      body: { fontSize: 16 },
    },
  },
  dark: {
    colors: {
      background: '#1A1A1A',
      text: '#FFF',
      primary: '#40C4FF',
      border: '#444',
      chart: 'rgba(64, 196, 255, 1)',
    },
    typography: {
      title: { fontSize: 24, fontWeight: 'bold' },
      body: { fontSize: 16 },
    },
  },
};