import moment from 'moment';

const DEAFAULT_DAYS_PER_MONTH = 35;

export const getStartAndEndDateFromMonth = (
  month,
  year,
  locale = moment().locale(),
  daysPerMonth = DEAFAULT_DAYS_PER_MONTH,
) => {
  const now = moment();
  now.locale(locale);
  now.set('month', month);
  now.set('year', year);
  const myMoment = now.clone().set({date: 1});
  const daysInMonth = myMoment.daysInMonth();
  const weekDay = parseInt(myMoment.format('d'), 10);
  const startDate = myMoment.subtract(weekDay, 'days');
  const otherMoment = now.set({date: daysInMonth});
  const endDate = otherMoment.add(daysPerMonth - daysInMonth - weekDay, 'days');

  return {
    startDate,
    endDate,
  };
};

export const getDatesFromToByMonth = (month, year, locale, daysPerMonth) => {
  const list = [];
  const calculatedStartAndEndDateValues = getStartAndEndDateFromMonth(
    month,
    year,
    locale,
    daysPerMonth,
  );
  let {startDate} = calculatedStartAndEndDateValues;
  const {endDate} = calculatedStartAndEndDateValues;

  while (!moment(startDate).isAfter(endDate)) {
    list.push(startDate.clone());
    startDate = startDate.add(1, 'days');
  }

  return list;
};

export const getEventsDataForAgenda = events => {
  let startDate = moment(events[0].date);
  const endDate = moment(events[events.length - 1].date);
  let response = {};
  //TODO: please improbe that part o get the data for the calendar using events that come from the server.
  while (!moment(startDate).isAfter(endDate)) {
    const dateString = startDate.format('YYYY-MM-DD');
    const eventFound = events.find(e => e.date === dateString);

    if (eventFound) {
      response[eventFound.date] = eventFound.events;
    } else {
      response[dateString] = {};
    }

    startDate = startDate.add(1, 'days');
  }

  return response;
};

export const buildMonthAgendaData = (month, year, events) => {
  const daysMonth = moment(month).daysInMonth();
  let eventsTemp = events;
  let eventTemp = {};
  const response = {};
  const calculatedStartAndEndDateValues = getStartAndEndDateFromMonth(
    month,
    year,
    null,
    daysMonth,
  );
  let {startDate} = calculatedStartAndEndDateValues;
  const {endDate} = calculatedStartAndEndDateValues;

  while (!moment(startDate).isSame(endDate)) {
    const stringDate = startDate.format('YYYY-MM-DD');
    eventTemp = eventsTemp.find(e => e.date === stringDate);

    if (eventTemp) {
      response[eventTemp.date] = eventTemp.events;
      eventsTemp = eventsTemp.filter(e => e.date !== eventTemp.date);
    } else {
      response[
        startDate
          .clone()
          .format('YYYY-MM-DD')
          .toString(0)
      ] = {};
    }

    startDate = startDate.add(1, 'days');
  }

  return response;
};
