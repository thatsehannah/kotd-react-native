import { Text } from 'react-native';
import {
  createStackNavigator,
  TransitionPresets,
} from '@react-navigation/stack';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useTheme } from 'styled-components/native';

import { CollectionScreen } from '../../features/collection/screens/collection.screen';
import { SneakerDetailsScreen } from '../../features/collection/screens/sneaker-details.screen';
import { AddSneakerScreen } from '../../features/add-to-collection/screens/add-sneaker.screen';

const SneakerCollectionStack = createStackNavigator();

export const SneakerCollectionNavigator = ({ navigation }) => {
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
                onPress={() => navigation.navigate('AddSneaker')}
                name='plus-square-o'
                size={32}
                color={theme.colors.brand.secondary}
                style={{ marginRight: 15 }}
              />
            );
          },
        }}
      />
      <SneakerCollectionStack.Screen
        name='CollectionSneakerDetail'
        component={SneakerDetailsScreen}
        options={{
          title: 'Details',
        }}
      />
      <SneakerCollectionStack.Screen
        name='AddSneaker'
        component={AddSneakerScreen}
        options={{
          title: 'Add',
          gestureEnabled: true, //need to include this for Android (defaults to false)
          ...TransitionPresets.ModalPresentationIOS,
        }}
      />
    </SneakerCollectionStack.Navigator>
  );
};
