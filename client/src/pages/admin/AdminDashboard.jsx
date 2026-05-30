import { ChartNoAxesCombined, Package, ShoppingCart, Users } from "lucide-react";
import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout.jsx";
import { api, currency } from "../../lib/api.js";

export default function AdminDashboard() {
  const [data, setData] = useState({ users: 0, products: 0, orders: 0, revenue: 0, recentOrders: [], lowStock: [] });
  useEffect(() => { api("/admin/dashboard").then(setData).catch(() => {}); }, []);
  const stats = [["Revenue", currency(data.revenue), ChartNoAxesCombined], ["Orders", data.orders, ShoppingCart], ["Products", data.products, Package], ["Users", data.users, Users]];

  return (
    <AdminLayout title="Dashboard">
      <div className="grid gap-4 md:grid-cols-4">{stats.map(([label, value, Icon]) => <div className="card p-5" key={label}><Icon className="mb-4 text-teal-600" /><p className="text-sm text-zinc-500">{label}</p><p className="text-2xl font-black">{value}</p></div>)}</div>
      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <div className="card p-6"><p className="mb-4 text-xl font-black">Recent orders</p>{data.recentOrders?.map((order) => <p className="border-t border-zinc-100 py-3 text-sm dark:border-white/10" key={order._id}>{order.user?.name || "Customer"} - {currency(order.total)}</p>)}</div>
        <div className="card p-6"><p className="mb-4 text-xl font-black">Inventory alerts</p>{data.lowStock?.map((product) => <p className="border-t border-zinc-100 py-3 text-sm dark:border-white/10" key={product._id}>{product.name} - {product.stock} left</p>)}</div>
      </div>
    </AdminLayout>
  );
}
