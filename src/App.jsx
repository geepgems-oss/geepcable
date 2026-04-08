import { useState, useEffect } from "react";
import PRODUCTS from "./data/products.json";
import { COMPANY } from "./constants";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import ProductsSection from "./components/ProductsSection";
import Industries from "./components/Industries";
import WhyGeep from "./components/WhyGeep";
import Certifications from "./components/Certifications";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ProductDetailModal from "./components/ProductDetailModal";
import RfqCartModal from "./components/RfqCartModal";
import CompareModal from "./components/CompareModal";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import ScrollToTop from "./components/ScrollToTop";

const CATEGORIES = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [compareList, setCompareList] = useState([]);
  const [compareOpen, setCompareOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchCat = activeCategory === "All" || p.category === activeCategory;
    const q = searchQuery.toLowerCase();
    const matchSearch = p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q);
    return matchCat && matchSearch;
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev.map((i) => (i.id === product.id ? { ...i, qty: i.qty + 1 } : i));
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const toggleCompare = (product) => {
    if (compareList.find((p) => p.id === product.id)) {
      setCompareList((prev) => prev.filter((p) => p.id !== product.id));
    } else if (compareList.length < 3) {
      setCompareList((prev) => [...prev, product]);
    }
  };

  const sendWhatsApp = () => {
    const items = cart.map((i) => `${i.name} x${i.qty}`).join(", ");
    const msg = `Hello GEEP Cables! I want to inquire about:\n${items}\n\nName: ${formData.name}\nPhone: ${formData.phone}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`);
  };

  const sendContactWhatsApp = () => {
    const msg = `Hello GEEP Cables!\nName: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nMessage: ${formData.message}`;
    window.open(`https://wa.me/${COMPANY.whatsapp}?text=${encodeURIComponent(msg)}`);
  };

  const updateCartQty = (productId, delta) => {
    setCart((prev) =>
      prev.map((p) => (p.id === productId ? { ...p, qty: Math.max(1, p.qty + delta) } : p))
    );
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div style={{ fontFamily: "sans-serif", background: "#0A0E1A", color: "#fff", minHeight: "100vh" }}>
      <Navbar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartCount={cart.length}
        onOpenCart={() => setCartOpen(true)}
        compareCount={compareList.length}
        onOpenCompare={() => setCompareOpen(true)}
      />

      <Hero />
      <Stats />

      <ProductsSection
        categories={CATEGORIES}
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        filteredProducts={filteredProducts}
        compareList={compareList}
        onToggleCompare={toggleCompare}
        onSelectProduct={setSelectedProduct}
        onAddToCart={addToCart}
      />

      <Industries />
      <WhyGeep />
      <Certifications />
      <Clients />

      <Contact
        formData={formData}
        onFormChange={(field, value) => setFormData((prev) => ({ ...prev, [field]: value }))}
        onSendWhatsApp={sendContactWhatsApp}
      />

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={addToCart}
      />

      <RfqCartModal
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        onUpdateQty={updateCartQty}
        onRemoveItem={removeFromCart}
        formData={formData}
        onFormFieldChange={(field, value) => setFormData((prev) => ({ ...prev, [field]: value }))}
        onSendWhatsApp={sendWhatsApp}
      />

      <CompareModal open={compareOpen} compareList={compareList} onClose={() => setCompareOpen(false)} />

      <FloatingWhatsApp />
      <ScrollToTop visible={showScrollTop} />
    </div>
  );
}
