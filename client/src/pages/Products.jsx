import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard.jsx";
import SkeletonGrid from "../components/SkeletonGrid.jsx";
import { api, fallbackProducts } from "../lib/api.js";

export default function Products() {
  const [params, setParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    "All",
    "Electronics",
    "Fashion",
    "Home & Living",
    "Beauty & Care",
    "Gaming",
    "Gadgets & Accessories",
  ]);
  const [subCategories, setSubCategories] = useState(["All"]);
  const [loading, setLoading] = useState(true);
  const filters = {
    search: params.get("search") || "",
    category: params.get("category") || "All",
    subCategory: params.get("subCategory") || "All",
    maxPrice: params.get("maxPrice") || "1000000",
    rating: params.get("rating") || "0",
  };

  useEffect(() => {
    setLoading(true);
    api(`/products?${params.toString()}`)
      .then(({ products, categories, subCategories }) => {
        setProducts(products);
        setCategories(["All", ...categories]);
        setSubCategories(["All", ...(subCategories || [])]);
      })
      .catch(() => setProducts(fallbackProducts))
      .finally(() => setLoading(false));
  }, [params]);

  function update(key, value) {
    const next = new URLSearchParams(params);
    value ? next.set(key, value) : next.delete(key);
    setParams(next);
  }

  const countLabel = useMemo(
    () => `${products.length} products found`,
    [products.length],
  );

  return (
    <section className="section">
      <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[.25em] text-teal-600">
            Collection
          </p>
          <h1 className="text-4xl font-black">Premium catalog</h1>
          <p className="mt-2 text-zinc-500">{countLabel}</p>
        </div>
        <div className="glass flex min-w-full items-center gap-2 rounded-full px-4 py-3 lg:min-w-96">
          <Search size={18} />
          <input
            className="w-full bg-transparent text-sm outline-none"
            value={filters.search}
            onChange={(event) => update("search", event.target.value)}
            placeholder="Search by name, category or tag"
          />
        </div>
      </div>
      <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
        <aside className="glass h-fit rounded-lg p-5">
          <p className="mb-4 flex items-center gap-2 font-black">
            <SlidersHorizontal size={18} /> Filters
          </p>
          <label className="text-sm font-bold">Category</label>
          <select
            className="input mt-2"
            value={filters.category}
            onChange={(event) => update("category", event.target.value)}
          >
            {categories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="mt-5 block text-sm font-bold">Max price</label>
          <input
            type="range"
            min="0"
            max="1000000"
            step="1000"
            value={filters.maxPrice}
            onChange={(event) => update("maxPrice", event.target.value)}
            className="mt-3 w-full accent-teal-600"
          />
          <p className="text-sm font-bold">
            Under Rs {Number(filters.maxPrice).toLocaleString("en-IN")}
          </p>
          <label className="mt-5 block text-sm font-bold">Sub category</label>
          <select
            className="input mt-2"
            value={filters.subCategory}
            onChange={(event) => update("subCategory", event.target.value)}
          >
            {subCategories.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <label className="mt-5 block text-sm font-bold">Minimum rating</label>
          <select
            className="input mt-2"
            value={filters.rating}
            onChange={(event) => update("rating", event.target.value)}
          >
            <option value="0">Any</option>
            <option value="4">4+ stars</option>
            <option value="4.5">4.5+ stars</option>
          </select>
        </aside>
        {loading ? (
          <SkeletonGrid />
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
