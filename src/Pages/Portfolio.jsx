import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import {
  FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaGlobe,
  FaCode, FaServer, FaLayerGroup, FaTools,
  FaWhatsapp, FaUsers, FaChartLine, FaStar, FaShieldAlt, FaCheckCircle,
  FaGraduationCap, FaAward, FaHeart, FaPrint, FaDownload, FaArrowUp,
  FaBriefcase, FaCalendarAlt, FaUser
} from "react-icons/fa";
import {
  SiReact, SiNodedotjs, SiTailwindcss, SiNextdotjs,
  SiPostgresql, SiFirebase, SiDocker, SiTypescript,
  SiSupabase, SiFlutter, SiExpo
} from "react-icons/si";
import profileImg from "../assets/profile.png";

// ─── DATA ───────────────────────────────────────────────

const profile = {
  name: "Anuj Kattel",
  title: "Full Stack Developer",
  email: "anujkattel62@gmail.com",
  phone: "+977 9825995421",
  github: "github.com/anujsmit",
  linkedin: "linkedin.com/in/anujkattel",
  location: "Jhapa, Nepal",
  bio: "Full Stack Developer with 4+ years of experience building web and mobile applications.",
  image: profileImg
};

const techIconMap = {
  "React": <SiReact />,
  "Next.js": <SiNextdotjs />,
  "Tailwind CSS": <SiTailwindcss />,
  "Flutter": <SiFlutter />,
  "Node.js": <SiNodedotjs />,
  "Supabase": <SiSupabase />,
  "Firebase": <SiFirebase />,
  "PostgreSQL": <SiPostgresql />,
  "Docker": <SiDocker />,
  "Git": <FaCode />,
  "TypeScript": <SiTypescript />,
  "REST APIs": <FaServer />,
  "Expo": <SiExpo />,
  "React Native": <SiReact />
};

const workExperience = [
  {
    title: "Co-founder & Lead Developer",
    company: "ServeX",
    period: "2026",
    location: "Jhapa, Nepal",
    type: "Startup",
    achievements: [
      "Built Birtamod's first service provider app",
      "Architected full-stack solution with React Native, Node.js, and Supabase",
      "Implemented real-time analytics dashboard and multi-business support",
      "Achieved a 4.9/5 user satisfaction rating",
      "Processed thousands of customer transactions with high reliability",
      "Managed entire product lifecycle from ideation to App Store deployment"
    ]
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2021 – Present",
    location: "Remote",
    type: "Contract",
    achievements: [
      "Delivered 20+ web and mobile applications for clients across 8 countries",
      "Reduced page load times by 40% through performance optimization techniques",
      "Integrated secure authentication flows and payment gateways (Stripe, Khalti, eSewa)",
      "Provided technical consulting, code review, and architecture planning services"
    ]
  }
];

const projects = [
  {
    name: "ServeX",
    desc: "ServeX connects customers with nearby verified service professionals such as plumbers, electricians, cleaners, and technicians.",
    tech: ["React Native", "Node.js", "Supabase", "PostgreSQL"],
    link: "#"
  },
  {
    name: "Digital Khata",
    desc: "Digital Khata is a business management platform that helps shops manage customers, credit records, inventory, billing, and business reports.",
    tech: ["React", "Node.js", "Firebase", "Tailwind CSS"],
    link: "#"
  }
];

const education = [
  {
    degree: "SEE",
    school: "Nidi Education & Indreni Campus",
    location: "Nepal",
    period: "2020 – 2022",
    description: "Basics of programming and knowledge about frontends"
  },
  {
    degree: "Bachelor's in Computer Science",
    school: "Sikkim Manipal Institute of Technology",
    location: "India",
    period: "2024 – present",
    description: "Specialized in software development, database management, and data structures. Participated in hackathons and coding competitions."
  }
];

const skills = {
  frontend: ["React", "Next.js", "Tailwind CSS", "Flutter"],
  backend: ["Node.js", "Supabase", "Firebase", "PostgreSQL"],
  tools: ["Docker", "Git", "TypeScript", "REST APIs"]
};

const certifications = [
  "Hackathon Winner",
  "Google Mobile Web Specialist",
  "Meta Backend Developer Professional Certificate"
];

const languages = [
  { name: "English", level: "Professional", pct: 85 },
  { name: "Nepali", level: "Native", pct: 100 },
  { name: "Hindi", level: "Fluent", pct: 90 }
];

const interests = ["Open Source", "AI / ML", "Startup Culture", "Tech Blogging", "Cloud Architecture"];

// ─── REVEAL ON SCROLL ──────────────────────────────────

function Reveal({ children, delay = 0 }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(18px)",
        transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${delay}ms`
      }}
    >
      {children}
    </div>
  );
}

// ─── MAIN COMPONENT ────────────────────────────────────

export default function CV() {
  const [showFab, setShowFab] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowFab(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <Helmet>
        <title>Anuj Kattel | CV / Resume</title>
        <meta name="description" content="Full Stack Developer CV — Anuj Kattel" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </Helmet>

      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body {
          background: #0f1923;
          font-family: 'Inter', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        /* ─── PAGE WRAPPER ─── */
        .cv-page {
          min-height: 100vh;
          padding: 2rem 1.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        /* ─── CV CONTAINER ─── */
        .cv-container {
          max-width: 1060px;
          width: 100%;
          background: #fff;
          border-radius: 16px;
          overflow: hidden;
          display: grid;
          grid-template-columns: 290px 1fr;
          box-shadow:
            0 0 0 1px rgba(0,0,0,0.03),
            0 4px 24px rgba(0,0,0,0.18),
            0 24px 80px rgba(0,0,0,0.25);
        }

        /* ─── SIDEBAR ─── */
        .sidebar {
          background: linear-gradient(175deg, #111b27 0%, #0d1520 100%);
          color: #d0d8e0;
          padding: 2.5rem 1.8rem 2rem;
          position: relative;
          overflow: hidden;
        }
        .sidebar::before {
          content: '';
          position: absolute;
          top: -60px;
          right: -60px;
          width: 180px;
          height: 180px;
          background: radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%);
          pointer-events: none;
        }
        .sidebar::after {
          content: '';
          position: absolute;
          bottom: -40px;
          left: -40px;
          width: 140px;
          height: 140px;
          background: radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .profile-image {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          margin: 0 auto 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          z-index: 1;
          overflow: hidden;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.25), 0 8px 24px rgba(16,185,129,0.2);
        }

        .profile-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sidebar-name {
          text-align: center;
          font-size: 1.3rem;
          font-weight: 800;
          color: #fff;
          letter-spacing: -0.02em;
          margin-bottom: 0.15rem;
          position: relative;
          z-index: 1;
        }

        .sidebar-title {
          text-align: center;
          color: #10b981;
          font-size: 0.78rem;
          font-weight: 600;
          margin-bottom: 0.3rem;
          position: relative;
          z-index: 1;
        }

        .sidebar-tagline {
          text-align: center;
          color: #5a6a7a;
          font-size: 0.7rem;
          margin-bottom: 1.6rem;
          position: relative;
          z-index: 1;
        }

        .sidebar-divider {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(16,185,129,0.2), transparent);
          margin: 0 0 1.4rem;
          position: relative;
          z-index: 1;
        }

        .sidebar-section {
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .sidebar-section-title {
          color: #10b981;
          font-size: 0.65rem;
          text-transform: uppercase;
          letter-spacing: 0.12em;
          font-weight: 700;
          margin-bottom: 0.7rem;
          display: flex;
          align-items: center;
          gap: 0.45rem;
        }

        .sidebar-section-title svg {
          font-size: 0.7rem;
          opacity: 0.7;
        }

        .sidebar-bio {
          font-size: 0.78rem;
          line-height: 1.7;
          color: #8a9aa8;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 0.65rem;
          font-size: 0.75rem;
          color: #8a9aa8;
          margin-bottom: 0.55rem;
          line-height: 1.5;
        }

        .contact-item .ci-icon {
          color: #10b981;
          min-width: 14px;
          margin-top: 2px;
          font-size: 0.72rem;
          opacity: 0.8;
        }

        .lang-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0.4rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.04);
        }
        .lang-row:last-child { border-bottom: none; }
        .lang-name { font-size: 0.78rem; color: #a0acb8; }
        .lang-level {
          font-size: 0.62rem;
          color: #10b981;
          font-weight: 600;
          background: rgba(16,185,129,0.1);
          padding: 0.12rem 0.5rem;
          border-radius: 4px;
        }
        .lang-bar-bg {
          width: 100%;
          height: 3px;
          background: rgba(255,255,255,0.06);
          border-radius: 3px;
          margin-top: 0.25rem;
          overflow: hidden;
        }
        .lang-bar-fill {
          height: 100%;
          background: linear-gradient(90deg, #10b981, #34d399);
          border-radius: 3px;
          transition: width 1.2s cubic-bezier(0.22,1,0.36,1);
        }

        .cert-item {
          font-size: 0.74rem;
          color: #8a9aa8;
          padding: 0.3rem 0 0.3rem 1.1rem;
          position: relative;
          line-height: 1.5;
        }
        .cert-item::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background: #10b981;
          opacity: 0.6;
        }

        .interest-tag {
          display: inline-block;
          background: rgba(255,255,255,0.04);
          color: #7a8a98;
          padding: 0.22rem 0.65rem;
          border-radius: 6px;
          font-size: 0.68rem;
          margin: 0 0.2rem 0.25rem 0;
          border: 1px solid rgba(255,255,255,0.04);
        }

        .social-row {
          display: flex;
          gap: 0.6rem;
          margin-top: 0.3rem;
        }
        .social-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.06);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #7a8a98;
          font-size: 0.82rem;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }
        .social-icon:hover {
          background: rgba(16,185,129,0.15);
          color: #10b981;
          border-color: rgba(16,185,129,0.2);
          transform: translateY(-1px);
        }

        /* ─── MAIN CONTENT ─── */
        .main-content {
          padding: 2.5rem 2.5rem 2rem;
        }

        .section-header {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .section-header:first-child { margin-top: 0; }

        .section-icon {
          width: 30px;
          height: 30px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: #fff;
          flex-shrink: 0;
        }

        .section-title-text {
          font-size: 0.82rem;
          font-weight: 700;
          color: #1a2332;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .section-line {
          flex: 1;
          height: 1px;
          background: linear-gradient(90deg, #e2e8f0, transparent);
        }

        /* Skills in Main Content */
        .skills-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .skill-category {
          background: #f8fafb;
          border: 1px solid #eef2f6;
          border-radius: 12px;
          padding: 1.2rem;
        }

        .skill-category-title {
          font-size: 0.7rem;
          font-weight: 700;
          color: #10b981;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          margin-bottom: 0.8rem;
        }

        .skill-item {
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          background: #fff;
          padding: 0.3rem 0.7rem;
          border-radius: 6px;
          font-size: 0.72rem;
          font-weight: 500;
          color: #1a2332;
          margin: 0 0.25rem 0.35rem 0;
          border: 1px solid #e8ecf0;
          transition: all 0.2s;
        }
        .skill-item:hover {
          border-color: #10b981;
          background: #f0fdf4;
        }
        .skill-item svg { font-size: 0.8rem; }

        /* Experience */
        .exp-item {
          margin-bottom: 1.5rem;
          position: relative;
          padding-left: 1.2rem;
        }

        .exp-item::before {
          content: '';
          position: absolute;
          left: 0;
          top: 8px;
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #10b981;
          box-shadow: 0 0 0 3px rgba(16,185,129,0.15);
        }

        .exp-item::after {
          content: '';
          position: absolute;
          left: 3px;
          top: 20px;
          width: 1px;
          bottom: -8px;
          background: #e8ecf0;
        }

        .exp-item:last-child::after { display: none; }

        .exp-top-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.3rem;
          margin-bottom: 0.1rem;
        }

        .exp-title {
          font-size: 0.95rem;
          font-weight: 700;
          color: #1a2332;
          letter-spacing: -0.01em;
        }

        .exp-type {
          font-size: 0.6rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          background: rgba(16,185,129,0.08);
          color: #10b981;
        }

        .exp-sub-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 0.2rem;
          margin-bottom: 0.4rem;
        }

        .exp-company {
          font-size: 0.82rem;
          color: #4a5a6e;
          font-weight: 500;
        }

        .exp-meta {
          font-size: 0.7rem;
          color: #8a9aa8;
          display: flex;
          align-items: center;
          gap: 0.7rem;
        }

        .exp-meta span { display: flex; align-items: center; gap: 0.25rem; }
        .exp-meta svg { font-size: 0.6rem; }

        .exp-list {
          list-style: none;
          padding: 0;
        }

        .exp-list li {
          font-size: 0.8rem;
          color: #5a6a7a;
          line-height: 1.65;
          padding-left: 1rem;
          position: relative;
          margin-bottom: 0.15rem;
        }

        .exp-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.5rem;
          width: 4px;
          height: 4px;
          border-radius: 1px;
          background: #b0bcc8;
          transform: rotate(45deg);
        }

        /* Projects */
        .project-card {
          background: #f8fafb;
          border: 1px solid #eef2f6;
          border-radius: 12px;
          padding: 1.1rem 1.2rem;
          margin-bottom: 0.7rem;
          transition: all 0.3s;
        }
        .project-card:hover {
          border-color: #d0d8e0;
          box-shadow: 0 4px 16px rgba(0,0,0,0.04);
        }
        .project-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #1a2332;
          margin-bottom: 0.2rem;
        }
        .project-desc {
          font-size: 0.78rem;
          color: #6a7a8a;
          line-height: 1.6;
          margin-bottom: 0.5rem;
        }
        .project-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.3rem;
        }
        .project-tech-tag {
          font-size: 0.62rem;
          font-weight: 600;
          color: #10b981;
          background: rgba(16,185,129,0.08);
          padding: 0.15rem 0.5rem;
          border-radius: 4px;
          border: 1px solid rgba(16,185,129,0.1);
        }

        /* Education */
        .edu-card {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
          background: #f8fafb;
          border: 1px solid #eef2f6;
          border-radius: 12px;
          padding: 1.1rem 1.2rem;
        }
        .edu-icon-wrap {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(59,130,246,0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #3b82f6;
          font-size: 1rem;
          flex-shrink: 0;
        }
        .edu-degree {
          font-size: 0.9rem;
          font-weight: 700;
          color: #1a2332;
        }
        .edu-school {
          font-size: 0.8rem;
          color: #4a5a6e;
          font-weight: 500;
        }
        .edu-period {
          font-size: 0.7rem;
          color: #8a9aa8;
        }
        .edu-desc {
          font-size: 0.75rem;
          color: #6a7a8a;
          line-height: 1.6;
          margin-top: 0.2rem;
        }

        /* ─── FAB ─── */
        .fab-group {
          position: fixed;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          z-index: 100;
          opacity: 0;
          transform: translateY(12px);
          transition: all 0.3s cubic-bezier(0.22,1,0.36,1);
          pointer-events: none;
        }
        .fab-group.visible {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .fab-btn {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1rem;
          transition: all 0.25s;
          box-shadow: 0 4px 16px rgba(0,0,0,0.2);
        }
        .fab-top {
          background: #10b981;
          color: #fff;
        }
        .fab-top:hover { background: #059669; transform: scale(1.05); }

        /* ─── PRINT OPTIMIZATION ─── */
        @media print {
          @page {
            size: A4;
            margin: 12mm;
          }
          
          body {
            background: #fff !important;
            zoom: 0.92;
          }
          
          .cv-page { padding: 0; }
          .fab-group { display: none !important; }
          .cv-container {
            box-shadow: none;
            border-radius: 0;
            max-width: 100%;
          }
          .sidebar, .skill-category, .project-card, .edu-card, .skill-item,
          .lang-level, .section-icon, .exp-type, .profile-image {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .project-card:hover { transform: none; box-shadow: none; }
          .exp-item::after { display: none; }
        }

        /* ─── RESPONSIVE ─── */
        @media (max-width: 900px) {
          .cv-container {
            grid-template-columns: 1fr;
            border-radius: 12px;
          }
          .sidebar { padding: 2rem 1.5rem; }
          .main-content { padding: 2rem 1.5rem; }
          .skills-grid { grid-template-columns: 1fr; }
        }

        @media (max-width: 550px) {
          .cv-page { padding: 0.75rem; }
          .cv-container { border-radius: 10px; }
          .main-content { padding: 1.5rem 1.2rem; }
          .edu-card { flex-direction: column; }
          .skills-grid { grid-template-columns: 1fr; gap: 0.75rem; }
        }
      `}</style>

      <div className="cv-page">
        {/* ─── CV CONTAINER ─── */}
        <div className="cv-container">

          {/* ══════ SIDEBAR ══════ */}
          <div className="sidebar">
            <div className="profile-image">
              <img src={profile.image} alt={profile.name} />
            </div>
            <div className="sidebar-name">{profile.name}</div>
            <div className="sidebar-title">{profile.title}</div>
            <div className="sidebar-tagline">Building products that scale</div>
            <div className="sidebar-divider" />

            {/* Bio */}
            <div className="sidebar-section">
              <div className="sidebar-section-title"><FaUser /> About</div>
              <p className="sidebar-bio">{profile.bio}</p>
            </div>

            {/* Contact */}
            <div className="sidebar-section">
              <div className="sidebar-section-title"><FaEnvelope /> Contact</div>
              <div className="contact-item">
                <FaEnvelope className="ci-icon" />
                <span>{profile.email}</span>
              </div>
              <div className="contact-item">
                <FaPhone className="ci-icon" />
                <span>{profile.phone}</span>
              </div>
              <div className="contact-item">
                <FaWhatsapp className="ci-icon" />
                <span>+977 9825995421</span>
              </div>
              <div className="contact-item">
                <FaMapMarkerAlt className="ci-icon" />
                <span>{profile.location}</span>
              </div>
              <div className="contact-item">
                <FaGlobe className="ci-icon" />
                <a href="https://github.com/anujsmit" target="_blank" rel="noopener noreferrer" style={{ color: '#8a9aa8', textDecoration: 'none' }}>
                  {profile.github}
                </a>
              </div>
            </div>

            {/* Languages */}
            <div className="sidebar-section">
              <div className="sidebar-section-title"><FaGlobe /> Languages</div>
              {languages.map(lang => (
                <div key={lang.name} style={{ marginBottom: "0.5rem" }}>
                  <div className="lang-row">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                  <div className="lang-bar-bg">
                    <div className="lang-bar-fill" style={{ width: `${lang.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            {/* Certifications */}
            <div className="sidebar-section">
              <div className="sidebar-section-title"><FaAward /> Certifications</div>
              {certifications.map(cert => (
                <div key={cert} className="cert-item">{cert}</div>
              ))}
            </div>

            {/* Interests */}
            <div className="sidebar-section">
              <div className="sidebar-section-title"><FaHeart /> Interests</div>
              {interests.map(i => (
                <span key={i} className="interest-tag">{i}</span>
              ))}
            </div>

            {/* Social */}
            <div className="sidebar-section">
              <div className="sidebar-section-title"><FaUsers /> Social</div>
              <div className="social-row">
                <a href="https://github.com/anujsmit" target="_blank" rel="noopener" className="social-icon"><FaGithub /></a>
                <a href="https://linkedin.com/in/anujkattel" target="_blank" rel="noopener" className="social-icon"><FaLinkedin /></a>
                <a href="mailto:anujkattel62@gmail.com" className="social-icon"><FaEnvelope /></a>
                <a href="https://wa.me/9779825995421" target="_blank" rel="noopener" className="social-icon"><FaWhatsapp /></a>
              </div>
            </div>
          </div>

          {/* ══════ MAIN CONTENT ══════ */}
          <div className="main-content">

            {/* Skills - Moved to Main Content */}
            <Reveal>
              <div className="section-header">
                <div className="section-icon" style={{ background: "linear-gradient(135deg, #8b5cf6, #7c3aed)" }}>
                  <FaCode />
                </div>
                <span className="section-title-text">Skills</span>
                <div className="section-line" />
              </div>
              <div className="skills-grid">
                {Object.entries(skills).map(([category, items]) => (
                  <div key={category} className="skill-category">
                    <div className="skill-category-title">{category}</div>
                    {items.map(skill => (
                      <span key={skill} className="skill-item">
                        {techIconMap[skill]}
                        {skill}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Work Experience */}
            <Reveal delay={100}>
              <div className="section-header">
                <div className="section-icon" style={{ background: "linear-gradient(135deg, #10b981, #059669)" }}>
                  <FaBriefcase />
                </div>
                <span className="section-title-text">Work Experience</span>
                <div className="section-line" />
              </div>
            </Reveal>

            {workExperience.map((exp, i) => (
              <Reveal key={i} delay={150 + i * 100}>
                <div className="exp-item">
                  <div className="exp-top-row">
                    <span className="exp-title">{exp.title}</span>
                    <span className="exp-type">{exp.type}</span>
                  </div>
                  <div className="exp-sub-row">
                    <span className="exp-company">{exp.company}</span>
                    <div className="exp-meta">
                      <span><FaCalendarAlt /> {exp.period}</span>
                      <span><FaMapMarkerAlt /> {exp.location}</span>
                    </div>
                  </div>
                  <ul className="exp-list">
                    {exp.achievements.map((a, j) => (
                      <li key={j}>{a}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}

            {/* Key Projects */}
            <Reveal delay={100}>
              <div className="section-header">
                <div className="section-icon" style={{ background: "linear-gradient(135deg, #8b5cf6, #7c3aed)" }}>
                  <FaLayerGroup />
                </div>
                <span className="section-title-text">Key Projects</span>
                <div className="section-line" />
              </div>
            </Reveal>

            {projects.map((p, i) => (
              <Reveal key={i} delay={150 + i * 80}>
                <div className="project-card">
                  <div className="project-name">{p.name}</div>
                  <div className="project-desc">{p.desc}</div>
                  <div className="project-tech">
                    {p.tech.map(t => (
                      <span key={t} className="project-tech-tag">{t}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}

            {/* Education */}
            <Reveal delay={100}>
              <div className="section-header">
                <div className="section-icon" style={{ background: "linear-gradient(135deg, #3b82f6, #2563eb)" }}>
                  <FaGraduationCap />
                </div>
                <span className="section-title-text">Education</span>
                <div className="section-line" />
              </div>
            </Reveal>

            {education.map((edu, i) => (
              <Reveal key={i} delay={150}>
                <div className="edu-card">
                  <div className="edu-icon-wrap"><FaGraduationCap /></div>
                  <div>
                    <div className="edu-degree">{edu.degree}</div>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.2rem" }}>
                      <span className="edu-school">{edu.school} · {edu.location}</span>
                      <span className="edu-period">{edu.period}</span>
                    </div>
                    <p className="edu-desc">{edu.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}

          </div>
        </div>
      </div>

      {/* ─── FLOATING ACTION BUTTONS ─── */}
      <div className={`fab-group ${showFab ? "visible" : ""}`}>
        <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fab-btn fab-top" title="Back to top">
          <FaArrowUp />
        </button>
      </div>
    </>
  );
}