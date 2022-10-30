import { Router } from 'express';
const router = Router();

//~ Home routes
import { router as homeRouter } from './home.js';
router.use(homeRouter);

//~ User routes
import { router as userRouter } from './author.js';
router.use(userRouter);

//~ Article routes
import { router as articleRouter } from './article.js';
router.use(articleRouter);

//~ Tag routes
import { router as tagRouter } from './tag.js';
router.use(tagRouter);

//~ Chillspace routes
import { router as chillspaceRouter } from './chillspace.js';
router.use(chillspaceRouter);

export { router };
