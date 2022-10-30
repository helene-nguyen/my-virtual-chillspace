//~ Import modules
import { error } from '../services/errorHandler.js';
import themes from '../db/theme.json' assert { type: 'json' };
import { Author } from '../models/author.js';


// ~ Functions
async function renderAllAuthors(req, res) {
  try {
    const url = req.url;
    const authors = await Author.findAll();

    res.render('pages/authors', { title: 'Authors', themes, url, authors });
  } catch (err) {
    return error._500(err, req, res);
  }
}

async function renderContactPage(req, res) {
  try {
    const url = req.url;
    res.render('pages/contact', { title: 'contact', themes, url });
  } catch (err) {
    return error._500(err, req, res);
  }
}

export { renderAllAuthors,renderContactPage };
