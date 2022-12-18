import React from 'react';
import {
  Alert,
  Button,
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import NaverMapView, {Marker} from 'react-native-nmap';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from 'react-native-geolocation-service';

const HomeScreen = ({route, navigation}) => {
  const [location, setLocation] = React.useState({
    latitude: 37.541650730110426,
    longitude: 127.07881353966297,
  });

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        setLocation({latitude, longitude});
      },
      error => {
        console.log(error.code, error.message);
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  React.useEffect(() => {
    const requestLocationPermission = async () => {
      if (Platform.OS === 'ios') {
        await Geolocation.requestAuthorization('whenInUse');
        getCurrentLocation();
      } else {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      }
    };
    requestLocationPermission();
  }, []);

  console.log(location);

  const markker = [];
  if (route.params != null) {
    route.params.map.forEach(item => {
      const form = {
        latitude: parseFloat(item.LATITUDE),
        longitude: parseFloat(item.LONGITUDE),
      };
      markker.push(
        <Marker
          coordinate={form}
          pinColor="blue"
          onClick={() => {
            navigation.navigate('Info', {
              item: item,
            });
            console.log(item);
          }}
        />,
      );
    });
  }

  /* TEST 용 CODE
  const p0 = { latitude: 37.54616167171836, longitude: 127.06933553964075};
  const test = {
    TYPE: "공영주차장",
    SERIAL: "50271828",
    PARKING_NAME: "jisung",
    ADDRESS: "동일로28길 47",
    LATITUDE: "37.54616167171836",
    LONGITUDE: "127.06933553964075",
    CAPACITY: "24",
  }
  markker.push(<Marker coordinate={p0} pinColor="red" onClick={() => {
    navigation.navigate('Info', {
      item: test,
    });
  }}></Marker>) */

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Confirm')}>
          <Icon name="format-list-bulleted" size={30} color="black" />
        </TouchableOpacity> */}
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <NaverMapView
        style={styles.map}
        showsMyLocationButton={true}
        center={{
          zoom: 15,
          latitude: location.latitude,
          longitude: location.longitude,
        }}>
        {markker}
      </NaverMapView>

      <View style={styles.bottomContainer}>
        
        <View style={styles.bottomBtn}>
          <Button
            title="주차장 등록"
            onPress={() => {
              navigation.navigate('PublicRegister');
            }}></Button>
        </View>
        <View style={styles.bottomBtn}>
          <Button title="목록 보기" onPress={() => {}}></Button>
        </View>
        <View style={styles.bottomBtn}>
          <Button
            title="예약 확인"
            onPress={() => {
              navigation.navigate('Confirm');
            }}></Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    position: 'absolute',
    top: 40,
    zIndex: 1,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    flex: 1,
    height: 45,
    paddingLeft: 20,
    backgroundColor: 'white',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#807F82',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  button: {
    marginRight: 10,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 30,
    zIndex: 1,
    width: '80%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomBtn: {
    padding: 5,
  },
});
export default HomeScreen;
