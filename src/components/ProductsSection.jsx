import ProductCard from "./ProductCard";

export default function ProductsSection({
  categories,
  activeCategory,
  onCategoryChange,
  filteredProducts,
  compareList,
  onToggleCompare,
  onSelectProduct,
  onAddToCart,
}) {
  return (
    <section id="products" style={{ padding: "80px 5%" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "12px" }}>
          Our <span style={{ color: "#FF6B35" }}>Products</span>
        </h2>
        <p style={{ color: "#888", fontSize: "15px" }}>24 Categories • 100+ Variants • IS/IEC Standards</p>
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
                activeCategory === cat ? "linear-gradient(135deg, #FF6B35, #FF8C35)" : "rgba(255,255,255,0.05)",
              border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: activeCategory === cat ? "#fff" : "#aaa",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
        {filteredProducts.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            index={i}
            compareList={compareList}
            onToggleCompare={onToggleCompare}
            onSelectProduct={onSelectProduct}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
