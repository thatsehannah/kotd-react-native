import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

export const SneakerContainer = styled.View`
  height: 450px;
  padding: 20px;
  background-color: #ededed;
  border-radius: 20px;
`;

export const SneakerName = styled.Text`
  font-family: 'Nunito_700Bold';
  font-weight: 600;
  font-size: 20px;
  padding-bottom: 6px;
`;

export const ImageContainer = styled.View`
  align-items: center;
  width: 100%;
  height: auto;
`;

export const SneakerImage = styled.Image`
  height: 300px;
  width: 300px;
`;

export const WearButton = styled(Button).attrs({
  mode: 'contained',
})`
  width: 40%;
`;
