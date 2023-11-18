import { useContext } from 'react';
import { Pressable } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { CollectionList, CenteredView } from './collection.screen.styles';
import { SneakerCard } from '../components/sneaker-card.component';

import { UserCollectionContext } from '../../../context/collection/collection.context';
import { useTheme } from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';

export const CollectionScreen = ({ navigation }) => {
  const { collection, isCollectionLoading } = useContext(UserCollectionContext);
  const theme = useTheme();

  if (isCollectionLoading) {
    return (
      <CenteredView>
        <ActivityIndicator
          size={50}
          animating
          color={theme.colors.brand.tertiary}
        />
      </CenteredView>
    );
  }

  return (
    <>
      <SafeAreaContainer>
        <CollectionList
          data={collection}
          renderItem={({ item }) => {
            return (
              <>
                <Pressable
                  onPress={() =>
                    navigation.navigate('SneakerDetail', { sneaker: item })
                  }
                >
                  <SneakerCard sneaker={item} />
                </Pressable>
                <Spacer
                  position='top'
                  size='large'
                />
              </>
            );
          }}
          keyExtractor={(item) => item.name}
        />
      </SafeAreaContainer>
    </>
  );
};
