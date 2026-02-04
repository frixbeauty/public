"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { auth } from "../../../lib/firebase";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push("/admin/requests");
    } catch (err) {
      console.error(err);
      setError("Login failed. Check your credentials.");
    }
  };

  return (
    <main className="container" style={{ padding: "80px 0" }}>
      <div className="card" style={{ maxWidth: 420, margin: "0 auto" }}>
        <p className="small-label">Admin access</p>
        <h1 className="section-title">Sign in</h1>
        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
          <label style={{ display: "grid", gap: 6 }}>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="card"
              style={{ padding: 10 }}
              required
            />
          </label>
          <label style={{ display: "grid", gap: 6 }}>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="card"
              style={{ padding: 10 }}
              required
            />
          </label>
          {error && <p style={{ color: "#b42318", margin: 0 }}>{error}</p>}
          <button type="submit" className="badge" style={{ padding: "10px 16px" }}>
            Login
          </button>
        </form>
      </div>
    </main>
  );
}
