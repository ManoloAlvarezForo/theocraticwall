/* eslint-disable no-alert */
/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SectionList, StyleSheet, View} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import {Content, Text, Spinner, Button, Toast} from 'native-base';
import Event from '../Events/Event';
import NavigationWrapper from '../Navigation/NavigationWrapper';
import {RECENT_EVENTS} from '../Events/EventsQueries';
import {useQuery} from '@apollo/client';
import Theme from '../../utils/Theme/Theme';
import ModalDetail from '../Modal/ModalDetail';
import EventDetail from '../Events/EventDetail';
import {getColorEvent} from '../Events/EventUtil';

//Language
import moment from 'moment';
import ESLocale from 'moment/locale/es';

//Icons
import Icon from 'react-native-vector-icons/Ionicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();
IconSimpleLineIcons.loadFont();

moment.locale('es', ESLocale);

const EventRecentContent = ({recentEvents}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [modalHeaderColor, setModalHeaderColor] = useState({});

  const sections = recentEvents.map(section => {
    let newTitle = '';
    const dateCurrent = moment().format('YYYY-MM-DD');

    if (moment(dateCurrent).isSame(section.date)) {
      newTitle = 'Hoy';
    } else {
      const dateFormat = moment(section.date).format('dddd LL');
      newTitle = dateFormat.charAt(0).toUpperCase() + dateFormat.slice(1);
    }
    return {
      title: newTitle,
      data: section.events,
    };
  });

  const buildModalDetail = event => {
    setModalHeaderColor(getColorEvent(event.moment));
    setModalContent(<EventDetail event={event} />);
    setIsVisibleModal(true);
  };

  return (
    <Content padder style={styles.background}>
      <SectionList
        sections={sections}
        renderSectionHeader={({section}) => (
          <Text style={{color: Theme.textBlackColor}}>{section.title}</Text>
        )}
        renderItem={({item}) => (
          <Event event={item} buildModalDetail={buildModalDetail} />
        )}
        ListEmptyComponent={() => (
          <View style={styles.center}>
            <Text style={{color: Theme.textBlackColor}}>
              Ningun evento proximo
            </Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
      <ModalDetail
        modalVisible={isVisibleModal}
        setModalVisible={setIsVisibleModal}
        content={modalContent}
        headerColor={modalHeaderColor}
      />
    </Content>
  );
};

const Recent = () => {
  const [today] = useState(moment().format('YYYY-MM-DD'));
  const {loading, data = {}, refetch} = useQuery(RECENT_EVENTS, {
    variables: {today},
    skip: !today,
    errorPolicy: 'none',
    fetchPolicy: 'cache-first',
  });


  const SpinnerLoading = () => {
    return (
      <View style={styles.content}>
        <Spinner color={Theme.primary} />
      </View>
    );
  };

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
          variables: {
            today,
          },
          fetchPolicy: 'network-only',
        });
      } else {
        Toast.show({
          text: 'No tiene conexion a Internet!',
          textStyle: {color: 'white'},
          buttonText: 'Ok',
          duration: 10000,
          style: {margin: 20, borderRadius: 5},
        });
      }
    });
  };

  if (loading) {
    return (
      <NavigationWrapper
        defaultTitle="Proximos Eventos"
        content={SpinnerLoading}
      />
    );
  }

  // if (error) {
  //   Toast.show({
  //     text: 'No existe una conexion a Internet!',
  //     textStyle: {color: 'white'},
  //     buttonText: 'Ok',
  //     duration: 10000,
  //   });
  // }

  const RecentEvents = () => {
    // let events;
    // alert('recentEvent');
    //  if (data.recentEvents === undefined) {
    //     const newData = client.readQuery({
    //     query: RECENT_EVENTS,
    //     variables: {today},
    //   });
    //   events = newData.recentEvents;
    //  } else {
    //      events = data.recentEvents;
    //  }
    const {recentEvents} = data;
    return <EventRecentContent recentEvents={recentEvents} />;
  };

  return (
    <NavigationWrapper
      defaultTitle="Proximos Eventos"
      content={RecentEvents}
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
  center: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  background: {
    backgroundColor: Theme.secondaryMain,
  },
});

export default Recent;
