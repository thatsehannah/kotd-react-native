import { useContext, useEffect } from 'react';
import { Text } from 'react-native';
import styled, { useTheme } from 'styled-components/native';

import { SearchSneakersContext } from '../../../context/search-sneakers/search-sneakers.context';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { Search } from '../components/search.component';
import { SneakerList } from '../../../components/sneaker-list/sneaker-list.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { LoadingIndicator } from '../../../components/loading/loading-indicator.component';
import { CenteredView } from '../../../components/utility/centered-view.component';
import { NoResultsText } from '../../../components/utility/no-results-text.component';

export const AddSneakerScreen = ({ navigation }) => {
  const theme = useTheme();
  const { searchSneakers, isSearchSneakersLoading, resetSearch, resetKeyword } =
    useContext(SearchSneakersContext);

  if (isSearchSneakersLoading) {
    return <LoadingIndicator color={theme.colors.brand.tertiary} />;
  }

  useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', (e) => {
      resetSearch([]);
      resetKeyword('');
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <>
      <SafeAreaContainer>
        <Search />
        <Spacer />
        {searchSneakers.length ? (
          <SneakerList
            navigation={navigation}
            sneakers={searchSneakers}
            screen={'SearchSneakerDetail'}
            cardButtonTxt='Add'
          />
        ) : (
          <CenteredView>
            <NoResultsText>Results will display here!</NoResultsText>
          </CenteredView>
        )}
      </SafeAreaContainer>
    </>
  );
};
