/* eslint-disable no-undef */
import express from 'express';
import {
  getProducts,
  getProductBySlug,
  createProduct,
  seedProductsFromDirectory,
  getProductsRSS,
} from '../controllers/productsController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getProducts);
router.get('/rss', getProductsRSS);
router.get('/seed', protect, authorize('admin'), seedProductsFromDirectory);
router.get('/:slug', getProductBySlug);
router.post('/', protect, authorize('admin'), createProduct);

export default router;
