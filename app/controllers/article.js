//~ Import modules
import { error } from '../services/errorHandler.js';
import themes from '../db/theme.json' assert { type: 'json' };
import { Article } from '../models/article.js';

// ~ Functions
async function renderAllArticles(req, res) {
  try {
    const url = req.url;
    const articles = await Article.findAll();

    res.render('pages/articles', { title: 'articles', themes, url, articles });
  } catch (err) {
    return error._500(err, req, res);
  }
}

async function renderOneArticle(req, res) {
  try {
    const url = req.url;
    const articleId = +req.params.articleId;

    const article = await Article.findOne(articleId);

    res.render('pages/article', { title: 'article', themes, url, article });
  } catch (err) {
    return error._500(err, req, res);
  }
}

export { renderAllArticles, renderOneArticle };
