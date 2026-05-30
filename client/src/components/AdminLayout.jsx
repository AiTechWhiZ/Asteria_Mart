import { Link, NavLink } from "react-router-dom";
import { Boxes, ChartNoAxesCombined, PackagePlus, Users } from "lucide-react";

const items = [
  ["Dashboard", "/admin", ChartNoAxesCombined],
  ["Products", "/admin/products", PackagePlus],
  ["Orders", "/admin/orders", Boxes],
  ["Users", "/admin/users", Users]
];

export default function AdminLayout({ children, title }) {
  return (
    <section className="section">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-sm font-bold uppercase tracking-[.25em] text-teal-600">Admin</p><h1 className="text-3xl font-black">{title}</h1></div>
        <Link to="/products" className="btn-soft">View Store</Link>
      </div>
      <div className="grid gap-6 lg:grid-cols-[240px_1fr]">
        <aside className="glass rounded-lg p-3">
          {items.map(([label, href, Icon]) => (
            <NavLink key={href} end={href === "/admin"} to={href} className={({ isActive }) => `mb-1 flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold ${isActive ? "bg-zinc-950 text-white dark:bg-white dark:text-zinc-950" : "hover:bg-white/70 dark:hover:bg-white/10"}`}>
              <Icon size={18} /> {label}
            </NavLink>
          ))}
        </aside>
        <div>{children}</div>
      </div>
    </section>
  );
}
