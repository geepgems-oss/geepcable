import { COMPANY, SOCIAL } from "../constants";

export default function Footer() {
  return (
    <footer style={{ background: "#060810", padding: "36px 5%", borderTop: "1px solid rgba(245,158,11,0.15)" }}>
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
          <div style={{ fontSize: "22px", fontWeight: 800, color: "#F59E0B", marginBottom: "6px" }}>GEEP CABLES</div>
          <div style={{ fontSize: "12px", color: "#555" }}>© 2024 GEEP Cables. All Rights Reserved.</div>
          <div style={{ fontSize: "12px", color: "#555", marginTop: "4px" }}>{COMPANY.address}</div>
        </div>
        <div style={{ display: "flex", gap: "10px" }}>
          {SOCIAL.map((s, i) => (
            <div
              key={i}
              style={{
                background: "rgba(245,158,11,0.12)",
                borderRadius: "8px",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "12px",
                color: "#F59E0B",
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
