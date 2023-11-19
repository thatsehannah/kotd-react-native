import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';

const CenteredView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingIndicator = ({ color }) => {
  return (
    <CenteredView>
      <ActivityIndicator
        size={50}
        animating
        color={color}
      />
    </CenteredView>
  );
};
