import { StyleSheet } from 'react-native';
import { themes } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    ...themes.dark.typography.title,
    color: themes.dark.colors.text,
    marginBottom: 20,
  },
  moodList: {
    flexDirection: 'row',
    gap: 20,
  },
  moodButton: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 40,
  },
  label: {
    ...themes.dark.typography.body,
    color: themes.dark.colors.text,
  },
});