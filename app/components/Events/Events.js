import React from 'react';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import Agenda from './Agenda';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();
const now = moment();

const EventsContent = ({setTitle}) => {
  return (
    <Agenda setMonthTitle={setTitle} currentDate={now.format('YYYY-MM-DD')} />
  );
};

const Events = () => {
  return (
    <NavigationWrapper
      defaultTitle={now.format('MMMM YYYY')}
      constent={EventsContent}
    />
  );
};

export default Events;
