import express from 'express';
import { GetAllJobs } from '../controllers/publilcController.js';

const router = express.Router();

router.get('/jobs', GetAllJobs);

export default router;