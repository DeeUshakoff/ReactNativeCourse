import {SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import React from 'react';
import {CommonStyles} from '@components/CommonStyles.tsx';
import Button from '@components/Button.tsx';
import {Separator} from '@components/Separator.tsx';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={[styles.container, CommonStyles.padding8]}>
      <Text style={CommonStyles.titleXL}>Привет!</Text>
      <Text style={CommonStyles.textAlignCenter}>
        Это приложение создано для хранения домашних работ
      </Text>
      <Separator />
      <Button
        primary={false}
        onPress={() => {
          Clipboard.setString('@DeeUsh');
        }}
        title={'@DeeUsh'}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  link: {
    height: 50,
  },
  flatList: {},
  listItem: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  container: {
    marginTop: StatusBar.currentHeight || 0,
    marginBottom: 150,
  },
  title: {
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 36,
    height: 150,
  },
});
