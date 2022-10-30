//~ Import modules
import { Router } from 'express';
const router = Router();

import {renderAllArticles, renderOneArticle} from '../controllers/article.js';

//~ Routes
router.get('/articles', renderAllArticles);
router.get('/articles/:articleId', renderOneArticle);

export { router };
