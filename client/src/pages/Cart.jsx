import { Minus, Plus, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { currency } from "../lib/api.js";

export default function Cart() {
  const { items, subtotal, update, remove } = useCart();
  const shipping = subtotal > 5000 || subtotal === 0 ? 0 : 149;
  const tax = Math.round(subtotal * 0.18);

  return (
    <section className="section">
      <h1 className="mb-8 text-4xl font-black">Shopping cart</h1>
      <div className="grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="grid gap-4">
          {items.length === 0 && (
            <div className="card p-8 text-center">
              <p className="font-bold">Your cart is empty.</p>
              <Link className="btn-primary mt-4" to="/products">
                Shop now
              </Link>
            </div>
          )}
          {items.map(({ product, quantity }) => (
            <div
              className="card grid items-center gap-4 p-4 sm:grid-cols-[120px_minmax(0,1fr)_auto]"
              key={product._id}
            >
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="aspect-square rounded-lg object-cover"
              />
              <div className="min-w-0">
                <p className="font-black">{product.name}</p>
                <p className="mt-1 text-sm text-zinc-500">{product.category}</p>
                <p className="mt-3 font-bold">{currency(product.price)}</p>
              </div>
              <div className="flex items-center gap-2 self-center">
                <button
                  className="btn-soft !p-2"
                  onClick={() => update(product._id, quantity - 1)}
                >
                  <Minus size={16} />
                </button>
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-zinc-100 font-bold dark:bg-white/10">
                  {quantity}
                </span>
                <button
                  className="btn-soft !p-2"
                  onClick={() => update(product._id, quantity + 1)}
                >
                  <Plus size={16} />
                </button>
                <button
                  className="btn-soft !p-2 text-rose-600"
                  onClick={() => remove(product._id)}
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
        <aside className="glass h-fit rounded-lg p-6">
          <p className="text-xl font-black">Order summary</p>
          <div className="mt-5 space-y-3 text-sm">
            <p className="flex justify-between">
              Subtotal <b>{currency(subtotal)}</b>
            </p>
            <p className="flex justify-between">
              Shipping <b>{currency(shipping)}</b>
            </p>
            <p className="flex justify-between">
              Tax <b>{currency(tax)}</b>
            </p>
          </div>
          <p className="mt-5 flex justify-between border-t border-zinc-200 pt-5 text-lg font-black dark:border-white/10">
            Total <span>{currency(subtotal + shipping + tax)}</span>
          </p>
          <Link to="/checkout" className="btn-primary mt-6 w-full">
            Checkout
          </Link>
        </aside>
      </div>
    </section>
  );
}
