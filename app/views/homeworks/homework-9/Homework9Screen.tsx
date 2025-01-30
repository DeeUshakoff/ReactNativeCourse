import {
  Alert,
  Animated,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useRef} from 'react';
import {Icon} from 'react-native-elements';
import {CommonStyles} from '@components/CommonStyles.tsx';
import {Separator} from '@components/Separator.tsx';
import {useRootStore} from '../../../hooks/useRootStore.ts';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Button from '@components/Button.tsx';
import {TaskModel} from '@modules/homework-9/TaskModel.ts';
import FlatList = Animated.FlatList;
import {observer} from 'mobx-react';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';

export const Homework9Screen = observer(
  ({navigation}: NativeStackScreenProps<any>) => {
    const {taskStore} = useRootStore();

    useEffect(() => {
      navigation.setOptions({
        headerRight: () => (
          <Button
            onPress={() => {
              navigation.navigate('ToDo', {});
            }}
            children={<Icon color={'white'} name={'add'} />}
            title="Add"
          />
        ),
      });
    }, [navigation, taskStore]);

    const handleToggleTaskCompletion = (id: string) => {
      taskStore.toggleTaskCompletion(id);
    };

    const handleDeleteTask = (task: TaskModel) => {
      Alert.alert('Confirm', 'Action cannot be undone', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Open',
          style: 'default',
          onPress: () => {
            navigation.navigate('ToDo', {task});
          },
        },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => taskStore.deleteTask(task.id),
        },
      ]);
    };

    const modalizeRef = useRef<Modalize>(null);
    const handleOnModalOpen = () => {
      modalizeRef.current?.open();
    };

    return (
      <SafeAreaView>
        {taskStore.tasks.length > 0 && (<Portal>
          <Modalize
            ref={modalizeRef}
            modalTopOffset={200}
            modalStyle={{
              borderTopLeftRadius: CommonStyles.borderRadius.borderRadius,
              borderTopRightRadius: CommonStyles.borderRadius.borderRadius,
            }}
            flatListProps={{
              data: taskStore.tasks.filter(item => item.completed),
              keyExtractor: item => item.id,
              showsVerticalScrollIndicator: false,
              renderItem: ({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('ToDo', {task: item});
                  }}
                  style={[
                    styles.taskItem,
                    item.completed
                      ? styles.taskItemCompleted
                      : styles.taskItemIncomplete,
                  ]}>
                  <Pressable
                    style={styles.taskActionsContainer}>
                    <Icon
                      name={item.completed ? 'done' : 'radio-button-unchecked'}
                      color={item.completed ? 'white' : 'gray'}
                      size={20}
                    />
                  </Pressable>
                  <View style={styles.taskContentContainer}>
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.taskTitle,
                        styles.taskContent,
                        item.completed
                          ? styles.taskTextCompleted
                          : styles.taskTextIncomplete,
                      ]}>
                      {item.title}
                    </Text>
                    {item.content.length > 1 ? (
                      <Text
                        numberOfLines={1}
                        style={[
                          styles.taskContent,
                          item.completed
                            ? styles.taskTextCompleted
                            : styles.taskTextIncomplete,
                        ]}>
                        {item.content}
                      </Text>
                    ) : null}
                  </View>

                  <Pressable
                    onPress={() => {
                      handleDeleteTask(item);
                    }}
                    style={styles.taskActionsContainer}>
                    <Icon
                      name={'delete-outline'}
                      color={item.completed ? 'white' : 'gray'}
                      size={20}
                    />
                  </Pressable>
                </TouchableOpacity>
              ),
            }}
            childrenStyle={{
              padding: 20,
            }}
          />
        </Portal>)}

        <View style={[CommonStyles.padding8]}>
          <Button onPress={() => {
            handleOnModalOpen();
          }} title={'Open finished'} />
          <Separator />

          <FlatList
            data={taskStore.tasks}
            showsVerticalScrollIndicator={false}
            keyExtractor={item => item.id}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ToDo', {task: item});
                }}
                style={[
                  styles.taskItem,
                  item.completed
                    ? styles.taskItemCompleted
                    : styles.taskItemIncomplete,
                ]}>
                <Pressable
                  onPress={() => {
                    handleToggleTaskCompletion(item.id);
                  }}
                  style={styles.taskActionsContainer}>
                  <Icon
                    name={item.completed ? 'done' : 'radio-button-unchecked'}
                    color={item.completed ? 'white' : 'gray'}
                    size={20}
                  />
                </Pressable>
                <View style={styles.taskContentContainer}>
                  <Text
                    numberOfLines={1}
                    style={[
                      styles.taskTitle,
                      styles.taskContent,
                      item.completed
                        ? styles.taskTextCompleted
                        : styles.taskTextIncomplete,
                    ]}>
                    {item.title}
                  </Text>
                  {item.content.length > 1 ? (
                    <Text
                      numberOfLines={1}
                      style={[
                        styles.taskContent,
                        item.completed
                          ? styles.taskTextCompleted
                          : styles.taskTextIncomplete,
                      ]}>
                      {item.content}
                    </Text>
                  ) : null}
                </View>

                <Pressable
                  onPress={() => {
                    handleDeleteTask(item);
                  }}
                  style={styles.taskActionsContainer}>
                  <Icon
                    name={'delete-outline'}
                    color={item.completed ? 'white' : 'gray'}
                    size={20}
                  />
                </Pressable>
              </TouchableOpacity>
            )}
          />
        </View>
      </SafeAreaView>
    );
  },
);

const styles = StyleSheet.create({
  taskTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  taskContent: {
    textAlign: 'left',
  },
  taskTextCompleted: {
    color: 'white',
  },
  taskTextIncomplete: {},
  deleteButton: {
    height: 50,
    width: 25,
  },
  taskItem: {
    width: '100%',
    height: 75,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: CommonStyles.borderRadius.borderRadius,
    marginBottom: CommonStyles.padding8.padding,
  },
  taskItemIncomplete: {
    backgroundColor: 'lightgray',
  },
  taskItemCompleted: {
    backgroundColor: '#0085FF',
  },
  taskContentContainer: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignSelf: 'center',
    width: '60%',
  },
  taskActionsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    height: '100%',
    width: 75,
  },
});
