import { useContext } from 'react';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';

import { UserCollectionContext } from '../../../context/collection/collection.context';
import { useTheme } from 'styled-components/native';
import { SneakerList } from '../../../components/sneaker-list/sneaker-list.component';
import { LoadingIndicator } from '../../../components/loading/loading-indicator.component';
import { AuthenticationContext } from '../../../context/auth/auth.context';
import {
  TitleContainer,
  TitleText,
  UsernameText,
} from '../components/collection.styles';

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
        <TitleContainer>
          <TitleText>
            <UsernameText>{user.username}'s</UsernameText> Collection
          </TitleText>
        </TitleContainer>
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
