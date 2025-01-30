import {observer} from 'mobx-react-lite';
import {Animated, StyleSheet, TextInput} from 'react-native';
import {useRootStore} from '../../../hooks/useRootStore.ts';
import React, {useEffect, useState} from 'react';
import ScrollView = Animated.ScrollView;
import {CommonStyles} from '@components/CommonStyles.tsx';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Button from '@components/Button.tsx';
import {Icon} from 'react-native-elements';
import {TaskFactory} from '@modules/homework-9/TaskFactory.ts';

export const TaskScreen = observer(
  ({navigation, route}: NativeStackScreenProps<any>) => {
    const [title, setTitle] = useState('');
    const [oldTitle, setOldTitle] = useState('');

    const [content, setContent] = useState('');
    const [oldContent, setOldContent] = useState('');

    const {taskStore} = useRootStore();
    const {task} = route.params;

    useEffect(() => {
      if (task !== undefined) {
        navigation.setOptions({title: 'Edit Task'});
        setOldTitle(task.title);
        setOldContent(task.content);
      }
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={() => {
              if (task !== undefined) {
                handleEditTask();
              } else {
                handleAddTask();
              }
            }}
            children={<Icon color={'white'} name={'done'} />}
            title="Add"
          />
        ),
      });
    }, [navigation, taskStore, title, content, oldTitle, oldContent]);

    const handleAddTask = () => {
      const trimmedTitle = title.trim();
      const trimmedContent = content.trim();

      if (trimmedTitle.length <= 0) {
        return;
      }

      taskStore.addTask(TaskFactory.createTask(trimmedTitle, trimmedContent));
      navigation.goBack();
    };

    const handleEditTask = () => {
      task.title = title;
      task.content = content;
      taskStore.editTask(task);
      navigation.goBack();
    };

    return (
      <ScrollView style={styles.scrollViewContainer}>
        <TextInput
          maxLength={50}
          placeholder={'Title'}
          onChangeText={text => {
            setTitle(text);
          }}
          onLayout={() => {
            setTitle(oldTitle);
          }}
          style={[styles.input]}
          defaultValue={oldTitle}
        />
        <TextInput
          multiline={true}
          maxLength={500}
          onChangeText={text => {
            setContent(text);
          }}
          onLayout={() => {
            setContent(oldContent);
          }}
          placeholder={'Content'}
          style={[styles.input]}
          defaultValue={oldContent}
        />
      </ScrollView>
    );
  },
);

const styles = StyleSheet.create({
  input: {
    width: '100%',
    minHeight: 50,
    borderRadius: CommonStyles.borderRadius.borderRadius,
    borderColor: 'gray',
    borderWidth: 1,
    textAlign: 'center',
    padding: 15,
    marginBottom: CommonStyles.padding8.padding,
  },
  scrollViewContainer: {
    gap: 8,
    height: '100%',
    padding: CommonStyles.padding8.padding,
  },
});
