import express from 'express';
import { getTestimonials, createTestimonial } from '../controllers/testimonialsController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getTestimonials);
router.post('/', protect, authorize('admin','staff'), createTestimonial);

export default router;
