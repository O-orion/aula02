import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from '../app/context/ThemeContext';
import { useTheme } from '../app/context/ThemeContext';
import { themes } from '../styles/theme';
import { TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const HeaderRight = () => {
  const { toggleTheme, theme: themeType } = useTheme();
  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Icon
        name={themeType === 'light' ? 'dark-mode' : 'light-mode'}
        size={24}
        color={themes[themeType].colors.text}
        style={{ marginRight: 15 }}
      />
    </TouchableOpacity>
  );
};

export default function RootLayout() {
  return (
    <ThemeProvider>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: themes.light.colors.background },
          headerTintColor: themes.light.colors.text,
          headerRight: () => <HeaderRight />,
        }}
      >
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="mood-picker" options={{ title: 'Registrar Humor' }} />
        <Stack.Screen name="history" options={{ title: 'Histórico' }} />
      </Stack>
    </ThemeProvider>
  );
}