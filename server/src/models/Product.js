import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    slug: { type: String, required: true, unique: true, lowercase: true },
    description: { type: String, required: true },
    category: { type: String, required: true, index: true },
    subCategory: String,
    brand: String,
    price: { type: Number, required: true, min: 0 },
    mrp: { type: Number, min: 0 },
    rating: { type: Number, default: 4.5, min: 0, max: 5 },
    reviewsCount: { type: Number, default: 0 },
    stock: { type: Number, default: 0, min: 0 },
    images: [{ url: String, publicId: String }],
    tags: [String],
    featured: { type: Boolean, default: false },
    status: { type: String, enum: ["active", "draft"], default: "active" },
  },
  { timestamps: true },
);

productSchema.index({
  name: "text",
  description: "text",
  category: "text",
  tags: "text",
});

export default mongoose.model("Product", productSchema);
