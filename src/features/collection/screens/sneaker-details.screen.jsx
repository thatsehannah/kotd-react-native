import styled from 'styled-components/native';

import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { ScrollView, Text } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';

export const ScreenContainer = styled.View`
  padding-top: 16px;
`;

export const SneakerTitle = styled.Text`
  font-size: 24px;
  margin: 0 20px;
  font-weight: 600;
`;

export const ImageContainer = styled.View`
  align-items: center;
  width: 100%;
  height: 400px;
  background-color: #f5f5f4;
`;

export const SneakerImage = styled.Image`
  height: 380px;
  width: 380px;
`;

export const AllDetailsContainer = styled.View`
  background-color: ${(props) => props.theme.colors.brand.tertiary};
  padding: 24px 16px;
  border-radius: 20px;
  box-shadow: 1px 1px 5px gray;
  margin: 12px;
  elevation: 5;
`;

export const DetailContainer = styled.View`
  width: 48%;
`;

export const Label = styled.Text`
  margin-bottom: 10px;
  color: white;
  font-weight: 600;
`;

export const TextContainer = styled.View`
  background-color: #f5f5f4;
  border-radius: 8px;
  padding: 8px;
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const DetailsText = styled.Text`
  font-weight: 800;
  font-size: 18px;
  text-transform: capitalize;
`;

export const SneakerDetailsScreen = ({ route }) => {
  const { sneaker } = route.params;

  return (
    <SafeAreaContainer>
      <ScrollView>
        <ScreenContainer>
          <SneakerTitle>{sneaker.name}</SneakerTitle>

          <ImageContainer>
            <SneakerImage source={{ uri: sneaker.image.original }} />
          </ImageContainer>
          <Spacer
            position='top'
            size='xlarge'
          />
          <AllDetailsContainer>
            <Row>
              <DetailContainer>
                <Label>Colorway</Label>
                <TextContainer>
                  <DetailsText>{sneaker.colorway}</DetailsText>
                </TextContainer>
              </DetailContainer>

              <DetailContainer>
                <Label>Release Date</Label>
                <TextContainer>
                  <DetailsText>{sneaker.releaseDate}</DetailsText>
                </TextContainer>
              </DetailContainer>
            </Row>
            <Spacer
              position='top'
              size='xlarge'
            />
            <Row>
              <DetailContainer>
                <Label>Last Worn</Label>
                <TextContainer>
                  <DetailsText>
                    {sneaker.lastWearDate ? sneaker.lastWearDate : '---'}
                  </DetailsText>
                </TextContainer>
              </DetailContainer>

              <DetailContainer>
                <Label>Last Activity</Label>
                <TextContainer>
                  <DetailsText>
                    {sneaker.lastWearActivity
                      ? sneaker.lastWearActivity
                      : '---'}
                  </DetailsText>
                </TextContainer>
              </DetailContainer>
            </Row>
            <Spacer
              position='top'
              size='xlarge'
            />
            <Row>
              <DetailContainer>
                <Label>Weather Last Worn In</Label>
                <TextContainer>
                  <DetailsText>
                    {sneaker.lastWearWeather ? sneaker.lastWearWeather : '---'}
                  </DetailsText>
                </TextContainer>
              </DetailContainer>

              <DetailContainer>
                <Label>Num. of Wears</Label>
                <TextContainer>
                  <DetailsText>{sneaker.timesWorn}</DetailsText>
                </TextContainer>
              </DetailContainer>
            </Row>
          </AllDetailsContainer>
        </ScreenContainer>
      </ScrollView>
    </SafeAreaContainer>
  );
};
