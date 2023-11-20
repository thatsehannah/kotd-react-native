import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { ScrollView } from 'react-native';
import { SneakerDetailsContainer } from '../../../components/sneaker-details/sneaker-details-container.component';
import styled from 'styled-components/native';

const ScreenContainer = styled.View`
  padding-top: 16px;
`;

export const CollectionSneakerDetailsScreen = ({ route }) => {
  const { sneaker } = route.params;

  const details = [
    { label: 'Colorway', value: sneaker.colorway },
    { label: 'Release Date', value: sneaker.releaseDate },
    { label: 'Last Worn On', value: sneaker.lastWearDate },
    { label: 'Last Activity', value: sneaker.lastWearActivity },
    { label: 'Weather Last Worn In', value: sneaker.lastWearWeather },
    { label: 'Added to Collection On', value: sneaker.dateAdded },
    { label: 'Num. of Wears', value: sneaker.timesWorn },
  ];

  return (
    <SafeAreaContainer>
      <ScrollView>
        <ScreenContainer>
          <SneakerDetailsContainer
            detailsArray={details}
            sneaker={sneaker}
          />
        </ScreenContainer>
      </ScrollView>
    </SafeAreaContainer>
  );
};
