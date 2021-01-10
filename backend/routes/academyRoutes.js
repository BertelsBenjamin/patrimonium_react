import express from 'express';
import {
  getAcademies,
  getAcademy,
  getAcademyByPianoId,
} from '../controllers/academyControllers.js';

const router = express.Router();

router.get('/', getAcademies);
router.get('/:id', getAcademy);
router.get('/piano/:id', getAcademyByPianoId);

export default router;
