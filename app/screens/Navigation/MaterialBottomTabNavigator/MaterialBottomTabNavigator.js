/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Recent from '../../../components/Recent/Recent';
import Events from '../../../components/Events/Events';
// import Settings from '../../../components/Settings/Settings';
import Territories from '../../../components/Territories/Territories';
import Notifications from '../../../components/Notifications/Notifications';
import CustomTheme from '../../../utils/Theme/Theme';
import IconNotification from '../../../components/Notifications/IconNotification';

import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import {Root} from 'native-base';
import {createAppContainer} from 'react-navigation';
IconSimpleLineIcons.loadFont();

const ICON_SIZE = 24;

const MaterialNavigator = createMaterialBottomTabNavigator(
  {
    Recent: {
      screen: Recent,
      title: 'Inicio',
      navigationOptions: {
        tabBarLabel: 'Proximos',
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
          <IconNotification
            iconName="bell"
            color={tintColor}
            size={ICON_SIZE}
          />
        ),
      },
    },
  },
  {
    initialRouteName: 'Recent',
    activeTintColor: CustomTheme.textBlackColor,
    inactiveColor: '#737272',
    barStyle: {backgroundColor: CustomTheme.secondaryMain},
    shifting: true,
  },
);

const Material = createAppContainer(MaterialNavigator);
const MaterialNavigatorRoot = () => {
  return (
    <Root>
      <Material />
    </Root>
  );
};
export default MaterialNavigatorRoot;
