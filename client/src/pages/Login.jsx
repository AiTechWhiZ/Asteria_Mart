import { useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

/* ─────────────────────────────────────────────
   Inline styles — zero external deps needed
───────────────────────────────────────────── */
const css = `
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;500;600;700;800&display=swap');

  :root {
    --cyan: #00e5ff;
    --cyan-dim: #00b8d4;
    --cyan-glow: rgba(0,229,255,0.18);
    --cyan-glow-sm: rgba(0,229,255,0.08);
    --purple: #7c3aed;
    --purple-dim: #6d28d9;
    --purple-glow: rgba(124,58,237,0.22);
    --purple-glow-sm: rgba(124,58,237,0.08);
    --accent2: #6c63ff;
    --logo-accent: var(--cyan);
    --logo-accent2: #6c63ff;
    --font: 'Syne', sans-serif;
    --radius: 20px;
    --transition: cubic-bezier(0.23, 1, 0.32, 1);
  }

  .astaria-login-root {
    font-family: 'DM Sans', sans-serif;
    min-height: 100vh;
    display: grid;
    place-items: center;
    padding: 36px 16px;
    position: relative;
    overflow: hidden;
  }

  /* ── DARK THEME ── */
  .astaria-login-root.dark-theme {
    background: #050a0f;
    color: #e8f4f8;
    --accent: var(--cyan);
    --accent2: #6c63ff;
    --logo-accent: var(--cyan);
    --logo-accent2: #6c63ff;
    --accent-dim: var(--cyan-dim);
    --accent-glow: var(--cyan-glow);
    --accent-glow-sm: var(--cyan-glow-sm);
    --grad-btn: linear-gradient(135deg, #00e5ff 0%, #006080 100%);
    --grad-btn-hover: linear-gradient(135deg, #33ecff 0%, #007a9e 100%);
    --card-bg: rgba(255,255,255,0.028);
    --card-border: rgba(0,229,255,0.1);
    --card-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(0,229,255,0.06), inset 0 1px 0 rgba(255,255,255,0.05);
    --input-bg: rgba(255,255,255,0.04);
    --input-border: rgba(255,255,255,0.08);
    --input-border-focus: rgba(0,229,255,0.5);
    --input-shadow-focus: 0 0 0 3px rgba(0,229,255,0.1), 0 0 20px rgba(0,229,255,0.06);
    --text-muted: rgba(180,210,220,0.55);
    --text-sub: rgba(180,210,220,0.75);
    --divider: rgba(255,255,255,0.06);
    --social-bg: rgba(255,255,255,0.04);
    --social-border: rgba(255,255,255,0.08);
    --social-hover: rgba(0,229,255,0.06);
    --blob1: rgba(0,229,255,0.06);
    --blob2: rgba(0,160,200,0.04);
    --blob3: rgba(0,100,150,0.05);
  }

  /* ── LIGHT THEME ── */
  .astaria-login-root.light-theme {
    background: #f5f3ff;
    color: #1a0a3d;
    --accent: var(--purple);
    --accent2: #ec4899;
    --logo-accent: var(--purple);
    --logo-accent2: #ec4899;
    --accent-dim: var(--purple-dim);
    --accent-glow: var(--purple-glow);
    --accent-glow-sm: var(--purple-glow-sm);
    --grad-btn: linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%);
    --grad-btn-hover: linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%);
    --card-bg: rgba(255,255,255,0.7);
    --card-border: rgba(124,58,237,0.12);
    --card-shadow: 0 32px 80px rgba(109,40,217,0.12), 0 0 0 1px rgba(124,58,237,0.08), inset 0 1px 0 rgba(255,255,255,0.9);
    --input-bg: rgba(255,255,255,0.8);
    --input-border: rgba(124,58,237,0.12);
    --input-border-focus: rgba(124,58,237,0.5);
    --input-shadow-focus: 0 0 0 3px rgba(124,58,237,0.1), 0 0 20px rgba(124,58,237,0.06);
    --text-muted: rgba(80,40,160,0.5);
    --text-sub: rgba(80,40,160,0.7);
    --divider: rgba(124,58,237,0.1);
    --social-bg: rgba(255,255,255,0.6);
    --social-border: rgba(124,58,237,0.1);
    --social-hover: rgba(124,58,237,0.06);
    --blob1: rgba(124,58,237,0.07);
    --blob2: rgba(99,102,241,0.05);
    --blob3: rgba(167,139,250,0.06);
  }

  /* ── BACKGROUND BLOBS ── */
  .al-blob {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    filter: blur(80px);
    animation: blobDrift 12s ease-in-out infinite alternate;
  }
  .al-blob-1 {
    width: 520px; height: 520px;
    top: -140px; left: -120px;
    background: var(--blob1);
    animation-duration: 14s;
  }
  .al-blob-2 {
    width: 380px; height: 380px;
    bottom: -100px; right: -80px;
    background: var(--blob2);
    animation-duration: 18s;
    animation-delay: -4s;
  }
  .al-blob-3 {
    width: 260px; height: 260px;
    top: 40%; left: 60%;
    background: var(--blob3);
    animation-duration: 22s;
    animation-delay: -9s;
  }
  @keyframes blobDrift {
    0%   { transform: translate(0,0) scale(1); }
    33%  { transform: translate(20px,-30px) scale(1.05); }
    66%  { transform: translate(-10px,20px) scale(0.97); }
    100% { transform: translate(30px,10px) scale(1.03); }
  }

  /* ── GRID OVERLAY ── */
  .al-grid {
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.025;
    background-image:
      linear-gradient(var(--accent) 1px, transparent 1px),
      linear-gradient(90deg, var(--accent) 1px, transparent 1px);
    background-size: 48px 48px;
    mask-image: radial-gradient(ellipse 70% 70% at 50% 50%, black, transparent);
  }

  /* ── CARD ── */
  .al-card {
    position: relative;
    z-index: 10;
    width: min(100%, 440px);
    max-width: 440px;
    background: var(--card-bg);
    border: 1px solid var(--card-border);
    border-radius: var(--radius);
    box-shadow: var(--card-shadow);
    backdrop-filter: blur(32px) saturate(180%);
    -webkit-backdrop-filter: blur(32px) saturate(180%);
    padding: 48px 44px;
    animation: cardIn 0.7s var(--transition) both;
  }
  @keyframes cardIn {
    from { opacity: 0; transform: translateY(28px) scale(0.97); filter: blur(4px); }
    to   { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }

  /* ── LOGO ── */
  .al-logo {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 32px;
    animation: fadeUp 0.6s var(--transition) 0.1s both;
  }
  .al-logo-mark {
    position: relative;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
  }
  .logo-hex {
    display: block;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, var(--logo-accent), var(--logo-accent2));
    clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
    transition: transform var(--transition);
  }
  .al-card .logo-wrap:hover .logo-hex {
    transform: rotate(30deg) scale(1.05);
  }
  .logo-letter {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--font);
    font-weight: 800;
    font-size: 16px;
    color: #0a0a0a;
    pointer-events: none;
  }
  .al-logo-text,
  .al-card .logo-text {
    font-family: var(--font);
    font-size: clamp(14px, 3vw, 17px);
    font-weight: 800;
    letter-spacing: 0.14em;
    color: inherit;
  }

  .al-card .logo-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin: 0 auto 32px;
    text-align: center;
    width: fit-content;
  }

  .al-card .logo-text {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
  }

  .astaria-login-root.light-theme .logo-text {
    color: #0a0a0a;
  }

  .astaria-login-root.dark-theme .logo-dot {
    color: #00e5c4;
    animation: ping-dot 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  .astaria-login-root.light-theme .logo-dot {
    color: #A855F7;
    animation: ping-dot 1.6s cubic-bezier(0, 0, 0.2, 1) infinite;
  }

  @keyframes ping-dot {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.35); opacity: 0.55; }
  }

  .al-card .logo-dot {
    font-size: clamp(15px, 2vw, 20px);
    color: var(--accent);
    vertical-align: middle;
  }

  /* ── HEADING ── */
  .al-heading {
    font-family: 'Sora', sans-serif;
    font-size: 28px;
    font-weight: 700;
    letter-spacing: -0.03em;
    line-height: 1.15;
    margin: 0;
    animation: fadeUp 0.6s var(--transition) 0.18s both;
  }
  .al-heading-accent {
    color: var(--accent);
  }
  .al-sub {
    margin-top: 8px;
    font-size: 13.5px;
    color: var(--text-muted);
    line-height: 1.6;
    font-weight: 400;
    animation: fadeUp 0.6s var(--transition) 0.24s both;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(14px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  /* ── SOCIAL BUTTONS ── */
  .al-socials {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    margin-top: 28px;
    animation: fadeUp 0.6s var(--transition) 0.3s both;
  }
  .al-social-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    padding: 11px 16px;
    border-radius: 12px;
    border: 1px solid var(--social-border);
    background: var(--social-bg);
    font-size: 13px;
    font-weight: 500;
    color: inherit;
    cursor: pointer;
    transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
    backdrop-filter: blur(8px);
  }
  .al-social-btn:hover {
    background: var(--social-hover);
    border-color: var(--input-border-focus);
    transform: translateY(-1px);
  }
  .al-social-btn svg { flex-shrink: 0; }

  /* ── DIVIDER ── */
  .al-divider {
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 24px 0;
    animation: fadeUp 0.6s var(--transition) 0.36s both;
  }
  .al-divider-line {
    flex: 1;
    height: 1px;
    background: var(--divider);
  }
  .al-divider-text {
    font-size: 11px;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--text-muted);
  }

  /* ── FORM ── */
  .al-form { width: 100%; }

  .al-field {
    position: relative;
    margin-bottom: 14px;
    animation: fadeUp 0.6s var(--transition) both;
  }
  .al-field:nth-child(1) { animation-delay: 0.38s; }
  .al-field:nth-child(2) { animation-delay: 0.44s; }

  .al-field-icon {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--text-muted);
    pointer-events: none;
    transition: color 0.2s ease;
    display: flex;
  }
  .al-field:focus-within .al-field-icon {
    color: var(--accent);
  }

  .al-input {
    width: 100%;
    box-sizing: border-box;
    background: var(--input-bg);
    border: 1px solid var(--input-border);
    border-radius: 13px;
    padding: 14px 44px 14px 44px;
    font-size: 14px;
    font-family: 'DM Sans', sans-serif;
    font-weight: 400;
    color: inherit;
    outline: none;
    transition: border-color 0.25s ease, box-shadow 0.25s ease, background 0.2s ease;
    -webkit-appearance: none;
  }
  .al-input::placeholder { color: var(--text-muted); font-size: 13.5px; }
  .al-input:focus {
    border-color: var(--input-border-focus);
    box-shadow: var(--input-shadow-focus);
    background: var(--input-bg);
  }
  .al-input:hover:not(:focus) { border-color: rgba(255,255,255,0.15); }

  .al-eye-btn {
    position: absolute;
    right: 14px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: var(--text-muted);
    cursor: pointer;
    padding: 4px;
    display: flex;
    align-items: center;
    transition: color 0.2s ease;
  }
  .al-eye-btn:hover { color: var(--accent); }

  /* ── FORGOT ── */
  .al-forgot {
    display: flex;
    justify-content: flex-end;
    margin-top: -4px;
    margin-bottom: 22px;
    animation: fadeUp 0.6s var(--transition) 0.5s both;
  }
  .al-forgot a {
    font-size: 12.5px;
    color: var(--accent);
    text-decoration: none;
    font-weight: 500;
    opacity: 0.85;
    transition: opacity 0.2s ease;
  }
  .al-forgot a:hover { opacity: 1; }

  /* ── PRIMARY BUTTON ── */
  .al-btn-primary {
    width: 100%;
    padding: 15px 24px;
    border-radius: 13px;
    border: none;
    background: var(--grad-btn);
    color: #fff;
    font-family: 'Sora', sans-serif;
    font-size: 14.5px;
    font-weight: 600;
    letter-spacing: 0.01em;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition: transform 0.22s var(--transition), box-shadow 0.22s ease;
    box-shadow: 0 4px 24px var(--accent-glow), 0 1px 0 rgba(255,255,255,0.15) inset;
    animation: fadeUp 0.6s var(--transition) 0.54s both;
  }
  .al-btn-primary::before {
    content: '';
    position: absolute;
    inset: 0;
    background: var(--grad-btn-hover);
    opacity: 0;
    transition: opacity 0.25s ease;
  }
  .al-btn-primary:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 32px var(--accent-glow), 0 1px 0 rgba(255,255,255,0.15) inset; }
  .al-btn-primary:hover:not(:disabled)::before { opacity: 1; }
  .al-btn-primary:active:not(:disabled) { transform: translateY(0); }
  .al-btn-primary:disabled { opacity: 0.6; cursor: not-allowed; }
  .al-btn-primary span { position: relative; z-index: 1; display: flex; align-items: center; justify-content: center; gap: 8px; }

  /* ── LOADING SPINNER ── */
  .al-spinner {
    width: 16px; height: 16px;
    border: 2px solid rgba(255,255,255,0.3);
    border-top-color: #fff;
    border-radius: 50%;
    animation: spin 0.7s linear infinite;
  }
  @keyframes spin { to { transform: rotate(360deg); } }

  /* ── FOOTER ── */
  .al-footer {
    margin-top: 24px;
    text-align: center;
    font-size: 13px;
    color: var(--text-muted);
    animation: fadeUp 0.6s var(--transition) 0.6s both;
  }
  .al-footer a {
    color: var(--accent);
    text-decoration: none;
    font-weight: 600;
    transition: opacity 0.2s ease;
  }
  .al-footer a:hover { opacity: 0.8; }

  /* ── TRUST BADGES ── */
  .al-trust {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 18px;
    margin-top: 28px;
    padding-top: 20px;
    border-top: 1px solid var(--divider);
    animation: fadeUp 0.6s var(--transition) 0.66s both;
  }
  .al-trust-item {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 11px;
    color: var(--text-muted);
    font-weight: 500;
    letter-spacing: 0.02em;
  }

  /* ── RESPONSIVE ── */
  @media (max-width: 720px) {
    .astaria-login-root { padding: 32px 14px; }
    .al-card { padding: 42px 32px; }
    .al-socials { grid-template-columns: 1fr; }
    .al-field { margin-bottom: 16px; }
    .al-btn-primary { padding: 14px 20px; }
    .al-trust { flex-wrap: wrap; justify-content: center; gap: 12px; }
  }

  @media (max-width: 520px) {
    .astaria-login-root { padding: 24px 12px; }
    .al-card { padding: 28px 20px; }
    .al-logo { gap: 8px; margin-bottom: 24px; }
    .al-heading { font-size: 22px; }
    .al-sub { font-size: 13px; }
    .al-socials { grid-template-columns: 1fr; }
    .al-field { margin-bottom: 12px; }
    .al-input { padding: 12px 40px 12px 44px; font-size: 13.5px; }
    .al-forgot { justify-content: center; }
    .al-trust { gap: 10px; margin-top: 24px; padding-top: 16px; }
    .al-blob { display: none; }
    .al-grid { opacity: 0.035; background-size: 32px 32px; }
  }
`;

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });
  const [showPass, setShowPass] = useState(false);
  const styleRef = useRef(null);
  const { dark } = useTheme();
  // Detect theme from <html> or <body> class — same pattern your homepage uses

  useEffect(() => {
    if (!styleRef.current) {
      const el = document.createElement("style");
      el.textContent = css;
      document.head.appendChild(el);
      styleRef.current = el;
    }
    return () => {
      if (styleRef.current) {
        styleRef.current.remove();
        styleRef.current = null;
      }
    };
  }, []);

  async function submit(event) {
    event.preventDefault();
    try {
      await login(form.email, form.password);
      navigate(location.state?.from?.pathname || "/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  const themeClass = dark ? "dark-theme" : "light-theme";

  return (
    <section className={`astaria-login-root ${themeClass}`}>
      {/* Background blobs */}
      <div className="al-blob al-blob-1" />
      <div className="al-blob al-blob-2" />
      <div className="al-blob al-blob-3" />
      <div className="al-grid" />

      <div className="al-card">
        {/* Logo */}
        <Link to="/" className="logo-wrap" aria-label="Astaria home">
          <span className="logo-mark" aria-hidden="true">
            <span className="logo-hex" />
            <span className="logo-letter">A</span>
          </span>
          <span className="logo-text">
            ASTERIA
            <span className="logo-dot" aria-hidden="true">
              ●
            </span>
          </span>
        </Link>

        {/* Heading */}
        <h1 className="al-heading">
          Welcome <span className="al-heading-accent">back.</span>
        </h1>
        <p className="al-sub">
          Sign in to access your cart, orders, wishlist & more.
        </p>

        {/* Social Login */}
        <div className="al-socials">
          <button
            type="button"
            className="al-social-btn"
            onClick={() => toast("Google login coming soon")}
          >
            <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
              <path
                d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844c-.209 1.125-.843 2.078-1.796 2.717v2.258h2.908c1.702-1.567 2.684-3.875 2.684-6.615z"
                fill="#4285F4"
              />
              <path
                d="M9 18c2.43 0 4.467-.806 5.956-2.184l-2.908-2.258c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 009 18z"
                fill="#34A853"
              />
              <path
                d="M3.964 10.707A5.41 5.41 0 013.682 9c0-.593.102-1.17.282-1.707V4.961H.957A8.996 8.996 0 000 9c0 1.452.348 2.827.957 4.039l3.007-2.332z"
                fill="#FBBC05"
              />
              <path
                d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 00.957 4.96l3.007 2.333C4.672 5.163 6.656 3.58 9 3.58z"
                fill="#EA4335"
              />
            </svg>
            Google
          </button>
          <button
            type="button"
            className="al-social-btn"
            onClick={() => toast("Apple login coming soon")}
          >
            <svg
              width="15"
              height="16"
              viewBox="0 0 814 1000"
              fill="currentColor"
            >
              <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105-42.3-150.3-109C81 501.1 55.7 342.1 55.7 221.9c0-109.1 69.6-166.5 137.8-166.5 69.6 0 114.9 45.5 164.8 45.5 47.8 0 100.9-48.5 172.5-48.5 27.5 0 108.2 2.6 163.3 69.6zm-145.5-83.4c-28.1-35.3-69-60.6-112.4-60.6-6.4 0-12.8.6-19.2 1.9 1.3 42.3 20.5 83.1 49.3 112.4 28.1 28.8 67 47.4 107.8 47.4 5.1 0 10.3-.6 15.5-1.3-1.3-39.5-18.5-80.2-41-99.8z" />
            </svg>
            Apple
          </button>
        </div>

        {/* Divider */}
        <div className="al-divider">
          <div className="al-divider-line" />
          <span className="al-divider-text">or continue with email</span>
          <div className="al-divider-line" />
        </div>

        {/* Form */}
        <form className="al-form" onSubmit={submit}>
          {/* Email */}
          <div className="al-field">
            <span className="al-field-icon">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="4" width="20" height="16" rx="3" />
                <path d="m2 7 10 7 10-7" />
              </svg>
            </span>
            <input
              className="al-input"
              type="email"
              placeholder="Email address"
              value={form.email}
              autoComplete="email"
              required
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>

          {/* Password */}
          <div className="al-field">
            <span className="al-field-icon">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="11" width="18" height="11" rx="2" />
                <path d="M7 11V7a5 5 0 0 1 10 0v4" />
              </svg>
            </span>
            <input
              className="al-input"
              type={showPass ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              autoComplete="current-password"
              required
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <button
              type="button"
              className="al-eye-btn"
              onClick={() => setShowPass((v) => !v)}
              aria-label={showPass ? "Hide password" : "Show password"}
            >
              {showPass ? (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                  <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              )}
            </button>
          </div>

          {/* Forgot */}
          <div className="al-forgot">
            <Link to="/forgot-password">Forgot password?</Link>
          </div>

          {/* Submit */}
          <button className="al-btn-primary" type="submit" disabled={loading}>
            <span>
              {loading ? (
                <>
                  <span className="al-spinner" />
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </span>
          </button>
        </form>

        {/* Create account */}
        <p className="al-footer">
          New to Astaria? <Link to="/signup">Create a free account →</Link>
        </p>

        {/* Trust badges */}
        <div className="al-trust">
          <span className="al-trust-item">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" />
            </svg>
            Secure
          </span>
          <span className="al-trust-item">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            SSL Encrypted
          </span>
          <span className="al-trust-item">
            <svg
              width="11"
              height="11"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Trusted
          </span>
        </div>
      </div>
    </section>
  );
}
