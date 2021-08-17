import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreens } from '../../enums';
import { ProfilePage, CreateAccountPage } from '../..';
import { Header } from '../../../components/';

const Stack = createStackNavigator();

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreens.Profile}
        component={ProfilePage}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation}>Login</Header>
          ),
        }}
      />
      <Stack.Screen
        name={StackScreens.CreateAccount}
        component={CreateAccountPage}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation}>Criar Conta</Header>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
