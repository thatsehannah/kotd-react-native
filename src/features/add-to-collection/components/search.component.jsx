import { useEffect, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';

const SearchContainer = styled.View`
  padding: 16px;
`;

export const Search = () => {
  const [searchKeyword, setSearchKeyword] = useState('');

  return (
    <SearchContainer>
      <Searchbar
        placeholder='Search for a sneaker to add'
        value={searchKeyword}
        onSubmitEditing={() => {
          console.log(searchKeyword);
        }}
        onChangeText={(text) => setSearchKeyword(text)}
      />
    </SearchContainer>
  );
};
