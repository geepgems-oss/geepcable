import { motion } from "framer-motion";
import { INDUSTRIES } from "../constants";

export default function Industries() {
  return (
    <section style={{ padding: "80px 5%", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
          Industries We <span style={{ color: "#F59E0B" }}>Serve</span>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: "18px" }}>
        {INDUSTRIES.map((ind, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            style={{
              background: "rgba(96,165,250,0.04)",
              border: `1px solid ${ind.color}33`,
              borderRadius: "14px",
              padding: "24px",
              textAlign: "center",
              cursor: "pointer",
            }}
          >
            <div style={{ fontSize: "34px", marginBottom: "10px" }}>{ind.icon}</div>
            <div style={{ fontSize: "13px", fontWeight: 600, color: ind.color }}>{ind.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
