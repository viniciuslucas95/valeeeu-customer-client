import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { SearchPage, SeeWorkerProfilePage } from '../..';

export enum SearchStacks {
  SearchPage = 'Search Page',
  SeeWorkerProfilePage = 'See Worker Profile Page',
}

const Stack = createStackNavigator();

export function SearchStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SearchStacks.SearchPage}
        component={SearchPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={SearchStacks.SeeWorkerProfilePage}
        component={SeeWorkerProfilePage}
      />
    </Stack.Navigator>
  );
}
