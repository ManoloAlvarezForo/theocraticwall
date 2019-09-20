import React from 'react';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {Badge, Text} from 'native-base';
import Dashboard from '../../../components/Dashboard/Dashboard';
import Events from '../../../components/Events/Events';
// import Settings from '../../../components/Settings/Settings';
import Territories from '../../../components/Territories/Territories';
import Notifications from '../../../components/Notifications/Notifications';
import CustomTheme from '../../../utils/Theme/Theme';

import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
IconSimpleLineIcons.loadFont();

const ICON_SIZE = 20;

export default createBottomTabNavigator(
  {
    Dashboard: {
      screen: Dashboard,
      title: 'Inicio',
      navigationOptions: {
        tabBarLabel: 'Dashboard',
        tabBarIcon: ({tintColor}) => (
          <IconSimpleLineIcons name="grid" color={tintColor} size={ICON_SIZE} />
        ),
      },
    },
    Events: {
      screen: Events,
      title: 'Eventos',
      navigationOptions: {
        tabBarLabel: 'Eventos',
        tabBarIcon: ({tintColor}) => (
          <IconSimpleLineIcons
            name="calendar"
            color={tintColor}
            size={ICON_SIZE}
          />
        ),
      },
    },
    Territories: {
      screen: Territories,
      title: 'Territorios',
      navigationOptions: {
        tabBarLabel: 'Territorios',
        tabBarIcon: ({tintColor}) => (
          <IconSimpleLineIcons
            name="location-pin"
            color={tintColor}
            size={ICON_SIZE}
          />
        ),
      },
    },
    // Settings: {
    //   screen: Settings,
    //   title: 'Ajustes',
    //   navigationOptions: {
    //     tabBarLabel: 'Ajustes',
    //     tabBarIcon: ({tintColor}) => (
    //       <IconSimpleLineIcons
    //         name="settings"
    //         color={tintColor}
    //         size={ICON_SIZE}
    //       />
    //     ),
    //   },
    // },
    Notifications: {
      screen: Notifications,
      title: 'Notificaciones',
      navigationOptions: {
        tabBarLabel: 'Notificaciones',
        tabBarIcon: ({tintColor}) => (
          <Badge>
            <IconSimpleLineIcons
              name="settings"
              color={tintColor}
              size={ICON_SIZE}
            />
            <Text>2</Text>
          </Badge>
        ),
      },
    },
  },
  {
    initialRouteName: 'Dashboard',
    swipeEnabled: true,
    tabBarOptions: {
      inactiveColor: CustomTheme.paper,
      activeTintColor: CustomTheme.textColor,
      labelStyle: {
        fontSize: 13,
        // fontWeight: '700',
      },
      style: {
        backgroundColor: CustomTheme.default,
      },
    },
  },
);
