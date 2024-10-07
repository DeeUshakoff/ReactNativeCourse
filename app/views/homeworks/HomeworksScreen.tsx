import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Button from '@components/Button.tsx';
import React from 'react';
import ScrollView = Animated.ScrollView;
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {CommonStyles} from '@components/CommonStyles.tsx';
import Clipboard from '@react-native-clipboard/clipboard';
import {Separator} from '@components/Separator.tsx';

const DATA = [
  {
    title: 'Homework 4 - 24.09.2024',
    page: 'Homework4',
  },
];

type ItemProps = {title: string; page: string; navigation: any};

const Item = (props: ItemProps) => (
  <View>
    <Button
      style={styles.link}
      title={props.title}
      onPress={() => props.navigation.navigate(props.page)}
    />
  </View>
);

export const HomeworksScreen = ({navigation}: NativeStackScreenProps<any>) => {
  return (
    <SafeAreaView style={[styles.container, CommonStyles.padding8]}>
      <Text style={styles.title}>Домашние работы</Text>
      <Text style={CommonStyles.textAlignCenter}>
        Это приложение создано для хранения домашних работ
      </Text>
      <Separator />
      <Button
        primary={false}
        onPress={() => {
          Clipboard.setString('@DeeUsh');
        }}
        style={styles.link}
        title={'@DeeUsh'}
      />
      <Separator />

      <ScrollView style={styles.homeworksContainer}>
        {DATA.map(({title, page}) => (
          <Item navigation={navigation} key={page} title={title} page={page} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  link: {
    height: 50,
  },
  tg: {
    backgroundColor: 'transparent',
    borderRadius: 1,
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
  homeworksContainer: {
    marginTop: 25,
  },
});
