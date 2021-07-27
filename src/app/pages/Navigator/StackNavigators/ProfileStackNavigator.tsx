import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { ProfilePage } from '../..';

export enum ProfileStacks {
  Profile = 'Profile Page',
}

const Stack = createStackNavigator();

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={ProfileStacks.Profile} component={ProfilePage} />
    </Stack.Navigator>
  );
}
