import {TaskModel} from '@homeworks/homework-9/TaskModel.ts';
import {v4 as uuidv4} from 'uuid';

export class TaskFactory {
  static createTask(title: string, content: string): TaskModel {
    return new TaskModel(uuidv4(), title, content);
  }
}
