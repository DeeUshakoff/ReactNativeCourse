import {TaskModel} from '@homeworks/homework-9/TaskModel.ts';
import {TaskFactory} from '@homeworks/homework-9/TaskFactory.ts';

export default class TaskRepository {
  data = [
    TaskFactory.createTask('Test task', 'Test content'),
    TaskFactory.createTask('Only title', ''),
  ];

  getAllData = () => {
    return this.data;
  };

  addTask = (task: TaskModel) => {
    this.data.push(task);
  };

  updateTask(updatedTask: TaskModel): void {
    const index = this.data.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.data[index] = updatedTask;
    }
  }

  deleteTask(id: string): void {
    this.data = this.data.filter(task => task.id !== id);
  }
}
