import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';

// @desc    Authenticate user & Get token
// @route   POST /api/users/login
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
      isAdmin: user.isAdmin,
      isManager: user.isManager,
      isDispatcher: user.isDispatcher,
      isTechnician: user.isTechnician,
      place: user.place,
      phone_int: user.phone_int,
      phone_mobile: user.phone_mobile,
      house_number: user.house_number,
      pc: user.pc,
      born_at: user.born_at,
      phone_private: user.phone_private,
      mobile_private: user.mobile_private,
      private_email: user.private_email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      isManager: user.isManager,
      isDispatcher: user.isDispatcher,
      isTechnician: user.isTechnician,
      place: user.place,
      phone_int: user.phone_int,
      phone_mobile: user.phone_mobile,
      house_number: user.house_number,
      pc: user.pc,
      born_at: user.born_at,
      phone_private: user.phone_private,
      mobile_private: user.mobile_private,
      private_email: user.private_email,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    });
  } else {
    res.status(404);
    throw new Error('User not found.');
  }
});

export { authUser, getUserProfile };
