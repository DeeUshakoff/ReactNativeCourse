import ItemRepository from './ItemRepository.ts';
import ItemModel from './ItemModel.ts';
import LocalRepository from '../homework-local-storage/LocalRepository.ts';

export default class ItemService {
  itemRepository: ItemRepository;
  localRepository: LocalRepository;
  constructor() {
    this.itemRepository = new ItemRepository();
    this.localRepository = new LocalRepository('forecast-items');
  }

  getItems = async (): Promise<{[p: string]: ItemModel[]}> => {
    const res = await this.itemRepository.getItems();
    const groupedData: {[key: string]: ItemModel[]} = {};

    res.data.list.forEach((item: any) => {
      const model = new ItemModel();
      model.temp = item.main.temp.toString();
      model.feelsLike = item.main.feels_like.toString();
      model.tempMin = item.main.temp_min.toString();
      model.tempMax = item.main.temp_max.toString();
      model.pressure = item.main.pressure.toString();
      model.weather = item.weather[0].main;
      model.windSpeed = item.wind.speed.toString();
      model.date = new Date(Date.parse(item.dt_txt)).toLocaleTimeString();

      const dateKey = new Date(Date.parse(item.dt_txt)).toISOString().split('T')[0];
      if (!groupedData[dateKey]) {
        groupedData[dateKey] = [];
      }
      groupedData[dateKey].push(model);
    });
    await this.localRepository.setItems(groupedData);
    return groupedData;
  };
}
