import { createContext, useEffect, useState } from 'react';
import { allSneakerRequest, allSneakerTransform } from './all-sneakers.service';

export const AllSneakersContext = createContext();

export const AllSneakersContextProvider = ({ children }) => {
  const [allSneakers, setAllSneakers] = useState([]);
  const [isAllSneakersLoading, setIsAllSneakersLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveAllSneakers = () => {
    setIsAllSneakersLoading(true);
    setAllSneakers([]);

    setTimeout(() => {
      allSneakerRequest()
        .then(allSneakerTransform)
        .then((results) => {
          setIsAllSneakersLoading(false);
          setAllSneakers(results);
        })
        .catch((err) => {
          setIsAllSneakersLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveAllSneakers();
  }, []);

  return (
    <AllSneakersContext.Provider
      value={{ allSneakers, isAllSneakersLoading, error }}
    >
      {children}
    </AllSneakersContext.Provider>
  );
};
