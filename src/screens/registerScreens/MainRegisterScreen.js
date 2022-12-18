import React from 'react';
import {Button, StyleSheet, View} from 'react-native';

const MainRegisterScreen = ({navigation}, route) => {

  return (
    <View style = {styles.Container}>
      <View>
        <Button style = {styles.Button} title="공영 주차장 등록" onPress={() => {
          navigation.navigate("PublicRegister")
        }}></Button>
        <Button style = {styles.Button} title="민영 주차장 등록" onPress={() => {
          navigation.navigate("PrivateRegister")
        }}></Button>
        <Button style = {styles.Button} title="개인 공유 주차장 등록" onPress={() => {
          navigation.navigate("SharingRegister")
        }}></Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default MainRegisterScreen;