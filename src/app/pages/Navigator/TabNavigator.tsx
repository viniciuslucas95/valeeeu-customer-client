import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {
  SearchStackNavigator,
  ScheduleStackNavigator,
  MessageStackNavigator,
  ProfileStackNavigator,
} from './StackNavigators';
import { theme } from '../../../configs/constants';
import {
  MessageIcon,
  ProfileIcon,
  SearchIcon,
  ScheduleIcon,
} from '../../../assets/svgs/icons';
import { TabScreens } from '../enums';
import { LoadingPage } from '../';
import { mapContext } from '../../contexts';

const Tab = createBottomTabNavigator();

export function TabNavigator() {
  const { isLoaded } = useContext(mapContext);

  return (
    <>
      <Tab.Navigator
        tabBarOptions={{
          activeBackgroundColor: theme.purple,
          inactiveBackgroundColor: theme.purple,
          showLabel: false,
        }}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused }) => {
            if (route.name === TabScreens.Search) {
              return focused ? <SearchIcon thick /> : <SearchIcon />;
            }
            if (route.name === TabScreens.Message) {
              return focused ? <MessageIcon thick /> : <MessageIcon />;
            }
            if (route.name === TabScreens.Schedule) {
              return focused ? <ScheduleIcon thick /> : <ScheduleIcon />;
            }
            if (route.name === TabScreens.Profile) {
              return focused ? <ProfileIcon thick /> : <ProfileIcon />;
            }
          },
        })}
      >
        <Tab.Screen name={TabScreens.Search} component={SearchStackNavigator} />
        <Tab.Screen
          name={TabScreens.Message}
          component={MessageStackNavigator}
          options={{ tabBarBadge: 3 }}
        />
        <Tab.Screen
          name={TabScreens.Schedule}
          component={ScheduleStackNavigator}
          options={{ tabBarBadge: 1 }}
        />
        <Tab.Screen
          name={TabScreens.Profile}
          component={ProfileStackNavigator}
        />
      </Tab.Navigator>
      {isLoaded ? null : <LoadingPage />}
    </>
  );
}
