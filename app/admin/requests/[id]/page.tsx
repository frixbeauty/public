"use client";

import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../../../lib/firebase";
import type { Offer, RequestDoc, RequestStatus, ShopDoc } from "../../../../lib/models";
import { AdminGuard } from "../../../../components/AdminGuard";
import { templates } from "../../../../lib/templates";

const statuses: RequestStatus[] = [
  "Submitted",
  "Reviewing",
  "OptionsSent",
  "BookingInProgress",
  "Confirmed",
  "Failed"
];

const emptyOffer = (rank: 1 | 2 | 3): Offer => ({
  rank,
  shopId: "",
  title: "",
  rationale: "",
  estPrice: "",
  estDuration: "",
  availability: "pending",
  bookingNote: ""
});

export default function AdminRequestDetailPage({ params }: { params: { id: string } }) {
  const [request, setRequest] = useState<RequestDoc | null>(null);
  const [shops, setShops] = useState<Array<{ id: string; data: ShopDoc }>>([]);
  const [saving, setSaving] = useState(false);
  const [guestMessage, setGuestMessage] = useState("");
  const [internalMemo, setInternalMemo] = useState("");
  const [status, setStatus] = useState<RequestStatus>("Submitted");
  const [offers, setOffers] = useState<Offer[]>([emptyOffer(1), emptyOffer(2), emptyOffer(3)]);

  useEffect(() => {
    const load = async () => {
      const snap = await getDoc(doc(db, "requests", params.id));
      if (snap.exists()) {
        const data = snap.data() as RequestDoc;
        setRequest(data);
        setGuestMessage(data.guestMessage ?? "");
        setInternalMemo(data.admin.internalMemo ?? "");
        setStatus(data.status);
        const seeded = [1, 2, 3].map((rank) => data.offers.find((o) => o.rank === rank) || emptyOffer(rank as 1 | 2 | 3));
        setOffers(seeded);
      }

      const shopSnap = await getDocs(collection(db, "shops"));
      setShops(shopSnap.docs.map((docSnap) => ({ id: docSnap.id, data: docSnap.data() as ShopDoc })));
    };
    load();
  }, [params.id]);

  const updateOffer = (rank: number, field: keyof Offer, value: string) => {
    setOffers((prev) => prev.map((offer) => (offer.rank === rank ? { ...offer, [field]: value } : offer)));
  };

  const handleSave = async () => {
    if (!request) return;
    setSaving(true);
    try {
      await updateDoc(doc(db, "requests", params.id), {
        status,
        offers: offers.filter((offer) => offer.shopId || offer.title || offer.rationale),
        guestMessage,
        admin: {
          internalMemo
        },
        updatedAt: new Date().toISOString()
      });
      alert("Saved.");
    } catch (error) {
      console.error(error);
      alert("Save failed.");
    } finally {
      setSaving(false);
    }
  };

  if (!request) {
    return (
      <AdminGuard>
        <main className="container" style={{ padding: "40px 0" }}>Loading...</main>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <main className="container" style={{ padding: "40px 0" }}>
        <div className="card" style={{ marginBottom: 20 }}>
          <p className="small-label">Request detail</p>
          <h1 className="section-title">{request.guest.serviceType.toUpperCase()} · {request.guest.district}</h1>
          <div style={{ display: "grid", gap: 6 }}>
            <div>Date: {request.guest.date}</div>
            <div>Time: {request.guest.timePref}</div>
            <div>Style: {request.guest.styleText}</div>
            {request.guest.refUrl && <div>Reference: {request.guest.refUrl}</div>}
          </div>
        </div>

        <div className="card" style={{ display: "grid", gap: 16 }}>
          <label style={{ display: "grid", gap: 6 }}>
            Status
            <select value={status} onChange={(e) => setStatus(e.target.value as RequestStatus)}>
              {statuses.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <div style={{ display: "grid", gap: 12 }}>
            <p className="small-label">Offers (1 main + 2 alternatives)</p>
            {offers.map((offer) => (
              <div key={offer.rank} className="card" style={{ background: offer.rank === 1 ? "#fff4ea" : "#fffaf5" }}>
                <div style={{ display: "grid", gap: 10 }}>
                  <strong>{offer.rank === 1 ? "Main option" : `Alternative ${offer.rank - 1}`}</strong>
                  <label style={{ display: "grid", gap: 6 }}>
                    Shop / Designer
                    <select value={offer.shopId} onChange={(e) => updateOffer(offer.rank, "shopId", e.target.value)}>
                      <option value="">Select</option>
                      {shops.map((shop) => (
                        <option key={shop.id} value={shop.id}>
                          {shop.data.name} ({shop.data.district})
                        </option>
                      ))}
                    </select>
                  </label>
                  <label style={{ display: "grid", gap: 6 }}>
                    Title
                    <input value={offer.title} onChange={(e) => updateOffer(offer.rank, "title", e.target.value)} />
                  </label>
                  <label style={{ display: "grid", gap: 6 }}>
                    Rationale (one line)
                    <input value={offer.rationale} onChange={(e) => updateOffer(offer.rank, "rationale", e.target.value)} />
                  </label>
                  <div style={{ display: "grid", gap: 10, gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
                    <label style={{ display: "grid", gap: 6 }}>
                      Estimated price
                      <input value={offer.estPrice} onChange={(e) => updateOffer(offer.rank, "estPrice", e.target.value)} />
                    </label>
                    <label style={{ display: "grid", gap: 6 }}>
                      Estimated duration
                      <input value={offer.estDuration} onChange={(e) => updateOffer(offer.rank, "estDuration", e.target.value)} />
                    </label>
                  </div>
                  <label style={{ display: "grid", gap: 6 }}>
                    Availability check
                    <select value={offer.availability} onChange={(e) => updateOffer(offer.rank, "availability", e.target.value)}>
                      <option value="pending">pending</option>
                      <option value="available">available</option>
                      <option value="limited">limited</option>
                      <option value="unavailable">unavailable</option>
                    </select>
                  </label>
                  <label style={{ display: "grid", gap: 6 }}>
                    Booking note
                    <textarea value={offer.bookingNote} onChange={(e) => updateOffer(offer.rank, "bookingNote", e.target.value)} />
                  </label>
                </div>
              </div>
            ))}
          </div>

          <label style={{ display: "grid", gap: 6 }}>
            Internal memo (not visible to guest)
            <textarea value={internalMemo} onChange={(e) => setInternalMemo(e.target.value)} />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            Guest message
            <textarea value={guestMessage} onChange={(e) => setGuestMessage(e.target.value)} />
          </label>

          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            <button
              type="button"
              className="badge"
              onClick={() => setGuestMessage(templates.intake(request))}
            >
              Use intake template
            </button>
            <button
              type="button"
              className="badge"
              onClick={() => setGuestMessage(templates.optionsSent(request))}
            >
              Use options template
            </button>
            <button
              type="button"
              className="badge"
              onClick={() => setGuestMessage(templates.confirmed(request))}
            >
              Use confirmed template
            </button>
          </div>

          <button
            type="button"
            className="badge"
            onClick={handleSave}
            disabled={saving}
            style={{ padding: "10px 16px" }}
          >
            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      </main>
    </AdminGuard>
  );
}
