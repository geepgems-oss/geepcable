import { CERTIFICATIONS } from "../constants";

export default function Certifications() {
  return (
    <section style={{ padding: "80px 5%", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
          Our <span style={{ color: "#FF6B35" }}>Certifications</span>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "18px" }}>
        {CERTIFICATIONS.map((cert, i) => (
          <div
            key={i}
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,215,0,0.18)",
              borderRadius: "14px",
              padding: "22px",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: "30px", marginBottom: "10px" }}>{cert.icon}</div>
            <div style={{ fontSize: "15px", fontWeight: 700, color: "#FFD700", marginBottom: "6px" }}>{cert.name}</div>
            <div style={{ fontSize: "12px", color: "#888" }}>{cert.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
