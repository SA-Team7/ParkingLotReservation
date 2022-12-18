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

const ParkingLotListScreen = ({ route, navigation }) => {
  
    // route.params.item:
  // SERIAL
  // PARKING_NAME
  // LATITUDE
  // LONGITUDE
  // ADDRESS
  // CAPACITY
  // operatingTime = {
  //   open: "08:00",
  //   close: "23:00"
  // }
  // operatingTimeHoliday = {
  //   open: "08:00",
  //   close: "23:00"
  // }
  // fee = {
  //   hour: "3000",
  //   halfHour: "2000",
  // }

  const parkingLot = [];
  route.params.map.forEach((item) => {
    parkingLot.push(
     <TouchableOpacity style={styles.ticketContainer} onPress = {() => [
        navigation.navigate('Info', {
            item: item,
        })
     ]}>
      <View>
          <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 5}}>
            주차장 명: {item.PARKING_NAME}
          </Text>
          <Text>주소: {item.ADDRESS}</Text>
          <Text>주차 가능 공간: {item.CAPACITY}석</Text>
      </View>
     </TouchableOpacity>
    );
  })

  return (
    <ScrollView contentContainerStyle={styles.container}>{parkingLot}</ScrollView>
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

export default ParkingLotListScreen;
