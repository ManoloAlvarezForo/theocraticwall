/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import EventDetailItem from './EventDetailItem';

import {Content} from 'native-base';

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

const EventDetail = ({event}) => {
  return (
    <Content style={{margin: 5}}>
      <EventDetailItem
        title={LOCATION_LABEL}
        content={event.location}
        headerColor={LOCATION_HEADER_COLOR}
      />
      <EventDetailItem
        title={LEAD_LABEL}
        content={event.lead}
        headerColor={LEAD_HEADER_COLOR}
      />
      <EventDetailItem
        title={DATE_AND_TIME_LABEL}
        content={`${event.date} - ${event.time} - ${event.moment}`}
        headerColor={DATE_AND_TIME_HEADER_COLOR}
      />
      <EventDetailItem
        title={TERRITORIES_LABEL}
        content={event.territories}
        headerColor={TERRITORIES_HEADER_COLOR}
      />
      <EventDetailItem
        title={DESCRIPTION_LABEL}
        content={event.description}
        headerColor={DESCRIPTION_HEADER_COLOR}
      />
    </Content>
  );
};

export default EventDetail;
