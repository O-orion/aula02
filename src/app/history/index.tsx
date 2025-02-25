import { getMoodEntries, MoodEntry } from "@/utils/storage"
import { useEffect, useState } from "react"
import { View, Text, FlatList } from "react-native";

import { styles } from "./style";

export default function HistoryScreen() {
    const [entries, setEntries] = useState<MoodEntry[]>([])

    useEffect(() => {
        const loadEntries = async () => {
            const savedEntries = await getMoodEntries();
            setEntries(savedEntries);
        };
        loadEntries();
    }, [])

    return (
        <View style={styles.container} >
            <Text style={styles.title} >Histórico de Humores</Text>
            <FlatList 
            data={entries}
             keyExtractor={(item) => item.date} 
             renderItem={
                ({ item }) => (
                    <View style={styles.entry} >
                        <Text> {item.mood} </Text>
                        <Text> {new Date(item.date).toDateString()} </Text>
                    </View>
                )}
                ListEmptyComponent={<Text>Nenhum registro encontrado!</Text>}
            />

            
        </View>
    )
}