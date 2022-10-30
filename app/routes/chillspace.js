//~ Import modules
import { Router } from 'express';
const router = Router();

import {renderChillSpace} from '../controllers/chillspace.js';

//~ Routes
router.get('/chillspace', renderChillSpace);

export { router };
