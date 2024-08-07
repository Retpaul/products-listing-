import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import { loginValidation, userValidation } from "../utils/validation.js";
import User from "../model/User.js";
import generateToken from "../utils/tokenManagement.js";

// @desc    Auth user & get token
// @route   POST /api/users/auth
// @access  Public
const authUser = asyncHandler(async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("Invalid Credentials");
  }
  const correctPassword = await bcrypt.compare(password, user.password);
  if (!correctPassword) {
    res.status(400);
    throw new Error("Invalid Email or Password");
  }
  generateToken(res, user._id);

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
  });
});

// @desc    Register a new user
// @route   POST /api/users
// @access  Public
const registerUser = asyncHandler(async (req, res) => {
  const { error } = userValidation(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }

  const { name, email, password } = req.body;
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("This user already exists");
  }
  const newUser = await User.create({
    name,
    email,
    password,
  });
  if (!newUser) {
    res.status(400);
    throw new Error("Failed to create user account");
  }

  res.status(201).json({ message: "User created susccesfully" });
});

// @desc    Logout user / clear cookie
// @route   POST /api/users/logout
// @access  Public
const logoutUser = (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0),
      });
      res.status(200).json({ message: 'Logged out successfully' });
};

// @desc    Get user profile
// @route   GET /api/users/profile
// @access  Private
const getUserProfile = asyncHandler(async (req, res) => {
  res.json(req.user);
});

// @desc    Update user profile
// @route   PUT /api/users/profile
// @access  Private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.send("update profile");
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
