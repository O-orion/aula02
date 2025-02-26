import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../styles/styles';
import { Link } from 'expo-router';
import Animated, { FadeIn } from 'react-native-reanimated';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { ThemeProvider } from '../app/context/ThemeContext';
import { useTheme } from '../app/context/ThemeContext';
import { themes } from '../styles/theme';

export default function Index() {

    const { theme: themeType } = useTheme();
    const theme = themes[themeType];

    return (
        <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
          <Animated.View entering={FadeIn.duration(1000)}>
            <Text style={[styles.title, { color: theme.colors.text }]}>
              Bem-vindo ao MoodJournal!
            </Text>
            <Link href="/mood-picker" style={styles.button}>
              <Icon name="mood" size={24} color={theme.colors.primary} />
              <Text style={[styles.buttonText, { color: theme.colors.primary }]}>
                Registrar Humor
              </Text>
            </Link>
            <Link href="/history" style={styles.button}>
              <Icon name="history" size={24} color={theme.colors.primary} />
              <Text style={[styles.buttonText, { color: theme.colors.primary }]}>
                Ver Histórico
              </Text>
            </Link>
          </Animated.View>
        </View>
      );
}

