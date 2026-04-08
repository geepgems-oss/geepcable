import { STATS } from "../constants";

export default function Stats() {
  return (
    <section style={{ background: "linear-gradient(135deg, #FF6B35, #E55A2B)", padding: "36px 5%" }}>
      <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
        {STATS.map((stat, i) => (
          <div key={i} style={{ textAlign: "center" }}>
            <div style={{ fontSize: "40px", fontWeight: 800, color: "#fff" }}>{stat.num}</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", letterSpacing: "1px" }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
