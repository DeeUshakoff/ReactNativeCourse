import {makeAutoObservable} from 'mobx';
import NewsService from '@modules/news/NewsService.ts';
import News from '@modules/news/News.ts';

export default class NewsStore {
  isLoading: boolean = false;
  newsService: NewsService;
  news: News[];

  constructor() {
    this.newsService = new NewsService();
    this.news = this.newsService.getNews();
    makeAutoObservable(this);
  }

  private fetchNews() {
    this.news = this.newsService.getNews();
  }

  getNews = () => {
    this.isLoading = true;

    this.fetchNews();

    this.isLoading = false;
  };

  createNews = (news: News) => {
    this.isLoading = true;

    this.newsService.createNews(news);

    this.isLoading = false;
  };

  updateNews = (news: News, values: object) => {
    this.isLoading = true;

    this.newsService.updateNews(news, values);

    this.isLoading = false;
  };

  deleteNews = (news: News) => {
    this.isLoading = true;

    this.newsService.deleteNews(news);

    this.isLoading = false;
  };
}
