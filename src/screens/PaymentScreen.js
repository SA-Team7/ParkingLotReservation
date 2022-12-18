import React, {Component} from 'react';
import {StyleSheet, Text, Button, View, Alert} from 'react-native';

function Separator() {
  return <View style={styles.separator} />;
}
const PaymentScreen = ({route, navigation}) => {
  console.log(route.params.item);
  const reserve = route.params.reserve;
  return (
    <View style={styles.container}>
      <Text style={styles.title}> 결제 방법 </Text>
      <Button
        title="카드 결제"
        onPress={() => {
          Alert.alert('결제가 완료 되었습니다.');
          reserve();
          navigation.navigate('ParkingLotManager', {
            type2: 1,
          });
        }}
      />
      <Separator />
      <Button
        title="카카오 페이"
        color="#FFFF00"
        onPress={() => {
          Alert.alert('결제가 완료 되었습니다.');
          reserve();
          navigation.navigate('ParkingLotManager', {
            type2: 1,
          });
        }}
      />
      <Separator />
      <Button
        title="네이버 페이"
        color="#81c147"
        onPress={() => {
          Alert.alert('결제가 완료 되었습니다.');
          reserve();
          navigation.navigate('ParkingLotManager', {
            type2: 1,
          });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    paddingVertical: 30,
    fontSize: 35,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttonSize: {
    margin: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDD',
    padding: 10,
  },
});

export default PaymentScreen;
