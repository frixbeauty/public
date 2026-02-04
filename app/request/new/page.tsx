"use client";

import { useState } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import Link from "next/link";
import { db } from "../../../lib/firebase";
import { generateToken } from "../../../lib/utils";
import type { RequestDoc, ServiceType } from "../../../lib/models";

const districts = [
  "Gangnam",
  "Hongdae",
  "Myeongdong",
  "Itaewon",
  "Jamsil",
  "Seongsu",
  "Apgujeong",
  "Hannam",
  "Yeonnam",
  "Euljiro"
];

const constraints = [
  "Curly hair",
  "Bleached hair",
  "Sensitive skin",
  "Acne-prone skin",
  "Language barrier",
  "Short timeline",
  "Need quiet/private",
  "Other"
];

export default function RequestNewPage() {
  const [district, setDistrict] = useState(districts[0]);
  const [date, setDate] = useState("");
  const [timePref, setTimePref] = useState("");
  const [serviceType, setServiceType] = useState<ServiceType>("hair");
  const [styleText, setStyleText] = useState("");
  const [refUrl, setRefUrl] = useState("");
  const [selectedConstraints, setSelectedConstraints] = useState<string[]>([]);
  const [extraNotes, setExtraNotes] = useState("");
  const [budget, setBudget] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [accommodation, setAccommodation] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [requestLink, setRequestLink] = useState<string | null>(null);

  const toggleConstraint = (value: string) => {
    setSelectedConstraints((prev) =>
      prev.includes(value) ? prev.filter((c) => c !== value) : [...prev, value]
    );
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!date || !timePref || !styleText) return;

    setSubmitting(true);
    try {
      const token = generateToken(32);
      const payload: RequestDoc = {
        token,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
        guest: {
          city: "Seoul",
          district,
          date,
          timePref,
          serviceType,
          styleText,
          refUrl: refUrl || undefined,
          constraints: extraNotes
            ? [...selectedConstraints, `Note: ${extraNotes}`]
            : selectedConstraints,
          budget: budget || undefined,
          contact: {
            email: email || undefined,
            instagram: instagram || undefined
          },
          accommodation: accommodation || undefined
        },
        status: "Submitted",
        offers: [],
        admin: {}
      };

      await setDoc(doc(db, "requests", token), payload);
      setRequestLink(`/request/${token}`);
    } catch (error) {
      console.error(error);
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="container" style={{ padding: "60px 0" }}>
      <div className="card" style={{ maxWidth: 760, margin: "0 auto" }}>
        <p className="small-label">Request form</p>
        <h1 className="section-title">Tell us your visit plan</h1>
        <p style={{ marginTop: 0 }}>
          We will confirm one main option and prepare two safe alternatives. You won’t have to
          chase multiple salons.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "grid", gap: 16, marginTop: 20 }}>
          <label style={{ display: "grid", gap: 6 }}>
            City
            <input
              value="Seoul"
              disabled
              className="card"
              style={{ padding: 10, background: "#f3eee8" }}
            />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            District
            <select
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
              className="card"
              style={{ padding: 10 }}
            >
              {districts.map((d) => (
                <option key={d} value={d}>
                  {d}
                </option>
              ))}
            </select>
          </label>

          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <label style={{ display: "grid", gap: 6 }}>
              Date
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="card"
                style={{ padding: 10 }}
                required
              />
            </label>
            <label style={{ display: "grid", gap: 6 }}>
              Preferred time range
              <input
                placeholder="e.g. 10:00-14:00"
                value={timePref}
                onChange={(e) => setTimePref(e.target.value)}
                className="card"
                style={{ padding: 10 }}
                required
              />
            </label>
          </div>

          <label style={{ display: "grid", gap: 6 }}>
            Service type
            <select
              value={serviceType}
              onChange={(e) => setServiceType(e.target.value as ServiceType)}
              className="card"
              style={{ padding: 10 }}
            >
              <option value="hair">Hair</option>
              <option value="makeup">Makeup</option>
              <option value="nail">Nail</option>
              <option value="aesthetic">Aesthetic</option>
            </select>
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            Desired style (describe in English)
            <textarea
              value={styleText}
              onChange={(e) => setStyleText(e.target.value)}
              className="card"
              style={{ padding: 10, minHeight: 110 }}
              required
            />
          </label>

          <label style={{ display: "grid", gap: 6 }}>
            Reference URL (optional)
            <input
              value={refUrl}
              onChange={(e) => setRefUrl(e.target.value)}
              placeholder="Instagram, Pinterest, etc."
              className="card"
              style={{ padding: 10 }}
            />
          </label>

          <div style={{ display: "grid", gap: 8 }}>
            <span>Important conditions</span>
            <div style={{ display: "grid", gap: 8 }}>
              {constraints.map((item) => (
                <label key={item} style={{ display: "flex", gap: 8, alignItems: "center" }}>
                  <input
                    type="checkbox"
                    checked={selectedConstraints.includes(item)}
                    onChange={() => toggleConstraint(item)}
                  />
                  {item}
                </label>
              ))}
            </div>
            <textarea
              value={extraNotes}
              onChange={(e) => setExtraNotes(e.target.value)}
              placeholder="Extra notes (optional)"
              className="card"
              style={{ padding: 10, minHeight: 80 }}
            />
          </div>

          <label style={{ display: "grid", gap: 6 }}>
            Budget (optional)
            <input
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              placeholder="e.g. 120,000 KRW"
              className="card"
              style={{ padding: 10 }}
            />
          </label>

          <div style={{ display: "grid", gap: 12, gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
            <label style={{ display: "grid", gap: 6 }}>
              Email (optional)
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="card"
                style={{ padding: 10 }}
              />
            </label>
            <label style={{ display: "grid", gap: 6 }}>
              Instagram ID (optional)
              <input
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                placeholder="@username"
                className="card"
                style={{ padding: 10 }}
              />
            </label>
          </div>

          <label style={{ display: "grid", gap: 6 }}>
            Accommodation location (optional)
            <input
              value={accommodation}
              onChange={(e) => setAccommodation(e.target.value)}
              className="card"
              style={{ padding: 10 }}
            />
          </label>

          <button
            type="submit"
            disabled={submitting}
            className="badge"
            style={{ padding: "12px 18px", fontSize: 14, justifyContent: "center" }}
          >
            {submitting ? "Submitting..." : "Submit request"}
          </button>
        </form>

        {requestLink && (
          <div className="card" style={{ marginTop: 24 }}>
            <p style={{ margin: 0, fontWeight: 600 }}>Request submitted!</p>
            <p style={{ margin: "6px 0" }}>
              We’re reviewing and will confirm availability. You don’t need to do anything else.
            </p>
            <Link className="badge" href={requestLink}>
              Open your request link
            </Link>
          </div>
        )}
      </div>
    </main>
  );
}
