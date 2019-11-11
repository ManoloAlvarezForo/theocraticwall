import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Agenda} from 'react-native-calendars';
import Theme from '../../utils/Theme/Theme';
import moment from 'moment';
import {Text} from 'native-base';
import Event from './Event';
import {LocaleConfig} from 'react-native-calendars';
import {ES_LOCALE} from './CalendarLocaleES';

// That configuration sets a custom locale in that case 'ES' Spanish.
LocaleConfig.locales.es = ES_LOCALE;
LocaleConfig.defaultLocale = 'es';

const AgendaScreen = ({setTitle, buildModalDetail, allEvents}) => {
  const renderItem = item => {
    return <Event event={item} buildModalDetail={buildModalDetail} />;
  };

  const EmptyData = () => {
    return (
      <View style={styles.emptyData}>
        <Text style={styles.emptyDataText}>No existen eventos este dia.</Text>
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
      items={allEvents}
      selected={moment().format('YYYY-MM-DD')}
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
        backgroundColor: Theme.secondaryMain,
        calendarBackground: Theme.default,
        agendaKnobColor: '#ff9800',
        agendaDayTextColor: Theme.textBlackColor,
        agendaDayNumColor: Theme.textBlackColor,
        agendaTodayColor: '#ff9800',
        textDisabledColor: '#bdbdbd',
        dayTextColor: Theme.textColor,
        monthTextColor: Theme.textColor,
        indicatorColor: Theme.primary,
        selectedDayBackgroundColor: Theme.primary,
        selectedDayTextColor: Theme.secondTextColor,
      }}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: Theme.secondaryMain,
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
    color: Theme.textBlackColor,
    fontSize: 20,
  },
  emptyDate: {
    height: 5,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 30,
  },
  emptyDateText: {
    color: Theme.textBlackColor,
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
