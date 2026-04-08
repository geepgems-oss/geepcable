import { motion, AnimatePresence } from "framer-motion";

export default function ScrollToTop({ visible }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "fixed",
            bottom: "92px",
            right: "24px",
            zIndex: 999,
            width: "42px",
            height: "42px",
            borderRadius: "50%",
            background: "rgba(255,107,53,0.75)",
            border: "none",
            color: "#fff",
            cursor: "pointer",
            fontSize: "18px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  );
}
