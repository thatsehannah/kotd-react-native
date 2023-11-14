import { useCallback } from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_300Light_Italic,
} from '@expo-google-fonts/nunito';

import { SneakersScreen } from './src/features/sneakers/screens/sneakers.screen';

export default function App() {
  const [fontsLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
    Nunito_300Light_Italic,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SneakersScreen />
      <StatusBar style='auto' />
    </>
  );
}
