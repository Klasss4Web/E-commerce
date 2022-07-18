import express from "express";
import asyncHandler from "express-async-handler"
import Products from "./../models/productModel.js"

const productRoute = express.Router()

//GET ALL PRODUCTS
productRoute.get("/", asyncHandler(async(req, res) => {
  const products = await Products.find({})
  res.json(products)
}))


//GET SINGLE PRODUCTS
productRoute.get("/:id", asyncHandler(async(req, res) => {
  const product = await Products.findById(req.params.id)
  if(product) {
     res.json(product);
  } else {
    res.status(404)
    throw new Error("Product Not Found")
  }
 
}))

//PRODUCT REVIEW/RATING
productRoute.post("/:id/review", asyncHandler(async(req, res) => {
  const {rating, comment} = req.body
  const product = await Products.findById(req.params.id)
  if(product) {
     const alreadyReviewed = product.reviews.find((rev) => rating.user.toString() === req.user._id.toString())
  } else {
    res.status(404)
    throw new Error("Product Not Found")
  }
 
}))

export default productRoute