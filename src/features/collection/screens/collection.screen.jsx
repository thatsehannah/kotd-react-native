import { useContext } from 'react';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';

import { UserCollectionContext } from '../../../context/collection/collection.context';
import { useTheme } from 'styled-components/native';
import { SneakerList } from '../../../components/sneaker-list/sneaker-list.component';
import { LoadingIndicator } from '../../../components/loading/loading.component';

export const CollectionScreen = ({ navigation }) => {
  const { collection, isCollectionLoading } = useContext(UserCollectionContext);
  const theme = useTheme();

  if (isCollectionLoading) {
    return <LoadingIndicator color={theme.colors.brand.tertiary} />;
  }

  return (
    <>
      <SafeAreaContainer>
        <SneakerList
          navigation={navigation}
          sneakers={collection}
          screen={'CollectionSneakerDetail'}
          cardButtonTxt='Wear'
        />
      </SafeAreaContainer>
    </>
  );
};
