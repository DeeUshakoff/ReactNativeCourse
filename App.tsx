import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-get-random-values';
import {TabNavigator} from './navigation/TabNavigator.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';

const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <Host>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Host>
    </GestureHandlerRootView>
  );
};

export default App;
