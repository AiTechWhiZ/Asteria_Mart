import express from "express";
import Cart from "../models/Cart.js";
import Product from "../models/Product.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();
router.use(protect);

async function getCart(userId) {
  return Cart.findOneAndUpdate({ user: userId }, { $setOnInsert: { items: [] } }, { upsert: true, new: true }).populate(
    "items.product"
  );
}

router.get("/", async (req, res, next) => {
  try {
    res.json({ cart: await getCart(req.user._id) });
  } catch (error) {
    next(error);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const product = await Product.findById(req.body.productId);
    if (!product) return res.status(404).json({ message: "Product not found" });
    const cart = await getCart(req.user._id);
    const existing = cart.items.find((item) => item.product._id.equals(product._id));
    if (existing) existing.quantity += Number(req.body.quantity || 1);
    else cart.items.push({ product: product._id, quantity: Number(req.body.quantity || 1) });
    await cart.save();
    res.json({ cart: await getCart(req.user._id) });
  } catch (error) {
    next(error);
  }
});

router.put("/:productId", async (req, res, next) => {
  try {
    const cart = await getCart(req.user._id);
    const item = cart.items.find((entry) => entry.product._id.equals(req.params.productId));
    if (item) item.quantity = Math.max(1, Number(req.body.quantity || 1));
    await cart.save();
    res.json({ cart: await getCart(req.user._id) });
  } catch (error) {
    next(error);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const cart = await getCart(req.user._id);
    cart.items = cart.items.filter((entry) => !entry.product._id.equals(req.params.productId));
    await cart.save();
    res.json({ cart: await getCart(req.user._id) });
  } catch (error) {
    next(error);
  }
});

router.delete("/", async (req, res, next) => {
  try {
    await Cart.findOneAndUpdate({ user: req.user._id }, { items: [] });
    res.json({ cart: await getCart(req.user._id) });
  } catch (error) {
    next(error);
  }
});

export default router;
