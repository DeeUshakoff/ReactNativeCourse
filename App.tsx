import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-get-random-values';
import {TabNavigator} from './navigation/TabNavigator.tsx';

const App = () => {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
