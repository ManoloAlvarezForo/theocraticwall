/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {StyleSheet} from 'react-native';
import {Card, CardItem, Body, Text} from 'native-base';
import Theme from '../../utils/Theme/Theme';
import {buildEventData} from './EventUtil';

//Icons
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
IconSimpleLineIcons.loadFont();

const FONT_SIZE_HEADER = 14;
const FONT_SIZE_BODY = 15;

const Event = ({event, buildModalDetail}) => {
  const {
    bodyInfo,
    title,
    secondBodyInfo,
    secondTitleInfo,
    headerBackgroundColor,
  } = buildEventData(event);

  const showDetail = () => {
    buildModalDetail(event);
  };

  return (
    <Card style={styles.cardContainer}>
      <CardItem header style={styles.headerContainer}>
        <Text
          style={{
            ...styles.cardHeaderText,
            backgroundColor: Theme.paper,
            marginRight: 3,
          }}>
          {secondTitleInfo}
        </Text>
        <Text
          style={{
            ...styles.cardHeaderText,
            flex: 1,
            backgroundColor: headerBackgroundColor,
          }}>
          {title} {secondBodyInfo}
        </Text>
      </CardItem>
      <CardItem style={styles.cardItem} button onPress={showDetail}>
        <Body
          style={{
            paddingTop: 10,
            paddingBottom: 10,
            flex: 1,
            flexDirection: 'row',
          }}>
          <Text
            style={{
              fontSize: FONT_SIZE_BODY,
              color: '#313640',
              fontWeight: '700',
              flex: 9,
            }}
            note>
            {bodyInfo}
          </Text>
          <IconSimpleLineIcons
            style={{flex: 1, marginLeft: 'auto', paddingRight: 0}}
            name="arrow-right"
            size={18}
            color="#313640"
          />
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 6,
  },
  headerContainer: {
    height: 14,
    paddingRight: 5,
    paddingLeft: 5,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    // backgroundColor: '#8bc34a',
    // backgroundColor: Theme.paper,
    // backgroundColor: '#ced0d4',
    // backgroundColor: '#e6e6e6',
    // backgroundColor: '#dfe2e6',#959aa7
    backgroundColor: '#f1f1f1',
    flex: 1,
    flexDirection: 'row',
  },
  cardHeaderText: {
    fontSize: FONT_SIZE_HEADER,
    fontWeight: '700',
    color: '#ffffff',
    borderRadius: 4,
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 10,
    paddingLeft: 10,
    marginRight: 3,
  },
  cardItem: {
    paddingTop: 2,
    paddingBottom: 2,
    paddingRight: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: '#f1f1f1',
  },
});

export default Event;
