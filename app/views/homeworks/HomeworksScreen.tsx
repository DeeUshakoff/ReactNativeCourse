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
import {observer} from 'mobx-react';

const DATA = [
  {
    title: 'Homework 4 - 24.09.2024',
    page: 'Homework4',
  },
  {
    title: 'Homework 5 - 01.10.2024',
    page: 'Homework5',
  },
  {
    title: 'Homework 9 - 15.10.2024',
    page: 'Homework9',
  },
  {
    title: 'Homework 12 - 15.10.2024',
    page: 'Homework12',
  },
  {
    title: 'Homework Themes',
    page: 'HomeworkThemes',
  },
  {
    title: 'Homework Fonts',
    page: 'HomeworkFonts',
  },{
    title: 'Homework Multilang',
    page: 'HomeworkMultilang',
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
    <Separator />
  </View>
);

export const HomeworksScreen = observer(({navigation}: NativeStackScreenProps<any>) => {
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
});

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
