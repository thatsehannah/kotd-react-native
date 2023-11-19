import styled from 'styled-components/native';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { ScrollView } from 'react-native-gesture-handler';
import { SneakerDetailsContainer } from '../../../components/sneaker-details/sneaker-details-container.component';

const ScreenContainer = styled.View`
  padding-top: 16px;
`;

export const SearchSneakerDetailScreen = ({ route }) => {
  const { sneaker } = route.params;

  const details = [
    { label: 'SKU', value: sneaker.sku },
    { label: 'Colorway', value: sneaker.colorway },
    { label: 'Retail Price', value: `$${sneaker.retailPrice}.00` },
    { label: 'Release Date', value: sneaker.releaseDate },
    { label: 'Gender', value: sneaker.gender },
  ];

  return (
    <SafeAreaContainer>
      <ScrollView>
        <ScreenContainer>
          <SneakerDetailsContainer
            sneaker={sneaker}
            detailsArray={details}
          />
        </ScreenContainer>
      </ScrollView>
    </SafeAreaContainer>
  );
};
