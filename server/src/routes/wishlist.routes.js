import express from "express";
import Wishlist from "../models/Wishlist.js";
import { protect } from "../middleware/auth.js";

const router = express.Router();
router.use(protect);

async function getWishlist(userId) {
  return Wishlist.findOneAndUpdate(
    { user: userId },
    { $setOnInsert: { products: [] } },
    { upsert: true, new: true }
  ).populate("products");
}

router.get("/", async (req, res, next) => {
  try {
    res.json({ wishlist: await getWishlist(req.user._id) });
  } catch (error) {
    next(error);
  }
});

router.post("/:productId", async (req, res, next) => {
  try {
    const wishlist = await getWishlist(req.user._id);
    const exists = wishlist.products.some((product) => product._id.equals(req.params.productId));
    if (!exists) wishlist.products.push(req.params.productId);
    await wishlist.save();
    res.json({ wishlist: await getWishlist(req.user._id) });
  } catch (error) {
    next(error);
  }
});

router.delete("/:productId", async (req, res, next) => {
  try {
    const wishlist = await getWishlist(req.user._id);
    wishlist.products = wishlist.products.filter((product) => !product._id.equals(req.params.productId));
    await wishlist.save();
    res.json({ wishlist: await getWishlist(req.user._id) });
  } catch (error) {
    next(error);
  }
});

export default router;
