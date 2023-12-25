import {
  doc,
  setDoc,
  getDoc,
  query,
  where,
  getDocs,
  collection,
} from 'firebase/firestore';
import { getDb } from '../getDb';

//TODO: function that adds new user to users' collection in firestore
export const createNewUser = async (user, userId) => {
  const newUser = {
    ...user,
    uid: userId,
  };
  const db = getDb();

  try {
    await setDoc(doc(db, 'users', userId), newUser);
    return newUser;
  } catch (error) {
    console.log('Error creating user', error);
    return error;
  }
};

//TODO: function that checks if username exists for account creation
export const doesUsernameExist = async (username) => {
  const db = getDb();
  const usersRef = collection(db, 'users');
  const q = query(usersRef, where('username', '==', username));

  try {
    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return false;
    } else {
      return true;
    }
  } catch (error) {
    console.log('Error checking username: ', error);
    throw error;
  }
};

//TODO: function to get user details
export const getUser = async (userId) => {
  const db = getDb();

  try {
    const user = await getDoc(doc(db, 'users', userId));
    return user.data();
  } catch (error) {
    console.log('Error getting user: ', error);
    throw error;
  }
};

//TODO: function to save lastLogin
