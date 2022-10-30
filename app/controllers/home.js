//~ Import modules
import { error } from '../services/errorHandler.js';
import themes from '../db/theme.json' assert { type: 'json' };

//~ Functions
async function renderHomePage(req, res) {
  try {
    const url = req.url;

    res.render('pages/home', { title: 'home', themes, url });
  } catch (err) {
    return error._500(err, req, res);
  }
}

export { renderHomePage };
