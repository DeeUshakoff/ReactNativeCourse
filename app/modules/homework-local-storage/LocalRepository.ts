import LocalClient from './LocalClient.ts';

export default class LocalRepository {
  localClient: LocalClient;
  tableName: string;
  constructor(tableName: string) {
    this.localClient = new LocalClient();
    this.tableName = tableName;
  }
  getItems = async (): Promise<any> => {
    return await this.localClient.get(this.tableName);
  };
  setItems = async (data: any) => {
    return await this.localClient.set(this.tableName, data);
  };
  removeAll = async () => {
    return await this.localClient.removeAll(this.tableName);
  };
}
