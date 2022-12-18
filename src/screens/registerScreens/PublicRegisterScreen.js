import React, {Component, useState} from 'react';
import {
  Text,
  StyleSheet,
  View,
  Button,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Postcode from '@actbase/react-daum-postcode';
import axios from 'axios';
const PublicRegisterScreen = ({navigation}) => {
  const [name, onChangeName] = useState('');
  const [addr, onChangeAddr] = useState();
  const [numOfParkingLot, onChangeNumOfParkingLot] = useState('');
  const [latitude, onChangeLatitude] = useState('');
  const [longitude, onChangeLongitude] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  React.useEffect(() => {
    const getLoc = () => {
      axios
        .get(
          `https://dapi.kakao.com/v2/local/search/address.json?query=${addr}`,
          {
            headers: {
              Authorization: `KakaoAK ${'2960a29ac9336f395de65568a0f5df10'}`,
            },
          },
        )
        .then(res => {
          const longitude = res.data.documents[0].x;
          const latitude = res.data.documents[0].y;
          onChangeLongitude(longitude);
          onChangeLatitude(latitude);
        });
    };
    getLoc();
  }, [addr]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>공영 주차장 등록</Text>
        <View>
          <Text style={styles.text}>주차장명</Text>
          <TextInput
            style={styles.input}
            onChangeText={onChangeName}
            value={name}
          />
        </View>

        <Text style={styles.text}>주소</Text>

        <TouchableOpacity
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderBottomWidth: 1,
            alignItems: 'center',
          }}
          onPress={() => setModalVisible(true)}>
          <Text style={{color: 'gray'}}>{addr ? addr : '주소 검색'}</Text>
          <Icon name="search" size={30} color="black" />
        </TouchableOpacity>

        <Text style={styles.text}>주차장 구획수</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumOfParkingLot}
          value={numOfParkingLot}
        />

        <Text style={styles.text}>위도</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLatitude}
          value={latitude}
        />

        <Text style={styles.text}>경도</Text>
        <TextInput
          style={styles.input}
          onChangeText={onChangeLongitude}
          value={longitude}
        />

        <Button
          title="등록"
          onPress={() => {
            if (
              name == '' ||
              addr == '' ||
              numOfParkingLot == '' ||
              latitude == '' ||
              longitude == ''
            ) {
              alert('모든 정보를 입력해주세요.');
            } else {
              navigation.navigate('ParkingLotManager', {
                type: 'public',
                name: name,
                addr: addr,
                numOfParkingLot: numOfParkingLot,
                latitude: latitude,
                longitude: longitude,
              });
            }
          }}></Button>
      </View>
      <Modal visible={modalVisible}>
        <SafeAreaView>
          <View
            style={{
              justifyContent: 'center',
            }}>
            <Text
              style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold'}}>
              주소 검색
            </Text>
            <TouchableOpacity
              style={{position: 'absolute', right: 10}}
              activeOpacity={0.1}>
              <Icon
                name="close"
                size={30}
                onPress={() => setModalVisible(false)}
              />
            </TouchableOpacity>
          </View>

          <Postcode
            style={{width: '100%', height: '100%', marginTop: 10}}
            jsOptions={{animated: true}}
            onSelected={data => {
              console.log(data);
              onChangeAddr(data.address);
              setModalVisible(false);
            }}
          />
        </SafeAreaView>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    top: 10,
  },
  input: {
    height: 20,
    margin: 12,
    padding: 1,
    borderBottomWidth: 1,
  },
  text: {
    marginTop: 20,
  },
});

export default PublicRegisterScreen;
