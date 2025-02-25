import { View, Text, StyleSheet, Alert } from 'react-native';
import { Button } from '../components/Button';
import { styles } from '../styles/styles';
import { Link } from 'expo-router';

export default function Index() {

    function handleMessage() {
        console.log('Testando')
        return Alert.alert('Olá')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title} >Bem-Vindo ao MoodJournal!</Text>
            <Link href="./mood-picker" style={styles.button} >
                <Text>Registrar Humor</Text>
            </Link>
            <Link href="./history">
                <Text>Ver Histórico</Text>
            </Link>
        </View>
    );
}

