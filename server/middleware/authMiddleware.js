import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../model/User.js";

export const protectRoute = asyncHandler(async (req, res, next) => {
  let token;

  try {
    token = req.cookies.jwt;
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const findUser = await User.findById(decoded.userId).select("-password");
    req.user = findUser;
    next();
  } catch (error) {
    console.error(error);
    res.status(401)
    throw new Error("Not authorized, token failed");
  }

});
