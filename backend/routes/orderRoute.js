import express from "express";
import asyncHandler from "express-async-handler";
import protect from "../middleware/authMidedleware.js";
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

      const createOrder = await order.save()
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
    )

    if (order) {
      res.json(order);
      // return;
    } else {
     
      res.status(404);
      throw new Error("Order Not Found")
    }
  })
);

//UPDATE PAYMENT DETAILS FOR PRODUCT
orderRoute.put(
  "/:id/pay",
  protect,
  asyncHandler(async (req, res) => {
    const order = await Order.findById(req.params.id)

    if (order) {
      order.isPaid = true
      order.paidAt = Date.now
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.email_address

      }

      const updatedOrder = await order.save()
      res.json(updatedOrder);
    
      // return;
    } else {
     
      res.status(404);
      throw new Error("Order Not Found")
    }
  })
);



export default orderRoute;
