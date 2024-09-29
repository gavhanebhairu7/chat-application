import express from "express";
import { UserModel } from "../model/userModel.js";
import { generateToken, verifyToken } from "../middlewares/jwtToken.js";
import bcrypt from "bcrypt";
const router = express.Router();

router.post(
  "/register",
  async (req, res, next) => {
    try {
      let { name, email, phone, password } = req.body;
      if (!name || !phone || !password) {
        return res.status(400).json({
          success: "false",
          error: "provide required details",
        });
      }
      password = await bcrypt.hash(password, 10);
      const db_response = await UserModel.create({
        name,
        email,
        phone,
        password,
      });
      if (db_response) {
        req.body.id = db_response._id;
        next();
        res.status(201).json({
          success: true,
          data: db_response,
          message: "user registered successfully !",
        });
      } else {
        res.status(400).json({
          success: false,
          error: "user wasn't registered !",
        });
      }
    } catch (err) {
      return res.status(502).json({
        success: false,
        error: "Internal server error",
      });
    }
  },
  generateToken
);

router.post(
  "/login",
  async (req, res, next) => {
    try {
      const { phone, password } = req.body;
      if (!phone || !password) {
        return res.status(400).json({
          success: false,
          error: "all details are required !",
        });
      }
      const user = await UserModel.findOne({ phone });
      if (!user) {
        return res.status(404).json({
          success: false,
          message: "user not found, kindly register first",
        });
      }

      const match = await bcrypt.compare(password, user.password);
      if (match) {
        req.id = user._id;
        next();
        return res.status(201).json({
          success: true,
          message: "login successful !",
        });
      } else {
        return res.status(400).json({
          success: false,
          error: "password is not matching",
        });
      }
    } catch (err) {
      return res.status(501).json({
        success: false,
        error: err,
      });
    }

    //login logic here
    //check email
    //verify password
    //done=>next();
  },
  generateToken
);

export { router as AuthRouter };
