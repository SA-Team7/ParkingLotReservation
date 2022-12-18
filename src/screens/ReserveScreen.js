import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/AntDesign';

const ReserveScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.pop()}>
        <Icon name="left" size={20} color="#000" />
      </TouchableOpacity>
      <View style={styles.header}>
        <Text style={styles.headerText}>주차장 예약</Text>
      </View>
      <View>
        <Text>주차장 이름</Text>
        <Text>잔여 자리</Text>
      </View>
      <View style={styles.line}></View>
      <TouchableOpacity style={styles.ticketButton}>
        <Text>30분</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ticketButton}>
        <Text>1시간</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.ticketButton}>
        <Text>3시간</Text>
      </TouchableOpacity>
      <Text>총 예약 시간</Text>
      <View style={styles.info}>
        <View style={styles.infoTextContainer}>
          <Text>기본요금</Text>
          <Text>30분 2000원</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text>추가요금</Text>
          <Text>60분당 3000원</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.payButton}>
        <Text style={styles.payButtonText}>결제하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    backgroundColor: 'white',
    paddingTop: getStatusBarHeight() + 15,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  backButton: {
    position: 'absolute',
    top: getStatusBarHeight() + 15,
    left: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 40,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgrey',
    marginTop: 20,
    marginBottom: 50,
  },
  ticketButton: {
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 40,
    paddingVertical: 5,
    marginBottom: 20,
  },
  payButton: {
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 40,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 40,
  },
  payButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  info: {
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    height: 200,
    marginTop: 70,
    padding: 20,
  },
  infoTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
});

export default ReserveScreen;
