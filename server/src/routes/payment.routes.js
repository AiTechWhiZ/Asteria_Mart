import express from "express";
import Order from "../models/Order.js";
import Cart from "../models/Cart.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();
router.use(protect);

// Razorpay integration removed — keep a mock endpoint for local/testing flows
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
    res.json({ message: "Payment successful (mock)", order });
  } catch (error) {
    next(error);
  }
});

export default router;
