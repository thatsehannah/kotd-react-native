import styled from 'styled-components/native';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { ScrollView } from 'react-native-gesture-handler';
import { SneakerDetailsContainer } from '../../../components/sneaker-details/sneaker-details-container.component';
import { formatDate } from '../../../context/utility/formatDate';

const ScreenContainer = styled.View`
  padding-top: 16px;
`;

export const SearchSneakerDetailScreen = ({ route }) => {
  const { sneaker } = route.params;

  const formattedReleaseDate = formatDate(sneaker.releaseDate);

  const details = [
    { label: 'SKU', value: sneaker.sku },
    { label: 'Colorway', value: sneaker.colorway },
    { label: 'Retail Price', value: `$${sneaker.retailPrice}.00` },
    { label: 'Release Date', value: formattedReleaseDate },
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
