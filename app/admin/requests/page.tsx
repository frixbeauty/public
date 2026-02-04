"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  collection,
  getDocs,
  orderBy,
  query,
  where,
  QueryConstraint
} from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { RequestDoc, RequestStatus, ServiceType } from "../../../lib/models";
import { AdminGuard } from "../../../components/AdminGuard";

const statuses: RequestStatus[] = [
  "Submitted",
  "Reviewing",
  "OptionsSent",
  "BookingInProgress",
  "Confirmed",
  "Failed"
];

export default function AdminRequestsPage() {
  const [items, setItems] = useState<Array<{ id: string; data: RequestDoc }>>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<RequestStatus | "">("");
  const [districtFilter, setDistrictFilter] = useState("");
  const [serviceFilter, setServiceFilter] = useState<ServiceType | "">("");
  const [dateFilter, setDateFilter] = useState("");

  const filters = useMemo(() => {
    const constraints: QueryConstraint[] = [];
    if (statusFilter) constraints.push(where("status", "==", statusFilter));
    if (districtFilter) constraints.push(where("guest.district", "==", districtFilter));
    if (serviceFilter) constraints.push(where("guest.serviceType", "==", serviceFilter));
    if (dateFilter) constraints.push(where("guest.date", "==", dateFilter));
    constraints.push(orderBy("createdAt", "desc"));
    return constraints;
  }, [statusFilter, districtFilter, serviceFilter, dateFilter]);

  useEffect(() => {
    const load = async () => {
      setLoading(true);
      const q = query(collection(db, "requests"), ...filters);
      const snap = await getDocs(q);
      const rows = snap.docs.map((docSnap) => ({
        id: docSnap.id,
        data: docSnap.data() as RequestDoc
      }));
      setItems(rows);
      setLoading(false);
    };
    load();
  }, [filters]);

  return (
    <AdminGuard>
      <main className="container" style={{ padding: "40px 0" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <p className="small-label">Admin</p>
            <h1 className="section-title">Requests</h1>
          </div>
          <Link href="/admin/directory" className="badge">
            Manage shops
          </Link>
        </div>

        <div className="card" style={{ marginTop: 16, display: "grid", gap: 12 }}>
          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
            <label style={{ display: "grid", gap: 6 }}>
              Status
              <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value as RequestStatus | "")}>
                <option value="">All</option>
                {statuses.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>
            </label>
            <label style={{ display: "grid", gap: 6 }}>
              District
              <input value={districtFilter} onChange={(e) => setDistrictFilter(e.target.value)} />
            </label>
            <label style={{ display: "grid", gap: 6 }}>
              Service
              <select value={serviceFilter} onChange={(e) => setServiceFilter(e.target.value as ServiceType | "")}>
                <option value="">All</option>
                <option value="hair">Hair</option>
                <option value="makeup">Makeup</option>
                <option value="nail">Nail</option>
                <option value="aesthetic">Aesthetic</option>
              </select>
            </label>
            <label style={{ display: "grid", gap: 6 }}>
              Date
              <input type="date" value={dateFilter} onChange={(e) => setDateFilter(e.target.value)} />
            </label>
          </div>
        </div>

        <div style={{ marginTop: 20, display: "grid", gap: 12 }}>
          {loading && <p>Loading...</p>}
          {!loading && items.length === 0 && <p>No requests yet.</p>}
          {items.map((item) => (
            <Link key={item.id} href={`/admin/requests/${item.id}`} className="card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div>
                  <strong>{item.data.guest.serviceType.toUpperCase()}</strong> · {item.data.guest.district}
                  <div style={{ fontSize: 14, marginTop: 4 }}>{item.data.guest.date} / {item.data.guest.timePref}</div>
                </div>
                <span className="badge">{item.data.status}</span>
              </div>
            </Link>
          ))}
        </div>
      </main>
    </AdminGuard>
  );
}
