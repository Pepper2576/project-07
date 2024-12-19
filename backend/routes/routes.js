import express from 'express';
import Login from '../schema/loginSchema.js';

const router = express.Router();

router.get('/data', async (req, res) => {
  try {
    const item = await Login.find();
    res.json(item);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to retrieve items' });
  }
});

export default router;
