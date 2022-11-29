import React from 'react';
import {
  PermissionsAndroid,
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import NaverMapView from 'react-native-nmap';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Geolocation from 'react-native-geolocation-service';

const HomeScreen = ({navigation}) => {
  const [location, setLocation] = React.useState({
    latitude: 37.5408,
    longitude: 126.9783881,
  });
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
    requestLocationPermission();
  }, []);
  console.log(location);
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="format-list-bulleted" size={30} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <NaverMapView
        style={styles.map}
        showsMyLocationButton={true}
        center={{
          zoom: 15,
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
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
});
export default HomeScreen;
