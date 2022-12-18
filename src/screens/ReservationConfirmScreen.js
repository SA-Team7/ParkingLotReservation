/* eslint-disable prettier/prettier */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Alert,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const ReservationConfirmScreen = () => {
  const [reservationData, setReservationData] = React.useState([]);

  React.useEffect(() => {
    const getReservationData = async () => {
      const data = await AsyncStorage.getItem('reservationData');
      if (data) {
        console.log(data);
        setReservationData(JSON.parse(data));
      }
    };
    getReservationData();
  }, []);

  const cancelReservation = index => {
    const newReservationData = reservationData.filter(
      (item, itemIndex) => itemIndex !== index,
    );
    setReservationData(newReservationData);
    AsyncStorage.setItem('reservationData', JSON.stringify(newReservationData));
  };

  const ticket = reservationData.map((item, index) => {
    return (
      <View key={index} style={styles.ticketContainer}>
        <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>
            {item.parkingLotName}
          </Text>
          <Text>{item.address}</Text>
          <Text style={{fontSize: 15, fontWeight: '500', marginVertical: 5}}>
            {Math.floor(item.time / 60)}시간 {item.time % 60}분
          </Text>
          <Text>예약날짜: {item.date.split('T')[0]}</Text>
        </View>

        <TouchableOpacity
          style={styles.btnContainer}
          onPress={() => {
            Alert.alert('예약취소', '예약을 취소하시겠습니까?', [
              {text: '아니오'},
              {text: '예', onPress: () => cancelReservation(index)},
            ]);
          }}>
          <Text>예약취소</Text>
        </TouchableOpacity>
      </View>
    );
  });

  return (
    <ScrollView contentContainerStyle={styles.container}>{ticket}</ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  ticketContainer: {
    width: '90%',
    height: 'auto',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 10,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btnContainer: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: 'lightgrey',
    padding: 5,
  },
});

export default ReservationConfirmScreen;
