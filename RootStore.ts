import {TaskStore} from '@modules/homework-9/TaskStore.ts';
import React from 'react';
import {ApiStore} from '@modules/homework-12/ApiStore.ts';
import NewsStore from '@modules/news/NewsStore.ts';

class RootStore {
  taskStore;
  apiStore;
  newsStore;

  constructor() {
    this.taskStore = new TaskStore();
    this.apiStore = new ApiStore();
    this.newsStore = new NewsStore();
  }
}

export const rootStore = new RootStore();

export const storesContext = React.createContext(rootStore);
