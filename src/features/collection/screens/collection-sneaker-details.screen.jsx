import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { ScrollView } from 'react-native';
import { SneakerDetailsContainer } from '../../../components/sneaker-details/sneaker-details-container.component';
import styled from 'styled-components/native';
import { formatDate } from '../../../context/utility/formatDate';

const ScreenContainer = styled.View`
  padding-top: 16px;
`;

export const CollectionSneakerDetailsScreen = ({ route }) => {
  const { sneaker } = route.params;

  const formattedReleaseDate = formatDate(sneaker.releaseDate);
  const formattedLastWearDate =
    sneaker.lastWearDate === '--' ? 'Never' : formatDate(sneaker.lastWearDate);
  const formattedDateAdded = formatDate(sneaker.dateAdded);

  const details = [
    { label: 'Colorway', value: sneaker.colorway },
    { label: 'Release Date', value: formattedReleaseDate },
    { label: 'Last Worn On', value: formattedLastWearDate },
    { label: 'Last Activity', value: sneaker.lastWearActivity },
    {
      label: 'Weather Last Worn In',
      value: sneaker.lastWearWeather,
    },
    { label: 'Added to Collection On', value: formattedDateAdded },
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
