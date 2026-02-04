"use client";

import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import type { RequestDoc, ShopDoc } from "../../../lib/models";
import { OfferCard } from "../../../components/OfferCard";
import { StatusTimeline } from "../../../components/StatusTimeline";

export default function RequestDetailPage({ params }: { params: { token: string } }) {
  const [request, setRequest] = useState<RequestDoc | null>(null);
  const [shops, setShops] = useState<Record<string, ShopDoc | null>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const snap = await getDoc(doc(db, "requests", params.token));
        if (snap.exists()) {
          const data = snap.data() as RequestDoc;
          setRequest(data);
          if (data.offers?.length) {
            const shopMap: Record<string, ShopDoc | null> = {};
            for (const offer of data.offers) {
              if (!offer.shopId) continue;
              const shopSnap = await getDoc(doc(db, "shops", offer.shopId));
              shopMap[offer.shopId] = shopSnap.exists() ? (shopSnap.data() as ShopDoc) : null;
            }
            setShops(shopMap);
          }
        }
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [params.token]);

  if (loading) {
    return <p className="container" style={{ padding: "40px 0" }}>Loading request...</p>;
  }

  if (!request) {
    return (
      <main className="container" style={{ padding: "40px 0" }}>
        <div className="card">
          <h1 className="section-title">Request not found</h1>
          <p>Please check your request link.</p>
        </div>
      </main>
    );
  }

  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <div style={{ display: "grid", gap: 24 }}>
        <section className="card">
          <p className="small-label">Request summary</p>
          <h1 className="section-title">{request.guest.serviceType.toUpperCase()} in {request.guest.district}</h1>
          <div style={{ display: "grid", gap: 6 }}>
            <div>Date: {request.guest.date}</div>
            <div>Time: {request.guest.timePref}</div>
            <div>Style: {request.guest.styleText}</div>
            {request.guest.refUrl && <div>Reference: {request.guest.refUrl}</div>}
            {request.guest.constraints.length > 0 && (
              <div>Notes: {request.guest.constraints.join(", ")}</div>
            )}
          </div>
        </section>

        <section>
          <p className="small-label">Status</p>
          <StatusTimeline status={request.status} />
        </section>

        <section className="card" style={{ display: "grid", gap: 12 }}>
          <p className="small-label">Confirmed options</p>
          {request.offers.length === 0 ? (
            <p style={{ margin: 0 }}>We’re reviewing and will confirm availability soon.</p>
          ) : (
            request.offers
              .sort((a, b) => a.rank - b.rank)
              .map((offer) => (
                <OfferCard
                  key={offer.rank}
                  offer={offer}
                  shop={shops[offer.shopId]}
                  isMain={offer.rank === 1}
                />
              ))
          )}
        </section>

        {request.guestMessage && (
          <section className="card">
            <p className="small-label">Message from our team</p>
            <p style={{ margin: 0 }}>{request.guestMessage}</p>
          </section>
        )}
      </div>
    </main>
  );
}
