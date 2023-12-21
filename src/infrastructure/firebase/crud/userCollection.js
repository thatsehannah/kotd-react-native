import { useState, useContext } from 'react';
import {
  doc,
  collection,
  setDoc,
  getDoc,
  addDoc,
  getDocs,
  where,
  query,
} from 'firebase/firestore';
import { getDb } from '../getDb';

export const createUserCollection = async (userId) => {
  const db = getDb();

  await setDoc(doc(db, 'collections', userId), {});
};

export const getUserCollection = async (userId) => {
  const results = [];
  const db = getDb();

  const subCollectionRef = collection(db, 'collections', userId, 'sneakers');
  const blah = await getDocs(subCollectionRef);
  blah.docs.forEach((doc) => {
    results.push(doc.data());
  });

  return results;
};

export const addSneakerToUserCollection = async (userId, sneaker) => {
  const db = getDb();
  const collectionRef = doc(db, 'collections', userId);
  const subCollectionRef = collection(collectionRef, 'sneakers');

  //check if sneaker already exists
  const q = query(subCollectionRef, where('sku', '==', sneaker.sku));
  getDocs(q).then((snapshot) => {
    if (snapshot.empty) {
      addDoc(subCollectionRef, sneaker);
    } else {
      console.log(`${sneaker.name} already added to ${userId} collection`);
    }
  });
};
