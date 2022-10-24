import express from "express";
import {
  authUser,
  getUserProfile,
  registerUser,
  updateUserProfile,
  getUsers,
  deleteUser
} from "../controllers/userController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

const router = express.Router();

// register user & admin get all user
router.route("/").post(registerUser).get(protect, admin,  getUsers);
// login user
router.post("/login", authUser);
// get profile
router
  .route("/profile")
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile);
// admin can delete user
router.route("/:id").delete(protect, admin, deleteUser);

export default router;
