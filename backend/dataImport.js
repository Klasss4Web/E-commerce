import express from "express"
import products from "./data/product.js"
import users from "./data/users.js"
import Products from "./models/productModel.js"
import User from "./models/userModel.js"
import asyncHandler from "express-async-handler";

const importData = express.Router()


// ADD USERS TO THE DATA BASE
importData.post(
  "/user",
  asyncHandler(async (req, res) => {
    await User.remove({});

    const importUsers = await User.insertMany(users);

    res.send({ importUsers });
  })
);

// ADD PRODUCTS TO THE DATA BASE
importData.post(
  "/products",
  asyncHandler(async (req, res) => {
    await Products.remove({});

    const importProducts = await User.insertMany(products);

    res.send({ importProducts });
  })
);

export default importData;