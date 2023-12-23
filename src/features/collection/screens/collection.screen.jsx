import { useContext } from 'react';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';

import { UserCollectionContext } from '../../../context/collection/collection.context';
import { useTheme } from 'styled-components/native';
import { SneakerList } from '../../../components/sneaker-list/sneaker-list.component';
import { LoadingIndicator } from '../../../components/loading/loading-indicator.component';
import { Text } from 'react-native';
import { AuthenticationContext } from '../../../context/auth/auth.context';

export const CollectionScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext);
  const { collection, isCollectionLoading } = useContext(UserCollectionContext);
  const theme = useTheme();

  if (isCollectionLoading) {
    return <LoadingIndicator color={theme.colors.brand.tertiary} />;
  }

  return (
    <>
      <SafeAreaContainer>
        <Text style={{ fontSize: 30, fontWeight: 600 }}>
          {user.username}'s Collection
        </Text>
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
