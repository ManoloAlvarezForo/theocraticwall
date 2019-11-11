/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {Button} from 'native-base';
import {Text, View} from 'react-native';
import Theme from '../../utils/Theme/Theme';

const ModalDetail = ({
  modalVisible,
  setModalVisible,
  content,
  title = 'Predicacion',
}) => {
  return (
    <View>
      <Modal
        style={styles.modal}
        isVisible={modalVisible}
        onBackdropPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title}</Text>
          </View>
          <View style={styles.body}>{content}</View>
          <View style={styles.footer}>
            <Button
              transparent
              style={{
                flex: 1,
                marginLeft: 'auto',
                marginRight: 2,
                marginBottom: 13,
              }}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}>
              <Text
                style={{
                  color: 'black',
                  padding: 10,
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Close
              </Text>
            </Button>
          </View>
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
    backgroundColor: Theme.secondaryMain,
    height: 40,
    padding: 5,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    flex: 0,
  },
  headerTitle: {
    color: Theme.textBlackColor,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
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
