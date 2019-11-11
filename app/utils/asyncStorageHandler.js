import AsyncStorage from '@react-native-community/async-storage';

const AUTH_TOKEN = 'AUTH_TOKEN';

export const getToken = async () => {
  const token = await AsyncStorage.getItem(AUTH_TOKEN);
  return token;
};

export const saveToken = newToken => {
  return AsyncStorage.setItem(AUTH_TOKEN, newToken);
};

export const saveUserInformation = async (token, user) => {
  const userName = ['userName', user.name];
  const userEmail = ['userEmail', user.email];
  const userId = ['userId', user.id];
  const newToken = [AUTH_TOKEN, token];

  try {
    await AsyncStorage.multiSet([userName, userEmail, userId, newToken]);
  } catch (e) {
    //save error
  }

  console.log('Done.');
};

export const getStorageProperty = async property => {
  let response = null;
  try {
    response = await AsyncStorage.getItem(property);
  } catch (error) {
    console.log('There was an error to get a property: ', error);
    return null;
  }
  return response;
};

export const signOut = () => {
  return AsyncStorage.removeItem(AUTH_TOKEN);
};
