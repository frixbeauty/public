"use client";

import { useEffect, useState } from "react";
import {
  collection,
  addDoc,
  deleteDoc,
  doc,
  getDocs,
  updateDoc
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { ShopDoc, ServiceType } from "../../../lib/models";
import { AdminGuard } from "../../../components/AdminGuard";

const blankShop: Omit<ShopDoc, "createdAt"> = {
  name: "",
  category: "hair",
  district: "",
  address: "",
  instagram: "",
  languages: ["EN"],
  tags: [],
  risk_specialties: [],
  price_min: 0,
  price_max: 0,
  rating_hint: ""
};

export default function AdminDirectoryPage() {
  const [shops, setShops] = useState<Array<{ id: string; data: ShopDoc }>>([]);
  const [form, setForm] = useState(blankShop);
  const [editingId, setEditingId] = useState<string | null>(null);

  const load = async () => {
    const snap = await getDocs(collection(db, "shops"));
    setShops(snap.docs.map((docSnap) => ({ id: docSnap.id, data: docSnap.data() as ShopDoc })));
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name) return;

    if (editingId) {
      await updateDoc(doc(db, "shops", editingId), {
        ...form
      });
    } else {
      await addDoc(collection(db, "shops"), {
        ...form,
        createdAt: new Date().toISOString()
      });
    }

    setForm(blankShop);
    setEditingId(null);
    load();
  };

  const startEdit = (id: string, data: ShopDoc) => {
    setEditingId(id);
    setForm({
      ...data,
      languages: data.languages || [],
      tags: data.tags || [],
      risk_specialties: data.risk_specialties || []
    });
  };

  const removeShop = async (id: string) => {
    if (!confirm("Delete this shop?")) return;
    await deleteDoc(doc(db, "shops", id));
    load();
  };

  return (
    <AdminGuard>
      <main className="container" style={{ padding: "40px 0" }}>
        <h1 className="section-title">Shop & Designer Directory</h1>
        <div className="card" style={{ marginBottom: 20 }}>
          <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
              <label style={{ display: "grid", gap: 6 }}>
                Name
                <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
              </label>
              <label style={{ display: "grid", gap: 6 }}>
                Category
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value as ServiceType })}
                >
                  <option value="hair">Hair</option>
                  <option value="makeup">Makeup</option>
                  <option value="nail">Nail</option>
                  <option value="aesthetic">Aesthetic</option>
                </select>
              </label>
              <label style={{ display: "grid", gap: 6 }}>
                District
                <input value={form.district} onChange={(e) => setForm({ ...form, district: e.target.value })} />
              </label>
            </div>
            <label style={{ display: "grid", gap: 6 }}>
              Address
              <input value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} />
            </label>
            <label style={{ display: "grid", gap: 6 }}>
              Instagram
              <input value={form.instagram} onChange={(e) => setForm({ ...form, instagram: e.target.value })} />
            </label>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
              <label style={{ display: "grid", gap: 6 }}>
                Languages (comma)
                <input
                  value={form.languages.join(", ")}
                  onChange={(e) => setForm({ ...form, languages: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
                />
              </label>
              <label style={{ display: "grid", gap: 6 }}>
                Tags (comma)
                <input
                  value={form.tags.join(", ")}
                  onChange={(e) => setForm({ ...form, tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
                />
              </label>
              <label style={{ display: "grid", gap: 6 }}>
                Risk specialties (comma)
                <input
                  value={form.risk_specialties.join(", ")}
                  onChange={(e) => setForm({ ...form, risk_specialties: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })}
                />
              </label>
            </div>
            <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
              <label style={{ display: "grid", gap: 6 }}>
                Min price
                <input
                  type="number"
                  value={form.price_min}
                  onChange={(e) => setForm({ ...form, price_min: Number(e.target.value) })}
                />
              </label>
              <label style={{ display: "grid", gap: 6 }}>
                Max price
                <input
                  type="number"
                  value={form.price_max}
                  onChange={(e) => setForm({ ...form, price_max: Number(e.target.value) })}
                />
              </label>
            </div>
            <label style={{ display: "grid", gap: 6 }}>
              Rating hint
              <input value={form.rating_hint} onChange={(e) => setForm({ ...form, rating_hint: e.target.value })} />
            </label>
            <button type="submit" className="badge" style={{ padding: "10px 16px" }}>
              {editingId ? "Update shop" : "Add shop"}
            </button>
          </form>
        </div>

        <div style={{ display: "grid", gap: 12 }}>
          {shops.map((shop) => (
            <div key={shop.id} className="card" style={{ display: "grid", gap: 8 }}>
              <strong>{shop.data.name}</strong>
              <div style={{ fontSize: 14 }}>{shop.data.category} · {shop.data.district}</div>
              <div style={{ fontSize: 14 }}>{shop.data.address}</div>
              <div style={{ display: "flex", gap: 8 }}>
                <button className="badge" type="button" onClick={() => startEdit(shop.id, shop.data)}>
                  Edit
                </button>
                <button className="badge" type="button" onClick={() => removeShop(shop.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </AdminGuard>
  );
}
