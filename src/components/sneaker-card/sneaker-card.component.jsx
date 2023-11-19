import { Text, View } from 'react-native';
import {
  ImageContainer,
  SneakerContainer,
  SneakerImage,
  SneakerName,
  ActionButton,
  ActionButtonContainer,
} from './sneaker-card.styles';
import { Spacer } from '../spacer/spacer.component';

export const SneakerCard = ({ sneaker, buttonFn, buttonTxt }) => {
  return (
    <SneakerContainer>
      <SneakerName numberOfLines={1}>{sneaker.name}</SneakerName>
      {sneaker.isPersonal && (
        <Text style={{ fontFamily: 'Nunito_300Light_Italic' }}>
          Last Worn: {sneaker.lastWearDate}
        </Text>
      )}
      {!sneaker.isPersonal && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontFamily: 'Nunito_300Light_Italic' }}>
            SKU: {sneaker.sku}
          </Text>
          <Text style={{ fontFamily: 'Nunito_300Light_Italic' }}>
            {sneaker.gender}
          </Text>
        </View>
      )}

      <Spacer
        position='top'
        size='medium'
      />
      <ImageContainer>
        <SneakerImage
          resizeMode='stretch'
          source={{ uri: sneaker.image.thumbnail }}
        />
      </ImageContainer>
      <Spacer
        position='top'
        size='large'
      />
      <ActionButtonContainer>
        <ActionButton onPress={() => buttonFn}>{buttonTxt}</ActionButton>
      </ActionButtonContainer>
    </SneakerContainer>
  );
};
