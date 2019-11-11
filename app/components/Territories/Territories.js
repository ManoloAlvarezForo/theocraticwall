import React from 'react';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import ShowMap from './Maps';

const TerritoriesContent = () => {
  return <ShowMap />;
};

const Territories = () => {
  return (
    <NavigationWrapper
      defaultTitle="Territorios"
      content={TerritoriesContent}
    />
  );
};

export default Territories;
