import { motion } from "framer-motion";
import { WHY_GEEP_ITEMS } from "../constants";

export default function WhyGeep() {
  return (
    <section style={{ padding: "80px 5%" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
          Why Choose <span style={{ color: "#FF6B35" }}>GEEP Cables?</span>
        </h2>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "22px" }}>
        {WHY_GEEP_ITEMS.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -5 }}
            style={{
              background: "rgba(255,107,53,0.04)",
              border: "1px solid rgba(255,107,53,0.12)",
              borderRadius: "16px",
              padding: "26px",
            }}
          >
            <div style={{ fontSize: "34px", marginBottom: "14px" }}>{item.icon}</div>
            <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px", color: "#FF6B35" }}>{item.title}</h3>
            <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
