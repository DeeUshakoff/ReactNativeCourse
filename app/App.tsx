import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-get-random-values';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {SettingsScreen} from './views/settings/SettingsScreen.tsx';
import {HomeworksScreen} from '@homeworks/HomeworksScreen.tsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Homework4} from '@homeworks/homework-4/Homework4.tsx';
import {Homework5} from '@homeworks/homework-5/Homework5.tsx';
import {Homework9} from '@homeworks/homework-9/Homework9.tsx';
import Button from '@components/Button.tsx';
import {TaskScreen} from '@homeworks/homework-9/TaskView.tsx';

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
      <HomeworkStack.Screen
        options={{
          title: 'Homework 9',
          headerRight: () => <Button title="Add" />,
        }}
        name="Homework9"
        component={Homework9}
      />
      <HomeworkStack.Screen
        name={'ToDo'}
        component={TaskScreen}
        options={{title: 'New Task'}}
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
