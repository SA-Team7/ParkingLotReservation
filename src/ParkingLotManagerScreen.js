import {Text, StyleSheet, View, Button} from 'react-native';

class ParkingLot {
  SERIAL;
  PARKING_NAME;
  LATITUDE;
  LONGITUDE;
  ADDRESS;
  CAPACITY;
  operatingTime = {
    open: '08:00',
    close: '23:00',
  };
  operatingTimeHoliday = {
    open: '08:00',
    close: '23:00',
  };
  fee = {
    hour: '3000',
    halfHour: '2000',
  };
  isAvailable = false;

  constructor(SERIAL, PARKING_NAME, LATITUDE, LONGITUDE, ADDRESS, CAPACITY) {
    this.SERIAL = SERIAL;
    this.PARKING_NAME = PARKING_NAME;
    this.LATITUDE = LATITUDE;
    this.LONGITUDE = LONGITUDE;
    this.ADDRESS = ADDRESS;
    this.CAPACITY = CAPACITY;
  }

  setAvailable(isAvailable) {
    this.isAvailable = isAvailable;
  }
  isAvailable() {
    return this.isAvailable;
  }
}
class ParkingLotPublic extends ParkingLot {
  //attributeSet of public parkingLot
  TYPE;

  constructor(SERIAL, info) {
    super(
      SERIAL,
      info.name,
      info.latitude,
      info.longitude,
      info.addr,
      info.capacity,
    );
    this.TYPE = '공영주차장';
  }
}
class ParkingLotPrivate extends ParkingLot {
  //attributeSet of private parkingLot
  TYPE;

  constructor(SERIAL, info) {
    super(
      SERIAL,
      info.name,
      info.latitude,
      info.longitude,
      info.addr,
      info.capacity,
    );
    this.TYPE = '민영주차장';
  }
}
class ParkingLotSharing extends ParkingLot {
  //attributeSet of sharing parkingLot
  TYPE;

  constructor(SERIAL, info) {
    super(
      SERIAL,
      info.name,
      info.latitude,
      info.longitude,
      info.addr,
      info.capacity,
    );
    this.TYPE = '공유주차장';
  }
}
class ParkingLotFactory {
  constructor() {}

  createParkingLot(SERIAL, info) {
    //Create ParkingLot Obj - Factory
    if (info.type === 'public') {
      return new ParkingLotPublic(SERIAL, info);
    } else if (info.type === 'private') {
      return new ParkingLotPrivate(SERIAL, info);
    } else if (info.type === 'sharing') {
      return new ParkingLotSharing(SERIAL, info);
    }
  }
}
class ParkingLotManager {
  parkingLotFactory;
  parkingLotMap;

  constructor() {
    this.parkingLotFactory = new ParkingLotFactory();
    this.parkingLotMap = new Map();
  }

  registerParkingLot(info) {
    SERIAL = Date.now();
    this.parkingLotMap.set(
      SERIAL,
      this.parkingLotFactory.createParkingLot(SERIAL, info),
    );
    //owner.delegationParkingLot(this.parkingLotMap.get(SERIAL)); //delegation
  }
}

const plm = new ParkingLotManager();

const ParkingLotManagerScreen = ({route, navigation}) => {
  const info = {
    type: route.params.type,
    name: route.params.name,
    addr: route.params.addr,
    capacity: route.params.numOfParkingLot,
    latitude: route.params.latitude,
    longitude: route.params.longitude,
  };

  plm.registerParkingLot(info);

  navigation.navigate('Home', {
    map: plm.parkingLotMap,
  });

  return <View></View>;
};

export default ParkingLotManagerScreen;
