/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, CardItem, Body} from 'native-base';
import Theme from '../../utils/Theme/Theme';

const EventDetailItem = ({title, content, headerColor}) => {
  // const newHeaderStyle = {
  //   ...styles.cardItemHeaderText,
  //   backgroundColor: headerColor,
  // };
  return (
    <Card style={styles.cardContainer}>
      <CardItem header style={styles.cardItemHeaderContainer}>
        <Text style={{fontSize: 17, fontWeight: '700', color: '#313640'}}>
          {title}
        </Text>
      </CardItem>
      <CardItem style={styles.cardItemBody}>
        <Body>
          <Text
            style={{
              fontSize: 17,
              color: '#313640',
              flex: 9,
            }}>
            {content}
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 4,
    marginBottom: 2,
  },
  cardItemHeaderContainer: {
    paddingTop: 16,
    height: 23,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    backgroundColor: Theme.paperHighLight,
    // backgroundColor: '#f5f5f5',
    // backgroundColor: '#dfe2e6',
  },
  cardItemHeaderText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    borderRadius: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 10,
    paddingLeft: 10,
  },
  cardItemBody: {
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: Theme.paperHighLight,
    // backgroundColor: '#dfe2e6',
  },
  cardItemBodyText: {
    fontSize: 16,
    color: '#313640',
    fontWeight: '700',
    flex: 9,
  },
});

export default EventDetailItem;
