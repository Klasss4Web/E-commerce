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

//ADMIN: GET ALL NOTIFICATIONS
//NEW PRODUCT NOTIFICATIONS
notificationRoute.get(
  "/admin/notifications",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    // console.log("req", req, "user", req.user);
    // const { rating, comment } = req.body;
    const notifications = await Notifications.find({})
      .sort({ _id: -1 })
      .populate("product", "id name image price countInStock, createStatus")
      .populate("sender", "id name email");
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
      throw new Error("No Notifications Found");
    }
  })
);

//NEW UPDATE PRODUCT NOTIFICATIONS
notificationRoute.put(
  "/admin/notifications/:id",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const notification = await Notifications.findById(req.params.id);
    const product = await Products.findById(notification?.product?._id);
    const { status, productStatus } = req.body;

    if (notification && product) {
      notification.sender = notification?.sender;
      notification.product = notification?.product;
      notification.description = `Admins response on: ${notification?.description}`;
      notification.image = notification?.image;
      notification.title = notification?.title;
      notification.category = notification?.category;
      notification.status = status;

      product.createStatus = productStatus;
      await product.save();

      const updatedNotification = await notification.save();
      res.json({
        status: 200,
        message: "Notification successfully updated",
        updatedNotification,
      });
    } else {
      res.status(404);
      throw new Error("Notification not found");
    }
  })
);

//MERCHANT: GET NOTIFICATIONS
//NEW PRODUCT NOTIFICATIONS
notificationRoute.get(
  "/merchant/notifications",
  protect,
  merchantsOnly,
  asyncHandler(async (req, res) => {
    // console.log("req", req, "user", req.user);
    // const { rating, comment } = req.body;
    const notifications = await Notifications.find({})
      .sort({ _id: -1 })
      .populate("product", "id name image price countInStock, createStatus")
      .populate("sender", "id name email");
    const allNotifications = notifications.filter(
      (notification) => notification?.sender?.email === req.user.email
    );

    const myNotifications = notifications.filter(
      (notification) => notification?.status === "Pending"
    );
    console.log("mynotifications", myNotifications);
    if (myNotifications) {
      res.json({
        status: 200,
        message: "Notifications successfully fetched",
        data: myNotifications,
      });
    } else {
      res.status(404);
      throw new Error("No Notifications Found");
    }
  })
);

export default notificationRoute;
