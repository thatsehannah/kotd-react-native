import { Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from 'styled-components/native';

import { CollectionScreen } from '../../features/collection/screens/collection.screen';
import { SafeAreaContainer } from '../../components/utility/safe-area.component';
import { SneakerDetailsScreen } from '../../features/collection/screens/sneaker-details.screen';

const SneakerCollectionStack = createStackNavigator();

export const SneakerCollectionNavigator = () => {
  const theme = useTheme();

  return (
    <SneakerCollectionStack.Navigator>
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
        component={SneakerDetailsScreen}
        options={{
          title: 'Details',
        }}
      />
    </SneakerCollectionStack.Navigator>
  );
};
