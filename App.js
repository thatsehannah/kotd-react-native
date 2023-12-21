import { StatusBar } from 'expo-status-bar';
import { ThemeProvider } from 'styled-components/native';

import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
  Nunito_300Light_Italic,
} from '@expo-google-fonts/nunito';

import { theme } from './src/infrastructure/theme';
import { Navigation } from './src/infrastructure/navigation';
import { AuthenticationContextProvider } from './src/context/auth/auth.context';
import { initializeFirebase } from './src/infrastructure/firebase/initializeFirebase';

initializeFirebase();

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
