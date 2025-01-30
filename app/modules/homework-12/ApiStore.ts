import ItemService from './ItemService.ts';
import {action, makeAutoObservable, runInAction} from 'mobx';
import ItemModel from './ItemModel.ts';
import {Alert} from 'react-native';

export class ApiStore {
  itemService: ItemService;
  items: {[p: string]: ItemModel[]} = {};

  isLoading: boolean = true;

  constructor() {
    makeAutoObservable(this);
    this.itemService = new ItemService();
  }

  fetchFromLocalRepository = action(async () => {
    try {
      const result = await this.itemService.localRepository.getItems();
      if (result != null) {
        runInAction(() => {
          this.items = result;
        });
        return true;
      }
      return false;
    } catch (error: any) {
      Alert.alert('Error', error.message);
      return false;
    }
  });

  fetchFromItemService = action(async () => {
    this.isLoading = true;

    try {
      const result = await this.itemService.getItems();
      if (result != null) {
        runInAction(() => {
          this.items = result;
        });
        return true;
      }
      return false;
    } catch (error: any) {
      Alert.alert('Error', error.message);
      return false;
    } finally {
      runInAction(() => {
        this.isLoading = false;
      });
    }
  });

  getItems = action(async () => {
    await this.fetchFromLocalRepository();
    await this.fetchFromItemService();
  });

  refresh = action(async () => {
    await this.getItems();
  });

  delete = action(async () => {
    await this.itemService.localRepository.removeAll();
    let items = await this.fetchFromLocalRepository();
    if (!items) {
      runInAction(() => {
        this.items = {};
      });
    }
  });
}
