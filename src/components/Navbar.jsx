import { COMPANY } from "../constants";

export default function Navbar({
  searchQuery,
  onSearchChange,
  cartCount,
  onOpenCart,
  compareCount,
  onOpenCompare,
}) {
  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "rgba(10,14,26,0.97)",
        backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,107,53,0.2)",
        padding: "0 5%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        height: "70px",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <div
          style={{
            width: "44px",
            height: "44px",
            borderRadius: "10px",
            background: "linear-gradient(135deg, #FF6B35, #FF8C35)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: "18px",
            color: "#fff",
          }}
        >
          GC
        </div>
        <div>
          <div style={{ fontWeight: 800, fontSize: "20px", color: "#FF6B35" }}>GEEP CABLES</div>
          <div style={{ fontSize: "10px", color: "#888", letterSpacing: "2px" }}>POWERING INDIA SINCE 1983</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(255,255,255,0.05)",
          borderRadius: "8px",
          padding: "8px 14px",
        }}
      >
        <span style={{ color: "#888", fontSize: "14px" }}>🔍</span>
        <input
          placeholder="Search products..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          style={{
            background: "none",
            border: "none",
            outline: "none",
            color: "#fff",
            width: "180px",
            fontSize: "14px",
          }}
        />
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <button
          type="button"
          onClick={onOpenCart}
          style={{
            background: "rgba(255,107,53,0.15)",
            border: "1px solid rgba(255,107,53,0.3)",
            borderRadius: "8px",
            padding: "8px 16px",
            color: "#FF6B35",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          🛒 RFQ ({cartCount})
        </button>

        {compareCount > 0 && (
          <button
            type="button"
            onClick={onOpenCompare}
            style={{
              background: "rgba(78,205,196,0.15)",
              border: "1px solid rgba(78,205,196,0.3)",
              borderRadius: "8px",
              padding: "8px 16px",
              color: "#4ECDC4",
              cursor: "pointer",
              fontSize: "14px",
            }}
          >
            Compare ({compareCount})
          </button>
        )}

        <a
          href={`tel:${COMPANY.phone}`}
          style={{
            background: "linear-gradient(135deg, #FF6B35, #FF8C35)",
            borderRadius: "8px",
            padding: "8px 18px",
            color: "#fff",
            fontSize: "14px",
            textDecoration: "none",
          }}
        >
          📞 Call Now
        </a>
      </div>
    </nav>
  );
}
