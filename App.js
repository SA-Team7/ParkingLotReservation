import React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    margin: 20,
  },
});

export default App;
