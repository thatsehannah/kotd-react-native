import styled from 'styled-components/native';

import { Spacer } from '../spacer/spacer.component';
import { Pressable, Text } from 'react-native';
import { SneakerCard } from '../sneaker-card/sneaker-card.component';

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
    </>
  );
};
