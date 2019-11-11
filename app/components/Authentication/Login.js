/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {LOGIN} from './AuthenticationMutations';
import {useMutation} from '@apollo/react-hooks';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {Form, Button, Container, Text as TextBase} from 'native-base';

import {saveUserInformation} from '../../utils/asyncStorageHandler';
import CustomInput from '../Input/CustomInput/CustomInput';
import Icon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
import CustomTheme from '../../utils/Theme/Theme';

Icon.loadFont();
Ionicon.loadFont();

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useMutation(LOGIN, {
    variables: {email, password},
    onCompleted: data => {
      confirm(data);
    },
  });

  const confirm = async dataParam => {
    const {token, user} = dataParam.login;
    saveUserInformation(token, user);
    navigation.navigate('App');
  };

  // const fakeconfirm = () => {
  //   navigation.navigate('App');
  // };

  return (
    <ScrollView style={styles.container}>
      <Container padded style={styles.backgroundColorContent}>
        <StatusBar backgroundColor={CustomTheme.default} />
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicon name="ios-cube" color={CustomTheme.primary} size={122} />
          <Text
            style={{margin: 10, color: CustomTheme.textColor, fontSize: 28}}>
            Theocratic Wall
          </Text>
        </View>
        <Form style={{padding: 10}}>
          <View style={{flexDirection: 'row', marginTop: 3, marginBottom: 3}}>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Icon active style={{color: '#7d7d7d'}} name="mail" size={28} />
            </View>
            <CustomInput
              style={{flex: 9}}
              dark
              labelBackgroundColor={CustomTheme.default}
              label={'Email'}
              customBorderColor={CustomTheme.primary}
              labelStyle={{color: CustomTheme.primary}}
              onChangeText={value => setEmail(value)}
            />
          </View>
          <View style={{flexDirection: 'row', marginTop: 3, marginBottom: 3}}>
            <View
              style={{
                flex: 1,
                alignContent: 'center',
                justifyContent: 'center',
              }}>
              <Icon
                active
                style={{color: '#7d7d7d'}}
                name="lock"
                type="Feather"
                size={28}
              />
            </View>
            <CustomInput
              style={{flex: 9}}
              dark
              label={'Password'}
              labelBackgroundColor={CustomTheme.default}
              customBorderColor={CustomTheme.primary}
              labelStyle={{color: CustomTheme.primary}}
              isPassword={true}
              onChangeText={value => setPassword(value)}
            />
          </View>
        </Form>
        <View
          style={{
            flex: 1,
            padding: 15,
            marginTop: 12,
            flexDirection: 'row',
          }}>
          <Button
            block
            style={{flex: 1, width: 100, marginRight: 2}}
            onPress={login}
            backgroundColor={CustomTheme.primary}>
            <TextBase>Acceder</TextBase>
          </Button>
        </View>
      </Container>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    paddingLeft: 5,
    paddingRight: 5,
    flexDirection: 'column',
    height: 100,
    backgroundColor: CustomTheme.default,
  },
  backgroundColorContent: {
    backgroundColor: CustomTheme.default,
  },
  buttonColor: {
    color: CustomTheme.primary,
  },
});

export default Login;
