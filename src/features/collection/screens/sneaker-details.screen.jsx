import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { Pressable, ScrollView, Text } from 'react-native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { FavoriteIconSvg } from '../../../components/favorite-icon/favorite-icon-svg';
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
  FavoriteContainer,
} from './sneaker-details.screen.styles';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const SneakerDetailsScreen = ({ route }) => {
  const { sneaker } = route.params;
  const [isFavorite, setIsFavorite] = useState(sneaker.isFavorite);

  return (
    <SafeAreaContainer>
      <ScrollView>
        <ScreenContainer>
          <SneakerTitle>{sneaker.name}</SneakerTitle>
          <ImageContainer>
            <FavoriteContainer>
              <Pressable onPress={() => setIsFavorite(!isFavorite)}>
                <FavoriteIconSvg color={isFavorite ? '#f94449' : '#fff'} />
              </Pressable>
            </FavoriteContainer>
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
