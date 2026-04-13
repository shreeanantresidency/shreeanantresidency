import { Link, createFileRoute } from "@tanstack/react-router";
import AOS from "aos";
import { ArrowRight, Calendar, User } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

export const Route = createFileRoute("/blog")({
  component: BlogPage,
});

const FEATURED_ARTICLE = {
  slug: "why-kota-is-best-for-iit-neet",
  title: "Why Kota is the Best City for IIT-JEE and NEET Preparation",
  excerpt:
    "Kota has earned its reputation as the coaching capital of India. Discover what makes this city unique for serious aspirants and why thousands of families choose it every year.",
  category: "Study Tips",
  date: "March 2024",
  author: "Shree Anant Residency Team",
  image: "/assets/front-view-1.jpeg",
  content: [
    {
      heading: "Kota: India's Coaching Capital",
      body: "Kota, a city in Rajasthan, has undergone a remarkable transformation over the past three decades. From an industrial town, it has emerged as India's most powerful academic ecosystem for engineering and medical entrance preparation. Every year, over 2 lakh students from across the country converge here, drawn by one goal: cracking IIT-JEE and NEET with a competitive advantage.",
    },
    {
      heading: "World-Class Coaching Institutes",
      body: "The biggest draw is the sheer concentration of teaching excellence. Kota is home to Allen Career Institute, Resonance, Aakash Institute, Vibrant Academy, and Motion Education — institutions whose alumni populate the IITs, AIIMS, and top medical colleges year after year. The faculty here includes some of the finest subject matter experts in physics, chemistry, mathematics, and biology. The structured curriculum, weekly tests, and result-driven approach have produced hundreds of thousands of selections over the decades.",
    },
    {
      heading: "The Peer Effect — Unmatched Anywhere",
      body: "What makes Kota truly unique is the peer environment. When you are surrounded by hundreds of equally motivated students preparing for the same exams, it elevates your performance in ways a home environment simply cannot replicate. Healthy competition, group study sessions, and peer discussions of difficult problems create a learning culture that is self-reinforcing. Toppers consistently cite this 'Kota atmosphere' as a decisive factor in their success.",
    },
    {
      heading: "An Ecosystem Built for Students",
      body: "The city infrastructure revolves entirely around student needs. From stationery shops and libraries to medical stores, eateries open at odd hours, and transport that runs on coaching schedules — Kota removes friction from student life. Students can focus entirely on their preparation without logistical distractions.",
    },
    {
      heading: "Success Rates and National Recognition",
      body: "Year after year, Kota-based coaching institutes contribute a disproportionately large share of IIT-JEE and NEET top ranks. The AIR-1 and top-100 lists have historically been dominated by Kota students. This track record is not accidental — it is the result of a systematic, well-tested preparation methodology refined over decades.",
    },
    {
      heading: "Why Your Accommodation Matters",
      body: "Choosing Kota is only half the equation. Where you live during these crucial years is equally important. A safe, clean, study-focused accommodation like Shree Anant Residency provides the stable foundation that serious preparation demands. Your hostel is your home — it should provide the nutrition, safety, quiet, and comfort that fuels daily academic excellence.",
    },
  ],
};

const ARTICLE_GRID = [
  {
    slug: "hostel-life-tips-kota",
    title: "Top 10 Hostel Life Tips for Students in Kota",
    excerpt:
      "Moving away from home can be overwhelming. Here are proven tips to help you settle in, stay healthy, and perform your best.",
    category: "Student Life",
    date: "February 2024",
    author: "Shree Anant Residency Team",
    image: "/assets/room-1.jpeg",
    content: [
      {
        heading: "1. Establish a Daily Routine Immediately",
        body: "Your first week in Kota sets the tone for the rest of your preparation. Create a fixed schedule for sleep, meals, study, and exercise — and stick to it. Routine reduces decision fatigue and channels all your mental energy into studying.",
      },
      {
        heading: "2. Manage Your Time Like a Professional",
        body: "Use time-blocking: assign specific subjects to specific slots. Do your hardest problems in the morning when cognitive performance peaks. Reserve evenings for revision and formula practice.",
      },
      {
        heading: "3. Stay Nourished — Never Skip Meals",
        body: "Your brain consumes 20% of your body's energy. Skipping meals is directly counterproductive to performance. At Shree Anant Residency, nutritious meals are served three times daily — make sure to eat them.",
      },
      {
        heading: "4. Prioritise Sleep Without Guilt",
        body: "8 hours of sleep is non-negotiable. Sleep-deprived brains cannot consolidate memory or sustain focus. Many students sacrifice sleep thinking more hours equals more learning. Science disagrees — quality of study matters far more than quantity of sleepless hours.",
      },
      {
        heading: "5. Build a Study Group Carefully",
        body: "Find 2-3 serious, focused study partners. Discussing difficult concepts aloud is one of the fastest ways to solidify understanding. Avoid large groups where socialising overtakes studying.",
      },
      {
        heading: "6. Manage Homesickness Proactively",
        body: "Call your family regularly. Share your wins and challenges with them. Homesickness is normal and temporary — the best cure is keeping yourself busy with meaningful work.",
      },
      {
        heading: "7. Use Online Resources Strategically",
        body: "The dual high-speed WiFi at Shree Anant Residency gives you access to video lectures, Khan Academy, NCERT solutions, and mock test platforms. Use them purposefully — not as procrastination tools.",
      },
      {
        heading: "8. Participate in Group Study Sessions",
        body: "Our common study room is designed for collaborative learning. Use it for group discussions, solving previous year papers together, or quizzing each other on formulas and concepts.",
      },
      {
        heading: "9. Maintain Work-Life Balance",
        body: "Take one short break each day — a walk, some music, or a brief conversation with friends. Complete exhaustion leads to burnout, which is far more damaging than a few rest breaks.",
      },
      {
        heading: "10. Trust the Process",
        body: "Results take time. There will be days when tests go badly and motivation is low. Trust your preparation, maintain consistency, and remember why you came to Kota in the first place.",
      },
    ],
  },
  {
    slug: "study-environment-importance",
    title: "Why a Good Study Environment is Critical for Exam Success",
    excerpt:
      "Science shows your surroundings directly impact cognitive performance. Learn how the right environment can meaningfully improve your IIT-JEE and NEET results.",
    category: "Academic Tips",
    date: "January 2024",
    author: "Shree Anant Residency Team",
    image: "/assets/mess-3.jpeg",
    content: [
      {
        heading: "The Science of Environment and Learning",
        body: "Research in cognitive psychology consistently demonstrates that your environment has a profound impact on learning efficiency, memory retention, and problem-solving speed. For competitive exam aspirants, this is not an abstract theory — it is a measurable factor in your final rank.",
      },
      {
        heading: "Noise Levels and Concentration",
        body: "Studies show that ambient noise above 60 decibels significantly impairs complex cognitive tasks like solving differential equations or memorising organic chemistry mechanisms. At Shree Anant Residency, strict quiet hours are enforced so your study time is genuinely productive.",
      },
      {
        heading: "Lighting and Eye Health",
        body: "Poor or harsh lighting causes eye strain, which leads to fatigue and forces you to cut your study sessions short. Our rooms are designed with proper task lighting — bright enough for reading but gentle enough to prevent strain during 8-hour study marathons.",
      },
      {
        heading: "Temperature and Peak Cognitive Performance",
        body: "Research from the Lighting Research Center indicates that the optimal temperature for cognitive work is 22–25°C. Our individual AC units in every room allow you to maintain exactly this environment regardless of Kota's extreme summer heat.",
      },
      {
        heading: "Clutter and Mental Load",
        body: "A cluttered desk creates cognitive load — your brain is partially occupied managing visual noise around you. Every room at Shree Anant Residency includes a dedicated study table and adequate storage so your workspace stays clean and mentally clear.",
      },
      {
        heading: "Nutrition and Cognitive Performance",
        body: "A 2018 study published in PLOS ONE found direct correlations between diet quality and academic performance in adolescents. Our three daily meals are designed with student nutrition in mind — protein-rich breakfasts, balanced lunches, and light dinners that support evening study.",
      },
      {
        heading: "Social Environment as a Performance Multiplier",
        body: "Being surrounded by similarly motivated peers creates a positive feedback loop. When everyone around you prioritises their preparation, it is naturally easier to stay on track. This is the intangible advantage that makes hostel culture at Shree Anant Residency a genuine competitive asset.",
      },
    ],
  },
];

export default function BlogPage() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 700,
      once: true,
      offset: 60,
      easing: "ease-out-cubic",
    });
  }, []);

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  }

  return (
    <div>
      {/* Hero Banner — warm gradient, no image */}
      <section
        style={{
          background:
            "linear-gradient(135deg, oklch(0.92 0.025 75) 0%, oklch(0.88 0.04 70) 50%, oklch(0.85 0.05 65) 100%)",
          padding: "80px 1.5rem 72px",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -60,
            right: -60,
            width: 280,
            height: 280,
            borderRadius: "50%",
            background: "oklch(0.55 0.14 70 / 0.07)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -40,
            left: -40,
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "oklch(0.55 0.14 70 / 0.05)",
          }}
        />
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "oklch(0.5 0.14 65)",
            display: "block",
            marginBottom: 12,
            position: "relative",
            zIndex: 1,
          }}
        >
          Knowledge Hub
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display"
          style={{
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
            fontWeight: 700,
            color: "oklch(0.2 0.04 50)",
            margin: "0 0 16px",
            lineHeight: 1.05,
            position: "relative",
            zIndex: 1,
          }}
        >
          Student Life Blog
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          style={{
            fontSize: "1.05rem",
            color: "oklch(0.4 0.04 60)",
            maxWidth: 520,
            margin: "0 auto",
            lineHeight: 1.65,
            position: "relative",
            zIndex: 1,
          }}
        >
          Tips, Insights, and Guides for Students in Kota
        </motion.p>
      </section>

      {/* Featured Article */}
      <section
        style={{
          padding: "80px 1.5rem 56px",
          background: "oklch(0.97 0.012 75)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div data-aos="fade-up" style={{ marginBottom: 40 }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "oklch(0.55 0.14 70)",
              }}
            >
              Featured Article
            </span>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="80"
            style={{
              background: "oklch(0.988 0.008 75)",
              border: "1px solid oklch(0.9 0.02 75)",
              borderRadius: 20,
              overflow: "hidden",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
              boxShadow: "0 4px 24px oklch(0.4 0.06 60 / 0.07)",
            }}
          >
            {/* Image */}
            <div
              className="img-zoom"
              style={{ minHeight: 300, overflow: "hidden" }}
            >
              <img
                src={FEATURED_ARTICLE.image}
                alt={FEATURED_ARTICLE.title}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  minHeight: 300,
                }}
              />
            </div>

            {/* Content */}
            <div
              style={{
                padding: "40px 36px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  alignItems: "center",
                  flexWrap: "wrap",
                  marginBottom: 14,
                }}
              >
                <span
                  style={{
                    padding: "4px 12px",
                    background: "oklch(0.55 0.14 70 / 0.1)",
                    border: "1px solid oklch(0.55 0.14 70 / 0.3)",
                    borderRadius: 999,
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    color: "oklch(0.45 0.12 65)",
                    letterSpacing: "0.05em",
                    textTransform: "uppercase",
                  }}
                >
                  {FEATURED_ARTICLE.category}
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "oklch(0.6 0.01 55)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <Calendar size={12} />
                  {FEATURED_ARTICLE.date}
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    color: "oklch(0.6 0.01 55)",
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                  }}
                >
                  <User size={12} />
                  {FEATURED_ARTICLE.author}
                </span>
              </div>

              <h2
                className="font-display"
                style={{
                  fontSize: "clamp(1.25rem, 2.2vw, 1.7rem)",
                  fontWeight: 700,
                  color: "oklch(0.2 0.04 50)",
                  marginBottom: 14,
                  lineHeight: 1.3,
                }}
              >
                {FEATURED_ARTICLE.title}
              </h2>

              <p
                style={{
                  fontSize: "0.9rem",
                  color: "oklch(0.48 0.02 55)",
                  lineHeight: 1.75,
                  marginBottom: 22,
                }}
              >
                {FEATURED_ARTICLE.excerpt}
              </p>

              {/* Article Preview */}
              <div
                style={{
                  borderLeft: "3px solid oklch(0.55 0.14 70)",
                  paddingLeft: 16,
                  marginBottom: 22,
                }}
              >
                <p
                  style={{
                    fontSize: "0.85rem",
                    color: "oklch(0.45 0.02 55)",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  "{FEATURED_ARTICLE.content[0].body.substring(0, 200)}..."
                </p>
              </div>

              <Link
                to="/contact"
                data-ocid="blog-featured-read-more"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 7,
                  padding: "10px 24px",
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
                  color: "white",
                  borderRadius: 7,
                  fontSize: "0.88rem",
                  fontWeight: 700,
                  textDecoration: "none",
                  alignSelf: "flex-start",
                  transition: "opacity 0.2s",
                }}
              >
                Read Full Article <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Article Grid — 2 more articles */}
      <section
        style={{
          padding: "0 1.5rem 88px",
          background: "oklch(0.97 0.012 75)",
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div
            data-aos="fade-up"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: 28,
            }}
          >
            {ARTICLE_GRID.map((article, i) => (
              <article
                key={article.slug}
                data-aos="fade-up"
                data-aos-delay={String(i * 100)}
                data-ocid={`blog-article-${article.slug}`}
                style={{
                  background: "oklch(0.988 0.008 75)",
                  border: "1px solid oklch(0.9 0.02 75)",
                  borderRadius: 18,
                  overflow: "hidden",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(-5px)";
                  (e.currentTarget as HTMLElement).style.boxShadow =
                    "0 14px 36px oklch(0.4 0.06 60 / 0.1)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.transform =
                    "translateY(0)";
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                }}
              >
                <div className="img-zoom" style={{ overflow: "hidden" }}>
                  <img
                    src={article.image}
                    alt={article.title}
                    loading="lazy"
                    style={{
                      width: "100%",
                      height: 220,
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ padding: "26px 26px 30px" }}>
                  <div
                    style={{
                      display: "flex",
                      gap: 8,
                      alignItems: "center",
                      flexWrap: "wrap",
                      marginBottom: 12,
                    }}
                  >
                    <span
                      style={{
                        padding: "3px 10px",
                        background: "oklch(0.55 0.14 70 / 0.08)",
                        border: "1px solid oklch(0.55 0.14 70 / 0.25)",
                        borderRadius: 999,
                        fontSize: "0.68rem",
                        fontWeight: 700,
                        color: "oklch(0.45 0.12 65)",
                        textTransform: "uppercase",
                        letterSpacing: "0.05em",
                      }}
                    >
                      {article.category}
                    </span>
                    <span
                      style={{
                        fontSize: "0.74rem",
                        color: "oklch(0.6 0.01 55)",
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <Calendar size={11} />
                      {article.date}
                    </span>
                  </div>

                  <h3
                    className="font-display"
                    style={{
                      fontSize: "1.08rem",
                      fontWeight: 700,
                      color: "oklch(0.22 0.04 50)",
                      marginBottom: 10,
                      lineHeight: 1.35,
                    }}
                  >
                    {article.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.86rem",
                      color: "oklch(0.48 0.02 55)",
                      lineHeight: 1.75,
                      marginBottom: 18,
                    }}
                  >
                    {article.excerpt}
                  </p>

                  {/* First section preview */}
                  <div
                    style={{
                      background: "oklch(0.95 0.015 75)",
                      borderRadius: 10,
                      padding: "14px 16px",
                      marginBottom: 18,
                    }}
                  >
                    <div
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 700,
                        color: "oklch(0.45 0.1 65)",
                        marginBottom: 6,
                      }}
                    >
                      {article.content[0].heading}
                    </div>
                    <p
                      style={{
                        fontSize: "0.8rem",
                        color: "oklch(0.5 0.02 55)",
                        lineHeight: 1.65,
                        margin: 0,
                      }}
                    >
                      {article.content[0].body.substring(0, 160)}...
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.76rem",
                        color: "oklch(0.6 0.01 55)",
                        display: "flex",
                        alignItems: "center",
                        gap: 3,
                      }}
                    >
                      <User size={11} />
                      {article.author}
                    </span>
                    <Link
                      to="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 5,
                        fontSize: "0.84rem",
                        fontWeight: 700,
                        color: "oklch(0.45 0.12 65)",
                        textDecoration: "none",
                      }}
                    >
                      Read More <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section
        style={{
          padding: "72px 1.5rem",
          background:
            "linear-gradient(135deg, oklch(0.22 0.04 50), oklch(0.28 0.05 55))",
          textAlign: "center",
        }}
      >
        <div data-aos="fade-up" style={{ maxWidth: 540, margin: "0 auto" }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "oklch(0.55 0.14 70 / 0.15)",
              border: "1.5px solid oklch(0.55 0.14 70 / 0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 20px",
              fontSize: "1.5rem",
            }}
          >
            ✉
          </div>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
              fontWeight: 700,
              color: "white",
              marginBottom: 10,
            }}
          >
            Stay Updated with Student Tips
          </h2>
          <p
            style={{
              color: "oklch(0.7 0.02 60)",
              marginBottom: 28,
              fontSize: "0.93rem",
              lineHeight: 1.7,
            }}
          >
            Get study tips, hostel life advice, and Kota preparation guides
            delivered to your inbox.
          </p>
          {subscribed ? (
            <div
              style={{
                padding: "16px 24px",
                background: "oklch(0.55 0.14 70 / 0.15)",
                border: "1px solid oklch(0.55 0.14 70 / 0.4)",
                borderRadius: 10,
                color: "oklch(0.75 0.08 70)",
                fontSize: "0.93rem",
                fontWeight: 600,
              }}
            >
              ✓ Thank you! We'll keep you updated with the latest tips.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              data-ocid="blog-newsletter-form"
              style={{
                display: "flex",
                gap: 10,
                maxWidth: 440,
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                data-ocid="blog-newsletter-email"
                required
                style={{
                  flex: 1,
                  minWidth: 200,
                  padding: "12px 18px",
                  borderRadius: 8,
                  border: "1.5px solid oklch(0.55 0.14 70 / 0.4)",
                  background: "oklch(1 0 0 / 0.07)",
                  color: "white",
                  fontSize: "0.9rem",
                  outline: "none",
                  transition: "border-color 0.2s",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "oklch(0.65 0.14 70)";
                  e.currentTarget.style.background = "oklch(1 0 0 / 0.1)";
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor =
                    "oklch(0.55 0.14 70 / 0.4)";
                  e.currentTarget.style.background = "oklch(1 0 0 / 0.07)";
                }}
              />
              <button
                type="submit"
                data-ocid="blog-newsletter-subscribe"
                className="gold-glow"
                style={{
                  padding: "12px 26px",
                  background:
                    "linear-gradient(135deg, oklch(0.55 0.14 70), oklch(0.48 0.16 65))",
                  color: "white",
                  border: "none",
                  borderRadius: 8,
                  fontSize: "0.92rem",
                  fontWeight: 700,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
