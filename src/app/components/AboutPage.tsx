import { motion } from "motion/react";
import { Target, Eye, Heart, Award, Users, Car, Globe, TrendingUp } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

export function AboutPage() {
  const milestones = [
    { year: "2026", title: "Berdiri", desc: "DriveGo didirikan dengan 5 unit kendaraan dan visi melayani Jakarta." },
    { year: "2026", title: "Ekspansi", desc: "Membuka cabang di Surabaya, Bandung, dan Bali. Armada tumbuh 10x." },
    { year: "2026", title: "Digitalisasi", desc: "Meluncurkan platform pemesanan online. 40.000 transaksi per tahun." },
    { year: "2026", title: "Nasional", desc: "Hadir di 47 kota. Bergabung dengan 8.500+ pelanggan aktif." },
    { year: "2026", title: "Premium", desc: "Meluncurkan lini kendaraan listrik dan layanan chauffeur premium." },
  ];

  const team = [
    {
      name: "PHADIS",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&q=80&fit=crop&auto=format",
      desc: "15 tahun di industri transportasi. Mantan eksekutif Blue Bird Group.",
    },
    {
      name: " FAISALA ",
      role: "COO & Co-Founder",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&q=80&fit=crop&auto=format",
      desc: "Ahli operasional logistik dengan pengalaman di Toyota Indonesia.",
    },
    {
      name: " ANWAR",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&q=80&fit=crop&auto=format",
      desc: "Engineer dari Gojek. Membangun platform digital DriveGo dari nol.",
    },
    {
      name: "Fezial",
      role: "Head of Customer Experience",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&q=80&fit=crop&auto=format",
      desc: "12 tahun di industri hospitality. Penghargaan CX Leader of the Year 2022.",
    },
  ];

  const values = [
    { icon: <Target size={24} />, title: "Fokus Pelanggan", desc: "Setiap keputusan kami berawal dari kebutuhan pelanggan. Kepuasan Anda adalah prioritas kami." },
    { icon: <Eye size={24} />, title: "Transparansi", desc: "Harga jelas, tidak ada biaya tersembunyi. Kami membangun kepercayaan melalui kejujuran." },
    { icon: <Heart size={24} />, title: "Integritas", desc: "Kami menepati janji dan bertanggung jawab atas setiap layanan yang kami berikan." },
    { icon: <TrendingUp size={24} />, title: "Inovasi", desc: "Terus berinovasi mengikuti kebutuhan mobilitas modern Indonesia." },
  ];

  const bigStats = [
    { icon: <Car size={32} />, value: "300+", label: "Unit Armada Aktif" },
    { icon: <Users size={32} />, value: "8.500+", label: "Pelanggan Aktif" },
    { icon: <Globe size={32} />, value: "47", label: "Kota Tersedia" },
    { icon: <Award size={32} />, value: "1+", label: "Penghargaan Nasional" },
  ];

  return (
    <div style={{ paddingTop: 68 }}>
      {/* ── HERO ── */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?w=1920&h=700&q=80&fit=crop&auto=format"
          alt="Car fleet overview"
          style={{ width: "100%", height: "520px", objectFit: "cover", display: "block" }}
        />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to bottom, rgba(11,17,40,0.72) 0%, rgba(27,43,94,0.85) 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <motion.div initial="hidden" animate="visible" variants={stagger} style={{ textAlign: "center", padding: "0 1.5rem" }}>
            <motion.p variants={fadeUp} style={{
              color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "0.8125rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "1rem",
            }}>Tentang DriveGo</motion.p>
            <motion.h1 variants={fadeUp} style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1,
              maxWidth: 680, margin: "0 auto 1.25rem",
            }}>
              1 Tahun Menggerakkan Indonesia
            </motion.h1>
            <motion.p variants={fadeUp} style={{
              color: "rgba(255,255,255,0.72)", fontSize: "clamp(0.95rem, 1.8vw, 1.125rem)",
              maxWidth: 560, margin: "0 auto", lineHeight: 1.75,
            }}>
              Dari perusahaan rental kecil di Jakarta, kini DriveGo melayani jutaan perjalanan di seluruh penjuru nusantara.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ── STORY ── */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "4rem",
            alignItems: "center",
          }}>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.p variants={fadeUp} style={{
                color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem",
              }}>Kisah Kami</motion.p>
              <motion.h2 variants={fadeUp} style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.375rem)",
                color: "#0F1624", letterSpacing: "-0.02em", lineHeight: 1.2,
                marginBottom: "1.5rem",
              }}>
                Berawal dari Mimpi Sederhana, Kini Melayani Bangsa
              </motion.h2>
              <motion.p variants={fadeUp} style={{ color: "#6B7A99", lineHeight: 1.8, marginBottom: "1rem", fontSize: "0.9375rem" }}>
                Pada tahun 2026, phadis faisa anwar melihat satu masalah besar: masyarakat Indonesia kesulitan mendapatkan kendaraan sewa yang terpercaya, transparan, dan berkualitas. Dengan modal 5 mobil dan tekad besar, DriveGo lahir.
              </motion.p>
              <motion.p variants={fadeUp} style={{ color: "#6B7A99", lineHeight: 1.8, marginBottom: "2rem", fontSize: "0.9375rem" }}>
                Hari ini, kami bangga melayani lebih dari 8.500 pelanggan aktif di 47 kota Indonesia, dengan standar layanan premium yang konsisten dan teknologi yang memudahkan setiap perjalanan Anda.
              </motion.p>
              <motion.div variants={fadeUp} style={{ display: "flex", gap: "2rem" }}>
                {[{ n: "2026", l: "Tahun Berdiri" }, { n: "No. 1", l: "Rental Terpercaya" }].map(s => (
                  <div key={s.l}>
                    <p style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: "2rem", color: "#1B2B5E", lineHeight: 1,
                    }}>{s.n}</p>
                    <p style={{ color: "#6B7A99", fontSize: "0.875rem" }}>{s.l}</p>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 32 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <div style={{ position: "relative" }}>
                <img
                  src="https://bisnisukm.com/uploads/2013/05/kepuasan-pelanggan.jpg"
                  alt="DriveGo team and fleet"
                  style={{ width: "100%", height: 420, objectFit: "cover", borderRadius: 16, display: "block" }}
                />
                <div style={{
                  position: "absolute", bottom: -24, left: -24,
                  backgroundColor: "#1B2B5E",
                  borderRadius: 12,
                  padding: "1.25rem 1.5rem",
                  boxShadow: "0 16px 40px rgba(27,43,94,0.25)",
                }}>
                  <p style={{ color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.75rem", lineHeight: 1 }}>98%</p>
                  <p style={{ color: "rgba(255,255,255,0.75)", fontSize: "0.8rem", marginTop: 4 }}>Tingkat Kepuasan Pelanggan</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ backgroundColor: "#F5F7FA", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
          }}>
            {bigStats.map((s) => (
              <motion.div key={s.label} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
                style={{
                  backgroundColor: "#FFFFFF", borderRadius: 12,
                  padding: "2rem", textAlign: "center",
                  border: "1px solid rgba(27,43,94,0.08)",
                }}>
                <div style={{
                  width: 60, height: 60, borderRadius: 14,
                  backgroundColor: "rgba(27, 43, 94, 0.08)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 1rem",
                  color: "#1B2B5E",
                }}>
                  {s.icon}
                </div>
                <p style={{
                  fontFamily: "var(--font-display)", fontWeight: 800,
                  fontSize: "2.25rem", color: "#1B2B5E", lineHeight: 1, marginBottom: "0.5rem",
                }}>{s.value}</p>
                <p style={{ color: "#6B7A99", fontSize: "0.875rem" }}>{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MILESTONES ── */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3.5rem" }}>
              <p style={{
                color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem",
              }}>Perjalanan Kami</p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.375rem)",
                color: "#0F1624", letterSpacing: "-0.02em",
              }}>Tonggak Sejarah DriveGo</h2>
            </motion.div>

            <div style={{ position: "relative" }}>
              {/* Timeline Line */}
              <div style={{
                position: "absolute", left: "50%", top: 0, bottom: 0,
                width: 2, backgroundColor: "rgba(27,43,94,0.1)",
                transform: "translateX(-50%)",
              }} className="timeline-line" />

              {milestones.map((m, i) => (
                <motion.div key={m.year} variants={fadeUp} style={{
                  display: "flex",
                  justifyContent: i % 2 === 0 ? "flex-start" : "flex-end",
                  marginBottom: "2rem",
                  position: "relative",
                }}>
                  <div style={{
                    maxWidth: "44%",
                    backgroundColor: i % 2 === 0 ? "#F5F7FA" : "#1B2B5E",
                    borderRadius: 10,
                    padding: "1.25rem 1.5rem",
                    border: `1px solid ${i % 2 === 0 ? "rgba(27,43,94,0.1)" : "transparent"}`,
                  }}>
                    <p style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: "1.125rem", color: "#F4511E", marginBottom: "0.25rem",
                    }}>{m.year}</p>
                    <p style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      color: i % 2 === 0 ? "#0F1624" : "#FFFFFF",
                      marginBottom: "0.375rem",
                    }}>{m.title}</p>
                    <p style={{ color: i % 2 === 0 ? "#6B7A99" : "rgba(255,255,255,0.65)", fontSize: "0.875rem", lineHeight: 1.6 }}>
                      {m.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <style>{`
          @media (max-width: 640px) {
            .timeline-line { display: none; }
          }
        `}</style>
      </section>

      {/* ── VALUES ── */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#F5F7FA" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{
                color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem",
              }}>Nilai Kami</p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.375rem)",
                color: "#0F1624", letterSpacing: "-0.02em",
              }}>Prinsip yang Memandu Setiap Langkah Kami</h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {values.map((v) => (
                <motion.div key={v.title} variants={fadeUp} style={{
                  backgroundColor: "#FFFFFF", borderRadius: 12,
                  padding: "2rem",
                  border: "1px solid rgba(27,43,94,0.08)",
                }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 10,
                    backgroundColor: "rgba(244, 81, 30, 0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#F4511E", marginBottom: "1.25rem",
                  }}>
                    {v.icon}
                  </div>
                  <h3 style={{
                    fontFamily: "var(--font-display)", fontWeight: 700,
                    fontSize: "1.0625rem", color: "#0F1624", marginBottom: "0.625rem",
                  }}>{v.title}</h3>
                  <p style={{ color: "#6B7A99", lineHeight: 1.65, fontSize: "0.9rem" }}>{v.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM ── */}
      <section style={{ padding: "5rem 1.5rem", backgroundColor: "#FFFFFF" }}>
        <div style={{ maxWidth: 1280, margin: "0 auto" }}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp} style={{ textAlign: "center", marginBottom: "3rem" }}>
              <p style={{
                color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
                fontSize: "0.8125rem", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "0.75rem",
              }}>Tim Kami</p>
              <h2 style={{
                fontFamily: "var(--font-display)", fontWeight: 800,
                fontSize: "clamp(1.75rem, 3vw, 2.375rem)",
                color: "#0F1624", letterSpacing: "-0.02em",
              }}>Orang-orang di Balik DriveGo</h2>
            </motion.div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1.5rem" }}>
              {team.map((member) => (
                <motion.div key={member.name} variants={fadeUp} style={{
                  borderRadius: 12, overflow: "hidden",
                  border: "1px solid rgba(27,43,94,0.1)",
                  transition: "transform 0.25s, box-shadow 0.25s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 32px rgba(27,43,94,0.1)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  <img src={member.image} alt={member.name} style={{ width: "100%", height: 240, objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "1.25rem", backgroundColor: "#FFFFFF" }}>
                    <h3 style={{
                      fontFamily: "var(--font-display)", fontWeight: 700,
                      fontSize: "1.0625rem", color: "#0F1624", marginBottom: "0.25rem",
                    }}>{member.name}</h3>
                    <p style={{ color: "#F4511E", fontSize: "0.8125rem", fontFamily: "var(--font-display)", fontWeight: 600, marginBottom: "0.625rem" }}>{member.role}</p>
                    <p style={{ color: "#6B7A99", fontSize: "0.875rem", lineHeight: 1.6 }}>{member.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
