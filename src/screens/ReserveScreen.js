import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/AntDesign';

const ReserveScreen = ({navigation}) => {
  const [totalTime, setTotalTime] = React.useState(0);
  const [ticket1, setTicket1] = React.useState(0);
  const [ticket2, setTicket2] = React.useState(0);
  const [ticket3, setTicket3] = React.useState(0);
  const date = new Date();
  const [reservationData, setReservationData] = React.useState([]);

  React.useEffect(() => {
    const getReservationData = async () => {
      const data = await AsyncStorage.getItem('reservationData');
      if (data) {
        setReservationData(JSON.parse(data));
      }
    };
    getReservationData();
  }, []);

  React.useEffect(() => {
    setTotalTime(ticket1 * 30 + ticket2 * 60 + ticket3 * 120);
  }, [ticket1, ticket2, ticket3]);

  const reserve = () => {
    const data = {
      date: date,
      time: totalTime,
      parkingLot: '주차장 정보',
    };
    const newReservationData = [...reservationData, data];
    AsyncStorage.setItem('reservationData', JSON.stringify(reservationData));
  };

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
      <View style={styles.btnHolder}>
        <TouchableOpacity
          disabled={ticket1 === 0}
          onPress={() => setTicket1(ticket1 - 1)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>30분</Text>
        <TouchableOpacity onPress={() => setTicket1(ticket1 + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnHolder}>
        <TouchableOpacity
          disabled={ticket2 === 0}
          onPress={() => setTicket2(ticket2 - 1)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>1시간</Text>
        <TouchableOpacity onPress={() => setTicket2(ticket2 + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnHolder}>
        <TouchableOpacity
          disabled={ticket3 === 0}
          onPress={() => setTicket3(ticket3 - 1)}>
          <Text>-</Text>
        </TouchableOpacity>
        <Text>3시간</Text>
        <TouchableOpacity onPress={() => setTicket3(ticket3 + 1)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
      <Text>
        총 예약 시간{' '}
        <Text style={{fontSize: 15, fontWeight: 'bold'}}>
          {' '}
          {Math.floor(totalTime / 60)}시간 {totalTime % 60}분
        </Text>
      </Text>

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
  btnHolder: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 10,
    width: '40%',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginBottom: 20,
  },
});

export default ReserveScreen;
