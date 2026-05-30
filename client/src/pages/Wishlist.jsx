import ProductCard from "../components/ProductCard.jsx";
import { useWishlist } from "../context/WishlistContext.jsx";

export default function Wishlist() {
  const { products } = useWishlist();
  return (
    <section className="section">
      <h1 className="mb-8 text-4xl font-black">Wishlist</h1>
      {products.length === 0 ? <div className="card p-8 text-center font-bold">Saved products will appear here.</div> : <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">{products.map((product) => <ProductCard key={product._id} product={product} />)}</div>}
    </section>
  );
}
