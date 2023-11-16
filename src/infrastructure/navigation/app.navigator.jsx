import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { SneakerCollectionNavigator } from './sneaker-collection.navigator';
import { SafeAreaContainer } from '../../components/utility/safe-area.component';

import CollectionIcon from '../../../assets/collection-icon.svg';
import RotationIcon from '../../../assets/rotation-icon.svg';

const RotationScreen = () => {
  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Rotation Screen</Text>
    </SafeAreaContainer>
  );
};

const SettingsScreen = () => {
  return (
    <SafeAreaContainer
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Settings Screen</Text>
    </SafeAreaContainer>
  );
};

const Tab = createBottomTabNavigator();

export const AppNavigator = () => {
  const theme = useTheme();
  const tintColor = theme.colors.brand.quaternary;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: tintColor,
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen
        name='Collection'
        component={SneakerCollectionNavigator}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <CollectionIcon
                height={100}
                fill='currentColor'
                color={color}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name='Rotation'
        component={RotationScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <RotationIcon
                height={75}
                fill='currentColor'
                color={color}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
