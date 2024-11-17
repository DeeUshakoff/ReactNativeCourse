import {TaskStore} from './modules/homework-9/TaskStore.ts';
import React from 'react';

class RootStore {
  taskStore;

  constructor() {
    this.taskStore = new TaskStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
