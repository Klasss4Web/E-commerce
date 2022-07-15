import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../middleware/authMidedleware.js";
import Order from "../models/orderModel.js";

const orderRoute = express.Router();

//ORDER
orderRoute.post(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const {
      orderItems,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    } = req.body;

    if (orderItems && orderItems.length === 0) {
      res.status(400);
      throw new Error("No order items");
      // return;
    } else {
      const order = new Order({
        user: req.user._id,
        orderItems,
        shippingAddress,
        paymentMethod,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
      });

      const createOrder = await order.save()
      res.status(200).json(createOrder);
    }
  })
);

export default orderRoute;
