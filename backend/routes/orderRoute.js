import express from "express";
import asyncHandler from "express-async-handler";
import { adminOnly, protect } from "../middleware/authMidedleware.js";
import Order from "../models/orderModel.js";

const orderRoute = express.Router();

//CREATE ORDER
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
      return;
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

      const createOrder = await order.save();
      res.status(200).json(createOrder);
    }
  })
);

//GET ORDER BY ID
orderRoute.get(
  "/:id",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (order) {
      res.json(order);
      // return;
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

//UPDATE PAYMENT DETAILS FOR PRODUCT
orderRoute.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      order.isPaid = true;
      order.paidAt = Date.now();
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address,
      };

      const updatedOrder = await order.save();
      res.json(updatedOrder);

      // return;
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

//UPDATE DELIVERY DETAILS FOR PRODUCT
orderRoute.put(
  "/:id/delivered",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id);

    if (order) {
      if (order.isPaid) {
        order.isDelivered = true;

        // order.paymentResult = {
        //   id: req.body.id,
        //   status: req.body.status,
        //   update_time: req.body.update_time,
        //   email_address: req.body.email_address

        // }

        const updatedOrder = await order.save();
        res.json({
          status: 200,
          message: "Delivery status updated successfully",
          updatedOrder,
        });
      } else {
        res.json({
          message: "Payment is yet to be made for this order"
        })
      }
      // return;
    } else {
      res.status(404);
      throw new Error("Order Not Found");
    }
  })
);

//LOGGED IN USER ORDERS
orderRoute.get(
  "/",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.find({ user: req.user._id }).sort({ _id: -1 });
    res.json(order);
  })
);

//ADMIN GET ORDERS
orderRoute.get(
  "/admin/orders",
  protect,
  adminOnly,
  asyncHandler(async (req, res) => {
    const orders = await Order.find({})
      .sort({ _id: -1 })
      .populate("user", "id name email");
    res.json(orders);
  })
);

export default orderRoute;
