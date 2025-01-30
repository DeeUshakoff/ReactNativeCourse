import ThemeApiRepository from './repositories/ThemeApiRepository.ts';
import {ThemeResponse} from './models/ThemeResponse.ts';

export default class ThemeService {
  themeApi: ThemeApiRepository;

  constructor() {
    this.themeApi = new ThemeApiRepository();
  }

  getTheme = async() => {
    const data = await this.themeApi.getTheme();
    return data.data as ThemeResponse;
  };
}
