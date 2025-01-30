import AxiosClient from './AxiosClient.ts';

export default class ItemRepository {
  apiClient;

  constructor() {
    this.apiClient = new AxiosClient();
  }

  getItems = async () => {
    return await this.apiClient.get({});
  };
}
