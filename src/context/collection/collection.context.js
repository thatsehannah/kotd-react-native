import { createContext, useContext, useEffect, useState } from 'react';
import { userCollectionRequest } from './collection.service';
import { AuthenticationContext } from '../auth/auth.context';

export const UserCollectionContext = createContext();

export const UserCollectionContextProvider = ({ children }) => {
  const [collection, setCollection] = useState([]);
  const [isCollectionLoading, setIsCollectionLoading] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useContext(AuthenticationContext);

  const retrieveCollection = () => {
    setIsCollectionLoading(true);
    setCollection([]);

    setTimeout(() => {
      userCollectionRequest(user.uid)
        .then((collectionResults) => {
          setIsCollectionLoading(false);
          setCollection(collectionResults);
        })
        .catch((err) => {
          setIsCollectionLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveCollection();
  }, []);

  return (
    <UserCollectionContext.Provider
      value={{ collection, isCollectionLoading, error }}
    >
      {children}
    </UserCollectionContext.Provider>
  );
};
