import { Link } from "react-router";
import { Car, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#0F1624", color: "rgba(255,255,255,0.75)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "4rem 1.5rem 2rem" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "3rem",
          marginBottom: "3rem",
        }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1rem" }}>
              <div style={{
                width: 36, height: 36, borderRadius: 8,
                backgroundColor: "#F4511E",
                display: "flex", alignItems: "center", justifyContent: "center"
              }}>
                <Car size={20} color="white" />
              </div>
              <span style={{
                fontFamily: "var(--font-display)",
                fontWeight: 800,
                fontSize: "1.25rem",
                color: "#FFFFFF",
              }}>
                Drive<span style={{ color: "#F4511E" }}>Go</span>
              </span>
            </div>
            <p style={{ lineHeight: 1.7, fontSize: "0.9rem", maxWidth: 260 }}>
              Layanan rental kendaraan terpercaya dengan armada lengkap dan harga transparan. Melayani seluruh wilayah Indonesia.
            </p>
            <div style={{ display: "flex", gap: "0.75rem", marginTop: "1.25rem" }}>
              {[
                { icon: <Instagram size={18} />, href: "#" },
                { icon: <Facebook size={18} />, href: "#" },
                { icon: <Youtube size={18} />, href: "#" },
              ].map((s, i) => (
                <a key={i} href={s.href} style={{
                  width: 36, height: 36,
                  borderRadius: 8,
                  border: "1px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "rgba(255,255,255,0.6)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = "#F4511E"; e.currentTarget.style.borderColor = "#F4511E"; e.currentTarget.style.color = "white"; }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.6)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "1.25rem", fontSize: "1rem" }}>
              Navigasi
            </h4>
            {[
              { to: "/", label: "Beranda" },
              { to: "/about", label: "Tentang Kami" },
              { to: "/services", label: "Armada Kendaraan" },
              { to: "/contact", label: "Kontak" },
            ].map((l) => (
              <Link key={l.to} to={l.to} style={{
                display: "block",
                color: "rgba(255,255,255,0.6)",
                textDecoration: "none",
                marginBottom: "0.625rem",
                fontSize: "0.9rem",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F4511E")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.6)")}
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "1.25rem", fontSize: "1rem" }}>
              Layanan
            </h4>
            {[
              "Sewa Harian", "Sewa Mingguan", "Sewa Bulanan",
              "Dengan Sopir", "Tanpa Sopir", "Antar Jemput Bandara",
            ].map((s) => (
              <span key={s} style={{
                display: "block",
                color: "rgba(255,255,255,0.6)",
                marginBottom: "0.625rem",
                fontSize: "0.9rem",
              }}>{s}</span>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ color: "#FFFFFF", fontFamily: "var(--font-display)", fontWeight: 700, marginBottom: "1.25rem", fontSize: "1rem" }}>
              Hubungi Kami
            </h4>
            {[
              { icon: <MapPin size={16} />, text: "Jl. Sudirman No. 45, Jakarta Pusat, DKI Jakarta 10220" },
              { icon: <Phone size={16} />, text: "+62 895-3938-55667" },
              { icon: <Mail size={16} />, text: "info@drivego.id" },
            ].map((c, i) => (
              <div key={i} style={{ display: "flex", gap: "0.625rem", marginBottom: "0.875rem", alignItems: "flex-start" }}>
                <span style={{ color: "#F4511E", marginTop: 2, flexShrink: 0 }}>{c.icon}</span>
                <span style={{ fontSize: "0.875rem", lineHeight: 1.5 }}>{c.text}</span>
              </div>
            ))}
            <div style={{
              marginTop: "1rem",
              backgroundColor: "rgba(244, 81, 30, 0.15)",
              border: "1px solid rgba(244, 81, 30, 0.3)",
              borderRadius: 8,
              padding: "0.75rem 1rem",
            }}>
              <p style={{ color: "#F4511E", fontSize: "0.8rem", fontFamily: "var(--font-display)", fontWeight: 600, margin: 0 }}>
                Jam Operasional
              </p>
              <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", marginTop: 4 }}>
                Senin – Minggu: 07:00 – 22:00 WIB
              </p>
            </div>
          </div>
        </div>

        <div style={{
          borderTop: "1px solid rgba(255,255,255,0.08)",
          paddingTop: "1.5rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.75rem",
        }}>
          <p style={{ fontSize: "0.85rem", margin: 0 }}>
            © 2026 DriveGo Indonesia. Hak cipta dilindungi undang-undang.
          </p>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            {["Kebijakan Privasi", "Syarat & Ketentuan"].map(t => (
              <a key={t} href="#" style={{
                color: "rgba(255,255,255,0.5)",
                textDecoration: "none",
                fontSize: "0.85rem",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#F4511E")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(255,255,255,0.5)")}
              >{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
