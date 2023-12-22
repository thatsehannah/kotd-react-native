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
import { transformNewSneakerToCollectionData } from '../../../context/utility/formatSneakerData';

export const createUserCollection = async (userId) => {
  const db = getDb();

  await setDoc(doc(db, 'collections', userId), {});
};

export const getUserCollection = async (userId) => {
  const results = [];
  const db = getDb();

  const subCollectionRef = collection(db, 'collections', userId, 'sneakers');
  const allDocs = await getDocs(subCollectionRef);
  allDocs.docs.forEach((doc) => {
    results.push(doc.data());
  });

  return results;
};

export const addSneakerToUserCollection = async (userId, sneaker) => {
  const db = getDb();
  const collectionRef = doc(db, 'collections', userId);
  const subCollectionRef = collection(collectionRef, 'sneakers');

  const formattedSneaker = transformNewSneakerToCollectionData(sneaker);

  //check if sneaker already exists
  const q = query(subCollectionRef, where('sku', '==', formattedSneaker.sku));
  getDocs(q).then((snapshot) => {
    if (snapshot.empty) {
      addDoc(subCollectionRef, formattedSneaker);
    } else {
      console.log(
        `${formattedSneaker.name} already added to ${userId} collection`
      );
    }
  });
};
