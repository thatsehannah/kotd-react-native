import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_300Light_Italic,
} from '@expo-google-fonts/nunito';

import { theme } from './src/infrastructure/theme';
import { UserCollectionContextProvider } from './src/context/collection/collection.context';
import { AllSneakersContextProvider } from './src/context/all-sneakers/all-sneakers.context';
import { Navigation } from './src/infrastructure/navigation';

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
        <AllSneakersContextProvider>
          <UserCollectionContextProvider>
            <Navigation />
          </UserCollectionContextProvider>
        </AllSneakersContextProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  );
}
