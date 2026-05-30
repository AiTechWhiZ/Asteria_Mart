import crypto from "crypto";
import express from "express";
import { getRazorpay } from "../config/razorpay.js";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();
router.use(protect);

router.post("/razorpay/order", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.body.orderId,
      user: req.user._id,
    });
    if (!order) return res.status(404).json({ message: "Order not found" });
    const razorpayOrder = await getRazorpay().orders.create({
      amount: Math.round(order.total * 100),
      currency: "INR",
      receipt: order._id.toString(),
    });
    order.payment.razorpayOrderId = razorpayOrder.id;
    await order.save();
    res.json({ razorpayOrder, key: process.env.RAZORPAY_KEY_ID });
  } catch (error) {
    next(error);
  }
});

router.post("/razorpay/verify", async (req, res, next) => {
  try {
    const {
      orderId,
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
    } = req.body;
    const order = await Order.findOne({ _id: orderId, user: req.user._id });
    if (!order) return res.status(404).json({ message: "Order not found" });
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");
    if (expected !== razorpay_signature)
      return res.status(400).json({ message: "Payment verification failed" });
    order.payment = {
      ...order.payment,
      razorpayOrderId: razorpay_order_id,
      razorpayPaymentId: razorpay_payment_id,
      razorpaySignature: razorpay_signature,
      status: "paid",
    };
    order.status = "confirmed";
    await order.save();
    await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
    res.json({ message: "Payment verified", order });
  } catch (error) {
    next(error);
  }
});

router.post("/mock", async (req, res, next) => {
  try {
    const order = await Order.findOne({
      _id: req.body.orderId,
      user: req.user._id,
    });
    if (!order) return res.status(404).json({ message: "Order not found" });
    order.payment = { status: "paid" };
    order.status = "confirmed";
    await order.save();
    await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
    res.json({ message: "Payment successful", order });
  } catch (error) {
    next(error);
  }
});

export default router;
