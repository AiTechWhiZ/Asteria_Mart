import { Link } from "react-router-dom";
import {
  Instagram,
  Twitter,
  Youtube,
  Github,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-900 dark:border-white/[0.06] dark:bg-[#040710] dark:text-white">
      <div className="mx-auto max-w-none px-5 py-16 lg:px-12">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-black">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Astaria
              </span>
            </h3>

            <p className="mt-3 max-w-xs text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              Premium electronics for those who demand performance without
              compromise.
            </p>

            <div className="mt-5 flex gap-3">
              {[Instagram, Twitter, Youtube, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-300 text-zinc-500 transition-all hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:text-zinc-400"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {[
            {
              heading: "Shop",
              links: [
                "Phones",
                "Laptops",
                "Audio",
                "Gaming",
                "Accessories",
                "Appliances",
              ],
            },
            {
              heading: "Company",
              links: ["About Us", "Careers", "Press", "Blog", "Sustainability"],
            },
            {
              heading: "Support",
              links: ["Contact", "FAQ", "Warranty", "Returns", "Track Order"],
            },
          ].map(({ heading, links }) => (
            <div key={heading}>
              <p className="mb-4 text-xs font-bold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                {heading}
              </p>

              <ul className="space-y-2.5">
                {links.map((l) => (
                  <li key={l}>
                    <Link
                      to="/products"
                      className="text-sm text-zinc-600 transition-colors hover:text-cyan-500 dark:text-zinc-500 dark:hover:text-white"
                    >
                      {l}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact bar */}
        <div className="mt-12 flex flex-wrap gap-6 border-t border-zinc-200 pt-8 text-xs text-zinc-500 dark:border-white/[0.05] dark:text-zinc-500">
          {[
            [Phone, "+91 98765 43210"],
            [Mail, "hello@astaria.in"],
            [MapPin, "Mumbai, India"],
          ].map(([Icon, val]) => (
            <span key={val} className="flex items-center gap-2">
              <Icon size={13} className="text-zinc-500" />
              {val}
            </span>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-zinc-200 pt-6 text-xs text-zinc-500 dark:border-white/[0.05] dark:text-zinc-600">
          <p>© 2026 Astaria E-Commerce. All rights reserved.</p>

          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Use", "Cookie Settings"].map((l) => (
              <a
                key={l}
                href="#"
                className="transition-colors hover:text-cyan-500 dark:hover:text-zinc-300"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
