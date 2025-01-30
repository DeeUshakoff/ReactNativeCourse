import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-get-random-values';
import {TabNavigator} from './navigation/TabNavigator.tsx';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Host} from 'react-native-portalize';
import Navigation from './navigation/Navigation.ts';
import {DeepLinking} from './navigation/DeepLinking.ts';
import {Linking} from 'react-native';
import {observer} from 'mobx-react';
import {ThemeProvider} from '@modules/theme/ThemeProvider.tsx';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App = observer(() => {
  useEffect(() => {
    AsyncStorage.setItem('hui', 'hui').then(() => {
      console.log(AsyncStorage.getItem('hui'));
    });
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  }, []);
  return (
    <ThemeProvider>
      <GestureHandlerRootView style={{flex: 1}}>
        <Host>
          <NavigationContainer
            linking={DeepLinking.linking}
            ref={Navigation.navigationRef}>
            <TabNavigator />
          </NavigationContainer>
        </Host>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
});

export default App;
