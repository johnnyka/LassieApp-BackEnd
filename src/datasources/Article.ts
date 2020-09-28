import { DataSource } from 'apollo-datasource';
import { TArticleData } from '../types';

class ArticleAPI extends DataSource {
  store: TArticleData[];

  constructor({ store }: { store: TArticleData[] }) {
    super();
    this.store = store;
  }

  getArticles(recommended: boolean): TArticleData[] | [] {
    return typeof recommended === 'boolean'
      ? this.store.filter((x) => x.recommended === recommended)
      : this.store || [];
  }

  getArticleByID(id: string): TArticleData | undefined {
    return this.store.find((x) => x.id === id) || undefined;
  }
}

export default ArticleAPI;
