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
userRoute.post(
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


//UPDATE PROFILE
userRoute.put(
  "/profile",
  protect,
  asyncHandler(async (req, res) => {
    // res.send("User Profile")
    const user = await User.findById(req.user._id)

    if (user) {
     user?.name = req?.body?.name || user?.name
     user?.email = req?.body?.email || user?.email
     if(req.body.password) {
      user.password = req.body.password
     }
     const updateUser = await user.save()
     res.json({
        _id: updateUser._id,
        name: updateUser.name,
        email: updateUser.email,
        isAdmin: updateUser.isAdmin,
        createdAt: updateUser.createdAt,
        token: generateToken(updateUser._id),
      });
    } else {
      res.status(404);
      throw new Error("User not found");
    }
  })
);



export default userRoute;