import React from 'react';
import {Content, Text} from 'native-base';
import NavigationWrapper from '../Navigation/NavigationWrapper';

const SettingsContent = () => {
  return (
    <Content padder>
      <Text>Settings under construction</Text>
    </Content>
  );
};

const Settings = () => {
  return (
    <NavigationWrapper defaultTitle="Ajustes" constent={SettingsContent} />
  );
};

export default Settings;
