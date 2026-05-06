import { STATS } from "../constants";

export default function Stats() {
  return (
    <section style={{ background: "linear-gradient(135deg, #0F2440, #0A1929)", padding: "36px 5%" }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
        {STATS.map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "#F59E0B" }}>{stat.num}</div>
            <div style={{ fontSize: "12px", color: "#94A3B8", letterSpacing: "1px" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
