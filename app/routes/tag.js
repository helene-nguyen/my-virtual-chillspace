//~ Import modules
import { Router } from 'express';
const router = Router();

import {renderAllTags} from '../controllers/tag.js';

//~ Routes
router.get('/categories', renderAllTags);

export { router };
