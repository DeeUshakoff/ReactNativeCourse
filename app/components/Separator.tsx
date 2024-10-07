import {View} from 'react-native';
import {CommonStyles} from './CommonStyles.tsx';
import React from 'react';

export function Separator({isVertical = false}: {isVertical?: boolean}) {
  return (
    <View
      style={
        isVertical ? CommonStyles.verticalSeparator : CommonStyles.separator
      }
    />
  );
}
