import express from "express";
import Order from "../models/Order.js";
import Product from "../models/Product.js";
import User from "../models/User.js";
import { adminOnly, protect } from "../middleware/auth.js";

const router = express.Router();
router.use(protect, adminOnly);

router.get("/dashboard", async (_req, res, next) => {
  try {
    const [users, products, orders, revenueAgg, lowStock] = await Promise.all([
      User.countDocuments(),
      Product.countDocuments(),
      Order.countDocuments(),
      Order.aggregate([{ $match: { "payment.status": "paid" } }, { $group: { _id: null, total: { $sum: "$total" } } }]),
      Product.find({ stock: { $lte: 10 } }).limit(10)
    ]);
    const recentOrders = await Order.find().sort("-createdAt").limit(8).populate("user", "name email");
    res.json({ users, products, orders, revenue: revenueAgg[0]?.total || 0, lowStock, recentOrders });
  } catch (error) {
    next(error);
  }
});

router.get("/users", async (_req, res, next) => {
  try {
    res.json({ users: await User.find().select("-password").sort("-createdAt") });
  } catch (error) {
    next(error);
  }
});

router.put("/users/:id", async (req, res, next) => {
  try {
    const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true }).select("-password");
    res.json({ user });
  } catch (error) {
    next(error);
  }
});

router.get("/orders", async (_req, res, next) => {
  try {
    res.json({ orders: await Order.find().sort("-createdAt").populate("user", "name email") });
  } catch (error) {
    next(error);
  }
});

router.put("/orders/:id", async (req, res, next) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json({ order });
  } catch (error) {
    next(error);
  }
});

export default router;
