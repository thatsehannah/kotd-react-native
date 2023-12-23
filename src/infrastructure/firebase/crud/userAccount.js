import { doc, setDoc, getDoc } from 'firebase/firestore';
import { getDb } from '../getDb';

//TODO: function that adds new user to users' collection in firestore
export const createNewUser = async (user, userId) => {
  const newUser = {
    ...user,
    uid: userId,
  };
  const db = getDb();
  await setDoc(doc(db, 'users', userId), newUser);
};
//TODO: function that checks if username exists for account creation

//TODO: function to get user details
export const getUser = async (userId) => {
  const db = getDb();
  return await getDoc(doc(db, 'users', userId));
};

//TODO: function to save lastLogin
