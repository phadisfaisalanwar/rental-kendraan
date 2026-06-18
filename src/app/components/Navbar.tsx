import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import { Menu, X, Car, Phone } from "lucide-react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { to: "/", label: "Beranda" },
    { to: "/about", label: "Tentang Kami" },
    { to: "/services", label: "Armada" },
    { to: "/contact", label: "Kontak" },
  ];

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    transition: "all 0.3s ease",
    backgroundColor: scrolled ? "#1B2B5E" : "rgba(11, 17, 40, 0.85)",
    backdropFilter: "blur(12px)",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
    boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,0.18)" : "none",
  };

  return (
    <nav style={navStyle}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Logo */}
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", textDecoration: "none" }}>
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
              letterSpacing: "-0.02em",
            }}>
              Drive<span style={{ color: "#F4511E" }}>Go</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: "flex", alignItems: "center", gap: "2rem" }} className="hidden-mobile">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} style={({ isActive }) => ({
                textDecoration: "none",
                color: isActive ? "#F4511E" : "rgba(255,255,255,0.80)",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "0.9375rem",
                transition: "color 0.2s",
                borderBottom: isActive ? "2px solid #F4511E" : "2px solid transparent",
                paddingBottom: 2,
              })}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }} className="hidden-mobile">
            <a href="tel:+62895393855667" style={{
              display: "flex", alignItems: "center", gap: "0.4rem",
              color: "rgba(255,255,255,0.7)", textDecoration: "none",
              fontSize: "0.875rem", fontFamily: "var(--font-display)",
            }}>
              <Phone size={15} />
              <span>+62 895-3938-55667</span>
            </a>
            <Link to="/services" style={{
              backgroundColor: "#F4511E",
              color: "#FFFFFF",
              padding: "0.5rem 1.25rem",
              borderRadius: 6,
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              fontSize: "0.875rem",
              transition: "background 0.2s",
            }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#d93e0f")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#F4511E")}
            >
              Sewa Sekarang
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", color: "white", cursor: "pointer", padding: 4 }}
            className="show-mobile"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div style={{
            borderTop: "1px solid rgba(255,255,255,0.1)",
            paddingBottom: "1rem",
            backgroundColor: "#1B2B5E",
          }}>
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} onClick={() => setOpen(false)} style={({ isActive }) => ({
                display: "block",
                padding: "0.75rem 0",
                textDecoration: "none",
                color: isActive ? "#F4511E" : "rgba(255,255,255,0.85)",
                fontFamily: "var(--font-display)",
                fontWeight: 500,
                fontSize: "1rem",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              })}>
                {l.label}
              </NavLink>
            ))}
            <Link to="/services" onClick={() => setOpen(false)} style={{
              display: "block",
              marginTop: "1rem",
              backgroundColor: "#F4511E",
              color: "#FFFFFF",
              padding: "0.75rem 1.25rem",
              borderRadius: 6,
              textDecoration: "none",
              fontFamily: "var(--font-display)",
              fontWeight: 600,
              textAlign: "center",
            }}>
              Sewa Sekarang
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (min-width: 768px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
        @media (max-width: 767px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
      `}</style>
    </nav>
  );
}
