import {ObjectSchema} from 'realm';

export const NewsTable = 'News';
export default class News extends Realm.Object<News> {
  id!: string;
  title!: string;
  content!: string;

  static schema: ObjectSchema = {
    name: NewsTable,
    properties: {
      id: 'string',
      title: 'string',
      content: 'string',
    },
  };
}
