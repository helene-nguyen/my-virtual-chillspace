import articles from '../db/articles.json' assert { type: 'json' };
import { CoreModel } from './coreModel.js';

class ArticleModel extends CoreModel {
  name = 'articles';
  data = articles;
}

const Article = new ArticleModel();
export { Article };
