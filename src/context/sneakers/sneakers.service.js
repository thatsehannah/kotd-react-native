import camelize from 'camelize';
import mockSneakers from './mocks/sneaker.mock.json';

export const userSneakerRequest = () => {
  return new Promise((resolve, reject) => {
    const mock = mockSneakers;

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

const generateRandomDate = (from, to) => {
  return new Date(
    from.getTime() + Math.random() * (to.getTime() - from.getTime())
  );
};

export const userSneakersTransform = ({ results = [] }) => {
  const mappedResults = results.map((sneaker) => {
    const randomDate = generateRandomDate(new Date(2023, 0, 1), new Date());
    const formattedDate = formatDate(randomDate);
    return {
      ...sneaker,
      lastWearDate: formattedDate,
    };
  });

  // console.log('Mapped Results: ', mappedResults);
  return camelize(mappedResults);
};
