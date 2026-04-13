import "aos/dist/aos.css";
import { Link, createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import {
  ArrowRight,
  ArrowUpSquare,
  Bed,
  CheckCircle2,
  ChefHat,
  Droplets,
  Shield,
  Shirt,
  Wifi,
  XCircle,
} from "lucide-react";
import { useEffect } from "react";

export const Route = createFileRoute("/facilities")({
  component: FacilitiesPage,
});

/* ─────────────────────── Types ─────────────────────── */
interface FacilitySection {
  id: string;
  icon: React.ElementType;
  eyebrow: string;
  heading: string;
  description: string;
  bulletPoints: string[];
  highlight: string;
  images: { src: string; alt: string }[];
  imageRight?: boolean;
}

/* ─────────────────────── Data ─────────────────────── */
const STATS = [
  { value: "50+", label: "Rooms" },
  { value: "24/7", label: "Security" },
  { value: "Dual", label: "WiFi Every Floor" },
  { value: "100%", label: "AC Rooms" },
];

const FACILITY_SECTIONS: FacilitySection[] = [
  {
    id: "security",
    icon: Shield,
    eyebrow: "Safety First",
    heading: "Security & Safety",
    description:
      "At Shree Anant Residency, the safety of every girl is treated as the highest responsibility. A comprehensive, multi-layer security system is in place around the clock to ensure residents feel secure at all times.",
    bulletPoints: [
      "HD CCTV cameras in all corridors, entry/exit points & common areas",
      "Biometric entry system with fingerprint scanner — only registered residents allowed",
      "AGNI fire alarm system installed throughout the building",
      "Fire extinguishers and hose reels placed on every floor",
      "Trained 24/7 security guard stationed at main gate",
      "Gate closes at 9 PM for the safety and well-being of residents",
    ],
    highlight: "Zero-compromise security — your parents will thank us",
    images: [
      { src: "/assets/safety-1.jpeg", alt: "CCTV Surveillance System" },
      { src: "/assets/safety-2.jpeg", alt: "Fire Safety Equipment" },
    ],
    imageRight: false,
  },
  {
    id: "rooms",
    icon: Bed,
    eyebrow: "Private Living",
    heading: "Single AC Rooms",
    description:
      "Every room at Shree Anant Residency is designed to be your personal sanctuary — a comfortable, private space where you can sleep well and study without distraction.",
    bulletPoints: [
      "100% single occupancy — no roommate sharing, full privacy",
      "Split AC in every room for year-round climate comfort",
      "Single bed with quality orthopedic mattress",
      "Dedicated study table, ergonomic chair, and reading lamp",
      "Wardrobe and personal storage for all belongings",
      "Large windows for natural light and cross ventilation",
    ],
    highlight: "Your own private AC room — no compromise",
    images: [{ src: "/assets/room-1.jpeg", alt: "Single AC Room" }],
    imageRight: true,
  },
  {
    id: "bathrooms",
    icon: Droplets,
    eyebrow: "Hygiene & Comfort",
    heading: "Clean Attached Bathrooms",
    description:
      "Each room comes with a private attached bathroom maintained to the highest standards of cleanliness. Residents never have to share or wait in queues.",
    bulletPoints: [
      "Marble-tiled bathrooms with modern fittings",
      "Electric geysers for instant hot water round the clock",
      "Proper drainage and ventilation systems",
      "Daily deep cleaning by dedicated housekeeping staff",
      "Sufficient storage space for toiletries",
    ],
    highlight: "Private attached bathrooms — no shared facilities",
    images: [
      { src: "/assets/bathroom-1.jpeg", alt: "Attached Bathroom" },
      { src: "/assets/bathroom-2.jpeg", alt: "Bathroom Fittings" },
    ],
    imageRight: false,
  },
  {
    id: "wifi",
    icon: Wifi,
    eyebrow: "Always Connected",
    heading: "Dual High-Speed WiFi on Every Floor",
    description:
      "Academic success today requires reliable, fast internet. We've installed dual WiFi routers on every floor so that no one ever suffers from connectivity issues during lectures or video calls.",
    bulletPoints: [
      "Two separate high-speed WiFi routers on each floor",
      "Uninterrupted connectivity — no single point of failure",
      "Perfectly suited for Zoom/Google Meet online classes",
      "Fast download speeds for academic research & streaming lectures",
      "24/7 internet access — study at any hour",
    ],
    highlight: "Dual WiFi ensures zero disruption to your studies",
    images: [{ src: "/assets/corridor.jpeg", alt: "WiFi Enabled Corridors" }],
    imageRight: true,
  },
  {
    id: "lift",
    icon: ArrowUpSquare,
    eyebrow: "Smooth Access",
    heading: "Premium Elevator",
    description:
      "Our smooth, well-maintained elevator provides comfortable floor-to-floor access for all residents. No more struggling with luggage during admission or carrying heavy study materials up stairs.",
    bulletPoints: [
      "Modern premium elevator serving all floors",
      "Effortless access — no struggle with luggage or heavy bags",
      "Fully accessible for all residents",
      "Regularly maintained and safety-certified",
    ],
    highlight: "Premium elevator access to every floor",
    images: [{ src: "/assets/lift.jpeg", alt: "Elevator Lift Facility" }],
    imageRight: false,
  },
  {
    id: "kitchen",
    icon: ChefHat,
    eyebrow: "Nourishment",
    heading: "Hygienic Kitchen & Dining",
    description:
      "Brain food matters! Our professionally managed kitchen delivers fresh, nutritious, home-style meals every day. Cooking is done by experienced cooks who understand the dietary needs of students.",
    bulletPoints: [
      "Clean, hygienic kitchen with daily sanitization protocols",
      "Fresh, nutritious meals prepared by experienced cooks",
      "RO purified water used for all cooking and drinking",
      "Balanced diet — dal, sabzi, roti, rice, and seasonal vegetables",
      "Mess timings aligned with coaching schedules",
    ],
    highlight: "Nutritious home-style meals to fuel your preparation",
    images: [{ src: "/assets/kitchen-1.jpeg", alt: "Hygienic Kitchen" }],
    imageRight: true,
  },
  {
    id: "laundry",
    icon: Shirt,
    eyebrow: "Daily Convenience",
    heading: "Laundry Facility",
    description:
      "We understand students have limited time and energy for chores. Our on-site laundry facility ensures clean clothes are never a worry, letting you focus entirely on your studies.",
    bulletPoints: [
      "Dedicated on-site laundry area with washing machines",
      "Scheduled laundry time slots for all residents",
      "Organized system to prevent any mixing of clothes",
      "Drying area available within the premises",
    ],
    highlight: "On-site laundry — one less thing to worry about",
    images: [{ src: "/assets/corridor.jpeg", alt: "Laundry Facility" }],
    imageRight: false,
  },
  {
    id: "water",
    icon: Droplets,
    eyebrow: "Pure & Safe",
    heading: "RO Purified Water",
    description:
      "Health is non-negotiable. RO water purifiers are installed on every floor to ensure residents always have access to safe, clean drinking water without any hassle.",
    bulletPoints: [
      "Multi-stage RO water purifiers installed on every floor",
      "Safe, purified drinking water available 24/7",
      "Regular filter maintenance and quality testing",
      "No dependency on packaged mineral water bottles",
    ],
    highlight: "RO water on every floor — safe hydration always",
    images: [{ src: "/assets/kitchen-1.jpeg", alt: "RO Water Purifiers" }],
    imageRight: true,
  },
];

const COMPARISON = [
  {
    feature: "Single Occupancy Rooms",
    us: true,
    standard: false,
    others: false,
  },
  { feature: "AC in Every Room", us: true, standard: false, others: false },
  { feature: "Biometric Entry", us: true, standard: false, others: false },
  { feature: "24/7 CCTV", us: true, standard: true, others: false },
  { feature: "Dual WiFi Per Floor", us: true, standard: false, others: false },
  { feature: "Attached Bathrooms", us: true, standard: false, others: false },
  { feature: "Premium Elevator", us: true, standard: false, others: false },
  { feature: "RO Water Every Floor", us: true, standard: true, others: false },
  { feature: "Fire Safety System", us: true, standard: true, others: false },
  { feature: "24/7 Security Guard", us: true, standard: false, others: false },
  { feature: "Daily Housekeeping", us: true, standard: false, others: false },
  { feature: "Nutritious Meals", us: true, standard: true, others: false },
];

/* ─────────────────────── Sub-Components ─────────────────────── */
function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-block",
        fontSize: "0.7rem",
        fontWeight: 700,
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "oklch(0.52 0.14 68)",
        marginBottom: 10,
      }}
    >
      {children}
    </span>
  );
}

function FacilityCard({
  section,
  index,
}: { section: FacilitySection; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={`${index * 60}`}
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        gap: 48,
        alignItems: "center",
      }}
    >
      {/* Image block */}
      <div
        style={{
          order: isEven ? 0 : 1,
          display: "grid",
          gap: 10,
          gridTemplateColumns: section.images.length > 1 ? "1fr 1fr" : "1fr",
        }}
      >
        {section.images.map((img) => (
          <div
            key={img.src}
            className="img-zoom"
            style={{
              borderRadius: 14,
              overflow: "hidden",
              gridColumn: section.images.length === 1 ? "1 / -1" : undefined,
            }}
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              style={{
                width: "100%",
                height: section.images.length > 1 ? 200 : 300,
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        ))}
      </div>

      {/* Text block */}
      <div style={{ order: isEven ? 1 : 0 }}>
        <SectionBadge>{section.eyebrow}</SectionBadge>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            marginBottom: 14,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "oklch(0.55 0.14 70 / 0.1)",
              border: "1.5px solid oklch(0.55 0.14 70 / 0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <section.icon size={22} style={{ color: "oklch(0.5 0.14 65)" }} />
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.3rem, 2.5vw, 1.9rem)",
              fontWeight: 700,
              color: "oklch(0.2 0.03 50)",
              lineHeight: 1.2,
            }}
          >
            {section.heading}
          </h2>
        </div>

        <div className="section-divider" style={{ marginBottom: 18 }} />

        <p
          style={{
            fontSize: "0.93rem",
            color: "oklch(0.42 0.025 52)",
            lineHeight: 1.8,
            marginBottom: 20,
          }}
        >
          {section.description}
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            margin: "0 0 22px",
            display: "flex",
            flexDirection: "column",
            gap: 8,
          }}
        >
          {section.bulletPoints.map((point) => (
            <li
              key={point}
              style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
            >
              <CheckCircle2
                size={15}
                style={{
                  color: "oklch(0.52 0.14 68)",
                  flexShrink: 0,
                  marginTop: 3,
                }}
              />
              <span
                style={{
                  fontSize: "0.88rem",
                  color: "oklch(0.42 0.025 52)",
                  lineHeight: 1.6,
                }}
              >
                {point}
              </span>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            padding: "8px 16px",
            background: "oklch(0.55 0.14 70 / 0.07)",
            border: "1px solid oklch(0.55 0.14 70 / 0.28)",
            borderRadius: 999,
            fontSize: "0.8rem",
            color: "oklch(0.45 0.1 65)",
            fontWeight: 600,
          }}
        >
          ✦ {section.highlight}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────── Page ─────────────────────── */
export default function FacilitiesPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }, []);

  return (
    <div>
      {/* ── Hero Banner ─────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: 420,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "oklch(0.16 0.03 50)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/corridor.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.28,
          }}
        />
        {/* Gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, oklch(0.16 0.03 50 / 0.5) 0%, oklch(0.16 0.03 50 / 0.75) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "80px 1.5rem 70px",
            maxWidth: 700,
          }}
        >
          <div data-aos="fade-down" data-aos-delay="100">
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "oklch(0.68 0.15 70)",
              }}
            >
              Shree Anant Residency
            </span>
          </div>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "white",
              margin: "14px 0 18px",
              lineHeight: 1.1,
            }}
          >
            Our Facilities
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="320"
            style={{
              fontSize: "1.05rem",
              color: "oklch(0.8 0.02 65)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Everything You Need for Comfortable Living &amp; Focused Study
          </p>
        </div>
      </section>

      {/* ── Stats Overview ─────────────────────────── */}
      <section
        style={{
          background: "oklch(0.22 0.04 50)",
          padding: "0",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
          }}
        >
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              data-aos="fade-up"
              data-aos-delay={`${i * 80}`}
              style={{
                padding: "28px 20px",
                textAlign: "center",
                borderRight:
                  i < STATS.length - 1
                    ? "1px solid oklch(0.32 0.04 50)"
                    : "none",
              }}
            >
              <div
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                  fontWeight: 700,
                  color: "oklch(0.68 0.15 70)",
                  lineHeight: 1,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.78rem",
                  color: "oklch(0.65 0.02 60)",
                  marginTop: 6,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Detailed Facility Sections ─────────────── */}
      <section
        style={{ background: "oklch(0.97 0.012 75)", padding: "90px 1.5rem" }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "flex",
            flexDirection: "column",
            gap: 90,
          }}
        >
          {/* Section Header */}
          <div data-aos="fade-up" style={{ textAlign: "center" }}>
            <SectionBadge>In Detail</SectionBadge>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.7rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                marginBottom: 14,
              }}
            >
              Premium Facilities, Explained
            </h2>
            <div
              className="section-divider"
              style={{ margin: "0 auto 20px" }}
            />
            <p
              style={{
                fontSize: "0.95rem",
                color: "oklch(0.5 0.025 52)",
                maxWidth: 540,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              We don't just list amenities — we explain exactly what each
              facility means for your daily life at Shree Anant Residency.
            </p>
          </div>

          {/* Individual Facility Cards */}
          {FACILITY_SECTIONS.map((section, i) => (
            <FacilityCard key={section.id} section={section} index={i} />
          ))}
        </div>
      </section>

      {/* ── Comparison Table ───────────────────────── */}
      <section
        style={{
          background: "oklch(0.96 0.015 75)",
          padding: "80px 1.5rem",
        }}
      >
        <div style={{ maxWidth: 860, margin: "0 auto" }}>
          <div
            data-aos="fade-up"
            style={{ textAlign: "center", marginBottom: 48 }}
          >
            <SectionBadge>Why Choose Us</SectionBadge>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.9rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                marginBottom: 12,
              }}
            >
              How We Compare
            </h2>
            <div className="section-divider" style={{ margin: "0 auto" }} />
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="100"
            style={{
              background: "oklch(0.985 0.008 75)",
              border: "1px solid oklch(0.9 0.02 75)",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 4px 24px oklch(0.2 0.04 50 / 0.06)",
            }}
          >
            {/* Table header */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr repeat(3, 130px)",
                background: "oklch(0.22 0.04 50)",
                padding: "14px 24px",
                gap: 8,
              }}
            >
              <div
                style={{
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  color: "oklch(0.7 0.02 60)",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                }}
              >
                Feature
              </div>
              {["Shree Anant", "Standard Hostel", "Basic PG"].map((col) => (
                <div
                  key={col}
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textAlign: "center",
                    color:
                      col === "Shree Anant"
                        ? "oklch(0.68 0.15 70)"
                        : "oklch(0.6 0.02 60)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}
                >
                  {col}
                </div>
              ))}
            </div>

            {/* Table rows */}
            {COMPARISON.map((row, i) => (
              <div
                key={row.feature}
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr repeat(3, 130px)",
                  padding: "13px 24px",
                  gap: 8,
                  borderTop: "1px solid oklch(0.91 0.02 75)",
                  background:
                    i % 2 === 0 ? "transparent" : "oklch(0.975 0.01 75 / 0.5)",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "0.88rem",
                    color: "oklch(0.35 0.03 50)",
                    fontWeight: 500,
                  }}
                >
                  {row.feature}
                </div>
                {[
                  { val: row.us, col: "us" },
                  { val: row.standard, col: "standard" },
                  { val: row.others, col: "others" },
                ].map(({ val, col }) => (
                  <div
                    key={col}
                    style={{ display: "flex", justifyContent: "center" }}
                  >
                    {val ? (
                      <CheckCircle2
                        size={18}
                        style={{ color: "oklch(0.52 0.14 68)" }}
                      />
                    ) : (
                      <XCircle
                        size={18}
                        style={{ color: "oklch(0.65 0.06 30)" }}
                      />
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ────────────────────────────────────── */}
      <section
        style={{
          background: "oklch(0.22 0.04 50)",
          padding: "80px 1.5rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative accent */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: "oklch(0.55 0.14 70 / 0.06)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "oklch(0.55 0.14 70 / 0.04)",
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: 600,
            margin: "0 auto",
          }}
        >
          <div data-aos="fade-up">
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.68 0.15 70)",
                display: "block",
                marginBottom: 14,
              }}
            >
              Limited Seats Available
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                fontWeight: 700,
                color: "white",
                marginBottom: 18,
                lineHeight: 1.2,
              }}
            >
              Ready to Experience Premium Hostel Living?
            </h2>
            <p
              style={{
                fontSize: "0.97rem",
                color: "oklch(0.68 0.02 60)",
                marginBottom: 36,
                lineHeight: 1.7,
              }}
            >
              Seats are limited. Don't wait until the session starts. Enquire
              today and secure your spot at Shree Anant Residency.
            </p>
            <Link to="/contact">
              <button
                type="button"
                data-ocid="facilities-book-now-cta"
                className="gold-glow transition-smooth"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.58 0.16 70), oklch(0.48 0.18 65))",
                  color: "white",
                  border: "none",
                  padding: "14px 38px",
                  borderRadius: 8,
                  fontSize: "1rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  letterSpacing: "0.03em",
                }}
              >
                Book Now <ArrowRight size={16} />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
