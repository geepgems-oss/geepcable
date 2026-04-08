import { motion } from "framer-motion";
import ProductImage from "./ProductImage";
import { productPriceWhatsAppUrl } from "../utils/whatsapp";

export default function ProductCard({
  product,
  index,
  compareList,
  onToggleCompare,
  onSelectProduct,
  onAddToCart,
}) {
  const inCompare = compareList.some((p) => p.id === product.id);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.04 }}
      whileHover={{ y: -6 }}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
        <ProductImage
          src={product.image}
          alt={product.name}
          category={product.category}
          color={product.color}
          imgStyle={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div
          style={{
            position: "absolute",
            top: "12px",
            left: "12px",
            background: product.color,
            color: "#000",
            borderRadius: "6px",
            padding: "3px 10px",
            fontSize: "11px",
            fontWeight: 700,
          }}
        >
          {product.category}
        </div>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onToggleCompare(product);
          }}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            background: inCompare ? "#4ECDC4" : "rgba(0,0,0,0.6)",
            border: "none",
            borderRadius: "6px",
            padding: "5px 9px",
            color: "#fff",
            cursor: "pointer",
            fontSize: "11px",
          }}
        >
          ⇌
        </button>
      </div>

      <div style={{ padding: "20px" }}>
        <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{product.name}</h3>
        <p style={{ fontSize: "15px", fontWeight: 700, color: product.color, marginBottom: "6px" }}>{product.price}</p>
        <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.5, marginBottom: "14px" }}>{product.desc}</p>
        {product.specs.slice(0, 2).map((spec, j) => (
          <div key={j} style={{ fontSize: "12px", color: "#aaa", marginBottom: "4px" }}>
            <span style={{ color: product.color }}>▸ </span>
            {spec}
          </div>
        ))}
        <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
          <button
            type="button"
            onClick={() => onSelectProduct(product)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#fff",
              fontSize: "13px",
            }}
          >
            👁 Details
          </button>
          <button
            type="button"
            onClick={() => onAddToCart(product)}
            style={{
              flex: 1,
              padding: "10px",
              borderRadius: "8px",
              cursor: "pointer",
              background: `linear-gradient(135deg, ${product.color}, ${product.color}bb)`,
              border: "none",
              color: "#000",
              fontSize: "13px",
              fontWeight: 700,
            }}
          >
            + Quote
          </button>
        </div>
        <a
          href={productPriceWhatsAppUrl(product)}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "block",
            marginTop: "10px",
            textAlign: "center",
            padding: "10px",
            borderRadius: "8px",
            background: "rgba(37,211,102,0.12)",
            border: "1px solid rgba(37,211,102,0.35)",
            color: "#25D366",
            fontSize: "13px",
            fontWeight: 700,
            textDecoration: "none",
          }}
        >
          💬 WhatsApp price
        </a>
      </div>
    </motion.div>
  );
}
