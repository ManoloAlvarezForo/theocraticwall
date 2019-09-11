/* eslint-disable react-native/no-inline-styles */
/* eslint-disable no-alert */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {Card, CardItem, Body} from 'native-base';

const getMomentLabel = momentParam => {
  let response = 'No title.';
  switch (momentParam) {
    case 'morning':
      response = 'Mañana';
      break;
    case 'afternoon':
      response = 'Tarde';
      break;
    case 'night':
      response = 'Noche';
      break;
    default:
      break;
  }

  return response;
};

// const events = [{title: 'algo', description: 'loquesea'}];
const buildEventData = event => {
  const response = {
    styleName: '',
    bodyInfo: 'Evento cualquiera',
    secondTitleInfo: 'M',
    secondBodyInfo: 'None',
    title: 'Event Just',
  };

  switch (event.type) {
    case 'preaching':
      response.styleName = `${event.type}-${event.moment}`;
      response.title = getMomentLabel(event.moment);
      response.secondTitleInfo = 'P';
      response.bodyInfo = event.location;
      response.secondBodyInfo = `${event.time}`;
      break;

    case 'meeting':
      response.styleName = `${event.type}-${event.meetingType}`;
      response.bodyInfo = `${event.title}`;
      response.secondTitleInfo = 'R';
      response.secondBodyInfo = `${event.time}`;
      response.title = 'Reunion';
      break;

    default:
      break;
  }

  return {...response};
};

const Event = ({event}) => {
  const {bodyInfo, title, secondBodyInfo, secondTitleInfo} = buildEventData(
    event,
  );
  return (
    <Card style={styles.cardContainer}>
      <CardItem
        button
        style={styles.cardItem}
        onPress={() => alert(`Event Id ${event.id} selected`)}>
        <Text style={{fontSize: 16, fontWeight: '700'}}>
          {title} {secondTitleInfo}
        </Text>
        <Body style={{paddingTop: 10, paddingBottom: 10}}>
          <Text note>
            {bodyInfo} {secondBodyInfo}
          </Text>
        </Body>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 6,
  },
  cardItem: {
    borderRadius: 6,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
});

export default Event;
