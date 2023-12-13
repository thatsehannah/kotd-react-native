import { NavigationContainer } from '@react-navigation/native';

import { AppNavigator } from './app.navigator';
import { AccountNavigator } from './account.navigator';

export const Navigation = () => {
  return (
    <NavigationContainer>
      <AccountNavigator />
    </NavigationContainer>
  );
};
