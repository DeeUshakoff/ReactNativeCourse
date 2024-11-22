import axios, {AxiosInstance} from 'axios';
import {Platform} from 'react-native';

export default class AxiosClient {
  api: AxiosInstance;
  apiKey?: string;

  constructor(config?: any) {
    this.api = axios.create(config);
    this.api.defaults.baseURL = this.getDefaultBaseUrl();
    this.api.defaults.headers.common['App-Platform'] = Platform.OS;
    this.api.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    this.api.defaults.headers.common['Content-Type'] = 'application/json';
    this.apiKey = process.env.OPEN_WEATHER_API_KEY;
  }

  getDefaultBaseUrl = () => {
    return 'https://api.openweathermap.org/';
  };

  get = async <T extends {}>(config: any) => {
    return this.api.get<T>(
      this.getDefaultBaseUrl() +
        'data/2.5/forecast?lat=44.34&lon=10.99&appid=' +
        this.apiKey,
      config.config,
    );
  };
}
