import { COMPANY } from "../constants";

export default function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${COMPANY.whatsapp}?text=Hello GEEP Cables! I need a quote.`}
      target="_blank"
      rel="noreferrer"
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 999,
        width: "58px",
        height: "58px",
        borderRadius: "50%",
        background: "linear-gradient(135deg, #25D366, #128C7E)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 22px rgba(37,211,102,0.4)",
        textDecoration: "none",
        fontSize: "26px",
      }}
    >
      💬
    </a>
  );
}
