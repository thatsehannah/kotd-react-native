import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { ScrollView, Text } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
  ScreenContainer,
  SneakerImage,
  SneakerTitle,
  ImageContainer,
  DetailContainer,
  DetailsText,
  AllDetailsContainer,
  Row,
  Label,
  TextContainer,
  ConditionContainer,
  ConditionGradeText,
  ConditionGradeLabel,
} from './sneaker-details.screen.styles';

export const SneakerDetailsScreen = ({ route }) => {
  const { sneaker } = route.params;

  return (
    <SafeAreaContainer>
      <ScrollView>
        <ScreenContainer>
          <SneakerTitle>{sneaker.name}</SneakerTitle>
          <ImageContainer>
            <SneakerImage source={{ uri: sneaker.image.original }} />
            <ConditionContainer>
              <ConditionGradeLabel>
                Condition Grade:{' '}
                <ConditionGradeText grade={sneaker.conditionGrade}>
                  {sneaker.conditionGrade}
                </ConditionGradeText>
              </ConditionGradeLabel>
            </ConditionContainer>
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
