import React from 'react';
import {Content, Text} from 'native-base';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const HomeContent = () => {
  return (
    <Content padder>
      <Text>Bienvenido a Theocratic Wall!</Text>
    </Content>
  );
};

const Home = () => {
  return (
    <NavigationWrapper defaultTitle="Theocratic Wall" constent={HomeContent} />
  );
};

export default Home;
