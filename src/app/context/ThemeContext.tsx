import React, { createContext, useContext, useState, ReactNode } from 'react';

type ThemeType = 'light' | 'dark';

interface ThemeColors {
  background: string;
  text: string;
  primary: string;
  border: string;
  chart: string;
}

interface Theme {
  colors: ThemeColors;
  typography: {
    title: { fontSize: number; fontWeight: 'bold' | 'normal' };
    body: { fontSize: number };
  };
}

interface ThemeContextType {
  theme: ThemeType;
  colors: ThemeColors;
  toggleTheme: () => void;
}

const themes: Record<ThemeType, Theme> = {
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

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<ThemeType>('light');

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, colors: themes[theme].colors, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};