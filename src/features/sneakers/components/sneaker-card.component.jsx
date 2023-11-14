import { View, Text, Image } from 'react-native';

import {
  SneakerContainer,
  SneakerImage,
  SneakerName,
  ImageContainer,
  WearButtonContainer,
  WearButton,
} from './sneaker-card.styles';

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

  const formatDate = (dateString) => {
    const months = [
      'Jan.',
      'Feb.',
      'Mar.',
      'Apr.',
      'May',
      'Jun.',
      'Jul.',
      'Aug.',
      'Sep.',
      'Oct.',
      'Nov.',
      'Dec.',
    ];

    const date = new Date(dateString);
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();

    return `${months[monthIndex]} ${day}, ${year}`;
  };

  return (
    <SneakerContainer>
      <SneakerName>{name}</SneakerName>
      <Text style={{ fontFamily: 'Nunito_300Light_Italic' }}>
        Last Worn: {formatDate(lastWearDate)}
      </Text>
      <ImageContainer>
        <SneakerImage
          resizeMode='stretch'
          source={{ uri: image.thumbnail }}
        />
      </ImageContainer>
      <WearButtonContainer>
        <WearButton>Wear</WearButton>
      </WearButtonContainer>
    </SneakerContainer>
  );
};
