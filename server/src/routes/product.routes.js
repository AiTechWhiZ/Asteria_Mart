import express from "express";
import Product from "../models/Product.js";
import { protect, adminOnly } from "../middleware/auth.js";
import { slugify } from "../utils/slugify.js";

const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const {
      search,
      category,
      subCategory,
      minPrice,
      maxPrice,
      rating,
      sort = "-createdAt",
    } = req.query;
    const query = { status: "active" };
    if (search) query.$text = { $search: search };
    if (category && category !== "All") query.category = category;
    if (subCategory && subCategory !== "All") query.subCategory = subCategory;
    if (rating) query.rating = { $gte: Number(rating) };
    if (minPrice || maxPrice)
      query.price = {
        $gte: Number(minPrice || 0),
        $lte: Number(maxPrice || 9999999),
      };

    const products = await Product.find(query).sort(sort).limit(80);
    const categories = await Product.distinct("category", { status: "active" });
    const subCategories = await Product.distinct("subCategory", {
      status: "active",
    });
    res.json({ products, categories, subCategories });
  } catch (error) {
    next(error);
  }
});

router.get("/featured", async (_req, res, next) => {
  try {
    const products = await Product.find({
      featured: true,
      status: "active",
    }).limit(8);
    res.json({ products });
  } catch (error) {
    next(error);
  }
});

router.get("/:slug", async (req, res, next) => {
  try {
    const product = await Product.findOne({ slug: req.params.slug });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ product });
  } catch (error) {
    next(error);
  }
});

router.post("/", protect, adminOnly, async (req, res, next) => {
  try {
    const product = await Product.create({
      ...req.body,
      slug: req.body.slug || slugify(req.body.name),
    });
    res.status(201).json({ product });
  } catch (error) {
    next(error);
  }
});

router.put("/:id", protect, adminOnly, async (req, res, next) => {
  try {
    const body = { ...req.body };
    if (body.name && !body.slug) body.slug = slugify(body.name);
    const product = await Product.findByIdAndUpdate(req.params.id, body, {
      new: true,
      runValidators: true,
    });
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json({ product });
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", protect, adminOnly, async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    next(error);
  }
});

export default router;
