import { useState, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { loginRequest, registerRequest } from './auth.service';
import { createUserCollection } from '../../infrastructure/firebase/crud/userCollection';
import { createNewUser } from '../../infrastructure/firebase/crud/userAccount';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();

  if (auth) {
    // onAuthStateChanged(auth, (usr) => {
    //   if (usr) {
    //     setUser(usr);
    //   }
    //   setIsLoading(false);
    // });
  }

  //TODO: change setUser to grab user from users collection in firestore
  const onLogin = (email, password) => {
    setError(null);
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((data) => {
        setUser(data.user);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onRegister = (newUser, password) => {
    console.log(newUser);
    setError(null);
    setIsLoading(true);
    registerRequest(auth, newUser.email, password)
      .then((data) => {
        setUser(data.user);
        createNewUser(newUser, data.user.uid);
        createUserCollection(data.user.uid);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(e.toString());
      });
  };

  const onLogout = () => {
    setUser(null);
    auth.signOut();
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onRegister,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
