import { createContext, useContext, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { api } from "../lib/api.js";

const WishlistContext = createContext(null);

export function WishlistProvider({ children }) {
  const [products, setProducts] = useState(() => JSON.parse(localStorage.getItem("wishlist") || "[]"));

  function persist(next) {
    setProducts(next);
    localStorage.setItem("wishlist", JSON.stringify(next));
  }

  function toggle(product) {
    const exists = products.some((item) => item._id === product._id);
    persist(exists ? products.filter((item) => item._id !== product._id) : [...products, product]);
    api(`/wishlist/${product._id}`, { method: exists ? "DELETE" : "POST" }).catch(() => {});
    toast.success(exists ? "Removed from wishlist" : "Saved to wishlist");
  }

  const value = useMemo(() => ({ products, toggle, isSaved: (id) => products.some((item) => item._id === id) }), [products]);
  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export const useWishlist = () => useContext(WishlistContext);
