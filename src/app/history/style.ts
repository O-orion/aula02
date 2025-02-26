import { StyleSheet } from 'react-native';
import { themes } from '../../styles/theme';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: themes.dark.colors.background,
  },
  title: {
    ...themes.dark.typography,
    color: themes.dark.colors.text,
    marginBottom: 20,
  },
  filterContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  filterButton: {
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
  },
  filterButtonActive: {
    backgroundColor: themes.dark.colors.primary,
  },
  entry: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: themes.dark.colors.border,
  },
  reflection: {
    fontStyle: 'italic',
    marginTop: 5,
  },
  chart: {
    marginVertical: 20,
    borderRadius: 16,
  },
});