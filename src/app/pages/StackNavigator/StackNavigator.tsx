import React, { useContext } from 'react';
import {
  CardStyleInterpolators,
  createStackNavigator,
} from '@react-navigation/stack';
import { LogoSvg } from '../../../shared/assets/svgs';
import { Unit } from '../../../shared/app/helpers';
import { colors } from '../../../shared/configs';
import { MessagePage, SchedulePage } from '../../../shared/app/pages';
import {
  BackButton,
  MenuButton,
  MessageButton,
  ScheduleButton,
} from '../../../shared/app/components/Header/HeaderButtons';
import { IntroPage } from '../IntroPage';
import { MainScreens } from '../../enums';
import { ButtonsContainer } from '../ResultPage/components/PictureSection/styles';
import { Header } from '../../../shared/app/components';
import { ResultPage } from '../ResultPage';
import { FakeInputButton, ResultExtendedHeader } from '../../components';
import { Sizes } from '../../../shared/app/enums';
import { loginContext } from '../../../shared/app/contexts';
import { LoginStack } from '../../../shared/app/pages/StackNavigators';

const { vw } = Unit;
const Stack = createStackNavigator();

export function StackNavigator() {
  const { account } = useContext(loginContext);

  return (
    <>
      {account ? (
        <Stack.Navigator
          screenOptions={{
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
          }}
        >
          <Stack.Screen
            name={MainScreens.Intro}
            options={{
              header: ({ navigation }) => (
                <Header
                  leftSide={<LogoSvg size={vw(0.4)} color={colors.white} />}
                  rightSide={
                    <ButtonsContainer>
                      <MessageButton navigation={navigation} />
                      <ScheduleButton navigation={navigation} />
                      <MenuButton navigation={navigation} />
                    </ButtonsContainer>
                  }
                />
              ),
            }}
          >
            {({ navigation }) => <IntroPage navigation={navigation} />}
          </Stack.Screen>
          <Stack.Screen
            name={MainScreens.Result}
            component={ResultPage}
            options={{
              header: ({ navigation }) => (
                <Header
                  extendedHeader={<ResultExtendedHeader />}
                  leftSide={
                    <>
                      <BackButton navigation={navigation} />
                      <FakeInputButton
                        placeholderText='Buscar...'
                        onPress={() => console.log('new search pressed')}
                        size={Sizes.small}
                        width='auto'
                        style={{ flex: 1 }}
                      />
                    </>
                  }
                  rightSide={
                    <ButtonsContainer>
                      <MessageButton navigation={navigation} />
                      <ScheduleButton navigation={navigation} />
                      <MenuButton navigation={navigation} />
                    </ButtonsContainer>
                  }
                />
              ),
            }}
          />
          <Stack.Screen
            name={MainScreens.Message}
            component={MessagePage}
            options={{
              header: ({ navigation }) => (
                <Header leftSide={<BackButton navigation={navigation} />} />
              ),
            }}
          />
          <Stack.Screen
            name={MainScreens.Schedule}
            component={SchedulePage}
            options={{
              header: ({ navigation }) => (
                <Header leftSide={<BackButton navigation={navigation} />} />
              ),
            }}
          />
        </Stack.Navigator>
      ) : (
        <LoginStack />
      )}
    </>
  );
}
