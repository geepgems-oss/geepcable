import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const COMPANY = {
  name: "GEEP Cables",
  tagline: "Powering India Since 1983",
  phone: "+91 98999 80415",
  whatsapp: "919899980415",
  email: "info@geepcable.com",
  address: "F-203 A, I.I.D Center RIICO Industrial Area, Khushkhera Dist. Alwar, Rajasthan, India - 301019",
  established: "1983",
};

const PRODUCTS = [
  {
    id: 1, category: "House Wire", name: "FR House Wire",
    desc: "Flame Retardant PVC insulated copper conductor wire for domestic wiring",
    specs: ["Conductor: Electrolytic Grade Copper", "Insulation: FR PVC", "Voltage: 1100V", "Size: 0.5 to 10 Sq.mm"],
    applications: ["Home Wiring", "Office Wiring", "Shops", "Hotels"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", color: "#FF6B35",
  },
  {
    id: 2, category: "House Wire", name: "FRLS House Wire",
    desc: "Flame Retardant Low Smoke PVC insulated wire for enclosed spaces",
    specs: ["Conductor: Electrolytic Grade Copper", "Insulation: FRLS PVC", "Voltage: 1100V", "Size: 0.5 to 16 Sq.mm"],
    applications: ["Hospitals", "Hotels", "Malls", "Airports"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=400", color: "#FF6B35",
  },
  {
    id: 3, category: "House Wire", name: "FRLSH House Wire",
    desc: "Flame Retardant Low Smoke Halogen Free wire for high safety areas",
    specs: ["Conductor: Electrolytic Grade Copper", "Insulation: FRLSH XLPE", "Voltage: 1100V", "Size: 1.0 to 10 Sq.mm"],
    applications: ["Nuclear Plants", "Metros", "Tunnels", "Data Centers"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", color: "#FF6B35",
  },
  {
    id: 4, category: "Flexible Cable", name: "Multicore Flexible Cable",
    desc: "Multi-strand flexible copper conductor cable for portable equipment",
    specs: ["Conductor: Fine Stranded Copper", "Insulation: PVC", "Voltage: 1100V", "Cores: 2 to 5"],
    applications: ["Power Tools", "Appliances", "Extension Boards", "Machinery"],
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400", color: "#4ECDC4",
  },
  {
    id: 5, category: "Flexible Cable", name: "Heat Resistant Flexible Cable",
    desc: "Silicon rubber insulated flexible cable for high temperature applications",
    specs: ["Conductor: Tinned Copper", "Insulation: Silicon Rubber", "Temp: -60C to 180C", "Voltage: 1100V"],
    applications: ["Furnaces", "Ovens", "Steel Plants", "Foundries"],
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400", color: "#4ECDC4",
  },
  {
    id: 6, category: "Control Cable", name: "PVC Control Cable",
    desc: "Multi-core PVC insulated and sheathed control cable",
    specs: ["Conductor: Stranded Copper", "Insulation: PVC", "Voltage: 1100V", "Cores: 2 to 61"],
    applications: ["Control Panels", "Instrumentation", "Automation", "Switchgear"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", color: "#45B7D1",
  },
  {
    id: 7, category: "Control Cable", name: "XLPE Control Cable",
    desc: "Cross linked polyethylene insulated control cable for industrial use",
    specs: ["Conductor: Stranded Copper", "Insulation: XLPE", "Voltage: 1100V", "Cores: 2 to 37"],
    applications: ["Power Plants", "Refineries", "Chemical Plants", "Steel Mills"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", color: "#45B7D1",
  },
  {
    id: 8, category: "Armoured Cable", name: "PVC Armoured Cable",
    desc: "Steel wire armoured PVC cable for underground and outdoor installation",
    specs: ["Conductor: Stranded Copper/Aluminium", "Insulation: PVC", "Armour: GI Wire", "Voltage: 1100V"],
    applications: ["Underground", "Outdoor", "Industrial", "Power Distribution"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400", color: "#96CEB4",
  },
  {
    id: 9, category: "Armoured Cable", name: "XLPE Armoured Cable",
    desc: "XLPE insulated steel wire armoured cable for heavy duty applications",
    specs: ["Conductor: Stranded Copper/Aluminium", "Insulation: XLPE", "Armour: GI Wire", "Voltage: 1100V to 33KV"],
    applications: ["Power Plants", "Substations", "Mining", "Railways"],
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400", color: "#96CEB4",
  },
  {
    id: 10, category: "Solar Cable", name: "DC Solar Cable",
    desc: "UV resistant double insulated solar cable for photovoltaic systems",
    specs: ["Conductor: Tinned Copper", "Insulation: XLPE + EVA", "Voltage: 1800V DC", "Temp: -40C to 90C"],
    applications: ["Solar Panels", "Inverters", "Solar Farms", "Rooftop Solar"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400", color: "#FFEAA7",
  },
  {
    id: 11, category: "Solar Cable", name: "AC Solar Cable",
    desc: "FRLS PVC insulated cable for AC side of solar power systems",
    specs: ["Conductor: Stranded Copper", "Insulation: FRLS PVC", "Voltage: 1100V AC", "UV Resistant"],
    applications: ["Solar Inverter Output", "Grid Connection", "Solar Plants", "Hybrid Systems"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=400", color: "#FFEAA7",
  },
  {
    id: 12, category: "Instrumentation Cable", name: "Instrumentation Cable",
    desc: "Overall and individually shielded cable for signal transmission",
    specs: ["Conductor: Stranded Copper", "Insulation: PVC/XLPE", "Shield: Aluminium Foil", "Pairs: 1 to 20"],
    applications: ["Process Control", "DCS Systems", "PLC Systems", "Oil and Gas"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", color: "#DDA0DD",
  },
  {
    id: 13, category: "Instrumentation Cable", name: "Thermocouple Cable",
    desc: "Compensating and extension cables for thermocouple temperature measurement",
    specs: ["Conductor: Thermocouple Alloy", "Insulation: PVC/PTFE", "Temp: -20C to 200C", "Types: J K T E R S"],
    applications: ["Temperature Measurement", "Furnaces", "Boilers", "Chemical Plants"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", color: "#DDA0DD",
  },
  {
    id: 14, category: "Power Cable", name: "LT Power Cable",
    desc: "Low tension XLPE insulated PVC sheathed power cable",
    specs: ["Conductor: Stranded Copper/Aluminium", "Insulation: XLPE", "Voltage: Up to 1.1KV", "Size: 1.5 to 400 Sq.mm"],
    applications: ["Power Distribution", "Industrial", "Commercial", "Infrastructure"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400", color: "#FF8C94",
  },
  {
    id: 15, category: "Power Cable", name: "HT Power Cable",
    desc: "High tension XLPE insulated cable for primary power distribution",
    specs: ["Conductor: Stranded Copper/Aluminium", "Insulation: XLPE", "Voltage: 3.3KV to 33KV", "Size: 25 to 630 Sq.mm"],
    applications: ["Grid Substations", "Power Plants", "Industries", "Smart Cities"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400", color: "#FF8C94",
  },
  {
    id: 16, category: "Coaxial Cable", name: "RG Series Coaxial Cable",
    desc: "High frequency coaxial cable for CCTV antenna and data transmission",
    specs: ["Conductor: Copper Clad Steel", "Insulation: PE Foam", "Shield: Aluminium Foil + Braid", "Types: RG6 RG11 RG59"],
    applications: ["CCTV Systems", "Cable TV", "Antenna", "Broadband"],
    image: "https://images.unsplash.com/photo-1544724107-6d5e4b8e5e5e?w=400", color: "#A8E6CF",
  },
  {
    id: 17, category: "Coaxial Cable", name: "Triaxial Cable",
    desc: "Triple shielded coaxial cable for high interference environments",
    specs: ["Conductor: Bare Copper", "Insulation: PE", "Shield: Triple Layer", "Impedance: 50/75 Ohm"],
    applications: ["Broadcasting", "Medical Equipment", "Test and Measurement", "Defence"],
    image: "https://images.unsplash.com/photo-1544724107-6d5e4b8e5e5e?w=400", color: "#A8E6CF",
  },
  {
    id: 18, category: "Fire Survival Cable", name: "Fire Survival Cable",
    desc: "Circuit integrity cable that maintains function during fire for 3 hours",
    specs: ["Conductor: Stranded Copper", "Insulation: Mica + XLPE", "Fire Survival: 3 Hours at 950C", "Voltage: 1100V"],
    applications: ["Fire Alarms", "Emergency Lighting", "Sprinkler Systems", "Nuclear Plants"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", color: "#FFB347",
  },
  {
    id: 19, category: "Fire Survival Cable", name: "Enhanced Fire Resistant Cable",
    desc: "Enhanced fire resistant cable with LSZH sheath for critical installations",
    specs: ["Conductor: Stranded Copper", "Insulation: Mica Tape + XLPE", "LSZH Sheath", "IEC 60331 Certified"],
    applications: ["Metros", "Airports", "Hospitals", "High Rise Buildings"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400", color: "#FFB347",
  },
  {
    id: 20, category: "Submersible Cable", name: "Submersible Pump Cable",
    desc: "Water resistant cable for submersible pump applications",
    specs: ["Conductor: Stranded Copper", "Insulation: PVC", "Sheath: Water Resistant PVC", "Voltage: 1100V"],
    applications: ["Submersible Pumps", "Borewell", "Agriculture", "Water Supply"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400", color: "#87CEEB",
  },
  {
    id: 21, category: "Welding Cable", name: "Welding Cable",
    desc: "Highly flexible rubber insulated cable for welding machines",
    specs: ["Conductor: Fine Stranded Copper", "Insulation: Rubber", "Voltage: 100V", "Size: 16 to 120 Sq.mm"],
    applications: ["Arc Welding", "MIG Welding", "TIG Welding", "Spot Welding"],
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400", color: "#F0E68C",
  },
  {
    id: 22, category: "Data Cable", name: "CAT6 LAN Cable",
    desc: "High performance Category 6 UTP cable for Gigabit ethernet networks",
    specs: ["Conductor: 23 AWG Copper", "Insulation: HDPE", "Sheath: PVC/LSZH", "Speed: 1 Gbps"],
    applications: ["Data Centers", "Office Networks", "Smart Buildings", "CCTV NVR"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", color: "#98FB98",
  },
  {
    id: 23, category: "Data Cable", name: "CAT6A LAN Cable",
    desc: "Augmented Category 6 cable supporting 10 Gigabit ethernet",
    specs: ["Conductor: 23 AWG Copper", "Insulation: HDPE", "Sheath: LSZH", "Speed: 10 Gbps"],
    applications: ["Data Centers", "Server Rooms", "Enterprise Networks", "Banking"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400", color: "#98FB98",
  },
  {
    id: 24, category: "Elevator Cable", name: "Elevator Travelling Cable",
    desc: "Flexible travelling cable for elevator and lift applications",
    specs: ["Conductor: Fine Stranded Copper", "Insulation: PVC", "Cores: 12 to 48", "Flexible: High Flex Life"],
    applications: ["Elevators", "Lifts", "Escalators", "Moving Walkways"],
    image: "https://images.unsplash.com/photo-1601972599720-36938d4ecd31?w=400", color: "#DEB887",
  },
];

const CATEGORIES = ["All", ...new Set(PRODUCTS.map((p) => p.category))];

const CLIENTS = [
  "BPCL", "GAIL", "ONGC", "NTPC", "BHEL", "L&T", "Tata Power",
  "Adani Power", "Reliance Industries", "Indian Railways", "Delhi Metro",
  "Mumbai Metro", "DMRC", "PGCIL", "NPCIL", "HAL", "DRDO", "ISRO",
  "Hindustan Zinc", "Vedanta", "JSW Steel", "SAIL", "RINL", "NMDC",
  "Coal India", "SCCL", "NLC", "THDC", "NHPC", "SJVN",
];

const CERTIFICATIONS = [
  { name: "ISO 9001:2015", desc: "Quality Management System", icon: "🏆" },
  { name: "ISO 14001:2015", desc: "Environmental Management", icon: "🌿" },
  { name: "BIS Certified", desc: "Bureau of Indian Standards", icon: "🇮🇳" },
  { name: "ISI Mark", desc: "Indian Standards Institute", icon: "⭐" },
  { name: "CPRI Tested", desc: "Central Power Research Institute", icon: "⚡" },
  { name: "ERDA Approved", desc: "Electrical Research Dev Association", icon: "🔬" },
  { name: "CE Marked", desc: "European Conformity", icon: "🇪🇺" },
  { name: "RoHS Compliant", desc: "Restriction of Hazardous Substances", icon: "✅" },
];

const INDUSTRIES = [
  { name: "Power & Energy", icon: "⚡", color: "#FFD700" },
  { name: "Oil & Gas", icon: "🛢️", color: "#FF6B35" },
  { name: "Railways & Metro", icon: "🚇", color: "#4ECDC4" },
  { name: "Solar & Renewable", icon: "☀️", color: "#FFEAA7" },
  { name: "Steel & Mining", icon: "⛏️", color: "#96CEB4" },
  { name: "Hospitals", icon: "🏥", color: "#FF8C94" },
  { name: "Data Centers", icon: "💻", color: "#98FB98" },
  { name: "Defence & Aerospace", icon: "🚀", color: "#DDA0DD" },
  { name: "Smart Cities", icon: "🏙️", color: "#87CEEB" },
  { name: "Petrochemicals", icon: "🏭", color: "#DEB887" },
  { name: "Airports", icon: "✈️", color: "#A8E6CF" },
  { name: "Construction", icon: "🏗️", color: "#F0E68C" },
];

const SOCIAL = ["LinkedIn", "Twitter", "Instagram", "YouTube"];

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
    const matchSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find((i) => i.id === product.id);
      if (exists) return prev.map((i) => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const addToCompare = (product) => {
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

  return (
    <div style={{ fontFamily: "sans-serif", background: "#0A0E1A", color: "#fff", minHeight: "100vh" }}>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(10,14,26,0.97)", backdropFilter: "blur(20px)",
        borderBottom: "1px solid rgba(255,107,53,0.2)",
        padding: "0 5%", display: "flex", alignItems: "center",
        justifyContent: "space-between", height: "70px",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <div style={{
            width: "44px", height: "44px", borderRadius: "10px",
            background: "linear-gradient(135deg, #FF6B35, #FF8C35)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontWeight: 800, fontSize: "18px", color: "#fff",
          }}>GC</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: "20px", color: "#FF6B35" }}>GEEP CABLES</div>
            <div style={{ fontSize: "10px", color: "#888", letterSpacing: "2px" }}>POWERING INDIA SINCE 1983</div>
          </div>
        </div>

        <div style={{
          display: "flex", alignItems: "center", gap: "8px",
          background: "rgba(255,255,255,0.05)", borderRadius: "8px", padding: "8px 14px",
        }}>
          <span style={{ color: "#888", fontSize: "14px" }}>🔍</span>
          <input
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{ background: "none", border: "none", outline: "none", color: "#fff", width: "180px", fontSize: "14px" }}
          />
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <button onClick={() => setCartOpen(true)} style={{
            background: "rgba(255,107,53,0.15)", border: "1px solid rgba(255,107,53,0.3)",
            borderRadius: "8px", padding: "8px 16px", color: "#FF6B35",
            cursor: "pointer", fontSize: "14px",
          }}>
            🛒 RFQ ({cart.length})
          </button>

          {compareList.length > 0 && (
            <button onClick={() => setCompareOpen(true)} style={{
              background: "rgba(78,205,196,0.15)", border: "1px solid rgba(78,205,196,0.3)",
              borderRadius: "8px", padding: "8px 16px", color: "#4ECDC4",
              cursor: "pointer", fontSize: "14px",
            }}>
              Compare ({compareList.length})
            </button>
          )}

          <a href={`tel:${COMPANY.phone}`} style={{
            background: "linear-gradient(135deg, #FF6B35, #FF8C35)",
            borderRadius: "8px", padding: "8px 18px",
            color: "#fff", fontSize: "14px",
            textDecoration: "none",
          }}>
            📞 Call Now
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section style={{
        minHeight: "100vh", display: "flex", alignItems: "center",
        background: "linear-gradient(135deg, #0A0E1A 0%, #0D1528 60%, #0A0E1A 100%)",
        padding: "100px 5% 60px", position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "15%", right: "5%", width: "500px", height: "500px",
          borderRadius: "50%", background: "radial-gradient(circle, rgba(255,107,53,0.12) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          style={{ maxWidth: "650px", zIndex: 1 }}
        >
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "rgba(255,107,53,0.12)", border: "1px solid rgba(255,107,53,0.3)",
            borderRadius: "50px", padding: "6px 18px", marginBottom: "28px",
          }}>
            <span style={{ color: "#FF6B35", fontSize: "12px", letterSpacing: "2px", fontWeight: 700 }}>
              ⚡ ISO 9001:2015 CERTIFIED MANUFACTURER
            </span>
          </div>

          <h1 style={{ fontSize: "clamp(44px, 7vw, 78px)", fontWeight: 800, lineHeight: 1.1, marginBottom: "24px" }}>
            India's Most Trusted<br />
            <span style={{ color: "#FF6B35" }}>Cable Manufacturer</span>
          </h1>

          <p style={{ fontSize: "17px", color: "#aaa", lineHeight: 1.8, marginBottom: "40px", maxWidth: "540px" }}>
            40+ Years of Excellence • 900+ Satisfied Clients • 24 Product Categories •
            Supplying to BPCL, GAIL, NTPC, L&T, Indian Railways & more
          </p>

          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button
              onClick={() => document.getElementById("products").scrollIntoView({ behavior: "smooth" })}
              style={{
                background: "linear-gradient(135deg, #FF6B35, #FF8C35)",
                border: "none", borderRadius: "12px", padding: "15px 32px",
                color: "#fff", fontSize: "16px", fontWeight: 700, cursor: "pointer",
              }}>
              Explore Products →
            </button>
            <button
              onClick={() => window.open(`https://wa.me/${COMPANY.whatsapp}?text=Hello GEEP Cables! I need a quote.`)}
              style={{
                background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.35)",
                borderRadius: "12px", padding: "15px 32px",
                color: "#25D366", fontSize: "16px", fontWeight: 700, cursor: "pointer",
              }}>
              💬 WhatsApp Quote
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          style={{ position: "absolute", right: "5%", top: "50%", transform: "translateY(-50%)", zIndex: 0 }}
        >
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=580"
            alt="GEEP Cables"
            style={{ width: "clamp(280px, 38vw, 520px)", borderRadius: "24px", opacity: 0.75 }}
          />
        </motion.div>
      </section>

      {/* STATS */}
      <section style={{ background: "linear-gradient(135deg, #FF6B35, #E55A2B)", padding: "36px 5%" }}>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
          {[
            { num: "40+", label: "Years Experience" },
            { num: "900+", label: "Happy Clients" },
            { num: "24", label: "Product Categories" },
            { num: "50+", label: "Countries Exported" },
            { num: "8", label: "Certifications" },
            { num: "1983", label: "Established" },
          ].map((stat, i) => (
            <div key={i} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "40px", fontWeight: 800, color: "#fff" }}>{stat.num}</div>
              <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.8)", letterSpacing: "1px" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: "80px 5%" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 800, marginBottom: "12px" }}>
            Our <span style={{ color: "#FF6B35" }}>Products</span>
          </h2>
          <p style={{ color: "#888", fontSize: "15px" }}>24 Categories • 100+ Variants • IS/IEC Standards</p>
        </div>

        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center", marginBottom: "40px" }}>
          {CATEGORIES.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)} style={{
              padding: "8px 20px", borderRadius: "50px", cursor: "pointer",
              fontSize: "13px", fontWeight: 600,
              background: activeCategory === cat ? "linear-gradient(135deg, #FF6B35, #FF8C35)" : "rgba(255,255,255,0.05)",
              border: activeCategory === cat ? "none" : "1px solid rgba(255,255,255,0.1)",
              color: activeCategory === cat ? "#fff" : "#aaa",
            }}>{cat}</button>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
          {filteredProducts.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04 }}
              whileHover={{ y: -6 }}
              style={{
                background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "16px", overflow: "hidden",
              }}
            >
              <div style={{ position: "relative", height: "200px", overflow: "hidden" }}>
                <img src={product.image} alt={product.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div style={{
                  position: "absolute", top: "12px", left: "12px",
                  background: product.color, color: "#000",
                  borderRadius: "6px", padding: "3px 10px", fontSize: "11px", fontWeight: 700,
                }}>{product.category}</div>
                <button
                  onClick={(e) => { e.stopPropagation(); addToCompare(product); }}
                  style={{
                    position: "absolute", top: "12px", right: "12px",
                    background: compareList.find((p) => p.id === product.id) ? "#4ECDC4" : "rgba(0,0,0,0.6)",
                    border: "none", borderRadius: "6px", padding: "5px 9px",
                    color: "#fff", cursor: "pointer", fontSize: "11px",
                  }}>⇌</button>
              </div>

              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, marginBottom: "8px" }}>{product.name}</h3>
                <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.5, marginBottom: "14px" }}>{product.desc}</p>
                {product.specs.slice(0, 2).map((spec, j) => (
                  <div key={j} style={{ fontSize: "12px", color: "#aaa", marginBottom: "4px" }}>
                    <span style={{ color: product.color }}>▸ </span>{spec}
                  </div>
                ))}
                <div style={{ display: "flex", gap: "8px", marginTop: "16px" }}>
                  <button
                    onClick={() => setSelectedProduct(product)}
                    style={{
                      flex: 1, padding: "10px", borderRadius: "8px", cursor: "pointer",
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff", fontSize: "13px",
                    }}>
                    👁 Details
                  </button>
                  <button
                    onClick={() => addToCart(product)}
                    style={{
                      flex: 1, padding: "10px", borderRadius: "8px", cursor: "pointer",
                      background: `linear-gradient(135deg, ${product.color}, ${product.color}bb)`,
                      border: "none", color: "#000", fontSize: "13px", fontWeight: 700,
                    }}>
                    + Quote
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* INDUSTRIES */}
      <section style={{ padding: "80px 5%", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
            Industries We <span style={{ color: "#FF6B35" }}>Serve</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(175px, 1fr))", gap: "18px" }}>
          {INDUSTRIES.map((ind, i) => (
            <motion.div key={i} whileHover={{ scale: 1.05 }} style={{
              background: "rgba(255,255,255,0.03)", border: `1px solid ${ind.color}33`,
              borderRadius: "14px", padding: "24px", textAlign: "center", cursor: "pointer",
            }}>
              <div style={{ fontSize: "34px", marginBottom: "10px" }}>{ind.icon}</div>
              <div style={{ fontSize: "13px", fontWeight: 600, color: ind.color }}>{ind.name}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* WHY GEEP */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
            Why Choose <span style={{ color: "#FF6B35" }}>GEEP Cables?</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "22px" }}>
          {[
            { icon: "🏭", title: "Own Manufacturing Plant", desc: "State-of-the-art facility in Rajasthan with latest machinery and strict quality control" },
            { icon: "🔬", title: "In-House Testing Lab", desc: "NABL accredited lab with 50+ testing parameters checked for every cable batch" },
            { icon: "📦", title: "PAN India Delivery", desc: "Warehouses in 8 cities — Delhi, Mumbai, Chennai, Kolkata, Hyderabad and more" },
            { icon: "⚡", title: "Fast Turnaround", desc: "Standard orders dispatched in 3-5 days, urgent orders within 24 hours" },
            { icon: "💰", title: "Competitive Pricing", desc: "Direct manufacturer pricing — no middlemen, save 15-20% vs market rates" },
            { icon: "🤝", title: "40+ Years Trust", desc: "Supplying to PSUs, Government projects and Fortune 500 companies since 1983" },
          ].map((item, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} style={{
              background: "rgba(255,107,53,0.04)", border: "1px solid rgba(255,107,53,0.12)",
              borderRadius: "16px", padding: "26px",
            }}>
              <div style={{ fontSize: "34px", marginBottom: "14px" }}>{item.icon}</div>
              <h3 style={{ fontSize: "17px", fontWeight: 700, marginBottom: "10px", color: "#FF6B35" }}>{item.title}</h3>
              <p style={{ fontSize: "14px", color: "#888", lineHeight: 1.6 }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section style={{ padding: "80px 5%", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
            Our <span style={{ color: "#FF6B35" }}>Certifications</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(210px, 1fr))", gap: "18px" }}>
          {CERTIFICATIONS.map((cert, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,215,0,0.18)",
              borderRadius: "14px", padding: "22px", textAlign: "center",
            }}>
              <div style={{ fontSize: "30px", marginBottom: "10px" }}>{cert.icon}</div>
              <div style={{ fontSize: "15px", fontWeight: 700, color: "#FFD700", marginBottom: "6px" }}>{cert.name}</div>
              <div style={{ fontSize: "12px", color: "#888" }}>{cert.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section style={{ padding: "80px 5%" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
            Our Trusted <span style={{ color: "#FF6B35" }}>Clients</span>
          </h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "14px", justifyContent: "center" }}>
          {CLIENTS.map((client, i) => (
            <div key={i} style={{
              background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)",
              borderRadius: "10px", padding: "10px 22px", fontSize: "14px", fontWeight: 600, color: "#ccc",
            }}>{client}</div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "80px 5%", background: "rgba(255,255,255,0.015)" }}>
        <div style={{ textAlign: "center", marginBottom: "50px" }}>
          <h2 style={{ fontSize: "48px", fontWeight: 800 }}>
            Get In <span style={{ color: "#FF6B35" }}>Touch</span>
          </h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", maxWidth: "960px", margin: "0 auto" }}>
          <div>
            <h3 style={{ fontSize: "20px", fontWeight: 700, marginBottom: "24px", color: "#FF6B35" }}>Contact Information</h3>
            {[
              { icon: "📞", label: "Phone", value: COMPANY.phone },
              { icon: "📧", label: "Email", value: COMPANY.email },
              { icon: "📍", label: "Address", value: COMPANY.address },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "14px", marginBottom: "22px" }}>
                <div style={{
                  width: "42px", height: "42px", borderRadius: "10px",
                  background: "rgba(255,107,53,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px", flexShrink: 0,
                }}>{item.icon}</div>
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
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    rows={4}
                    style={{
                      width: "100%", padding: "12px 14px", borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff", fontSize: "14px", resize: "none", outline: "none", boxSizing: "border-box",
                    }}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    value={formData[field]}
                    onChange={(e) => setFormData({ ...formData, [field]: e.target.value })}
                    style={{
                      width: "100%", padding: "12px 14px", borderRadius: "10px",
                      background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                      color: "#fff", fontSize: "14px", outline: "none", boxSizing: "border-box",
                    }}
                  />
                )}
              </div>
            ))}
            <button onClick={sendContactWhatsApp} style={{
              width: "100%", padding: "14px", borderRadius: "10px",
              background: "linear-gradient(135deg, #FF6B35, #FF8C35)",
              border: "none", color: "#fff", fontSize: "16px", fontWeight: 700, cursor: "pointer",
            }}>
              Send via WhatsApp 💬
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "#060810", padding: "36px 5%", borderTop: "1px solid rgba(255,107,53,0.15)" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" }}>
          <div>
            <div style={{ fontSize: "22px", fontWeight: 800, color: "#FF6B35", marginBottom: "6px" }}>GEEP CABLES</div>
            <div style={{ fontSize: "12px", color: "#555" }}>© 2024 GEEP Cables. All Rights Reserved.</div>
            <div style={{ fontSize: "12px", color: "#555", marginTop: "4px" }}>{COMPANY.address}</div>
          </div>
          <div style={{ display: "flex", gap: "10px" }}>
            {SOCIAL.map((s, i) => (
              <div key={i} style={{
                background: "rgba(255,107,53,0.12)", borderRadius: "8px",
                padding: "8px 12px", cursor: "pointer", fontSize: "12px", color: "#FF6B35",
              }}>{s}</div>
            ))}
          </div>
        </div>
      </footer>

      {/* PRODUCT MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 2000,
              display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
            }}
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.88, y: 24 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.88, y: 24 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#0D1528", borderRadius: "20px", padding: "30px",
                maxWidth: "580px", width: "100%", maxHeight: "88vh", overflowY: "auto",
                border: `1px solid ${selectedProduct.color}44`,
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "18px" }}>
                <h2 style={{ fontSize: "22px", fontWeight: 700, color: selectedProduct.color }}>{selectedProduct.name}</h2>
                <button onClick={() => setSelectedProduct(null)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "20px" }}>✕</button>
              </div>
              <img src={selectedProduct.image} alt={selectedProduct.name} style={{ width: "100%", borderRadius: "12px", marginBottom: "18px" }} />
              <p style={{ color: "#aaa", marginBottom: "18px", lineHeight: 1.65, fontSize: "14px" }}>{selectedProduct.desc}</p>
              <h4 style={{ color: selectedProduct.color, marginBottom: "10px" }}>Technical Specifications:</h4>
              {selectedProduct.specs.map((spec, i) => (
                <div key={i} style={{ padding: "8px 0", borderBottom: "1px solid rgba(255,255,255,0.05)", fontSize: "13px", color: "#ccc" }}>
                  <span style={{ color: selectedProduct.color }}>▸ </span>{spec}
                </div>
              ))}
              <h4 style={{ color: selectedProduct.color, margin: "18px 0 10px" }}>Applications:</h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "22px" }}>
                {selectedProduct.applications.map((app, i) => (
                  <span key={i} style={{
                    background: `${selectedProduct.color}1a`, border: `1px solid ${selectedProduct.color}44`,
                    borderRadius: "6px", padding: "4px 12px", fontSize: "12px", color: selectedProduct.color,
                  }}>{app}</span>
                ))}
              </div>
              <div style={{ display: "flex", gap: "12px" }}>
                <button
                  onClick={() => { addToCart(selectedProduct); setSelectedProduct(null); }}
                  style={{
                    flex: 1, padding: "13px", borderRadius: "10px",
                    background: `linear-gradient(135deg, ${selectedProduct.color}, ${selectedProduct.color}cc)`,
                    border: "none", color: "#000", fontWeight: 700, cursor: "pointer", fontSize: "14px",
                  }}>+ Add to RFQ</button>
                <button
                  onClick={() => window.open(`https://wa.me/${COMPANY.whatsapp}?text=Hello! I need details about ${selectedProduct.name}`)}
                  style={{
                    flex: 1, padding: "13px", borderRadius: "10px",
                    background: "rgba(37,211,102,0.12)", border: "1px solid rgba(37,211,102,0.35)",
                    color: "#25D366", fontWeight: 700, cursor: "pointer", fontSize: "14px",
                  }}>💬 WhatsApp</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* RFQ CART */}
      <AnimatePresence>
        {cartOpen && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, background: "rgba(0,0,0,0.88)", zIndex: 2000,
              display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
            }}
            onClick={() => setCartOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88 }} animate={{ scale: 1 }} exit={{ scale: 0.88 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#0D1528", borderRadius: "20px", padding: "30px",
                maxWidth: "480px", width: "100%", maxHeight: "82vh", overflowY: "auto",
                border: "1px solid rgba(255,107,53,0.25)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "22px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#FF6B35" }}>RFQ Cart ({cart.length})</h2>
                <button onClick={() => setCartOpen(false)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "20px" }}>✕</button>
              </div>

              {cart.length === 0 ? (
                <div style={{ textAlign: "center", color: "#888", padding: "40px 0" }}>
                  <div style={{ fontSize: "48px", marginBottom: "14px" }}>🛒</div>
                  <p>No products added yet</p>
                </div>
              ) : (
                <>
                  {cart.map((item, i) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.05)",
                    }}>
                      <div>
                        <div style={{ fontSize: "14px", fontWeight: 600 }}>{item.name}</div>
                        <div style={{ fontSize: "12px", color: "#888" }}>{item.category}</div>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                        <button
                          onClick={() => setCart((prev) => prev.map((p) => p.id === item.id ? { ...p, qty: Math.max(1, p.qty - 1) } : p))}
                          style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", borderRadius: "4px", padding: "2px 8px", cursor: "pointer" }}>-</button>
                        <span style={{ fontSize: "14px", minWidth: "20px", textAlign: "center" }}>{item.qty}</span>
                        <button
                          onClick={() => setCart((prev) => prev.map((p) => p.id === item.id ? { ...p, qty: p.qty + 1 } : p))}
                          style={{ background: "rgba(255,255,255,0.08)", border: "none", color: "#fff", borderRadius: "4px", padding: "2px 8px", cursor: "pointer" }}>+</button>
                        <button
                          onClick={() => setCart((prev) => prev.filter((p) => p.id !== item.id))}
                          style={{ background: "none", border: "none", color: "#ff4444", cursor: "pointer", fontSize: "16px" }}>✕</button>
                      </div>
                    </div>
                  ))}
                  <div style={{ marginTop: "22px" }}>
                    <input
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: "100%", padding: "11px 14px", borderRadius: "8px", marginBottom: "10px",
                        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                        color: "#fff", outline: "none", boxSizing: "border-box", fontSize: "14px",
                      }}
                    />
                    <input
                      placeholder="Your Phone *"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      style={{
                        width: "100%", padding: "11px 14px", borderRadius: "8px", marginBottom: "16px",
                        background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)",
                        color: "#fff", outline: "none", boxSizing: "border-box", fontSize: "14px",
                      }}
                    />
                    <button onClick={sendWhatsApp} style={{
                      width: "100%", padding: "14px", borderRadius: "10px",
                      background: "linear-gradient(135deg, #25D366, #128C7E)",
                      border: "none", color: "#fff", fontSize: "15px", fontWeight: 700, cursor: "pointer",
                    }}>
                      Send RFQ via WhatsApp 💬
                    </button>
                  </div>
                </>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* COMPARE MODAL */}
      <AnimatePresence>
        {compareOpen && compareList.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{
              position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 2000,
              display: "flex", alignItems: "center", justifyContent: "center", padding: "20px",
            }}
            onClick={() => setCompareOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.88 }} animate={{ scale: 1 }} exit={{ scale: 0.88 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                background: "#0D1528", borderRadius: "20px", padding: "30px",
                maxWidth: "880px", width: "100%", maxHeight: "88vh", overflowY: "auto",
                border: "1px solid rgba(78,205,196,0.25)",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "22px" }}>
                <h2 style={{ fontSize: "20px", fontWeight: 700, color: "#4ECDC4" }}>Product Comparison</h2>
                <button onClick={() => setCompareOpen(false)} style={{ background: "none", border: "none", color: "#888", cursor: "pointer", fontSize: "20px" }}>✕</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: `repeat(${compareList.length}, 1fr)`, gap: "16px" }}>
                {compareList.map((product, i) => (
                  <div key={i} style={{
                    background: "rgba(255,255,255,0.03)", borderRadius: "12px", padding: "16px",
                    border: `1px solid ${product.color}33`,
                  }}>
                    <img src={product.image} alt={product.name} style={{ width: "100%", borderRadius: "8px", marginBottom: "12px" }} />
                    <h3 style={{ fontSize: "15px", fontWeight: 700, color: product.color, marginBottom: "12px" }}>{product.name}</h3>
                    {product.specs.map((spec, j) => (
                      <div key={j} style={{ fontSize: "12px", color: "#aaa", padding: "6px 0", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                        {spec}
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* WHATSAPP FLOAT */}
      <a
        href={`https://wa.me/${COMPANY.whatsapp}?text=Hello GEEP Cables! I need a quote.`}
        target="_blank" rel="noreferrer"
        style={{
          position: "fixed", bottom: "24px", right: "24px", zIndex: 999,
          width: "58px", height: "58px", borderRadius: "50%",
          background: "linear-gradient(135deg, #25D366, #128C7E)",
          display: "flex", alignItems: "center", justifyContent: "center",
          boxShadow: "0 4px 22px rgba(37,211,102,0.4)",
          textDecoration: "none", fontSize: "26px",
        }}>
        💬
      </a>

      {/* SCROLL TOP */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            style={{
              position: "fixed", bottom: "92px", right: "24px", zIndex: 999,
              width: "42px", height: "42px", borderRadius: "50%",
              background: "rgba(255,107,53,0.75)", border: "none",
              color: "#fff", cursor: "pointer", fontSize: "18px",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
            ↑
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}