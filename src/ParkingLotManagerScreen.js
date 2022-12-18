import {Text, StyleSheet, View, Button} from 'react-native';

  class ParkingLot {
    SERIAL;
    PARKING_NAME;
    LATITUDE;
    LONGITUDE;
    ADDRESS;
    CAPACITY;
    isAvailable = false;
  
    constructor(SERIAL, PARKING_NAME, LATITUDE, LONGITUDE, ADDRESS) {
      this.SERIAL = SERIAL;
      this.PARKING_NAME = PARKING_NAME;
      this.LATITUDE = LATITUDE;
      this.LONGITUDE = LONGITUDE;
      this.ADDRESS = ADDRESS;
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
  
    constructor(SERIAL, info) {
      super(SERIAL, info.name, info.latitude, info.longitude, info.addr);
    }
  }
  class ParkingLotPrivate extends ParkingLot {
    //attributeSet of private parkingLot
  
    constructor(SERIAL, info) {
      super(SERIAL, info.name, info.latitude, info.longitude, info.addr);
    }
  }
  class ParkingLotSharing extends ParkingLot {
    //attributeSet of sharing parkingLot
  
    constructor(SERIAL, info) {
      super(SERIAL, info.name, info.latitude, info.longitude, info.addr);
    }
  }
  class ParkingLotFactory {
    constructor() {}
  
    createParkingLot(SERIAL, info) { //Create ParkingLot Obj - Factory
      if(info.type === 'public') {
        return new ParkingLotPublic(SERIAL, info);
      } else if(info.type === 'private') {
        return new ParkingLotPrivate(SERIAL, info);
      } else if(info.type === 'sharing') {
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
      this.parkingLotMap.set(SERIAL, this.parkingLotFactory.createParkingLot(SERIAL, info));
      //owner.delegationParkingLot(this.parkingLotMap.get(SERIAL)); //delegation
    }
  }
  
  const plm = new ParkingLotManager();

  const ParkingLotManagerScreen = ({ route, navigation }) => {
    
    const info = {
      type: route.params.type,
      name: route.params.name,
      addr: route.params.addr,
      numOfParkingLot: route.params.numOfParkingLot,
      latitude: route.params.latitude,
      longitude: route.params.longitude,
    }

    console.log('aa');

    plm.registerParkingLot(info);

    navigation.navigate("Home", {
      map: plm.parkingLotMap,
    });

    return (
      <View></View>
    );
  }

  export default ParkingLotManagerScreen;