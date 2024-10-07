import {Animated, View, Text, StyleSheet, Alert} from 'react-native';
import ScrollView = Animated.ScrollView;
import React from 'react';
import {CommonStyles} from '@components/CommonStyles.tsx';
import {Separator} from '@components/Separator.tsx';

const styles = StyleSheet.create({
  scrollViewExampleContainer: {
    width: '100%',
    borderWidth: 2,
    borderColor: 'gray',
    borderStyle: 'dashed',
    textAlign: 'center',
    padding: CommonStyles.padding8.padding,
    borderRadius: CommonStyles.borderRadius.borderRadius,
  },
  height100: {
    height: 100,
  },
  title: {
    textAlign: 'center',
  },
  scrollViewItem: {
    width: 150,
    height: 50,
    borderRadius: CommonStyles.borderRadius.borderRadius,
    textAlign: 'center',
    textAlignVertical: 'center',
    backgroundColor: 'lightcyan',
  },
});

const data = [...Array(10)].map((e, i) => (
  <View key={'ExampleScrollView_' + i + e}>
    <Text style={styles.scrollViewItem}>{i}</Text>
    <Separator />
  </View>
));

export const ScrollViewExample1 = () => {
  return (
    <View focusable={true} style={CommonStyles.padding8}>
      <Text style={styles.title}>Example ScrollView 1</Text>
      <Text style={styles.title}>props: onScrollEndDrag</Text>
      <Separator />
      <ScrollView
        nestedScrollEnabled={true}
        onScrollEndDrag={() => {
          Alert.alert('Scroll end drag');
        }}
        style={[styles.scrollViewExampleContainer, styles.height100]}>
        {data}
      </ScrollView>
    </View>
  );
};

export const ScrollViewExample2 = () => {
  return (
    <View style={CommonStyles.padding8}>
      <Text style={styles.title}>Example ScrollView 2</Text>
      <Text style={styles.title}>props: horizontal=true</Text>
      <Separator />
      <ScrollView
        horizontal={true}
        style={[styles.scrollViewExampleContainer, styles.height100]}>
        {[...Array(10)].map((e, i) => (
          <View key={'ExampleScrollView_' + i}>
            <Text style={[styles.scrollViewItem, {marginEnd: 5}]}>{i}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export const ScrollViewExample3 = () => {
  return (
    <View style={CommonStyles.padding8}>
      <Text style={styles.title}>Example ScrollView 3</Text>
      <Text style={styles.title}>props: scrollEnabled=false</Text>
      <Separator />
      <ScrollView
        scrollEnabled={false}
        style={[styles.scrollViewExampleContainer, styles.height100]}>
        {data}
      </ScrollView>
    </View>
  );
};
