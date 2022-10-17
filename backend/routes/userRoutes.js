import express from "express";
import { authUser, getUserProfile, registerUser } from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// register user
router.route("/").post(registerUser);
// login user
router.post("/login", authUser);
// get profile
router.route("/profile").get(protect, getUserProfile);

export default router;
