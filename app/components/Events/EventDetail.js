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
      <EventDetailItem event={event} />
    </Content>
  );
};

export default EventDetail;
