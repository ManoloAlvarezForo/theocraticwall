/* eslint-disable no-alert */
/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {SectionList, StyleSheet, View, StatusBar} from 'react-native';
import {
  Content,
  Text,
  Spinner,
  Button,
  Container,
  Header,
  Left,
  Body,
  Title,
  Right,
} from 'native-base';
import Event from '../Events/Event';
// import NavigationWrapper from '../Navigation/NavigationWrapper';
import {RECENT_EVENTS} from '../Events/EventsQueries';
import {useQuery} from 'react-apollo';
import Theme from '../../utils/Theme/Theme';
import ModalDetail from '../Modal/ModalDetail';
import EventDetail from '../Events/EventDetail';
import moment from 'moment';
import ESLocale from 'moment/locale/es';
import Icon from 'react-native-vector-icons/Ionicons';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
Icon.loadFont();
IconSimpleLineIcons.loadFont();

moment.locale('es', ESLocale);

const EventRecentContent = ({title}) => {
  const [isVisibleModal, setIsVisibleModal] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const [today] = useState(moment().format('YYYY-MM-DD'));
  const {loading, error, data, refetch} = useQuery(RECENT_EVENTS, {
    variables: {today},
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

  const sections = data.recentEvents.map(section => {
    let newTitle = '';
    // const todayString = moment().format('YYYY-MM-DD');
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
    setModalContent(<EventDetail event={event} />);
    setIsVisibleModal(true);
  };

  const onRefreshHandle = () => {
    refetch({
      variables: {
        today,
      },
    });
  };

  return (
    <Container>
      <Header style={styles.headerColor}>
        <StatusBar backgroundColor={Theme.paper} />
        <Left>
          <Button transparent>
            <Icon name="ios-cube" color={Theme.primary} size={26} />
          </Button>
        </Left>
        <Body>
          <Title style={styles.bodyText}>{title}</Title>
        </Body>
        <Right>
          <Button transparent onPress={onRefreshHandle}>
            <IconSimpleLineIcons name="refresh" color="#f1f1f1" size={24} />
          </Button>
        </Right>
      </Header>
      <Content padder style={styles.background}>
        <SectionList
          sections={sections}
          renderSectionHeader={({section}) => (
            <Text style={{color: 'white'}}>{section.title}</Text>
          )}
          renderItem={({item}) => (
            <Event event={item} buildModalDetail={buildModalDetail} />
          )}
          keyExtractor={(item, index) => item.id}
        />
        <ModalDetail
          modalVisible={isVisibleModal}
          setModalVisible={setIsVisibleModal}
          content={modalContent}
        />
      </Content>
    </Container>
  );
};

const Recent = () => {
  return <EventRecentContent title="Proximos Eventos" />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Theme.paper,
  },
  background: {
    backgroundColor: Theme.paper,
  },
  headerColor: {
    backgroundColor: Theme.default,
    color: Theme.default,
  },
  bodyContainer: {
    flex: 3,
  },
  bodyText: {color: Theme.textColor},
});

export default Recent;
