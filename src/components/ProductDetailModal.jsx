import { motion, AnimatePresence } from "framer-motion";
import { COMPANY } from "../constants";
import ProductImage from "./ProductImage";

export default function ProductDetailModal({ product, onClose, onAddToCart }) {
  return (
    <AnimatePresence>
      {product && (
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.88)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.88, y: 24 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.88, y: 24 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0D1528",
              borderRadius: "20px",
              padding: "30px",
              maxWidth: "580px",
              width: "100%",
              maxHeight: "88vh",
              overflowY: "auto",
              border: `1px solid ${product.color}44`,
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "18px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 700, color: product.color }}>{product.name}</h2>
              <button
                type="button"
                onClick={onClose}
                style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "20px" }}
              >
                ✕
              </button>
            </div>
            <ProductImage
              src={product.image}
              alt={product.name}
              category={product.category}
              color={product.color}
              imgStyle={{
                width: "100%",
                borderRadius: "12px",
                marginBottom: "18px",
                display: "block",
                minHeight: "200px",
                objectFit: "cover",
              }}
            />
            <p style={{ color: "#aaa", marginBottom: "18px", lineHeight: 1.65, fontSize: "14px" }}>{product.desc}</p>
            <h4 style={{ color: product.color, marginBottom: "10px" }}>Technical Specifications:</h4>
            {product.specs.map((spec, i) => (
              <div
                key={i}
                style={{
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                  fontSize: "13px",
                  color: "#ccc",
                }}
              >
                <span style={{ color: product.color }}>▸ </span>
                {spec}
              </div>
            ))}
            <h4 style={{ color: product.color, margin: "18px 0 10px" }}>Applications:</h4>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}>
              {product.applications.map((app, i) => (
                <span
                  key={i}
                  style={{
                    background: `${product.color}1a`,
                    border: `1px solid ${product.color}44`,
                    borderRadius: "6px",
                    padding: "4px 12px",
                    fontSize: "12px",
                    color: product.color,
                  }}
                >
                  {app}
                </span>
              ))}
            </div>
            <div style={{ display: "flex", gap: "12px" }}>
              <button
                type="button"
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                style={{
                  flex: 1,
                  padding: "13px",
                  borderRadius: "10px",
                  background: `linear-gradient(135deg, ${product.color}, ${product.color}cc)`,
                  border: "none",
                  color: "#000",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                + Add to RFQ
              </button>
              <button
                type="button"
                onClick={() =>
                  window.open(
                    `https://wa.me/${COMPANY.whatsapp}?text=Hello! I need details about ${product.name}`
                  )
                }
                style={{
                  flex: 1,
                  padding: "13px",
                  borderRadius: "10px",
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.35)",
                  color: "#25D366",
                  fontWeight: 700,
                  cursor: "pointer",
                  fontSize: "14px",
                }}
              >
                💬 WhatsApp
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
