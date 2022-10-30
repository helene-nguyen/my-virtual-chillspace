//~ Import modules
import { Router } from 'express';
const router = Router();

import {renderAllAuthors,renderContactPage} from '../controllers/author.js';

//~ Routes
router.get('/authors', renderAllAuthors);
router.get('/contact', renderContactPage);

export { router };
