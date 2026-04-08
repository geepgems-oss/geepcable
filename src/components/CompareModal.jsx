import { motion, AnimatePresence } from "framer-motion";
import ProductImage from "./ProductImage";

export default function CompareModal({ open, compareList, onClose }) {
  return (
    <AnimatePresence>
      {open && compareList.length > 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.92)",
            zIndex: 2000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.88 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.88 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0D1528",
              borderRadius: "20px",
              padding: "30px",
              maxWidth: "880px",
              width: "100%",
              maxHeight: "88vh",
              overflowY: "auto",
              border: "1px solid rgba(78,205,196,0.25)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "22px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#4ECDC4" }}>Product Comparison</h2>
              <button
                type="button"
                onClick={onClose}
                style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "20px" }}
              >
                ✕
              </button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${compareList.length}, 1fr)`, gap: "16px" }}>
              {compareList.map((product) => (
                <div
                  key={product.id}
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    borderRadius: "12px",
                    padding: "16px",
                    border: `1px solid ${product.color}33`,
                  }}
                >
                  <ProductImage
                    src={product.image}
                    alt={product.name}
                    category={product.category}
                    color={product.color}
                    imgStyle={{
                      width: "100%",
                      borderRadius: "8px",
                      marginBottom: "12px",
                      display: "block",
                      minHeight: "140px",
                      objectFit: "cover",
                    }}
                  />
                  <h3 style={{ fontSize: "15px", fontWeight: 700, color: product.color, marginBottom: "12px" }}>
                    {product.name}
                  </h3>
                  {product.specs.map((spec, j) => (
                    <div
                      key={j}
                      style={{
                        fontSize: "12px",
                        color: "#aaa",
                        padding: "6px 0",
                        borderBottom: "1px solid rgba(255,255,255,0.05)",
                      }}
                    >
                      {spec}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
