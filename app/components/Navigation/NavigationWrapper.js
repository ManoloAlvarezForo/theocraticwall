import React, {useState} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Header, Body, Title, Container, Left, Button, Right} from 'native-base';
import CustomTheme from '../../utils/Theme/Theme';
import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const NavigationWrapper = ({
  defaultTitle,
  content: Content,
  right: RightContent,
}) => {
  const [title, setTitle] = useState(defaultTitle);
  return (
    <Container>
      <Header style={styles.headerColor}>
        <StatusBar backgroundColor={CustomTheme.secondaryDefault} />
        <Left>
          <Button transparent>
            <Icon name="ios-cube" color={CustomTheme.primary} size={26} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.bodyText}>{title}</Title>
        </Body>
        <Right>{RightContent !== undefined && <RightContent />}</Right>
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
  bodyContainer: {
    flex: 3,
  },
  bodyText: {color: CustomTheme.textColor},
});

export default NavigationWrapper;
