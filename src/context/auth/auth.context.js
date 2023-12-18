import { useState, createContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import { loginRequest, registerRequest } from './auth.service';

export const AuthenticationContext = createContext();

export const AuthenticationContextProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const auth = getAuth();

  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      setUser(usr);
    }

    setIsLoading(false);
  });

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

  const onRegister = (email, password, repeatedPassword) => {
    if (password != repeatedPassword) {
      setIsLoading(false);
      setError('Error: Passwords do not match');
      return;
    }

    setError(null);
    setIsLoading(true);
    registerRequest(auth, email, password)
      .then((data) => {
        setUser(data.user);
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
