import express from 'express';
import { submitEnquiry, getEnquiries } from '../controllers/enquiriesController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.post('/', submitEnquiry);
router.get('/', protect, authorize('admin','staff'), getEnquiries);

export default router;
