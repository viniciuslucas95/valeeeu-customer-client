import React, { useRef } from 'react';
import { vw } from '../../../helpers/units';
import { Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import { Content1, Content2, Content3 } from './Contents';
import { Screens } from './styles';

const animationDuration = 50;
const swipeDistance = vw(5);
const screenWidth = vw(100);

interface IProps {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  skipIntro(): void;
}

export function ContentChanger({ setScreen, skipIntro }: IProps) {
  const isAnimating = useRef(false);
  const screen = useRef(0);
  const translateX = useRef(new Animated.Value(0)).current;

  function nextScreen() {
    if (screen.current == 2) return;

    screen.current++;
    setScreen(screen.current);
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
    setScreen(screen.current);
    isAnimating.current = true;

    Animated.timing(translateX, {
      toValue: screen.current == 1 ? -screenWidth : 0,
      duration: animationDuration,
      useNativeDriver: true,
    }).start(() => (isAnimating.current = false));
  }

  function swipe(event: any) {
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
    <PanGestureHandler onHandlerStateChange={(e) => swipe(e.nativeEvent)}>
      <Screens>
        <Content1 translateX={translateX} />
        <Content2 translateX={translateX} />
        <Content3 translateX={translateX} skipIntro={skipIntro} />
      </Screens>
    </PanGestureHandler>
  );
}
