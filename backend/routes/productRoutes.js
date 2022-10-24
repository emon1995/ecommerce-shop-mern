import express from "express";
import {
  getProductById,
  getProducts,
  deleteProduct,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// all products
router.route("/").get(getProducts);
// single product
router.route("/:id").get(getProductById).delete(protect, admin, deleteProduct);

export default router;
