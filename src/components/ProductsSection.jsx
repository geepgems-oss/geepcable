import { useState } from "react";
import { motion } from "framer-motion";
import categoriesData from "../data/categories.json";

function CategoryBannerImage({ category }) {
  const [stage, setStage] = useState(0);

  if (stage >= 2) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
          fontSize: "32px",
          fontWeight: 800,
          letterSpacing: "0.5px",
          padding: "0 20px",
          textAlign: "center",
        }}
      >
        {category.name}
      </div>
    );
  }

  const src = stage === 0 ? category.image : `/images/${category.slug}/01.jpg`;

  return (
    <img
      src={src}
      alt={category.name}
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
      onError={() => setStage((s) => s + 1)}
    />
  );
}

export default function ProductsSection({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  const activeCategoryData =
    activeCategory !== "All"
      ? categoriesData.find((c) => c.name === activeCategory)
      : null;

  return (
    <section id="products" style={{ padding: "80px 5%" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "12px" }}>
          Our <span style={{ color: "#F59E0B" }}>Products</span>
        </h2>
        <p style={{ color: "#888", fontSize: "15px" }}>13 Categories • 100+ Variants • IS/IEC Standards</p>
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginBottom: "40px",
        }}
      >
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onCategoryChange(cat)}
            style={{
              padding: "8px 20px",
              borderRadius: "50px",
              cursor: "pointer",
              fontSize: "13px",
              fontWeight: 600,
              background:
                activeCategory === cat ? "linear-gradient(135deg, #F59E0B, #FBBF24)" : "rgba(96,165,250,0.06)",
              border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: activeCategory === cat ? "#fff" : "#aaa",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {activeCategoryData && (
        <div
          style={{
            background: "rgba(96,165,250,0.04)",
            border: "1px solid rgba(96,165,250,0.10)",
            borderRadius: "16px",
            overflow: "hidden",
            marginBottom: "40px",
          }}
        >
          <div style={{ position: "relative", height: "300px", overflow: "hidden" }}>
            <CategoryBannerImage key={activeCategoryData.slug} category={activeCategoryData} />
            <div
              style={{
                position: "absolute",
                inset: 0,
                pointerEvents: "none",
                background: "linear-gradient(180deg, rgba(10,14,26,0) 50%, rgba(10,14,26,0.6) 100%)",
              }}
            />
          </div>
          <div style={{ padding: "20px" }}>
            <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
              {activeCategoryData.name}
            </h3>
            <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.5, marginBottom: "14px" }}>
              {activeCategoryData.description}
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "16px" }}>
              <span
                style={{
                  borderRadius: "6px",
                  padding: "3px 10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  background: "rgba(96,165,250,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#aaa",
                }}
              >
                <span style={{ color: "#F59E0B" }}>⚡</span> {activeCategoryData.voltage}
              </span>
              <span
                style={{
                  borderRadius: "6px",
                  padding: "3px 10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  background: "rgba(96,165,250,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  color: "#aaa",
                }}
              >
                <span style={{ color: "#F59E0B" }}>✓</span> {activeCategoryData.standards}
              </span>
              <span
                style={{
                  borderRadius: "6px",
                  padding: "3px 10px",
                  fontSize: "11px",
                  fontWeight: 700,
                  background: "rgba(245,158,11,0.15)",
                  color: "#F59E0B",
                }}
              >
                Size: {activeCategoryData.sizeRange}
              </span>
            </div>
            <div style={{ marginTop: "16px" }}>
              <div
                style={{
                  color: "#888",
                  fontSize: "11px",
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                  marginBottom: "6px",
                }}
              >
                Applications
              </div>
              <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
                {activeCategoryData.applications.map((app) => (
                  <span
                    key={app}
                    style={{
                      background: "rgba(96,165,250,0.06)",
                      color: "#ccc",
                      fontSize: "11px",
                      padding: "4px 12px",
                      borderRadius: "12px",
                    }}
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={`https://wa.me/919899980415?text=${encodeURIComponent(
                `Hi GEEP Cables, I want a quote for ${activeCategoryData.name}`
              )}`}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-block",
                marginTop: "20px",
                padding: "12px 24px",
                borderRadius: "8px",
                background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
                border: "none",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 700,
                textDecoration: "none",
                cursor: "pointer",
              }}
            >
              💬 Request Quote on WhatsApp
            </a>
          </div>
        </div>
      )}

      {activeCategory === "All" && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
          {categoriesData.map((cat) => (
            <motion.div
              key={cat.slug}
              onClick={() => onCategoryChange(cat.name)}
              whileHover={{ y: -6 }}
              style={{
                background: "rgba(96,165,250,0.04)",
                border: "1px solid rgba(96,165,250,0.10)",
                borderRadius: "16px",
                overflow: "hidden",
                cursor: "pointer",
              }}
            >
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <CategoryBannerImage category={cat} />
              </div>
              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>
                  {cat.name}
                </h3>
                <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.5 }}>
                  {cat.shortDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}
