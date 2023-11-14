import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';

import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_300Light_Italic,
} from '@expo-google-fonts/nunito';

import { SneakersScreen } from './src/features/sneakers/screens/sneakers.screen';
import { theme } from './src/infrastructure/theme';
import { SneakersContextProvider } from './src/context/sneakers/sneakers.context';

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
      <ThemeProvider theme={theme}>
        <SneakersContextProvider>
          <SneakersScreen />
          <StatusBar style='auto' />
        </SneakersContextProvider>
      </ThemeProvider>
    </>
  );
}
