import {
  Heart,
  ShoppingBag,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  LayoutDashboard,
  Sun,
  Moon,
  Cpu,
  Zap,
  Monitor,
  Headphones,
  Smartphone,
  Camera,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useCart } from "../context/CartContext.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

// ── Design tokens ──────────────────────────────────────────────
const FONT = "'Syne', sans-serif";
const FONT_MONO = "'DM Mono', monospace";

const CATEGORIES = [
  { icon: Monitor, label: "Displays & TVs", href: "/products?cat=displays" },
  { icon: Cpu, label: "Processors & GPUs", href: "/products?cat=cpu" },
  { icon: Smartphone, label: "Smartphones", href: "/products?cat=phones" },
  { icon: Headphones, label: "Audio", href: "/products?cat=audio" },
  { icon: Camera, label: "Cameras & Optics", href: "/products?cat=cameras" },
  { icon: Zap, label: "Accessories", href: "/products?cat=accessories" },
];

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
];

// ── Sub-components ─────────────────────────────────────────────

function Logo() {
  return (
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
  );
}

function CategoryDropdown({ open, setOpen }) {
  const ref = useRef(null);

  useEffect(() => {
    function handle(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener("mousedown", handle);
    return () => document.removeEventListener("mousedown", handle);
  }, [setOpen]);

  return (
    <div className="cat-root" ref={ref}>
      <button
        className={`cat-trigger ${open ? "cat-trigger--active" : ""}`}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
      >
        <span>Categories</span>
        <ChevronDown
          size={14}
          className={`cat-chevron ${open ? "cat-chevron--open" : ""}`}
        />
      </button>

      {open && (
        <div className="cat-panel" role="menu">
          <div className="cat-panel-inner">
            {CATEGORIES.map(({ icon: Icon, label, href }) => (
              <Link
                key={href}
                to={href}
                className="cat-item"
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <span className="cat-icon-wrap" aria-hidden="true">
                  <Icon size={16} />
                </span>
                <span className="cat-label">{label}</span>
                <ChevronRight
                  size={12}
                  className="cat-arrow"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
          <div className="cat-panel-glow" aria-hidden="true" />
        </div>
      )}
    </div>
  );
}

function SearchBar({ onSubmit, query, setQuery }) {
  return (
    <form className="search-form" onSubmit={onSubmit} role="search">
      <Search size={16} className="search-icon" aria-hidden="true" />
      <input
        type="search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products, brands…"
        className="search-input"
        aria-label="Search products"
      />
    </form>
  );
}

function IconBtn({ children, label, to, onClick, badge }) {
  const cls = "icon-btn";
  const inner = (
    <>
      {children}
      {badge > 0 && (
        <span className="icon-badge" aria-label={`${badge} items`}>
          {badge}
        </span>
      )}
      <span className="sr-only">{label}</span>
    </>
  );
  return to ? (
    <Link to={to} className={cls} aria-label={label}>
      {inner}
    </Link>
  ) : (
    <button onClick={onClick} className={cls} aria-label={label}>
      {inner}
    </button>
  );
}

// ── Main Navbar ────────────────────────────────────────────────
export default function Navbar() {
  const [catOpen, setCatOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [scrolled, setScrolled] = useState(false);

  const { user, isAdmin, logout } = useAuth();
  const { count } = useCart();
  const { dark, toggleTheme } = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/products?search=${encodeURIComponent(query)}`);
      setMobileOpen(false);
    }
  }

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:wght@400;500&display=swap');`}</style>

      <header
        className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${dark ? "navbar--dark" : ""}`}
        data-theme={dark ? "dark" : "light"}
      >
        <div className="navbar-inner">
          {/* Logo */}
          <Logo />

          {/* Desktop nav */}
          <nav className="desktop-nav" aria-label="Primary">
            <CategoryDropdown open={catOpen} setOpen={setCatOpen} />
            {NAV_LINKS.map(({ label, href }) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "nav-link--active" : ""}`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Search */}
          <SearchBar
            onSubmit={handleSearch}
            query={query}
            setQuery={setQuery}
          />

          {/* Actions */}
          <div className="action-strip">
            <IconBtn
              label={dark ? "Light mode" : "Dark mode"}
              onClick={toggleTheme}
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </IconBtn>

            {isAdmin && (
              <IconBtn label="Admin dashboard" to="/admin">
                <LayoutDashboard size={18} />
              </IconBtn>
            )}

            <IconBtn label="Wishlist" to="/wishlist">
              <Heart size={18} />
            </IconBtn>

            <IconBtn label={`Cart – ${count} items`} to="/cart" badge={count}>
              <ShoppingBag size={18} />
            </IconBtn>

            {user ? (
              <IconBtn label="Your profile" to="/profile">
                <User size={18} />
              </IconBtn>
            ) : (
              <Link to="/login" className="login-btn">
                <User size={15} />
                <span>Sign in</span>
              </Link>
            )}

            {/* Hamburger */}
            <button
              className="hamburger"
              onClick={() => setMobileOpen((o) => !o)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Accent line */}
        <span className="navbar-accent-line" aria-hidden="true" />
      </header>

      {/* ── Mobile drawer ── */}
      <div
        className={`mobile-drawer ${mobileOpen ? "mobile-drawer--open" : ""} ${dark ? "navbar--dark" : ""}`}
        aria-hidden={!mobileOpen}
      >
        <form className="mobile-search" onSubmit={handleSearch} role="search">
          <Search size={16} aria-hidden="true" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
          />
        </form>

        <div className="mobile-section-label">Navigation</div>
        {NAV_LINKS.map(({ label, href }) => (
          <Link
            key={href}
            to={href}
            className="mobile-link"
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </Link>
        ))}

        <div className="mobile-section-label" style={{ marginTop: "1.25rem" }}>
          Categories
        </div>
        {CATEGORIES.map(({ icon: Icon, label, href }) => (
          <Link
            key={href}
            to={href}
            className="mobile-link mobile-link--cat"
            onClick={() => setMobileOpen(false)}
          >
            <Icon size={16} aria-hidden="true" />
            {label}
          </Link>
        ))}

        <div className="mobile-footer">
          {user ? (
            <button
              className="mobile-logout"
              onClick={() => {
                logout();
                setMobileOpen(false);
              }}
            >
              Sign out
            </button>
          ) : (
            <Link
              to="/login"
              className="mobile-signin"
              onClick={() => setMobileOpen(false)}
            >
              Sign in to your account →
            </Link>
          )}
        </div>
      </div>

      {/* Backdrop */}
      {mobileOpen && (
        <div
          className="mobile-backdrop"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* ── All styles ── */}
      <style>{`
        /* ─ Reset & base ─ */
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .sr-only { position:absolute; width:1px; height:1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; }

        /* ─ CSS variables ─ */
        :root {
          --c-surface:   #111118;
          --c-border:    rgba(255,255,255,0.07);
          --c-border-hi: rgba(255,255,255,0.14);
          --c-text:      #f0f0f8;
          --c-muted:     #8888a8;
          --c-accent:    #00e5c4;
          --c-accent2:   #6c63ff;
          --c-accent3:   #ff5f87;
          --c-glass:     rgba(10,10,18,0.72);
          --nav-h:       clamp(56px, 12vw, 64px);
          --font:        ${FONT};
          --font-mono:   ${FONT_MONO};
          --radius:      10px;
          --radius-lg:   16px;
          --trans:       0.2s cubic-bezier(0.4,0,0.2,1);
          --c-glass: linear-gradient(
            90deg,
            rgba(8, 25, 40, 0.92),
            rgba(8, 40, 55, 0.90),
            rgba(10, 20, 35, 0.92)
          );
        }
        [data-theme="light"] {
          --c-bg: rgba(124, 58, 237, 0.25);
          --c-surface: #ffffff;
          --c-border:  rgba(0,0,0,0.08);
          --c-border-hi: rgba(0,0,0,0.15);
          --c-text:    #0d0d1a;
          --c-muted:   #666680;
          --c-glass: rgba(124, 58, 237, 0.15);
        }

        /* ─ Navbar shell ─ */
        .navbar {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          height: var(--nav-h);
          background: var(--c-glass);
          backdrop-filter: saturate(180%) blur(20px);
          -webkit-backdrop-filter: saturate(180%) blur(20px);
          border-bottom: 1px solid var(--c-border);
          font-family: var(--font);
          transition: box-shadow var(--trans), border-color var(--trans);
        }
        .navbar--scrolled {
          box-shadow: 0 4px 40px rgba(0,0,0,0.35);
          border-bottom-color: var(--c-border-hi);
        }
        .navbar-accent-line {
          display: block;
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 1px;
          background: linear-gradient(90deg, transparent 0%, var(--c-accent) 30%, var(--c-accent2) 70%, transparent 100%);
          opacity: 0.5;
        }
        .navbar--scrolled .navbar-accent-line { opacity: 0.9; }

        .navbar-inner {
          max-width: 1360px;
          margin: 0 auto;
          height: 100%;
          padding: 0 clamp(0.75rem, 4vw, 1.5rem);
          display: flex;
          align-items: center;
          gap: clamp(0.25rem, 1vw, 0.75rem);
        }

        /* ─ Logo ─ */
        .logo-wrap {
          display: flex;
          align-items: center;
          gap: clamp(6px, 2vw, 10px);
          text-decoration: none;
          flex-shrink: 0;
          margin-right: clamp(0.25rem, 2vw, 0.5rem);
        }
        .logo-mark {
          position: relative;
          width: clamp(32px, 4vw, 36px);
          height: clamp(32px, 4vw, 36px);
          flex-shrink: 0;
        }
        .logo-hex {
          display: block;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--c-accent), var(--c-accent2));
          clip-path: polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%);
          transition: transform var(--trans);
        }
        .logo-wrap:hover .logo-hex { transform: rotate(30deg) scale(1.05); }
        .logo-letter {
          position: absolute;
          inset: 0;
          display: flex; align-items: center; justify-content: center;
          font-family: var(--font);
          font-weight: 800;
          font-size: clamp(12px, 2vw, 16px);
          color: #0a0a0f;
          pointer-events: none;
        }
        .logo-text {
          font-family: var(--font);
          font-weight: 800;
          font-size: clamp(14px, 3vw, 17px);
          letter-spacing: 0.14em;
          color: var(--c-text);
          display: flex;
          align-items: center;
          gap: clamp(2px, 1vw, 4px);
        }
        .logo-dot {
          font-size: clamp(4px, 1vw, 6px);
          color: var(--c-accent);
          vertical-align: middle;
          animation: pulse 2.4s ease-in-out infinite;
        }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }

        /* ─ Desktop nav ─ */
        .desktop-nav {
          display: none;
          align-items: center;
          gap: 6px;
          flex-shrink: 0;
        }
        @media (min-width: 1024px) { .desktop-nav { display: flex; } }

        .nav-link {
          font-family: var(--font);
          font-weight: 600;
          font-size: clamp(11px, 1.5vw, 13px);
          letter-spacing: 0.04em;
          text-decoration: none;
          color: var(--c-muted);
          padding: clamp(4px, 1vw, 6px) clamp(10px, 2vw, 14px);
          border-radius: 50px;
          border: 1px solid transparent;
          transition: color var(--trans), background var(--trans), border-color var(--trans);
          white-space: nowrap;
        }
        
        .nav-link:hover {
          color: #7DD3FC;
          background: rgba(125, 211, 252, 0.12);
          border-color: rgba(125, 211, 252, 0.25);
        }

        .nav-link--active {
          color: #7DD3FC;
          background: rgba(125, 211, 252, 0.18);
          border-color: rgba(125, 211, 252, 0.35);
          box-shadow: 0 0 18px rgba(125, 211, 252, 0.18);
        }

        [data-theme="light"] .nav-link:hover {
          color: #7C3AED;
          background: rgba(124, 58, 237, 0.08);
          border-color: rgba(124, 58, 237, 0.15);
        }

        [data-theme="light"] .nav-link--active {
          color: #7C3AED;
          background: rgba(124, 58, 237, 0.12);
          border-color: rgba(124, 58, 237, 0.25);
          box-shadow: 0 0 18px rgba(124, 58, 237, 0.12);
        }

        /* ─ Category dropdown ─ */
        .cat-root { position: relative; }
        .cat-trigger {
          display: flex;
          align-items: center;
          gap: 6px;
          font-family: var(--font);
          font-weight: 600;
          font-size: clamp(11px, 1.5vw, 13px);
          letter-spacing: 0.04em;
          color: var(--c-muted);
          background: transparent;
          border: 1px solid transparent;
          padding: clamp(4px, 1vw, 6px) clamp(10px, 2vw, 14px);
          border-radius: 50px;
          cursor: pointer;
          transition: color var(--trans), background var(--trans), border-color var(--trans);
          white-space: nowrap;
        }
        .cat-trigger:hover { color: var(--c-text); background: rgba(255,255,255,0.06); }
        .cat-trigger--active { color: var(--c-accent); background: rgba(0,229,196,0.08); border-color: rgba(0,229,196,0.2); }
        [data-theme="light"] .cat-trigger:hover { background: rgba(0,0,0,0.05); }
        .cat-chevron { transition: transform 0.25s ease; }
        .cat-chevron--open { transform: rotate(180deg); }

        .cat-panel {
          position: absolute;
          top: calc(100% + 12px);
          left: 0;
          min-width: clamp(220px, 80vw, 240px);
          background: var(--c-surface);
          border: 1px solid var(--c-border-hi);
          border-radius: var(--radius-lg);
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(0,229,196,0.06);
          animation: panelIn 0.18s ease;
          max-height: 80vh;
          overflow-y: auto;
        }
        @keyframes panelIn { from{opacity:0;transform:translateY(-6px)} to{opacity:1;transform:translateY(0)} }
        .cat-panel-inner { padding: clamp(4px, 1vw, 6px); }
        .cat-panel-glow {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, var(--c-accent), var(--c-accent2));
        }
        .cat-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: clamp(7px, 1vw, 9px) 12px;
          border-radius: 8px;
          text-decoration: none;
          color: var(--c-muted);
          font-family: var(--font);
          font-size: clamp(12px, 1.5vw, 13px);
          font-weight: 500;
          transition: background var(--trans), color var(--trans);
        }
        .cat-item:hover { background: rgba(0,229,196,0.08); color: var(--c-accent); }
        [data-theme="light"] .cat-item:hover { background: rgba(0,180,154,0.07); }
        .cat-icon-wrap {
          display: flex; align-items: center; justify-content: center;
          width: clamp(26px, 4vw, 30px);
          height: clamp(26px, 4vw, 30px);
          border-radius: 7px;
          background: rgba(255,255,255,0.05);
          color: inherit;
          flex-shrink: 0;
          transition: background var(--trans);
          font-size: clamp(14px, 2vw, 16px);
        }
        .cat-item:hover .cat-icon-wrap { background: rgba(0,229,196,0.15); }
        [data-theme="light"] .cat-icon-wrap { background: rgba(0,0,0,0.04); }
        .cat-label { flex: 1; }
        .cat-arrow { opacity: 0; transform: translateX(-4px); transition: opacity var(--trans), transform var(--trans); }
        .cat-item:hover .cat-arrow { opacity: 1; transform: translateX(0); }

        /* ─ Search ─ */
        .search-form {
          flex: 1;
          min-width: 0;
          max-width: clamp(200px, 50vw, 360px);
          display: none;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--c-border);
          border-radius: 50px;
          padding: 0 14px;
          height: 38px;
          transition: border-color var(--trans), background var(--trans), box-shadow var(--trans);
        }
        [data-theme="light"] .search-form { background: rgba(0,0,0,0.04); }
        @media (min-width: 768px) { 
          .search-form { 
            display: flex;
            flex: 0 1 auto;
            max-width: clamp(220px, 35vw, 360px);
            margin: 0 clamp(0.5rem, 2vw, 1.25rem);
          } 
        }
        @media (min-width: 1024px) {
          .search-form {
            flex: 1;
            margin: 0 1.25rem;
          }
        }
        .search-form:focus-within {
          border-color: var(--c-accent);
          background: rgba(0,229,196,0.04);
          box-shadow: 0 0 0 3px rgba(0,229,196,0.1);
        }
        .search-icon { color: var(--c-muted); flex-shrink: 0; }
        .search-input {
          flex: 1;
          min-width: 0;
          background: transparent;
          border: none;
          outline: none;
          font-family: var(--font);
          font-size: clamp(12px, 1.5vw, 13px);
          color: var(--c-text);
        }
        .search-input::placeholder { color: var(--c-muted); }
        .search-kbd {
          font-family: var(--font-mono);
          font-size: clamp(8px, 1vw, 10px);
          font-weight: 500;
          color: var(--c-muted);
          background: rgba(255,255,255,0.07);
          border: 1px solid var(--c-border-hi);
          border-radius: 5px;
          padding: clamp(1px, 0.5vw, 2px) clamp(4px, 1vw, 6px);
          flex-shrink: 0;
        }
        [data-theme="light"] .search-kbd { background: rgba(0,0,0,0.05); }

        /* ─ Action strip ─ */
        .action-strip {
          display: flex;
          align-items: center;
          gap: clamp(2px, 1vw, 8px);
          margin-left: auto;
          flex-shrink: 0;
        }

        /* ─ Icon button ─ */
        .icon-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(32px, 8vw, 38px);
          height: clamp(32px, 8vw, 38px);
          border-radius: 50%;
          background: transparent;
          border: 1px solid transparent;
          color: var(--c-muted);
          cursor: pointer;
          text-decoration: none;
          transition: background var(--trans), color var(--trans), border-color var(--trans), transform 0.15s ease;
          flex-shrink: 0;
        }
        .icon-btn:hover {
          background: rgba(255,255,255,0.08);
          color: var(--c-text);
          border-color: var(--c-border-hi);
          transform: translateY(-1px);
        }
        .icon-btn:active { transform: translateY(0) scale(0.95); }
        [data-theme="light"] .icon-btn:hover { background: rgba(0,0,0,0.06); }
        .icon-badge {
          position: absolute;
          top: 1px; right: 1px;
          width: clamp(16px, 3vw, 18px);
          height: clamp(16px, 3vw, 18px);
          border-radius: 50%;
          background: var(--c-accent3);
          color: #fff;
          font-family: var(--font-mono);
          font-size: clamp(8px, 1.5vw, 10px);
          font-weight: 700;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid var(--c-surface);
          pointer-events: none;
        }

        /* ─ Login button ─ */
        .login-btn {
          display: none;
          align-items: center;
          gap: 7px;
          font-family: var(--font);
          font-weight: 700;
          font-size: clamp(11px, 2vw, 12.5px);
          letter-spacing: 0.06em;
          text-decoration: none;
          color: #0a0a0f;
          background: var(--c-accent);
          padding: 0 clamp(12px, 2vw, 16px);
          height: clamp(32px, 6vw, 36px);
          border-radius: 50px;
          transition: background var(--trans), transform 0.15s ease, box-shadow var(--trans);
          white-space: nowrap;
          flex-shrink: 0;
        }
        .login-btn:hover {
          background: #00ffde;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(0,229,196,0.35);
        }
        .login-btn:active { transform: translateY(0); }
        @media (min-width: 640px) { .login-btn { display: inline-flex; } }

        /* ─ Hamburger ─ */
        .hamburger {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: clamp(32px, 8vw, 38px);
          height: clamp(32px, 8vw, 38px);
          border-radius: 50%;
          background: transparent;
          border: 1px solid var(--c-border);
          color: var(--c-muted);
          cursor: pointer;
          transition: background var(--trans), color var(--trans);
          flex-shrink: 0;
        }
        .hamburger:hover { background: rgba(255,255,255,0.08); color: var(--c-text); }
        @media (min-width: 1024px) { .hamburger { display: none; } }

        /* ─ Mobile drawer ─ */
        .mobile-drawer {
          position: fixed;
          inset: var(--nav-h) 0 0 0;
          z-index: 99;
          background: var(--c-surface);
          border-top: 1px solid var(--c-border-hi);
          padding: clamp(1rem, 5vw, 1.25rem);
          overflow-y: auto;
          transform: translateX(100%);
          transition: transform 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .mobile-drawer--open { transform: translateX(0); }
        @media (min-width: 1024px) { .mobile-drawer { display: none; } }

        .mobile-backdrop {
          position: fixed;
          inset: var(--nav-h) 0 0 0;
          z-index: 98;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(4px);
        }
        @media (min-width: 1024px) { .mobile-backdrop { display: none; } }

        .mobile-search {
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid var(--c-border-hi);
          border-radius: var(--radius);
          padding: 0 clamp(10px, 2vw, 14px);
          height: clamp(40px, 8vw, 44px);
          margin-bottom: clamp(0.75rem, 3vw, 1.25rem);
          color: var(--c-muted);
        }
        [data-theme="light"] .mobile-search { background: rgba(0,0,0,0.04); }
        .mobile-search input {
          flex: 1; background: transparent; border: none; outline: none;
          font-family: var(--font); font-size: clamp(13px, 2vw, 14px); color: var(--c-text);
        }
        .mobile-search input::placeholder { color: var(--c-muted); }

        .mobile-section-label {
          font-family: var(--font-mono);
          font-size: clamp(8px, 1.5vw, 10px);
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--c-muted);
          padding: 0 4px;
          margin-bottom: clamp(4px, 1vw, 6px);
        }
        .mobile-link {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: clamp(10px, 2vw, 12px) 10px;
          border-radius: 10px;
          text-decoration: none;
          font-family: var(--font);
          font-size: clamp(13px, 2vw, 14px);
          font-weight: 600;
          color: var(--c-text);
          transition: background var(--trans), color var(--trans);
        }
        .mobile-link:hover { background: rgba(255,255,255,0.06); }
        [data-theme="light"] .mobile-link:hover { background: rgba(0,0,0,0.04); }
        .mobile-link--cat { color: var(--c-muted); font-weight: 500; }
        .mobile-link--cat:hover { color: var(--c-accent); }

        .mobile-footer {
          margin-top: clamp(1rem, 3vw, 1.5rem);
          padding-top: clamp(0.75rem, 2vw, 1rem);
          border-top: 1px solid var(--c-border);
        }
        .mobile-signin {
          font-family: var(--font);
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 700;
          color: var(--c-accent);
          text-decoration: none;
          letter-spacing: 0.03em;
        }
        .mobile-logout {
          font-family: var(--font);
          font-size: clamp(12px, 2vw, 14px);
          font-weight: 600;
          color: var(--c-muted);
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }
        .mobile-logout:hover { color: var(--c-accent3); }
      `}</style>
    </>
  );
}
