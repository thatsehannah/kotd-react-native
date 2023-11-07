import styled from 'styled-components/native';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { SneakerCard } from '../components/sneaker-card.component';

export const SneakersScreen = () => {
  const ListContainer = styled.View`
    flex: 1;
    padding: 16px;
  `;
  return (
    <>
      <SafeAreaContainer>
        <ListContainer>
          <SneakerCard />
        </ListContainer>
      </SafeAreaContainer>
    </>
  );
};
