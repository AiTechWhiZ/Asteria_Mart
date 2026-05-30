import { LogOut, PackageCheck, UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import { api, currency } from "../lib/api.js";

export default function Profile() {
  const { user, logout } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api("/orders").then(({ orders }) => setOrders(orders)).catch(() => setOrders([]));
  }, []);

  return (
    <section className="section">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
        <div><p className="text-sm font-bold uppercase tracking-[.25em] text-teal-600">Account</p><h1 className="text-4xl font-black">Profile</h1></div>
        <button className="btn-soft" onClick={logout}><LogOut size={18} /> Logout</button>
      </div>
      <div className="grid gap-6 lg:grid-cols-[340px_1fr]">
        <aside className="glass rounded-lg p-6">
          <UserRound className="mb-4 text-teal-600" size={40} />
          <p className="text-2xl font-black">{user?.name}</p>
          <p className="text-zinc-500">{user?.email}</p>
          <p className="mt-4 inline-flex rounded-full bg-zinc-950 px-3 py-1 text-xs font-bold text-white dark:bg-white dark:text-zinc-950">{user?.role}</p>
        </aside>
        <div className="card p-6">
          <p className="mb-5 flex items-center gap-2 text-xl font-black"><PackageCheck /> Order history</p>
          <div className="space-y-3">
            {orders.length === 0 && <p className="text-zinc-500">No orders yet.</p>}
            {orders.map((order) => <div key={order._id} className="rounded-lg border border-zinc-200 p-4 dark:border-white/10"><p className="font-bold">Order #{order._id.slice(-8)}</p><p className="text-sm text-zinc-500">{order.status} - {currency(order.total)}</p></div>)}
          </div>
        </div>
      </div>
    </section>
  );
}
