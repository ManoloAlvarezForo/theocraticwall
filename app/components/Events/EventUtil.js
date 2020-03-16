export const getMomentLabel = momentParam => {
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

export const getColorEvent = type => {
  let color = '#ececec';
  switch (type) {
    case 'morning':
      color = '#8bc34a';
      break;
    case 'afternoon':
      color = '#ff9800';
      break;
    case 'night':
      color = '#03a9f4';
      break;
    default:
      color = '#03a9f4';
      break;
  }
  return color;
};

// const events = [{title: 'algo', description: 'loquesea'}];
export const buildEventData = event => {
  const response = {
    styleName: '',
    bodyInfo: 'Evento cualquiera',
    secondTitleInfo: 'M',
    secondBodyInfo: 'None',
    title: 'Event Just',
    headerBackgroundColor: '',
  };

  switch (event.type) {
    case 'preaching':
      response.styleName = `${event.type}-${event.moment}`;
      response.title = getMomentLabel(event.moment);
      response.secondTitleInfo = 'Predicacion';
      response.bodyInfo = event.location;
      response.secondBodyInfo = `${event.time}`;
      response.headerBackgroundColor = getColorEvent(event.moment);
      break;

    case 'meeting':
      response.styleName = `${event.type}-${event.meetingType}`;
      response.bodyInfo = `${event.title}`;
      response.secondTitleInfo = 'Reunion';
      response.secondBodyInfo = `${event.time}`;
      response.title = 'Reunion';
      response.headerBackgroundColor = getColorEvent(event.moment);

      break;

    default:
      break;
  }

  return {...response};
};
