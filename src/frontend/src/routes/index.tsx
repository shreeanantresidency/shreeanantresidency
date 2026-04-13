import { Button } from "@/components/ui/button";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  Bed,
  BookOpen,
  Camera,
  ChevronLeft,
  ChevronRight,
  Droplets,
  Fingerprint,
  FlameKindling,
  GraduationCap,
  MapPin,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  UtensilsCrossed,
  WashingMachine,
  Wifi,
  Wind,
  Zap,
} from "lucide-react";
import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";

export const Route = createFileRoute("/")({
  component: HomePage,
});

const HERO_SLIDES = [
  {
    image: "/assets/front-view-1.jpeg",
    heading: "Premium Girls Hostel",
    subheading: "in Kota, Rajasthan",
    tagline: "Safe • Comfortable • Study Focused Living",
  },
  {
    image: "/assets/room-1.jpeg",
    heading: "Single AC Rooms",
    subheading: "Designed for Focused Study",
    tagline: "Bed • Study Table • Storage • Comfortable Lighting",
  },
  {
    image: "/assets/mess-1.jpeg",
    heading: "Nutritious Dining",
    subheading: "Hygienic Meals Daily",
    tagline: "Fresh • Nutritious • Home-like Food Every Day",
  },
];

const FACILITIES = [
  {
    icon: Fingerprint,
    label: "Biometric Entry",
    desc: "Secure keyless access for residents only",
  },
  {
    icon: Camera,
    label: "CCTV Surveillance",
    desc: "24/7 monitoring across all floors",
  },
  {
    icon: Wind,
    label: "AC Rooms",
    desc: "Climate controlled single occupancy rooms",
  },
  {
    icon: Droplets,
    label: "RO Water",
    desc: "Purified drinking water on every floor",
  },
  {
    icon: Wifi,
    label: "Dual WiFi",
    desc: "High-speed WiFi on every floor, always on",
  },
  {
    icon: WashingMachine,
    label: "Laundry",
    desc: "Washing machine facility available",
  },
  {
    icon: FlameKindling,
    label: "Fire Safety",
    desc: "Fire extinguishers and alarm system",
  },
  {
    icon: BookOpen,
    label: "Study Environment",
    desc: "Quiet zones for focused preparation",
  },
];

const SERVICES = [
  {
    icon: UtensilsCrossed,
    label: "Nutritious Meals",
    desc: "Freshly prepared breakfast, lunch and dinner",
  },
  {
    icon: ShieldCheck,
    label: "24/7 Security",
    desc: "Round-the-clock safety for all residents",
  },
  {
    icon: Zap,
    label: "Power Backup",
    desc: "Uninterrupted power with generator backup",
  },
  {
    icon: Sparkles,
    label: "Housekeeping",
    desc: "Regular room and common area cleaning",
  },
  {
    icon: MapPin,
    label: "Medical Support",
    desc: "Hospital and clinic nearby, emergency ready",
  },
  {
    icon: GraduationCap,
    label: "Student Friendly",
    desc: "Environment crafted for academic excellence",
  },
];

const TESTIMONIALS = [
  {
    name: "Priya Sharma",
    course: "IIT-JEE Aspirant, 2025",
    rating: 5,
    text: "Shree Anant Residency gave me the perfect environment to focus on studies. The AC room, fast WiFi, and hygienic food made my preparation journey smooth and stress-free.",
  },
  {
    name: "Ananya Singh",
    course: "NEET Aspirant, 2025",
    rating: 5,
    text: "I felt safe and at home here. The biometric entry and CCTV gave my parents peace of mind. Warden Ma'am is very caring and always available for support.",
  },
  {
    name: "Riya Gupta",
    course: "IIT-JEE Aspirant, 2024",
    rating: 5,
    text: "The study environment here is unmatched. Clean rooms, proper ventilation, and a motivated peer group helped me score well. I highly recommend Shree Anant Residency!",
  },
  {
    name: "Meera Patel",
    course: "NEET Aspirant, 2024",
    rating: 5,
    text: "The location is excellent — walking distance to Allen and Resonance. Lift facility, clean bathrooms, and fresh meals every day. Best decision of my Kota journey.",
  },
];

const SLIDE_DOTS = HERO_SLIDES.map((_, i) => i);

function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback(
    (idx: number) => {
      if (animating) return;
      setAnimating(true);
      setCurrent(idx);
      setTimeout(() => setAnimating(false), 800);
    },
    [animating],
  );

  const next = useCallback(() => {
    setCurrent((c) => {
      const nextIdx = (c + 1) % HERO_SLIDES.length;
      goTo(nextIdx);
      return c;
    });
  }, [goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, [current, goTo]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % HERO_SLIDES.length);
    }, 5500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const slide = HERO_SLIDES[current];

  const handleNext = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((c) => (c + 1) % HERO_SLIDES.length);
  };

  const handlePrev = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent((c) => (c - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  };

  const handleDot = (i: number) => {
    if (timerRef.current) clearInterval(timerRef.current);
    setCurrent(i);
  };

  void next;
  void prev;
  void animating;

  return (
    <section
      data-ocid="hero-slider"
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 560,
        overflow: "hidden",
      }}
    >
      {/* Background Image with Ken Burns */}
      <div
        key={current}
        className="ken-burns"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${slide.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transition: "opacity 0.8s ease",
        }}
      />
      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, oklch(0.1 0.01 50 / 0.55) 0%, oklch(0.1 0.01 50 / 0.35) 50%, oklch(0.1 0.01 50 / 0.65) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          padding: "0 1.5rem",
        }}
      >
        <motion.div
          key={`badge-${current}`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: "inline-block",
            padding: "6px 18px",
            background: "oklch(0.55 0.14 70 / 0.25)",
            border: "1px solid oklch(0.55 0.14 70 / 0.6)",
            borderRadius: 999,
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "oklch(0.85 0.12 70)",
            marginBottom: 20,
          }}
        >
          ✦ Exclusively for Girls ✦
        </motion.div>

        <motion.h1
          key={`heading-${current}`}
          className="font-display"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontSize: "clamp(2.2rem, 5vw, 4.5rem)",
            fontWeight: 700,
            color: "white",
            lineHeight: 1.1,
            marginBottom: 8,
            textShadow: "0 2px 12px rgba(0,0,0,0.3)",
          }}
        >
          {slide.heading}
        </motion.h1>

        <motion.h2
          key={`subheading-${current}`}
          className="font-display"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontSize: "clamp(1.2rem, 2.5vw, 2rem)",
            fontWeight: 400,
            color: "oklch(0.88 0.08 70)",
            marginBottom: 16,
          }}
        >
          {slide.subheading}
        </motion.h2>

        <motion.p
          key={`tagline-${current}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: "1rem",
            color: "oklch(0.85 0.03 65)",
            marginBottom: 36,
            letterSpacing: "0.05em",
          }}
        >
          {slide.tagline}
        </motion.p>

        <motion.div
          key={`cta-${current}`}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          style={{
            display: "flex",
            gap: 14,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Link to="/contact">
            <Button
              data-ocid="hero-book-now"
              className="gold-glow"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
                color: "white",
                border: "none",
                padding: "0 32px",
                height: 48,
                fontSize: "0.95rem",
                fontWeight: 600,
                letterSpacing: "0.05em",
                borderRadius: 6,
              }}
            >
              Book Now
            </Button>
          </Link>
          <Link to="/about">
            <Button
              variant="outline"
              style={{
                background: "transparent",
                border: "1.5px solid rgba(255,255,255,0.5)",
                color: "white",
                padding: "0 28px",
                height: 48,
                fontSize: "0.9rem",
                fontWeight: 500,
                borderRadius: 6,
              }}
            >
              Explore More
            </Button>
          </Link>
        </motion.div>
      </div>

      {/* Arrows */}
      <button
        type="button"
        onClick={handlePrev}
        aria-label="Previous slide"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          left: 16,
          zIndex: 3,
          background: "oklch(0.98 0.01 75 / 0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
        }}
      >
        <ChevronLeft size={20} />
      </button>
      <button
        type="button"
        onClick={handleNext}
        aria-label="Next slide"
        style={{
          position: "absolute",
          top: "50%",
          transform: "translateY(-50%)",
          right: 16,
          zIndex: 3,
          background: "oklch(0.98 0.01 75 / 0.15)",
          border: "1px solid rgba(255,255,255,0.3)",
          borderRadius: "50%",
          width: 44,
          height: 44,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          color: "white",
        }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div
        style={{
          position: "absolute",
          bottom: 24,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          gap: 8,
          zIndex: 3,
        }}
      >
        {SLIDE_DOTS.map((i) => (
          <button
            key={`dot-${i}`}
            type="button"
            onClick={() => handleDot(i)}
            aria-label={`Go to slide ${i + 1}`}
            style={{
              width: i === current ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background:
                i === current ? "oklch(0.55 0.14 70)" : "rgba(255,255,255,0.5)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.3s ease",
              padding: 0,
            }}
          />
        ))}
      </div>
    </section>
  );
}

function MarqueeBanner() {
  const text =
    "🏠 Safe Girls Hostel in Kota  |  ❄️ Single AC Rooms  |  📹 CCTV Security  |  📶 Dual High-Speed WiFi on Every Floor  |  🎓 Study-Focused Environment  |  🔒 Biometric Entry  |  ⚡ Limited Seats Available  |  ";
  return (
    <div
      data-ocid="marquee-banner"
      style={{
        background:
          "linear-gradient(135deg, oklch(0.52 0.14 68), oklch(0.47 0.15 63))",
        padding: "13px 0",
        overflow: "hidden",
        borderTop: "1px solid oklch(0.6 0.12 72 / 0.3)",
        borderBottom: "1px solid oklch(0.42 0.13 60 / 0.4)",
      }}
    >
      <div className="marquee-track" style={{ whiteSpace: "nowrap" }}>
        <span
          style={{
            fontSize: "0.82rem",
            color: "white",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {text}
        </span>
        <span
          style={{
            fontSize: "0.82rem",
            color: "white",
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            fontWeight: 600,
          }}
        >
          {text}
        </span>
      </div>
    </div>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div style={{ textAlign: "center", marginBottom: 52 }}>
      <span
        style={{
          display: "inline-block",
          fontSize: "0.72rem",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "oklch(0.55 0.14 70)",
          marginBottom: 12,
        }}
      >
        {eyebrow}
      </span>
      <h2
        className="font-display"
        style={{
          fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
          fontWeight: 700,
          color: "oklch(0.2 0.03 50)",
          marginBottom: subtitle ? 14 : 0,
          lineHeight: 1.2,
        }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          style={{
            fontSize: "1rem",
            color: "oklch(0.5 0.02 55)",
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {subtitle}
        </p>
      )}
      <div className="section-divider" style={{ margin: "16px auto 0" }} />
    </div>
  );
}

const TESTIMONIAL_DOTS = TESTIMONIALS.map((_, i) => i);

export default function HomePage() {
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const t = setInterval(() => {
      setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length);
    }, 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <>
      <HeroSlider />
      <MarqueeBanner />

      {/* About Section */}
      <section
        id="about"
        data-ocid="about-section"
        style={{ padding: "80px 1.5rem", background: "oklch(0.97 0.012 75)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 56,
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 12,
              }}
            >
              <div
                className="img-zoom"
                style={{
                  borderRadius: 12,
                  overflow: "hidden",
                  gridRow: "span 2",
                }}
              >
                <img
                  src="/assets/entrance.jpeg"
                  alt="Hostel Entrance"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 340,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                className="img-zoom"
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <img
                  src="/assets/corridor.jpeg"
                  alt="Corridor"
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
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <img
                  src="/assets/room-2.jpeg"
                  alt="Study Room"
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

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.55 0.14 70)",
                }}
              >
                About Us
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)",
                  fontWeight: 700,
                  color: "oklch(0.2 0.03 50)",
                  margin: "12px 0 20px",
                  lineHeight: 1.2,
                }}
              >
                Your Home Away
                <br />
                From Home in Kota
              </h2>
              <div className="section-divider" style={{ marginBottom: 24 }} />
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "oklch(0.4 0.02 50)",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                Shree Anant Residency is a premium girls hostel in Kota designed
                for students preparing for IIT-JEE and NEET. Located near
                coaching institutes, hospital, and park, we provide a peaceful
                and secure environment for focused study.
              </p>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "oklch(0.4 0.02 50)",
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                All rooms are single occupancy with AC, proper ventilation, and
                a study-friendly setup. Safety is our top priority — with CCTV
                surveillance, biometric entry, and controlled access.
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 16,
                  marginBottom: 28,
                }}
              >
                {[
                  ["5:30 AM", "Gates Open"],
                  ["9:00 PM", "Safe Curfew"],
                  ["Single Rooms", "AC & Furnished"],
                  ["Near Coaching", "Allen · Resonance"],
                ].map(([val, label]) => (
                  <div
                    key={label}
                    style={{
                      padding: "12px 16px",
                      background: "oklch(0.98 0.01 75)",
                      border: "1px solid oklch(0.88 0.025 75)",
                      borderRadius: 8,
                      borderLeft: "3px solid oklch(0.55 0.14 70)",
                    }}
                  >
                    <div
                      className="font-display"
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "oklch(0.35 0.06 60)",
                      }}
                    >
                      {val}
                    </div>
                    <div
                      style={{
                        fontSize: "0.75rem",
                        color: "oklch(0.5 0.02 55)",
                        marginTop: 2,
                      }}
                    >
                      {label}
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button
                  data-ocid="about-learn-more"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
                    color: "white",
                    border: "none",
                    padding: "0 28px",
                    height: 44,
                    fontWeight: 600,
                    borderRadius: 6,
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                  }}
                >
                  Learn More <ArrowRight size={15} />
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section
        id="facilities"
        data-ocid="facilities-section"
        style={{ padding: "80px 1.5rem", background: "oklch(0.96 0.015 75)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="What We Offer"
            title="World-Class Facilities"
            subtitle="Every amenity designed to make your stay comfortable, safe, and study-optimized."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {FACILITIES.map((f, i) => (
              <motion.div
                key={f.label}
                data-ocid={`facility-${f.label.toLowerCase().replace(/\s+/g, "-")}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  background:
                    f.label === "Dual WiFi"
                      ? "oklch(0.97 0.025 72)"
                      : "oklch(0.985 0.008 75)",
                  border:
                    f.label === "Dual WiFi"
                      ? "2px solid oklch(0.55 0.14 70)"
                      : "1px solid oklch(0.9 0.02 75)",
                  borderRadius: 12,
                  padding: "24px 20px",
                  textAlign: "center",
                  cursor: "default",
                  position: "relative",
                }}
              >
                {f.label === "Dual WiFi" && (
                  <div
                    style={{
                      position: "absolute",
                      top: -10,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background:
                        "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
                      color: "white",
                      fontSize: "0.6rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    ★ Highlight
                  </div>
                )}
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "50%",
                    background:
                      f.label === "Dual WiFi"
                        ? "oklch(0.55 0.14 70 / 0.18)"
                        : "oklch(0.55 0.14 70 / 0.1)",
                    border: "1.5px solid oklch(0.55 0.14 70 / 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <f.icon size={24} style={{ color: "oklch(0.5 0.14 65)" }} />
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "oklch(0.25 0.04 50)",
                    marginBottom: 6,
                  }}
                >
                  {f.label}
                </h3>
                <p
                  style={{
                    fontSize: "0.82rem",
                    color: "oklch(0.5 0.02 55)",
                    lineHeight: 1.5,
                  }}
                >
                  {f.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Showcase */}
      <section
        id="rooms"
        data-ocid="room-showcase"
        style={{ padding: "80px 1.5rem", background: "oklch(0.97 0.012 75)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 56,
              alignItems: "center",
            }}
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 700,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "oklch(0.55 0.14 70)",
                }}
              >
                Our Rooms
              </span>
              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)",
                  fontWeight: 700,
                  color: "oklch(0.2 0.03 50)",
                  margin: "12px 0 20px",
                  lineHeight: 1.2,
                }}
              >
                Single AC Room
                <br />
                with Study Setup
              </h2>
              <div className="section-divider" style={{ marginBottom: 24 }} />
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "oklch(0.4 0.02 50)",
                  lineHeight: 1.8,
                  marginBottom: 24,
                }}
              >
                Each room is designed exclusively for one student, ensuring
                complete privacy and undisturbed focus. Furnished with
                everything a serious student needs.
              </p>
              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                {[
                  {
                    icon: Bed,
                    text: "Single Bed with quality mattress and linen",
                  },
                  {
                    icon: BookOpen,
                    text: "Study table with proper task lighting",
                  },
                  {
                    icon: Sparkles,
                    text: "Ample storage — wardrobe and shelves",
                  },
                  { icon: Wind, text: "Split AC for year-round comfort" },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    style={{ display: "flex", gap: 12, alignItems: "center" }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: 8,
                        background: "oklch(0.55 0.14 70 / 0.1)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} style={{ color: "oklch(0.5 0.14 65)" }} />
                    </div>
                    <span
                      style={{
                        fontSize: "0.9rem",
                        color: "oklch(0.4 0.02 50)",
                      }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              style={{ display: "flex", flexDirection: "column", gap: 12 }}
            >
              <div
                className="img-zoom"
                style={{ borderRadius: 16, overflow: "hidden" }}
              >
                <img
                  src="/assets/room-1.jpeg"
                  alt="Single AC Room"
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 300,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 12,
                }}
              >
                <div
                  className="img-zoom"
                  style={{ borderRadius: 10, overflow: "hidden" }}
                >
                  <img
                    src="/assets/room-2.jpeg"
                    alt="Room View 2"
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
                    alt="Attached Bathroom"
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: 160,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        data-ocid="services-section"
        style={{ padding: "80px 1.5rem", background: "oklch(0.22 0.04 50)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <span
              style={{
                display: "inline-block",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.65 0.14 70)",
                marginBottom: 12,
              }}
            >
              Daily Support
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "oklch(0.9 0.02 70)",
                marginBottom: 14,
                lineHeight: 1.2,
              }}
            >
              Services We Provide
            </h2>
            <p
              style={{
                fontSize: "1rem",
                color: "oklch(0.6 0.02 55)",
                maxWidth: 560,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Everything you need for a comfortable and focused student life —
              all included.
            </p>
            <div
              className="section-divider"
              style={{ margin: "16px auto 0" }}
            />
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 20,
            }}
          >
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.15 } }}
                style={{
                  background: "oklch(0.28 0.04 50)",
                  border: "1px solid oklch(0.35 0.04 50)",
                  borderRadius: 12,
                  padding: "24px 22px",
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: "oklch(0.55 0.14 70 / 0.15)",
                    border: "1px solid oklch(0.55 0.14 70 / 0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <s.icon size={22} style={{ color: "oklch(0.65 0.14 70)" }} />
                </div>
                <div>
                  <h3
                    className="font-display"
                    style={{
                      fontSize: "0.98rem",
                      fontWeight: 700,
                      color: "oklch(0.9 0.02 70)",
                      marginBottom: 6,
                    }}
                  >
                    {s.label}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.83rem",
                      color: "oklch(0.6 0.015 60)",
                      lineHeight: 1.6,
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section
        data-ocid="location-section"
        style={{ padding: "80px 1.5rem", background: "oklch(0.97 0.012 75)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Prime Location"
            title="Perfectly Located in Kota"
            subtitle="Walk to your coaching, return safely to your hostel. Everything you need is nearby."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
              marginBottom: 40,
            }}
          >
            {[
              {
                emoji: "🏫",
                title: "Coaching Institutes",
                desc: "Minutes walk from Allen, Resonance, and other top institutes",
              },
              {
                emoji: "🏥",
                title: "Hospital Nearby",
                desc: "Medical help available quickly in case of emergency",
              },
              {
                emoji: "🌿",
                title: "Park for Morning Walk",
                desc: "Green space nearby for morning exercise and fresh air",
              },
              {
                emoji: "🔒",
                title: "Safe Locality",
                desc: "Secure and peaceful neighbourhood ideal for girls",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{
                  background: "oklch(0.985 0.008 75)",
                  border: "1px solid oklch(0.9 0.02 75)",
                  borderRadius: 12,
                  padding: "24px 20px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.2rem", marginBottom: 12 }}>
                  {item.emoji}
                </div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "0.98rem",
                    fontWeight: 700,
                    color: "oklch(0.25 0.04 50)",
                    marginBottom: 8,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "0.83rem",
                    color: "oklch(0.5 0.02 55)",
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div
            style={{
              background: "oklch(0.985 0.008 75)",
              border: "1px solid oklch(0.9 0.02 75)",
              borderRadius: 12,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                padding: "20px 24px",
                borderBottom: "1px solid oklch(0.9 0.02 75)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <MapPin size={16} style={{ color: "oklch(0.55 0.14 70)" }} />
              <span
                className="font-display"
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  color: "oklch(0.3 0.04 50)",
                }}
              >
                434, Electronic Complex, Rajeev Gandhi Nagar, Kota, Rajasthan
                324005
              </span>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.123!2d75.8648!3d25.1479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396f5b1c123!2sElectronic+Complex%2C+Rajeev+Gandhi+Nagar%2C+Kota!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="320"
              style={{ border: 0, display: "block" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Shree Anant Residency Location"
            />
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section
        data-ocid="gallery-section"
        style={{ padding: "80px 1.5rem", background: "oklch(0.96 0.015 75)" }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <SectionHeader eyebrow="Photo Gallery" title="A Glimpse Inside" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
              gap: 10,
            }}
          >
            {[
              { src: "/assets/front-view-2.jpeg", alt: "Front View" },
              { src: "/assets/kitchen-1.jpeg", alt: "Kitchen" },
              { src: "/assets/mess-2.jpeg", alt: "Dining Area" },
              { src: "/assets/safety-1.jpeg", alt: "Safety Equipment" },
              { src: "/assets/lift.jpeg", alt: "Lift Facility" },
              { src: "/assets/corridor.jpeg", alt: "Corridor" },
              { src: "/assets/bathroom-2.jpeg", alt: "Bathroom" },
              { src: "/assets/kitchen-2.jpeg", alt: "Kitchen Facility" },
            ].map((item, i) => (
              <motion.div
                key={item.alt}
                className="img-zoom"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{
                  borderRadius: 10,
                  overflow: "hidden",
                  aspectRatio: "4/3",
                }}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        data-ocid="testimonials-section"
        style={{ padding: "80px 1.5rem", background: "oklch(0.97 0.012 75)" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Student Reviews"
            title="What Our Residents Say"
            subtitle="Real stories from girls who made Shree Anant Residency their home in Kota."
          />
          <div style={{ position: "relative" }}>
            <motion.div
              key={`testimonial-${testimonialIdx}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                background: "oklch(0.985 0.008 75)",
                border: "1px solid oklch(0.9 0.02 75)",
                borderRadius: 16,
                padding: "40px 44px",
                textAlign: "center",
                position: "relative",
              }}
            >
              <Quote
                size={36}
                style={{
                  color: "oklch(0.55 0.14 70 / 0.2)",
                  position: "absolute",
                  top: 24,
                  left: 28,
                }}
              />
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 4,
                  marginBottom: 20,
                }}
              >
                {[1, 2, 3, 4, 5]
                  .slice(0, TESTIMONIALS[testimonialIdx].rating)
                  .map((n) => (
                    <Star
                      key={`star-${n}`}
                      size={16}
                      style={{
                        color: "oklch(0.55 0.14 70)",
                        fill: "oklch(0.55 0.14 70)",
                      }}
                    />
                  ))}
              </div>
              <p
                className="font-display"
                style={{
                  fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
                  fontStyle: "italic",
                  color: "oklch(0.35 0.03 50)",
                  lineHeight: 1.8,
                  marginBottom: 28,
                }}
              >
                "{TESTIMONIALS[testimonialIdx].text}"
              </p>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.45 0.12 60))",
                  margin: "0 auto 10px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "white",
                  fontSize: "1rem",
                  fontWeight: 700,
                }}
              >
                {TESTIMONIALS[testimonialIdx].name[0]}
              </div>
              <div
                className="font-display"
                style={{
                  fontWeight: 700,
                  color: "oklch(0.25 0.04 50)",
                  fontSize: "0.95rem",
                }}
              >
                {TESTIMONIALS[testimonialIdx].name}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "oklch(0.55 0.14 70)",
                  marginTop: 4,
                }}
              >
                {TESTIMONIALS[testimonialIdx].course}
              </div>
            </motion.div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: 8,
                marginTop: 24,
              }}
            >
              {TESTIMONIAL_DOTS.map((i) => (
                <button
                  key={`tdot-${i}`}
                  type="button"
                  onClick={() => setTestimonialIdx(i)}
                  aria-label={`Testimonial ${i + 1}`}
                  style={{
                    width: i === testimonialIdx ? 24 : 8,
                    height: 8,
                    borderRadius: 4,
                    background:
                      i === testimonialIdx
                        ? "oklch(0.55 0.14 70)"
                        : "oklch(0.8 0.03 70)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 12,
              marginTop: 20,
            }}
          >
            <button
              type="button"
              onClick={() =>
                setTestimonialIdx(
                  (i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length,
                )
              }
              aria-label="Previous testimonial"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1.5px solid oklch(0.88 0.025 75)",
                background: "oklch(0.985 0.008 75)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronLeft size={18} style={{ color: "oklch(0.4 0.04 55)" }} />
            </button>
            <button
              type="button"
              onClick={() =>
                setTestimonialIdx((i) => (i + 1) % TESTIMONIALS.length)
              }
              aria-label="Next testimonial"
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                border: "1.5px solid oklch(0.88 0.025 75)",
                background: "oklch(0.985 0.008 75)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ChevronRight size={18} style={{ color: "oklch(0.4 0.04 55)" }} />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section
        id="enquire"
        data-ocid="contact-form-section"
        style={{ padding: "80px 1.5rem", background: "oklch(0.96 0.015 75)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <SectionHeader
            eyebrow="Enquire Now"
            title="Get in Touch"
            subtitle="Limited seats available. Enquire today to secure your spot."
          />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 40,
              alignItems: "start",
            }}
          >
            <ContactForm />
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ display: "flex", flexDirection: "column", gap: 20 }}
            >
              <div
                style={{
                  background: "oklch(0.985 0.008 75)",
                  border: "1px solid oklch(0.9 0.02 75)",
                  borderRadius: 16,
                  padding: "32px 28px",
                }}
              >
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.1rem",
                    fontWeight: 700,
                    color: "oklch(0.25 0.04 50)",
                    marginBottom: 20,
                  }}
                >
                  Contact Information
                </h3>
                <div
                  style={{ display: "flex", flexDirection: "column", gap: 16 }}
                >
                  {[
                    {
                      emoji: "🏠",
                      label: "Hostel Reception",
                      value: "06367139029",
                      href: "tel:06367139029",
                    },
                    {
                      emoji: "👤",
                      label: "Owner (Murli Manohar)",
                      value: "7665432929",
                      href: "tel:7665432929",
                    },
                    {
                      emoji: "📍",
                      label: "Address",
                      value:
                        "434, Electronic Complex, Rajeev Gandhi Nagar, Kota, Rajasthan 324005",
                      href: undefined,
                    },
                    {
                      emoji: "🕐",
                      label: "Hostel Timings",
                      value: "Opens 5:30 AM • Gate closes 9 PM",
                      href: undefined,
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                      }}
                    >
                      <span style={{ fontSize: "1.3rem", flexShrink: 0 }}>
                        {item.emoji}
                      </span>
                      <div>
                        <div
                          style={{
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "oklch(0.55 0.14 70)",
                            marginBottom: 2,
                          }}
                        >
                          {item.label}
                        </div>
                        {item.href ? (
                          <a
                            href={item.href}
                            style={{
                              fontSize: "0.95rem",
                              color: "oklch(0.3 0.04 50)",
                              textDecoration: "none",
                              fontWeight: 600,
                            }}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p
                            style={{
                              fontSize: "0.88rem",
                              color: "oklch(0.4 0.02 50)",
                              lineHeight: 1.5,
                              margin: 0,
                            }}
                          >
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.52 0.14 68), oklch(0.47 0.15 63))",
                  borderRadius: 16,
                  padding: "28px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2rem",
                    marginBottom: 10,
                  }}
                >
                  📞
                </div>
                <p
                  className="font-display"
                  style={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: "1rem",
                    marginBottom: 6,
                  }}
                >
                  Call Us Directly
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.85)",
                    fontSize: "0.82rem",
                    marginBottom: 16,
                  }}
                >
                  Speak with us for immediate assistance
                </p>
                <a
                  href="tel:06367139029"
                  data-ocid="contact-call-btn"
                  style={{
                    display: "inline-block",
                    background: "rgba(255,255,255,0.15)",
                    border: "1.5px solid rgba(255,255,255,0.5)",
                    color: "white",
                    padding: "10px 24px",
                    borderRadius: 8,
                    fontWeight: 700,
                    fontSize: "0.95rem",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                >
                  06367139029
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", contact: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: "", contact: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      data-ocid="enquiry-form"
      style={{
        background: "oklch(0.985 0.008 75)",
        border: "1px solid oklch(0.9 0.02 75)",
        borderRadius: 16,
        padding: "40px 36px",
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      {submitted && (
        <div
          style={{
            padding: "12px 18px",
            background: "oklch(0.55 0.14 70 / 0.1)",
            border: "1px solid oklch(0.55 0.14 70 / 0.4)",
            borderRadius: 8,
            color: "oklch(0.4 0.1 65)",
            fontSize: "0.9rem",
            textAlign: "center",
            fontWeight: 500,
          }}
        >
          ✓ Thank you! We will contact you soon.
        </div>
      )}
      <div>
        <label
          htmlFor="enq-name"
          style={{
            display: "block",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "oklch(0.35 0.04 50)",
            marginBottom: 6,
            letterSpacing: "0.05em",
          }}
        >
          Student Name *
        </label>
        <input
          id="enq-name"
          data-ocid="form-name"
          type="text"
          required
          placeholder="Your full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1.5px solid oklch(0.88 0.025 75)",
            borderRadius: 8,
            fontSize: "0.9rem",
            background: "oklch(0.97 0.012 75)",
            color: "oklch(0.25 0.04 50)",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div>
        <label
          htmlFor="enq-contact"
          style={{
            display: "block",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "oklch(0.35 0.04 50)",
            marginBottom: 6,
            letterSpacing: "0.05em",
          }}
        >
          Parent Contact Number *
        </label>
        <input
          id="enq-contact"
          data-ocid="form-contact"
          type="tel"
          required
          placeholder="Parent's phone number"
          value={form.contact}
          onChange={(e) => setForm({ ...form, contact: e.target.value })}
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1.5px solid oklch(0.88 0.025 75)",
            borderRadius: 8,
            fontSize: "0.9rem",
            background: "oklch(0.97 0.012 75)",
            color: "oklch(0.25 0.04 50)",
            outline: "none",
            boxSizing: "border-box",
          }}
        />
      </div>
      <div>
        <label
          htmlFor="enq-message"
          style={{
            display: "block",
            fontSize: "0.82rem",
            fontWeight: 600,
            color: "oklch(0.35 0.04 50)",
            marginBottom: 6,
            letterSpacing: "0.05em",
          }}
        >
          Message
        </label>
        <textarea
          id="enq-message"
          data-ocid="form-message"
          placeholder="Any questions or requirements..."
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          rows={4}
          style={{
            width: "100%",
            padding: "10px 14px",
            border: "1.5px solid oklch(0.88 0.025 75)",
            borderRadius: 8,
            fontSize: "0.9rem",
            background: "oklch(0.97 0.012 75)",
            color: "oklch(0.25 0.04 50)",
            outline: "none",
            resize: "vertical",
            boxSizing: "border-box",
            fontFamily: "inherit",
          }}
        />
      </div>
      <button
        type="submit"
        data-ocid="form-submit"
        className="gold-glow"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
          color: "white",
          border: "none",
          padding: "12px 32px",
          borderRadius: 8,
          fontSize: "0.95rem",
          fontWeight: 700,
          letterSpacing: "0.05em",
          cursor: "pointer",
          alignSelf: "flex-start",
        }}
      >
        Enquire Now →
      </button>
    </form>
  );
}
