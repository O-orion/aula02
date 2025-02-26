import AsyncStorage from '@react-native-async-storage/async-storage'

export type MoodEntry = {
    mood: string;
    date: string;
    reflection?: string;
}

const STORAGE_KEY = '@MoodJournal:entries';

export const saveMoodEntry = async (mood: string, reflection?: string): Promise<void> => {
    try {
        const newEntry: MoodEntry = {
            mood,
            date: new Date().toDateString(),
            reflection,
        };

        const existingEntries = await getMoodEntries();
        const updateEntries = [...existingEntries, newEntry];
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(updateEntries));
    } catch (error) {
        console.error('Erro ao salvar entrada: ', error)
    }
};

export const getMoodEntries = async (): Promise<MoodEntry[]> => {
    try {
        const entries = await AsyncStorage.getItem(STORAGE_KEY);
        return entries ? JSON.parse(entries) : []
    } catch (error) {
        console.error("Erro ao recuperar entrada: ", error);
        return [];
    }
}
