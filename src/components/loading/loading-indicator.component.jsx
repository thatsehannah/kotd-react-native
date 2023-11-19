import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';

import { CenteredView } from '../utility/centered-view.component';

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
