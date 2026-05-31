import { useEffect, useState, useRef } from "react";
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Truck,
  Zap,
  Star,
  ChevronRight,
  Mail,
  ArrowUpRight,
  Cpu,
  Headphones,
  Smartphone,
  Monitor,
  Gamepad2,
  Home as HomeIcon,
  Package,
  Watch,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import { useTheme } from "../context/ThemeContext.jsx";
import { api } from "../lib/api.js";
import Hero from "../assets/images/Hero.png";

/* ─── Data ──────────────────────────────────────────────────── */
const categories = [
  {
    name: "Phones",
    icon: Smartphone,
    accent: "#22d3ee",
    lightAccent: "#0891B2",
    glow: "rgba(34,211,238,0.2)",
    bg: "from-cyan-950/40 to-slate-900/60",
    lightBg: "from-cyan-300/20 to-cyan-100/60",
  },
  {
    name: "Computers",
    icon: Monitor,
    accent: "#818cf8",
    lightAccent: "#4F46E5",
    glow: "rgba(129,140,248,0.2)",
    bg: "from-indigo-950/40 to-slate-900/60",
    lightBg: "from-indigo-300/20 to-indigo-100/60",
  },
  {
    name: "Audio",
    icon: Headphones,
    accent: "#f472b6",
    lightAccent: "#DB2777",
    glow: "rgba(244,114,182,0.2)",
    bg: "from-pink-950/40 to-slate-900/60",
    lightBg: "from-pink-300/20 to-pink-100/60",
  },
  {
    name: "Wearables",
    icon: Watch,
    accent: "#4ade80",
    lightAccent: "#16A34A",
    glow: "rgba(74,222,128,0.2)",
    bg: "from-emerald-950/40 to-slate-900/60",
    lightBg: "from-emerald-300/20 to-emerald-100/60",
  },
  {
    name: "Accessories",
    icon: Package,
    accent: "#fb923c",
    lightAccent: "#EA580C",
    glow: "rgba(251,146,60,0.2)",
    bg: "from-orange-950/40 to-slate-900/60",
    lightBg: "from-orange-300/20 to-orange-100/60",
  },
  {
    name: "Home Appliances",
    icon: HomeIcon,
    accent: "#facc15",
    lightAccent: "#CA8A04",
    glow: "rgba(250,204,21,0.2)",
    bg: "from-yellow-950/40 to-slate-900/60",
    lightBg: "from-yellow-300/20 to-yellow-100/60",
  },
];

const trustPoints = [
  {
    icon: ShieldCheck,
    label: "2-Year Warranty",
    desc: "Every product backed by our comprehensive warranty program.",
  },
  {
    icon: Truck,
    label: "Free Shipping",
    desc: "Complimentary delivery on all orders above ₹999.",
  },
  {
    icon: Zap,
    label: "Fast Dispatch",
    desc: "Same-day dispatch for orders placed before 2 PM.",
  },
  {
    icon: Sparkles,
    label: "Premium Curation",
    desc: "Only the finest electronics, hand-picked by our experts.",
  },
];

const offerTags = ["SAVE30", "TECH2025", "NEWUSER", "FLASHDEAL"];

/* ─── Easing Curves ──────────────────────────────────────────── */
const EASE_OUT_EXPO = [0.16, 1, 0.3, 1];
const EASE_IN_OUT = [0.4, 0, 0.2, 1];

/* ─── Sub-components ─────────────────────────────────────────── */

/** Ambient blob */
function Blob({ className, opacity = "opacity-20" }) {
  return (
    <div
      className={`pointer-events-none absolute rounded-full blur-[120px] ${opacity} ${className}`}
      aria-hidden
    />
  );
}

/** Noise grain overlay for premium texture */
function GrainOverlay({ opacity = 0.025 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 z-0"
      style={{
        opacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
    />
  );
}

/** Animated ticker */
function Ticker() {
  const items = [
    "NEW ARRIVALS",
    "FREE SHIPPING ON ₹999+",
    "TECH SALE — UP TO 40% OFF",
    "EXCLUSIVE MEMBER DEALS",
    "SAME-DAY DISPATCH",
    "PREMIUM PICKS",
  ];
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden border-b border-white/[0.05] bg-black/20 py-2.5 backdrop-blur-sm">
      <motion.div
        className="flex gap-12 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            className="text-[10px] font-bold uppercase tracking-[.35em] text-cyan-400/70 dark:text-cyan-400/60"
          >
            {t} <span className="mx-5 text-white/15">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}

/** Section label */
function SectionLabel({ color = "text-cyan-400", children }) {
  return (
    <p
      className={`mb-3 flex items-center gap-3 text-[15px] font-bold uppercase tracking-[.35em] ${color}`}
    >
      <span className="inline-block h-px w-10 bg-current opacity-60" />
      {children}
      <span className="inline-block h-px w-10 bg-current opacity-60" />
    </p>
  );
}

/** Magnetic hover button wrapper */
function MagneticButton({ children, className, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 300, damping: 25 });
  const sy = useSpring(y, { stiffness: 300, damping: 25 });

  const handleMouseMove = (e) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * 0.25);
    y.set((e.clientY - cy) * 0.25);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

/* ─── Main Component ─────────────────────────────────────────── */
export default function Home() {
  const { dark } = useTheme();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const heroRef = useRef(null);

  /* ── Theme tokens ── */
  const t = {
    root: dark ? "bg-[#04060e] text-white" : "bg-[#F0F2FF] text-zinc-950",
    selection: dark
      ? "selection:bg-cyan-500/25 selection:text-white"
      : "selection:bg-violet-400/30 selection:text-zinc-950",
    heroSection: dark
      ? "bg-[radial-gradient(ellipse_130%_90%_at_55%_35%,#071627_0%,#050810_60%,#04060e_100%)]"
      : "bg-[radial-gradient(ellipse_130%_90%_at_55%_35%,rgba(237,233,254,0.98)_0%,rgba(219,234,254,0.80)_45%,rgba(240,242,255,0.96)_100%)]",
    heroFrame: dark
      ? "border-white/[0.08] bg-slate-950/60 shadow-[0_32px_80px_rgba(0,0,0,0.7)]"
      : "border-violet-200/40 bg-gradient-to-br from-white/95 via-purple-50/90 to-blue-50/85 shadow-[0_32px_80px_rgba(109,40,217,0.14)] backdrop-blur-2xl",
    card: dark
      ? "border-white/[0.06] bg-white/[0.025] hover:border-white/[0.12] hover:bg-white/[0.05]"
      : "border-violet-200/30 bg-white/80 hover:border-violet-300/50 hover:bg-white/95 shadow-[0_4px_24px_rgba(109,40,217,0.06)] hover:shadow-[0_8px_40px_rgba(109,40,217,0.12)]",
    sectionDivider: dark
      ? "from-transparent via-white/[0.04] to-transparent"
      : "from-transparent via-violet-200/30 to-transparent",
    newsletterCard: dark
      ? "border-white/[0.06] bg-gradient-to-br from-slate-900/80 to-slate-950/90 backdrop-blur-xl"
      : "border-violet-200/30 bg-white/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(109,40,217,0.10)]",
    inputField: dark
      ? "border-white/[0.08] bg-slate-900/60 text-white placeholder-zinc-600 focus:border-cyan-400/40 focus:bg-slate-900/80"
      : "border-violet-200/50 bg-white/90 text-zinc-950 placeholder-zinc-400 focus:border-violet-400/60 focus:shadow-[0_0_0_3px_rgba(139,92,246,0.12)]",
    trustCard: dark
      ? "border-white/[0.06] bg-white/[0.025] hover:border-emerald-500/25 hover:bg-emerald-500/[0.03]"
      : "border-violet-100/60 bg-white/70 hover:border-emerald-300/50 hover:bg-white/90 shadow-[0_4px_20px_rgba(0,0,0,0.04)]",
    accentPrimary: dark ? "text-cyan-400" : "text-violet-600",
    btnPrimary: dark
      ? "bg-gradient-to-r from-cyan-500 to-blue-600 shadow-[0_8px_32px_rgba(6,182,212,0.30)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.45)]"
      : "bg-gradient-to-r from-violet-600 to-indigo-600 shadow-[0_8px_32px_rgba(109,40,217,0.30)] hover:shadow-[0_12px_40px_rgba(109,40,217,0.45)]",
    btnSecondary: dark
      ? "border-white/[0.10] bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/20"
      : "border-violet-200/60 bg-white/80 text-zinc-900 hover:bg-white hover:border-violet-300",
    heroGradText1: dark
      ? "linear-gradient(110deg, #115E59 0%, #0D9488 55%, #2DD4BF 100%)"
      : "linear-gradient(110deg,#7C3AED 0%,#6D28D9 50%,#5B21B6 100%)",
    heroGradText2: dark
      ? "linear-gradient(110deg, #0891B2 0%, #22D3EE 50%, #7DD3FC 100%)"
      : "linear-gradient(110deg,#9333EA 0%,#EC4899 100%)",
  };

  /* ── Parallax ── */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.9]);

  useEffect(() => {
    let mounted = true;
    api("/products")
      .then(({ products }) => {
        if (mounted) setProducts(products || []);
      })
      .catch((e) => console.error("Failed to load products", e))
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => {
      mounted = false;
    };
  }, []);

  const featured = products
    .sort((a, b) => (b.rating || 0) - (a.rating || 0))
    .slice(0, 3);
  const trending = products.slice(3, 6);

  /* ── Animation presets ── */
  const fadeUp = (i = 0, y = 32) => ({
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-60px" },
    transition: { duration: 0.7, delay: i * 0.09, ease: EASE_OUT_EXPO },
  });

  const fadeIn = (i = 0) => ({
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-40px" },
    transition: { duration: 0.6, delay: i * 0.08, ease: EASE_IN_OUT },
  });

  /* ── Section divider ── */
  const Divider = () => (
    <div
      className={`mx-auto h-px max-w-5xl bg-gradient-to-r ${t.sectionDivider}`}
    />
  );

  return (
    <div
      className={`min-h-screen overflow-x-clip ${t.root} ${t.selection} font-[system-ui] antialiased`}
    >
      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className={`relative mb-10 min-h-[94vh] overflow-hidden ${t.heroSection}`}
      >
        {/* Grain texture */}
        <GrainOverlay opacity={dark ? 0.03 : 0.02} />

        {/* Background blobs — layered for depth */}
        <Blob
          opacity={dark ? "opacity-[0.18]" : "opacity-[0.45]"}
          className={`left-[-12%] top-[-8%] h-[640px] w-[640px] ${dark ? "bg-cyan-500" : "bg-violet-500"}`}
        />
        <Blob
          opacity={dark ? "opacity-[0.12]" : "opacity-[0.28]"}
          className={`right-[2%] bottom-[5%] h-[480px] w-[480px] ${dark ? "bg-blue-500" : "bg-fuchsia-400"}`}
        />
        <Blob
          opacity={dark ? "opacity-[0.10]" : "opacity-[0.22]"}
          className={`left-[38%] top-[15%] h-[360px] w-[360px] ${dark ? "bg-indigo-600" : "bg-indigo-500"}`}
        />
        {/* Subtle radial vignette */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: dark
              ? "radial-gradient(ellipse 80% 60% at 50% 100%, rgba(0,0,0,0.5) 0%, transparent 70%)"
              : "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(240,242,255,0.8) 0%, transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: dark ? 0.025 : 0.04,
            backgroundImage:
              "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        <motion.div
          style={{
            y: heroY,
            opacity: heroOpacity,
            willChange: "transform, opacity",
          }}
          className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 mb-10 lg:grid-cols-[1.15fr_0.85fr] lg:px-12 lg:py-20"
        >
          {/* ── Left copy ── */}
          <div className="flex flex-col">
            {/* Live badge */}
            <motion.div {...fadeUp(0)}>
              <span
                className={`mb-6 inline-flex items-center gap-2.5 rounded-full px-5 py-2.5 text-xs font-bold backdrop-blur-md transition-all duration-500
                ${
                  dark
                    ? "border border-cyan-400/20 bg-cyan-400/[0.07] text-cyan-300 shadow-[0_0_24px_rgba(34,211,238,0.08)]"
                    : "border border-violet-300/50 bg-violet-50/90 text-violet-700 shadow-[0_4px_20px_rgba(139,92,246,0.12)]"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full ${dark ? "bg-cyan-400 opacity-60" : "bg-violet-500 opacity-50"}`}
                  />
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${dark ? "bg-cyan-400" : "bg-violet-500"}`}
                  />
                </span>
                2025 Collection — Just dropped
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(1)}
              className="text-[clamp(3.2rem,7.5vw,5.8rem)] font-black leading-[1.0] tracking-[-0.02em]"
            >
              <span
                className={`block ${dark ? "text-white" : "text-zinc-900"}`}
              >
                Next-gen
              </span>
              <span className="block mt-1">
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: t.heroGradText1 }}
                >
                  Tech.
                </span>{" "}
                <span
                  className="bg-clip-text text-transparent"
                  style={{ backgroundImage: t.heroGradText2 }}
                >
                  Refined.
                </span>
              </span>
            </motion.h1>

            {/* Body */}
            <motion.p
              {...fadeUp(2)}
              className={`mt-7 max-w-[480px] text-[15px] leading-[1.75] ${dark ? "text-zinc-200" : "text-zinc-500"}`}
            >
              Astaria brings you the world's finest electronics — curated for
              performance, designed for life. From flagship phones to pro-grade
              audio, discover tomorrow's essentials today.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(3)} className="mt-9 flex flex-wrap gap-3">
              <MagneticButton>
                <Link
                  to="/products"
                  className={`group inline-flex items-center gap-2.5 rounded-full px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.98] ${t.btnPrimary}`}
                >
                  Shop Now
                  <ArrowRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link
                  to="/signup"
                  className={`inline-flex items-center gap-2 rounded-full border px-8 py-4 text-sm font-bold transition-all duration-300 backdrop-blur hover:scale-[1.03] active:scale-[0.98] ${t.btnSecondary}`}
                >
                  Join Free
                </Link>
              </MagneticButton>
            </motion.div>

            {/* Stats */}
            <motion.div {...fadeUp(4)} className="mt-12 flex flex-wrap gap-10">
              {[
                ["50K+", "Happy Customers"],
                ["200+", "Premium Brands"],
                ["4.9★", "Average Rating"],
              ].map(([val, lab]) => (
                <div key={lab} className="flex flex-col gap-0.5">
                  <p
                    className={`text-[1.65rem] font-black leading-none tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}
                  >
                    {val}
                  </p>
                  <p
                    className={`text-[11px] font-medium ${dark ? "text-zinc-500" : "text-zinc-400"}`}
                  >
                    {lab}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right — hero image ── */}
          <motion.div
            {...fadeUp(2, 20)}
            className="relative flex justify-center"
          >
            {/* Ambient glow behind frame */}
            <div
              className={`absolute inset-4 rounded-3xl blur-3xl ${dark ? "bg-gradient-to-br from-cyan-500/20 via-blue-600/15 to-violet-600/20" : "bg-gradient-to-br from-violet-400/25 via-fuchsia-300/20 to-blue-400/20"}`}
            />

            <div className="relative w-full max-w-[460px] overflow-x-clip sm:overflow-visible">
              {/* Outer frame */}
              <div
                className={`relative overflow-hidden rounded-[2rem] border p-1.5 ${t.heroFrame} transition-all duration-700`}
              >
                <img
                  src={Hero}
                  alt="Hero product"
                  className="aspect-[4/5] w-full rounded-[1.6rem] object-cover"
                />
              </div>

              {/* Floating badge — right */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0, y: [0, -9, 0] }}
                transition={{
                  opacity: { delay: 1, duration: 0.5 },
                  x: { delay: 1, duration: 0.5 },
                  y: {
                    delay: 1.2,
                    duration: 3.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`absolute right-3 top-44 rounded-2xl border px-4 py-3 backdrop-blur-xl shadow-2xl ${dark ? "border-white/[0.08] bg-black/65" : "border-white/70 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"}`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${dark ? "bg-cyan-400/10" : "bg-violet-300/60"}`}
                  >
                    <Cpu
                      size={16}
                      className={dark ? "text-cyan-400" : "text-violet-600"}
                    />
                  </div>
                  <div>
                    <p
                      className={`text-[9px] font-medium ${dark ? "text-zinc-500" : "text-zinc-400"}`}
                    >
                      Latest chips
                    </p>
                    <p
                      className={`text-[13px] font-black ${dark ? "text-white" : "text-zinc-900"}`}
                    >
                      Pro Performance
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Floating badge — left */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0, y: [0, 9, 0] }}
                transition={{
                  opacity: { delay: 1.2, duration: 0.5 },
                  x: { delay: 1.2, duration: 0.5 },
                  y: {
                    delay: 1.4,
                    duration: 4.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className={`absolute left-3 bottom-10 rounded-2xl border px-4 py-3 backdrop-blur-xl shadow-2xl ${dark ? "border-white/[0.08] bg-black/65" : "border-white/70 bg-white/90 shadow-[0_8px_32px_rgba(0,0,0,0.10)]"}`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className={`flex h-8 w-8 items-center justify-center rounded-lg ${dark ? "bg-cyan-400/10" : "bg-yellow-200/40"}`}
                  >
                    <Star
                      size={14}
                      fill="#facc15"
                      className="text-yellow-400"
                    />
                  </div>
                  <p
                    className={`text-[13px] font-black ${dark ? "text-white" : "text-zinc-900"}`}
                  >
                    Editor's Choice
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom fade */}
        <div
          className={`pointer-events-none absolute bottom-0 left-0 right-0 h-32 ${dark ? "bg-gradient-to-t from-[#04060e] to-transparent" : "bg-gradient-to-t from-[#F0F2FF] to-transparent"}`}
        />
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════
          CATEGORIES
      ══════════════════════════════════════════════════ */}
      <section className="relative mx-auto max-w-7xl px-5 py-5 sm:px-9 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionLabel color={dark ? "text-cyan-400" : "text-violet-500"}>
              Browse
            </SectionLabel>
            <motion.h2
              {...fadeUp(0)}
              className={`text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}
            >
              Shop by Category
            </motion.h2>
          </div>
          <motion.div {...fadeIn(1)}>
            <Link
              to="/products"
              className={`hidden items-center gap-1 text-sm font-bold transition-all sm:flex ${dark ? "text-cyan-400 hover:text-cyan-300" : "text-violet-600 hover:text-violet-500"}`}
            >
              View all <ChevronRight size={13} />
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <motion.div key={cat.name} {...fadeUp(i, 24)}>
                <Link
                  to={`/products?category=${cat.name}`}
                  className={`group relative w-full flex items-center sm:flex-col sm:items-start sm:justify-between overflow-hidden rounded-2xl border p-5 transition-all duration-500 h-[90px] sm:h-[140px] lg:h-[160px]
                  ${
                    dark
                      ? `border-white/[0.2] bg-gradient-to-b ${cat.bg} hover:border-white/[0.14]`
                      : `border-black/[0.2] bg-gradient-to-b ${cat.lightBg} hover:border-zinc-300`
                  }`}
                  style={{
                    boxShadow: dark ? "none" : "0 4px 20px rgba(0,0,0,0.04)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    style={{
                      background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${cat.glow} 0%, transparent 70%)`,
                    }}
                  />

                  {/* Mobile: Icon Left, Text Right */}
                  <div className="relative flex items-center gap-4 w-full sm:flex-col sm:items-start sm:gap-0">
                    <div
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                      style={{
                        background: `${dark ? cat.accent : cat.lightAccent}15`,
                        color: dark ? cat.accent : cat.lightAccent,
                      }}
                    >
                      <Icon size={21} />
                    </div>

                    <div className="sm:mt-6 lg:mt-10">
                      <p
                        className={`font-black text-[14px] ${
                          dark ? "text-white" : "text-zinc-900"
                        }`}
                      >
                        {cat.name}
                      </p>

                      <p
                        className="mt-1 text-[11px] font-medium transition-colors duration-300 group-hover:opacity-80"
                        style={{ color: dark ? cat.accent : cat.lightAccent }}
                      >
                        Explore →
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════
          FEATURED PRODUCTS
      ══════════════════════════════════════════════════ */}
      <section className="relative mx-auto max-w-7xl px-5 py-6 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionLabel color={dark ? "text-violet-400" : "text-violet-500"}>
              Handpicked
            </SectionLabel>
            <motion.h2
              {...fadeUp(0)}
              className={`text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}
            >
              Editor's Picks
            </motion.h2>
          </div>
          <motion.div {...fadeIn(1)}>
            <Link
              to="/products"
              className={`hidden items-center gap-1 text-sm font-bold transition-colors sm:flex ${dark ? "text-violet-400 hover:text-violet-300" : "text-violet-600 hover:text-violet-500"}`}
            >
              View all <ChevronRight size={13} />
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`h-80 animate-pulse rounded-2xl ${dark ? "bg-white/[0.03]" : "bg-zinc-100/80"}`}
              />
            ))
          ) : featured.length ? (
            featured.map((p, i) => (
              <motion.div key={p._id} {...fadeUp(i)}>
                <ProductCard product={p} />
              </motion.div>
            ))
          ) : (
            <div
              className={`col-span-full rounded-2xl border border-dashed p-10 text-center ${dark ? "border-white/10 text-zinc-500" : "border-zinc-200 text-zinc-400"}`}
            >
              Add products from the admin panel to populate this section.
            </div>
          )}
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════
          OFFERS BANNER
      ══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-12">
        <motion.div
          {...fadeUp(0)}
          className="relative overflow-hidden rounded-3xl"
        >
          {/* Multi-layer gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-700 to-violet-800" />
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/[0.04] to-white/[0.07]" />
          <GrainOverlay opacity={0.04} />

          {/* Glow orbs */}
          <Blob className="right-[-5%] top-[-30%] h-[380px] w-[380px] bg-cyan-400 opacity-[0.12]" />
          <Blob className="left-[30%] bottom-[-20%] h-[280px] w-[280px] bg-violet-500 opacity-[0.15]" />

          <div className="relative flex flex-col items-start justify-between gap-8 px-8 py-14 sm:flex-row sm:items-center lg:px-16">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[.35em] text-white/60">
                Limited Time
              </p>
              <h3 className="mt-2 text-[clamp(1.7rem,4vw,2.8rem)] font-black leading-[1.1] tracking-tight text-white">
                Flash Sale — Up to
                <br />
                <span className="text-yellow-300">40% Off</span> Today
              </h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {offerTags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/15 bg-white/[0.08] px-3.5 py-1.5 text-[11px] font-bold text-white/90 backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <MagneticButton>
              <Link
                to="/products"
                className="group inline-flex items-center gap-2.5 rounded-full bg-white px-9 py-4 text-sm font-black text-blue-700 shadow-2xl shadow-black/20 transition-all duration-300 hover:scale-105 hover:shadow-white/20 active:scale-[0.98]"
              >
                Grab the deals
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════
          TRENDING
      ══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-12">
        <div className="flex items-end justify-between gap-4">
          <div>
            <SectionLabel color={dark ? "text-pink-400" : "text-pink-500"}>
              Hot right now
            </SectionLabel>
            <motion.h2
              {...fadeUp(0)}
              className={`text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}
            >
              Trending
            </motion.h2>
          </div>
          <motion.div {...fadeIn(1)}>
            <Link
              to="/products"
              className={`hidden items-center gap-1 text-sm font-bold transition-colors sm:flex ${dark ? "text-pink-400 hover:text-pink-300" : "text-pink-500 hover:text-pink-400"}`}
            >
              See more <ChevronRight size={13} />
            </Link>
          </motion.div>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {loading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className={`h-80 animate-pulse rounded-2xl ${dark ? "bg-white/[0.03]" : "bg-zinc-100/80"}`}
              />
            ))
          ) : (trending.length ? trending : featured).length ? (
            (trending.length ? trending : featured).map((p, i) => (
              <motion.div key={`t-${p._id}`} {...fadeUp(i)}>
                <ProductCard product={p} />
              </motion.div>
            ))
          ) : (
            <div
              className={`col-span-full rounded-2xl border border-dashed p-10 text-center ${dark ? "border-white/10 text-zinc-500" : "border-zinc-200 text-zinc-400"}`}
            >
              No trending products yet.
            </div>
          )}
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════
          TRUST
      ══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-12">
        <div className="text-center">
          <SectionLabel color={dark ? "text-emerald-400" : "text-emerald-600"}>
            <span className="mx-auto">Why Astaria</span>
          </SectionLabel>
          <motion.h2
            {...fadeUp(0)}
            className={`text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}
          >
            Built on Trust
          </motion.h2>
          <motion.p
            {...fadeUp(1)}
            className={`mx-auto mt-3 max-w-sm text-sm leading-7 ${dark ? "text-zinc-500" : "text-zinc-400"}`}
          >
            Every purchase is backed by our promise of quality, speed, and
            security.
          </motion.p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {trustPoints.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              {...fadeUp(i)}
              className={`group relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 ${t.trustCard}`}
            >
              {/* Hover glow */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background: dark
                    ? "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(52,211,153,0.05) 0%, transparent 70%)"
                    : "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(52,211,153,0.06) 0%, transparent 70%)",
                }}
              />

              <div
                className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110
                ${dark ? "bg-emerald-500/[0.08] text-emerald-400" : "bg-emerald-50 text-emerald-600"}`}
              >
                <Icon size={21} />
              </div>
              <p
                className={`relative font-black text-[15px] ${dark ? "text-white" : "text-zinc-900"}`}
              >
                {label}
              </p>
              <p
                className={`relative mt-2 text-sm leading-6 ${dark ? "text-zinc-500" : "text-zinc-400"}`}
              >
                {desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      <Divider />

      {/* ══════════════════════════════════════════════════
          NEWSLETTER
      ══════════════════════════════════════════════════ */}
      <section className="mx-auto max-w-7xl px-5 py-5 lg:px-12">
        <motion.div
          {...fadeUp(0)}
          className={`relative overflow-hidden rounded-3xl border p-10 text-center lg:p-16 ${t.newsletterCard}`}
        >
          <GrainOverlay opacity={dark ? 0.03 : 0.015} />
          <Blob
            className={`left-[5%] top-[-25%] h-[320px] w-[320px] ${dark ? "bg-cyan-600" : "bg-violet-400"} opacity-[0.10]`}
          />
          <Blob
            className={`right-[5%] bottom-[-15%] h-[280px] w-[280px] ${dark ? "bg-violet-600" : "bg-fuchsia-400"} opacity-[0.10]`}
          />

          <div className="relative">
            <SectionLabel color={dark ? "text-cyan-400" : "text-violet-500"}>
              <span className="mx-auto">Stay in the loop</span>
            </SectionLabel>
            <motion.h2
              {...fadeUp(0)}
              className={`mt-1 text-[clamp(1.8rem,4vw,2.6rem)] font-black tracking-tight ${dark ? "text-white" : "text-zinc-900"}`}
            >
              Get Exclusive Deals
            </motion.h2>
            <motion.p
              {...fadeUp(1)}
              className={`mx-auto mt-3 max-w-sm text-sm leading-7 ${dark ? "text-zinc-500" : "text-zinc-400"}`}
            >
              Subscribe for early access to drops, flash sales, and members-only
              offers.
            </motion.p>

            <AnimatePresence mode="wait">
              {subscribed ? (
                <motion.p
                  key="thanks"
                  initial={{ opacity: 0, scale: 0.88, y: 8 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  className={`mx-auto mt-9 w-fit rounded-full border px-7 py-3.5 text-sm font-bold
                    ${dark ? "border-emerald-400/25 bg-emerald-400/[0.07] text-emerald-400" : "border-emerald-400/40 bg-emerald-50 text-emerald-600"}`}
                >
                  ✓ You're on the list!
                </motion.p>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE_OUT_EXPO }}
                  className="mx-auto mt-9 flex max-w-md gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (email) setSubscribed(true);
                  }}
                >
                  <div className="relative flex-1">
                    <Mail
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                    />
                    <input
                      type="email"
                      required
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full rounded-full border py-3.5 pl-10 pr-4 text-sm outline-none transition-all duration-200 backdrop-blur ${t.inputField}`}
                    />
                  </div>
                  <button
                    type="submit"
                    className={`rounded-full px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:scale-105 active:scale-[0.97] ${t.btnPrimary}`}
                  >
                    Subscribe
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </section>

      {/* Bottom spacer */}
      <div className="h-8" />
    </div>
  );
}
