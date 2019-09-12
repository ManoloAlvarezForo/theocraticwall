import React from 'react';
import {Content} from 'native-base';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import ShowMap from './Maps';

const TerritoriesContent = () => {
  return <ShowMap />;
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
