import LangService from '@modules/lang/LangService.ts';
import {LangType} from '@modules/lang/LangType.ts';
import {action, makeAutoObservable} from 'mobx';

export class LangStore {
  lang: LangType | undefined;
  langService: LangService;

  constructor() {
    this.langService = new LangService();
    makeAutoObservable(this);
    this.initLang();
  }

  private initLang = async (): Promise<void> => {
    const lang = await this.langService.getLang();
    if (lang) {
      this.lang = lang;
      await this.langService.changeLang(lang);
    }
  };

  changeLang = action(async (lang: LangType) => {
    this.lang = lang;
    await this.langService.changeLang(lang);
    console.log('changeLang', this.lang);
  });
}
