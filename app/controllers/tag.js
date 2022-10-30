//~ Import modules
import { error } from '../services/errorHandler.js';
import themes from '../db/theme.json' assert { type: 'json' };
import { Category } from '../models/tag.js';

// ~ Functions
async function renderAllTags(req, res) {
  try {
    const url = req.url;
    const tags = await Category.findAll();

    res.render('pages/tags', { title: 'tags', themes, url, tags });
  } catch (err) {
    return error._500(err, req, res);
  }
}

export { renderAllTags };
