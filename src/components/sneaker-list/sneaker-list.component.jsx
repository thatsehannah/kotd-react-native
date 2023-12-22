import styled from 'styled-components/native';

import { Spacer } from '../spacer/spacer.component';
import { Pressable, Text } from 'react-native';
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
  // console.log('Date added: ', sneakers[0].releaseDate);
  return (
    <>
      {sneakers.length === 0 ? (
        <CenteredView>
          <NoResultsText>Nothing in your collection just yet!</NoResultsText>
        </CenteredView>
      ) : (
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
      )}
    </>
  );
};
