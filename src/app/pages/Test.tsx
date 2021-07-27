import React, { useRef } from 'react';
import { Dimensions } from 'react-native';
import { View, StyleSheet, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

const screenWidth = Dimensions.get('window').width;
const swipeDistance = screenWidth / 20;
const animationDuration = 50;

export function Test() {
  const isAnimating = useRef(false);
  const screen = useRef(0);
  const translateX = useRef(new Animated.Value(0)).current;

  function nextScreen() {
    if (screen.current == 2) return;

    screen.current++;
    isAnimating.current = true;

    Animated.timing(translateX, {
      toValue: screen.current == 1 ? -screenWidth : -screenWidth * 2,
      duration: animationDuration,
      useNativeDriver: true,
    }).start(() => (isAnimating.current = false));
  }

  function previousScreen() {
    if (screen.current == 0) return;

    screen.current--;
    isAnimating.current = true;

    Animated.timing(translateX, {
      toValue: screen.current == 1 ? -screenWidth : 0,
      duration: animationDuration,
      useNativeDriver: true,
    }).start(() => (isAnimating.current = false));
  }

  function pan(event: any) {
    if (isAnimating.current) return;

    if (event.state != State.END) return;

    if (event.translationX > swipeDistance) {
      previousScreen();
      return;
    }

    if (event.translationX < -swipeDistance) {
      nextScreen();
      return;
    }
  }

  return (
    <View style={styles.container}>
      <PanGestureHandler onHandlerStateChange={(e) => pan(e.nativeEvent)}>
        <View style={styles.boxContainer}>
          <Animated.View
            style={[
              styles.box1,
              {
                transform: [{ translateX: translateX }],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.box2,
              {
                transform: [{ translateX: translateX }],
              },
            ]}
          />
          <Animated.View
            style={[
              styles.box3,
              {
                transform: [{ translateX: translateX }],
              },
            ]}
          />
        </View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  boxContainer: {
    flexDirection: 'row',
  },
  box1: {
    width: screenWidth,
    height: 100,
    backgroundColor: 'red',
  },
  box2: {
    width: screenWidth,
    height: 100,
    backgroundColor: 'yellow',
  },
  box3: {
    width: screenWidth,
    height: 100,
    backgroundColor: 'green',
  },
});
