import asyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";

import { productValidation } from "../utils/validation.js";
import User from "../model/User.js";
import generateToken from "../utils/tokenManagement.js";
import Product from "../model/Products.js";

// @desc    create Product
// @route   POST /api/products
// @access  Private
const addProduct = asyncHandler(async (req, res) => {
  const { error } = productValidation(req.body);
  if (error) {
    res.status(400);
    throw new Error(error.message);
  }
  // console.log(req.body)
  const { name, description, price, imageUrl } = req.body;
  const newProduct = await Product.create({
    name,
    description,
    price,
    imageUrl,
  });

  if (!newProduct) {
    res.status(400);
    throw new Error("Failed to create product");
  }
  console.log(newProduct)
  res.status(201).json({ message: "Product Added Successfully" });
});

// @desc    fetch all Products
// @route   GET /api/products
// @access  Public
const getProducts = asyncHandler(async (req, res) => {

  const allProducts = await Product.find({})

  res.status(201).json( allProducts);
});

// @desc    Get single product
// @route   GET /api/product/id
// @access  Private
const getProduct = asyncHandler(async (req, res) => {
  res.json("single product");
});

// @desc    Get single product
// @route   GET /api/product/?keyword=""
// @access  Public
const getProductsByname = asyncHandler(async (req, res) => {
  res.json("Product by name");
});
// @desc    Update single product
// @route   PUT /api/product/id
// @access  Private

export { addProduct, getProduct, getProducts, getProductsByname };
