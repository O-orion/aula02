import { View, Text, TextInput, TouchableOpacity } from 'react-native'

import { styles } from './style'
import { themes } from '@/styles/theme'
import { MoodPicker } from '@/components/MoodPicker'
import Animated, { FadeIn } from 'react-native-reanimated';
import { saveMoodEntry } from '@/utils/storage'
import { useState } from 'react'


export default function MoodPickerScreen() {


    const [ selectedMood, setSelectedMood ] = useState<string | null>(null);
    const [ reflection, setReflection ] = useState('');

    const handleMoodSelect = async (mood: string) => {
        setSelectedMood(mood);
        console.log(` Humor selecionado: ${mood}`)
    }

    const handleSave = async () => {
        if (selectedMood) {
            await saveMoodEntry(selectedMood, reflection || undefined);
            setSelectedMood(null);
            setReflection('');
        }
    }

    return (
        <View style={[styles.container, { backgroundColor: themes.dark.colors.background }]} >
            <Animated.View entering={FadeIn.duration(1000)} >

                <MoodPicker onMoodSelect={handleMoodSelect} />
                {
                    selectedMood && (
                        <>
                            <TextInput 
                            style={[ styles.input, { borderColor: themes.dark.colors.border, color: themes.dark.colors.text } ]}
                            placeholder='O que aconteceu hoje ? '
                            placeholderTextColor={themes.dark.colors.text + '80'}
                            value={reflection}
                            onChangeText={setReflection}
                            multiline
                            />
                            <TouchableOpacity style={[styles.saveButton, { backgroundColor: themes.dark.colors.primary }]} onPress={handleSave} >
                                <Text style={styles.saveButtonText} >Salvar</Text>
                            </TouchableOpacity>
                        </>
                    )
                }
            </Animated.View>
        </View>
    )
}