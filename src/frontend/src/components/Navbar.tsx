import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Facilities", to: "/facilities" },
  { label: "Services", to: "/services" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      data-ocid="navbar"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled
          ? "oklch(0.98 0.01 75 / 0.97)"
          : "oklch(0.98 0.01 75 / 0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: scrolled
          ? "1px solid oklch(0.88 0.025 75)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 2px 20px oklch(0.3 0.05 50 / 0.08)" : "none",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 68,
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <img
              src="/assets/logo.jpeg"
              alt="Shree Anant Residency Logo"
              style={{
                width: 42,
                height: 42,
                borderRadius: "50%",
                objectFit: "cover",
                border: "2px solid oklch(0.55 0.14 70 / 0.5)",
              }}
            />
            <div>
              <div
                className="font-display"
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  color: "oklch(0.25 0.04 50)",
                  lineHeight: 1.2,
                  letterSpacing: "0.01em",
                }}
              >
                Shree Anant Residency
              </div>
              <div
                style={{
                  fontSize: "0.65rem",
                  color: "oklch(0.55 0.14 70)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Premium Girls Hostel
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div
            style={{ display: "flex", alignItems: "center", gap: 6 }}
            className="hidden md:flex"
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link-underline"
                style={{
                  padding: "6px 12px",
                  fontSize: "0.88rem",
                  fontWeight: 500,
                  color:
                    currentPath === link.to
                      ? "oklch(0.45 0.12 65)"
                      : "oklch(0.3 0.04 50)",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" style={{ marginLeft: 8 }}>
              <Button
                data-ocid="nav-book-now"
                className="gold-glow"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.5 0.16 65))",
                  color: "white",
                  border: "none",
                  padding: "0 20px",
                  height: 38,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  letterSpacing: "0.04em",
                  borderRadius: 6,
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
              >
                Book Now
              </Button>
            </Link>
            <a
              href="tel:06367139029"
              style={{
                marginLeft: 4,
                display: "flex",
                alignItems: "center",
                gap: 4,
                color: "oklch(0.55 0.14 70)",
                textDecoration: "none",
                fontSize: "0.82rem",
                fontWeight: 500,
              }}
            >
              <Phone size={14} />
              <span className="hidden lg:inline">Call Now</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            className="md:hidden"
            aria-label="Toggle menu"
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 8,
              color: "oklch(0.3 0.04 50)",
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div
            style={{
              borderTop: "1px solid oklch(0.88 0.025 75)",
              paddingBottom: 16,
              background: "oklch(0.98 0.01 75)",
            }}
          >
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: "block",
                  padding: "10px 0",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  color:
                    currentPath === link.to
                      ? "oklch(0.45 0.12 65)"
                      : "oklch(0.3 0.04 50)",
                  textDecoration: "none",
                  borderBottom: "1px solid oklch(0.92 0.02 75)",
                }}
              >
                {link.label}
              </Link>
            ))}
            <div
              style={{
                display: "flex",
                gap: 12,
                marginTop: 12,
                alignItems: "center",
              }}
            >
              <Link to="/contact">
                <Button
                  data-ocid="mobile-book-now"
                  className="gold-glow"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.5 0.16 65))",
                    color: "white",
                    border: "none",
                    padding: "0 20px",
                    height: 38,
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    borderRadius: 6,
                  }}
                >
                  Book Now
                </Button>
              </Link>
              <a
                href="tel:06367139029"
                style={{
                  color: "oklch(0.55 0.14 70)",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                📞 06367139029
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
