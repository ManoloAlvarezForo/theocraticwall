/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from 'native-base';
import {Text, View} from 'react-native';
import Theme from '../../utils/Theme/Theme';
import IoniconsIcons from 'react-native-vector-icons/Ionicons';
IoniconsIcons.loadFont();

const ModalDetail = ({
  modalVisible,
  setModalVisible,
  content,
  title = 'Predicacion',
  headerColor = '#03a9f4',
}) => {
  const newHeaderColor = {...styles.header, backgroundColor: headerColor};
  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={modalVisible}
        onBackdropPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.content}>
          <View style={newHeaderColor}>
            <Text style={styles.headerTitle}>{title}</Text>
            <View style={{height: 36, width: 32}}>
              <Button
                transparent
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                <IoniconsIcons name="ios-close" size={36} color="white" />
              </Button>
            </View>
          </View>
          <View style={styles.body}>{content}</View>
          <View style={styles.footer} />
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modal: {padding: 2, margin: 3},
  content: {
    flex: 1,
    // backgroundColor: '#dfe2e6',
    backgroundColor: Theme.secondaryMain,
    borderRadius: 6,
    flexDirection: 'column',
  },
  header: {
    paddingLeft: 10,
    paddingRight: 10,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    color: '#f1f1f1',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  body: {flex: 9},
  footer: {
    // height: 45,
    // padding: 5,
    backgroundColor: Theme.secondaryMain,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },
});

export default ModalDetail;
