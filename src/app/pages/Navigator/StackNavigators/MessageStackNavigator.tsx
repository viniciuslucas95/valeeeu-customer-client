import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { MessagePage } from '../..';

export enum MessageStacks {
  Message = 'Message',
}

const Stack = createStackNavigator();

export function MessageStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={MessageStacks.Message} component={MessagePage} />
    </Stack.Navigator>
  );
}
