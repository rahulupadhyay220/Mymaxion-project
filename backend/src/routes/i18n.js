/* eslint-disable no-undef */
import express from 'express';
import fs from 'fs';
import path from 'path';

const router = express.Router();

// return list of available languages or translation files
router.get('/', (req, res) => {
  const dir = path.join(process.cwd(), 'public', 'translate_a');
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    res.json({ files });
  } else {
    res.json({ files: [] });
  }
});

export default router;
