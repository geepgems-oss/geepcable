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
        borderBottom: "1px solid rgba(245,158,11,0.2)",
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
            background: "linear-gradient(135deg, #2563EB, #1D4ED8)",
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
          <div style={{ fontWeight: 800, fontSize: "20px", color: "#fff" }}>GEEP CABLES</div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(96,165,250,0.06)",
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
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.3)",
            borderRadius: "8px",
            padding: "8px 16px",
            color: "#F59E0B",
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
            background: "linear-gradient(135deg, #F59E0B, #FBBF24)",
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
