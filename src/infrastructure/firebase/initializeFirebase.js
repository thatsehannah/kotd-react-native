import { initializeApp } from 'firebase/app';
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { firebaseConfig } from '../../../firebaseConfig';

export const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);

  initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
  });
};
