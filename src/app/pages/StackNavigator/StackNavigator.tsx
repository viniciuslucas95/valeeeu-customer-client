import React from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { StackScreens } from '../../../shared/app/pages/enums';
import { LogoSvg } from '../../../shared/assets/svgs';
import { Unit } from '../../../shared/app/helpers';
import { colors } from '../../../shared/configs';
import { Header } from '../../../shared/app/pages/components';
import { MessagePage, SchedulePage } from '../../../shared/app/pages';
import {
  BackButton,
  ButtonsContainer,
  MenuButton,
  MessageButton,
  ScheduleButton,
} from '../../../shared/app/pages/StackNavigator/components';
import { IntroPage } from '../IntroPage';

const { vw } = Unit;
const Stack = createStackNavigator();

export function StackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <Stack.Screen
        name={StackScreens.Intro}
        component={IntroPage}
        options={{
          header: ({ navigation }) => (
            <Header
              leftSide={<LogoSvg size={vw(0.4)} color={colors.white} />}
              rightSide={
                <ButtonsContainer>
                  <MessageButton navigation={navigation} />
                  <ScheduleButton
                    style={{ marginHorizontal: vw(5) }}
                    navigation={navigation}
                  />
                  <MenuButton navigation={navigation} />
                </ButtonsContainer>
              }
            />
          ),
        }}
      />
      <Stack.Screen
        name={StackScreens.Message}
        component={MessagePage}
        options={{
          header: ({ navigation }) => (
            <Header leftSide={<BackButton navigation={navigation} />} />
          ),
        }}
      />
      <Stack.Screen
        name={StackScreens.Schedule}
        component={SchedulePage}
        options={{
          header: ({ navigation }) => (
            <Header leftSide={<BackButton navigation={navigation} />} />
          ),
        }}
      />
    </Stack.Navigator>
  );
}
