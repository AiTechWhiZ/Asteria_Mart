import toast from "react-hot-toast";
import { useEffect, useRef, useState } from "react";
import AdminLayout from "../../components/AdminLayout.jsx";
import { api, currency, fallbackProducts } from "../../lib/api.js";

const empty = {
  name: "",
  category: "",
  subCategory: "",
  brand: "",
  price: "",
  rating: "",
  stock: "",
  description: "",
  images: [{ url: "" }],
};

export default function AdminProducts() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState(empty);
  const [editing, setEditing] = useState(null);
  const listRef = useRef(null);
  const newProductRef = useRef(null);
  const [newProductId, setNewProductId] = useState(null);

  useEffect(() => {
    api("/products")
      .then(({ products }) => setProducts(products))
      .catch(() => setProducts(fallbackProducts));
  }, []);

  async function save(event) {
    event.preventDefault();
    if (
      !form.name ||
      !form.category ||
      !form.price ||
      !form.stock ||
      !form.description
    ) {
      toast.error("Please fill in all required fields, including price.");
      return;
    }
    const payload = {
      ...form,
      price: Number(form.price),
      rating: form.rating !== "" ? Number(form.rating) : undefined,
      stock: Number(form.stock),
      images: [{ url: form.images?.[0]?.url }],
    };
    if (Number.isNaN(payload.price) || Number.isNaN(payload.stock)) {
      toast.error("Price and stock must be valid numbers.");
      return;
    }
    try {
      const data = editing
        ? await api(`/products/${editing}`, {
            method: "PUT",
            body: JSON.stringify(payload),
          })
        : await api("/products", {
            method: "POST",
            body: JSON.stringify(payload),
          });
      setProducts(
        editing
          ? products.map((p) => (p._id === editing ? data.product : p))
          : [data.product, ...products],
      );
      setForm(empty);
      setEditing(null);
      toast.success("Product saved");
      if (!editing) {
        setNewProductId(data.product._id);
      }
    } catch (error) {
      toast.error(error.message);
    }
  }

  async function remove(id) {
    await api(`/products/${id}`, { method: "DELETE" });
    setProducts(products.filter((product) => product._id !== id));
  }

  useEffect(() => {
    if (newProductId && newProductRef.current) {
      newProductRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setNewProductId(null);
    }
  }, [newProductId]);

  return (
    <AdminLayout title="Products">
      <div className="grid gap-6 xl:grid-cols-[380px_1fr]">
        <form onSubmit={save} className="glass h-fit rounded-lg p-5">
          <p className="mb-4 text-xl font-black">
            {editing ? "Edit product" : "Add product"}
          </p>
          {["name", "category", "price", "stock"].map((key) => (
            <input
              key={key}
              type={key === "price" || key === "stock" ? "number" : "text"}
              min={key === "price" || key === "stock" ? "0" : undefined}
              required
              className="input mb-3"
              placeholder={key}
              value={form[key]}
              onChange={(e) => setForm({ ...form, [key]: e.target.value })}
            />
          ))}
          <input
            className="input mb-3"
            placeholder="Sub category"
            value={form.subCategory}
            onChange={(e) => setForm({ ...form, subCategory: e.target.value })}
          />
          <input
            className="input mb-3"
            placeholder="Brand"
            value={form.brand}
            onChange={(e) => setForm({ ...form, brand: e.target.value })}
          />
          <input
            className="input mb-3"
            type="number"
            min="0"
            max="5"
            step="0.1"
            placeholder="Rating"
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
          />
          <input
            className="input mb-3"
            placeholder="Image URL or Cloudinary URL"
            value={form.images?.[0]?.url || ""}
            onChange={(e) =>
              setForm({ ...form, images: [{ url: e.target.value }] })
            }
          />
          <textarea
            className="input mb-3 min-h-28"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          <button className="btn-primary w-full">Save product</button>
        </form>
        <div ref={listRef} className="grid gap-3 pr-1">
          {products.map((product) => (
            <div
              ref={product._id === newProductId ? newProductRef : null}
              className="card flex flex-wrap items-center gap-4 p-4"
              key={product._id}
            >
              <img
                src={product.images?.[0]?.url}
                className="h-16 w-16 rounded-lg object-cover"
              />
              <div className="mr-auto min-w-0">
                <p className="font-black">{product.name}</p>
                <p className="text-sm text-zinc-500">
                  {product.price
                    ? `${currency(product.price)}${product.subCategory ? ` · ${product.subCategory}` : ""}`
                    : ""}
                </p>
                <p className="text-sm text-zinc-500 mt-1">
                  {product.rating !== undefined
                    ? `${product.rating.toFixed(1)} ★`
                    : ""}
                </p>
              </div>
              <button
                className="btn-soft"
                onClick={() => {
                  setEditing(product._id);
                  setForm(product);
                }}
              >
                Edit
              </button>
              <button
                className="btn-soft text-rose-600"
                onClick={() => remove(product._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
