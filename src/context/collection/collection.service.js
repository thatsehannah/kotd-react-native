import mockCollection from './mocks/collection.mock.json';
import { getUserCollection } from '../../infrastructure/firebase/crud/userCollection';

export const mockUserCollectionRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = mockCollection;

    if (!mock) {
      reject('not found');
    }

    resolve(mock);
  });
};

export const userCollectionRequest = (userId) => {
  return getUserCollection(userId);
};
