import { Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

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
  return (
    <SneakerCollectionStack.Navigator screenOptions={{ headerShown: false }}>
      <SneakerCollectionStack.Screen
        name='CollectionMain'
        component={CollectionScreen}
      />
      <SneakerCollectionStack.Screen
        name='SneakerDetail'
        component={SneakerDetailScreen}
      />
    </SneakerCollectionStack.Navigator>
  );
};
