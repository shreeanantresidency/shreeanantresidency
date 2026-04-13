import { createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import { useEffect, useRef, useState } from "react";
import "aos/dist/aos.css";
import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { motion } from "motion/react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const GOLD = "oklch(0.55 0.14 70)";
const GOLD_LIGHT = "oklch(0.65 0.14 70)";
const FOREGROUND_DARK = "oklch(0.2 0.03 50)";
const FOREGROUND_MID = "oklch(0.4 0.02 50)";
const FOREGROUND_MUTED = "oklch(0.5 0.02 55)";

interface FormState {
  name: string;
  phone: string;
  course: string;
  message: string;
}

const INFO_CARDS = [
  {
    id: "address",
    icon: MapPin,
    title: "Our Address",
    lines: [
      "434, Electronic Complex",
      "Rajeev Gandhi Nagar, Special",
      "Kota, Rajasthan 324005",
    ],
    isPhone: false,
  },
  {
    id: "phone",
    icon: Phone,
    title: "Phone Numbers",
    lines: ["Hostel: 06367139029", "Owner (Murli Manohar): 7665432929"],
    isPhone: true,
  },
  {
    id: "hours",
    icon: Clock,
    title: "Timings",
    lines: ["Opens: 5:30 AM", "Gate Closes: 9 PM", "For Girls Safety Only"],
    isPhone: false,
  },
];

const PHONE_MAP: Record<string, string> = {
  "Hostel: 06367139029": "tel:06367139029",
  "Owner (Murli Manohar): 7665432929": "tel:7665432929",
};

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    course: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    AOS.init({ duration: 700, once: true, offset: 60 });
  }, []);

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", phone: "", course: "", message: "" });
  }

  const inputBase: React.CSSProperties = {
    width: "100%",
    padding: "11px 14px",
    borderRadius: 8,
    background: "oklch(0.985 0.008 75)",
    color: FOREGROUND_DARK,
    fontSize: "0.93rem",
    outline: "none",
    transition: "border-color 0.25s cubic-bezier(0.4,0,0.2,1)",
    fontFamily: "var(--font-body)",
    boxSizing: "border-box" as const,
  };

  const inputStyle = (field: string): React.CSSProperties => ({
    ...inputBase,
    border: `1.5px solid ${focused === field ? GOLD : "oklch(0.88 0.025 75)"}`,
  });

  return (
    <div>
      {/* ── Hero Banner ── */}
      <section
        style={{
          position: "relative",
          minHeight: 320,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/assets/front-view-2.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, oklch(0.1 0.02 50 / 0.75), oklch(0.15 0.03 45 / 0.87))",
          }}
        />
        <div
          style={{
            position: "relative",
            zIndex: 2,
            textAlign: "center",
            padding: "70px 1.5rem",
          }}
        >
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase" as const,
              color: GOLD_LIGHT,
              display: "block",
              marginBottom: 12,
            }}
          >
            Get In Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
              fontWeight: 700,
              color: "white",
              margin: "0 0 14px",
              lineHeight: 1.1,
            }}
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontSize: "1.08rem",
              color: "oklch(0.85 0.02 65)",
              maxWidth: 480,
              margin: "0 auto",
            }}
          >
            We'd Love to Hear From You
          </motion.p>
        </div>
      </section>

      {/* ── Info Cards Row ── */}
      <section
        style={{
          padding: "0 1.5rem",
          background: "oklch(0.97 0.012 75)",
          marginTop: -44,
          position: "relative",
          zIndex: 3,
          paddingBottom: 0,
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 20,
          }}
        >
          {INFO_CARDS.map((card, i) => (
            <div
              key={card.id}
              data-aos="fade-up"
              data-aos-delay={String(i * 80)}
              style={{
                background: "oklch(0.99 0.008 75)",
                border: "1px solid oklch(0.9 0.02 75)",
                borderTop: `3px solid ${GOLD}`,
                borderRadius: 14,
                padding: "28px 24px",
                boxShadow: "0 4px 20px oklch(0.55 0.14 70 / 0.06)",
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: "oklch(0.55 0.14 70 / 0.1)",
                  border: "1.5px solid oklch(0.55 0.14 70 / 0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                <card.icon size={22} style={{ color: GOLD }} />
              </div>
              <h3
                className="font-display"
                style={{
                  fontSize: "0.98rem",
                  fontWeight: 700,
                  color: FOREGROUND_DARK,
                  marginBottom: 10,
                }}
              >
                {card.title}
              </h3>
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {card.lines.map((line) =>
                  card.isPhone ? (
                    <a
                      key={line}
                      href={PHONE_MAP[line]}
                      data-ocid="contact-phone-link"
                      style={{
                        fontSize: "0.88rem",
                        color: "oklch(0.42 0.09 60)",
                        fontWeight: 500,
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          GOLD;
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "oklch(0.42 0.09 60)";
                      }}
                    >
                      {line}
                    </a>
                  ) : (
                    <span
                      key={line}
                      style={{
                        fontSize: "0.88rem",
                        color: FOREGROUND_MUTED,
                        lineHeight: 1.6,
                      }}
                    >
                      {line}
                    </span>
                  ),
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Form + Map ── */}
      <section
        style={{
          padding: "70px 1.5rem 80px",
          background: "oklch(0.97 0.012 75)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 52,
            alignItems: "start",
          }}
        >
          {/* Left: Form */}
          <div data-aos="fade-right">
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: GOLD,
              }}
            >
              Enquire Now
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: FOREGROUND_DARK,
                margin: "10px 0 8px",
              }}
            >
              Send Us a Message
            </h2>
            <div className="section-divider" style={{ marginBottom: 28 }} />

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                data-ocid="contact-success-msg"
                style={{
                  background: "oklch(0.55 0.14 70 / 0.07)",
                  border: "1.5px solid oklch(0.55 0.14 70 / 0.3)",
                  borderRadius: 14,
                  padding: "36px 28px",
                  textAlign: "center",
                }}
              >
                <div style={{ fontSize: "2.6rem", marginBottom: 14 }}>✨</div>
                <h3
                  className="font-display"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: FOREGROUND_DARK,
                    marginBottom: 10,
                  }}
                >
                  Thank You!
                </h3>
                <p
                  style={{
                    fontSize: "0.93rem",
                    color: FOREGROUND_MID,
                    lineHeight: 1.7,
                    marginBottom: 20,
                  }}
                >
                  We'll reach out within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  style={{
                    fontSize: "0.85rem",
                    color: GOLD,
                    fontWeight: 600,
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: 0,
                  }}
                >
                  Submit another enquiry →
                </button>
              </motion.div>
            ) : (
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                data-ocid="contact-form"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                }}
              >
                <div>
                  <label
                    htmlFor="contact-name"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "oklch(0.35 0.03 50)",
                      marginBottom: 6,
                    }}
                  >
                    Student Name <span style={{ color: GOLD }}>*</span>
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("name")}
                    data-ocid="contact-name-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-phone"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "oklch(0.35 0.03 50)",
                      marginBottom: 6,
                    }}
                  >
                    Parent Contact Number <span style={{ color: GOLD }}>*</span>
                  </label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocused("phone")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("phone")}
                    data-ocid="contact-phone-input"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contact-course"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "oklch(0.35 0.03 50)",
                      marginBottom: 6,
                    }}
                  >
                    Student Class / Course
                  </label>
                  <select
                    id="contact-course"
                    name="course"
                    value={form.course}
                    onChange={handleChange}
                    onFocus={() => setFocused("course")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle("course"),
                      appearance: "auto" as const,
                    }}
                    data-ocid="contact-course-select"
                  >
                    <option value="">Select course (optional)</option>
                    <option value="jee">JEE Aspirant</option>
                    <option value="neet">NEET Aspirant</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label
                    htmlFor="contact-message"
                    style={{
                      display: "block",
                      fontSize: "0.82rem",
                      fontWeight: 600,
                      color: "oklch(0.35 0.03 50)",
                      marginBottom: 6,
                    }}
                  >
                    Message / Query <span style={{ color: GOLD }}>*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={4}
                    placeholder="Tell us about your requirements or any questions..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{
                      ...inputStyle("message"),
                      resize: "vertical",
                      minHeight: 110,
                      fontFamily: "var(--font-body)",
                    }}
                    data-ocid="contact-message-textarea"
                  />
                </div>
                <button
                  type="submit"
                  className="gold-glow"
                  data-ocid="contact-submit-btn"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
                    color: "white",
                    border: "none",
                    borderRadius: 8,
                    padding: "13px 32px",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    cursor: "pointer",
                    letterSpacing: "0.03em",
                    transition: "all 0.25s cubic-bezier(0.4,0,0.2,1)",
                    fontFamily: "var(--font-body)",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.transform =
                      "translateY(0)";
                  }}
                >
                  Enquire Now →
                </button>
              </form>
            )}
          </div>

          {/* Right: Map */}
          <div data-aos="fade-left">
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: GOLD,
              }}
            >
              Find Us
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                fontWeight: 700,
                color: FOREGROUND_DARK,
                margin: "10px 0 8px",
              }}
            >
              Our Location
            </h2>
            <div className="section-divider" style={{ marginBottom: 28 }} />
            <div
              style={{
                borderRadius: 14,
                overflow: "hidden",
                border: "1.5px solid oklch(0.88 0.025 75)",
                boxShadow: "0 4px 24px oklch(0.55 0.14 70 / 0.08)",
              }}
            >
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=75.8500%2C25.1400%2C75.8700%2C25.1550&layer=mapnik&marker=25.1481%2C75.8594"
                style={{ border: 0, display: "block" }}
                width="100%"
                height="380"
                loading="lazy"
                title="Shree Anant Residency Location"
              />
            </div>
            <div
              style={{
                marginTop: 16,
                padding: "13px 16px",
                background: "oklch(0.99 0.008 75)",
                border: "1px solid oklch(0.9 0.02 75)",
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: 8,
                display: "flex",
                alignItems: "flex-start",
                gap: 10,
              }}
            >
              <MapPin
                size={18}
                style={{ color: GOLD, flexShrink: 0, marginTop: 2 }}
              />
              <p
                style={{
                  fontSize: "0.87rem",
                  color: FOREGROUND_MID,
                  margin: 0,
                  lineHeight: 1.7,
                }}
              >
                434, Electronic Complex, Rajeev Gandhi Nagar, Special, Kota,
                Rajasthan 324005
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Quick Connect ── */}
      <section
        style={{ padding: "70px 1.5rem", background: "oklch(0.96 0.015 75)" }}
      >
        <div style={{ maxWidth: 900, margin: "0 auto", textAlign: "center" }}>
          <div data-aos="fade-up">
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: GOLD,
              }}
            >
              Instant Reach
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.7rem, 3vw, 2.4rem)",
                fontWeight: 700,
                color: FOREGROUND_DARK,
                margin: "12px 0 10px",
              }}
            >
              Quick Connect
            </h2>
            <div
              className="section-divider"
              style={{ margin: "0 auto 40px" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 20,
            }}
          >
            {/* Call Hostel */}
            <motion.a
              href="tel:06367139029"
              data-ocid="contact-call-hostel"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "32px 20px",
                background:
                  "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
                borderRadius: 18,
                textDecoration: "none",
                color: "white",
                boxShadow: "0 6px 24px oklch(0.55 0.14 70 / 0.32)",
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "oklch(1 0 0 / 0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Phone size={24} />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: 5,
                  }}
                >
                  Call Hostel
                </div>
                <div style={{ fontSize: "0.85rem", opacity: 0.88 }}>
                  06367139029
                </div>
              </div>
            </motion.a>

            {/* Call Owner */}
            <motion.a
              href="tel:7665432929"
              data-ocid="contact-call-owner"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "32px 20px",
                background: "oklch(0.99 0.008 75)",
                border: "1.5px solid oklch(0.55 0.14 70 / 0.3)",
                borderRadius: 18,
                textDecoration: "none",
                color: FOREGROUND_DARK,
                boxShadow: "0 4px 20px oklch(0.55 0.14 70 / 0.08)",
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "oklch(0.55 0.14 70 / 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Phone size={24} style={{ color: GOLD }} />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: 5,
                  }}
                >
                  Call Owner
                </div>
                <div style={{ fontSize: "0.83rem", color: FOREGROUND_MUTED }}>
                  Murli Manohar — 7665432929
                </div>
              </div>
            </motion.a>

            {/* WhatsApp */}
            <motion.a
              href="https://wa.me/917665432929"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="contact-whatsapp"
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 12,
                padding: "32px 20px",
                background: "oklch(0.99 0.008 75)",
                border: "1.5px solid oklch(0.74 0.15 145 / 0.28)",
                borderRadius: 18,
                textDecoration: "none",
                color: FOREGROUND_DARK,
                boxShadow: "0 4px 20px oklch(0.74 0.15 145 / 0.07)",
              }}
            >
              <div
                style={{
                  width: 54,
                  height: 54,
                  borderRadius: "50%",
                  background: "oklch(0.74 0.15 145 / 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MessageCircle
                  size={24}
                  style={{ color: "oklch(0.6 0.17 145)" }}
                />
              </div>
              <div>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "1.05rem",
                    marginBottom: 5,
                  }}
                >
                  WhatsApp Us
                </div>
                <div style={{ fontSize: "0.83rem", color: FOREGROUND_MUTED }}>
                  Chat Directly with Us
                </div>
              </div>
            </motion.a>
          </div>
        </div>
      </section>

      {/* ── Why Visit Us ── */}
      <section
        style={{
          padding: "70px 1.5rem 90px",
          background: "oklch(0.97 0.012 75)",
        }}
      >
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 52,
            alignItems: "center",
          }}
        >
          {/* Text */}
          <div data-aos="fade-right">
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase" as const,
                color: GOLD,
              }}
            >
              Personal Tours
            </span>
            <h2
              className="font-display"
              style={{
                fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                fontWeight: 700,
                color: FOREGROUND_DARK,
                margin: "12px 0 8px",
                lineHeight: 1.2,
              }}
            >
              Why Visit Us in Person?
            </h2>
            <div className="section-divider" style={{ marginBottom: 22 }} />
            <p
              style={{
                fontSize: "0.95rem",
                color: FOREGROUND_MID,
                lineHeight: 1.8,
                marginBottom: 22,
              }}
            >
              Come see the rooms yourself. We welcome parents and students for a
              personal tour. No appointment needed during office hours (9 AM – 6
              PM).
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                "Walk through our single AC rooms firsthand",
                "Meet Murli Manohar, the founder, personally",
                "See our biometric & CCTV security infrastructure",
                "Experience the nutritious mess food quality",
              ].map((point) => (
                <div
                  key={point}
                  style={{ display: "flex", alignItems: "flex-start", gap: 10 }}
                >
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: GOLD,
                      flexShrink: 0,
                      display: "block",
                      marginTop: 6,
                    }}
                  />
                  <span style={{ fontSize: "0.9rem", color: FOREGROUND_MUTED }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <div
              style={{
                marginTop: 26,
                padding: "12px 18px",
                background: "oklch(0.55 0.14 70 / 0.06)",
                border: "1px solid oklch(0.55 0.14 70 / 0.2)",
                borderRadius: 8,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              <Clock size={15} style={{ color: GOLD }} />
              <span
                style={{
                  fontSize: "0.85rem",
                  color: "oklch(0.4 0.06 60)",
                  fontWeight: 500,
                }}
              >
                Tour hours: Mon–Sat, 9 AM – 6 PM
              </span>
            </div>
          </div>

          {/* Image */}
          <motion.div
            data-aos="fade-left"
            className="img-zoom"
            style={{
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 12px 40px oklch(0.2 0.03 50 / 0.14)",
            }}
          >
            <img
              src="/assets/entrance.jpeg"
              alt="Hostel Entrance — Shree Anant Residency"
              loading="lazy"
              style={{
                width: "100%",
                height: 400,
                objectFit: "cover",
                display: "block",
              }}
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
}
