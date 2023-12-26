import styled from 'styled-components/native';

export const TitleContainer = styled.View`
  padding: 16px;
`;

export const TitleText = styled.Text`
  font-size: 24px;
`;

export const UsernameText = styled(TitleText)`
  color: ${(props) => props.theme.colors.brand.secondary};
  font-weight: 600;
`;
