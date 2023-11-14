import { createContext, useContext, useEffect, useState } from 'react';
import { userSneakerRequest, userSneakersTransform } from './sneakers.service';

export const SneakerContext = createContext();

export const SneakersContextProvider = ({ children }) => {
  const [sneakers, setSneakers] = useState([]);
  const [isSneakersLoading, setIsSneakersLoading] = useState(false);
  const [error, setError] = useState(null);

  //TODO: set up authcontext so that I can pass the user
  //to userSneakerRequest()
  // const {user} = useContext(AuthContext)

  const retrieveSneakers = () => {
    setIsSneakersLoading(true);
    setSneakers([]);

    setTimeout(() => {
      userSneakerRequest()
        .then(userSneakersTransform)
        .then((sneakerResults) => {
          // console.log(sneakerResults);
          setIsSneakersLoading(false);
          setSneakers(sneakerResults);
        })
        .catch((err) => {
          setIsSneakersLoading(false);
          setError(err);
        });
    }, 2000);
  };

  useEffect(() => {
    retrieveSneakers();
  }, []);

  return (
    <SneakerContext.Provider value={{ sneakers, isSneakersLoading, error }}>
      {children}
    </SneakerContext.Provider>
  );
};
