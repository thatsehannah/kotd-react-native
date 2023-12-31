import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components/native';

export const SafeAreaContainer = styled.SafeAreaView`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
