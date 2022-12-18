import React from 'react';
import {
  Animated,
  Dimensions,
  Image,
  Platform,
  StyleSheet,
  Text,
} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
import Icon from 'react-native-vector-icons/MaterialIcons';
const windowHeight = Dimensions.get('window').height;
const Max_Header_Height = windowHeight * 0.3;
const Min_Header_Height = 0;
const AnimatedHeader = ({animatedValue, src}) => {
  const Scroll_Distance = Max_Header_Height - Min_Header_Height;

  const animatedHeaderHeight = animatedValue.interpolate({
    inputRange: [0, Scroll_Distance],
    outputRange: [Max_Header_Height, Min_Header_Height],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, {height: animatedHeaderHeight}]}>
      <Icon name="image-not-supported" size={30} />
      <Text>이미지 없음</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: Max_Header_Height,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E6E3EA',
  },
  img: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: Max_Header_Height,
    width: `100%`,
  },
});

export default AnimatedHeader;
