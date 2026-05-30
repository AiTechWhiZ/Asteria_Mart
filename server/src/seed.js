import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import Product from "./models/Product.js";
import User from "./models/User.js";
import { slugify } from "./utils/slugify.js";

dotenv.config();

const image = (id) => ({
  url: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=900&q=80`,
  publicId: "",
});

const products = [
  [
    "Aura Wireless Headphones",
    "Electronics",
    12999,
    "Noise cancelling, plush memory foam, studio-grade warmth.",
    image("1505740420928-5e560c06d30e"),
    true,
  ],
  [
    "Luxe Ceramic Watch",
    "Fashion",
    24999,
    "Sapphire glass, ceramic bracelet, elegant health tracking.",
    image("1523170335258-f5ed11844a49"),
    true,
  ],
  [
    "Nova Smart Lamp",
    "Home & Living",
    5999,
    "Adaptive ambience with sunrise schedules and voice control.",
    image("1507473885765-e6ed057f782c"),
    false,
  ],
  [
    "Drift Travel Backpack",
    "Fashion",
    8999,
    "Weatherproof shell, laptop vault, premium leather accents.",
    image("1553062407-98eeb64c6a62"),
    true,
  ],
  [
    "Pulse Fitness Band",
    "Fashion",
    4999,
    "Sleep insights, workout coaching, week-long battery life.",
    image("1576243345690-4e4b79b63288"),
    false,
  ],
  [
    "Brew Pro Coffee Kit",
    "Home & Living",
    11999,
    "Precision kettle, ceramic dripper, insulated server bundle.",
    image("1495474472287-4d71bcdd2085"),
    true,
  ],
];

await connectDB();
await Product.deleteMany();
await User.deleteMany();
await User.create({
  name: "Admin",
  email: "admin@shop.test",
  password: "admin123",
  role: "admin",
});
await Product.insertMany(
  products.map(
    ([name, category, price, description, img, featured], index) => ({
      name,
      slug: slugify(name),
      category,
      price,
      mrp: Math.round(price * 1.25),
      description,
      images: [img],
      stock: 15 + index * 4,
      rating: 4.3 + (index % 4) * 0.15,
      reviewsCount: 18 + index * 9,
      featured,
      brand: "Aster",
    }),
  ),
);
console.log("Seeded products and admin user");
process.exit(0);
