import { createContext, useEffect, useState } from 'react';
import {
  searchSneakerRequest,
  searchSneakerTransform,
} from './search-sneakers.service';

export const SearchSneakersContext = createContext();

export const SearchSneakersContextProvider = ({ children }) => {
  const [searchSneakers, setSearchSneakers] = useState([]);
  const [isSearchSneakersLoading, setIsSearchSneakersLoading] = useState(false);
  const [error, setError] = useState(null);
  const [keyword, setKeyword] = useState('');

  const onSearch = (searchKeyword) => {
    setIsSearchSneakersLoading(true);
    setKeyword(searchKeyword);
    setSearchSneakers([]);

    if (!searchKeyword.length) {
      return;
    }

    setTimeout(() => {
      searchSneakerRequest(searchKeyword)
        .then(searchSneakerTransform)
        .then((results) => {
          setIsSearchSneakersLoading(false);
          setSearchSneakers(results);
        })
        .catch((err) => {
          setIsSearchSneakersLoading(false);
          setError(err);
        });
    }, 2000);
  };

  return (
    <SearchSneakersContext.Provider
      value={{
        searchSneakers,
        resetSearch: setSearchSneakers,
        resetKeyword: setKeyword,
        search: onSearch,
        isSearchSneakersLoading,
        error,
        keyword,
      }}
    >
      {children}
    </SearchSneakersContext.Provider>
  );
};
