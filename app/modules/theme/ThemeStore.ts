import ThemeService from './ThemeService.ts';
import {makeAutoObservable} from 'mobx';

export class ThemeStore {
  private themeService: ThemeService;

  constructor() {
    makeAutoObservable(this);
    this.themeService = new ThemeService();
  }

  getTheme = async () => {
    return await this.themeService.getTheme();
  };
}
