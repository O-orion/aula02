import { View, Text } from "react-native";
import { styles } from "./styles";
import { TouchableOpacity } from "react-native";

type Mood = {
    emoji: string,
    label: string
}

type MoodPickerProps = {
    onMoodSelect: (mood: string) => void;
}

const moods: Mood[] = [
    { emoji: '😊', label: 'Feliz' },
    { emoji: '😢', label: 'Triste' },
    { emoji: '😐', label: 'Neutro' },
]

export function MoodPicker({ onMoodSelect }: MoodPickerProps) {
    return(
        <View style={styles.container}>
            <Text style={styles.title} > Como você está hoje ? </Text>
            <View style={styles.moodList} >
                {
                    moods.map((mood) => (
                        <TouchableOpacity key={mood.label} style={styles.moodButton} onPress={() => onMoodSelect(mood.label)} >
                            <Text style={styles.emoji} >{mood.emoji}</Text>
                            <Text style={styles.label} >{mood.label}</Text>
                        </TouchableOpacity>
                    ))
                }
            </View>
        </View>
    )
}