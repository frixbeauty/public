import type { Offer, ShopDoc } from "../lib/models";

export function OfferCard({
  offer,
  shop,
  isMain
}: {
  offer: Offer;
  shop?: ShopDoc | null;
  isMain?: boolean;
}) {
  return (
    <div
      className="card"
      style={{
        border: isMain ? "2px solid #5B3A2E" : "1px solid rgba(16,17,19,0.08)",
        background: isMain ? "#fff4ea" : "#fffaf5"
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
        <h3 style={{ margin: 0 }}>{offer.title || shop?.name || "Option"}</h3>
        <span className="badge">{isMain ? "Main" : "Alternative"}</span>
      </div>
      <p style={{ margin: "8px 0 12px" }}>{offer.rationale}</p>
      <div style={{ display: "grid", gap: 6, fontSize: 14 }}>
        <div>Estimated price: {offer.estPrice}</div>
        <div>Estimated duration: {offer.estDuration}</div>
        <div>Availability check: {offer.availability}</div>
        {offer.bookingNote && <div>Note: {offer.bookingNote}</div>}
      </div>
    </div>
  );
}
