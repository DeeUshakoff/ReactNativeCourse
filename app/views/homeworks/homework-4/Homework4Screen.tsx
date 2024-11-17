import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CollapsibleView from '@components/CollapsibleView.tsx';
import ScrollView = Animated.ScrollView;
import React from 'react';
import {
  ViewExample1,
  ViewExample2,
  ViewExample3,
} from '@components/homework-4/ViewExamples.tsx';
import {CommonStyles} from '@components/CommonStyles.tsx';
import {Separator} from '@components/Separator.tsx';
import {
  TextExample1,
  TextExample2,
  TextExample3,
} from '@components/homework-4/TextExamples.tsx';
import {
  ImageExample1,
  ImageExample2,
  ImageExample3,
} from '@components/homework-4/ImageExamples.tsx';
import {
  ScrollViewExample1,
  ScrollViewExample2,
  ScrollViewExample3,
} from '@components/homework-4/ScrollViewExamples.tsx';

export const Homework4Screen = () => {
  return (
    <SafeAreaView>
      <ScrollView nestedScrollEnabled={true} style={[CommonStyles.padding8]}>
        <Text style={[styles.taskTitle, CommonStyles.padding8]}>
          Использование View, Text, Image, ScrollView
        </Text>
        <Text style={[CommonStyles.textAlignCenter]}>
          (3 разных варианта с 3 разными props)
        </Text>
        <Separator />

        <CollapsibleView title={'View'}>
          <ViewExample1 />
          <ViewExample2 />
          <ViewExample3 />
        </CollapsibleView>
        <Separator />

        <CollapsibleView title={'Text'}>
          <TextExample1 />
          <Separator />
          <TextExample2 />
          <Separator />
          <TextExample3 />
        </CollapsibleView>
        <Separator />

        <CollapsibleView title={'Image'}>
          <ImageExample1 />
          <Separator />
          <ImageExample2 />
          <Separator />
          <ImageExample3 />
        </CollapsibleView>
        <Separator />

        <CollapsibleView title={'ScrollView'}>
          <ScrollViewExample1 />
          <Separator />
          <ScrollViewExample2 />
          <Separator />
          <ScrollViewExample3 />
          <View>
            <Text style={CommonStyles.title}>
              Костыль (доп пространство), который нужен, чтобы ScrollView не
              клипался с Tabbar. Наверное, я просто не нашел как это починить
            </Text>
          </View>
        </CollapsibleView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
