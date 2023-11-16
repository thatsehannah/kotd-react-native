import { useContext } from 'react';
import { Pressable } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { SneakersList, CenteredView } from './sneakers.screen.styles';
import { SneakerCard } from '../components/sneaker-card.component';

import { SneakerContext } from '../../../context/sneakers/sneakers.context';
import { useTheme } from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';

export const SneakersScreen = ({ navigation }) => {
  const { sneakers, isSneakersLoading } = useContext(SneakerContext);
  const theme = useTheme();

  if (isSneakersLoading) {
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
        <SneakersList
          data={sneakers}
          renderItem={({ item }) => {
            return (
              <>
                <Pressable onPress={() => navigation.navigate('SneakerDetail')}>
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
