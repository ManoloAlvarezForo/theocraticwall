import React from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerNavigatorItems} from 'react-navigation-drawer';

const CustomDrawerContentComponent = props => (
  <SafeAreaView style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={styles.text}>Kisses</Text>
    </View>
    <ScrollView style={styles.body}>
      <DrawerNavigatorItems {...props} />
    </ScrollView>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {backgroundColor: '#292C2F', flex: 10},
  textContainer: {
    // height: 180,
    backgroundColor: '#292C2F',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {fontSize: 65, color: '#FF006E'},
  body: {backgroundColor: '#292C2F'},
});

export default CustomDrawerContentComponent;
