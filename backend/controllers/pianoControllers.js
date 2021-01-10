import asyncHandler from 'express-async-handler';
import Piano from '../models/pianoModel.js';

/* 
    @desc   Fetch all pianos
    @route  GET /api/pianos
    @access Public
*/

const getPianos = asyncHandler(async (req, res) => {
  const pianos = await Piano.find({});
  res.status(200).json(pianos);
});

/* 
    @desc   Fetch piano by id
    @route  GET /api/pianos/:id
    @access Public
*/

const getPiano = asyncHandler(async (req, res) => {
  const piano = await Piano.findById(req.params.id);
  if (piano) {
    res.json(piano);
  } else {
    res.status(404);
    throw new Error('Piano not found');
  }
});

/* 
    @desc   Fetch pianos from academy
    @route  GET /api/pianos/academy/:academyId
    @access Public
*/

const getPianosByAcademyId = asyncHandler(async (req, res) => {
  const pianos = await Piano.find({ academy_id: req.params.id });
  res.status(200).json(pianos);
});

export { getPianos, getPiano, getPianosByAcademyId };
