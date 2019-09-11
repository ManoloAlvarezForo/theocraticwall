import React from 'react';
import {Content, Text} from 'native-base';
import NavigationWrapper from '../Navigation/NavigationWrapper';

const TerritoriesContent = () => {
  return (
    <Content padder>
      <Text>Territories under construction</Text>
    </Content>
  );
};

const Territories = () => {
  return (
    <NavigationWrapper
      defaultTitle="Territorios"
      constent={TerritoriesContent}
    />
  );
};

export default Territories;
