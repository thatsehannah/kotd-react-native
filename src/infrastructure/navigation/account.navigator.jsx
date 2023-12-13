import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../../features/account/screens/login.screen';
import { RegisterScreen } from '../../features/account/screens/register.screen';

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name='Login'
        component={LoginScreen}
      />
      <Stack.Screen
        name='Register'
        component={RegisterScreen}
      />
    </Stack.Navigator>
  );
};