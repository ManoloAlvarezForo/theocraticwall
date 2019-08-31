import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer,
} from 'react-navigation';

// Screens.
import AuthLoadingScreen from './app/components/Authentication/AuthLoadingScreen';
// import DrawerNavigator from './app/screens/Navigation/DrawerNavigator/DrawerNavigator';
import BottomTabNavigator from './app/screens/Navigation/BottomTabNavigator/BottomTabNavigator';

import LoginScreen from './app/components/Authentication/Login';

const AppStack = createStackNavigator(
  {
    Main: BottomTabNavigator,
  },
  {
    headerMode: 'none',
  },
);

const AuthStack = createStackNavigator(
  {
    Login: LoginScreen,
  },
  {
    headerMode: 'none',
  },
);

const switchNavigator = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: AppStack,
  Auth: AuthStack,
});

const Navigation = createAppContainer(switchNavigator);

export default Navigation;
