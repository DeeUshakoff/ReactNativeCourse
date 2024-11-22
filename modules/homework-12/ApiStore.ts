import ItemService from './ItemService.ts';
import {makeAutoObservable} from 'mobx';
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

  getItems = async () => {
    this.isLoading = true;

    await this.itemService
      .getItems()
      .then(result => {
        this.items = result;
      })
      .catch(error => {
        Alert.alert('Error', error.message);
      })
      .finally(() => {
        this.isLoading = false;
      });
  };
}
