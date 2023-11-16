import styled from 'styled-components/native';
import { Button } from 'react-native-paper';

import { colors } from '../../../infrastructure/theme/colors';

export const SneakerContainer = styled.View`
  height: 460px;
  background-color: #f5f5f4;
  border-radius: 20px;
  padding: 10px 20px;
  box-shadow: 1px 1px 5px gray;
  elevation: 5;
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
  height: 300px;
`;

export const SneakerImage = styled.Image`
  height: 280px;
  width: 280px;
  overflow: hidden;
`;

export const WearButtonContainer = styled.View`
  align-items: flex-start;
`;

export const WearButton = styled(Button).attrs({
  mode: 'contained',
  buttonColor: colors.brand.tertiary,
  contentStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 54,
    width: 120,
    paddingVertical: 10,
  },
  labelStyle: {
    fontFamily: 'Nunito_700Bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
})`
  border-radius: 40px;
`;
