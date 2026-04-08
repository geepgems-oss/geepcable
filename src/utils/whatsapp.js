import { COMPANY } from "../constants";

export function productPriceWhatsAppUrl(product) {
  const text = `Hi, I want price for ${product.name} - ${product.category}`;
  return `https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(text)}`;
}
