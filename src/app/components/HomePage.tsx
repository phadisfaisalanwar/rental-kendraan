import { useState } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import {
  Shield, Clock, MapPin, Star, ChevronRight, Users,
  Car, Fuel, Settings, ArrowRight, CheckCircle2, Headphones
} from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

export function HomePage() {
  const [pickupDate, setPickupDate] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [vehicleType, setVehicleType] = useState("sedan");

  const stats = [
    { value: "8.500+", label: "Pelanggan Puas" },
    { value: "200+", label: "Unit Armada" },
    { value: "1", label: "Tahun Pengalaman" },
    { value: "47", label: "Kota Terlayani" },
  ];

  const features = [
    {
      icon: <Shield size={28} />,
      title: "Terjamin & Terpercaya",
      desc: "Semua kendaraan diasuransikan dan rutin diservis. Dokumen resmi dan pengemudi berlisensi.",
    },
    {
      icon: <Headphones size={28} />,
      title: "Layanan 24/7",
      desc: "Tim kami siap membantu kapan saja. Bantuan darurat tersedia selama 24 jam penuh.",
    },
    {
      icon: <MapPin size={28} />,
      title: "Antar Jemput Gratis",
      desc: "Layanan pengiriman dan pengambilan kendaraan ke lokasi Anda dalam radius 15 km.",
    },
    {
      icon: <Clock size={28} />,
      title: "Proses Cepat",
      desc: "Pemesanan dalam 5 menit. Verifikasi dokumen digital — tidak perlu datang ke kantor.",
    },
  ];

  const fleet = [
    {
      name: "Toyota Alphard",
      category: "MPV Premium",
      price: 1_800_000,
      seats: 7,
      fuel: "Bensin",
      transmission: "Otomatis",
      image: "https://2024toyota.net/wp-content/uploads/2023/02/2024-Toyota-Alphard-Exterior.jpg",
      badge: "Terlaris",
    },
    {
      name: "Honda CR-V",
      category: "SUV",
      price: 950_000,
      seats: 5,
      fuel: "Bensin",
      transmission: "Otomatis",
      image: "https://hondanewspecs.com/wp-content/uploads/2022/07/2024-Honda-CR-V-Redesign.png",
      badge: null,
    },
    {
      name: "Toyota Camry",
      category: "Sedan Eksekutif",
      price: 1_100_000,
      seats: 5,
      fuel: "Hybrid",
      transmission: "Otomatis",
      image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=600&h=380&q=80&fit=crop&auto=format",
      badge: "Hemat BBM",
    },
    {
      name: "Daihatsu Xenia",
      category: "MPV Keluarga",
      price: 450_000,
      seats: 7,
      fuel: "Bensin",
      transmission: "Manual",
      image: "https://imgcdn.oto.com/large/gallery/roadtest/7/2437/daihatsu-xenia-front-medium-view-421132.jpg",
      badge: "Terjangkau",
    },
  ];

  const testimonials = [
    {
      name: "galih gumilar",
      role: "Direktur, PT Maju Bersama",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&q=80&fit=crop&auto=format",
      rating: 5,
      text: "Layanan DriveGo sangat profesional. Mobil selalu bersih, tepat waktu, dan pengemudi sopan. Sudah 2 tahun menjadi pelanggan setia untuk kebutuhan bisnis kami.",
    },
    {
      name: "Siti Rahayu",
      role: "Ibu Rumah Tangga, Surabaya",
      avatar: "https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/09/03/1976094374.jpg",
      rating: 5,
      text: "Mudah banget pesannya lewat WhatsApp, langsung dikonfirmasi. Harganya transparan tanpa biaya tersembunyi. Rekomen banget buat wisata keluarga!",
    },
    {
      name: "Rizky Pratama",
      role: "Travel Blogger",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&q=80&fit=crop&auto=format",
      rating: 5,
      text: "Sewa mobil tanpa sopir 2 minggu keliling Jawa. Mobil terawat, GPS sudah terpasang, dan respon CS-nya cepat banget kalau ada masalah. Top!",
    },
  ];

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "0.75rem 1rem",
    borderRadius: 8,
    border: "1px solid rgba(255,255,255,0.2)",
    backgroundColor: "rgba(255,255,255,0.1)",
    color: "white",
    fontFamily: "var(--font-body)",
    fontSize: "0.9375rem",
    outline: "none",
    boxSizing: "border-box",
  };

  const formatRupiah = (n: number) =>
    new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 }).format(n);

  return (
    <div style={{ overflowX: "hidden" }}>
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", paddingTop: 68 }}>
        <img
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1920&h=1080&q=80&fit=crop&auto=format"
          alt="Luxury sports car on road"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(105deg, rgba(11,17,40,0.94) 0%, rgba(27,43,94,0.75) 55%, rgba(11,17,40,0.6) 100%)"
        }} />

        <div style={{ position: "relative", maxWidth: 1280, margin: "0 auto", padding: "6rem 1.5rem 4rem", width: "100%" }}>
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}>
              <span style={{
                display: "inline-flex", alignItems: "center", gap: "0.5rem",
                backgroundColor: "rgba(244, 81, 30, 0.2)",
                border: "1px solid rgba(244, 81, 30, 0.4)",
                color: "#F4511E",
                padding: "0.375rem 1rem",
                borderRadius: 999,
                fontSize: "0.8125rem",
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                marginBottom: "1.5rem",
              }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#F4511E", display: "inline-block" }} />
                Tersedia di 47 Kota di Indonesia
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              color: "#FFFFFF",
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              fontSize: "clamp(2.5rem, 5.5vw, 4.25rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
              maxWidth: 720,
              marginBottom: "1.25rem",
            }}>
              Perjalanan Tanpa Batas,{" "}
              <span style={{ color: "#F4511E" }}>Nyaman</span> &amp;{" "}
              <span style={{ color: "#F4511E" }}>Terpercaya</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              color: "rgba(255,255,255,0.72)",
              fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
              maxWidth: 560,
              lineHeight: 1.75,
              marginBottom: "2.5rem",
            }}>
              Sewa kendaraan premium dengan harga transparan. Dari city car hingga MPV mewah — semua tersedia dengan sopir atau tanpa sopir, antar jemput gratis.
            </motion.p>

            {/* Booking Form */}
            <motion.div variants={fadeUp} style={{
              backgroundColor: "rgba(15, 22, 36, 0.85)",
              backdropFilter: "blur(16px)",
              borderRadius: 16,
              padding: "1.75rem",
              border: "1px solid rgba(255,255,255,0.1)",
              maxWidth: 780,
            }}>
              <p style={{
                color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.875rem", letterSpacing: "0.08em", textTransform: "uppercase",
                marginBottom: "1.25rem",
              }}>
                Pesan Kendaraan
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                gap: "0.875rem",
              }}>
                <div>
                  <label style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", display: "block", marginBottom: 6, fontFamily: "var(--font-display)" }}>
                    Jenis Kendaraan
                  </label>
                  <select value={vehicleType} onChange={e => setVehicleType(e.target.value)} style={{ ...inputStyle, cursor: "pointer" }}>
                    <option value="sedan" style={{ backgroundColor: "#1B2B5E" }}>Sedan</option>
                    <option value="suv" style={{ backgroundColor: "#1B2B5E" }}>SUV</option>
                    <option value="mpv" style={{ backgroundColor: "#1B2B5E" }}>MPV</option>
                    <option value="truck" style={{ backgroundColor: "#1B2B5E" }}>Truck</option>
                  </select>
                </div>
                <div>
                  <label style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", display: "block", marginBottom: 6, fontFamily: "var(--font-display)" }}>
                    Tanggal Ambil
                  </label>
                  <input type="date" value={pickupDate} onChange={e => setPickupDate(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", display: "block", marginBottom: 6, fontFamily: "var(--font-display)" }}>
                    Tanggal Kembali
                  </label>
                  <input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.8rem", display: "block", marginBottom: 6, fontFamily: "var(--font-display)" }}>&nbsp;</label>
                  <Link to="/services" style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: "0.5rem",
                    backgroundColor: "#F4511E",
                    color: "white",
                    padding: "0.75rem 1rem",
                    borderRadius: 8,
                    textDecoration: "none",
                    fontFamily: "var(--font-display)",
                    fontWeight: 700,
                    fontSize: "0.9375rem",
                    transition: "background 0.2s",
                    width: "100%",
                    boxSizing: "border-box",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d93e0f")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#F4511E")}
                  >
                    Cari Kendaraan <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: "#1B2B5E", padding: "2.5rem 1.5rem" }}>
        <div style={{
          maxWidth: 1280, margin: "0 auto",
          display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
          gap: "1rem",
        }}>
          {stats.map((s) => (
            <div key={s.label} style={{ textAlign: "center" }}>
              <p style={{
                color: "#F4511E",
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
                lineHeight: 1,
                marginBottom: "0.375rem",
              }}>{s.value}</p>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.875rem" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── FEATURED FLEET ── */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ marginBottom: "3rem" }}>
              <p style={{
                color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}>Armada Pilihan</p>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "1rem" }}>
                <h2 style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                  color: "#0F1624",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.15,
                  maxWidth: 480,
                }}>
                  Kendaraan Berkualitas untuk Setiap Kebutuhan
                </h2>
                <Link to="/services" style={{
                  display: "flex", alignItems: "center", gap: "0.375rem",
                  color: "#1B2B5E", textDecoration: "none",
                  fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem",
                  transition: "gap 0.2s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.gap = "0.625rem")}
                  onMouseLeave={e => (e.currentTarget.style.gap = "0.375rem")}
                >
                  Lihat Semua <ChevronRight size={18} />
                </Link>
              </div>
            </motion.div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}>
              {fleet.map((car) => (
                <motion.div key={car.name} variants={fadeUp}>
                  <div style={{
                    borderRadius: 12,
                    overflow: "hidden",
                    border: "1px solid rgba(27, 43, 94, 0.1)",
                    backgroundColor: "#FFFFFF",
                    transition: "transform 0.25s, box-shadow 0.25s",
                    cursor: "pointer",
                  }}
                    onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 16px 40px rgba(27,43,94,0.12)"; }}
                    onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                  >
                    <div style={{ position: "relative", height: 200, backgroundColor: "#EEF1F8" }}>
                      <img src={car.image} alt={car.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      {car.badge && (
                        <span style={{
                          position: "absolute", top: 12, left: 12,
                          backgroundColor: "#F4511E", color: "white",
                          fontSize: "0.75rem", fontFamily: "var(--font-display)", fontWeight: 700,
                          padding: "0.25rem 0.625rem", borderRadius: 999,
                        }}>{car.badge}</span>
                      )}
                    </div>
                    <div style={{ padding: "1.25rem" }}>
                      <p style={{ color: "#6B7A99", fontSize: "0.8rem", marginBottom: "0.25rem", fontFamily: "var(--font-display)" }}>{car.category}</p>
                      <h3 style={{
                        fontFamily: "var(--font-display)", fontWeight: 700,
                        fontSize: "1.125rem", color: "#0F1624", marginBottom: "0.875rem",
                      }}>{car.name}</h3>
                      <div style={{ display: "flex", gap: "1rem", marginBottom: "1.125rem" }}>
                        {[
                          { icon: <Users size={14} />, text: `${car.seats} Kursi` },
                          { icon: <Fuel size={14} />, text: car.fuel },
                          { icon: <Settings size={14} />, text: car.transmission },
                        ].map((spec) => (
                          <div key={spec.text} style={{ display: "flex", alignItems: "center", gap: "0.3rem", color: "#6B7A99", fontSize: "0.8125rem" }}>
                            <span style={{ color: "#1B2B5E" }}>{spec.icon}</span>
                            {spec.text}
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <div>
                          <span style={{ color: "#0F1624", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.2rem" }}>
                            {formatRupiah(car.price)}
                          </span>
                          <span style={{ color: "#6B7A99", fontSize: "0.8rem" }}>/hari</span>
                        </div>
                        <Link to="/services" style={{
                          backgroundColor: "#1B2B5E", color: "white",
                          padding: "0.5rem 1rem", borderRadius: 6,
                          textDecoration: "none", fontSize: "0.875rem",
                          fontFamily: "var(--font-display)", fontWeight: 600,
                          transition: "background 0.2s",
                        }}
                          onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#F4511E")}
                          onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#1B2B5E")}
                        >
                          Pesan
                        </Link>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#F5F7FA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{
                color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}>Mengapa DriveGo?</p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.375rem)",
                color: "#0F1624", letterSpacing: "-0.02em", lineHeight: 1.2,
              }}>
                Standar Layanan yang Tidak Kami Kompromikan
              </h2>
            </motion.div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "1.5rem",
            }}>
              {features.map((f) => (
                <motion.div key={f.title} variants={fadeUp} style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: 12,
                  padding: "2rem",
                  border: "1px solid rgba(27, 43, 94, 0.08)",
                  transition: "box-shadow 0.25s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.boxShadow = "0 8px 32px rgba(27,43,94,0.1)")}
                  onMouseLeave={e => (e.currentTarget.style.boxShadow = "none")}
                >
                  <div style={{
                    width: 56, height: 56, borderRadius: 12,
                    backgroundColor: "rgba(244, 81, 30, 0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#F4511E",
                    marginBottom: "1.25rem",
                  }}>
                    {f.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "1.0625rem", color: "#0F1624", marginBottom: "0.625rem",
                  }}>{f.title}</h3>
                  <p style={{ color: "#6B7A99", lineHeight: 1.65, fontSize: "0.9rem" }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{
                color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase",
                marginBottom: "0.75rem",
              }}>Testimoni</p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.375rem)",
                color: "#0F1624", letterSpacing: "-0.02em",
              }}>
                Cerita Nyata dari Pelanggan Kami
              </h2>
            </motion.div>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              gap: "1.5rem",
            }}>
              {testimonials.map((t) => (
                <motion.div key={t.name} variants={fadeUp} style={{
                  backgroundColor: "#F5F7FA",
                  borderRadius: 12,
                  padding: "1.75rem",
                  border: "1px solid rgba(27,43,94,0.08)",
                }}>
                  <div style={{ display: "flex", gap: "0.25rem", marginBottom: "1rem" }}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} fill="#F4511E" color="#F4511E" />
                    ))}
                  </div>
                  <p style={{ color: "#374151", lineHeight: 1.7, fontSize: "0.9375rem", marginBottom: "1.5rem" }}>
                    "{t.text}"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.875rem" }}>
                    <img src={t.avatar} alt={t.name} style={{
                      width: 44, height: 44, borderRadius: "50%", objectFit: "cover",
                      border: "2px solid rgba(27,43,94,0.1)",
                    }} />
                    <div>
                      <p style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "0.9rem", color: "#0F1624" }}>{t.name}</p>
                      <p style={{ color: "#6B7A99", fontSize: "0.8rem" }}>{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section style={{
        background: "linear-gradient(135deg, #1B2B5E 0%, #0F1A3D 100%)",
        padding: "5rem 1.5rem",
        position: "relative",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: -80, right: -80,
          width: 320, height: 320,
          borderRadius: "50%",
          backgroundColor: "rgba(244, 81, 30, 0.08)",
        }} />
        <div style={{ maxWidth: 720, margin: "0 auto", textAlign: "center", position: "relative" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ display: "flex", justifyContent: "center", gap: "1rem", marginBottom: "1.5rem" }}>
              {["Bebas Biaya Tersembunyi", "Garansi Uang Kembali", "Armada Terawat"].map((b) => (
                <span key={b} style={{
                  display: "flex", alignItems: "center", gap: "0.3rem",
                  color: "rgba(255,255,255,0.65)", fontSize: "0.8125rem",
                  fontFamily: "var(--font-display)",
                }}>
                  <CheckCircle2 size={14} color="#F4511E" />
                  {b}
                </span>
              ))}
            </motion.div>
            <motion.h2 variants={fadeUp} style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
              color: "#FFFFFF", letterSpacing: "-0.02em", lineHeight: 1.2,
              marginBottom: "1.25rem",
            }}>
              Siap Memulai Perjalanan Anda?
            </motion.h2>
            <motion.p variants={fadeUp} style={{
              color: "rgba(255,255,255,0.65)", lineHeight: 1.75,
              fontSize: "1.0625rem", marginBottom: "2rem",
            }}>
              Ribuan kendaraan siap melayani Anda. Pesan sekarang dan dapatkan diskon 15% untuk pemesanan pertama.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/services" style={{
                backgroundColor: "#F4511E", color: "white",
                padding: "0.875rem 2rem", borderRadius: 8,
                textDecoration: "none",
                fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "1rem",
                display: "flex", alignItems: "center", gap: "0.5rem",
                transition: "background 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d93e0f")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#F4511E")}
              >
                <Car size={20} /> Lihat Armada
              </Link>
              <a href="tel:+62895393855667" style={{
                backgroundColor: "transparent",
                color: "white",
                padding: "0.875rem 2rem", borderRadius: 8,
                border: "1.5px solid rgba(255,255,255,0.3)",
                textDecoration: "none",
                fontFamily: "var(--font-display)", fontWeight: 600,
                fontSize: "1rem",
                transition: "border-color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = "white")}
                onMouseLeave={e => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)")}
              >
                Hubungi Kami
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
