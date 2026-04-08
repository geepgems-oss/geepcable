import { COMPANY } from "../constants";

export default function Contact({ formData, onFormChange, onSendWhatsApp }) {
  return (
    <section id="contact" style={{ padding: "80px 5%", background: "rgba(255,255,255,0.015)" }}>
      <div style={{ textAlign: "center", marginBottom: "50px" }}>
        <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
          Get In <span style={{ color: "#FF6B35" }}>Touch</span>
        </h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          maxWidth: "960px",
          margin: "0 auto",
        }}
      >
        <div>
          <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "24px", color: "#FF6B35" }}>
            Contact Information
          </h3>
          {[
            { icon: "📞", label: "Phone", value: COMPANY.phone },
            { icon: "📧", label: "Email", value: COMPANY.email },
            { icon: "📍", label: "Address", value: COMPANY.address },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "22px" }}>
              <div
                style={{
                  width: "42px",
                  height: "42px",
                  borderRadius: "10px",
                  background: "rgba(255,107,53,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "18px",
                  flexShrink: 0,
                }}
              >
                {item.icon}
              </div>
              <div>
                <div style={{ fontSize: "11px", color: "#888", marginBottom: "4px" }}>{item.label}</div>
                <div style={{ fontSize: "14px", color: "#ddd" }}>{item.value}</div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "24px", color: "#FF6B35" }}>Send Inquiry</h3>
          {["name", "phone", "email", "message"].map((field) => (
            <div key={field} style={{ marginBottom: "14px" }}>
              {field === "message" ? (
                <textarea
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={(e) => onFormChange(field, e.target.value)}
                  rows={4}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    fontSize: "14px",
                    resize: "none",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              ) : (
                <input
                  type="text"
                  placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                  value={formData[field]}
                  onChange={(e) => onFormChange(field, e.target.value)}
                  style={{
                    width: "100%",
                    padding: "12px 14px",
                    borderRadius: "10px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "#fff",
                    fontSize: "14px",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
              )}
            </div>
          ))}
          <button
            type="button"
            onClick={onSendWhatsApp}
            style={{
              width: "100%",
              padding: "14px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #FF6B35, #FF8C35)",
              border: "none",
              color: "#fff",
              fontSize: "16px",
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Send via WhatsApp 💬
          </button>
        </div>
      </div>
    </section>
  );
}
