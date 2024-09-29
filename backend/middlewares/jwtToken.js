import jwt from "jsonwebtoken";
import { UserModel } from "../model/userModel.js";

const generateToken = (req, res) => {
  //get id create token, save it to cookie
  const { id } = req;
  if (!id) {
    return res;
  }
  const token = jwt.sign(
    {
      id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.cookie("token", token, { httpOnly: true, secure: true });
};

const verifyToken = async (req, res, next) => {
  //get token from cookie verify if correct, call next
  if (!req.cookies || !req.cookies["token"]) {
    return res.status(404).json({
      success: true,
      message: "no active session, login first",
    });
  }
  const token = req.cookies["token"];
  if (!token) {
    return res.status(404).json({
      success: false,
      message: "no active session, login first",
    });
  }
  const result = jwt.verify(token, process.env.JWT_SECRET);
  if (result) {
    //get user and put into req for further operations
    req.user = await UserModel.findById(result.id);
    next();
  } else {
    res.status(404).json({
      success: false,
      error: "session expired, kindly login",
    });
    return;
  }
};

export { generateToken, verifyToken };
