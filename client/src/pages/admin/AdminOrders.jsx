import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout.jsx";
import { api, currency } from "../../lib/api.js";

export default function AdminOrders() {
  const [orders, setOrders] = useState([]);
  useEffect(() => { api("/admin/orders").then(({ orders }) => setOrders(orders)).catch(() => {}); }, []);
  return (
    <AdminLayout title="Orders">
      <div className="card overflow-hidden">
        {orders.map((order) => <div className="grid gap-2 border-b border-zinc-100 p-4 dark:border-white/10 md:grid-cols-4" key={order._id}><b>#{order._id.slice(-8)}</b><span>{order.user?.email}</span><span>{order.status}</span><span className="font-bold">{currency(order.total)}</span></div>)}
      </div>
    </AdminLayout>
  );
}
