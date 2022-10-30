//~ Debug dev environment
import debug from 'debug';
const logger = debug('Errors');

const error = {
  _404: (req, res) => {
    return res.status(404).render('404', { title: 'Error 404', message: 'Page Not Found' });
  },

  _500: (err, req, res) => {
    logger(err.message);
    return res.status(500).json(err.message);
  },
};

export { error };
