import { BrowserRouter, Routes, Route } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { AboutPage } from "./components/AboutPage";
import { ServicesPage } from "./components/ServicesPage";

function ScrollToTop() {
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

function ContactPage() {
  return (
    <div style={{ paddingTop: "4.5rem" }}>
      {/* Hero */}
      <section style={{
        background: "linear-gradient(135deg, #0F1A3D 0%, #1B2B5E 100%)",
        padding: "5rem 1.5rem 4rem",
        textAlign: "center",
      }}>
        <p style={{
          color: "#F4511E", fontFamily: "var(--font-display)", fontWeight: 700,
          fontSize: "0.8125rem", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "0.875rem",
        }}>Hubungi Kami</p>
        <h1 style={{
          fontFamily: "var(--font-display)", fontWeight: 800,
          fontSize: "clamp(2rem, 4vw, 3rem)",
          color: "#FFFFFF", letterSpacing: "-0.03em", lineHeight: 1.1,
          marginBottom: "1.25rem",
        }}>Kami Siap Membantu Anda</h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.0625rem", maxWidth: 480, margin: "0 auto" }}>
          Punya pertanyaan atau butuh penawaran khusus? Hubungi tim kami — kami siap merespons dalam 15 menit.
        </p>
      </section>

      {/* Contact Cards */}
      <section style={{ padding: "4rem 1.5rem", backgroundColor: "#F5F7FA" }}>
        <div style={{ maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", marginBottom: "3rem" }}>
            {[
              { icon: "📞", title: "Telepon", info: "+62 895-3938-55667", sub: "Senin–Minggu, 07:00–22:00" },
              { icon: "💬", title: "WhatsApp", info: "+62 895-3938-55667", sub: "Respons dalam 5 menit" },
              { icon: "✉️", title: "Email", info: "info@drivego.id", sub: "Respons dalam 2 jam" },
              { icon: "📍", title: "Kantor", info: "Jl. Sudirman No. 45", sub: "Jakarta Pusat 10220" },
            ].map((c) => (
              <div key={c.title} style={{
                backgroundColor: "#FFFFFF", borderRadius: 12,
                padding: "1.75rem", textAlign: "center",
                border: "1px solid rgba(27,43,94,0.08)",
              }}>
                <span style={{ fontSize: "2rem", display: "block", marginBottom: "0.875rem" }}>{c.icon}</span>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, color: "#0F1624", marginBottom: "0.375rem" }}>{c.title}</h3>
                <p style={{ color: "#1B2B5E", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "0.9rem" }}>{c.info}</p>
                <p style={{ color: "#6B7A99", fontSize: "0.8rem", marginTop: "0.25rem" }}>{c.sub}</p>
              </div>
            ))}
          </div>

          {/* Form */}
          <div style={{
            backgroundColor: "#FFFFFF", borderRadius: 16,
            padding: "2.5rem", border: "1px solid rgba(27,43,94,0.08)",
            boxShadow: "0 8px 32px rgba(27,43,94,0.08)",
          }}>
            <h2 style={{
              fontFamily: "var(--font-display)", fontWeight: 800,
              fontSize: "1.5rem", color: "#0F1624", marginBottom: "1.75rem",
            }}>Kirim Pesan</h2>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.25rem" }}>
              {[
                { label: "Nama Lengkap", placeholder: "Phadis faisal anwar", type: "text" },
                { label: "Nomor HP / WhatsApp", placeholder: "+62 895-3938-55667", type: "tel" },
                { label: "Email", placeholder: "faisal@email.com", type: "email" },
                { label: "Kota Keberangkatan", placeholder: "Jakarta", type: "text" },
              ].map((field) => (
                <div key={field.label}>
                  <label style={{
                    display: "block", color: "#374151",
                    fontFamily: "var(--font-display)", fontWeight: 600,
                    fontSize: "0.875rem", marginBottom: "0.5rem",
                  }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} style={{
                    width: "100%", padding: "0.75rem 1rem",
                    borderRadius: 8, border: "1.5px solid rgba(27,43,94,0.15)",
                    fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                    color: "#0F1624", outline: "none", boxSizing: "border-box",
                    transition: "border-color 0.2s",
                  }}
                    onFocus={e => (e.currentTarget.style.borderColor = "#1B2B5E")}
                    onBlur={e => (e.currentTarget.style.borderColor = "rgba(27,43,94,0.15)")}
                  />
                </div>
              ))}
            </div>
            <div style={{ marginTop: "1.25rem" }}>
              <label style={{
                display: "block", color: "#374151",
                fontFamily: "var(--font-display)", fontWeight: 600,
                fontSize: "0.875rem", marginBottom: "0.5rem",
              }}>Pesan / Pertanyaan</label>
              <textarea placeholder="Ceritakan kebutuhan sewa kendaraan Anda..." rows={4} style={{
                width: "100%", padding: "0.75rem 1rem",
                borderRadius: 8, border: "1.5px solid rgba(27,43,94,0.15)",
                fontFamily: "var(--font-body)", fontSize: "0.9375rem",
                color: "#0F1624", outline: "none", boxSizing: "border-box",
                resize: "vertical", transition: "border-color 0.2s",
              }}
                onFocus={e => (e.currentTarget.style.borderColor = "#1B2B5E")}
                onBlur={e => (e.currentTarget.style.borderColor = "rgba(27,43,94,0.15)")}
              />
            </div>
            <button type="button" style={{
              marginTop: "1.5rem",
              backgroundColor: "#F4511E", color: "white",
              padding: "0.875rem 2rem", borderRadius: 8,
              border: "none", cursor: "pointer",
              fontFamily: "var(--font-display)", fontWeight: 700,
              fontSize: "1rem", transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d93e0f")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#F4511E")}
            >
              Kirim Pesan →
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
