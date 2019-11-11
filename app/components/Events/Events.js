import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import Agenda from './Agenda';
import moment from 'moment';
import Icon from 'react-native-vector-icons/Ionicons';
import ModalDetail from '../Modal/ModalDetail';
import EventDetail from './EventDetail';
import {GET_ALL_EVENTS} from './EventsQueries';
import {useQuery} from 'react-apollo';
import {Button, Text, Spinner, Toast} from 'native-base';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Theme from '../../utils/Theme/Theme';
import {getEventsDataForAgenda} from './CalendarUtils';
IconSimpleLineIcons.loadFont();
Icon.loadFont();

const EventsContent = ({setTitle, allEvents = [], loading}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const buildModalDetail = event => {
    setModalContent(<EventDetail event={event} />);
    setIsVisibleModal(true);
  };

  return (
    <React.Fragment>
      <Agenda
        setTitle={setTitle}
        buildModalDetail={buildModalDetail}
        allEvents={allEvents}
        loading={loading}
      />
      <ModalDetail
        modalVisible={isVisibleModal}
        setModalVisible={setIsVisibleModal}
        content={modalContent}
      />
    </React.Fragment>
  );
};

const Events = () => {
  const now = moment();
  const {data, loading, error, refetch} = useQuery(GET_ALL_EVENTS, {
    fetchPolicy: 'cache-first',
  });

  const SpinnerLoading = () => {
    return (
      <View style={styles.content}>
        <Spinner color={Theme.primary} />
      </View>
    );
  };

  // const ErrorComponent = () => {
  //   return <Text>Error! {error.message}</Text>;
  // };

  const RightContent = () => {
    return (
      <Button transparent onPress={onRefreshHandle}>
        <IconSimpleLineIcons name="refresh" color="#f1f1f1" size={24} />
      </Button>
    );
  };

  const onRefreshHandle = () => {
    NetInfo.fetch().then(state => {
      if (state.isConnected) {
        refetch({
          fetchPolicy: 'cache-and-network',
        });
      } else {
        showToast();
      }
    });
  };

  if (loading) {
    return (
      <NavigationWrapper
        defaultTitle={now.format('MMMM YYYY')}
        content={SpinnerLoading}
      />
    );
  }

  const showToast = () => {
    Toast.show({
      text: 'No tiene conexion a Internet!',
      textStyle: {color: 'white'},
      buttonText: 'Ok',
      duration: 10000,
      style: {margin: 20, borderRadius: 5},
    });
  };

  if (error) {
    Toast.show({
      text: 'No existe una conexion a Internet!',
      textStyle: {color: 'white'},
      buttonText: 'Ok',
      duration: 10000,
    });
  }

  const AllEventsContent = ({setTitle}) => {
    const allEvents = getEventsDataForAgenda(data.allEvents);
    return <EventsContent allEvents={allEvents} setTitle={setTitle} />;
  };

  return (
    <NavigationWrapper
      defaultTitle={now.format('MMMM YYYY')}
      content={AllEventsContent}
      right={RightContent}
    />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.secondaryMain,
  },
  background: {
    backgroundColor: Theme.secondaryMain,
  },
});

export default Events;
