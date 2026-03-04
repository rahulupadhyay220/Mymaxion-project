import express from 'express';
import { getPage } from '../controllers/pageController.js';

const router = express.Router();

// catch wildcard slug, root index
router.get('/:slug?', getPage);

export default router;
