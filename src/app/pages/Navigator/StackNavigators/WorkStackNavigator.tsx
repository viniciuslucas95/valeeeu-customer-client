import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreens } from '../../enums';
import { WorkPage } from '../..';

const Stack = createStackNavigator();

export function WorkStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackScreens.Work} component={WorkPage} />
    </Stack.Navigator>
  );
}
