import asyncHandler from 'express-async-handler';
import Academy from '../models/academyModel.js';
import Piano from '../models/pianoModel.js';

/* 
    @desc   Fetch all academies
    @route  GET /api/academies
    @access Public
*/

const getAcademies = asyncHandler(async (req, res) => {
  const academies = await Academy.find({});
  res.status(200).json(academies);
});

/* 
    @desc   Fetch academy by academyId
    @route  GET /api/academies/:id
    @access Public
*/

const getAcademy = asyncHandler(async (req, res) => {
  let academy = await Academy.findById(req.params.id);
  console.log(academy);

  //Add all pianos to academy
  /* const pianos = await Piano.find({ academy_id: req.params.id });
  academy = { ...academy._doc, pianos: pianos };
  console.log(academy); */

  if (academy) {
    res.json(academy);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

/* 
    @desc   Fetch academy by pianoId
    @route  GET /api/academies/piano/:id
    @access Public
*/

const getAcademyByPianoId = asyncHandler(async (req, res) => {
  const academy = await Academy.find();
  res.status(200).json(academy);
});

export { getAcademies, getAcademy, getAcademyByPianoId };
