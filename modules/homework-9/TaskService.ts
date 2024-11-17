import TaskRepository from './TaskRepository.ts';
import {TaskModel} from './TaskModel.ts';

export default class TaskService {
  taskRepository;

  constructor() {
    this.taskRepository = new TaskRepository();
  }

  addTask(task: TaskModel) {
    this.taskRepository.addTask(task);
  }

  deleteTask(id: string) {
    this.taskRepository.deleteTask(id);
  }

  editTask(task: TaskModel) {
    this.taskRepository.updateTask(task);
  }

  getAndPrepareDataForStore = () => {
    return this.taskRepository.getAllData();
  };

  toggleTaskCompletion = (id: string) => {
    const task = this.taskRepository.getAllData().find(task => task.id === id);
    if (task) {
      task.completed = !task.completed;
      this.taskRepository.updateTask(task);
    }
  };
}
