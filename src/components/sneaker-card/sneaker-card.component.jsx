import { useContext } from 'react';
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
import { AuthenticationContext } from '../../context/auth/auth.context';
import { addSneakerToUserCollection } from '../../infrastructure/firebase/crud/userCollection';
import { formatDate } from '../../context/utility/formatDate';

export const SneakerCard = ({ sneaker, buttonTxt }) => {
  const { user } = useContext(AuthenticationContext);

  const buttonFunction = () => {
    if (buttonTxt === 'Add') {
      console.log('Add button pressed');
      addSneakerToUserCollection(user.uid, sneaker);
    }
    //TODO: else if (buttonTxt === 'Wear') {...}
  };

  const formattedLastWearDate =
    sneaker.lastWearDate === '--' ? 'Never' : formatDate(sneaker.lastWearDate);
  const formattedGender =
    sneaker.gender === 'Child' ? 'Grade School' : sneaker.gender;

  return (
    <SneakerContainer>
      <SneakerName numberOfLines={1}>{sneaker.name}</SneakerName>
      {sneaker.isPersonal && (
        <Text style={{ fontFamily: 'Nunito_300Light_Italic' }}>
          Last Worn: {formattedLastWearDate}
        </Text>
      )}
      {!sneaker.isPersonal && (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontFamily: 'Nunito_300Light_Italic' }}>
            SKU: {sneaker.sku}
          </Text>
          <Text style={{ fontFamily: 'Nunito_300Light_Italic' }}>
            {formattedGender}
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
        <ActionButton onPress={() => buttonFunction()}>
          {buttonTxt}
        </ActionButton>
      </ActionButtonContainer>
    </SneakerContainer>
  );
};
