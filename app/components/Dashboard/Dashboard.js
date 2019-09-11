/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SectionList, StyleSheet} from 'react-native';
import {Content, Text, Spinner, View} from 'native-base';
import Event from '../Events/Event';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import {GET_EVENTS_BY_MONTH} from '../Events/EventsQueries';
import {useQuery} from 'react-apollo';
import Theme from '../../utils/Theme/Theme';

import moment from 'moment';

import Icon from 'react-native-vector-icons/Ionicons';
Icon.loadFont();

const EventDashboardContent = () => {
  const now = moment();
  const [month] = useState(now.format('YYYY-MM-DD'));
  const [year] = useState(now.get('year').toString());
  const [locale] = useState('es');

  const {loading, error, data} = useQuery(GET_EVENTS_BY_MONTH, {
    variables: {month, year, locale},
  });

  if (loading) {
    return (
      <View style={styles.content}>
        <Spinner color={Theme.primary} />
      </View>
    );
  }
  if (error) {
    return <Text>Error! {error.message}</Text>;
  }

  const sections = data.getEventsByMonth.map(section => {
    return {
      title: section.date,
      data: section.events,
    };
  });

  return (
    <Content padder>
      <SectionList
        sections={sections}
        renderSectionHeader={({section}) => <Text>{section.title}</Text>}
        renderItem={({item}) => <Event event={item} />}
        keyExtractor={(item, index) => item.id}
      />
    </Content>
  );
};

const Dashboard = () => {
  return (
    <NavigationWrapper
      defaultTitle="Theocratic Wall"
      constent={EventDashboardContent}
    />
  );
};

var styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Dashboard;
