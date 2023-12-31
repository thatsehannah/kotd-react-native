import camelize from 'camelize';

import { formatDate } from '../utility/formatDate';
import allSneakers from './mocks/all-sneakers.mock.json';

export const searchSneakerRequest = (searchTerm) => {
  return new Promise((resolve, reject) => {
    const mock = allSneakers.results.filter(
      (sneaker) =>
        sneaker.sku === searchTerm || sneaker.name.includes(searchTerm)
    );

    if (!mock) {
      reject('not found');
    }

    resolve(mock);
  });
};

export const searchSneakerTransform = (data) => {
  const mappedResults = data.map((sneaker) => {
    return {
      ...sneaker,
      isPersonal: false,
    };
  });

  return camelize(mappedResults);
};
