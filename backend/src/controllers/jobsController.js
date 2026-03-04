import Job from '../models/job.js';

export const getJobs = async (req, res, next) => {
  try {
    const jobs = await Job.find({});
    res.json(jobs);
  } catch (err) {
    next(err);
  }
};

export const createJob = async (req, res, next) => {
  try {
    const job = new Job(req.body);
    const saved = await job.save();
    res.status(201).json(saved);
  } catch (err) {
    next(err);
  }
};

export const getJobById = async (req, res, next) => {
  try {
    const job = await Job.findById(req.params.id);
    if (job) res.json(job);
    else {
      const err = new Error('Job not found');
      err.status = 404;
      next(err);
    }
  } catch (err) {
    next(err);
  }
};

export const applyJob = async (req, res) => {
  // placeholder for application handling
  res.json({ message: 'Application received (stub)' });
};
