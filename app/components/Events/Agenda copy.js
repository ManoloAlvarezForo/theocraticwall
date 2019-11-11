import React from 'react';
import {useQuery} from 'react-apollo';
import {View, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import CustomTheme from '../../utils/Theme/Theme';
import moment from 'moment';
import {Text, Spinner} from 'native-base';
import Event from './Event';
import {GET_ALL_EVENTS} from './EventsQueries';
import {LocaleConfig} from 'react-native-calendars';
import {ES_LOCALE} from './CalendarLocaleES';
import Theme from '../../utils/Theme/Theme';
import {getEventsDataForAgenda} from './CalendarUtils';

// That configuration sets a custom locale in that case 'ES' Spanish.
LocaleConfig.locales.es = ES_LOCALE;
LocaleConfig.defaultLocale = 'es';

const AgendaScreen = ({setTitle, buildModalDetail}) => {
  const now = moment();
  let items = {};
  const {data, loading, error} = useQuery(GET_ALL_EVENTS);

  if (!loading) {
    items = getEventsDataForAgenda(data.allEvents);
  }

  if (error) {
    return <Text>Error! {error.message}</Text>;
  }
  // const loadItems = day => {
  //   //I will left that part commented jus to have a refecth example to call the graphql query.
  //   // refetch({
  //   //   variables: {
  //   //     month: day.month - 1,
  //   //     year: day.year,
  //   //     locale: 'es',
  //   //   },
  //   // });
  // };

  const renderItem = item => {
    return <Event event={item} buildModalDetail={buildModalDetail} />;
  };

  const EmptyData = () => {
    return !loading ? (
      <View style={styles.emptyData}>
        <Text style={styles.emptyDataText}>No existen eventos este dia.</Text>
      </View>
    ) : (
      <View style={styles.spinnerContent}>
        <Spinner color={Theme.primary} />
      </View>
    );
  };

  const EmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <Text style={styles.emptyDateText}>Ningun evento para este dia.</Text>
      </View>
    );
  };

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  const setTitleMethod = day => {
    setTitle(
      `${moment()
        .month(day.month - 1)
        .format('MMMM')}  ${day.year}`,
    );
  };

  return (
    <Agenda
      items={items}
      selected={now.format('YYYY-MM-DD')}
      renderItem={renderItem}
      renderEmptyDate={() => {
        return <EmptyDate />;
      }}
      renderEmptyData={() => {
        return <EmptyData />;
      }}
      rowHasChanged={rowHasChanged}
      onDayPress={day => setTitleMethod(day)}
      onDayChange={day => {
        setTitleMethod(day);
      }}
      theme={{
        backgroundColor: CustomTheme.paper,
        calendarBackground: CustomTheme.default,
        agendaKnobColor: '#ff9800',
        agendaDayTextColor: 'white',
        agendaDayNumColor: 'white',
        agendaTodayColor: '#ff9800',
        textDisabledColor: '#bdbdbd',
        dayTextColor: CustomTheme.textColor,
        monthTextColor: CustomTheme.textColor,
        indicatorColor: CustomTheme.primary,
        selectedDayBackgroundColor: CustomTheme.primary,
        selectedDayTextColor: CustomTheme.secondTextColor,
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17,
  },
  emptyData: {
    height: 15,
    flex: 1,
    justifyContent: 'center',
  },
  emptyDataText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
  emptyDate: {
    height: 5,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
  },
  emptyDateText: {
    color: 'white',
  },
  spinnerContent: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#555d6f',
  },
});

export default AgendaScreen;

// markingType={'period'}
// markedDates={{
//    '2017-05-08': {textColor: '#666'},
//    '2017-05-09': {textColor: '#666'},
//    '2017-05-14': {startingDay: true, endingDay: true, color: 'blue'},
//    '2017-05-21': {startingDay: true, color: 'blue'},
//    '2017-05-22': {endingDay: true, color: 'gray'},
//    '2017-05-24': {startingDay: true, color: 'gray'},
//    '2017-05-25': {color: 'gray'},
//    '2017-05-26': {endingDay: true, color: 'gray'}}}
// monthFormat={'yyyy'}
// theme={{calendarBackground: 'red', agendaKnobColor: 'green'}}
//renderDay={(day, item) => (<Text>{day ? day.day: 'item'}</Text>)}
