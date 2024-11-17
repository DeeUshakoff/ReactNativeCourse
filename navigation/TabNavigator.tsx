import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeworkStackScreen} from './HomeworkStack.tsx';
import {SettingsScreen} from '../app/views/settings/SettingsScreen.tsx';
import React from 'react';

const Tab = createBottomTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Homeworks" component={HomeworkStackScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};
