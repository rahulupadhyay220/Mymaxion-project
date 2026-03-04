/* eslint-disable no-undef */
import express from 'express';
import path from 'path';
import fs from 'fs';

const router = express.Router();

router.get('/', (req, res) => {
  const dir = path.join(process.cwd(), 'public');
  const items = fs.readdirSync(dir).filter(f => f.endsWith('.zip'));
  res.json({ files: items });
});

router.get('/download/:name', (req, res, next) => {
  const name = req.params.name;
  const filePath = path.join(process.cwd(), 'public', name);
  if (fs.existsSync(filePath)) {
    return res.download(filePath);
  }
  const err = new Error('File not found');
  err.status = 404;
  next(err);
});

export default router;
