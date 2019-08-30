import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Home from '../../../components/Home/Home';

export default createMaterialBottomTabNavigator(
  {
    Inicio: {screen: Home},
  },
  {
    initialRouteName: 'Inicio',
    activeColor: '#f0edf6',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: '#694fad'},
  },
);
