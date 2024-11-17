import {Alert, StyleSheet, Text} from 'react-native';
import {CommonStyles} from '@components/CommonStyles.tsx';

export const TextExample1 = () => {
  return (
    <Text
      style={styles.textExample}
      onPress={() => {
        Alert.alert('onPress');
      }}>
      Press
    </Text>
  );
};

export const TextExample2 = () => {
  return (
    <Text
      style={styles.textExample}
      onLongPress={() => {
        Alert.alert('onLongPress');
      }}>
      Long press
    </Text>
  );
};

export const TextExample3 = () => {
  return (
    <Text style={styles.textExample} disabled={true}>
      Disabled
    </Text>
  );
};

const styles = StyleSheet.create({
  textExample: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'gray',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: CommonStyles.padding8.padding,
    borderRadius: CommonStyles.borderRadius.borderRadius,
  },
});
