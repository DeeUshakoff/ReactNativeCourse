import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '@components/Button.tsx';

export const ButtonText = () => {
  const [pressedCount, setPressedCount] = useState(0);
  const handlePress = () => {
    setPressedCount(pressedCount + 1);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.textBlock}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : "The button isn't pressed yet"}
      </Text>
      <Button
        title="Press me"
        disabled={pressedCount > 3}
        onPress={handlePress}
      />
      <Button
        title="Reset"
        onPress={() => {
          setPressedCount(0);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    gap: 8,
  },
  textBlock: {
    margin: 16,
    textAlign: 'center',
  },
});
