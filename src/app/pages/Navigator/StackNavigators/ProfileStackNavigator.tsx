import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreens } from '../enums';
import { ProfilePage } from '../..';

const Stack = createStackNavigator();

export function ProfileStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackScreens.Profile} component={ProfilePage} />
    </Stack.Navigator>
  );
}
