import { useState } from "react";
import toast from "react-hot-toast";
import { api } from "../lib/api.js";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  async function submit(event) {
    event.preventDefault();
    try {
      const data = await api("/auth/forgot-password", { method: "POST", body: JSON.stringify({ email }) });
      toast.success(data.message);
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <section className="premium-gradient grid min-h-[78vh] place-items-center px-4 py-12">
      <form onSubmit={submit} className="glass w-full max-w-md rounded-lg p-8">
        <h1 className="text-3xl font-black">Forgot password</h1>
        <p className="mt-2 text-sm text-zinc-500">The API creates a temporary reset token. Wire your email provider for production delivery.</p>
        <input className="input mt-6" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
        <button className="btn-primary mt-5 w-full">Send reset link</button>
      </form>
    </section>
  );
}
