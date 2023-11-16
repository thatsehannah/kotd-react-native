import { View, Text, Image } from 'react-native';

import {
  SneakerContainer,
  SneakerImage,
  SneakerName,
  ImageContainer,
  WearButtonContainer,
  WearButton,
} from './sneaker-card.styles';
import { Spacer } from '../../../components/spacer/spacer.component';

export const SneakerCard = ({ sneaker = {} }) => {
  const {
    name = 'Jordan 11 Retro Concord (2018)',
    lastWearDate = '2023-11-06',
    image = {
      original:
        'https://thesneakerdatabase.com/_next/image?url=https%3A%2F%2Fimage.goat.com%2Fattachments%2Fproduct_template_pictures%2Fimages%2F047%2F069%2F782%2Foriginal%2F351614_00.png.png&w=1080&q=75',
      thumbnail:
        'https://image.goat.com/750/attachments/product_template_pictures/images/047/069/782/original/351614_00.png.png',
    },
  } = sneaker;

  return (
    <SneakerContainer>
      <SneakerName numberOfLines={1}>{name}</SneakerName>
      <Text style={{ fontFamily: 'Nunito_300Light_Italic' }}>
        Last Worn: {lastWearDate}
      </Text>
      <Spacer
        position='top'
        size='medium'
      />
      <ImageContainer>
        <SneakerImage
          resizeMode='stretch'
          source={{ uri: image.thumbnail }}
        />
      </ImageContainer>
      <Spacer
        position='top'
        size='large'
      />
      <WearButtonContainer>
        <WearButton onPress={() => console.log(name)}>Wear</WearButton>
      </WearButtonContainer>
    </SneakerContainer>
  );
};
