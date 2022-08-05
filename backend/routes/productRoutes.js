import express from "express";
import asyncHandler from "express-async-handler";
import {adminOnly, protect} from "../middleware/authMidedleware.js";
import Products from "./../models/productModel.js";

const productRoute = express.Router();

//GET ALL PRODUCTS
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 3
    const page = Number(req.query.pageNumber) || 1
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

      const count = await Products.countDocuments({ ...keyword })
    const products = await Products.find({ ...keyword })
        .limit(pageSize)
        .skip(pageSize * (page - 1))
        .sort({ _id: -1 })
    res.json({products, page, pages: Math.ceil(count / pageSize)});
  })
);

//GET ALL PRODUCTS: ADMIN ONLY
productRoute.get(
  "/admin/products", protect, adminOnly,
  asyncHandler(async(req, res) => {
    const products = await Products.find({}).sort({ _id: -1})
    res.json(products)
  })
)

//GET SINGLE PRODUCTS
productRoute.get(
  "/:id",
  asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (product) {
      res.json(product);
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

//PRODUCT REVIEW/RATING
productRoute.post(
  "/:id/review",
  protect,
  asyncHandler(async (req, res) => {
    console.log("req", req, "user", req.user);
    const { rating, comment } = req.body;
    const product = await Products.findById(req.params.id);
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (rev) => rev.user.toString() === req.user._id.toString()
      );

      if (alreadyReviewed) {
        res.status(400);
        throw new Error("Product already reviewed");
      }

      const review = {
        comment,
        name: req.user.name,
        rating: Number(rating),
        user: req.user._id,
      };

      product.reviews.push(review);
      product.numReviews = product.reviews.length;
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length;

      await product.save();
      res.status(201).json({ message: "Review added" });
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

//ADD PRODUCT: ONLY ADMIN
productRoute.post(
  "/admin/add-product", protect, adminOnly,
  asyncHandler(async (req, res) => {
    const { name, price, description, image, countInStock} = req.body
    const productExist = await Products.findOne({name})

    if (productExist) {
      res.status(400)
      throw new Error("Product name alread exist");
    } else {
      const product = new Products({
        name,
        price,
        description,
        image,
        countInStock,
        user: req.user._id
      });
      if(product) {
        const createdProduct = await product.save();
        res.status(200).json(createdProduct);
      } else {
        res.status(400)
         throw new Error("Invalid product data");
      }
     
    }
  })
);

//EDIT PRODUCT: ONLY ADMIN
productRoute.put(
  "/admin/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const { name, price, description, image, countInStock } = req.body;
    const product = await Products.findById(req.params.id);

    if (product) {
        product.name = name || product.name;
        product.price = price || product.price;
        product.description = description || product.description;
        product.image = image || product.image;
        product.countInStock = countInStock || product.countInStock;

        const updatedProduct = await product.save();
        res.json(updatedProduct)
    } else {
       res.status(404);
       throw new Error("Product not found");
     
    }
  })
);

//DELETE PRODUCT
productRoute.delete(
  "/admin/:id", protect, adminOnly,
  asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (product) {
      await product.remove()
      res.json({message: "Product deleted successfully"});
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

export default productRoute;
