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

// @desc    Register new user
// @route   POST /api/users
// @access  Private
const registerUser = asyncHandler(async (req, res) => {
  const {
    name,
    email,
    password,
    first_name,
    isAdmin,
    isManager,
    isDispatcher,
    isTechnician,
  } = req.body;
  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({
    name,
    email,
    password,
    first_name,
    isAdmin,
    isManager,
    isDispatcher,
    isTechnician,
  });

  if (user) {
    res.status(201).json({
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
    res.status(400);
    throw new Error('Invalid user data');
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

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.first_name = req.body.first_name || user.first_name;
    user.email = req.body.email || user.email;
    user.initials =
      user.name.toString().charAt(0).toUpperCase() +
      user.name.toString().charAt(1).toLowerCase() +
      user.first_name.toString().charAt(0).toUpperCase() +
      user.first_name.toString().charAt(1).toLowerCase();
    user.department = req.body.department || user.department;
    user.role = req.body.role || user.role;
    user.street = req.body.street || user.street;
    user.place = req.body.place || user.place;
    user.phone_int = req.body.phone_int || user.phone_int;
    user.house_number = req.body.house_number || user.house_number;
    user.phone_private = req.body.phone_private || user.phone_private;
    user.mobile_private = req.body.mobile_private || user.mobile_private;
    user.private_email = req.body.private_email || user.private_email;
    user.updatedAt = new Date();

    if (req.body.password) {
      user.password = req.body.password;
    }

    const updatedUser = await user.save();

    res.json(updatedUser);
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

export { authUser, registerUser, getUserProfile, updateUserProfile };
