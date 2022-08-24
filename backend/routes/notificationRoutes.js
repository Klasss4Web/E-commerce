import express from "express";
import asyncHandler from "express-async-handler";
import {
  adminOnly,
  merchantsOnly,
  protect,
} from "../middleware/authMidedleware.js";
import Notifications from "../models/notificationModel.js";
import Products from "./../models/productModel.js";

const notificationRoute = express.Router();

//ADMIN: GET ALL PRODUCT REVIEWS/RATINGS
//PRODUCT REVIEW/RATING
notificationRoute.get(
  "/admin/notifications",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    // console.log("req", req, "user", req.user);
    // const { rating, comment } = req.body;
    const notifications = await Notifications.find({})
      .sort({ _id: -1 })
      .populate("product", "id name image price countInStock")
      .populate("sender", "id name email");;
    const productNotifications = notifications.filter(
      (product) => product.status === "Pending"
    );
    const reviews = productNotifications.map((reviews) => reviews.reviews);
    // const reviews = product.reviews;
    if (notifications) {
      res.json({
        status: 200,
        message: "Notifications successfully fetched",
        data: notifications,
      });
    } else {
      res.status(404);
      throw new Error("No Reviews Found");
    }
  })
);

export default notificationRoute;
