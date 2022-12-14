import express from "express";
import {
  getProductById,
  getProducts,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// all products & create product
router.route("/").get(getProducts).post(protect, admin, createProduct);
// product review
router.route("/:id/reviews").post(protect, createProductReview);
// top rate product
router.get("/top", getTopProducts);
// single product get, delete, update
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

export default router;
