import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../middleware/authMidedleware.js";
import User from "../models/userModel.js";
import generateToken from "../utils/generateToken.js";

const userRoute = express.Router();

//LOGIN
userRoute.post(
  "/login",
  asyncHandler(async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    } else {
      res.status(401)
      throw new Error("Invalid Email or Password")
    }
  })
);

//REGISTER
userRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email });

    if (userExists) {
      res.status(400);
      throw new Error("User already exists")
    } 

    const user = await User.create({
      name,
      email,
      password,
    });

    if(user) {
      res.status(201).json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        token: generateToken(user._id),
        createdAt: user.createdAt,
      });
    }
    else {
      res.status(400)
      throw new Error("Invalid user data")
    }
  })
);


//PROFILE
userRoute.get(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    // res.send("User Profile")
    const user = await User.findById(req.user._id)

    if (user) {
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        createdAt: user.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);



export default userRoute;
