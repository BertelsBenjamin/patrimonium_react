import asyncHandler from 'express-async-handler';
import Academy from '../models/academyModel.js';

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
    @desc   Fetch academy by id
    @route  GET /api/academies/:id
    @access Public
*/

const getAcademy = asyncHandler(async (req, res) => {
  const academy = await Academy.findById(req.params.id);
  if (academy) {
    res.json(academy);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getAcademies, getAcademy };
