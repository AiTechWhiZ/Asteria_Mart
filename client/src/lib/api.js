const API_URL = import.meta.env.VITE_API_URL || "/api";

export async function api(path, options = {}) {
  const token = localStorage.getItem("token");
  const headers = { "Content-Type": "application/json", ...options.headers };
  if (token) headers.Authorization = `Bearer ${token}`;
  const response = await fetch(`${API_URL}${path}`, { ...options, headers });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.message || "Request failed");
  return data;
}

export function currency(value) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value || 0);
}

export const fallbackProducts = [
  {
    _id: "local-1",
    name: "Aura Wireless Headphones",
    slug: "aura-wireless-headphones",
    category: "Electronics",
    subCategory: "Earbuds",
    price: 12999,
    mrp: 15999,
    rating: 4.8,
    stock: 18,
    featured: true,
    description:
      "Noise cancelling headphones with plush memory foam and studio-grade warmth.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    _id: "local-2",
    name: "Luxe Ceramic Watch",
    slug: "luxe-ceramic-watch",
    category: "Fashion",
    subCategory: "Watches",
    price: 24999,
    mrp: 31999,
    rating: 4.7,
    stock: 12,
    featured: true,
    description:
      "Ceramic smartwatch with sapphire glass, health tracking and an elevated finish.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
  {
    _id: "local-3",
    name: "Drift Travel Backpack",
    slug: "drift-travel-backpack",
    category: "Fashion",
    subCategory: "Bags",
    price: 8999,
    mrp: 11999,
    rating: 4.6,
    stock: 27,
    featured: true,
    description:
      "Weatherproof travel backpack with a laptop vault and premium accents.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=900&q=80",
      },
    ],
  },
];
