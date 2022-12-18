import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import AnimatedHeader from '../components/AnimatedHeader';
const windowHeight = Dimensions.get('window').height;

const ParkingLotInfoScreen = ({route, navigation}) => {
  const scrollOffsetY = React.useRef(new Animated.Value(0)).current;

  // route.params.item:
  // SERIAL
  // PARKING_NAME
  // LATITUDE
  // LONGITUDE
  // ADDRESS
  // CAPACITY
  // operatingTime = {
  //   open: "08:00",
  //   close: "23:00"
  // }
  // operatingTimeHoliday = {
  //   open: "08:00",
  //   close: "23:00"
  // }
  // fee = {
  //   hour: "3000",
  //   halfHour: "2000",
  // }

  return (
    <View style={styles.container}>
      <AnimatedHeader
        animatedValue={scrollOffsetY}
        src={require('../assets/img/img_example_parkinglot.png')}
      />

      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={{
          paddingTop: windowHeight * 0.3 - 25,
          height: windowHeight * 0.7,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          backgroundColor: 'white',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          flex: 1,
        }}
        scrollEventThrottle={16}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollOffsetY}}}],
          {useNativeDriver: false},
        )}>
        <View style={{marginTop: 25, alignItems: 'center'}}>
          <Text style={styles.nameText}>{route.params.item.PARKING_NAME}</Text>
          <Text style={styles.text}>{route.params.item.ADDRESS}</Text>
          <Text style={styles.text}>{route.params.item.TYPE}</Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text>즐겨찾기</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text>길찾기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.text}>주차요금</Text>
          <Text style={styles.text}>1시간 {route.params.item.fee.hour}원</Text>
        </View>
        <View style={styles.infoTextContainer}>
          <Text style={styles.text}>운영시간</Text>
          <Text style={styles.text}>
            {route.params.item.operatingTime.open} ~{' '}
            {route.params.item.operatingTime.close}
          </Text>
        </View>
        <View style={styles.line}></View>
        <View style={{width: '90%', alignItems: 'center'}}>
          <Text style={{alignSelf: 'flex-start', paddingLeft: 30}}>
            시간요금
          </Text>
          <View style={styles.extraInfo}>
            <View style={styles.infoTextContainer}>
              <Text>기본요금</Text>
              <Text>30분 {route.params.item.fee.halfHour}원</Text>
            </View>
            <View style={styles.infoTextContainer}>
              <Text>추가요금</Text>
              <Text>60분당 {route.params.item.fee.hour}원</Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.reservationButton}
        onPress={() => {
          navigation.navigate('Reservation', {
            item: route.params.item,
          });
        }}>
        <Text style={styles.buttonText}>예약하기</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  nameText: {
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 10,
    textAlign: 'center',
  },
  line: {
    width: '100%',
    height: 1,
    backgroundColor: 'lightgrey',
    marginTop: 20,
    marginBottom: 30,
  },
  text: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 20,
  },
  reservationButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 40,
    paddingHorizontal: 40,
    paddingVertical: 10,
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  extraInfo: {
    borderRadius: 10,
    borderWidth: 1,
    width: '90%',
    height: 200,
    marginTop: 20,
    padding: 20,
  },
});
export default ParkingLotInfoScreen;
