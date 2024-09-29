import express from "express";
import { UserModel } from "../model/userModel.js";
const router = express.Router();

router.get("/all", async (req, res) => {
  const userData = await UserModel.find();
  res.status(201).json({
    success: true,
    data: userData,
    message: "user data fetched successfully !",
    user: req.user,
  });
});

router.get("/:id", async (req, res) => {
  const userData = await UserModel.findById(req.params.id);
  res.status(201).json({
    success: true,
    data: userData,
    message: "user data fetched successfully !",
  });
});

export { router as UserRouter };
