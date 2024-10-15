import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from './views/settings/SettingsScreen.tsx';
import {HomeworksScreen} from '@homeworks/HomeworksScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Homework4} from '@homeworks/homework-4/Homework4.tsx';
import {Homework5} from '@homeworks/homework-5/Homework5.tsx';

const Tab = createBottomTabNavigator();
const HomeworkStack = createNativeStackNavigator();

const HomeworkStackScreen = () => {
  return (
    <HomeworkStack.Navigator>
      <HomeworkStack.Screen
        options={{headerShown: false}}
        name="Homework"
        component={HomeworksScreen}
      />
      <HomeworkStack.Screen
        options={{title: 'Homework 4'}}
        name="Homework4"
        component={Homework4}
      />
      <HomeworkStack.Screen
        options={{title: 'Homework 5'}}
        name="Homework5"
        component={Homework5}
      />
    </HomeworkStack.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen name="Homeworks" component={HomeworkStackScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
