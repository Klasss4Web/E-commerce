import express from "express";
import asyncHandler from "express-async-handler";
import { adminOnly, protect } from "../middleware/authMidedleware.js";
import Merchant from "../models/merchantModel.js";

const merchantRoute = express.Router();

//LOGIN
// merchantRoute.post(
//   "/login",
//   asyncHandler(async (req, res) => {
//     const { email, password } = req.body;
//     const user = await User.findOne({ email });

//     if (user && (await user.matchPassword(password))) {
//       res.status(200).json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         createdAt: user.createdAt,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(401);
//       throw new Error("Invalid Email or Password");
//     }
//   })
// );

// //REGISTER
// merchantRoute.post(
//   "/",
//   asyncHandler(async (req, res) => {
//     const { name, email, password } = req.body;
//     const userExists = await User.findOne({ email });

//     if (userExists) {
//       res.status(400);
//       throw new Error("User already exists");
//     }

//     const user = await User.create({
//       name,
//       email,
//       password,
//     });

//     if (user) {
//       res.status(201).json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         createdAt: user.createdAt,
//         token: generateToken(user._id),
//       });
//     } else {
//       res.status(400);
//       throw new Error("Invalid user data");
//     }
//   })
// );

//CREATE NEW MERCHANT: ONLY ADMIN
merchantRoute.post(
  "/",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const { name, email, userType, image } = req.body;
    const merchantExist = await Merchant.findOne({ email });

    if (merchantExist) {
      res.status(400);
      throw new Error("Merchant alread exist");
    } else {
      const merchant = new Merchant({
        name,
        email,
        userType,
        image,
      });
      if (merchant) {
        const createdMerchant = await merchant.save();
        res.status(200).json({
          status: 200,
          message: "Merchant Successfully Created",
          data: createdMerchant,
        });
      } else {
        res.status(400);
        throw new Error("Invalid merchant data");
      }
    }
  })
);

//GET ALL MERCHANTS: ADMIN ONLY ACCESS
merchantRoute.get(
  "/",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const merchants = await Merchant.find({});
    if (merchants) {
      res.status(200).json({
        status: 200,
        message: "Merchants Successfully Fetched",
        data: merchants,
      });
    } else {
      res.status(404);
      res.json({
        status: 404,
        message: "No merchant found",
        data: [],
      });
      throw new Error("Merchants Not Found");
    }
  })
);

//GET MERCHANT BY ID
merchantRoute.get(
  "/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const merchant = await Merchant.findById(req.params.id);
    if (merchant) {
      res.status(200).json({
        status: 200,
        message: "Merchant Successfully Fetched",
        data: merchant,
      });
    } else {
      // res.status(404);
      res.status(404).json({
        status: 404,
        message: "No merchant found",
        data: [],
      });
      throw new Error("Merchant Not Found");
    }
  })
);

// //PROFILE
// merchantRoute.get(
//   "/profile",
//   protect,
//   asyncHandler(async (req, res) => {
//     // res.send("User Profile")
//     const user = await User.findById(req.user._id);

//     if (user) {
//       res.json({
//         _id: user._id,
//         name: user.name,
//         email: user.email,
//         isAdmin: user.isAdmin,
//         createdAt: user.createdAt,
//       });
//     } else {
//       res.status(404);
//       throw new Error("User not found");
//     }
//   })
// );

//UPDATE MERCHANT PROFILE
merchantRoute.put(
  "/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    // res.send("User Profile")
    const merchant = await Merchant.findById(req.params.id);
    // const { name, email, userType, image } = req.body;

    if (merchant) {
      merchant.name = req?.body?.name || merchant?.name;
      merchant.email = req?.body?.email || merchant?.email;
      merchant.status = req?.body?.status || merchant?.status;
      merchant.image = req?.body?.image || merchant?.image;
      if (req.body.password) {
        merchant.password = req.body.password;
      }
      const updateMerchant = await merchant.save();
      res.json({
        _id: updateMerchant._id,
        name: updateMerchant.name,
        email: updateMerchant.email,
        image: updateMerchant.image,
        status: updateMerchant.status,
        isAdmin: updateMerchant.isAdmin,
        createdAt: updateMerchant.createdAt,
      });
    } else {
      res.status(404);
      throw new Error("Merchant not found");
    }
  })
);

//DELETE MERCHANT
merchantRoute.delete(
  "/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const merchant = await Merchant.findById(req.params.id);
    if (merchant) {
      await merchant.remove();
      res.json({ status: 200, message: "Merchant deleted successfully" });
    } else {
      res.status(404);
      throw new Error("merchant Not Found");
    }
  })
);

export default merchantRoute;
