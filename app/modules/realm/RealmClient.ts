import Realm from 'realm';
import News from '@modules/news/News.ts';

export const RealmClient = new Realm({schema: [News.schema]});
