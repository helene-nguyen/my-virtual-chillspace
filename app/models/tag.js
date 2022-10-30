import tags from '../db/tag.json' assert { type: 'json' };
import { CoreModel } from './coreModel.js';

class CategoryModel extends CoreModel{
  name = 'categories';
  data = tags;

}

const Category = new CategoryModel();
export { Category };
