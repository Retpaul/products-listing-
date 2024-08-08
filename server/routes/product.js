import express from "express";
import {
  addProduct,
  getProduct,
  getProducts,
  getProductsByname,
} from "../controllers/product.js";
import { protectRoute } from "../middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(getProducts).post(addProduct);
router.post("/id", getProduct);
router.route("/").get(getProductsByname);

export default router;
