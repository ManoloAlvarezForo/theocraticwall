/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

import Home from '../../../components/Dashboard/Home';
import Events from '../../../components/Events/Events';
import Profile from '../../../components/Profile/Profile';
import CustomTheme from '../../../utils/Theme/Theme';

import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      title: 'Inicio',
      navigationOptions: {
        tabBarLabel: 'Inicio',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={22} />
        ),
      },
    },
    Events: {
      screen: Events,
      title: 'Eventos',
      navigationOptions: {
        tabBarLabel: 'Eventos',
        tabBarIcon: ({tintColor}) => (
          <Icon name="calendar" color={tintColor} size={22} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      title: 'Perfil de Usuario',
      navigationOptions: {
        tabBarLabel: 'Perfil',
        tabBarIcon: ({tintColor}) => (
          <Icon name="user" color={tintColor} size={22} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeTintColor: CustomTheme.textColor,
    inactiveColor: CustomTheme.default,
    barStyle: {backgroundColor: CustomTheme.default},
    shifting: true,
  },
);
