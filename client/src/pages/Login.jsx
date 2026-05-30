import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Login() {
  const { login, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [form, setForm] = useState({ email: "", password: "" });

  async function submit(event) {
    event.preventDefault();
    try {
      await login(form.email, form.password);
      navigate(location.state?.from?.pathname || "/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <section className="premium-gradient grid min-h-[78vh] place-items-center px-4 py-12">
      <form onSubmit={submit} className="glass w-full max-w-md rounded-lg p-8 shadow-glow">
        <h1 className="text-3xl font-black">Login</h1>
        <p className="mt-2 text-sm text-zinc-500">Access cart, wishlist, profile, orders and admin tools.</p>
        <input className="input mt-6" type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        <input className="input mt-3" type="password" placeholder="Password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />
        <button className="btn-primary mt-5 w-full" disabled={loading}>{loading ? "Signing in..." : "Login"}</button>
        <div className="mt-5 flex justify-between text-sm font-bold"><Link to="/signup">Create account</Link><Link to="/forgot-password">Forgot password?</Link></div>
      </form>
    </section>
  );
}
