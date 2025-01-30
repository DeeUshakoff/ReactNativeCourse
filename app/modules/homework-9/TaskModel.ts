export class TaskModel {
  id: string = '';
  title: string = '';
  content: string = '';
  completed: boolean = false;

  constructor(
    id: string,
    title: string,
    content: string,
    completed: boolean = false,
  ) {
    this.id = id;
    this.title = title;
    this.content = content;
    this.completed = completed;
  }
}
