import {makeAutoObservable} from 'mobx';
import TaskService from '@homeworks/homework-9/TaskService.ts';
import {TaskModel} from '@homeworks/homework-9/TaskModel.ts';

export class TaskStore {
  taskService;
  tasks: TaskModel[] = [];

  constructor() {
    makeAutoObservable(this);
    this.taskService = new TaskService();

    this.tasks = this.taskService.getAndPrepareDataForStore();
  }

  addTask = (task: TaskModel) => {
    this.taskService.addTask(task);
    this.tasks = this.taskService.getAndPrepareDataForStore();
  };

  deleteTask = (id: string) => {
    this.taskService.deleteTask(id);
    this.tasks = this.taskService.getAndPrepareDataForStore();
  };

  editTask = (task: TaskModel) => {
    this.taskService.editTask(task);
    this.tasks = this.taskService.getAndPrepareDataForStore();
  };

  toggleTaskCompletion = (id: string) => {
    this.taskService.toggleTaskCompletion(id);
    this.tasks = this.taskService.getAndPrepareDataForStore();
  };
}
