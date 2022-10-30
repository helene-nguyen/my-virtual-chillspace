import authors from '../db/author.json' assert { type: 'json' };
import { CoreModel } from './coreModel.js';

class AuthorModel extends CoreModel {
  name = 'authors';
  data = authors;
}

const Author = new AuthorModel();
export { Author };
