import {Alert, StyleSheet, Text, View} from 'react-native';
import {CommonStyles} from '@components/CommonStyles.tsx';
import Button from '@components/Button.tsx';
import React from 'react';

export const ViewExample1 = () => {
  return (
    <View style={styles.viewExample}>
      <Text>Example View 1</Text>
      <Text>props: style</Text>
    </View>
  );
};

export const ViewExample2 = () => {
  return (
    <View
      style={styles.viewExample}
      children={
        <View>
          <Text>Example View 2</Text>
          <Text>props: children</Text>
          <Button
            title={'Press me'}
            style={[CommonStyles.marginTop8]}
            onPress={() => {
              Alert.alert(
                'onPress event',
                'Element from "children" props has been pressed',
              );
            }}
          />
        </View>
      }
    />
  );
};

export const ViewExample3 = () => {
  return (
    <View accessibilityRole={'none'} style={styles.viewExample}>
      <Text>Example View 3</Text>
      <Text>props: accessibilityRole='none'</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  viewExample: {
    width: '100%',
    height: 150,
    borderWidth: 2,
    borderColor: 'gray',
    borderStyle: 'dashed',
    marginBottom: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CommonStyles.borderRadius.borderRadius,
  },
});
