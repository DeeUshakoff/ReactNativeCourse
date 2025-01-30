import React, {createContext, useEffect, useState} from 'react';
import {Appearance, NativeEventSubscription} from 'react-native';
import {IThemeContext, ThemeType, ThemeTypes} from './ThemeTypes.ts';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_KEY = '@THEME';
export const ThemeContext = createContext<IThemeContext | undefined>(undefined);

interface IProps {
  children: JSX.Element;
}

export const ThemeProvider: React.FC<IProps> = ({children}) => {
  const [theme, setTheme] = useState<ThemeType>(ThemeTypes.SYSTEM);
  const [selectTheme, setSelectTheme] = useState<ThemeTypes>(ThemeTypes.SYSTEM);
  useEffect(() => {
    (async () => {
      const savedTheme = (await AsyncStorage.getItem(THEME_KEY)) as ThemeTypes;
      if (!savedTheme) {
        return;
      }
      changeTheme(savedTheme);
    })();
  }, []);
  useEffect(() => {
    let listener: NativeEventSubscription;
    if (selectTheme === ThemeTypes.SYSTEM) {
      listener = Appearance.addChangeListener(({colorScheme}) => {
        if (colorScheme) {
          setTheme(colorScheme as ThemeType);
        }
      });
    }
    return () => {
      if (listener) {
        listener.remove();
      }
    };
  }, [selectTheme]);
  const changeTheme = (newTheme: ThemeTypes) => {
    setSelectTheme(newTheme);
    AsyncStorage.setItem(THEME_KEY, newTheme);
    if (newTheme === ThemeTypes.SYSTEM) {
      const colorScheme = Appearance.getColorScheme() as ThemeType;
      if (colorScheme) {
        setTheme(colorScheme);
      }
    } else {
      setTheme(newTheme);
    }
  };
  return (
    <ThemeContext.Provider
      value={{
        theme,
        selectTheme,
        changeTheme,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};
