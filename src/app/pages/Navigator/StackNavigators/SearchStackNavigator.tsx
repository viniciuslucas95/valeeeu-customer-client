import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreens } from '../../enums';
import { SearchPage, SeeWorkerProfilePage } from '../..';
import { Header } from '../../../components';

const Stack = createStackNavigator();

export function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={StackScreens.SearchPage}
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={StackScreens.SeeWorkerProfilePage}
        component={SeeWorkerProfilePage}
        options={{
          header: ({ navigation }) => (
            <Header navigation={navigation}>Trabalhador</Header>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
