import { Heart, ShieldCheck, ShoppingBag, Star, Truck } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import { api, currency, fallbackProducts } from "../lib/api.js";

export default function ProductDetails() {
  const { slug } = useParams();
  const [product, setProduct] = useState(null);
  const { add } = useCart();
  const { toggle, isSaved } = useWishlist();

  useEffect(() => {
    api(`/products/${slug}`)
      .then(({ product }) => setProduct(product))
      .catch(() =>
        setProduct(
          fallbackProducts.find((item) => item.slug === slug) ||
            fallbackProducts[0],
        ),
      );
  }, [slug]);

  if (!product)
    return (
      <section className="section">
        <div className="skeleton h-96" />
      </section>
    );

  return (
    <section className="section grid gap-10 lg:grid-cols-[1fr_.9fr]">
      <div className="overflow-hidden rounded-lg bg-zinc-100 dark:bg-zinc-900">
        <img
          className="aspect-square w-full object-cover"
          src={product.images?.[0]?.url}
          alt={product.name}
        />
      </div>
      <div>
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <p className="inline-flex rounded-full bg-teal-100 px-3 py-1 text-sm font-bold text-teal-800 dark:bg-teal-400/15 dark:text-teal-100">
            {product.category}
          </p>
          {product.subCategory && (
            <p className="inline-flex rounded-full bg-zinc-200 px-3 py-1 text-sm font-bold text-zinc-700 dark:bg-zinc-700 dark:text-zinc-200">
              {product.subCategory}
            </p>
          )}
        </div>
        <h1 className="text-4xl font-black leading-tight">{product.name}</h1>
        <p className="mt-3 flex items-center gap-2 text-amber-600">
          <Star size={18} fill="currentColor" /> {product.rating} rating
        </p>
        <p className="mt-5 text-3xl font-black">
          {currency(product.price)}{" "}
          <span className="text-lg text-zinc-400 line-through">
            {currency(product.mrp)}
          </span>
        </p>
        <p className="mt-5 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
          {product.description}
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <button className="btn-primary" onClick={() => add(product)}>
            <ShoppingBag size={18} /> Add to cart
          </button>
          <button className="btn-soft" onClick={() => toggle(product)}>
            <Heart
              size={18}
              fill={isSaved(product._id) ? "currentColor" : "none"}
            />{" "}
            Wishlist
          </button>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <div className="glass rounded-lg p-4">
            <Truck className="mb-3 text-teal-600" />
            <p className="font-bold">Fast delivery</p>
            <p className="text-sm text-zinc-500">
              Free shipping above Rs 5,000
            </p>
          </div>
          <div className="glass rounded-lg p-4">
            <ShieldCheck className="mb-3 text-teal-600" />
            <p className="font-bold">Secure checkout</p>
            <p className="text-sm text-zinc-500">Razorpay-ready payment flow</p>
          </div>
        </div>
      </div>
    </section>
  );
}
