import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function RootLayout() {
  return (
    <>
      <StatusBar style="auto" />
      <Stack >
        <Stack.Screen name="index" options={{ title: 'MoodJournal' }}  />
        <Stack.Screen name="mood-picker" options={{ title: 'Seu Humor' }}  />
        <Stack.Screen name="history" options={{ title: 'Histórico' }}  />
      </Stack>
    </>
  );
}
