import React, { useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaExternalLinkAlt,
  FaGithub,
  FaServer,
  FaDatabase,
  FaLayerGroup,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiSupabase,
  SiPostgresql,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

/* =========================================================
   PROJECT DATA
========================================================= */

const projects = [
  {
    id: "servex",
    number: "01",
    name: "ServeX",
    type: "Service Marketplace",
    category: "Full Stack",
    featured: true,
    description:
      "A service marketplace connecting customers with nearby verified professionals such as plumbers, electricians, cleaners and technicians.",
    longDescription:
      "ServeX is designed to simplify the process of finding and connecting with reliable local service professionals. The platform focuses on discovery, service management, business operations and a smooth customer experience.",
    technologies: [
      { name: "React Native", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> },
    ],
    features: [
      "Service provider discovery",
      "Customer and professional accounts",
      "Multi-business support",
      "Real-time analytics",
      "Service management",
      "Scalable backend architecture",
    ],
    stats: [
      ["Platform", "Web + Mobile"],
      ["Architecture", "Full Stack"],
      ["Database", "PostgreSQL"],
    ],
    github: "https://github.com/anujsmit",
    live: "https://play.google.com/store/apps/details?id=com.laayo.servexapp&hl=en_IN",
  },
  {
    id: "digital-khata",
    number: "02",
    name: "Digital Khata",
    type: "Business Management",
    category: "Business",
    featured: false,
    description:
      "A business management platform for customers, credit records, inventory, billing and business reporting.",
    longDescription:
      "Digital Khata helps businesses manage their day-to-day operations from a centralized platform. It combines customer records, credit management, inventory and billing into a simple workflow.",
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Firebase", icon: <SiFirebase /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
    features: [
      "Customer management",
      "Credit / khata records",
      "Inventory management",
      "Billing system",
      "Business reporting",
      "Responsive dashboard",
    ],
    stats: [
      ["Platform", "Web"],
      ["Architecture", "Full Stack"],
      ["Focus", "Business"],
    ],
    github: "https://github.com/anujsmit",
    live: "#",
  },
];

const categories = ["All", "Full Stack", "Business"];

/* =========================================================
   TECHNOLOGY ITEM
========================================================= */

function Technology({ technology }) {
  return (
    <span className="project-tech">
      {technology.icon}
      {technology.name}
    </span>
  );
}

/* =========================================================
   PROJECT CARD
========================================================= */

function ProjectCard({ project }) {
  return (
    <article className={`project-card ${project.featured ? "featured" : ""}`}>
      {/* Card Visual / Mockup Section */}
      <div className="card-visual">
        <div className="visual-grid" />
        <span className="visual-badge">{project.number}</span>

        <div className="visual-window">
          <div className="window-header">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="window-address">{project.name.toLowerCase()}.app</div>
          </div>

          <div className="window-content">
            <div className="window-sidebar">
              <div className="sidebar-logo">{project.name.charAt(0)}</div>
              <span />
              <span />
              <span />
              <span />
            </div>

            <div className="window-main">
              <div className="window-heading">
                <div>
                  <div className="skeleton-title" />
                  <div className="skeleton-small" />
                </div>
                <div className="skeleton-button" />
              </div>

              <div className="window-stats">
                <div>
                  <span />
                  <strong />
                </div>
                <div>
                  <span />
                  <strong />
                </div>
                <div>
                  <span />
                  <strong />
                </div>
              </div>

              <div className="window-chart">
                <div className="chart-line line-one" />
                <div className="chart-line line-two" />
                <div className="chart-line line-three" />
              </div>

              <div className="window-table">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>

        <div className="visual-tags">
          <span>{project.category}</span>
          <span>{project.type}</span>
        </div>
      </div>

      {/* Card Content */}
      <div className="card-content">
        <div className="card-header">
          <div>
            <span className="card-category">{project.category}</span>
            <h2>{project.name}</h2>
          </div>
          <span className="card-number">{project.number}</span>
        </div>

        <p className="card-description">{project.description}</p>
        <p className="card-long-description">{project.longDescription}</p>

        {/* STATS */}
        <div className="card-stats">
          {project.stats.map(([label, value]) => (
            <div className="card-stat" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div className="card-features">
          <span className="features-label">Highlights</span>
          <ul>
            {project.features.map((feature) => (
              <li key={feature}>
                <FaCheck />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* TECHNOLOGIES */}
        <div className="card-technologies">
          {project.technologies.map((technology) => (
            <Technology key={technology.name} technology={technology} />
          ))}
        </div>

        {/* ACTIONS */}
        <div className="card-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="card-button card-button-primary"
          >
            <FaGithub />
            View GitHub
            <FaArrowRight />
          </a>

          <a
            href={project.live}
            className="card-button card-button-secondary"
          >
            <FaExternalLinkAlt />
            Live Project
          </a>
        </div>
      </div>
    </article>
  );
}

/* =========================================================
   PROJECTS PAGE
========================================================= */

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <>
      <style>{`
        /* =====================================================
           ROOT
        ===================================================== */

        .projects-page {
          --green: #08794f;
          --green-dark: #056440;
          --green-soft: #ecfdf5;
          --black: #101828;
          --text: #344054;
          --muted: #667085;
          --line: #e4e7ec;
          --soft: #f8fafc;
          --card-shadow: 0 20px 60px rgba(16, 24, 40, 0.08);
          --card-hover-shadow: 0 30px 80px rgba(16, 24, 40, 0.14);
          min-height: 100vh;
          background: #fff;
          color: var(--black);
          font-family: "Inter", system-ui, -apple-system, sans-serif;
        }

        /* =====================================================
           CONTAINER
        ===================================================== */

        .projects-container {
          width: min(1180px, calc(100% - 48px));
          margin: 0 auto;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .projects-hero {
          position: relative;
          padding: 115px 0 105px;
          border-bottom: 1px solid var(--line);
          background: radial-gradient(circle at 85% 10%, rgba(16, 185, 129, 0.09), transparent 25rem),
            linear-gradient(180deg, #ffffff, #fbfdfc);
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 100px;
          align-items: end;
        }

        .hero-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          color: var(--green);
          font-size: 10px;
          font-weight: 900;
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .hero-eyebrow::before {
          content: "";
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green);
          box-shadow: 0 0 0 5px rgba(16, 185, 129, 0.1);
        }

        .hero-title {
          margin: 22px 0 24px;
          font-size: clamp(52px, 7vw, 84px);
          line-height: 0.94;
          letter-spacing: -0.075em;
          font-weight: 850;
        }

        .hero-title span {
          color: var(--green);
        }

        .hero-description {
          max-width: 650px;
          margin: 0;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.85;
        }

        .hero-side {
          padding-left: 30px;
          border-left: 1px solid #dce6e1;
        }

        .hero-side-label {
          display: block;
          margin-bottom: 12px;
          color: var(--black);
          font-size: 10px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.12em;
        }

        .hero-side p {
          margin: 0;
          max-width: 420px;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.85;
        }

        /* =====================================================
           PROJECT SECTION
        ===================================================== */

        .projects-section {
          padding: 90px 0 120px;
        }

        .projects-toolbar {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 30px;
          margin-bottom: 50px;
        }

        .toolbar-label {
          display: block;
          margin-bottom: 9px;
          color: var(--green);
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.13em;
        }

        .toolbar-title {
          margin: 0;
          font-size: 31px;
          line-height: 1.05;
          letter-spacing: -0.05em;
        }

        .toolbar-description {
          margin: 9px 0 0;
          color: var(--muted);
          font-size: 11px;
        }

        /* =====================================================
           FILTERS
        ===================================================== */

        .filters {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }

        .filter {
          border: 1px solid var(--line);
          background: #fff;
          color: var(--muted);
          padding: 9px 13px;
          border-radius: 7px;
          font-family: inherit;
          font-size: 9px;
          font-weight: 800;
          cursor: pointer;
          transition: 0.2s ease;
        }

        .filter:hover {
          border-color: #a9d8c4;
          color: var(--green);
        }

        .filter.active {
          background: var(--green);
          border-color: var(--green);
          color: #fff;
        }

        /* =====================================================
           PROJECT CARDS GRID
        ===================================================== */

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 60px;
        }

        /* =====================================================
           PROJECT CARD
        ===================================================== */

        .project-card {
          display: grid;
          grid-template-columns: 1fr 1fr;
          background: #ffffff;
          border-radius: 24px;
          overflow: hidden;
          border: 1px solid var(--line);
          transition: all 0.4s cubic-bezier(0.2, 0.9, 0.3, 1);
          box-shadow: var(--card-shadow);
        }

        .project-card:hover {
          transform: translateY(-6px);
          box-shadow: var(--card-hover-shadow);
          border-color: #c5d8ce;
        }

        .project-card.featured {
          border-color: #b8d5c6;
          background: linear-gradient(135deg, #ffffff, #fafffd);
        }

        /* =====================================================
           CARD VISUAL
        ===================================================== */

        .card-visual {
          position: relative;
          min-height: 480px;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #f1f8f4;
          padding: 30px;
        }

        .project-card:nth-child(2) .card-visual {
          background: #f1f5ff;
        }

        .visual-grid {
          position: absolute;
          inset: 0;
          opacity: 0.5;
          background-image: linear-gradient(rgba(8, 121, 79, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(8, 121, 79, 0.05) 1px, transparent 1px);
          background-size: 32px 32px;
          mask-image: linear-gradient(to bottom, black, transparent);
        }

        .visual-badge {
          position: absolute;
          top: 24px;
          left: 24px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          padding: 6px 14px;
          border-radius: 30px;
          font-size: 10px;
          font-weight: 900;
          color: var(--black);
          border: 1px solid rgba(255, 255, 255, 0.5);
          z-index: 2;
        }

        .visual-tags {
          position: absolute;
          bottom: 24px;
          left: 24px;
          right: 24px;
          display: flex;
          gap: 8px;
          z-index: 2;
        }

        .visual-tags span {
          padding: 6px 12px;
          border-radius: 30px;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.5);
          font-size: 8px;
          font-weight: 800;
          color: #475467;
          letter-spacing: 0.04em;
        }

        /* =====================================================
           FAKE PRODUCT WINDOW (inside card)
        ===================================================== */

        .visual-window {
          position: relative;
          width: 85%;
          height: 72%;
          overflow: hidden;
          border: 1px solid rgba(16, 24, 40, 0.08);
          border-radius: 14px;
          background: #fff;
          box-shadow: 0 25px 50px rgba(16, 24, 40, 0.12);
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          z-index: 1;
        }

        .project-card:hover .visual-window {
          transform: translateY(-4px) scale(1.01);
          box-shadow: 0 35px 70px rgba(16, 24, 40, 0.18);
        }

        .window-header {
          height: 34px;
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 0 12px;
          border-bottom: 1px solid #eef1f4;
          background: #fff;
        }

        .window-dots {
          display: flex;
          gap: 5px;
        }

        .window-dots span {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #d0d5dd;
        }

        .window-address {
          flex: 1;
          height: 18px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 4px;
          background: #f7f8fa;
          color: #98a2b3;
          font-size: 7px;
          font-weight: 600;
        }

        .window-content {
          display: grid;
          grid-template-columns: 48px 1fr;
          height: calc(100% - 34px);
        }

        .window-sidebar {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding-top: 14px;
          background: #fbfcfd;
          border-right: 1px solid #eef1f4;
        }

        .sidebar-logo {
          width: 22px;
          height: 22px;
          display: grid;
          place-items: center;
          border-radius: 6px;
          background: var(--green);
          color: #fff;
          font-size: 8px;
          font-weight: 900;
        }

        .window-sidebar > span {
          width: 12px;
          height: 12px;
          border-radius: 3px;
          background: #e6e9ed;
        }

        .window-main {
          padding: 16px;
        }

        .window-heading {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 16px;
        }

        .skeleton-title {
          width: 70px;
          height: 7px;
          border-radius: 3px;
          background: #dfe3e7;
          margin-bottom: 6px;
        }

        .skeleton-small {
          width: 110px;
          height: 4px;
          border-radius: 3px;
          background: #edf0f2;
        }

        .skeleton-button {
          width: 34px;
          height: 16px;
          border-radius: 4px;
          background: #eaf7f1;
        }

        .window-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 6px;
          margin-bottom: 12px;
        }

        .window-stats div {
          height: 38px;
          padding: 7px;
          border: 1px solid #eef1f4;
          border-radius: 6px;
          background: #fff;
        }

        .window-stats span {
          display: block;
          width: 24px;
          height: 3px;
          margin-bottom: 6px;
          border-radius: 2px;
          background: #edf0f2;
        }

        .window-stats strong {
          display: block;
          width: 34px;
          height: 5px;
          border-radius: 2px;
          background: #dfe3e7;
        }

        .window-chart {
          position: relative;
          height: 90px;
          overflow: hidden;
          margin-bottom: 10px;
          border: 1px solid #eef1f4;
          border-radius: 6px;
          background: linear-gradient(180deg, #fff, #fafbfc);
        }

        .window-chart::before {
          content: "";
          position: absolute;
          inset: 12px;
          background-image: linear-gradient(#eef1f4 1px, transparent 1px);
          background-size: 100% 24px;
        }

        .chart-line {
          position: absolute;
          left: 10%;
          right: 8%;
          height: 2px;
          background: var(--green);
          transform-origin: left;
          opacity: 0.7;
        }

        .line-one {
          top: 65%;
          transform: rotate(-10deg);
        }

        .line-two {
          top: 55%;
          transform: rotate(6deg);
        }

        .line-three {
          top: 44%;
          transform: rotate(-5deg);
        }

        .window-table {
          display: grid;
          gap: 5px;
        }

        .window-table span {
          height: 5px;
          border-radius: 2px;
          background: #edf0f2;
        }

        .window-table span:nth-child(1) {
          width: 85%;
        }
        .window-table span:nth-child(2) {
          width: 70%;
        }
        .window-table span:nth-child(3) {
          width: 78%;
        }
        .window-table span:nth-child(4) {
          width: 55%;
        }

        /* =====================================================
           CARD CONTENT
        ===================================================== */

        .card-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 40px 45px 40px 40px;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: 20px;
          margin-bottom: 18px;
        }

        .card-category {
          display: block;
          margin-bottom: 8px;
          color: var(--green);
          font-size: 9px;
          font-weight: 900;
          letter-spacing: 0.13em;
          text-transform: uppercase;
        }

        .card-header h2 {
          margin: 0;
          font-size: clamp(32px, 4vw, 48px);
          line-height: 0.95;
          letter-spacing: -0.06em;
          font-weight: 850;
        }

        .card-number {
          color: #d0d5dd;
          font-size: 14px;
          font-weight: 900;
          flex-shrink: 0;
        }

        .card-description {
          max-width: 100%;
          margin: 0 0 12px;
          color: var(--text);
          font-size: 14px;
          line-height: 1.7;
        }

        .card-long-description {
          max-width: 100%;
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.7;
        }

        /* =====================================================
           STATS
        ===================================================== */

        .card-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 8px;
          margin: 24px 0;
          padding: 14px 0;
          border-top: 1px solid var(--line);
          border-bottom: 1px solid var(--line);
        }

        .card-stat span {
          display: block;
          margin-bottom: 4px;
          color: #98a2b3;
          font-size: 7px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .card-stat strong {
          color: var(--text);
          font-size: 10px;
          font-weight: 700;
        }

        /* =====================================================
           FEATURES
        ===================================================== */

        .features-label {
          display: block;
          margin-bottom: 10px;
          color: var(--black);
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .card-features ul {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
          margin: 0;
          padding: 0;
          list-style: none;
        }

        .card-features li {
          display: flex;
          align-items: center;
          gap: 7px;
          color: var(--muted);
          font-size: 10px;
        }

        .card-features li svg {
          flex-shrink: 0;
          color: var(--green);
          font-size: 8px;
        }

        /* =====================================================
           TECHNOLOGIES
        ===================================================== */

        .card-technologies {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 22px;
        }

        .project-tech {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: #fff;
          color: var(--text);
          font-size: 8px;
          font-weight: 800;
          transition: 0.2s ease;
        }

        .project-tech:hover {
          border-color: #9bc0b0;
          background: var(--green-soft);
        }

        .project-tech svg {
          color: var(--green);
          font-size: 12px;
        }

        /* =====================================================
           ACTIONS
        ===================================================== */

        .card-actions {
          display: flex;
          gap: 10px;
          margin-top: 26px;
          flex-wrap: wrap;
        }

        .card-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          min-height: 38px;
          padding: 0 16px;
          border-radius: 30px;
          text-decoration: none;
          font-size: 9px;
          font-weight: 900;
          transition: 0.25s ease;
          letter-spacing: 0.02em;
        }

        .card-button-primary {
          background: var(--green);
          color: #fff;
          box-shadow: 0 4px 12px rgba(8, 121, 79, 0.2);
        }

        .card-button-primary:hover {
          background: var(--green-dark);
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(8, 121, 79, 0.3);
        }

        .card-button-secondary {
          border: 1px solid var(--line);
          background: #fff;
          color: var(--text);
        }

        .card-button-secondary:hover {
          border-color: #b0c8bc;
          background: #f5faf8;
        }

        /* =====================================================
           STACK SECTION
        ===================================================== */

        .stack-section {
          padding: 100px 0;
          border-top: 1px solid var(--line);
          background: var(--soft);
        }

        .stack-heading {
          max-width: 650px;
          margin-bottom: 45px;
        }

        .stack-eyebrow {
          color: var(--green);
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.13em;
        }

        .stack-heading h2 {
          margin: 13px 0;
          font-size: clamp(35px, 5vw, 52px);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .stack-heading p {
          margin: 0;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.8;
        }

        .stack-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1px;
          overflow: hidden;
          border: 1px solid var(--line);
          border-radius: 14px;
          background: var(--line);
        }

        .stack-card {
          min-height: 175px;
          padding: 25px;
          background: #fff;
          transition: 0.2s ease;
        }

        .stack-card:hover {
          background: #f9fcfa;
        }

        .stack-card svg {
          margin-bottom: 22px;
          color: var(--green);
          font-size: 19px;
        }

        .stack-card h3 {
          margin: 0 0 7px;
          font-size: 13px;
        }

        .stack-card p {
          margin: 0;
          color: var(--muted);
          font-size: 10px;
          line-height: 1.7;
        }

        /* =====================================================
           CTA
        ===================================================== */

        .cta-section {
          padding: 90px 0;
        }

        .cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 55px;
          border: 1px solid #d9ebe2;
          border-radius: 18px;
          background: radial-gradient(circle at 90% 20%, rgba(16, 185, 129, 0.12), transparent 18rem),
            linear-gradient(135deg, #f4fbf7, #fff);
        }

        .cta-label {
          color: var(--green);
          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.13em;
        }

        .cta h2 {
          margin: 10px 0;
          font-size: clamp(30px, 4vw, 43px);
          line-height: 1;
          letter-spacing: -0.06em;
        }

        .cta p {
          max-width: 560px;
          margin: 0;
          color: var(--muted);
          font-size: 11px;
          line-height: 1.8;
        }

        .cta-button {
          flex-shrink: 0;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          min-height: 44px;
          padding: 0 16px;
          border-radius: 8px;
          background: var(--green);
          color: #fff;
          text-decoration: none;
          font-size: 9px;
          font-weight: 900;
          transition: 0.2s ease;
        }

        .cta-button:hover {
          background: var(--green-dark);
          transform: translateY(-2px);
        }

        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 1000px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .hero-side {
            max-width: 650px;
            padding: 25px 0 0;
            border-left: 0;
            border-top: 1px solid #dce6e1;
          }

          .project-card {
            grid-template-columns: 1fr;
          }

          .card-visual {
            min-height: 380px;
          }

          .card-content {
            padding: 32px 32px 36px;
          }

          .stack-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .projects-toolbar {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 640px) {
          .projects-container {
            width: calc(100% - 28px);
          }

          .projects-hero {
            padding: 75px 0 65px;
          }

          .projects-section {
            padding: 70px 0 85px;
          }

          .hero-title {
            font-size: 44px;
          }

          .hero-description {
            font-size: 13px;
          }

          .projects-grid {
            gap: 40px;
          }

          .card-visual {
            min-height: 300px;
          }

          .visual-window {
            width: 90%;
            height: 70%;
          }

          .card-content {
            padding: 24px 20px 28px;
          }

          .card-header h2 {
            font-size: 34px;
          }

          .card-stats {
            grid-template-columns: 1fr;
            gap: 12px;
          }

          .card-features ul {
            grid-template-columns: 1fr;
          }

          .card-actions {
            flex-direction: column;
          }

          .card-button {
            width: 100%;
          }

          .stack-grid {
            grid-template-columns: 1fr;
          }

          .cta {
            flex-direction: column;
            align-items: flex-start;
            padding: 35px 28px;
          }

          .cta-button {
            width: 100%;
            justify-content: center;
          }

          .visual-tags {
            left: 16px;
            right: 16px;
            bottom: 16px;
            flex-wrap: wrap;
          }

          .visual-badge {
            top: 16px;
            left: 16px;
            font-size: 8px;
            padding: 4px 10px;
          }
        }
      `}</style>

      <main className="projects-page">
        {/* HERO */}
        <header className="projects-hero">
          <div className="projects-container">
            <div className="hero-grid">
              <div>
                <span className="hero-eyebrow">Selected Work</span>
                <h1 className="hero-title">
                  Things I've
                  <br />
                  <span>built.</span>
                </h1>
                <p className="hero-description">
                  A collection of products and platforms I've worked on — from service
                  marketplaces to business management systems.
                </p>
              </div>

              <aside className="hero-side">
                <span className="hero-side-label">How I build</span>
                <p>
                  I enjoy taking products from an initial idea through architecture,
                  development, testing and deployment. Every project is an opportunity to
                  solve a different problem.
                </p>
              </aside>
            </div>
          </div>
        </header>

        {/* PROJECTS */}
        <section className="projects-section" aria-labelledby="featured-projects-title">
          <div className="projects-container">
            <div className="projects-toolbar">
              <div>
                <span className="toolbar-label">Portfolio</span>
                <h2 className="toolbar-title" id="featured-projects-title">
                  Featured projects
                </h2>
                <p className="toolbar-description">Explore some of my recent work.</p>
              </div>

              <div className="filters" role="tablist" aria-label="Project categories">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={activeCategory === category}
                    className={`filter ${activeCategory === category ? "active" : ""}`}
                    onClick={() => setActiveCategory(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>

        {/* STACK */}
        <section className="stack-section" aria-labelledby="technology-title">
          <div className="projects-container">
            <div className="stack-heading">
              <span className="stack-eyebrow">Technology</span>
              <h2 id="technology-title">
                Built with modern
                <br />
                technologies.
              </h2>
              <p>
                I use a combination of modern frontend, backend, database and
                infrastructure technologies to build reliable products.
              </p>
            </div>

            <div className="stack-grid">
              <article className="stack-card">
                <SiReact />
                <h3>Frontend</h3>
                <p>React, React Native and modern interface technologies.</p>
              </article>

              <article className="stack-card">
                <FaServer />
                <h3>Backend</h3>
                <p>Node.js, REST APIs and scalable server architecture.</p>
              </article>

              <article className="stack-card">
                <FaDatabase />
                <h3>Database</h3>
                <p>PostgreSQL, Supabase and Firebase.</p>
              </article>

              <article className="stack-card">
                <FaLayerGroup />
                <h3>Architecture</h3>
                <p>Full-stack systems designed for maintainability and scale.</p>
              </article>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="projects-container">
            <div className="cta">
              <div>
                <span className="cta-label">Have a project?</span>
                <h2>
                  Let's build something
                  <br />
                  meaningful.
                </h2>
                <p>
                  Have an idea you'd like to turn into a real product? I'm always
                  interested in discussing new ideas, collaborations and opportunities.
                </p>
              </div>

              <a href="/contact" className="cta-button">
                Start a Conversation
                <FaArrowRight />
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;