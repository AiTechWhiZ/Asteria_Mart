import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Signup() {
  const { signup, loading } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  async function submit(event) {
    event.preventDefault();
    try {
      await signup(form.name, form.email, form.password);
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <section className="premium-gradient grid min-h-[78vh] place-items-center px-4 py-12">
      <form onSubmit={submit} className="glass w-full max-w-md rounded-lg p-8 shadow-glow">
        <h1 className="text-3xl font-black">Create account</h1>
        <input className="input mt-6" placeholder="Name" value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} />
        <input className="input mt-3" type="email" placeholder="Email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} />
        <input className="input mt-3" type="password" placeholder="Password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} />
        <button className="btn-primary mt-5 w-full" disabled={loading}>{loading ? "Creating..." : "Signup"}</button>
        <p className="mt-5 text-center text-sm">Already registered? <Link className="font-bold" to="/login">Login</Link></p>
      </form>
    </section>
  );
}
