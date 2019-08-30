import HomeScreen from '../../../components/Home/Home';
import SideBar from '../Sidebar/Sidebar';
import {createDrawerNavigator} from 'react-navigation';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const DrawerNavigator = createDrawerNavigator(
  {
    Inicio: {screen: HomeScreen},
  },
  {
    initialRouteName: 'Inicio',
    drawerPosition: 'left',
    contentComponent: SideBar,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
    drawerWidth: width - 40,
    contentOptions: {
      activeBackgroundColor: '#FF006E',
      activeTintColor: 'white',
      inactiveTintColor: 'gray',
      itemsContainerStyle: {
        justifyContent: 'center',
        width: width,
      },
    },
  },
);

export default DrawerNavigator;
