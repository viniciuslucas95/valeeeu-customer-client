import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { StackScreens } from '../enums';
import { MessagePage } from '../..';

const Stack = createStackNavigator();

export function MessageStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={StackScreens.Message} component={MessagePage} />
    </Stack.Navigator>
  );
}
