//~ Import modules
import { error } from '../services/errorHandler.js';
import themes from '../db/theme.json' assert { type: 'json' };


// ~ Functions
async function renderChillSpace(req, res) {
  try {
    const url = req.url;
    res.render('pages/chillspace', { title: 'chillspace', themes, url });
  } catch (err) {
    return error._500(err, req, res);
  }
}

export { renderChillSpace };
