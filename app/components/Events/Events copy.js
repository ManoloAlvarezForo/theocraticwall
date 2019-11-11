import React, {useState} from 'react';
import {View} from 'react-native';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import Agenda from './Agenda';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalDetail from '../Modal/ModalDetail';
import EventDetail from './EventDetail';

Icon.loadFont();
const now = moment();

const EventsContent = ({setTitle}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const buildModalDetail = event => {
    setModalContent(<EventDetail event={event} />);
    setIsVisibleModal(true);
  };

  return (
    <React.Fragment>
      <Agenda setTitle={setTitle} buildModalDetail={buildModalDetail} />
      <ModalDetail
        modalVisible={isVisibleModal}
        setModalVisible={setIsVisibleModal}
        content={modalContent}
      />
    </React.Fragment>
  );
};

const Events = () => {
  return (
    <NavigationWrapper
      defaultTitle={now.format('MMMM YYYY')}
      content={EventsContent}
    />
  );
};

export default Events;
