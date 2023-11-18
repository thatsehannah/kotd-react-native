import styled from 'styled-components/native';

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

export const ConditionContainer = styled.View`
  position: absolute;
  background-color: #fffff4;
  z-index: 999;
  bottom: 20px;
  left: 20px;
  padding: 10px;
  border-radius: 10px;
`;

export const ConditionGradeLabel = styled.Text`
  font-size: 18px;
`;

const createConditionGradeColor = (grade) => {
  switch (grade) {
    case 'A+':
    case 'A':
    case 'A-':
      return '#5bb450';
    case 'B+':
    case 'B':
    case 'B-':
      return '#000000';
    case 'C+':
    case 'C':
    case 'C-':
      return '#9a9a9a';
    case 'D':
      return '#ff954d';
    default:
      return '#f94449';
  }
};

export const ConditionGradeText = styled.Text`
  font-size: 18px;
  color: ${({ grade }) => createConditionGradeColor(grade)};
  font-weight: 800;
`;

export const FavoriteContainer = styled.View`
  position: absolute;
  top: -20px;
  right: -8px;
  z-index: 999;
`;
