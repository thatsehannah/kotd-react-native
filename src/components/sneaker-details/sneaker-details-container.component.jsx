import { Fragment, useEffect, useState } from 'react';
import { chunkasize } from './utility/chunkasize';
import {
  AllDetailsContainer,
  ConditionContainer,
  ConditionGradeLabel,
  ConditionGradeText,
  DetailContainer,
  DetailsText,
  FavoriteContainer,
  ImageContainer,
  Label,
  Row,
  SneakerImage,
  SneakerTitle,
  TextContainer,
} from './sneaker-details-container.styles';
import { Spacer } from '../spacer/spacer.component';
import { Pressable } from 'react-native';
import { FavoriteIconSvg } from '../favorite-icon/favorite-icon-svg';

export const SneakerDetailsContainer = ({ detailsArray, sneaker }) => {
  const rowChunks = chunkasize(detailsArray, 2);
  const [isFavorite, setIsFavorite] = useState(sneaker.isFavorite);

  return (
    <>
      <SneakerTitle>{sneaker.name}</SneakerTitle>
      <ImageContainer>
        {sneaker.isPersonal && (
          <FavoriteContainer>
            <Pressable onPress={() => setIsFavorite(!isFavorite)}>
              <FavoriteIconSvg color={isFavorite ? '#f94449' : '#fff'} />
            </Pressable>
          </FavoriteContainer>
        )}
        <SneakerImage source={{ uri: sneaker.image.original }} />
        {sneaker.isPersonal && (
          <ConditionContainer>
            <ConditionGradeLabel>
              Condition Grade:{' '}
              <ConditionGradeText grade={sneaker.conditionGrade}>
                {sneaker.conditionGrade}
              </ConditionGradeText>
            </ConditionGradeLabel>
          </ConditionContainer>
        )}
      </ImageContainer>
      <Spacer
        position='top'
        size='xlarge'
      />
      <AllDetailsContainer>
        {rowChunks.map((detailRow, detailRowIndex) => (
          <Fragment key={detailRowIndex}>
            <Row>
              {detailRow.map((item, index) => (
                <DetailContainer key={index}>
                  <Label>{item.label}</Label>
                  <TextContainer>
                    <DetailsText isSku={item.label === 'SKU'}>
                      {item.value}
                    </DetailsText>
                  </TextContainer>
                </DetailContainer>
              ))}
            </Row>
            <Spacer
              position='top'
              size='xlarge'
            />
          </Fragment>
        ))}
      </AllDetailsContainer>
    </>
  );
};
