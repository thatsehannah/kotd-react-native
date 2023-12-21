import { getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const getDb = () => {
  const app = getApp();

  return getFirestore(app);
};
