import { Link, createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import { BookOpen, Heart, Shield, Sparkles, Utensils, Zap } from "lucide-react";
import { motion } from "motion/react";
import { useEffect } from "react";
import "aos/dist/aos.css";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Utensils,
    title: "Nutritious Meals",
    image: "/assets/mess-2.jpeg",
    desc: "Three wholesome home-style meals daily, freshly prepared in a hygienic kitchen by experienced cooks.",
    points: [
      "3 meals a day: breakfast, lunch & dinner",
      "Home-style nutritious food",
      "Fresh vegetables & quality ingredients",
      "Hygienic kitchen and cooking environment",
      "Special dietary preferences accommodated",
    ],
  },
  {
    icon: Shield,
    title: "Round-the-Clock Security",
    image: null,
    desc: "Your safety is our highest priority. Every entry point is monitored and controlled at all times.",
    points: [
      "Female security guard on duty at all times",
      "Biometric entry — only registered residents enter",
      "CCTV coverage of all areas and corridors",
      "Visitor policy with prior approval required",
      "Gate closes at 9:00 PM for residents' safety",
    ],
  },
  {
    icon: Zap,
    title: "Uninterrupted Power Backup",
    image: null,
    desc: "Study without worrying about power cuts. Generator backup kicks in automatically for zero interruptions.",
    points: [
      "Generator/inverter backup covers the entire building",
      "No study interruptions due to power cuts",
      "All rooms and common areas remain powered",
      "Backup activates within seconds automatically",
    ],
  },
  {
    icon: Sparkles,
    title: "Daily Housekeeping",
    image: null,
    desc: "A clean living space is essential for mental clarity. Our housekeeping team ensures everything stays spotless.",
    points: [
      "Daily cleaning of rooms (on request) and common areas",
      "Bathroom and toilet cleaned every day",
      "Regular pest control maintained",
      "Fresh linen service available on schedule",
    ],
  },
  {
    icon: Heart,
    title: "Medical Support Nearby",
    image: null,
    desc: "Health emergencies are rare, but when they happen, fast response is critical. We're prepared.",
    points: [
      "Hospital within walking distance from hostel",
      "First aid kit available at reception",
      "Staff trained for emergency response",
      "Parents informed immediately in any health situation",
    ],
  },
  {
    icon: BookOpen,
    title: "Student-Friendly Environment",
    image: null,
    desc: "Every aspect of the hostel is designed to support focused, distraction-free exam preparation.",
    points: [
      "Quiet hours strictly maintained during study time",
      "Common study room available for group sessions",
      "Dual high-speed WiFi routers on every floor",
      "No loud disturbances — focused atmosphere",
      "Supportive community for competitive exam prep",
    ],
  },
];

const SCHEDULE = [
  {
    time: "5:30 AM",
    label: "Hostel Opens",
    note: "Early risers start their day fresh",
  },
  {
    time: "6:00 AM",
    label: "Morning Activities",
    note: "Walk, yoga, light exercise",
  },
  {
    time: "7:30 AM",
    label: "Breakfast Served",
    note: "Nutritious start to the day",
  },
  { time: "12:30 PM", label: "Lunch Served", note: "Home-style hot lunch" },
  { time: "7:00 PM", label: "Dinner Served", note: "Wholesome evening meal" },
  {
    time: "9:00 PM",
    label: "Gate Closes",
    note: "For residents' safety only — no unnecessary rules",
  },
  {
    time: "10:00 PM",
    label: "Lights Out Recommended",
    note: "Rest for a focused tomorrow",
  },
];

export default function ServicesPage() {
  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div>
      {/* Hero Banner */}
      <section
        style={{
          position: "relative",
          minHeight: 380,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          background: "oklch(0.18 0.04 50)",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/mess-1.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.3,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, oklch(0.15 0.03 50 / 0.5) 0%, oklch(0.12 0.03 50 / 0.8) 100%)",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "72px 1.5rem",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "oklch(0.65 0.14 70)",
              display: "block",
              marginBottom: 12,
            }}
          >
            What We Provide
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "white",
              margin: "0 0 16px",
              lineHeight: 1.05,
            }}
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.22 }}
            style={{
              fontSize: "1.1rem",
              color: "oklch(0.8 0.02 65)",
              maxWidth: 520,
              margin: "0 auto",
              lineHeight: 1.6,
            }}
          >
            Complete Care for Your Daily Life
          </motion.p>
        </div>
      </section>

      {/* Services Overview — 6 Cards */}
      <section
        style={{ padding: "88px 1.5rem", background: "oklch(0.97 0.012 75)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            data-aos="fade-up"
            style={{ textAlign: "center", marginBottom: 56 }}
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
              Everything Included
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                margin: "12px 0 18px",
              }}
            >
              Six Essential Services
            </h2>
            <div
              className="section-divider"
              style={{ margin: "0 auto 16px" }}
            />
            <p
              style={{
                fontSize: "0.95rem",
                color: "oklch(0.5 0.02 55)",
                maxWidth: 500,
                margin: "0 auto",
              }}
            >
              Every service is designed with one goal — making your Kota journey
              safe, healthy, and academically successful.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
              gap: 28,
            }}
          >
            {SERVICES.map((svc, i) => (
              <div
                key={svc.title}
                data-aos="fade-up"
                data-aos-delay={String(i * 70)}
                style={{
                  background: "oklch(0.988 0.008 75)",
                  border: "1px solid oklch(0.9 0.02 75)",
                  borderRadius: 18,
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(-5px)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    "0 16px 40px oklch(0.4 0.08 60 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLDivElement).style.boxShadow = "none";
                }}
              >
                {svc.image ? (
                  <div className="img-zoom" style={{ height: 210 }}>
                    <img
                      src={svc.image}
                      alt={svc.title}
                      loading="lazy"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                      }}
                    />
                  </div>
                ) : (
                  <div
                    style={{
                      height: 6,
                      background:
                        "linear-gradient(90deg, oklch(0.55 0.14 70), oklch(0.65 0.18 70))",
                    }}
                  />
                )}
                <div style={{ padding: "26px 26px 30px" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 13,
                      marginBottom: 10,
                    }}
                  >
                    <div
                      style={{
                        width: 46,
                        height: 46,
                        borderRadius: 12,
                        background: "oklch(0.55 0.14 70 / 0.1)",
                        border: "1.5px solid oklch(0.55 0.14 70 / 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svc.icon
                        size={20}
                        style={{ color: "oklch(0.5 0.14 65)" }}
                      />
                    </div>
                    <h3
                      className="font-display"
                      style={{
                        fontSize: "1.07rem",
                        fontWeight: 700,
                        color: "oklch(0.22 0.04 50)",
                        margin: 0,
                      }}
                    >
                      {svc.title}
                    </h3>
                  </div>
                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "oklch(0.48 0.02 54)",
                      lineHeight: 1.7,
                      marginBottom: 16,
                    }}
                  >
                    {svc.desc}
                  </p>
                  <ul style={{ margin: 0, paddingLeft: 0, listStyle: "none" }}>
                    {svc.points.map((pt) => (
                      <li
                        key={pt}
                        style={{
                          display: "flex",
                          gap: 10,
                          alignItems: "flex-start",
                          marginBottom: 7,
                          fontSize: "0.85rem",
                          color: "oklch(0.44 0.02 52)",
                          lineHeight: 1.55,
                        }}
                      >
                        <span
                          style={{
                            color: "oklch(0.55 0.14 70)",
                            flexShrink: 0,
                            marginTop: 1,
                            fontWeight: 700,
                          }}
                        >
                          ✦
                        </span>
                        {pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dining Photo Strip */}
      <section
        style={{ padding: "0 1.5rem 72px", background: "oklch(0.97 0.012 75)" }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            data-aos="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 14,
            }}
          >
            {[
              { src: "/assets/mess-1.jpeg", alt: "Dining Hall" },
              { src: "/assets/mess-3.jpeg", alt: "Meal Time" },
              { src: "/assets/kitchen-1.jpeg", alt: "Our Kitchen" },
            ].map((img) => (
              <div
                key={img.alt}
                className="img-zoom"
                style={{ borderRadius: 12, overflow: "hidden" }}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  style={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Schedule */}
      <section
        style={{
          padding: "80px 1.5rem 88px",
          background: "oklch(0.96 0.015 75)",
        }}
      >
        <div style={{ maxWidth: 680, margin: "0 auto" }}>
          <div
            data-aos="fade-up"
            style={{ textAlign: "center", marginBottom: 56 }}
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
              A Well-Structured Day
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.8rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: "oklch(0.2 0.03 50)",
                margin: "12px 0 16px",
              }}
            >
              Daily Schedule
            </h2>
            <div
              className="section-divider"
              style={{ margin: "0 auto 16px" }}
            />
            <p
              style={{
                fontSize: "0.93rem",
                color: "oklch(0.5 0.02 55)",
                maxWidth: 460,
                margin: "0 auto",
                lineHeight: 1.7,
              }}
            >
              Structure breeds discipline. Our daily routine is designed to
              complement your study schedule and keep you energised throughout
              the day.
            </p>
          </div>

          <div style={{ position: "relative" }}>
            {/* Vertical timeline line */}
            <div
              style={{
                position: "absolute",
                left: 90,
                top: 24,
                bottom: 24,
                width: 2,
                background:
                  "linear-gradient(180deg, oklch(0.55 0.14 70), oklch(0.65 0.18 70 / 0.25))",
                borderRadius: 2,
              }}
            />
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {SCHEDULE.map((item, i) => (
                <div
                  key={item.time}
                  data-aos="fade-right"
                  data-aos-delay={String(i * 60)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    padding: "13px 0",
                  }}
                >
                  {/* Time label */}
                  <div
                    style={{
                      width: 90,
                      flexShrink: 0,
                      textAlign: "right",
                      paddingRight: 22,
                      paddingTop: 3,
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "oklch(0.5 0.14 68)",
                        whiteSpace: "nowrap",
                        fontVariantNumeric: "tabular-nums",
                      }}
                    >
                      {item.time}
                    </span>
                  </div>
                  {/* Dot */}
                  <div
                    style={{
                      width: 15,
                      height: 15,
                      borderRadius: "50%",
                      background:
                        "linear-gradient(135deg, oklch(0.58 0.15 70), oklch(0.48 0.16 63))",
                      border: "2.5px solid oklch(0.96 0.015 75)",
                      boxShadow: "0 0 0 2px oklch(0.55 0.14 70 / 0.2)",
                      flexShrink: 0,
                      marginTop: 2,
                    }}
                  />
                  {/* Content */}
                  <div style={{ paddingLeft: 20 }}>
                    <div
                      style={{
                        fontSize: "0.96rem",
                        fontWeight: 700,
                        color: "oklch(0.25 0.04 50)",
                        marginBottom: 3,
                      }}
                    >
                      {item.label}
                    </div>
                    <div
                      style={{
                        fontSize: "0.82rem",
                        color: "oklch(0.55 0.02 55)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.note}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "72px 1.5rem",
          background: "oklch(0.22 0.04 50)",
          textAlign: "center",
        }}
      >
        <div data-aos="zoom-in">
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
              fontWeight: 700,
              color: "white",
              marginBottom: 14,
            }}
          >
            Experience Our Services
          </h2>
          <p
            style={{
              color: "oklch(0.65 0.02 60)",
              maxWidth: 480,
              margin: "0 auto 30px",
              fontSize: "0.95rem",
              lineHeight: 1.7,
            }}
          >
            Give your daughter the best possible start in Kota — comfort,
            safety, and an environment built entirely for success.
          </p>
          <Link to="/contact">
            <button
              type="button"
              data-ocid="services-enquire-cta"
              className="gold-glow"
              style={{
                background:
                  "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
                color: "white",
                border: "none",
                padding: "14px 40px",
                borderRadius: 8,
                fontSize: "1rem",
                fontWeight: 700,
                cursor: "pointer",
                letterSpacing: "0.03em",
              }}
            >
              Enquire Now
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
