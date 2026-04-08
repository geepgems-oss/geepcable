import { useState } from "react";

export default function ProductImage({ src, alt, category, color, imgStyle }) {
  const [usePlaceholder, setUsePlaceholder] = useState(false);

  if (usePlaceholder) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(135deg, ${color}66 0%, #0A0E1A 45%, ${color}33 100%)`,
          color: "#fff",
          fontWeight: 700,
          fontSize: "13px",
          textAlign: "center",
          padding: "12px",
          boxSizing: "border-box",
          ...imgStyle,
        }}
      >
        {category}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={imgStyle}
      onError={() => setUsePlaceholder(true)}
    />
  );
}
