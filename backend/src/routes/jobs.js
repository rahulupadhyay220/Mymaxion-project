import express from 'express';
import {
  getJobs,
  createJob,
  getJobById,
  applyJob,
} from '../controllers/jobsController.js';
import { protect, authorize } from '../middleware/auth.js';

const router = express.Router();

router.get('/', getJobs);
router.post('/', protect, authorize('admin'), createJob);
router.get('/:id', getJobById);
router.post('/:id/apply', applyJob); // application stub

export default router;
