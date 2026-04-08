import { motion } from "framer-motion";
import { COMPANY } from "../constants";

export default function Hero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        background: "linear-gradient(135deg, #0A0E1A 0%, #0D1528 60%, #0A0E1A 100%)",
        padding: "100px 5% 60px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "15%",
          right: "5%",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        style={{ maxWidth: "650px", zIndex: 1 }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "rgba(255,107,53,0.12)",
            border: "1px solid rgba(255,107,53,0.3)",
            borderRadius: "50px",
            padding: "6px 18px",
            marginBottom: "28px",
          }}
        >
          <span style={{ color: "#FF6B35", fontSize: "12px", letterSpacing: "2px", fontWeight: 700 }}>
            ⚡ ISO 9001:2015 CERTIFIED MANUFACTURER
          </span>
        </div>

        <h1 style={{ fontSize: "clamp(44px, 7vw, 78px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px" }}>
          India&apos;s Most Trusted
          <br />
          <span style={{ color: "#FF6B35" }}>Cable Manufacturer</span>
        </h1>

        <p style={{ fontSize: "17px", color: "#aaa", lineHeight: 1.8, marginBottom: "40px", maxWidth: "540px" }}>
          40+ Years of Excellence • 900+ Satisfied Clients • 24 Product Categories • Supplying to BPCL, GAIL, NTPC,
          L&T, Indian Railways & more
        </p>

        <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}
            style={{
              background: "linear-gradient(135deg, #FF6B35, #FF8C35)",
              border: "none",
              borderRadius: "12px",
              padding: "15px 32px",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Explore Products →
          </button>
          <button
            type="button"
            onClick={() =>
              window.open(`https://wa.me/${COMPANY.whatsapp}?text=Hello GEEP Cables! I need a quote.`)
            }
            style={{
              background: "rgba(37,211,102,0.12)",
              border: "1px solid rgba(37,211,102,0.35)",
              borderRadius: "12px",
              padding: "15px 32px",
              color: "#25D366",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            💬 WhatsApp Quote
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", zIndex: 0 }}
      >
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=580"
          alt="GEEP Cables"
          style={{ width: "clamp(280px, 38vw, 520px)", borderRadius: "24px", opacity: 0.75 }}
        />
      </motion.div>
    </section>
  );
}
