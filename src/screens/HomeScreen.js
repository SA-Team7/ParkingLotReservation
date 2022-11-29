import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import NaverMapView from 'react-native-nmap';
import Icon from 'react-native-vector-icons/MaterialIcons';
const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.button}>
          <Icon name="format-list-bulleted" size={30} color="black" />
        </TouchableOpacity>
        <TextInput style={styles.input} placeholder="Search" />
      </View>
      <NaverMapView style={styles.map} />
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
