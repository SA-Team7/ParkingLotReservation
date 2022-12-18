import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import ReserveScreen from '../screens/ReserveScreen';
import ParkingLotInfoScreen from '../screens/ParkingLotInfoScreen';

import MainRegisterScreen from '../screens/registerScreens/MainRegisterScreen';
import PublicRegisterScreen from '../screens/registerScreens/PublicRegisterScreen';
import PrivateRegisterScreen from '../screens/registerScreens/PrivateRegisterScreen';
import SharingRegisterScreen from '../screens/registerScreens/SharingRegisterScreen';
import ParkingLotManagerScreen from '../ParkingLotManagerScreen';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Info" component={ParkingLotInfoScreen} />
      <Stack.Screen name="Reservation" component={ReserveScreen} />

      <Stack.Screen name="MainRegister" component={MainRegisterScreen} />
      <Stack.Screen name="PublicRegister" component={PublicRegisterScreen} />
      <Stack.Screen name="PrivateRegister" component={PrivateRegisterScreen} />
      <Stack.Screen name="SharingRegister" component={SharingRegisterScreen} />
      <Stack.Screen
        name="ParkingLotManager"
        component={ParkingLotManagerScreen}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
