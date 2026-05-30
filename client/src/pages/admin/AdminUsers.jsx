import { useEffect, useState } from "react";
import AdminLayout from "../../components/AdminLayout.jsx";
import { api } from "../../lib/api.js";

export default function AdminUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => { api("/admin/users").then(({ users }) => setUsers(users)).catch(() => {}); }, []);
  return (
    <AdminLayout title="Users">
      <div className="card overflow-hidden">
        {users.map((user) => <div className="grid gap-2 border-b border-zinc-100 p-4 dark:border-white/10 md:grid-cols-3" key={user._id}><b>{user.name}</b><span>{user.email}</span><span className="font-bold">{user.role}</span></div>)}
      </div>
    </AdminLayout>
  );
}
