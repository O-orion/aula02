import { View, Text } from 'react-native'

import { styles } from './style'
import { MoodPicker } from '@/components/MoodPicker'

import { saveMoodEntry } from '@/utils/storage'

export default function MoodPickerScreen() {

    const handleMoodSelect = async (mood: string) => {
        await saveMoodEntry(mood);
        console.log(` Humor selecionado: ${mood}`)
    }

    return (
        <View style={styles.container} >
            <MoodPicker onMoodSelect={handleMoodSelect} />
        </View>
    )
}