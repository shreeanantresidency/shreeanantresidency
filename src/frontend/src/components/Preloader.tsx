import { useEffect, useState } from "react";

export default function Preloader() {
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    // Start fade-out after 1.8s
    const t1 = setTimeout(() => setExiting(true), 1800);
    // Remove from DOM after fade-out completes (1.8s + 0.7s animation)
    const t2 = setTimeout(() => setGone(true), 2500);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "oklch(0.96 0.015 75)",
        opacity: exiting ? 0 : 1,
        pointerEvents: exiting ? "none" : "auto",
        transition: "opacity 0.7s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div style={{ animation: "float 2s ease-in-out infinite" }}>
        <img
          src="/assets/logo.jpeg"
          alt="Shree Anant Residency"
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            objectFit: "cover",
            border: "3px solid oklch(0.55 0.14 70)",
            boxShadow: "0 0 24px oklch(0.55 0.14 70 / 0.4)",
          }}
        />
      </div>
      <h1
        className="font-display"
        style={{
          marginTop: 20,
          fontSize: "1.5rem",
          fontWeight: 600,
          color: "oklch(0.3 0.05 50)",
          letterSpacing: "0.05em",
          textAlign: "center",
        }}
      >
        Shree Anant Residency
      </h1>
      <p
        style={{
          marginTop: 8,
          fontSize: "0.85rem",
          color: "oklch(0.55 0.14 70)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
        }}
      >
        Premium Girls Hostel · Kota
      </p>
      <div style={{ marginTop: 32, display: "flex", gap: 8 }}>
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "oklch(0.55 0.14 70)",
              animation: `float 1.2s ease-in-out ${i * 0.2}s infinite`,
              display: "inline-block",
            }}
          />
        ))}
      </div>
    </div>
  );
}
