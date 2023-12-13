import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from './firebaseConfig';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_300Light_Italic,
} from '@expo-google-fonts/nunito';

import { theme } from './src/infrastructure/theme';
import { UserCollectionContextProvider } from './src/context/collection/collection.context';
import { SearchSneakersContextProvider } from './src/context/search-sneakers/search-sneakers.context';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/context/auth/auth.context';

initializeApp(firebaseConfig);

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
        <AuthenticationContextProvider>
          <Navigation />
        </AuthenticationContextProvider>
      </ThemeProvider>
      <StatusBar style='auto' />
    </>
  );
}
