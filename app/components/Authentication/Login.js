/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
// import {Button, Form, Icon} from 'native-base';
import {LOGIN} from './AuthenticationMutations';
import {useMutation} from '@apollo/react-hooks';
import {ScrollView, StyleSheet, Text, View, Image, Button} from 'react-native';
import {saveToken} from '../../utils/authentication';
// import ModernInput from '../Input/CustomInput/CustomInput';

const Login = ({navigatation}) => {
  const [email] = useState('manolo@manolo.com');
  const [password] = useState('manolo');
  const [login] = useMutation(LOGIN, {
    variables: {email, password},
    onCompleted: data => {
      confirm(data);
    },
  });

  const confirm = async dataParam => {
    const token = dataParam.login.token;
    saveToken(token);
    navigatation.navigate('App');
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.content}>
        <View
          style={{
            flex: 1,
            height: 300,
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={{width: 150, height: 150}}
              source={require('../../assets/images/logo.png')}
            />
            <Text
              style={{
                fontSize: 65,
                color: '#FF006E',
              }}>
              Kisses
            </Text>
          </View>
        </View>
        <View style={{marginTop: 30, paddingLeft: 15, paddingRight: 15}}>
          <Button onPress={login} title="Login" />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: '#292C2F',
    height: 100,
  },
  content: {},
});

export default Login;
