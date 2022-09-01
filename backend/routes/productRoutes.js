import express from "express";
import asyncHandler from "express-async-handler";
import { adminOnly, merchantsOnly, protect } from "../middleware/authMidedleware.js";
import Notifications from "../models/notificationModel.js";
import Products from "./../models/productModel.js";

const productRoute = express.Router();

//GET ALL PRODUCTS
productRoute.get(
  "/",
  asyncHandler(async (req, res) => {
    const pageSize = 6;
    const page = Number(req.query.pageNumber) || 1;
    const keyword = req.query.keyword
      ? {
          name: {
            $regex: req.query.keyword,
            $options: "i",
          },
        }
      : {};

    const count = await Products.countDocuments({ ...keyword });
    const products = await Products.find({ ...keyword })
      .limit(pageSize)
      .skip(pageSize * (page - 1))
      // .sort({ _id: -1 });
    const approvedProducts = products?.filter(
      (product) => product?.createStatus !== "Pending"
    );
    res.json({
      products: approvedProducts,
      page,
      pages: Math.ceil(count / pageSize),
    });
  })
);

//GET ALL PRODUCTS: ADMIN ONLY
productRoute.get(
  "/admin/products",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const products = await Products.find({})
      .sort({ _id: -1 })
      .populate("owner", "id name email");
    
    // const approvedProducts = products?.filter(product => product?.createStatus !== "Pending")
    res.json(products);
  })
);

//GET ALL PRODUCTS: MERCHANTS ONLY
// productRoute.get(
//   "/admin/products",
//   protect,
//   adminOnly,
//   asyncHandler(async (req, res) => {
//     const products = await Products.find({}).sort({ _id: -1 });
//     res.json(products);
//   })
// );

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

//ADMIN: GET ALL PRODUCT REVIEWS/RATINGS
//PRODUCT REVIEW/RATING
productRoute.get(
  "/admin/reviews",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    // console.log("req", req, "user", req.user);
    // const { rating, comment } = req.body;
    const products = await Products.find({});
    const productWithReviews = products.filter(review=>review.reviews.length > 0)
    const reviews = productWithReviews.map(reviews=> reviews.reviews)
    // const reviews = product.reviews;
    if (products) {
      
      res.json({
        status: 200,
        message: "Reviews successfully fetched",
        data: productWithReviews,
      });
    } else {
      res.status(404);
      throw new Error("No Reviews Found");
    }
  })
);

//ADD PRODUCT: ONLY ADMIN
productRoute.post(
  "/admin/add-product",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const { name, price, description, image, countInStock, category } = req.body;
    const productExist = await Products.findOne({ name });

    if (productExist) {
      res.status(400);
      throw new Error("Product name alread exist");
    } else {
      const product = new Products({
        name,
        price,
        description,
        image,
        countInStock,
        category,
        user: req.user._id,
        createStatus: "Approved"
      });
      if (product) {
        const createdProduct = await product.save();
        res.status(200).json(createdProduct);
      } else {
        res.status(400);
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
    const { name, price, description, image, countInStock, category } = req.body;
    const product = await Products.findById(req.params.id);

    if (product) {
      product.name = name || product.name;
      product.price = price || product.price;
      product.description = description || product.description;
      product.image = image || product.image;
      product.countInStock = countInStock || product.countInStock;
      product.category = category || product.category; 
      product.createStatus = "Approved"

      const updatedProduct = await product.save();
      res.json(updatedProduct);
    } else {
      res.status(404);
      throw new Error("Product not found");
    }
  })
);

//DELETE PRODUCT
productRoute.delete(
  "/admin/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const product = await Products.findById(req.params.id);
    if (product) {
      await product.remove();
      res.json({ message: "Product deleted successfully" });
    } else {
      res.status(404);
      throw new Error("Product Not Found");
    }
  })
);

//MERCHANTS

//ADD PRODUCT: ONLY MERCHANTS
productRoute.post(
  "/merchant/add-product",
  protect,
  merchantsOnly,
  asyncHandler(async (req, res) => {
    const { name, price, description, image, countInStock, category, createStatus } = req.body;
    const productExist = await Products.findOne({ name });

    if (productExist) {
      res.status(400);
      throw new Error("Product name alread exist");
    } else {
      const product = new Products({
        name,
        price,
        description,
        image,
        countInStock,
        category,
        owner: req.user._id,
        createStatus: "Pending",
      });

       const createNotification = new Notifications({
         title: "Product creation",
         description: "Please review this product specifications and take the necessary action",
         product,
         status: "Pending",
         sender: req.user._id,
       });
      if (product) {
        const createdProduct = await product.save();
         await createNotification.save();
        res.status(200).json(createdProduct);
      } else {
        res.status(400);
        throw new Error("Invalid product data");
      }
    }
  })
);

//GET ALL PRODUCTS: MERCHANTS ONLY
productRoute.get(
  "/merchant/products",
  protect,
  merchantsOnly,
  asyncHandler(async (req, res) => {
    const owner = req.user.email;
    // console.log("owneeee", owner)
    const products = await Products.find({})
      .sort({ _id: -1 })
      .populate("owner", "id name email");
      const merchantsOwnProducts = products?.filter(
        (product) => product?.owner?._id.toString() === req.user._id.toString()
      );
      // console.log(
      //   "users",
      //   req.user,
      //   "products",
      //   merchantsOwnProducts
      // );
    res.json(merchantsOwnProducts);
        

  })
);

//MERCHANT: GET ALL PRODUCT REVIEWS/RATINGS
//PRODUCT REVIEW/RATING
productRoute.get(
  "/merchant/reviews",
  protect,
  merchantsOnly,
  asyncHandler(async (req, res) => {
    // console.log("req", req, "user", req.user);
    // const { rating, comment } = req.body;
    const products = await Products.find({});
    const productWithReviews = products.filter(product=>product.reviews.length > 0)
    // const reviews = productWithReviews.map(reviews=> reviews.reviews)
    // const reviews = product.reviews;
console.log("products", products)
    const merchantsOwnreviews = productWithReviews?.filter(
      (product) => product?.owner?._id.toString() === req.user._id.toString()
    );
    if (products) {
      
      res.json({
        status: 200,
        message: "Reviews successfully fetched",
        data: merchantsOwnreviews,
      });
    } else {
      res.status(404);
      throw new Error("No Reviews Found");
    }
  })
);


export default productRoute;
