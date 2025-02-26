import { useEffect, useState } from 'react';
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { styles } from './style';
import { getMoodEntries, MoodEntry } from '../../utils/storage';
import { themes } from '../../styles/theme';
import { useTheme } from '../context/ThemeContext';

const screenWidth = Dimensions.get('window').width;

const moodColors: Record<string, string> = {
  Feliz: '#34C759',
  Triste: '#007AFF',
  Neutro: '#FF9500',
};

export default function HistoryScreen() {
  const { theme: themeType, toggleTheme } = useTheme();
  const theme = themes[themeType];

  const [entries, setEntries] = useState<MoodEntry[]>([]);
  const [filteredEntries, setFilteredEntries] = useState<MoodEntry[]>([]);
  const [filter, setFilter] = useState<'all' | 'last7days'>('all');

  useEffect(() => {
    const loadEntries = async () => {
      const savedEntries = await getMoodEntries();
      setEntries(savedEntries);
      applyFilter(savedEntries, filter);
    };
    loadEntries();
  }, []);

  const applyFilter = (data: MoodEntry[], selectedFilter: 'all' | 'last7days') => {
    if (selectedFilter === 'all') {
      setFilteredEntries(data);
    } else {
      const sevenDaysAgo = new Date();
      sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
      const filtered = data.filter((entry) => new Date(entry.date) >= sevenDaysAgo);
      setFilteredEntries(filtered);
    }
  };

  const handleFilterChange = (newFilter: 'all' | 'last7days') => {
    setFilter(newFilter);
    applyFilter(entries, newFilter);
  };

  const moodCounts = filteredEntries.reduce((acc, entry) => {
    acc[entry.mood] = (acc[entry.mood] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const chartData = {
    labels: Object.keys(moodCounts),
    datasets: [
      {
        data: Object.values(moodCounts),
        colors: Object.keys(moodCounts).map((mood) => (opacity = 1) => moodColors[mood] || '#ccc'),
      },
    ],
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <Text style={[styles.title, { color: theme.colors.text }]}>Histórico de Humores</Text>

      <View style={styles.filterContainer}>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'all' && styles.filterButtonActive]}
          onPress={() => handleFilterChange('all')}
        >
          <Text>Todos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.filterButton, filter === 'last7days' && styles.filterButtonActive]}
          onPress={() => handleFilterChange('last7days')}
        >
          <Text>Últimos 7 Dias</Text>
        </TouchableOpacity>
      </View>

      {filteredEntries.length > 0 ? (
        <>
          <BarChart
            data={chartData}
            width={screenWidth - 40}
            height={220}
            yAxisLabel=""
            yAxisSuffix=""
            yAxisInterval={1}
            chartConfig={{
              backgroundColor: theme.colors.background,
              backgroundGradientFrom: theme.colors.background,
              backgroundGradientTo: theme.colors.background,
              decimalPlaces: 0,
              color: (opacity = 1) => theme.colors.chart,
              labelColor: (opacity = 1) => theme.colors.text,
              barPercentage: 0.7,
              fillShadowGradient: theme.colors.chart,
              fillShadowGradientOpacity: 1,
              style: {
                borderRadius: 16,
              },
            }}
            style={styles.chart}
            withCustomBarColorFromData
          />
          <FlatList
            data={filteredEntries}
            keyExtractor={(item) => item.date}
            renderItem={({ item }) => (
              <View style={styles.entry}>
                <Text style={{ color: theme.colors.text }}>{item.mood}</Text>
                <Text style={{ color: theme.colors.text }}>
                  {new Date(item.date).toLocaleString()}
                </Text>
                {item.reflection && (
                  <Text style={[styles.reflection, { color: theme.colors.text }]}>
                    Reflexão: {item.reflection}
                  </Text>
                )}
              </View>
            )}
          />
        </>
      ) : (
        <Text style={{ color: theme.colors.text }}>Nenhum registro encontrado.</Text>
      )}
    </View>
  );
}