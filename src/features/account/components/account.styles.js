import styled from 'styled-components/native';
import { Button, TextInput } from 'react-native-paper';
import { colors } from '../../../infrastructure/theme/colors';

export const AuthBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/erik-mclean-QusP3UCvP5Y-unsplash.jpg'),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const BackgroundCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const InputBackground = styled.View`
  background-color: rgba(255, 255, 255, 0.9);
  padding: 16px;
  border-radius: 15px;
`;

export const Title = styled.Text`
  font-size: 28px;
  font-weight: 600;
`;

export const AuthTextInput = styled(TextInput).attrs({
  activeOutlineColor: colors.brand.primary,
  mode: 'outlined',
  autoCapitalize: 'none',
  outlineStyle: {
    borderRadius: 16,
    borderWidth: 0.5,
  },
})`
  width: 320px;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.secondary,
  mode: 'contained',
  labelStyle: {
    fontFamily: 'Nunito_700Bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    lineHeight: -1,
  },
})`
  padding: 10px;
`;

export const AltAuthOptionContainer = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const AltAuthOptionText = styled.Text`
  font-size: 18px;
`;
