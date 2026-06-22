import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Fuel, Settings, Star, CheckCircle2, Phone, MessageCircle } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

type Category = "semua" | "city-car" | "sedan" | "suv" | "mpv" | "minibus";

interface Vehicle {
  id: number;
  name: string;
  brand: string;
  category: Category;
  price: number;
  priceDriver: number;
  seats: number;
  fuel: string;
  transmission: string;
  year: number;
  rating: number;
  reviews: number;
  image: string;
  features: string[];
  badge?: string;
}

const vehicles: Vehicle[] = [
  {
    id: 1, name: "Brio RS", brand: "Honda", category: "city-car",
    price: 320_000, priceDriver: 500_000, seats: 4, fuel: "Bensin", transmission: "Otomatis",
    year: 2023, rating: 4.8, reviews: 124,
    image: "https://www.harapanrakyat.com/wp-content/uploads/2023/05/New-Honda-Brio-RS-2023-Tampilannya-Lebih-Sporty-dan-Stylish-1024x576.jpg",
    features: ["AC", "Bluetooth", "USB Charging", "Central Lock"],
  },
  {
    id: 2, name: "Agya TRD", brand: "Toyota", category: "city-car",
    price: 280_000, priceDriver: 460_000, seats: 4, fuel: "Bensin", transmission: "Otomatis",
    year: 2023, rating: 4.7, reviews: 98,
    image: "https://imgcdn.oto.com/large/gallery/color/38/1732/toyota-agya-color-932023.jpg",
    features: ["AC", "Bluetooth", "Kamera Mundur"],
    badge: "Hemat",
  },
  {
    id: 3, name: "Camry Hybrid", brand: "Toyota", category: "sedan",
    price: 1_100_000, priceDriver: 1_380_000, seats: 4, fuel: "Hybrid", transmission: "Otomatis",
    year: 2023, rating: 4.9, reviews: 67,
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=380&q=80&fit=crop&auto=format",
    features: ["Leather Seat", "Sunroof", "360° Camera", "Android Auto"],
    badge: "Eco",
  },
  {
    id: 4, name: "Accord", brand: "Honda", category: "sedan",
    price: 950_000, priceDriver: 1_230_000, seats: 4, fuel: "Bensin", transmission: "Otomatis",
    year: 2022, rating: 4.8, reviews: 45,
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=600&h=380&q=80&fit=crop&auto=format",
    features: ["Leather Seat", "Sunroof", "Honda Sensing"],
  },
  {
    id: 5, name: "CR-V Turbo", brand: "Honda", category: "suv",
    price: 950_000, priceDriver: 1_230_000, seats: 6, fuel: "Bensin", transmission: "Otomatis",
    year: 2023, rating: 4.9, reviews: 156,
    image: "https://tse1.mm.bing.net/th/id/OIP.WKAeiiFxsnNWRk_A23kRigHaEK?pid=Api&P=0&h=180",
    features: ["7-Speed DCT", "Turbo Engine", "Honda Sensing", "Wireless Charging"],
    badge: "Terlaris",
  },
  {
    id: 6, name: "Fortuner VRZ", brand: "Toyota", category: "suv",
    price: 1_250_000, priceDriver: 1_530_000, seats: 7, fuel: "Solar", transmission: "Otomatis",
    year: 2023, rating: 4.8, reviews: 89,
    image: "https://www.pngmart.com/files/22/Toyota-Fortuner-PNG-HD.png",
    features: ["4WD", "Diesel Turbo", "7 Penumpang", "Terrain Mode"],
  },
  {
    id: 7, name: "Alphard SC", brand: "Toyota", category: "mpv",
    price: 1_800_000, priceDriver: 2_100_000, seats: 7, fuel: "Bensin", transmission: "Otomatis",
    year: 2023, rating: 5.0, reviews: 203,
    image: "https://2024toyota.net/wp-content/uploads/2023/02/2024-Toyota-Alphard-Exterior.jpg",
    features: ["Captain Seat", "Sunroof Panoramic", "JBL Audio", "Power Door"],
    badge: "Premium",
  },
  {
    id: 8, name: "Xenia X", brand: "Daihatsu", category: "mpv",
    price: 450_000, priceDriver: 700_000, seats: 7, fuel: "Bensin", transmission: "Manual",
    year: 2023, rating: 4.6, reviews: 312,
    image: "https://imgcdn.oto.com/large/gallery/exterior/7/2437/daihatsu-xenia-2022-front-angle-low-view-954960.jpg",
    features: ["6 Kursi", "AC Double Blower", "Audio System"],
    badge: "Terjangkau",
  },
  {
    id: 9, name: "Hiace Premio", brand: "Toyota", category: "minibus",
    price: 2_200_000, priceDriver: 2_600_000, seats: 14, fuel: "Solar", transmission: "Manual",
    year: 2022, rating: 4.7, reviews: 78,
    image: "https://www.luxurybalitravel.com/wp-content/uploads/2020/09/Hiace-Premio-Exterior-2-900x600.jpeg",
    features: ["14 Kursi Premium", "AC PSD", "Audio System", "Cocok untuk Tour"],
  },
  {
    id: 10, name: "Elf Long", brand: "Isuzu", category: "minibus",
    price: 1_600_000, priceDriver: 1_950_000, seats: 16, fuel: "Solar", transmission: "Manual",
    year: 2022, rating: 4.5, reviews: 54,
    image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=380&q=80&fit=crop&auto=format",
    features: ["16 Kursi", "Diesel Turbo", "Ideal untuk Wisata Grup"],
  },
];

const categories: { key: Category; label: string; count: number }[] = [
  { key: "semua", label: "Semua", count: vehicles.length },
  { key: "city-car", label: "City Car", count: vehicles.filter(v => v.category === "city-car").length },
  { key: "sedan", label: "Sedan", count: vehicles.filter(v => v.category === "sedan").length },
  { key: "suv", label: "SUV", count: vehicles.filter(v => v.category === "suv").length },
  { key: "mpv", label: "MPV", count: vehicles.filter(v => v.category === "mpv").length },
  { key: "minibus", label: "Minibus", count: vehicles.filter(v => v.category === "minibus").length },
];

export function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("semua");
  const [withDriver, setWithDriver] = useState(false);
  const [sortBy, setSortBy] = useState<"price-asc" | "price-desc" | "rating">("rating");

  const filtered = vehicles
    .filter(v => activeCategory === "semua" || v.category === activeCategory)
    .sort((a, b) => {
      if (sortBy === "price-asc") return (withDriver ? a.priceDriver : a.price) - (withDriver ? b.priceDriver : b.price);
      if (sortBy === "price-desc") return (withDriver ? b.priceDriver : b.price) - (withDriver ? a.priceDriver : a.price);
      return b.rating - a.rating;
    });

  const formatRupiah = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

  return (
    <div>
      {/* ── HEADER ── */}
      <section style={{
        background: "linear-gradient(135deg, #0F1A3D 0%, #1B2B5E 100%)",
        padding: "7rem 1.5rem 4rem",
        textAlign: "center",
      }}>
        <motion.div initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.1 } } }}>
          <motion.p variants={fadeUp} style={{
            color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
            fontSize: "0.8125rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.875rem",
          }}>Armada Kendaraan</motion.p>
          <motion.h1 variants={fadeUp} style={{
            fontFamily: "var(--font-display)", fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
            color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1,
            marginBottom: "1.25rem", maxWidth: 600, margin: "0 auto 1.25rem",
          }}>
            Temukan Kendaraan yang Tepat untuk Anda
          </motion.h1>
          <motion.p variants={fadeUp} style={{
            color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem", lineHeight: 1.75,
            maxWidth: 520, margin: "0 auto",
          }}>
            {vehicles.length} unit tersedia — dari city car hemat hingga minibus grup. Semua terawat, diasuransikan, dan siap jalan.
          </motion.p>
        </motion.div>
      </section>

      {/* ── FILTERS ── */}
      <section style={{ backgroundColor: "#FFFFFF", borderBottom: "1px solid rgba(27,43,94,0.1)", position: "sticky", top: 68, zIndex: 40 }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", overflowX: "auto", paddingBottom: 1 }}>
            {categories.map((cat) => (
              <button key={cat.key} onClick={() => setActiveCategory(cat.key)} style={{
                flexShrink: 0,
                padding: "1rem 1.125rem",
                border: "none",
                borderBottom: activeCategory === cat.key ? "2.5px solid #F4511E" : "2.5px solid transparent",
                backgroundColor: "transparent",
                color: activeCategory === cat.key ? "#F4511E" : "#6B7A99",
                fontFamily: "var(--font-display)",
                fontWeight: activeCategory === cat.key ? 700 : 500,
                fontSize: "0.9rem",
                cursor: "pointer",
                transition: "all 0.2s",
                display: "flex", alignItems: "center", gap: "0.375rem",
              }}>
                {cat.label}
                <span style={{
                  fontSize: "0.75rem",
                  backgroundColor: activeCategory === cat.key ? "rgba(244,81,30,0.12)" : "#F0F2F8",
                  color: activeCategory === cat.key ? "#F4511E" : "#6B7A99",
                  padding: "0.125rem 0.4rem",
                  borderRadius: 999,
                }}>{cat.count}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTROLS ── */}
      <section style={{ backgroundColor: "#F5F7FA", padding: "1.25rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <p style={{ color: "#6B7A99", fontSize: "0.9rem" }}>
            Menampilkan <strong style={{ color: "#0F1624" }}>{filtered.length}</strong> kendaraan
          </p>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            {/* Driver toggle */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              <button onClick={() => setWithDriver(false)} style={{
                padding: "0.4rem 0.875rem", borderRadius: 6, border: "1.5px solid",
                borderColor: !withDriver ? "#1B2B5E" : "rgba(27,43,94,0.2)",
                backgroundColor: !withDriver ? "#1B2B5E" : "transparent",
                color: !withDriver ? "white" : "#6B7A99",
                fontSize: "0.8125rem", fontFamily: "var(--font-display)", fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s",
              }}>Tanpa Sopir</button>
              <button onClick={() => setWithDriver(true)} style={{
                padding: "0.4rem 0.875rem", borderRadius: 6, border: "1.5px solid",
                borderColor: withDriver ? "#1B2B5E" : "rgba(27,43,94,0.2)",
                backgroundColor: withDriver ? "#1B2B5E" : "transparent",
                color: withDriver ? "white" : "#6B7A99",
                fontSize: "0.8125rem", fontFamily: "var(--font-display)", fontWeight: 600,
                cursor: "pointer", transition: "all 0.2s",
              }}>Dengan Sopir</button>
            </div>
            {/* Sort */}
            <select value={sortBy} onChange={e => setSortBy(e.target.value as typeof sortBy)} style={{
              padding: "0.4rem 0.75rem", borderRadius: 6,
              border: "1.5px solid rgba(27,43,94,0.2)",
              backgroundColor: "white", color: "#0F1624",
              fontSize: "0.8125rem", fontFamily: "var(--font-display)",
              cursor: "pointer", outline: "none",
            }}>
              <option value="rating">Rating Tertinggi</option>
              <option value="price-asc">Harga Terendah</option>
              <option value="price-desc">Harga Tertinggi</option>
            </select>
          </div>
        </div>
      </section>

      {/* ── GRID ── */}
      <section style={{ padding: "2.5rem 1.5rem 5rem", backgroundColor: "#F5F7FA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory + withDriver + sortBy}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "1.5rem",
              }}
            >
              {filtered.map((car) => (
                <motion.div key={car.id} variants={fadeUp} initial="hidden" animate="visible">
                  <div style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid rgba(27,43,94,0.08)",
                    transition: "transform 0.25s, box-shadow 0.25s",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(27,43,94,0.12)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    {/* Image */}
                    <div style={{ position: "relative", height: 200, backgroundColor: "#EEF1F8" }}>
                      <img src={car.image} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      {car.badge && (
                        <span style={{
                          position: "absolute", top: 12, left: 12,
                          backgroundColor: car.badge === "Premium" ? "#1B2B5E" : car.badge === "Eco" ? "#16A34A" : "#F4511E",
                          color: "white",
                          fontSize: "0.7rem", fontFamily: "var(--font-display)", fontWeight: 700,
                          padding: "0.25rem 0.625rem", borderRadius: 999,
                          textTransform: "uppercase", letterSpacing: "0.05em",
                        }}>{car.badge}</span>
                      )}
                      <span style={{
                        position: "absolute", top: 12, right: 12,
                        backgroundColor: "rgba(0,0,0,0.55)", backdropFilter: "blur(4px)",
                        color: "white",
                        fontSize: "0.75rem", fontFamily: "var(--font-display)", fontWeight: 600,
                        padding: "0.25rem 0.625rem", borderRadius: 999,
                        display: "flex", alignItems: "center", gap: "0.25rem",
                      }}>
                        <Star size={11} fill="#F4511E" color="#F4511E" />
                        {car.rating} ({car.reviews})
                      </span>
                    </div>

                    <div style={{ padding: "1.25rem" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.75rem" }}>
                        <div>
                          <p style={{ color: "#6B7A99", fontSize: "0.75rem", fontFamily: "var(--font-display)", marginBottom: "0.2rem" }}>
                            {car.brand} · {car.year}
                          </p>
                          <h3 style={{
                            fontFamily: "var(--font-display)", fontWeight: 700,
                            fontSize: "1.0625rem", color: "#0F1624",
                          }}>{car.name}</h3>
                        </div>
                        <div style={{ textAlign: "right" }}>
                          <p style={{
                            fontFamily: "var(--font-display)", fontWeight: 800,
                            fontSize: "1.125rem", color: "#1B2B5E", lineHeight: 1,
                          }}>{formatRupiah(withDriver ? car.priceDriver : car.price)}</p>
                          <p style={{ color: "#6B7A99", fontSize: "0.75rem" }}>/hari</p>
                        </div>
                      </div>

                      {/* Specs */}
                      <div style={{ display: "flex", gap: "0.875rem", marginBottom: "1rem", flexWrap: "wrap" }}>
                        {[
                          { icon: <Users size={13} />, text: `${car.seats} Kursi` },
                          { icon: <Fuel size={13} />, text: car.fuel },
                          { icon: <Settings size={13} />, text: car.transmission },
                        ].map((spec) => (
                          <div key={spec.text} style={{ display: "flex", alignItems: "center", gap: "0.25rem", color: "#6B7A99", fontSize: "0.8rem" }}>
                            <span style={{ color: "#1B2B5E" }}>{spec.icon}</span>
                            {spec.text}
                          </div>
                        ))}
                      </div>

                      {/* Features */}
                      <div style={{ display: "flex", gap: "0.375rem", flexWrap: "wrap", marginBottom: "1.125rem" }}>
                        {car.features.slice(0, 3).map(f => (
                          <span key={f} style={{
                            fontSize: "0.7rem",
                            backgroundColor: "#EEF1F8",
                            color: "#1B2B5E",
                            padding: "0.2rem 0.5rem",
                            borderRadius: 4,
                            fontFamily: "var(--font-display)", fontWeight: 500,
                          }}>{f}</span>
                        ))}
                        {car.features.length > 3 && (
                          <span style={{ fontSize: "0.7rem", color: "#6B7A99" }}>+{car.features.length - 3} lagi</span>
                        )}
                      </div>

                      {/* Actions */}
                      <div style={{ display: "flex", gap: "0.625rem" }}>
                        <a href={`https://wa.me/62895393855667?text=Halo, saya ingin menyewa ${car.name}`}
                          target="_blank" rel="noreferrer"
                          style={{
                            flex: 1,
                            display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem",
                            backgroundColor: "#25D366",
                            color: "white",
                            padding: "0.625rem",
                            borderRadius: 8,
                            textDecoration: "none",
                            fontSize: "0.875rem",
                            fontFamily: "var(--font-display)", fontWeight: 600,
                            transition: "background 0.2s",
                          }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#1da850")}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#25D366")}
                        >
                          <MessageCircle size={15} /> WhatsApp
                        </a>
                        <a href="tel:+62895393855667" style={{
                          display: "flex", alignItems: "center", justifyContent: "center",
                          width: 40,
                          backgroundColor: "#EEF1F8",
                          color: "#1B2B5E",
                          borderRadius: 8,
                          textDecoration: "none",
                          transition: "background 0.2s",
                        }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d6dced")}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#EEF1F8")}
                        >
                          <Phone size={16} />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ── PRICING INFO ── */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(1.5rem, 2.5vw, 2.125rem)",
              color: "#0F1624", letterSpacing: "-0.02em",
            }}>Paket Sewa & Ketentuan</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                title: "Harian", desc: "Minimum sewa 1 hari (24 jam)", icon: "📅",
                items: ["Bensin ditanggung penyewa", "Gratis antar-jemput 15km", "Asuransi all-risk included"],
              },
              {
                title: "Mingguan", desc: "Sewa 7 hari, hemat 10%", icon: "📆",
                items: ["Diskon 10% dari harga harian", "1x cuci gratis", "Prioritas armada terbaru"],
              },
              {
                title: "Bulanan", desc: "Sewa ≥ 30 hari, hemat 25%", icon: "🗓️",
                items: ["Diskon 25% dari harga harian", "Perawatan berkala gratis", "Sopir pengganti tersedia"],
              },
            ].map((pkg) => (
              <div key={pkg.title} style={{
                borderRadius: 12, padding: "1.75rem",
                border: "1px solid rgba(27,43,94,0.1)",
                backgroundColor: "#F5F7FA",
              }}>
                <span style={{ fontSize: "1.75rem" }}>{pkg.icon}</span>
                <h3 style={{
                  fontFamily: "var(--font-display)", fontWeight: 700,
                  fontSize: "1.125rem", color: "#0F1624", marginTop: "0.75rem", marginBottom: "0.375rem",
                }}>Sewa {pkg.title}</h3>
                <p style={{ color: "#6B7A99", fontSize: "0.875rem", marginBottom: "1.25rem" }}>{pkg.desc}</p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  {pkg.items.map(item => (
                    <div key={item} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "#374151" }}>
                      <CheckCircle2 size={15} color="#16A34A" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
