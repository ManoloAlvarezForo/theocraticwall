/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';
import Home from '../../../components/Home/Home';
import Events from '../../../components/Events/Events';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();

export default createMaterialBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Inicio',
        tabBarIcon: ({tintColor}) => (
          <Icon name="home" color={tintColor} size={22} />
        ),
      },
    },
    Events: {
      screen: Events,
      navigationOptions: {
        tabBarLabel: 'Eventos',
        tabBarIcon: ({tintColor}) => (
          <Icon name="calendar" color={tintColor} size={22} />
        ),
      },
    },
  },
  {
    initialRouteName: 'Home',
    activeColor: 'orange',
    inactiveColor: '#3e2465',
    barStyle: {backgroundColor: 'white'},
  },
);
