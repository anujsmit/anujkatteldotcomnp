import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useInView,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

import {
  FaGlobe,
  FaMobileAlt,
  FaSearch,
} from "react-icons/fa";

// ─── DATA ────────────────────────────────────────────────────────────────────
const techStack = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", invert: true },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" },
];

const services = [
  {
    num: "01",
    title: "Website Development",
    desc: "Modern, responsive, and high-performance websites built for businesses and brands.",
    tags: ["React", "Node.js", "Responsive"],
    icon: <FaGlobe />,
  },
  {
    num: "02",
    title: "App Development",
    desc: "Cross-platform mobile applications for Android and iOS with smooth UI and fast performance.",
    tags: ["React Native", "Firebase", "Android"],
    icon: <FaMobileAlt />,
  },
  {
    num: "03",
    title: "SEO Optimization",
    desc: "Improve search rankings, website performance, and online visibility for more traffic.",
    tags: ["SEO", "Performance", "Analytics"],
    icon: <FaSearch />,
  },
];

const projects = [
  { index: "001", title: "E‑Commerce Architecture", year: "2025", desc: "Lightning-fast store with custom checkout, real-time inventory, admin dashboard handling 10K+ daily transactions.", tech: ["React", "Node.js", "MySQL"], accent: "#c084fc" },
  { index: "002", title: "Fitness Tracking App", year: "2025", desc: "Cross-platform mobile app with biometric syncing, AI workout recs, social leaderboards.", tech: ["React Native", "Firebase"], accent: "#22d3ee" },
  { index: "003", title: "SaaS Analytics Dashboard", year: "2024", desc: "Enterprise data viz with WebSocket feeds, RBAC, exportable PDF reports.", tech: ["TypeScript", "FastAPI", "PostgreSQL"], accent: "#34d399" },
];

const socialLinks = [
  { platform: "GitHub", user: "anujsmit", url: "https://github.com/anujsmit", color: "#e4e4e7", icon: "GH" },
  { platform: "LinkedIn", user: "anujkattel", url: "https://linkedin.com/in/anujkattel", color: "#60a5fa", icon: "LI" },
  { platform: "Instagram", user: "@anujkattel", url: "https://instagram.com/anujkattel", color: "#f472b6", icon: "IG" },
  { platform: "Twitter", user: "@anujkattel5", url: "https://twitter.com/anujkattel", color: "#a3e635", icon: "X" },
];

// ─── VELOCITY SCROLLER ──────────────────────────────────────────────────────
function wrap(min, max, v) {
  const range = max - min;
  return ((((v - min) % range) + range) % range) + min;
}

function VelocityTicker({ children, baseVelocity = -2 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], { clamp: false });
  const x = useTransform(baseX, (v) => `${wrap(-50, 0, v)}%`);
  const directionFactor = useRef(1);

  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);
    if (velocityFactor.get() < 0) directionFactor.current = -1;
    else if (velocityFactor.get() > 0) directionFactor.current = 1;
    moveBy += directionFactor.current * moveBy * velocityFactor.get() * 0.3;
    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div style={{ overflow: "hidden", whiteSpace: "nowrap" }}>
      <motion.div style={{ x, display: "flex", gap: "1.5rem" }}>
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
}

// ─── COUNTER ─────────────────────────────────────────────────────────────────
function CountUp({ target, suffix = "", duration = 1600 }) {
  const ref = useRef(null);
  const [val, setVal] = useState(0);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setVal(Math.floor(easeOutQuart * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return <span ref={ref}>{val}{suffix}</span>;
}

// ─── SMOOTH CURSOR ──────────────────────────────────────────────────────────
function SmoothCursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const raf = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);
    };
    window.addEventListener("mousemove", onMove);
    const animate = () => {
      ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
      ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${pos.current.x - 4}px, ${pos.current.y - 4}px, 0)`;
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${ringPos.current.x - 22}px, ${ringPos.current.y - 22}px, 0)`;
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, [visible]);

  if (!visible) return null;
  return (
    <>
      <div ref={dotRef} style={{ position: "fixed", top: 0, left: 0, width: 8, height: 8, borderRadius: "50%", background: "#c084fc", pointerEvents: "none", zIndex: 9999, willChange: "transform", boxShadow: "0 0 8px #c084fc" }} />
      <div ref={ringRef} style={{ position: "fixed", top: 0, left: 0, width: 44, height: 44, borderRadius: "50%", border: "1px solid rgba(192,132,252,0.4)", pointerEvents: "none", zIndex: 9998, willChange: "transform" }} />
    </>
  );
}

// ─── MAGNETIC BUTTON ────────────────────────────────────────────────────────
function MagBtn({ children, onClick, variant = "primary", style = {} }) {
  const ref = useRef(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const springX = useSpring(offset.x, { stiffness: 200, damping: 20 });
  const springY = useSpring(offset.y, { stiffness: 200, damping: 20 });

  const onMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    setOffset({
      x: (e.clientX - rect.left - rect.width / 2) * 0.25,
      y: (e.clientY - rect.top - rect.height / 2) * 0.25,
    });
  };

  const baseStyle = {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    padding: "12px 28px",
    borderRadius: "9999px",
    fontWeight: 700,
    fontSize: "0.875rem",
    letterSpacing: "0.04em",
    cursor: "pointer",
    border: "none",
    fontFamily: "'DM Sans', sans-serif",
    transition: "all 0.2s",
    ...style,
  };

  const variantStyle = variant === "primary"
    ? { background: "#c084fc", color: "#09090b" }
    : { background: "transparent", color: "#71717a", border: "1px solid rgba(255,255,255,0.1)" };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY, ...baseStyle, ...variantStyle }}
      onMouseMove={onMove}
      onMouseLeave={() => setOffset({ x: 0, y: 0 })}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

// ─── SPLIT HEADING ──────────────────────────────────────────────────────────
function SplitHeading({ text, highlight = [], style = {}, delayBase = 0 }) {
  const words = text.split(" ");
  return (
    <h2 style={{ lineHeight: 1.1, fontFamily: "'Syne', sans-serif", ...style }}>
      {words.map((word, idx) => (
        <span key={idx} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.3em" }}>
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: delayBase + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-block",
              fontFamily: "'Syne', sans-serif",
              color: highlight.includes(word.replace(/[.,]/g, "")) ? "#c084fc" : "#fafafa",
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h2>
  );
}

// ─── SECTION PILL ───────────────────────────────────────────────────────────
const Pill = ({ label }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.25rem" }}
  >
    <span style={{ width: 20, height: 1, background: "#c084fc" }} />
    <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.2em", fontFamily: "'DM Sans', sans-serif" }}>{label}</span>
  </motion.div>
);

// ─── TECH CHIP ──────────────────────────────────────────────────────────────
function TechChip({ t }) {
  return (
    <motion.div
      whileHover={{ y: -5, borderColor: "rgba(192,132,252,0.5)" }}
      style={{
        background: "rgba(255,255,255,0.025)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "1rem",
        padding: "0.75rem 1.5rem",
        display: "inline-flex",
        alignItems: "center",
        gap: "0.625rem",
        minWidth: "150px",
        flexShrink: 0,
        transition: "border-color 0.2s",
      }}
    >
      <img src={t.icon} alt={t.name} style={{ width: 24, height: 24, objectFit: "contain", filter: t.invert ? "invert(1)" : "none" }} />
      <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#71717a", textTransform: "uppercase", letterSpacing: "0.06em", whiteSpace: "nowrap", fontFamily: "'DM Sans', sans-serif" }}>{t.name}</span>
    </motion.div>
  );
}

// ─── BACKGROUND ──────────────────────────────────────────────────────────────
const Background = () => (
  <>
    <div style={{ position: "fixed", inset: 0, zIndex: 0, backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "64px 64px", pointerEvents: "none" }} />
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", opacity: 0.02, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='256'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='256' height='256' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", background: "radial-gradient(circle at 50% 50%, rgba(192,132,252,0.03) 0%, transparent 70%)" }} />
  </>
);

// ─── MAIN COMPONENT ─────────────────────────────────────────────────────────
export default function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  const heroY = useTransform(scrollY, [0, 500], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: "#06060a", color: "#fafafa", fontFamily: "'DM Sans', sans-serif", overflowX: "hidden", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700;800&family=Syne:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { font-family: 'DM Sans', sans-serif; }
        @media (min-width: 769px) { body, a, button { cursor: none !important; } }
        ::-webkit-scrollbar { width: 3px; }
        ::-webkit-scrollbar-thumb { background: #c084fc; }
        ::selection { background: rgba(192,132,252,0.25); }
        @media (max-width: 768px) {
          .hero-title { font-size: clamp(2.8rem, 12vw, 5rem) !important; }
          .nav-desktop { display: none !important; }
          .hamburger { display: flex !important; }
          .contact-grid-mobile { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
          .service-row-mobile { flex-direction: column !important; gap: 1rem !important; }
          .hero-buttons-mobile { flex-direction: column !important; align-items: stretch !important; }
        }
        @media (min-width: 769px) {
          .hamburger { display: none !important; }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.05); }
        }
      `}</style>

      <SmoothCursor />
      <Background />

      {/* Progress Bar */}
      <motion.div style={{ scaleX, position: "fixed", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #c084fc, #ec4899, #f97316)", transformOrigin: "0%", zIndex: 1000 }} />

      {/* Header */}
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
          padding: "1rem 6%", display: "flex", justifyContent: "space-between", alignItems: "center",
          background: scrolled ? "rgba(6,6,10,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          transition: "all 0.4s",
        }}
      >
        <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
          AK<span style={{ color: "#c084fc" }}>.</span>
        </div>

        <nav className="nav-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
          {["Work", "Services", "Stack", "Contact"].map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ background: "none", border: "none", color: "#52525b", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.07em", textTransform: "uppercase", cursor: "pointer", transition: "color 0.2s", fontFamily: "'DM Sans', sans-serif" }} onMouseEnter={e => e.currentTarget.style.color = "#fafafa"} onMouseLeave={e => e.currentTarget.style.color = "#52525b"}>
              {l}
            </button>
          ))}
          <MagBtn onClick={() => scrollTo("contact")} style={{ padding: "8px 20px", fontSize: "0.7rem" }}>Hire Me ↗</MagBtn>
        </nav>

        <button className="hamburger" onClick={() => setMenuOpen(true)} style={{ background: "none", border: "none", display: "flex", flexDirection: "column", gap: "5px", cursor: "pointer" }}>
          <span style={{ width: 24, height: 2, background: "#fafafa", borderRadius: 2 }} />
          <span style={{ width: 16, height: 2, background: "#c084fc", borderRadius: 2 }} />
          <span style={{ width: 20, height: 2, background: "#fafafa", borderRadius: 2 }} />
        </button>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{ position: "fixed", inset: 0, background: "#06060a", zIndex: 400, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "2rem" }}
          >
            <button onClick={() => setMenuOpen(false)} style={{ position: "absolute", top: "1.5rem", right: "6%", background: "none", border: "none", color: "#71717a", fontSize: "1.5rem", cursor: "pointer", fontFamily: "'DM Sans', sans-serif" }}>✕</button>
            {["Work", "Services", "Stack", "Contact"].map((l, i) => (
              <motion.button key={l} initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} onClick={() => scrollTo(l.toLowerCase())} style={{ background: "none", border: "none", color: "#fafafa", fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, cursor: "pointer" }}>
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section style={{ minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 6%", paddingTop: 90, position: "relative", zIndex: 2, overflow: "hidden" }}>
        <motion.div style={{ y: heroY, opacity: heroOpacity, position: "relative", zIndex: 1, maxWidth: 1000 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ display: "inline-flex", alignItems: "center", gap: 10, background: "rgba(192,132,252,0.07)", border: "1px solid rgba(192,132,252,0.2)", padding: "6px 16px", borderRadius: 100, marginBottom: "2rem" }}>
            <motion.span animate={{ scale: [1, 1.4, 1] }} transition={{ repeat: Infinity, duration: 2 }} style={{ width: 7, height: 7, background: "#4ade80", borderRadius: "50%", display: "inline-block", boxShadow: "0 0 8px #4ade80" }} />
            <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" }}>Open for Projects</span>
          </motion.div>

          <div className="hero-title" style={{ fontSize: "clamp(3rem, 8vw, 6rem)", fontWeight: 800, fontFamily: "'Syne', sans-serif", letterSpacing: "-0.04em", lineHeight: 0.95, marginBottom: "1.25rem" }}>
            {"Hi, I'm".split(" ").map((w, i) => (
              <span key={i} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.3em" }}>
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.2 + i * 0.08 }} style={{ display: "inline-block", color: "#fafafa", fontFamily: "'Syne', sans-serif" }}>{w}</motion.span>
              </span>
            ))}
            <br />
            {"Anuj Kattel.".split(" ").map((w, i) => (
              <span key={i} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.3em" }}>
                <motion.span initial={{ y: "110%" }} animate={{ y: 0 }} transition={{ duration: 0.8, delay: 0.4 + i * 0.08 }} style={{ display: "inline-block", color: "#c084fc", fontFamily: "'Syne', sans-serif" }}>{w}</motion.span>
              </span>
            ))}
          </div>

          <motion.p initial={{ y: "100%", opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.75 }} style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontWeight: 700, color: "#3f3f46", fontFamily: "'Syne', sans-serif", marginBottom: "1rem" }}>
            Full-Stack Developer & App Developer
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.95 }} style={{ fontSize: "1rem", color: "#71717a", maxWidth: 500, lineHeight: 1.6, marginBottom: "2rem", fontFamily: "'DM Sans', sans-serif" }}>
            Clean architecture. Blazing speed. Products designed to convert visitors into loyal customers — delivered on time, every time.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1 }} className="hero-buttons-mobile" style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <MagBtn onClick={() => scrollTo("work")}>View Work →</MagBtn>
            <MagBtn onClick={() => scrollTo("contact")} variant="ghost">Let's Talk</MagBtn>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} style={{ position: "absolute", bottom: "2rem", left: "6%", display: "flex", alignItems: "center", gap: 8, color: "#3f3f46", fontSize: "0.65rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "'DM Sans', sans-serif" }}>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} style={{ width: 1, height: 30, background: "linear-gradient(to bottom, #c084fc, transparent)" }} />
          Scroll
        </motion.div>
      </section>

      {/* Velocity Ticker */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", padding: "1rem 0", overflow: "hidden", position: "relative", zIndex: 2 }}>
        <VelocityTicker baseVelocity={-2.2}>
          {["Full-Stack", "React", "Node.js", "Mobile", "TypeScript", "PostgreSQL", "Docker", "FastAPI", "Next.js", "Tailwind"].map((t, i) => (
            <span key={i} style={{ display: "inline-flex", alignItems: "center", gap: "1rem", marginRight: "1rem" }}>
              <span style={{ fontSize: "0.7rem", fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.14em", color: i % 2 === 0 ? "#c084fc" : "#3f3f46", whiteSpace: "nowrap", fontFamily: "'DM Sans', sans-serif" }}>{t}</span>
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "#27272a" }} />
            </span>
          ))}
        </VelocityTicker>
      </div>

      {/* Stats with left-right animation */}
      <section style={{ padding: "5rem 6%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1.5rem", maxWidth: 900, margin: "0 auto" }}>
          {[
            { v: 20, s: "+", l: "Projects Shipped" },
            { v: 15, s: "+", l: "Happy Clients" },
            { v: 3, s: "+", l: "Years Experience" },
            { v: 99, s: "%", l: "Satisfaction Rate" },
          ].map((stat, idx) => (
            <motion.div
              key={stat.l}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              style={{ textAlign: "center", padding: "2rem 1rem", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: 24 }}
            >
              <div style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800, fontFamily: "'Syne', sans-serif", color: "#fafafa" }}>
                <CountUp target={stat.v} suffix={stat.s} />
              </div>
              <div style={{ fontSize: "0.7rem", color: "#52525b", fontWeight: 600, marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" }}>{stat.l}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" style={{ padding: "5rem 0", overflow: "hidden", position: "relative", zIndex: 2 }}>
        <div style={{ padding: "0 6%", marginBottom: "2rem" }}>
          <Pill label="Development tools" />
          <SplitHeading text="Tools I Build With" highlight={["Build"]} style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "-0.03em" }} />
        </div>

        <div style={{ marginBottom: "1rem", position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, #06060a, transparent)", zIndex: 3, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(-90deg, #06060a, transparent)", zIndex: 3, pointerEvents: "none" }} />
          <motion.div animate={{ x: [0, "-50%"] }} transition={{ ease: "linear", duration: 30, repeat: Infinity }} style={{ display: "flex", gap: "1rem", width: "max-content" }}>
            {[...techStack, ...techStack].map((t, i) => <TechChip key={i} t={t} />)}
          </motion.div>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(90deg, #06060a, transparent)", zIndex: 3, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: 80, background: "linear-gradient(-90deg, #06060a, transparent)", zIndex: 3, pointerEvents: "none" }} />
          <motion.div animate={{ x: ["-50%", 0] }} transition={{ ease: "linear", duration: 32, repeat: Infinity }} style={{ display: "flex", gap: "1rem", width: "max-content" }}>
            {[...[...techStack].reverse(), ...[...techStack].reverse()].map((t, i) => <TechChip key={i} t={t} />)}
          </motion.div>
        </div>
      </section>

      {/* Services with left-right on scroll */}
      <section id="services" style={{ padding: "6rem 6%", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative", zIndex: 2 }}>
        <Pill label="What I Do" />
        <SplitHeading text="Core Capabilities" highlight={["Capabilities"]} style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3rem" }} />

        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: i * 0.1 }}
            whileHover={{ x: 6 }}
            className="service-row-mobile"
            style={{ display: "flex", gap: "2rem", alignItems: "flex-start", padding: "2rem 0", borderBottom: "1px solid rgba(255,255,255,0.05)", cursor: "default" }}
          >
            <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#3f3f46", minWidth: 32, fontFamily: "'DM Sans', sans-serif" }}>{s.num}</span>
            <span style={{ fontSize: "2rem", color: "#c084fc" }}>{s.icon}</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "clamp(1.3rem, 2.5vw, 1.6rem)", fontWeight: 800, fontFamily: "'Syne', sans-serif", marginBottom: "0.5rem", color: "#fafafa" }}>{s.title}</h3>
              <p style={{ color: "#71717a", lineHeight: 1.6, fontSize: "0.9rem", maxWidth: 540, fontFamily: "'DM Sans', sans-serif" }}>{s.desc}</p>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
                {s.tags.map(t => <span key={t} style={{ padding: "4px 12px", borderRadius: 100, border: "1px solid rgba(192,132,252,0.25)", fontSize: "0.65rem", fontWeight: 700, color: "#c084fc", fontFamily: "'DM Sans', sans-serif" }}>{t}</span>)}
              </div>
            </div>
            <motion.span initial={{ opacity: 0 }} whileHover={{ opacity: 1, x: 4 }} style={{ fontSize: "1.5rem", color: "#c084fc", transition: "all 0.2s", fontFamily: "'DM Sans', sans-serif" }}>→</motion.span>
          </motion.div>
        ))}
      </section>

      {/* Projects with alternating left-right */}
      <section id="work" style={{ padding: "6rem 6%", position: "relative", zIndex: 2 }}>
        <Pill label="Recent Work" />
        <SplitHeading text="Recent Deployments" highlight={["Deployments"]} style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)", fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3rem" }} />

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {projects.map((p, idx) => (
            <motion.div
              key={p.index}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -4 }}
              style={{ background: `${p.accent}10`, border: `1px solid ${p.accent}30`, borderRadius: 24, padding: "clamp(1.5rem, 4vw, 2rem)", position: "relative", overflow: "hidden" }}
            >
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${p.accent}80, transparent)` }} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1.5rem", flexWrap: "wrap" }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "0.6rem", fontWeight: 800, color: "#3f3f46", fontFamily: "'DM Sans', sans-serif" }}>{p.index}</span>
                    <span style={{ fontSize: "0.6rem", color: "#3f3f46", padding: "2px 8px", borderRadius: 100, border: "1px solid rgba(255,255,255,0.07)", fontFamily: "'DM Sans', sans-serif" }}>{p.year}</span>
                  </div>
                  <h3 style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.5rem)", fontWeight: 800, fontFamily: "'Syne', sans-serif", marginBottom: "0.5rem", color: "#fafafa" }}>{p.title}</h3>
                  <p style={{ color: "#71717a", fontSize: "0.85rem", lineHeight: 1.6, maxWidth: 560, fontFamily: "'DM Sans', sans-serif" }}>{p.desc}</p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
                    {p.tech.map(t => <span key={t} style={{ padding: "3px 10px", borderRadius: 6, background: `${p.accent}20`, fontSize: "0.65rem", fontWeight: 700, color: p.accent, fontFamily: "'DM Sans', sans-serif" }}>{t}</span>)}
                  </div>
                </div>
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} style={{ width: 44, height: 44, borderRadius: 12, background: `${p.accent}20`, border: `1px solid ${p.accent}40`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", flexShrink: 0, fontFamily: "'DM Sans', sans-serif" }}>↗</motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: "6rem 6%", borderTop: "1px solid rgba(192,132,252,0.1)", borderBottom: "1px solid rgba(192,132,252,0.1)", background: "rgba(192,132,252,0.025)", textAlign: "center", position: "relative", zIndex: 2 }}>
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span style={{ fontSize: "0.65rem", fontWeight: 800, color: "#c084fc", letterSpacing: "0.2em", textTransform: "uppercase", fontFamily: "'DM Sans', sans-serif" }}>Turn-Key Solution</span>
          <SplitHeading text="Get a Production-Ready Website in Days." highlight={["Website"]} delayBase={0.1} style={{ fontSize: "clamp(2rem, 5vw, 4rem)", fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "-0.04em", margin: "1rem auto", maxWidth: 700 }} />
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} style={{ color: "#71717a", maxWidth: 460, margin: "0 auto 2rem", fontFamily: "'DM Sans', sans-serif" }}>Fully responsive, SEO-optimized, blazing fast. Everything you need to launch your business online.</motion.p>
          <MagBtn onClick={() => window.open("mailto:anujkattel6@gmail.com")} style={{ padding: "14px 36px", fontSize: "0.9rem" }}>Order Now ↗</MagBtn>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ padding: "6rem 6%", position: "relative", zIndex: 2 }}>
        <div className="contact-grid-mobile" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "4rem", alignItems: "start", maxWidth: 1050, margin: "0 auto" }}>
          <div>
            <Pill label="Get In Touch" />
            <SplitHeading text="Let's Build Something Great." highlight={["Great."]} style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontFamily: "'Syne', sans-serif", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, marginBottom: "1rem" }} />
            <p style={{ color: "#71717a", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: 380, marginBottom: "2rem", fontFamily: "'DM Sans', sans-serif" }}>Have a project in mind? Reach out and let's create something exceptional together.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {socialLinks.map((s, i) => (
                <motion.a key={s.platform} href={s.url} target="_blank" initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.35 + i * 0.07 }} whileHover={{ x: 4 }} style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", padding: "8px 0" }}>
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: `${s.color}14`, border: `1px solid ${s.color}25`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.6rem", fontWeight: 800, color: s.color, fontFamily: "'DM Sans', sans-serif" }}>{s.icon}</div>
                  <div>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, color: "#d4d4d8", fontFamily: "'DM Sans', sans-serif" }}>{s.platform}</div>
                    <div style={{ fontSize: "0.7rem", color: "#52525b", fontFamily: "'DM Sans', sans-serif" }}>{s.user}</div>
                  </div>
                  <span style={{ marginLeft: "auto", color: s.color, opacity: 0.5, fontFamily: "'DM Sans', sans-serif" }}>↗</span>
                </motion.a>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 50, scale: 0.96 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }} style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 28, padding: "clamp(1.5rem, 5vw, 2.5rem)" }}>
            {[
              { icon: "📧", label: "Email", value: "anujkattel6@gmail.com", href: "mailto:anujkattel6@gmail.com" },
              { icon: "📱", label: "WhatsApp / Call", value: "+91 95935 30260", href: "https://wa.me/919593530260" },
              { icon: "🇳🇵", label: "Nepal Line", value: "+977 9825995421", href: "tel:+9779825995421" },
              { icon: "🌐", label: "Based In", value: "Remote — Available Worldwide", href: null },
            ].map((item, i) => (
              <div key={i} style={{ padding: i > 0 ? "1.2rem 0 0 0" : "0 0 1.2rem 0", borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.05)" : "none" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "1.2rem" }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: "0.65rem", fontWeight: 700, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.1em", fontFamily: "'DM Sans', sans-serif" }}>{item.label}</div>
                    {item.href ? <a href={item.href} style={{ color: "#c084fc", fontSize: "0.85rem", textDecoration: "none", fontFamily: "'DM Sans', sans-serif" }}>{item.value}</a> : <span style={{ color: "#a1a1aa", fontSize: "0.85rem", fontFamily: "'DM Sans', sans-serif" }}>{item.value}</span>}
                  </div>
                </div>
              </div>
            ))}
            <div onClick={() => window.open("https://wa.me/919593530260")} style={{ marginTop: "1.5rem", padding: "0.75rem 1rem", background: "rgba(37,211,102,0.06)", border: "1px solid rgba(37,211,102,0.15)", borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "space-between", cursor: "pointer" }}>
              <div>
                <div style={{ fontSize: "0.75rem", fontWeight: 700, color: "#fafafa", fontFamily: "'DM Sans', sans-serif" }}>Message on WhatsApp</div>
                <div style={{ fontSize: "0.65rem", color: "#52525b", fontFamily: "'DM Sans', sans-serif" }}>Fastest way to reach me</div>
              </div>
              <span style={{ color: "#4ade80", fontFamily: "'DM Sans', sans-serif" }}>→</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ padding: "2rem 6%", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#3f3f46", fontSize: "0.7rem", fontWeight: 600, flexWrap: "wrap", gap: "1rem", position: "relative", zIndex: 2 }}>
        <span style={{ fontFamily: "'DM Sans', sans-serif" }}>© 2026 Anuj Kattel. All rights reserved.</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {socialLinks.map(s => <a key={s.platform} href={s.url} target="_blank" style={{ color: "#3f3f46", textDecoration: "none", transition: "color 0.2s", fontFamily: "'DM Sans', sans-serif" }} onMouseEnter={e => e.currentTarget.style.color = s.color} onMouseLeave={e => e.currentTarget.style.color = "#3f3f46"}>{s.platform.split(" ")[0]}</a>)}
        </div>
        <span style={{ color: "#c084fc", fontFamily: "'DM Sans', sans-serif" }}>Built with precision ✦</span>
      </footer>
    </div>
  );
}