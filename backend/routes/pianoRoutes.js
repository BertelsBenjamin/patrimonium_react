import express from 'express';
import {
  getPianos,
  getPiano,
  getPianosByAcademyId,
} from '../controllers/pianoControllers.js';

const router = express.Router();

router.route('/').get(getPianos);
router.route('/:id').get(getPiano);
router.route('/academy/:id').get(getPianosByAcademyId);

export default router;
