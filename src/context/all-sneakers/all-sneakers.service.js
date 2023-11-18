import camelize from 'camelize';
import allSneakers from './mocks/all-sneakers.mock.json';

export const allSneakerRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = allSneakers;

    if (!mock) {
      reject('not found');
    }

    resolve(mock);
  });
};

export const allSneakerTransform = ({ results = [] }) => {
  const mappedResults = results.map((sneaker) => {
    return {
      ...sneaker,
      isFavorite: false,
    };
  });

  return camelize(mappedResults);
};
