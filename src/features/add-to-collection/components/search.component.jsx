import { useState, useContext, useEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

import { SearchSneakersContext } from '../../../context/search-sneakers/search-sneakers.context';

const SearchContainer = styled.View`
  padding: 16px;
`;

export const Search = () => {
  const { search, keyword, resetSearch, resetKeyword } = useContext(
    SearchSneakersContext
  );
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search by name or SKU'
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(text) => setSearchKeyword(text)}
        onClearIconPress={() => {
          resetKeyword('');
          resetSearch([]);
        }}
      />
    </SearchContainer>
  );
};
