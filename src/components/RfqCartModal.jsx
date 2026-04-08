import { motion, AnimatePresence } from "framer-motion";

export default function RfqCartModal({
  open,
  onClose,
  cart,
  onUpdateQty,
  onRemoveItem,
  formData,
  onFormFieldChange,
  onSendWhatsApp,
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
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
            initial={{ scale: 0.88 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.88 }}
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#0D1528",
              borderRadius: "20px",
              padding: "30px",
              maxWidth: "480px",
              width: "100%",
              maxHeight: "82vh",
              overflowY: "auto",
              border: "1px solid rgba(255,107,53,0.25)",
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "22px" }}>
              <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#FF6B35" }}>RFQ Cart ({cart.length})</h2>
              <button
                type="button"
                onClick={onClose}
                style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "20px" }}
              >
                ✕
              </button>
            </div>

            {cart.length === 0 ? (
              <div style={{ textAlign: "center", color: "#888", padding: "40px 0" }}>
                <div style={{ fontSize: "48px", marginBottom: "14px" }}>🛒</div>
                <p>No products added yet</p>
              </div>
            ) : (
              <>
                {cart.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "12px 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <div>
                      <div style={{ fontSize: "14px", fontWeight: 600 }}>{item.name}</div>
                      <div style={{ fontSize: "12px", color: "#888" }}>{item.category}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, -1)}
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "none",
                          color: "#fff",
                          borderRadius: "4px",
                          padding: "2px 8px",
                          cursor: "pointer",
                        }}
                      >
                        -
                      </button>
                      <span style={{ fontSize: "14px", minWidth: "20px", textAlign: "center" }}>{item.qty}</span>
                      <button
                        type="button"
                        onClick={() => onUpdateQty(item.id, 1)}
                        style={{
                          background: "rgba(255,255,255,0.08)",
                          border: "none",
                          color: "#fff",
                          borderRadius: "4px",
                          padding: "2px 8px",
                          cursor: "pointer",
                        }}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        onClick={() => onRemoveItem(item.id)}
                        style={{ background: "none", border: "none", color: "#ff4444", cursor: "pointer", fontSize: "16px" }}
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                ))}
                <div style={{ marginTop: "22px" }}>
                  <input
                    placeholder="Your Name *"
                    value={formData.name}
                    onChange={(e) => onFormFieldChange("name", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "8px",
                      marginBottom: "10px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                      outline: "none",
                      boxSizing: "border-box",
                      fontSize: "14px",
                    }}
                  />
                  <input
                    placeholder="Your Phone *"
                    value={formData.phone}
                    onChange={(e) => onFormFieldChange("phone", e.target.value)}
                    style={{
                      width: "100%",
                      padding: "11px 14px",
                      borderRadius: "8px",
                      marginBottom: "16px",
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff",
                      outline: "none",
                      boxSizing: "border-box",
                      fontSize: "14px",
                    }}
                  />
                  <button
                    type="button"
                    onClick={onSendWhatsApp}
                    style={{
                      width: "100%",
                      padding: "14px",
                      borderRadius: "10px",
                      background: "linear-gradient(135deg, #25D366, #128C7E)",
                      border: "none",
                      color: "#fff",
                      fontSize: "15px",
                      fontWeight: 700,
                      cursor: "pointer",
                    }}
                  >
                    Send RFQ via WhatsApp 💬
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
