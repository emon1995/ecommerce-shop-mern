import express from "express";
import { getProductById, getProducts } from "../controllers/productController.js";

const router = express.Router();

// all products
router.route("/").get(getProducts);
// single product
router.route("/:id").get(getProductById);

export default router;
