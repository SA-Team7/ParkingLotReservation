import React, {Component} from 'react';
import {Button, Text, StyleSheet, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const SharingRegisterScreen = ({navigation}) => {
  return (
    <View style = {styles.container}>
      <View>
        <Text style = {styles.title}>개인 공유 주차장 등록</Text>

        <Text style = {styles.text}>주차장명</Text>
        <TextInput style = {styles.input}></TextInput>

        <Text style = {styles.text}>주소</Text>
        <TextInput style = {styles.input}></TextInput>

        <Text style = {styles.text}>주차장 구획수</Text>
        <TextInput style = {styles.input}></TextInput>
        
        <Button title="등록"></Button>
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

export default SharingRegisterScreen;
