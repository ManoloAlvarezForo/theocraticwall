import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import {Badge, Text} from 'native-base';
import {useQuery, useSubscription} from '@apollo/react-hooks';
import {getStorageProperty} from '../../utils/asyncStorageHandler';
import {NOTIFICATION_SENT} from './NotificationSubscriptions';
import {GET_UNREAD_NOTIFICATIONS_SIZE} from './NotificationsQueries';
import IconSimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
IconSimpleLineIcons.loadFont();

const IconNotification = ({iconName, color, size}) => {
  const loading = true;
  const data = {};
  // const [userId, setUserId] = useState('');
  // useEffect(() => {
  //   const getUserId = async () => {
  //     const newUserId = await getStorageProperty('userId');
  //     setUserId(newUserId);
  //   };
  //   getUserId();
  // }, []);

  // const {loading, error, data, refetch} = useQuery(
  //   GET_UNREAD_NOTIFICATIONS_SIZE,
  //   {
  //     variables: {userId},
  //     fetchPolicy: 'cache-first',
  //   },
  // );

  // const {loading: notificationSentLoading} = useSubscription(NOTIFICATION_SENT);

  // if (!notificationSentLoading) {
  //   refetch({variables: userId});
  // }

  return (
    <View>
      <IconSimpleLineIcons name={iconName} color={color} size={size} />
      {!loading && (
        <Badge style={styles.badgeStyle}>
          <Text>{data.getUnreadNotificationsSize.size}</Text>
        </Badge>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  badgeStyle: {
    position: 'absolute',
    top: -8,
    left: 12,
    height: 23,
    width: 23,
  },
});

export default IconNotification;
