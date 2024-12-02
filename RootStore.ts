import {TaskStore} from './modules/homework-9/TaskStore.ts';
import React from 'react';
import {ApiStore} from './modules/homework-12/ApiStore.ts';

class RootStore {
  taskStore;
  apiStore;
  constructor() {
    this.taskStore = new TaskStore();
    this.apiStore = new ApiStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
