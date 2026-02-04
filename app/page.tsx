import Link from "next/link";

export default function HomePage() {
  return (
    <main>
      <section className="container" style={{ padding: "80px 0 40px" }}>
        <p className="small-label">Curated Beauty Booking</p>
        <h1 className="section-title" style={{ fontSize: 40, maxWidth: 640 }}>
          We confirm your beauty booking in Korea — no guesswork, no chasing.
        </h1>
        <p style={{ maxWidth: 640, fontSize: 18, lineHeight: 1.6 }}>
          Tell us your city, date, and styling needs. Our team confirms one best option and
          prepares two safe backups. You’ll receive a personal request link to track every step.
        </p>
        <div style={{ marginTop: 28, display: "flex", gap: 12, flexWrap: "wrap" }}>
          <Link
            href="/request/new"
            className="badge"
            style={{ padding: "10px 16px", fontSize: 14 }}
          >
            Start a request
          </Link>
          <Link
            href="/admin/login"
            className="badge"
            style={{ padding: "10px 16px", fontSize: 14, background: "rgba(91,58,46,0.1)", color: "#5B3A2E" }}
          >
            Admin login
          </Link>
        </div>
      </section>
      <section className="container" style={{ padding: "20px 0 80px" }}>
        <div className="card" style={{ display: "grid", gap: 18 }}>
          <div>
            <p className="small-label">How it feels</p>
            <h2 className="section-title">Confirmed. Assured. Taken care of.</h2>
          </div>
          <div style={{ display: "grid", gap: 12 }}>
            <div className="badge">Submitted → Reviewing → Options Sent → Booking → Confirmed</div>
            <p style={{ margin: 0, lineHeight: 1.6 }}>
              Guests never have to choose blindly. We confirm one main option and hold two
              alternatives in case anything changes.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
