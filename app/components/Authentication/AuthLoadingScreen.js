import React, {useEffect} from 'react';
import {ActivityIndicator, StatusBar, StyleSheet, View} from 'react-native';

import {getToken} from '../../utils/asyncStorageHandler';

const AuthLoadingScreen = ({navigation}) => {
  useEffect(() => {
    bootstrapAsync();
  });

  const bootstrapAsync = async () => {
    const userToken = await getToken();
    navigation.navigate(userToken ? 'App' : 'Auth');
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator />
      <StatusBar barStyle="default" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AuthLoadingScreen;
