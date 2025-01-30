import {RealmClient} from '@modules/realm/RealmClient.ts';
import News, {NewsTable} from '@modules/news/News.ts';

export default class NewsService {
  getNews = () => {
    return RealmClient.objects(NewsTable) as unknown as News[];
  };

  createNews = (data: object) => {
    RealmClient.write(() => {
      RealmClient.create(NewsTable, data);
    });
  };

  updateNews = (news: News, values: object) => {
    RealmClient.write(() => {
      Object.assign(news, values);
    });
  };

  deleteNews = (news: News) => {
    RealmClient.write(() => {
      RealmClient.delete(news);
    });
  };
}
