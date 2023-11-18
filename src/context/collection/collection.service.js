import camelize from 'camelize';
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

const formatDate = (dateString) => {
  const months = [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ];

  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${months[monthIndex]} ${day}, ${year}`;
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
    };
  });

  return camelize(mappedResults);
};
