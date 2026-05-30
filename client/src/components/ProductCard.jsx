import { Heart, ShoppingBag, Star, Zap } from "lucide-react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  color,
} from "framer-motion";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { currency } from "../lib/api.js";

export default function ProductCard({ product }) {
  const { dark } = useTheme();
  const { add } = useCart();
  const { toggle, isSaved } = useWishlist();
  const image = product.images?.[0]?.url;
  const saved = isSaved(product._id);

  const discountPct =
    product.mrp && product.price < product.mrp
      ? Math.round(((product.mrp - product.price) / product.mrp) * 100)
      : null;

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  const badgeColors = {
    dark: {
      Phones: "#22d3ee",
      Computers: "#818cf8",
      Audio: "#f472b6",
      Wearables: "#4ade80",
      Accessories: "#fb923c",
      "Home Appliances": "#facc15",
    },

    light: {
      Phones: "#0891B2",
      Computers: "#4F46E5",
      Audio: "#DB2777",
      Wearables: "#16A34A",
      Accessories: "#EA580C",
      "Home Appliances": "#CA8A04",
    },
  };

  const subBadgeColors = {
    dark: {
      /* Phones */
      Mobile: "#3B82F6", // Blue
      Tablet: "#8B5CF6", // Violet

      /* Computers */
      Laptop: "#F59E0B", // Amber
      Desktop: "#06B6D4", // Sky Cyan

      /* Audio */
      Earphones: "#EC4899", // Pink
      Earbuds: "#14B8A6", // Teal
      Headphone: "#A855F7", // Purple
      Speaker: "#EF4444", // Red

      /* Wearables */
      Smartwatch: "#EAB308", // Gold
      FitnessBand: "#84CC16", // Lime

      /* Accessories */
      Charger: "#F97316", // Orange
      PowerBank: "#F43F5E", // Rose
      Storage: "#6366F1", // Indigo
      Cable: "#22C55E", // Green

      /* Home Appliances */
      Refrigerator: "#0EA5E9", // Sky Blue
      WashingMachine: "#10B981", // Emerald
      Microwave: "#FB923C", // Orange
      TV: "#D946EF", // Magenta
    },

    light: {
      /* Phones */
      Mobile: "#2563EB",
      Tablet: "#7C3AED",

      /* Computers */
      Laptop: "#D97706",
      Desktop: "#0891B2",

      /* Audio */
      Earphones: "#DB2777",
      Earbuds: "#0F766E",
      Headphone: "#9333EA",
      Speaker: "#DC2626",

      /* Wearables */
      Smartwatch: "#CA8A04",
      FitnessBand: "#65A30D",

      /* Accessories */
      Charger: "#EA580C",
      PowerBank: "#E11D48",
      Storage: "#4F46E5",
      Cable: "#16A34A",

      /* Home Appliances */
      Refrigerator: "#0284C7",
      WashingMachine: "#059669",
      Microwave: "#C2410C",
      TV: "#C026D3",
    },
  };

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="product-card group relative flex flex-col overflow-hidden"
    >
      {/* ── Image area ─────────────────────────────────────────── */}
      <Link to={`/products/${product.slug}`} className="block">
        <div className="product-card__image-wrap relative aspect-[4/3] overflow-hidden">
          {/* Radial spotlight */}
          <div className="product-card__spotlight" aria-hidden="true" />

          <img
            src={image}
            alt={product.name}
            className="product-card__image h-full w-full object-cover"
          />

          {/* Badges */}
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5 z-10">
            <span
              className="product-card__badge"
              style={{
                background: dark
                  ? `${badgeColors.dark[product.category]}90`
                  : `${badgeColors.light[product.category]}90`,

                borderColor: dark
                  ? `${badgeColors.dark[product.category]}90`
                  : `${badgeColors.light[product.category]}90`,

                color: dark ? "#000000" : "#ffffff",
              }}
            >
              {product.category}
            </span>
            {product.subCategory && (
              <span
                className="product-card__badge product-card__badge--sub"
                style={{
                  background: dark
                    ? `${subBadgeColors.dark[product.subCategory]}90`
                    : `${subBadgeColors.light[product.subCategory]}90`,

                  borderColor: dark
                    ? `${subBadgeColors.dark[product.subCategory]}40`
                    : `${subBadgeColors.light[product.subCategory]}35`,

                  color: dark ? "#000000" : "#ffffff",
                }}
              >
                {product.subCategory}
              </span>
            )}
          </div>

          {/* Discount pill */}
          {discountPct && (
            <div className="product-card__discount absolute right-3 top-3 z-10">
              <Zap size={10} className="inline-block mb-0.5" />
              {discountPct}% off
            </div>
          )}
        </div>
      </Link>

      {/* ── Body ───────────────────────────────────────────────── */}
      <div className="product-card__body flex flex-1 flex-col p-5">
        {/* Rating + Wishlist row */}
        <div className="flex items-center justify-between mb-3">
          <div className="product-card__rating">
            <Star size={11} fill="currentColor" className="text-amber-400" />
            <span>{product.rating?.toFixed?.(1) ?? product.rating}</span>
          </div>

          <motion.button
            whileTap={{ scale: 0.88 }}
            className={`product-card__wish ${saved ? "product-card__wish--saved" : ""}`}
            onClick={() => toggle(product)}
            aria-label={saved ? "Remove from wishlist" : "Add to wishlist"}
          >
            <Heart
              size={15}
              strokeWidth={saved ? 0 : 1.8}
              fill={saved ? "currentColor" : "none"}
            />
          </motion.button>
        </div>

        {/* Name */}
        <Link
          to={`/products/${product.slug}`}
          className="product-card__name mb-1.5 line-clamp-1"
        >
          {product.name}
        </Link>

        {/* Description */}
        <p className="product-card__desc line-clamp-2 flex-1">
          {product.description}
        </p>

        {/* Divider */}
        <div className="product-card__divider my-4" aria-hidden="true" />

        {/* Pricing + CTA */}
        <div className="flex items-end justify-between gap-3">
          <div className="leading-none">
            <p className="product-card__price">{currency(product.price)}</p>
            {product.mrp && product.mrp > product.price && (
              <p className="product-card__mrp mt-1">{currency(product.mrp)}</p>
            )}
          </div>

          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="product-card__cta"
            onClick={() => add(product)}
          >
            <ShoppingBag size={15} className="product-card__cta-icon" />
            <span>Add to cart</span>
          </motion.button>
        </div>
      </div>

      {/* ── Ambient glow layer (hover only) ────────────────────── */}
      <div className="product-card__glow" aria-hidden="true" />

      <style>{`
        .product-card {
          --card-radius: 20px;
          --ease-expo: cubic-bezier(0.23, 1, 0.32, 1);

          border-radius: var(--card-radius);
          background: #ffffff;
          border: 1px solid rgba(0, 0, 0, 0.07);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.04),
            0 4px 16px rgba(0,0,0,0.06),
            0 1px 0 rgba(255,255,255,0.9) inset;
          transition:
            transform 0.4s var(--ease-expo),
            box-shadow 0.4s var(--ease-expo);
          will-change: transform;
        }

        .dark .product-card {
          background: #111318;
          border-color: rgba(255, 255, 255, 0.06);
          box-shadow:
            0 1px 2px rgba(0,0,0,0.4),
            0 8px 32px rgba(0,0,0,0.5),
            0 1px 0 rgba(255,255,255,0.04) inset;
        }

        .product-card:hover {
          box-shadow:
            0 2px 4px rgba(0,0,0,0.06),
            0 12px 40px rgba(0,0,0,0.12),
            0 0 0 1px rgba(99, 102, 241, 0.18),
            0 1px 0 rgba(255,255,255,0.9) inset;
        }

        .dark .product-card:hover {
          box-shadow:
            0 2px 8px rgba(0,0,0,0.6),
            0 16px 56px rgba(0,0,0,0.7),
            0 0 0 1px rgba(139, 92, 246, 0.25),
            0 1px 0 rgba(255,255,255,0.05) inset;
        }

        /* ── Image ─────────────── */
        .product-card__image-wrap {
          border-radius: var(--card-radius) var(--card-radius) 0 0;
          background:
            radial-gradient(ellipse 70% 70% at 50% 60%, rgba(99,102,241,0.06) 0%, transparent 70%),
            #f6f6f8;
        }

        .dark .product-card__image-wrap {
          background:
            radial-gradient(ellipse 70% 70% at 50% 60%, rgba(139,92,246,0.1) 0%, transparent 70%),
            #18191f;
        }

        .product-card__image {
          transition: transform 0.7s var(--ease-expo), filter 0.4s ease;
          transform-origin: center 60%;
        }

        .product-card:hover .product-card__image {
          transform: scale(1.07) translateY(-2px);
        }

        .product-card__spotlight {
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, transparent 60%);
          pointer-events: none;
          z-index: 1;
        }

        .dark .product-card__spotlight {
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.06) 0%, transparent 60%);
        }

        /* ── Badges ──────────────── */
        .product-card__badge {
          display: inline-block;
          padding: 4px 10px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border: 1px solid;
        }

        .product-card__badge--sub {
          background: rgba(255,255,255,0.48);
        }

        .dark .product-card__badge--sub {
          background: rgba(17, 19, 24, 0.5);
        }

        .product-card__discount {
          display: inline-flex;
          align-items: center;
          gap: 3px;
          padding: 3px 9px;
          border-radius: 100px;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.02em;
          background: rgba(16, 185, 129, 0.15);
          color: #059669;
          border: 0.5px solid rgba(16, 185, 129, 0.3);
          backdrop-filter: blur(8px);
        }

        .dark .product-card__discount {
          background: rgba(16, 185, 129, 0.12);
          color: #34d399;
          border-color: rgba(52, 211, 153, 0.2);
        }

        /* ── Body ──────────────── */
        .product-card__body {
          position: relative;
          z-index: 1;
        }

        /* ── Rating ──────────────── */
        .product-card__rating {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 3px 8px 3px 6px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          color: #92400e;
          background: rgba(251, 191, 36, 0.12);
          border: 0.5px solid rgba(251, 191, 36, 0.25);
          letter-spacing: 0.01em;
        }

        .dark .product-card__rating {
          color: #fbbf24;
          background: rgba(251, 191, 36, 0.08);
          border-color: rgba(251, 191, 36, 0.15);
        }

        /* ── Wishlist ─────────────── */
        .product-card__wish {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #a3a3a3;
          background: rgba(0,0,0,0.04);
          border: 0.5px solid rgba(0,0,0,0.06);
          transition: all 0.25s ease;
        }

        .dark .product-card__wish {
          color: rgba(255,255,255,0.35);
          background: rgba(255,255,255,0.05);
          border-color: rgba(255,255,255,0.06);
        }

        .product-card__wish:hover {
          background: rgba(239, 68, 68, 0.08);
          border-color: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          transform: scale(1.1);
        }

        .product-card__wish--saved {
          color: #ef4444;
          background: rgba(239, 68, 68, 0.1);
          border-color: rgba(239, 68, 68, 0.25);
          box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.08);
        }

        .dark .product-card__wish--saved {
          color: #f87171;
          background: rgba(248, 113, 113, 0.12);
          border-color: rgba(248, 113, 113, 0.2);
          box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.06);
        }

        /* ── Name ────────────────── */
        .product-card__name {
          display: block;
          font-size: 16px;
          font-weight: 800;
          letter-spacing: -0.02em;
          color: #0d0d14;
          line-height: 1.2;
          transition: color 0.2s;
        }

        .dark .product-card__name {
          color: rgba(255,255,255,0.95);
        }

        .product-card__name:hover {
          color: #4f46e5;
        }

        .dark .product-card__name:hover {
          color: #818cf8;
        }

        /* ── Description ─────────── */
        .product-card__desc {
          font-size: 13px;
          line-height: 1.65;
          color: #737380;
          letter-spacing: 0.005em;
        }

        .dark .product-card__desc {
          color: rgba(255,255,255,0.4);
        }

        /* ── Divider ─────────────── */
        .product-card__divider {
          height: 1px;
          background: linear-gradient(
            to right,
            transparent,
            rgba(0,0,0,0.06) 20%,
            rgba(0,0,0,0.06) 80%,
            transparent
          );
        }

        .dark .product-card__divider {
          background: linear-gradient(
            to right,
            transparent,
            rgba(255,255,255,0.06) 20%,
            rgba(255,255,255,0.06) 80%,
            transparent
          );
        }

        /* ── Price ───────────────── */
        .product-card__price {
          font-size: 22px;
          font-weight: 900;
          letter-spacing: -0.03em;
          color: #0d0d14;
          line-height: 1;
        }

        .dark .product-card__price {
          color: rgba(255,255,255,0.95);
        }

        .product-card__mrp {
          font-size: 12px;
          color: #a3a3a3;
          text-decoration: line-through;
          letter-spacing: -0.01em;
        }

        .dark .product-card__mrp {
          color: rgba(255,255,255,0.25);
        }

        /* ── CTA ─────────────────── */
        .product-card__cta {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 10px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.01em;
          color: #ffffff;

          /* Light Theme - Purple */
          background: linear-gradient(135deg, #7c3aed 0%, #9333ea 100%);

          box-shadow:
            0 1px 2px rgba(124, 58, 237, 0.30),
            0 4px 12px rgba(124, 58, 237, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            background 0.3s ease;

          white-space: nowrap;
        }

        .product-card__cta:hover {
          background: linear-gradient(135deg, #6d28d9 0%, #7e22ce 100%);

          box-shadow:
            0 1px 2px rgba(124, 58, 237, 0.40),
            0 8px 24px rgba(124, 58, 237, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.20);
        }

        /* ── Dark Theme - Cyan ─────────────────── */
        .dark .product-card__cta {
          background: linear-gradient(135deg, #0891b2 0%, #22d3ee 100%);

          box-shadow:
            0 1px 2px rgba(34, 211, 238, 0.30),
            0 4px 16px rgba(34, 211, 238, 0.25),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
        }

        .dark .product-card__cta:hover {
          background: linear-gradient(135deg, #0ea5e9 0%, #67e8f9 100%);

          box-shadow:
            0 1px 2px rgba(34, 211, 238, 0.45),
            0 10px 28px rgba(34, 211, 238, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.15);
        }

        /* ── Icon Animation ─────────────────── */
        .product-card__cta-icon {
          transition: transform 0.3s var(--ease-expo);
        }

        .product-card__cta:hover .product-card__cta-icon {
          transform: translateY(-1px) scale(1.1);
        }

        /* ── Glow ────────────────── */
        .product-card__glow {
          position: absolute;
          inset: -1px;
          border-radius: calc(var(--card-radius) + 1px);
          background: transparent;
          pointer-events: none;
          transition: box-shadow 0.4s ease;
        }

        .product-card:hover .product-card__glow {
          box-shadow: 0 0 0 1px rgba(99, 102, 241, 0.2);
        }

        .dark .product-card:hover .product-card__glow {
          box-shadow: 0 0 0 1px rgba(139, 92, 246, 0.3);
        }
      `}</style>
    </motion.article>
  );
}
