import { useContext } from 'react';
import { ActivityIndicator } from 'react-native-paper';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { SneakersList, CenteredView } from './sneakers.screen.styles';
import { SneakerCard } from '../components/sneaker-card.component';

import { SneakerContext } from '../../../context/sneakers/sneakers.context';
import { useTheme } from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';

export const SneakersScreen = () => {
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
                <SneakerCard sneaker={item} />
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
