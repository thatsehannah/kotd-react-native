import { useTheme } from 'styled-components';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';

import { SneakerCollectionNavigator } from './sneaker-collection.navigator';
import { SafeAreaContainer } from '../../components/utility/safe-area.component';

import { CollectionSvgIcon } from './tab-icons/collection-icon-svg';
import { RotationSvgIcon } from './tab-icons/rotation-icon-svg';

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
  const tintColor = theme.colors.brand.secondary;

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
            return <CollectionSvgIcon color={color} />;
          },
        }}
      />
      <Tab.Screen
        name='Rotation'
        component={RotationScreen}
        options={{
          tabBarIcon: ({ size, color }) => {
            return <RotationSvgIcon color={color} />;
          },
        }}
      />
      {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
