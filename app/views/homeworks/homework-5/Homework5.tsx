import {Animated, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import CollapsibleView from '@components/CollapsibleView.tsx';
import ScrollView = Animated.ScrollView;
import React from 'react';

import {CommonStyles} from '@components/CommonStyles.tsx';
import {Separator} from '@components/Separator.tsx';
import {ButtonText} from '@homeworks/homework-5/ButtonText.tsx';
import {
  TextInputExample1,
  TextInputExample2,
  TextInputExample3,
} from '@homeworks/homework-5/TextInput.tsx';
import {
  CustomComponents,
  CustomComponents2,
} from '@homeworks/homework-5/CustomComponents.tsx';

export const Homework5 = () => {
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

        <CollapsibleView title={'ButtonText'}>
          <Text style={[CommonStyles.textAlignCenter]}>
            Кнопка, нажатая более 3х раз, становится disabled. Дополнительная кнопка сбрасывает disabled
          </Text>
          <ButtonText />
        </CollapsibleView>
        <Separator />

        <CollapsibleView title={'TextInput'}>
          <Text style={[CommonStyles.textAlignCenter]}>
            Текстовое поле - вводим значение - показываем сверху
          </Text>
          <Separator />
          <View style={styles.exampleContainer}>
            <TextInputExample1 />
          </View>
          <Separator />

          <Text style={[CommonStyles.textAlignCenter]}>
            Текстовое поле - вводим значение - нажимаем кнопку - показываем
            значение
          </Text>
          <Separator />
          <View style={styles.exampleContainer}>
            <TextInputExample2 />
          </View>
          <Separator />

          <Text style={[CommonStyles.textAlignCenter]}>
            Сделать простую форму входа (логин и пароль) - проверять и, если
            ошибка, показывать ошибку - если все ок - скрывать форму входа и
            показывать “Welcome”
          </Text>
          <Separator />
          <View style={[styles.exampleContainer]}>
            <TextInputExample3 />
          </View>
          <Separator />
        </CollapsibleView>
        <Separator />

        <CollapsibleView title={'CustomComponents'}>
          <Text style={[CommonStyles.textAlignCenter]}>
            Используем компонент Box и передаем props добавляя width + height
          </Text>
          <Separator />
          <View style={[styles.exampleContainer, CommonStyles.padding8]}>
            <CustomComponents />
          </View>
          <Separator />

          <Text style={[CommonStyles.textAlignCenter]}>
            Дорабатываем пример и добавляем ниже кнопку “Добавить квадрат” - с
            возможностью указать размер и цвет квадрата
          </Text>
          <Separator />
          <View
            style={[
              styles.exampleContainer,
              CommonStyles.padding8,
              {minHeight: 400},
            ]}>
            <CustomComponents2 />
          </View>
        </CollapsibleView>
        <Separator />
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
  exampleContainer: {
    width: '100%',
    padding: 8,
    borderWidth: 2,
    borderColor: 'gray',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: CommonStyles.borderRadius.borderRadius,
  },
});
