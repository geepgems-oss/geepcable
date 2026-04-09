import { useState } from "react";

const CATEGORY_IMAGES = {
  "House Wire":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  "Flexible Cable":
    "https://images.unsplash.com/photo-1558618047-3c8c76bb987c?w=400&h=300&fit=crop",
  "Control Cable":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  "Armoured Cable":
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
  "Solar Cable":
    "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400&h=300&fit=crop",
  "Instrumentation Cable":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
  "Power Cable":
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
  "Coaxial Cable":
    "https://images.unsplash.com/photo-1544724107-6d5e4b8e5e5e?w=400&h=300&fit=crop",
  "Fire Survival Cable":
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
  "Submersible Cable":
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
  "Welding Cable":
    "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=300&fit=crop",
  "Data Cable":
    "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
  "Elevator Cable":
    "https://images.unsplash.com/photo-1558618047-3c8c76bb987c?w=400&h=300&fit=crop",
};

export default function ProductImage({ src, alt, category, color, imgStyle }) {
  const [useFallback, setUseFallback] = useState(false);

  if (useFallback) {
    return (
      <img
        src={CATEGORY_IMAGES[category]}
        alt={alt}
        style={imgStyle}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      style={imgStyle}
      onError={() => setUseFallback(true)}
    />
  );
}
