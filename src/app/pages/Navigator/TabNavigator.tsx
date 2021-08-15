import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SearchStackNavigator,
  WorkStackNavigator,
  MessageStackNavigator,
  ProfileStackNavigator,
} from './StackNavigators';
import { theme } from '../../../configs/constants';
import {
  MessageIcon,
  ProfileIcon,
  SearchIcon,
  WorkIcon,
} from '../../../assets/svgs/icons';

export enum TabScreens {
  Search = 'Search Stack',
  Work = 'Work Stack',
  Message = 'Message Stack',
  Profile = 'Profile Stack',
}

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeBackgroundColor: theme.primaryPurple,
        inactiveBackgroundColor: theme.primaryPurple,
        showLabel: false,
      }}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          if (route.name === TabScreens.Search) {
            return focused ? <SearchIcon thick /> : <SearchIcon />;
          }
          if (route.name === TabScreens.Work) {
            return focused ? <WorkIcon thick /> : <WorkIcon />;
          }
          if (route.name === TabScreens.Message) {
            return focused ? <MessageIcon thick /> : <MessageIcon />;
          }
          if (route.name === TabScreens.Profile) {
            return focused ? <ProfileIcon thick /> : <ProfileIcon />;
          }
        },
      })}
    >
      <Tab.Screen name={TabScreens.Search} component={SearchStackNavigator} />
      <Tab.Screen name={TabScreens.Work} component={WorkStackNavigator} />
      <Tab.Screen
        name={TabScreens.Message}
        component={MessageStackNavigator}
        options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name={TabScreens.Profile} component={ProfileStackNavigator} />
    </Tab.Navigator>
  );
}
