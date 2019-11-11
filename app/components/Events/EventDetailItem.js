/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {Card, CardItem, Body, View} from 'native-base';
import Theme from '../../utils/Theme/Theme';
const LEAD_LABEL = 'Conductor';
const LEAD_HEADER_COLOR = '#00bcd4';

const LOCATION_LABEL = 'Lugar';
const LOCATION_HEADER_COLOR = '#cddc39';

const DATE_AND_TIME_LABEL = 'Fecha y Hora';
const DATE_AND_TIME_HEADER_COLOR = '#457092';

const TERRITORIES_LABEL = 'Territorios';
const TERRITORIES_HEADER_COLOR = '#03a9f4';

const DESCRIPTION_LABEL = 'Recomendaciones';
const DESCRIPTION_HEADER_COLOR = '#f98865';
const EventDetailItem = ({event}) => {
  // const newHeaderStyle = {
  //   ...styles.cardItemHeaderText,
  //   backgroundColor: headerColor,
  // };
  return (
    <Card style={styles.cardContainer}>
      <CardItem style={styles.cardItemBody}>
        <View
          style={{
            flex: 1,
            flexDirection: 'column',
            marginTop: 5,
            marginBottom: 5,
          }}>
          <View style={styles.contentItem}>
            <Text style={styles.title}>{LOCATION_LABEL}</Text>
            <Text style={styles.text}>{event.location}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.title}>{LEAD_LABEL}</Text>
            <Text style={styles.text}>{event.lead}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.title}>{DATE_AND_TIME_LABEL}</Text>
            <Text style={styles.text}>
              {`${event.date} - ${event.time} - ${event.moment}`}
            </Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.title}>{TERRITORIES_LABEL}</Text>
            <Text style={styles.text}>{event.territories}</Text>
          </View>
          <View style={styles.contentItem}>
            <Text style={styles.title}>{DESCRIPTION_LABEL}</Text>
            <Text style={styles.text}>{event.description}</Text>
          </View>
        </View>
      </CardItem>
    </Card>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 4,
    marginBottom: 2,
  },
  cardItemBody: {
    flex: 9,
    flexDirection: 'row',
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: '#f1f1f1',
    alignItems: 'flex-start',
    // backgroundColor: '#dfe2e6',
  },
  contentItem: {
    flex: 9,
    flexDirection: 'column',
    marginBottom: 5,
    marginTop: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    flex: 9,
    borderRadius: 4,
    marginRight: 3,
    borderStyle: 'dotted',
    borderBottomWidth: 0.5,
    borderBottomColor: '#bbbbbb',
    padding: 5,
    // backgroundColor: '#ececec',
  },
  text: {
    fontSize: 16,
    color: '#313640',
    flex: 9,
    paddingLeft: 5,
    marginBottom: 5,
    marginTop: 7,
  },
});

export default EventDetailItem;
