import { Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from 'styled-components/native';

import { CollectionScreen } from '../../features/collection/screens/collection.screen';
import { SafeAreaContainer } from '../../components/utility/safe-area.component';

const SneakerCollectionStack = createStackNavigator();

const SneakerDetailScreen = () => {
  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Sneaker Detail Screen!</Text>
    </SafeAreaContainer>
  );
};

export const SneakerCollectionNavigator = () => {
  const theme = useTheme();

  return (
    <SneakerCollectionStack.Navigator
      screenOptions={{
        gestureEnabled: true,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <SneakerCollectionStack.Screen
        name='CollectionMain'
        component={CollectionScreen}
        options={{
          title: 'Collection',
          headerRight: () => {
            return (
              <FontAwesome
                onPress={() => console.log('Add sneaker')}
                name='plus-square-o'
                size={32}
                color={theme.colors.brand.quaternary}
                style={{ marginRight: 15 }}
              />
            );
          },
        }}
      />
      <SneakerCollectionStack.Screen
        name='SneakerDetail'
        component={SneakerDetailScreen}
        options={{
          title: 'Sneaker Detail',
        }}
      />
    </SneakerCollectionStack.Navigator>
  );
};
