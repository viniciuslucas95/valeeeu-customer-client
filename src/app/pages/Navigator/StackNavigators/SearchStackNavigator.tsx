import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreens } from '../../enums';
import { SearchPage, SeeWorkerProfilePage } from '../..';

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
      />
    </Stack.Navigator>
  );
}
