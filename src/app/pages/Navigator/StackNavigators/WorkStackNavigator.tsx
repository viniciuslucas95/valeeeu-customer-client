import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { WorkPage } from '../..';

export enum WorkStacks {
  Work = 'Work Page',
}

const Stack = createStackNavigator();

export function WorkStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={WorkStacks.Work} component={WorkPage} />
    </Stack.Navigator>
  );
}
