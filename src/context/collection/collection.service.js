import camelize from 'camelize';

import { formatDate } from '../utility/formatDate';
import mockCollection from './mocks/collection.mock.json';

export const userCollectionRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = mockCollection;

    if (!mock) {
      reject('not found');
    }

    resolve(mock);
  });
};

export const userCollectionTransform = ({ results = [] }) => {
  const mappedResults = results.map((sneaker) => {
    const formattedLastWearDate = sneaker.lastWearDate
      ? formatDate(sneaker.lastWearDate)
      : 'Never';
    return {
      ...sneaker,
      lastWearDate: formattedLastWearDate,
      releaseDate: formatDate(sneaker.releaseDate),
      dateAdded: formatDate(sneaker.dateAdded),
      isPersonal: true,
    };
  });

  return camelize(mappedResults);
};
