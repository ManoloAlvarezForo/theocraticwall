/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {LOGIN} from './AuthenticationMutations';
import {useMutation} from '@apollo/react-hooks';
import {StyleSheet, View, StatusBar, Text} from 'react-native';
import {Form, Button, Container, Text as TextBase} from 'native-base';

import {saveToken} from '../../utils/authentication';
import CustomInput from '../Input/CustomInput/CustomInput';
import Icon from 'react-native-vector-icons/Feather';
import Ionicon from 'react-native-vector-icons/Ionicons';
import {ScrollView} from 'react-native-gesture-handler';
Icon.loadFont();
Ionicon.loadFont();

const Login = ({navigation}) => {
  const [email, setEmail] = useState('manolo@manolo.com');
  const [password, setPassword] = useState('manolo');
  const [login] = useMutation(LOGIN, {
    variables: {email, password},
    onCompleted: data => {
      confirm(data);
    },
  });

  const confirm = async dataParam => {
    const token = dataParam.login.token;
    saveToken(token);
    navigation.navigate('App');
  };

  const fakeconfirm = () => {
    navigation.navigate('App');
  };

  return (
    <ScrollView style={styles.container}>
      <Container padded style={styles.backgroundColorContent}>
        <StatusBar backgroundColor="#313640" />
        <View
          style={{
            flex: 2,
            flexDirection: 'column',
            justifyContent: 'center',
            alignContent: 'center',
            alignItems: 'center',
          }}>
          <Ionicon name="ios-cube" color="#e91e63" size={122} />
          <Text style={{margin: 10, color: 'white', fontSize: 28}}>
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
              labelBackgroundColor="#313640"
              label={'Email'}
              customBorderColor={'#FF006E'}
              labelStyle={{color: '#FF006E'}}
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
              labelBackgroundColor="#313640"
              customBorderColor={'#FF006E'}
              labelStyle={{color: '#FF006E'}}
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
            style={{flex: 1, width: 100}}
            block
            onPress={fakeconfirm}
            backgroundColor="#e91e63">
            <TextBase>Login</TextBase>
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
    height: 100,
    backgroundColor: '#313640',
  },
  backgroundColorContent: {
    backgroundColor: '#313640',
  },
  content: {},
});

export default Login;
