import React from 'react';
import {Content, Text} from 'native-base';
import NavigationWrapper from '../Navigation/NavigationWrapper';

const NotificationsContent = () => {
  return (
    <Content padder>
      <Text>Notifications under construction</Text>
    </Content>
  );
};

const Notifications = () => {
  return (
    <NavigationWrapper
      defaultTitle="Notificaciones"
      content={NotificationsContent}
    />
  );
};

export default Notifications;
