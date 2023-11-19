import { useContext, useEffect } from 'react';
import { useTheme } from 'styled-components/native';

import { AllSneakersContext } from '../../../context/all-sneakers/all-sneakers.context';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { Search } from '../components/search.component';
import { SneakerList } from '../../../components/sneaker-list/sneaker-list.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { LoadingIndicator } from '../../../components/loading/loading-indicator.component';

export const AddSneakerScreen = ({ navigation }) => {
  const { allSneakers, isAllSneakersLoading } = useContext(AllSneakersContext);
  const theme = useTheme();

  useEffect(() => {
    console.log('Add sneaker screen useEffect');
  }, []);

  if (isAllSneakersLoading) {
    return <LoadingIndicator color={theme.colors.brand.tertiary} />;
  }

  return (
    <>
      <SafeAreaContainer>
        <Search />
        <Spacer />
        <SneakerList
          navigation={navigation}
          sneakers={allSneakers}
          screen={''}
          cardButtonTxt='Add'
        />
      </SafeAreaContainer>
    </>
  );
};
