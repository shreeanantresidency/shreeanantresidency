import { Button } from "@/components/ui/button";
import { Link, createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import {
  ArrowRight,
  BookOpen,
  Building2,
  Camera,
  ChevronRight,
  Fingerprint,
  FlameKindling,
  Home,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Star,
  Utensils,
  Wifi,
  Wind,
} from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import "aos/dist/aos.css";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const MISSION_PILLARS = [
  {
    icon: ShieldCheck,
    title: "Safety",
    desc: "Every girl's safety is our highest priority. Biometric entry, CCTV coverage, and trained security staff ensure a fully secure environment 24/7.",
  },
  {
    icon: Star,
    title: "Comfort",
    desc: "Single-occupancy AC rooms with premium furnishing, clean bathrooms, and hygienic food service create a comfortable home away from home.",
  },
  {
    icon: BookOpen,
    title: "Academic Focus",
    desc: "A quiet, study-friendly atmosphere with dedicated study hours, high-speed dual WiFi, and proximity to top coaching institutes drives excellence.",
  },
];

const WHY_CARDS = [
  {
    icon: Building2,
    title: "Single Occupancy Rooms",
    desc: "No roommate distractions. Your own private space with single bed, study table, wardrobe, and AC for complete focus.",
  },
  {
    icon: Camera,
    title: "24/7 CCTV Security",
    desc: "High-definition cameras at all entry/exit points, corridors, and common areas. All footage recorded and monitored around the clock.",
  },
  {
    icon: Fingerprint,
    title: "Biometric Entry",
    desc: "Fingerprint-authenticated entry system ensures only registered residents can access the premises. Zero unauthorized entry.",
  },
  {
    icon: Wifi,
    title: "Dual WiFi on Every Floor",
    desc: "Two separate high-speed WiFi networks on each floor. Seamless internet for online lectures, mock tests, and video calls.",
  },
  {
    icon: Utensils,
    title: "Home-Cooked Meals",
    desc: "Nutritious, hygienically prepared meals three times a day by experienced cooks who understand the dietary needs of students.",
  },
  {
    icon: MapPin,
    title: "Near Top Coaching Institutes",
    desc: "Walking distance from Allen, Resonance, and Aakash. Save commute time and energy for what matters most — your studies.",
  },
];

const SAFETY_POINTS = [
  {
    emoji: "🔐",
    title: "Biometric Entry System",
    desc: "Fingerprint-based access control ensures only enrolled residents and authorized visitors can enter the premises.",
  },
  {
    emoji: "📷",
    title: "Full CCTV Coverage",
    desc: "HD cameras installed at all entry/exit points, corridors, and common areas. Continuous 24/7 monitoring and recording.",
  },
  {
    emoji: "🕐",
    title: "Safe Gate Timings",
    desc: "Gates open at 5:30 AM and close at 9:00 PM. This is purely for girls' safety — no unnecessary restrictions otherwise.",
  },
  {
    emoji: "🚒",
    title: "Fire Safety Equipment",
    desc: "Fire extinguishers and smoke alarms installed on every floor. Emergency response protocol in place.",
  },
  {
    emoji: "👮",
    title: "Trained Security Staff",
    desc: "Security personnel on duty at all times. All visitors are logged and screened before entry is permitted.",
  },
  {
    emoji: "👩",
    title: "Female Staff & Management",
    desc: "Female warden and support staff are always available. Parents can schedule visits on designated days.",
  },
];

export default function AboutPage() {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: "ease-out-cubic" });
  }, []);

  return (
    <div>
      {/* ── HERO BANNER ── */}
      <section
        style={{
          position: "relative",
          minHeight: 400,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {/* Background image */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/entrance.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.04)",
            transition: "transform 8s ease-out",
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, oklch(0.1 0.02 50 / 0.75) 0%, oklch(0.08 0.02 50 / 0.88) 100%)",
          }}
        />
        {/* Content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "80px 1.5rem 60px",
          }}
        >
          {/* Breadcrumb */}
          <nav
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 6,
              marginBottom: 20,
            }}
            aria-label="breadcrumb"
          >
            <Link
              to="/"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 4,
                fontSize: "0.8rem",
                color: "oklch(0.75 0.04 70)",
                textDecoration: "none",
                transition: "color 0.2s",
              }}
            >
              <Home size={13} />
              Home
            </Link>
            <ChevronRight size={13} style={{ color: "oklch(0.5 0.04 65)" }} />
            <span
              style={{
                fontSize: "0.8rem",
                color: "oklch(0.65 0.14 70)",
                fontWeight: 600,
              }}
            >
              About
            </span>
          </nav>

          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "block",
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "oklch(0.65 0.14 70)",
              marginBottom: 14,
            }}
          >
            Know Us Better
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.6rem)",
              fontWeight: 700,
              color: "white",
              lineHeight: 1.1,
              margin: "0 0 16px",
            }}
          >
            About Shree Anant Residency
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{
              fontSize: "1.05rem",
              color: "oklch(0.82 0.025 65)",
              maxWidth: 500,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A Premium Girls Hostel in Kota — Safe, Comfortable & Study Focused
          </motion.p>
        </div>
      </section>

      {/* ── MAIN ABOUT SECTION ── */}
      <section
        style={{ padding: "80px 1.5rem", background: "oklch(0.97 0.012 75)" }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Image collage */}
          <div data-aos="fade-right">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: 10,
              }}
            >
              <div
                className="img-zoom"
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  gridRow: "span 2",
                }}
              >
                <img
                  src="/assets/front-view-1.jpeg"
                  alt="Shree Anant Residency Front View"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 370,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="img-zoom"
                style={{ borderRadius: 10, overflow: "hidden" }}
              >
                <img
                  src="/assets/room-1.jpeg"
                  alt="Single AC Room"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 175,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="img-zoom"
                style={{ borderRadius: 10, overflow: "hidden" }}
              >
                <img
                  src="/assets/corridor.jpeg"
                  alt="Corridor"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 175,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>

          {/* Text */}
          <div data-aos="fade-left" data-aos-delay="100">
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.14 70)",
              }}
            >
              Your Home Away From Home
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.7rem, 2.8vw, 2.4rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                margin: "12px 0 18px",
                lineHeight: 1.2,
              }}
            >
              Your Home Away From Home in Kota
            </h2>
            <div className="section-divider" style={{ marginBottom: 24 }} />

            <p
              style={{
                fontSize: "0.94rem",
                color: "oklch(0.4 0.02 50)",
                lineHeight: 1.85,
                marginBottom: 16,
              }}
            >
              Founded by <strong>Murli Manohar</strong>, Shree Anant Residency
              was built with a singular vision — to give IIT-JEE and NEET
              aspirants in Kota a safe, premium home that supports their
              academic journey. We understand that parents entrust us with their
              most precious responsibility, and we honour that trust every
              single day.
            </p>

            <p
              style={{
                fontSize: "0.94rem",
                color: "oklch(0.4 0.02 50)",
                lineHeight: 1.85,
                marginBottom: 16,
              }}
            >
              Situated in the heart of Kota's student zone at Electronic
              Complex, Rajeev Gandhi Nagar, we are walking distance from Allen,
              Resonance, and Aakash coaching institutes, a hospital, and a park
              for morning walks. Every detail of our hostel — from the
              single-occupancy AC rooms to the hygienic mess — is designed
              around one goal: your success.
            </p>

            <p
              style={{
                fontSize: "0.94rem",
                color: "oklch(0.4 0.02 50)",
                lineHeight: 1.85,
                marginBottom: 26,
              }}
            >
              Gates open at{" "}
              <strong style={{ color: "oklch(0.35 0.08 60)" }}>5:30 AM</strong>{" "}
              and close at{" "}
              <strong style={{ color: "oklch(0.35 0.08 60)" }}>9:00 PM</strong>{" "}
              — purely for the safety of our residents, with no unnecessary
              restrictions on their freedom or student life.
            </p>

            {/* Quote block */}
            <div
              style={{
                padding: "16px 20px",
                background: "oklch(0.55 0.14 70 / 0.06)",
                border: "1px solid oklch(0.55 0.14 70 / 0.22)",
                borderRadius: 10,
                borderLeft: "4px solid oklch(0.55 0.14 70)",
                marginBottom: 28,
              }}
            >
              <p
                style={{
                  fontSize: "0.9rem",
                  fontStyle: "italic",
                  color: "oklch(0.38 0.06 60)",
                  margin: 0,
                  lineHeight: 1.75,
                }}
              >
                "Our mission is to be a home away from home — where every girl
                feels safe, supported, and empowered to achieve her highest
                potential."
              </p>
              <p
                style={{
                  fontSize: "0.82rem",
                  color: "oklch(0.5 0.14 68)",
                  marginTop: 8,
                  fontWeight: 600,
                }}
              >
                — Murli Manohar, Founder
              </p>
            </div>

            <Link to="/contact">
              <Button
                data-ocid="about-contact-cta"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.47 0.16 65))",
                  color: "white",
                  border: "none",
                  padding: "0 28px",
                  height: 44,
                  fontWeight: 600,
                  borderRadius: 6,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  fontSize: "0.9rem",
                }}
              >
                Get in Touch <ArrowRight size={15} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── OUR MISSION ── */}
      <section
        style={{
          padding: "80px 1.5rem",
          background: "oklch(0.96 0.015 75)",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div data-aos="fade-up">
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.14 70)",
              }}
            >
              Our Mission
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                margin: "12px auto 16px",
                lineHeight: 1.2,
                maxWidth: 640,
              }}
            >
              Creating the Ideal Environment for Girls to Thrive
            </h2>
            <div
              className="section-divider"
              style={{ margin: "0 auto 20px" }}
            />
            <p
              style={{
                fontSize: "0.97rem",
                color: "oklch(0.45 0.025 55)",
                maxWidth: 680,
                margin: "0 auto 52px",
                lineHeight: 1.8,
              }}
            >
              At Shree Anant Residency, our mission is to provide a safe,
              comfortable, and academically supportive home for girls in Kota.
              We believe that a good living environment directly impacts
              academic performance — and we are committed to being the best
              possible foundation for your success.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: 24,
              textAlign: "left",
            }}
          >
            {MISSION_PILLARS.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.12 }}
                style={{
                  background: "oklch(0.985 0.008 75)",
                  border: "1px solid oklch(0.9 0.02 75)",
                  borderRadius: 14,
                  padding: "32px 28px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Subtle gold accent bar */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 3,
                    background:
                      "linear-gradient(90deg, oklch(0.55 0.14 70), oklch(0.65 0.18 70))",
                    borderRadius: "14px 14px 0 0",
                  }}
                />
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 13,
                    background: "oklch(0.55 0.14 70 / 0.1)",
                    border: "1.5px solid oklch(0.55 0.14 70 / 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 18,
                  }}
                >
                  <pillar.icon
                    size={24}
                    style={{ color: "oklch(0.48 0.14 65)" }}
                  />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "oklch(0.22 0.04 50)",
                    marginBottom: 10,
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.88rem",
                    color: "oklch(0.5 0.02 55)",
                    lineHeight: 1.75,
                  }}
                >
                  {pillar.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section
        style={{
          padding: "80px 1.5rem",
          background: "oklch(0.97 0.012 75)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            data-aos="fade-up"
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.14 70)",
              }}
            >
              Why Choose Us
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                margin: "12px 0 14px",
                lineHeight: 1.2,
              }}
            >
              What Makes Us Different
            </h2>
            <div className="section-divider" style={{ margin: "0 auto" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 20,
            }}
          >
            {WHY_CARDS.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-ocid={`why-card-${i}`}
                style={{
                  background: "oklch(0.985 0.008 75)",
                  border: "1px solid oklch(0.9 0.02 75)",
                  borderRadius: 12,
                  padding: "26px 24px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                  transition: "box-shadow 0.25s, transform 0.25s",
                  cursor: "default",
                }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 8px 28px oklch(0.55 0.14 70 / 0.12)",
                }}
              >
                <div
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: 11,
                    background: "oklch(0.55 0.14 70 / 0.1)",
                    border: "1.5px solid oklch(0.55 0.14 70 / 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <card.icon
                    size={20}
                    style={{ color: "oklch(0.48 0.14 65)" }}
                  />
                </div>
                <div>
                  <h4
                    className="font-display"
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "oklch(0.22 0.04 50)",
                      marginBottom: 6,
                    }}
                  >
                    {card.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      color: "oklch(0.5 0.02 55)",
                      lineHeight: 1.7,
                      margin: 0,
                    }}
                  >
                    {card.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SAFETY & SECURITY ── */}
      <section
        style={{
          padding: "80px 1.5rem",
          background: "oklch(0.96 0.015 75)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 56,
            alignItems: "center",
          }}
        >
          {/* Safety text */}
          <div data-aos="fade-right">
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.14 70)",
              }}
            >
              Safety & Security
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                margin: "12px 0 18px",
                lineHeight: 1.2,
              }}
            >
              Your Safety Is Our First Priority
            </h2>
            <div className="section-divider" style={{ marginBottom: 28 }} />

            <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
              {SAFETY_POINTS.map((pt) => (
                <div
                  key={pt.title}
                  style={{ display: "flex", gap: 14, alignItems: "flex-start" }}
                >
                  <span
                    style={{ fontSize: "1.35rem", flexShrink: 0, marginTop: 2 }}
                  >
                    {pt.emoji}
                  </span>
                  <div>
                    <div
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "oklch(0.28 0.04 50)",
                        marginBottom: 3,
                      }}
                    >
                      {pt.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.83rem",
                        color: "oklch(0.5 0.025 55)",
                        lineHeight: 1.65,
                      }}
                    >
                      {pt.desc}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Safety images */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              <div
                className="img-zoom"
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  gridColumn: "span 2",
                }}
              >
                <img
                  src="/assets/safety-1.jpeg"
                  alt="CCTV Security"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 220,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="img-zoom"
                style={{ borderRadius: 10, overflow: "hidden" }}
              >
                <img
                  src="/assets/safety-2.jpeg"
                  alt="Fire Safety"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 165,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="img-zoom"
                style={{ borderRadius: 10, overflow: "hidden" }}
              >
                <img
                  src="/assets/lift.jpeg"
                  alt="Lift"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 165,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ROOM & FACILITY ── */}
      <section
        style={{
          padding: "80px 1.5rem",
          background: "oklch(0.97 0.012 75)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            data-aos="fade-up"
            style={{ textAlign: "center", marginBottom: 52 }}
          >
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.14 70)",
              }}
            >
              Your Room
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.5rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                margin: "12px 0 14px",
              }}
            >
              Single AC Room with Study Setup
            </h2>
            <div className="section-divider" style={{ margin: "0 auto" }} />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
              alignItems: "center",
            }}
          >
            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 10,
              }}
            >
              <div
                className="img-zoom"
                style={{
                  borderRadius: 14,
                  overflow: "hidden",
                  gridColumn: "span 2",
                }}
              >
                <img
                  src="/assets/room-1.jpeg"
                  alt="Single Room"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 280,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="img-zoom"
                style={{ borderRadius: 10, overflow: "hidden" }}
              >
                <img
                  src="/assets/room-2.jpeg"
                  alt="Study Setup"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="img-zoom"
                style={{ borderRadius: 10, overflow: "hidden" }}
              >
                <img
                  src="/assets/bathroom-1.jpeg"
                  alt="Bathroom"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 160,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            </motion.div>

            {/* Room details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <p
                style={{
                  fontSize: "0.94rem",
                  color: "oklch(0.4 0.02 50)",
                  lineHeight: 1.85,
                  marginBottom: 28,
                }}
              >
                Every room at Shree Anant Residency is designed as a private
                sanctuary for serious students. With single occupancy, you have
                complete privacy, quiet, and your own dedicated space for both
                rest and rigorous study.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                  marginBottom: 28,
                }}
              >
                {[
                  ["🛏️", "Single Bed", "Comfortable, good-quality mattress"],
                  [
                    "📚",
                    "Study Table",
                    "Spacious desk with proper task lighting",
                  ],
                  ["🗄️", "Wardrobe", "Ample storage for clothes and belongings"],
                  ["❄️", "Split AC", "Individual climate control in every room"],
                  [
                    "🚿",
                    "Clean Bathroom",
                    "Attached or shared, always maintained",
                  ],
                  ["🔌", "Power Backup", "Inverter support during power cuts"],
                ].map(([emoji, name, detail]) => (
                  <div
                    key={name}
                    style={{
                      background: "oklch(0.985 0.008 75)",
                      border: "1px solid oklch(0.9 0.02 75)",
                      borderRadius: 10,
                      padding: "14px 16px",
                      display: "flex",
                      gap: 10,
                      alignItems: "flex-start",
                    }}
                  >
                    <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>
                      {emoji}
                    </span>
                    <div>
                      <div
                        style={{
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "oklch(0.28 0.04 50)",
                          marginBottom: 2,
                        }}
                      >
                        {name}
                      </div>
                      <div
                        style={{
                          fontSize: "0.75rem",
                          color: "oklch(0.55 0.02 55)",
                          lineHeight: 1.5,
                        }}
                      >
                        {detail}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Highlight tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {[
                  "Single Occupancy",
                  "AC Included",
                  "Study Focused",
                  "Ventilated",
                  "Clean & Hygienic",
                ].map((tag) => (
                  <span
                    key={tag}
                    style={{
                      padding: "5px 12px",
                      background: "oklch(0.55 0.14 70 / 0.08)",
                      border: "1px solid oklch(0.55 0.14 70 / 0.22)",
                      borderRadius: 999,
                      fontSize: "0.78rem",
                      color: "oklch(0.42 0.1 65)",
                      fontWeight: 600,
                    }}
                  >
                    ✦ {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── MANAGEMENT & CTA ── */}
      <section
        style={{
          padding: "80px 1.5rem",
          background: "oklch(0.22 0.04 50)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 48,
            alignItems: "center",
          }}
        >
          {/* Management info */}
          <div data-aos="fade-right">
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.14 70)",
              }}
            >
              Management
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.7rem, 2.8vw, 2.3rem)",
                fontWeight: 700,
                color: "white",
                margin: "12px 0 18px",
                lineHeight: 1.2,
              }}
            >
              Meet the Team Behind Shree Anant Residency
            </h2>
            <div
              style={{
                width: 60,
                height: 3,
                background:
                  "linear-gradient(90deg, oklch(0.55 0.14 70), oklch(0.65 0.18 70))",
                borderRadius: 2,
                marginBottom: 26,
              }}
            />

            {/* Owner card */}
            <div
              style={{
                background: "oklch(0.28 0.04 50)",
                border: "1px solid oklch(0.35 0.04 55)",
                borderRadius: 14,
                padding: "24px 22px",
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.47 0.16 65))",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  fontSize: "1.6rem",
                }}
              >
                👤
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 4,
                }}
              >
                Murli Manohar
              </h3>
              <p
                style={{
                  fontSize: "0.8rem",
                  color: "oklch(0.65 0.14 70)",
                  fontWeight: 600,
                  marginBottom: 14,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                }}
              >
                Founder & Owner
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 10 }}
              >
                <a
                  href="tel:7665432929"
                  data-ocid="owner-phone-link"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    textDecoration: "none",
                  }}
                >
                  <Phone
                    size={15}
                    style={{ color: "oklch(0.65 0.14 70)", flexShrink: 0 }}
                  />
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "oklch(0.78 0.02 60)",
                    }}
                  >
                    7665432929
                  </span>
                </a>
                <div
                  style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                >
                  <MapPin
                    size={15}
                    style={{
                      color: "oklch(0.65 0.14 70)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.88rem",
                      color: "oklch(0.78 0.02 60)",
                      lineHeight: 1.6,
                    }}
                  >
                    434, Electronic Complex, Rajeev Gandhi Nagar,
                    <br />
                    Kota, Rajasthan 324005
                  </span>
                </div>
              </div>
            </div>

            {/* Hostel contact */}
            <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
              <Phone size={14} style={{ color: "oklch(0.65 0.14 70)" }} />
              <span
                style={{ fontSize: "0.85rem", color: "oklch(0.72 0.02 60)" }}
              >
                Hostel Enquiry:{" "}
                <a
                  href="tel:06367139029"
                  data-ocid="hostel-phone-link"
                  style={{
                    color: "oklch(0.65 0.14 70)",
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  06367139029
                </a>
              </span>
            </div>
          </div>

          {/* CTA panel */}
          <div data-aos="fade-left" data-aos-delay="100">
            <div
              style={{
                background: "oklch(0.28 0.04 50)",
                border: "1px solid oklch(0.55 0.14 70 / 0.25)",
                borderRadius: 18,
                padding: "40px 36px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 72,
                  height: 72,
                  borderRadius: "50%",
                  background: "oklch(0.55 0.14 70 / 0.12)",
                  border: "2px solid oklch(0.55 0.14 70 / 0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 22px",
                }}
              >
                <Shield size={32} style={{ color: "oklch(0.65 0.14 70)" }} />
              </div>

              <h3
                className="font-display"
                style={{
                  fontSize: "1.4rem",
                  fontWeight: 700,
                  color: "white",
                  marginBottom: 12,
                  lineHeight: 1.3,
                }}
              >
                Ready to Give Your Daughter the Best Start?
              </h3>

              <p
                style={{
                  fontSize: "0.88rem",
                  color: "oklch(0.65 0.02 60)",
                  lineHeight: 1.7,
                  marginBottom: 28,
                }}
              >
                Book a personal visit to experience our facilities, rooms, and
                security measures firsthand. Limited seats available.
              </p>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <Link to="/contact">
                  <button
                    type="button"
                    data-ocid="about-book-visit-cta"
                    className="gold-glow"
                    style={{
                      width: "100%",
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.47 0.16 65))",
                      color: "white",
                      border: "none",
                      padding: "13px 28px",
                      borderRadius: 8,
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: 8,
                    }}
                  >
                    Book a Visit <ArrowRight size={16} />
                  </button>
                </Link>

                <a
                  href="tel:06367139029"
                  data-ocid="about-call-cta"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    padding: "12px 28px",
                    background: "oklch(0.34 0.04 50)",
                    border: "1px solid oklch(0.45 0.04 55)",
                    borderRadius: 8,
                    fontSize: "0.92rem",
                    fontWeight: 600,
                    color: "oklch(0.82 0.02 65)",
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                >
                  <Phone size={15} />
                  Call Now: 06367139029
                </a>
              </div>

              {/* Trust badges */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 20,
                  marginTop: 24,
                  paddingTop: 22,
                  borderTop: "1px solid oklch(0.35 0.03 50)",
                }}
              >
                {["Girls Only", "CCTV 24/7", "Near Coaching"].map((badge) => (
                  <div
                    key={badge}
                    style={{
                      fontSize: "0.72rem",
                      color: "oklch(0.6 0.06 65)",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    ✦ {badge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
