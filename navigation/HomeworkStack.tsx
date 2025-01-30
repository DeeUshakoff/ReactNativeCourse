import {HomeworksScreen} from '@homeworks/HomeworksScreen.tsx';
import {Homework4Screen} from '@homeworks/homework-4/Homework4Screen.tsx';
import {Homework5Screen} from '@homeworks/homework-5/Homework5Screen.tsx';
import Button from '@components/Button.tsx';
import {Homework9Screen} from '@homeworks/homework-9/Homework9Screen.tsx';
import {TaskScreen} from '@homeworks/homework-9/TaskScreen.tsx';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Homework12Screen} from '@homeworks/homework-12/Homework12Screen.tsx';
import {HomeworkThemesScreen} from '@homeworks/homework-themes/HomeworkThemesScreen.tsx';

const HomeworkStack = createNativeStackNavigator();

export const HomeworkStackScreen = () => {
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
        component={Homework4Screen}
      />
      <HomeworkStack.Screen
        options={{title: 'Homework 5'}}
        name="Homework5"
        component={Homework5Screen}
      />
      <HomeworkStack.Screen
        options={{
          title: 'Homework 9',
          headerRight: () => <Button title="Add" />,
        }}
        name="Homework9"
        component={Homework9Screen}
      />
      <HomeworkStack.Screen
        name={'ToDo'}
        component={TaskScreen}
        options={{title: 'New Task'}}
      />
      <HomeworkStack.Screen
        options={{title: 'Homework 12'}}
        name="Homework12"
        component={Homework12Screen}
      />
      <HomeworkStack.Screen
        options={{title: 'Homework Themes'}}
        name="HomeworkThemes"
        component={HomeworkThemesScreen}
      />
    </HomeworkStack.Navigator>
  );
};
