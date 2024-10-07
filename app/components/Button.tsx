import {
  Animated,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  AccessibilityState,
  ColorValue,
  GestureResponderEvent,
  TextStyle,
  StyleProp,
} from 'react-native';
import React, {useRef} from 'react';

interface CustomButtonProps {
  primary?: boolean;
  accessibilityLabel?: string;
  accessibilityState?: AccessibilityState;
  children?: React.ReactNode;
  color?: ColorValue;
  disabled?: boolean;
  hasTVPreferredFocus?: boolean;
  nextFocusDown?: number;
  nextFocusForward?: number;
  nextFocusLeft?: number;
  nextFocusRight?: number;
  nextFocusUp?: number;
  onPress?: (event: GestureResponderEvent) => void;
  testID?: string;
  style?: StyleProp<TextStyle>;
  title?: string;
  touchSoundDisabled?: boolean;
}

const CustomButton = (props: CustomButtonProps) => {
  const scaleValue = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleValue, {
      toValue: 0.85,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleValue, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  return (
    <TouchableWithoutFeedback
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      onPress={props.onPress}
      disabled={props.disabled}>
      <Animated.View
        style={[
          props.style,
          styles.container,
          props.primary != false ? styles.primary : styles.secondary,
          {transform: [{scale: scaleValue}]},
          props.disabled && styles.disabled,
        ]}
        accessible
        accessibilityLabel={props.accessibilityLabel || 'A Button'}>
        {props.children ? (
          props.children
        ) : (
          <Text style={[styles.text]}>{props.title || 'Button'}</Text>
        )}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    minWidth: 50,
    padding: 8,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  primary: {
    backgroundColor: '#0085FF',
  },
  secondary: {
    backgroundColor: '#c3c3c3',
    borderWidth: 2,
    borderColor: 'lightgray',
  },
  disabled: {
    opacity: 0.5,
  },
  text: {color: 'white'},
});

export default CustomButton;
