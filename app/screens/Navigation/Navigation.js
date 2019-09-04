import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

// Screens.
import AuthLoadingScreen from '../../components/Authentication/AuthLoadingScreen';
// import DrawerNavigator from '../Navigation/DrawerNavigator/DrawerNavigator';
import BottomTabNavigator from './BottomTabNavigator/BottomTabNavigator';

import LoginScreen from '../../components/Authentication/Login';

// const AppStack = createStackNavigator({
//   Main: {
//     screen: BottomTabNavigator,
//     navigationOptions: ({navigation}) => {
//       const {routeName} = navigation.state.routes[navigation.state.index];
//       return {
//         headerTitle: routeName,
//       };
//     },
//   },
// });

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
  App: BottomTabNavigator,
  Auth: AuthStack,
});

const Navigation = createAppContainer(switchNavigator);

export default Navigation;
