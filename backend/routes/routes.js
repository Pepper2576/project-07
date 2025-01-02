import express from 'express';
import { getAllData, postData } from '../controllers/controllers.js';

const router = express.Router();

router.get('/data', getAllData);

router.post('/data', postData);

export default router;
