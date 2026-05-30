import { createContext, useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../lib/api.js";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() =>
    JSON.parse(localStorage.getItem("cart") || "[]"),
  );

  function persist(next) {
    setItems(next);
    localStorage.setItem("cart", JSON.stringify(next));
  }

  async function sync() {
    try {
      const { cart } = await api("/cart");
      persist(
        cart.items.map((item) => ({
          product: item.product,
          quantity: item.quantity,
        })),
      );
    } catch {
      return items;
    }
  }

  async function add(product, quantity = 1) {
    const existing = items.find((item) => item.product._id === product._id);
    const next = existing
      ? items.map((item) =>
          item.product._id === product._id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      : [...items, { product, quantity }];
    persist(next);
    toast.success("Added to cart");
    api("/cart", {
      method: "POST",
      body: JSON.stringify({ productId: product._id, quantity }),
    }).catch(() => {});
  }

  function update(productId, quantity) {
    const next = items.map((item) =>
      item.product._id === productId
        ? { ...item, quantity: Math.max(1, quantity) }
        : item,
    );
    persist(next);
    api(`/cart/${productId}`, {
      method: "PUT",
      body: JSON.stringify({ quantity }),
    }).catch(() => {});
  }

  function remove(productId) {
    persist(items.filter((item) => item.product._id !== productId));
    api(`/cart/${productId}`, { method: "DELETE" }).catch(() => {});
    toast.success("Removed from cart");
  }

  function clear() {
    persist([]);
    api("/cart", { method: "DELETE" }).catch(() => {});
  }

  const subtotal = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0,
  );
  const value = useMemo(
    () => ({
      items,
      subtotal,
      add,
      update,
      remove,
      sync,
      clear,
      count: items.reduce((sum, item) => sum + item.quantity, 0),
    }),
    [items, subtotal],
  );
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
