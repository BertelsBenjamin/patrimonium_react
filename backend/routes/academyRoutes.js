import express from 'express';
import { getAcademies, getAcademy } from '../controllers/academyControllers.js';

const router = express.Router();

router.route('/').get(getAcademies);
router.route('/:id').get(getAcademy);

export default router;
