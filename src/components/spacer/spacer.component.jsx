import styled, { useTheme } from 'styled-components/native';

const sizeVariant = {
  small: '4px',
  medium: '8px',
  large: '16px',
};

const positionVariant = {
  top: 'margin-top',
  left: 'margin-left',
  bottom: 'margin-bottom',
  right: 'margin-right',
};

//builds the appropriate css property based off of the props position and size
//in the videos, they're wrapping the Spacer around the element they want to
//enforce spacing. I'm not doing that; I'm using it similarily how it a Spacer
//View is used in iOS
const getVariant = (position, size) => {
  const property = positionVariant[position];
  const spacing = sizeVariant[size];
  return `${property}:${spacing}`;
};

const SpacerView = styled.View`
  ${({ variant }) => variant}
`;

export const Spacer = ({ position, size }) => {
  const variant = getVariant(position, size);

  return <SpacerView variant={variant} />;
};

Spacer.defaultProps = {
  position: 'top',
  size: 'small',
};
