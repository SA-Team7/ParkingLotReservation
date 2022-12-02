import React from 'react';
import {Animated, Dimensions, Image, StyleSheet} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';
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
      <Animated.Image style={styles.img} source={src} resizeMode="cover" />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: getStatusBarHeight(),
    left: 0,
    right: 0,
    height: Max_Header_Height,
    overflow: 'hidden',
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
