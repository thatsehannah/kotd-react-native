import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SneakerCollectionNavigator } from './sneaker-collection.navigator';
import { Image, Text } from 'react-native';
import { SafeAreaContainer } from '../../components/utility/safe-area.component';

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
  return (
    <Tab.Navigator>
      <Tab.Screen
        name='Collection'
        component={SneakerCollectionNavigator}
        options={{
          tabBarIcon: ({ size, color }) => {
            return (
              <Image
                source={require('../../../assets/collection-icon.png')}
                style={{ width: 100, height: 100 }}
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
              <Image
                source={require('../../../assets/rotation-icon.png')}
                style={{ width: 80, height: 80 }}
              />
            );
          },
        }}
      />
      {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
    </Tab.Navigator>
  );
};
