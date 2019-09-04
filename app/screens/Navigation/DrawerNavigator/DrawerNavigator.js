import Home from '../../../components/Home/Home';
import Events from '../../../components/Events/Events';
import SideBar from '../Sidebar/Sidebar';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {Dimensions} from 'react-native';

const {width} = Dimensions.get('window');

const DrawerNavigator = createDrawerNavigator(
  {
    Inicio: {screen: Home},
    Eventos: {screen: Events},
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
