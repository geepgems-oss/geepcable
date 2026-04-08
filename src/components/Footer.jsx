import { COMPANY, SOCIAL } from "../constants";

export default function Footer() {
  return (
    <footer style={{ background: "#060810", padding: "36px 5%", borderTop: "1px solid rgba(255,107,53,0.15)" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        <div>
          <div style={{ fontSize: "22px", fontWeight: 800, color: "#FF6B35", marginBottom: "6px" }}>GEEP CABLES</div>
          <div style={{ fontSize: "12px", color: "#555" }}>© 2024 GEEP Cables. All Rights Reserved.</div>
          <div style={{ fontSize: "12px", color: "#555", marginTop: "4px" }}>{COMPANY.address}</div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {SOCIAL.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,107,53,0.12)",
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "12px",
                color: "#FF6B35",
              }}
            >
              {s}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
