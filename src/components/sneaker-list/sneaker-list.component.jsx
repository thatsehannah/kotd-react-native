import styled from 'styled-components/native';

import { Spacer } from '../spacer/spacer.component';
import { Button, Pressable } from 'react-native';
import { SneakerCard } from '../sneaker-card/sneaker-card.component';
import { CenteredView } from '../utility/centered-view.component';
import { NoResultsText } from '../utility/no-results-text.component';

export const List = styled.FlatList.attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const SneakerList = ({
  navigation,
  sneakers,
  screen,
  cardButtonTxt,
}) => {
  return (
    <>
      {sneakers.length ? (
        <List
          data={sneakers}
          renderItem={({ item }) => {
            return (
              <>
                <Pressable
                  onPress={() => navigation.navigate(screen, { sneaker: item })}
                >
                  <SneakerCard
                    sneaker={item}
                    buttonTxt={cardButtonTxt}
                  />
                </Pressable>
                <Spacer
                  position='top'
                  size='large'
                />
              </>
            );
          }}
          keyExtractor={(item) => item.sku}
        />
      ) : (
        <CenteredView>
          <NoResultsText>Your collection is empty!</NoResultsText>
          <Button
            title='Add'
            onPress={() => navigation.navigate('AddSneaker')}
          />
        </CenteredView>
      )}
    </>
  );
};
