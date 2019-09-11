import React, {useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Header, Body, Title, Container, Left, Button, Right} from 'native-base';
import CustomTheme from '../../utils/Theme/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const NavigationWrapper = ({defaultTitle, constent: Content}) => {
  const [title, setTitle] = useState(defaultTitle);
  return (
    <Container>
      <Header style={styles.headerColor}>
        <StatusBar backgroundColor={CustomTheme.default} />
        <Left>
          <Button transparent>
            <Icon name="ios-cube" color={CustomTheme.primary} size={26} />
          </Button>
        </Left>
        <Body>
          <Title style={{color: CustomTheme.textColor}}>{title}</Title>
        </Body>
        <Right />
      </Header>
      <Content setTitle={setTitle} />
    </Container>
  );
};

const styles = StyleSheet.create({
  headerColor: {
    backgroundColor: CustomTheme.default,
    color: CustomTheme.default,
  },
});

export default NavigationWrapper;
