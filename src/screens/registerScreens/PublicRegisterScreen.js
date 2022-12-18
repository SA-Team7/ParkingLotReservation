import React, {Component, useState} from 'react';
import {Text, StyleSheet, View, Button} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const PublicRegisterScreen = ({navigation}) => {

  const [name, onChangeName] = useState('');
  const [addr, onChangeAddr] = useState('');
  const [numOfParkingLot, onChangeNumOfParkingLot] = useState('');
  const [latitude, onChangeLatitude] = useState('');
  const [longitude, onChangeLongitude] = useState('');

  return (
    <View style = {styles.container}>
      <View>
        <Text style={styles.title}>공영 주차장 등록</Text>
        <View>
          <Text style = {styles.text}>주차장명</Text>
          <TextInput 
            style = {styles.input}
            onChangeText = {onChangeName}
            value = { name }/>
        </View>

        <Text style = {styles.text}>주소</Text>
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeAddr}
          value = { addr }/>

        <Text style = {styles.text}>주차장 구획수</Text>
        <TextInput
          style = {styles.input}
          onChangeText = {onChangeNumOfParkingLot}
          value = { numOfParkingLot }/>

        <Text style = {styles.text}>위도</Text>
        <TextInput
          style = {styles.input}
          onChangeText = { onChangeLatitude }
          value = { latitude }/>

        <Text style = {styles.text}>경도</Text>
        <TextInput
          style = { styles.input }
          onChangeText = { onChangeLongitude }
          value = { longitude }/>
        
        <Button title="등록" onPress={() => {
          if(name == "" || addr == "" || numOfParkingLot == "" || latitude == "" || longitude == "") {
            alert("모든 정보를 입력해주세요.");
          } else {
            navigation.navigate("ParkingLotManager", {
              type: "public",
              name: name,
              addr: addr,
              numOfParkingLot: numOfParkingLot,
              latitude: latitude,
              longitude: longitude,
            });
          }
        }}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center'
  },
  title: {
    fontSize: 24,
    top: 10
  },
  input: {
    height: 20,
    margin: 12,
    padding: 1,
    borderBottomWidth: 1
  },
  text: {
    marginTop: 20
  }
});

export default PublicRegisterScreen;