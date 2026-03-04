import express from 'express';
import {
  getServices,
  getServiceBySlug,
  createService,
  seedServicesFromDirectory,
} from '../controllers/servicesController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getServices);
router.get('/seed', protect, authorize('admin'), seedServicesFromDirectory);
router.get('/:slug', getServiceBySlug);
router.post('/', protect, authorize('admin'), createService);

export default router;
