import express from "express";
import {
  authUser,
  registerUser,
  logoutUser, 
  getUserProfile,
  updateUserProfile,
} from "../controllers/user.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);
router.route("/profile").get(protectRoute,getUserProfile).put(updateUserProfile);

export default router;
