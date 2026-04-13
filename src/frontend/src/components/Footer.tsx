import { Link } from "@tanstack/react-router";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";

  const quickLinks = [
    { label: "Home", to: "/" },
    { label: "About Us", to: "/about" },
    { label: "Facilities", to: "/facilities" },
    { label: "Services", to: "/services" },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const facilities = [
    "AC Rooms",
    "CCTV Surveillance",
    "High-Speed WiFi",
    "Biometric Entry",
    "RO Water",
    "Laundry",
  ];

  return (
    <footer
      data-ocid="footer"
      style={{
        background:
          "linear-gradient(180deg, oklch(0.22 0.04 50), oklch(0.16 0.03 50))",
        color: "oklch(0.85 0.02 60)",
        paddingTop: 60,
        paddingBottom: 0,
      }}
    >
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 1.5rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 40,
            paddingBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 16,
              }}
            >
              <img
                src="/assets/logo.jpeg"
                alt="Logo"
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid oklch(0.55 0.14 70 / 0.6)",
                }}
              />
              <div>
                <div
                  className="font-display"
                  style={{
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "oklch(0.95 0.01 75)",
                    lineHeight: 1.2,
                  }}
                >
                  Shree Anant Residency
                </div>
                <div
                  style={{
                    fontSize: "0.7rem",
                    color: "oklch(0.55 0.14 70)",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                  }}
                >
                  Premium Girls Hostel
                </div>
              </div>
            </div>
            <p
              style={{
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: "oklch(0.65 0.015 60)",
                marginBottom: 20,
              }}
            >
              A premium residential facility for girls pursuing IIT-JEE and NEET
              in Kota. Safe, comfortable, and study-focused.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {(
                [
                  ["Facebook", Facebook],
                  ["Instagram", Instagram],
                  ["Twitter", Twitter],
                ] as const
              ).map(([name, Icon]) => (
                <a
                  key={name}
                  href={`https://${name.toLowerCase()}.com`}
                  aria-label={name}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    border: "1px solid oklch(0.55 0.14 70 / 0.4)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "oklch(0.55 0.14 70)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "oklch(0.9 0.02 70)",
                marginBottom: 20,
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.to} style={{ marginBottom: 8 }}>
                  <Link
                    to={link.to}
                    style={{
                      color: "oklch(0.65 0.015 60)",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      transition: "color 0.2s",
                    }}
                    className="hover:text-accent"
                  >
                    › {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Facilities */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "oklch(0.9 0.02 70)",
                marginBottom: 20,
              }}
            >
              Our Facilities
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {facilities.map((f) => (
                <li
                  key={f}
                  style={{
                    marginBottom: 8,
                    fontSize: "0.88rem",
                    color: "oklch(0.65 0.015 60)",
                  }}
                >
                  ✦ {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="font-display"
              style={{
                fontSize: "1rem",
                fontWeight: 600,
                color: "oklch(0.9 0.02 70)",
                marginBottom: 20,
              }}
            >
              Contact Us
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <div
                style={{ display: "flex", gap: 10, alignItems: "flex-start" }}
              >
                <MapPin
                  size={15}
                  style={{
                    color: "oklch(0.55 0.14 70)",
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                />
                <span
                  style={{
                    fontSize: "0.85rem",
                    color: "oklch(0.65 0.015 60)",
                    lineHeight: 1.6,
                  }}
                >
                  434, Electronic Complex, Rajeev Gandhi Nagar, Kota, Rajasthan
                  324005
                </span>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Phone
                  size={15}
                  style={{ color: "oklch(0.55 0.14 70)", flexShrink: 0 }}
                />
                <div>
                  <a
                    href="tel:06367139029"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "oklch(0.65 0.015 60)",
                      textDecoration: "none",
                    }}
                  >
                    Hostel: 06367139029
                  </a>
                  <a
                    href="tel:7665432929"
                    style={{
                      display: "block",
                      fontSize: "0.85rem",
                      color: "oklch(0.65 0.015 60)",
                      textDecoration: "none",
                    }}
                  >
                    Owner: 7665432929
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                <Mail
                  size={15}
                  style={{ color: "oklch(0.55 0.14 70)", flexShrink: 0 }}
                />
                <span
                  style={{ fontSize: "0.85rem", color: "oklch(0.65 0.015 60)" }}
                >
                  shreeanant.residency@gmail.com
                </span>
              </div>
            </div>
            <div
              style={{
                marginTop: 16,
                padding: "8px 12px",
                background: "oklch(0.55 0.14 70 / 0.12)",
                border: "1px solid oklch(0.55 0.14 70 / 0.3)",
                borderRadius: 6,
                fontSize: "0.8rem",
                color: "oklch(0.7 0.04 65)",
              }}
            >
              🕐 Gates open: 5:30 AM | Curfew: 9:00 PM
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            borderTop: "1px solid oklch(0.3 0.03 50)",
            padding: "16px 0",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 8,
            fontSize: "0.78rem",
            color: "oklch(0.5 0.01 55)",
          }}
        >
          <span>© {year} Shree Anant Residency. All rights reserved.</span>
          <span>
            Built with love using{" "}
            <a
              href={`https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "oklch(0.55 0.14 70)", textDecoration: "none" }}
            >
              caffeine.ai
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
