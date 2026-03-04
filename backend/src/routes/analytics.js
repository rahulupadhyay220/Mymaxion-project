import express from 'express';

const router = express.Router();
let hits = 0;

// increment and return current count
router.post('/hit', (req, res) => {
  hits += 1;
  res.json({ hits });
});

router.get('/hit', (req, res) => {
  res.json({ hits });
});

export default router;
