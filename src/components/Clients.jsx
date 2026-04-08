import { CLIENTS } from "../constants";

export default function Clients() {
  return (
    <section style={{ padding: "80px 5%" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
          Our Trusted <span style={{ color: "#FF6B35" }}>Clients</span>
        </h2>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
        {CLIENTS.map((client, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "10px",
              padding: "10px 22px",
              fontSize: "14px",
              fontWeight: 600,
              color: "#ccc",
            }}
          >
            {client}
          </div>
        ))}
      </div>
    </section>
  );
}
