import React, {useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Header, Body, Title, Container, Left, Button, Right} from 'native-base';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const NavigationWrapper = ({defaultTitle, constent: Content}) => {
  const [title, setTitle] = useState(defaultTitle);
  return (
    <Container>
      <Header style={styles.headerColor}>
        <StatusBar backgroundColor="#313640" />
        <Left>
          <Button transparent>
            <Icon name="ios-cube" color="#e91e63" size={26} />
          </Button>
        </Left>
        <Body>
          <Title>{title}</Title>
        </Body>
        <Right />
      </Header>
      <Content setTitle={setTitle} />
    </Container>
  );
};

const styles = StyleSheet.create({
  headerColor: {
    backgroundColor: '#313640',
    color: 'white',
  },
});

export default NavigationWrapper;
