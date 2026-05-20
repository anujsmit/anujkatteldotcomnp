import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform, useSpring, useInView } from "framer-motion";

// ─── TECH STACK DATA with Devicons ──────────────────────────────────────────
const techStack = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", color: "#F7DF1E" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", color: "#3178C6" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", color: "#339933" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", color: "#3776AB" },
  { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", color: "#4169E1" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", color: "#2496ED" },
  { name: "AWS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg", color: "#FF9900" },
  { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", color: "#F05032" },
  { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", color: "#4479A1" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", color: "#ffffff" },
  { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", color: "#009688" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", color: "#61DAFB" },
  { name: "Firebase", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg", color: "#FFCA28" },
];

// ─── COMPANIES LIST ─────────────────────────────────────────────────────────
const companies = [
  "Stripe", "Vercel", "Supabase", "Linear", "Figma",
  "Netflix", "Shopify", "Slack", "Airbnb", "Coinbase"
];

// ─── SERVICES ───────────────────────────────────────────────────────────────
const services = [
  {
    num: "01",
    title: "Full-Stack Web",
    desc: "End-to-end web platforms with blazing fast frontends, robust APIs, and secure, scalable backends. Every line of code written with performance in mind.",
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    num: "02",
    title: "Mobile Apps",
    desc: "Cross-platform mobile applications for iOS and Android with fluid animations, offline capability, and real-time data synchronization.",
    tags: ["React Native", "Firebase"],
  },
  {
    num: "03",
    title: "API Architecture",
    desc: "RESTful and GraphQL APIs designed for reliability and speed. Complete with authentication, rate limiting, and full documentation.",
    tags: ["FastAPI", "Express", "Docker"],
  },
];

// ─── PROJECTS ───────────────────────────────────────────────────────────────
const projects = [
  {
    index: "001",
    title: "E-Commerce Architecture",
    year: "2025",
    desc: "A lightning-fast store with custom checkout pipeline, real-time inventory management, and an admin dashboard handling 10K+ daily transactions.",
    tech: ["React", "Node.js", "MySQL"],
    accent: "#a855f7",
  },
  {
    index: "002",
    title: "Fitness Tracking App",
    year: "2025",
    desc: "Cross-platform mobile app featuring real-time biometric syncing, personalized AI workout recommendations, and social leaderboards.",
    tech: ["React Native", "Firebase"],
    accent: "#06b6d4",
  },
  {
    index: "003",
    title: "SaaS Analytics Dashboard",
    year: "2024",
    desc: "Enterprise data visualization platform with live WebSocket feeds, role-based access, and exportable PDF reports.",
    tech: ["TypeScript", "FastAPI", "PostgreSQL"],
    accent: "#10b981",
  },
];

// ─── UTILITIES ───────────────────────────────────────────────────────────────
const easeOutExpo = [0.16, 1, 0.3, 1];

function useCountUp(target, duration = 2, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function StatCard({ value, suffix, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const count = useCountUp(value, 1.8, inView);
  return (
    <div ref={ref} style={{ textAlign: "center" }}>
      <div style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", color: "#fff", lineHeight: 1 }}>
        {count}{suffix}
      </div>
      <div style={{ fontSize: "0.85rem", color: "#52525b", fontWeight: 500, marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.12em" }}>
        {label}
      </div>
    </div>
  );
}

// ─── MAGNETIC BUTTON ────────────────────────────────────────────────────────
function MagneticBtn({ children, onClick, style = {}, variant = "primary" }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const springX = useSpring(pos.x, { stiffness: 200, damping: 20 });
  const springY = useSpring(pos.y, { stiffness: 200, damping: 20 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({ x: (e.clientX - cx) * 0.35, y: (e.clientY - cy) * 0.35 });
  };
  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  const base = {
    padding: "16px 36px",
    borderRadius: "100px",
    fontWeight: 700,
    fontSize: "0.95rem",
    cursor: "pointer",
    border: "none",
    letterSpacing: "0.02em",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    transition: "background 0.2s",
    ...(variant === "primary"
      ? { background: "#a855f7", color: "#fff" }
      : { background: "transparent", color: "#a1a1aa", border: "1px solid #27272a" }),
    ...style,
  };

  return (
    <motion.button
      ref={ref}
      style={{ x: springX, y: springY, ...base }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
    >
      {children}
    </motion.button>
  );
}

// ─── CURSOR ──────────────────────────────────────────────────────────────────
function Cursor() {
  const pos = useRef({ x: 0, y: 0 });
  const dot = useRef(null);
  const ring = useRef(null);
  const rafRef = useRef(null);
  const ringPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => { pos.current = { x: e.clientX, y: e.clientY }; };
    window.addEventListener("mousemove", move);
    const animate = () => {
      if (dot.current) {
        dot.current.style.transform = `translate(${pos.current.x - 4}px, ${pos.current.y - 4}px)`;
      }
      if (ring.current) {
        ringPos.current.x += (pos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (pos.current.y - ringPos.current.y) * 0.12;
        ring.current.style.transform = `translate(${ringPos.current.x - 20}px, ${ringPos.current.y - 20}px)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);
    return () => { window.removeEventListener("mousemove", move); cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <>
      <div ref={dot} style={{ position: "fixed", top: 0, left: 0, width: 8, height: 8, background: "#a855f7", borderRadius: "50%", pointerEvents: "none", zIndex: 9999, willChange: "transform" }} />
      <div ref={ring} style={{ position: "fixed", top: 0, left: 0, width: 40, height: 40, border: "1.5px solid rgba(168,85,247,0.5)", borderRadius: "50%", pointerEvents: "none", zIndex: 9998, willChange: "transform" }} />
    </>
  );
}

// ─── NOISE OVERLAY ──────────────────────────────────────────────────────────
function Noise() {
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 1,
      backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
      opacity: 0.025,
    }} />
  );
}

// ─── GRID BG ─────────────────────────────────────────────────────────────────
function GridBg() {
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
      backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
      backgroundSize: "60px 60px",
    }} />
  );
}

// ─── SECTION HEADER ──────────────────────────────────────────────────────────
function SectionLabel({ label }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "1rem" }}
    >
      <div style={{ width: "24px", height: "1px", background: "#a855f7" }} />
      <span style={{ fontSize: "0.7rem", fontWeight: 700, color: "#a855f7", textTransform: "uppercase", letterSpacing: "0.18em" }}>{label}</span>
    </motion.div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const scrollTo = (id) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async () => {
    if (!email.trim()) return;

    try {
      const response = await fetch(
        "https://anujkattelcomnpbackend.onrender.com/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      setSent(true);

      setEmail("");

      setTimeout(() => {
        setSent(false);
      }, 4000);

    } catch (error) {
      console.log(error);

      alert("Server Error");
    }
  };

  const navLinks = ["Work", "Services", "Stack", "Contact"];

  return (
    <div style={{ background: "#050507", color: "#fafafa", fontFamily: "'Syne', 'Plus Jakarta Sans', sans-serif", overflowX: "hidden", position: "relative" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&display=swap');
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { cursor: none !important; }
        a, button { cursor: none !important; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #050507; }
        ::-webkit-scrollbar-thumb { background: #a855f7; border-radius: 2px; }
        ::selection { background: rgba(168,85,247,0.3); color: #fff; }
        input:focus { outline: none; }
      `}</style>

      <Cursor />
      <Noise />
      <GridBg />

      {/* ── PROGRESS BAR ── */}
      <motion.div style={{ scaleX, position: "fixed", top: 0, left: 0, right: 0, height: "2px", background: "linear-gradient(90deg, #a855f7, #ec4899)", transformOrigin: "left", zIndex: 1000 }} />

      {/* ── NAV ── */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: easeOutExpo }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 500, padding: "1.5rem 8%", display: "flex", justifyContent: "space-between", alignItems: "center", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", borderBottom: "1px solid rgba(255,255,255,0.04)", background: "rgba(5,5,7,0.7)" }}
      >
        <motion.div style={{ fontWeight: 800, fontSize: "1.1rem", letterSpacing: "-0.02em", color: "#fff" }}>
          AK<span style={{ color: "#a855f7" }}>.</span>
        </motion.div>

        <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
          {navLinks.map((l) => (
            <button key={l} onClick={() => scrollTo(l.toLowerCase())} style={{ background: "none", border: "none", color: "#71717a", fontWeight: 600, fontSize: "0.85rem", letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.2s", fontFamily: "inherit" }}
              onMouseEnter={e => e.target.style.color = "#fff"}
              onMouseLeave={e => e.target.style.color = "#71717a"}
            >{l}</button>
          ))}
          <MagneticBtn onClick={() => scrollTo("contact")} style={{ padding: "12px 24px", fontSize: "0.8rem" }}>
            Hire Me ↗
          </MagneticBtn>
        </div>
      </motion.nav>

      {/* ══════════════ HERO ══════════════ */}
      <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 8%", paddingTop: "100px", position: "relative", zIndex: 2 }}>

        {/* Glow orb */}
        <div style={{ position: "absolute", top: "20%", right: "10%", width: "500px", height: "500px", background: "radial-gradient(circle, rgba(168,85,247,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "10%", left: "5%", width: "350px", height: "350px", background: "radial-gradient(circle, rgba(236,72,153,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 1, maxWidth: "1100px" }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", background: "rgba(168,85,247,0.08)", border: "1px solid rgba(168,85,247,0.2)", padding: "8px 18px", borderRadius: "100px", marginBottom: "2.5rem" }}
          >
            <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5 }} style={{ width: "7px", height: "7px", background: "#22c55e", borderRadius: "50%", display: "inline-block" }} />
            <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#c084fc", letterSpacing: "0.08em", textTransform: "uppercase" }}>Available — Accepting New Projects</span>
          </motion.div>

          <br></br>
          {"Hi, I'm Anuj Kattel.".split(" ").map((word, wi) => (
            <div key={wi} style={{ overflow: "hidden", display: "inline-block", marginRight: "0.35em" }}>
              <motion.span
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.9, delay: 0.3 + wi * 0.08, ease: easeOutExpo }}
                style={{ display: "inline-block", fontSize: "clamp(3rem, 7.5vw, 7rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1, color: word === "Anuj" || word === "Kattel." ? "#a855f7" : "#fff" }}
              >
                {word}
              </motion.span>
            </div>
          ))}

          <div style={{ overflow: "hidden", marginTop: "1rem" }}>
            <motion.p
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.8, ease: easeOutExpo }}
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)", fontWeight: 700, color: "#52525b", letterSpacing: "-0.02em", lineHeight: 1.2 }}
            >
              I craft high-performance web & mobile experiences.
            </motion.p>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.0 }}
            style={{ fontSize: "1.05rem", marginTop: "1.8rem", color: "#71717a", maxWidth: "520px", lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 400 }}
          >
            Clean architecture. Blazing speed. Products designed to convert visitors into loyal customers—delivered on time, every time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.2 }}
            style={{ display: "flex", gap: "1rem", marginTop: "3rem", alignItems: "center", flexWrap: "wrap" }}
          >
            <MagneticBtn onClick={() => scrollTo("work")}>
              View Work →
            </MagneticBtn>
            <MagneticBtn onClick={() => scrollTo("contact")} variant="ghost">
              Let's Talk
            </MagneticBtn>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          style={{ position: "absolute", bottom: "3rem", left: "8%", display: "flex", alignItems: "center", gap: "12px", color: "#3f3f46", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", fontWeight: 600 }}
        >
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }} style={{ width: "1px", height: "40px", background: "linear-gradient(to bottom, #a855f7, transparent)" }} />
          Scroll
        </motion.div>
      </section>

      {/* ──════════════ STATS BAND ══════════════ */}
      <section style={{ padding: "5rem 8%", borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "2rem", maxWidth: "900px", margin: "0 auto" }}>
          <StatCard value={20} suffix="+" label="Projects Shipped" />
          <StatCard value={15} suffix="+" label="Happy Clients" />
          <StatCard value={3} suffix="+" label="Years Experience" />
          <StatCard value={99} suffix="%" label="Satisfaction Rate" />
        </div>
      </section>

      {/* ──════════════ INFINITE TECH STACK SCROLLER ══════════════ */}
      <section id="stack" style={{ padding: "6rem 0 4rem 0", position: "relative", zIndex: 2, overflow: "hidden" }}>
        <div style={{ padding: "0 8%" }}>
          <SectionLabel label="Arsenal" />
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
            style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "3.5rem", color: "#fff" }}
          >
            Tools I Build With
          </motion.h2>
        </div>

        {/* Infinite Moving Loop Area */}
        <div style={{ display: "flex", position: "relative", width: "100%", padding: "1rem 0" }}>
          {/* Gradient masking covers for side blending */}
          <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(90deg, #050507 20%, transparent)", zIndex: 3, pointerEvents: "none" }} />
          <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "120px", background: "linear-gradient(-90deg, #050507 20%, transparent)", zIndex: 3, pointerEvents: "none" }} />

          <motion.div
            animate={{ x: [0, "-50%"] }}
            transition={{ ease: "linear", duration: 28, repeat: Infinity }}
            style={{ display: "flex", gap: "1.5rem", whiteSpace: "nowrap", paddingRight: "1.5rem", willChange: "transform" }}
          >
            {/* Double elements loop execution layout */}
            {[...techStack, ...techStack].map((tech, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: "16px",
                  padding: "1rem 2rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "1rem",
                  minWidth: "180px"
                }}
              >
                <img src={tech.icon} alt={tech.name} style={{ width: "28px", height: "28px", objectFit: "contain", filter: tech.name === "Express" ? "invert(1)" : "none" }} />
                <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "#a1a1aa", textTransform: "uppercase", letterSpacing: "0.06em" }}>{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ══════════════ SERVICES ══════════════ */}
      <section id="services" style={{ padding: "7rem 8%", background: "rgba(255,255,255,0.01)", borderTop: "1px solid rgba(255,255,255,0.04)", position: "relative", zIndex: 2 }}>
        <SectionLabel label="What I Do" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "4rem", color: "#fff" }}
        >
          Core Capabilities
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: easeOutExpo }}
              whileHover={{ x: 8 }}
              style={{
                display: "flex",
                gap: "3rem",
                alignItems: "flex-start",
                padding: "2.5rem 0",
                borderBottom: "1px solid rgba(255,255,255,0.05)",
                transition: "border-color 0.2s",
                cursor: "default",
              }}
            >
              <span style={{ fontSize: "0.75rem", fontWeight: 800, color: "#3f3f46", minWidth: "30px", paddingTop: "6px", fontFamily: "monospace" }}>{s.num}</span>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.8rem", fontWeight: 800, letterSpacing: "-0.02em", marginBottom: "0.75rem", color: "#fff" }}>{s.title}</h3>
                <p style={{ color: "#71717a", lineHeight: 1.7, fontSize: "1rem", maxWidth: "560px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.desc}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1.2rem" }}>
                  {s.tags.map(t => (
                    <span key={t} style={{ padding: "4px 14px", borderRadius: "100px", border: "1px solid rgba(168,85,247,0.3)", fontSize: "0.72rem", fontWeight: 700, color: "#c084fc", letterSpacing: "0.05em" }}>{t}</span>
                  ))}
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileHover={{ opacity: 1, x: 0 }}
                style={{ fontSize: "2rem", color: "#a855f7", alignSelf: "center" }}
              >→</motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════ PROJECTS ══════════════ */}
      <section id="work" style={{ padding: "7rem 8%", position: "relative", zIndex: 2 }}>
        <SectionLabel label="Selected Work" />
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: easeOutExpo }}
          style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 800, letterSpacing: "-0.03em", marginBottom: "4rem", color: "#fff" }}
        >
          Recent Deployments
        </motion.h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: easeOutExpo }}
              whileHover={{ scale: 1.01 }}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
                borderRadius: "24px",
                padding: "2.5rem",
                display: "grid",
                gridTemplateColumns: "auto 1fr auto",
                gap: "2rem",
                alignItems: "center",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Accent glow */}
              <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "1px", background: `linear-gradient(90deg, transparent, ${p.accent}60, transparent)` }} />

              <div style={{ textAlign: "right" }}>
                <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#3f3f46", fontFamily: "monospace" }}>{p.index}</span>
                <div style={{ fontSize: "0.7rem", color: "#3f3f46", marginTop: "2px" }}>{p.year}</div>
              </div>

              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, letterSpacing: "-0.02em", color: "#fff", marginBottom: "0.6rem" }}>{p.title}</h3>
                <p style={{ color: "#71717a", fontSize: "0.95rem", lineHeight: 1.7, maxWidth: "600px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{p.desc}</p>
                <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginTop: "1rem" }}>
                  {p.tech.map(t => (
                    <span key={t} style={{ padding: "3px 12px", borderRadius: "6px", background: `${p.accent}15`, fontSize: "0.7rem", fontWeight: 700, color: p.accent, letterSpacing: "0.05em" }}>{t}</span>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.1, rotate: 45 }}
                style={{ width: "52px", height: "52px", borderRadius: "50%", background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#fff", fontSize: "1.1rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
              >→</motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ══════════════ CTA / ORDER ══════════════ */}
      <section style={{ padding: "7rem 8%", background: "rgba(168,85,247,0.03)", borderTop: "1px solid rgba(168,85,247,0.1)", borderBottom: "1px solid rgba(168,85,247,0.1)", position: "relative", zIndex: 2, textAlign: "center" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "600px", height: "400px", background: "radial-gradient(ellipse, rgba(168,85,247,0.1) 0%, transparent 70%)", pointerEvents: "none" }} />
        <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: easeOutExpo }} style={{ position: "relative", zIndex: 1 }}>
          <span style={{ fontSize: "0.7rem", fontWeight: 800, color: "#a855f7", letterSpacing: "0.18em", textTransform: "uppercase" }}>Turn-Key Solution</span>
          <h2 style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.04em", margin: "1rem 0", lineHeight: 1.05, color: "#fff" }}>
            Get a Production-Ready<br /><span style={{ color: "#a855f7" }}>Website</span> in Days.
          </h2>
          <p style={{ color: "#71717a", fontSize: "1.05rem", maxWidth: "500px", margin: "0 auto 2.5rem", lineHeight: 1.7, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Fully responsive, SEO-optimized, blazing fast. Everything you need to launch your business online—without the wait.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "2.5rem" }}>
            {["Responsive Design", "SEO Optimized", "Secure Codebase", "Lifetime Support"].map((f) => (
              <div key={f} style={{ display: "flex", alignItems: "center", gap: "8px", color: "#a1a1aa", fontSize: "0.85rem", fontWeight: 600 }}>
                <span style={{ color: "#a855f7", fontSize: "1rem" }}>✓</span> {f}
              </div>
            ))}
          </div>
          <MagneticBtn onClick={() => window.open("mailto:anujkattel6@gmail.com")} style={{ fontSize: "1rem", padding: "18px 40px" }}>
            Order Now ↗
          </MagneticBtn>
        </motion.div>
      </section>

      {/* ══════════════ CONTACT ══════════════ */}
      <section id="contact" style={{ padding: "7rem 8%", position: "relative", zIndex: 2 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", alignItems: "center", maxWidth: "1100px" }}>
          <div>
            <SectionLabel label="Get In Touch" />
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: easeOutExpo }}
              style={{ fontSize: "clamp(2.5rem, 4vw, 4rem)", fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1.05, color: "#fff" }}
            >
              Let's Build<br />Something<br /><span style={{ color: "#a855f7" }}>Great.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ color: "#71717a", fontSize: "1rem", marginTop: "1.5rem", lineHeight: 1.7, maxWidth: "380px", fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Drop your email and I'll reach out within 12 hours to review your project and get things moving.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: easeOutExpo }}
          >
            <div style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "24px", padding: "3rem" }}>
              <label style={{ display: "block", fontSize: "0.75rem", fontWeight: 700, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>Your Email</label>
              <div style={{ position: "relative", marginBottom: "1.5rem" }}>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  onKeyDown={e => e.key === "Enter" && handleSubmit()}
                  placeholder="you@company.com"
                  style={{ width: "100%", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "12px", padding: "18px 20px", color: "#fff", fontSize: "1rem", fontFamily: "inherit", transition: "border-color 0.2s" }}
                  onFocus={e => e.target.style.borderColor = "rgba(168,85,247,0.5)"}
                  onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.08)"}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                onClick={handleSubmit}
                style={{ width: "100%", padding: "18px", borderRadius: "12px", border: "none", background: "linear-gradient(135deg, #a855f7, #ec4899)", color: "#fff", fontWeight: 800, fontSize: "1rem", cursor: "pointer", letterSpacing: "0.02em", fontFamily: "inherit" }}
              >
                Send Message →
              </motion.button>

              <AnimatePresence>
                {sent && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    style={{ marginTop: "1rem", textAlign: "center", color: "#22c55e", fontWeight: 600, fontSize: "0.9rem" }}
                  >
                    ✓ Message received. I'll be in touch soon!
                  </motion.div>
                )}
              </AnimatePresence>

              <div style={{ marginTop: "2rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", justifyContent: "space-between" }}>
                {["GitHub", "LinkedIn", "Twitter"].map(l => (
                  <button key={l} style={{ background: "none", border: "none", color: "#52525b", fontWeight: 600, fontSize: "0.85rem", fontFamily: "inherit", transition: "color 0.2s" }}
                    onMouseEnter={e => e.target.style.color = "#a855f7"}
                    onMouseLeave={e => e.target.style.color = "#52525b"}
                  >{l} ↗</button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ══════════════ FOOTER ══════════════ */}
      <footer style={{ padding: "3rem 8%", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", color: "#3f3f46", fontSize: "0.8rem", fontWeight: 600, position: "relative", zIndex: 2 }}>
        <span>© 2026 Anuj Kattel. All rights reserved.</span>
        <span style={{ color: "#a855f7" }}>Built with precision ✦</span>
      </footer>
    </div>
  );
}