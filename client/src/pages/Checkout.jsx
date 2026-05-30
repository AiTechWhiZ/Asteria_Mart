import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { api, currency } from "../lib/api.js";

export default function Checkout() {
  const { items, subtotal, clear } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const total =
    subtotal + (subtotal > 5000 ? 0 : 149) + Math.round(subtotal * 0.18);

  async function pay(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setLoading(true);
    try {
      const { order } = await api("/orders", {
        method: "POST",
        body: JSON.stringify({ shippingAddress: Object.fromEntries(form) }),
      });
      toast.loading("Payment is processing...");
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await api("/payments/mock", {
        method: "POST",
        body: JSON.stringify({ orderId: order._id }),
      });
      toast.dismiss();
      toast.success("Order placed successfully!");
      clear();
      navigate("/profile");
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section className="section">
      <h1 className="mb-8 text-4xl font-black">Checkout</h1>
      <form onSubmit={pay} className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="card p-6">
          <p className="mb-5 text-xl font-black">Shipping details</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {["name", "phone", "line1", "city", "state", "pincode"].map(
              (name) => (
                <input
                  key={name}
                  required
                  name={name}
                  className="input"
                  placeholder={
                    name === "line1"
                      ? "Address"
                      : name[0].toUpperCase() + name.slice(1)
                  }
                />
              ),
            )}
          </div>
        </div>
        <aside className="glass h-fit rounded-lg p-6">
          <p className="text-xl font-black">Payment</p>
          <p className="mt-3 text-sm text-zinc-500">
            {items.length} items, Auto pay demo
          </p>
          <p className="mt-6 flex justify-between text-lg font-black">
            Total <span>{currency(total)}</span>
          </p>
          <button
            disabled={!items.length || loading}
            className="btn-primary mt-6 w-full disabled:opacity-50"
          >
            {loading ? "Processing..." : "Pay with Auto Pay"}
          </button>
        </aside>
      </form>
    </section>
  );
}
