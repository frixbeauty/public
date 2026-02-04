import { statusOrder } from "../lib/utils";
import type { RequestStatus } from "../lib/models";

const labels: Record<RequestStatus, string> = {
  Submitted: "Submitted",
  Reviewing: "Reviewing",
  OptionsSent: "Options Sent",
  BookingInProgress: "Booking",
  Confirmed: "Confirmed",
  Failed: "Failed"
};

export function StatusTimeline({ status }: { status: RequestStatus }) {
  return (
    <div style={{ display: "grid", gap: 12 }}>
      {statusOrder.map((step) => {
        const isActive = statusOrder.indexOf(step) <= statusOrder.indexOf(status);
        return (
          <div
            key={step}
            className="card"
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: isActive ? "#fffaf5" : "#f3eee8",
              opacity: isActive ? 1 : 0.6
            }}
          >
            <span>{labels[step]}</span>
            <span className="badge">{isActive ? "Done" : "Pending"}</span>
          </div>
        );
      })}
    </div>
  );
}
