import express from 'express';
import { isRecruiter, Protect } from '../middlewares/authMiddleWare.js';
import { AddNewJobs, GetPostedJobs } from '../controllers/recruiterController.js';


const router = express.Router();

router.post('/add-new-job', Protect, isRecruiter, AddNewJobs);
router.get('/get-posted-jobs', Protect, isRecruiter, GetPostedJobs);


export default router;