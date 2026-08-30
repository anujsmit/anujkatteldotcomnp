import React from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaCheck,
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";

import {
  SiDocker,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiGraphql,
  SiPrisma,
  SiRedux,
  SiFirebase,
} from "react-icons/si";

const experience = [
  {
    year: "2026",
    role: "Co-founder & Lead Developer",
    company: "ServeX",
    location: "Jhapa, Nepal",
    type: "Startup",
    description:
      "Leading the technical development of ServeX, a service marketplace connecting customers with verified professionals. Building the platform from scratch using modern technologies.",
  },
  {
    year: "2021 — Present",
    role: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    type: "Contract",
    description:
      "Developing web and mobile applications for clients across different projects and industries. Specializing in React, Next.js, and Node.js ecosystems.",
  },
];

const education = [
  {
    year: "2024 — Present",
    degree: "Bachelor of Computer Application (BCA)",
    school: "Sikkim Manipal Institute of Technology",
    location: "India",
  },
  {
    year: "2020 — 2022",
    degree: "SEE",
    school: "Nidi Education & Indreni Campus",
    location: "Nepal",
  },
];

const technologies = [
  { name: "React", icon: <SiReact />, color: "#61DAFB" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
  { name: "Supabase", icon: <SiSupabase />, color: "#3ECF8E" },
  { name: "GraphQL", icon: <SiGraphql />, color: "#E10098" },
  { name: "Prisma", icon: <SiPrisma />, color: "#2D3748" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ED" },
];

const profile = {
  name: "Anuj Kattel",
  email: "anujkattel62@gmail.com",
  github: "https://github.com/anujsmit",
  linkedin: "https://linkedin.com/in/anujkattel",
  whatsapp: "https://wa.me/9779825995421",
};

function About() {
  return (
    <>
      <style>{`
        /* Import Inter font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        .about-page {
          --green: #0a7a4f;
          --green-light: #10b981;
          --green-dark: #056440;
          --green-soft: #ecfdf5;
          --black: #1a1a1a;
          --text: #374151;
          --muted: #6b7280;
          --line: #e5e7eb;
          --soft: #fafcfa;
          --white: #ffffff;

          min-height: 100vh;
          background: var(--white);
          color: var(--black);
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        .about-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
        }

        /* =========================
           HERO SECTION
        ========================= */

        .about-hero {
          padding: 80px 0 60px;
          position: relative;
        }

        .about-hero::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80%;
          height: 1px;
          background: var(--line);
        }

        .about-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(16, 185, 129, 0.1);
          color: var(--green);
          padding: 6px 16px 6px 12px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          border: 1px solid rgba(16, 185, 129, 0.2);
          margin-bottom: 20px;
        }

        .about-badge-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: var(--green-light);
          display: inline-block;
          animation: pulse 2s infinite;
        }

        .about-hero h1 {
          font-size: clamp(48px, 7vw, 72px);
          font-weight: 900;
          line-height: 1.05;
          letter-spacing: -0.04em;
          margin: 0 0 16px;
        }

        .about-hero h1 span {
          background: linear-gradient(135deg, var(--green), var(--green-light));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .about-hero-text {
          max-width: 600px;
          font-size: 18px;
          line-height: 1.7;
          color: var(--muted);
          margin: 0 0 28px;
        }

        .about-info {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .about-info-item {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 18px;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 10px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          transition: all 0.3s ease;
        }

        .about-info-item:hover {
          border-color: var(--green);
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .about-info-item svg {
          color: var(--green);
        }

        .about-socials {
          display: flex;
          gap: 12px;
          margin-top: 28px;
        }

        .about-social-link {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--white);
          border-radius: 12px;
          color: var(--muted);
          border: 1px solid var(--line);
          transition: all 0.3s ease;
          text-decoration: none;
          font-size: 20px;
        }

        .about-social-link:hover {
          transform: translateY(-3px);
          border-color: var(--green);
          color: var(--green);
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        /* =========================
           GENERAL SECTION
        ========================= */

        .about-section {
          padding: 80px 0;
        }

        .about-section.soft {
          background: var(--soft);
        }

        .section-header {
          margin-bottom: 48px;
        }

        .section-number {
          display: inline-block;
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          letter-spacing: 0.1em;
          text-transform: uppercase;
          margin-bottom: 8px;
        }

        .section-header h2 {
          font-size: clamp(36px, 4vw, 48px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0 0 12px;
        }

        .section-header p {
          max-width: 600px;
          font-size: 18px;
          color: var(--muted);
          line-height: 1.7;
          margin: 0;
        }

        /* =========================
           ABOUT CONTENT
        ========================= */

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .about-grid h3 {
          font-size: 28px;
          font-weight: 800;
          letter-spacing: -0.03em;
          margin: 0 0 16px;
          line-height: 1.2;
        }

        .about-grid p {
          font-size: 16px;
          line-height: 1.8;
          color: var(--muted);
          margin: 0 0 16px;
        }

        .about-values {
          display: grid;
          gap: 12px;
          margin-top: 24px;
          padding: 0;
          list-style: none;
        }

        .about-values li {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 15px;
          font-weight: 600;
          color: var(--text);
          padding: 12px 16px;
          background: var(--white);
          border-radius: 10px;
          border: 1px solid var(--line);
          transition: all 0.3s ease;
        }

        .about-values li:hover {
          border-color: var(--green);
          transform: translateX(4px);
        }

        .about-values li svg {
          color: var(--green);
          font-size: 14px;
          flex-shrink: 0;
        }

        /* =========================
           SKILLS
        ========================= */

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 12px;
        }

        .skill-card {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 16px 20px;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 12px;
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          transition: all 0.3s ease;
          cursor: default;
        }

        .skill-card:hover {
          transform: translateY(-4px);
          border-color: var(--green);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .skill-card svg {
          font-size: 24px;
          flex-shrink: 0;
        }

        /* =========================
           EXPERIENCE
        ========================= */

        .experience-list {
          display: grid;
          gap: 40px;
        }

        .experience-item {
          display: grid;
          grid-template-columns: 140px 1fr;
          gap: 40px;
          padding-bottom: 40px;
          border-bottom: 1px solid var(--line);
        }

        .experience-item:last-child {
          border-bottom: none;
          padding-bottom: 0;
        }

        .experience-year {
          font-size: 14px;
          font-weight: 700;
          color: var(--green);
          padding-top: 4px;
        }

        .experience-content {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .experience-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }

        .experience-header h3 {
          font-size: 22px;
          font-weight: 800;
          letter-spacing: -0.02em;
          margin: 0;
        }

        .experience-type {
          padding: 4px 12px;
          background: var(--green-soft);
          color: var(--green-dark);
          border-radius: 6px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
        }

        .experience-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          flex-wrap: wrap;
        }

        .experience-company {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 14px;
          font-weight: 600;
          color: var(--green);
        }

        .experience-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--muted);
        }

        .experience-description {
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
          margin: 4px 0 0;
        }

        /* =========================
           EDUCATION
        ========================= */

        .education-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 20px;
        }

        .education-card {
          padding: 28px;
          background: var(--white);
          border: 1px solid var(--line);
          border-radius: 16px;
          transition: all 0.3s ease;
        }

        .education-card:hover {
          transform: translateY(-4px);
          border-color: var(--green);
          box-shadow: 0 8px 24px rgba(0,0,0,0.06);
        }

        .education-year {
          font-size: 13px;
          font-weight: 700;
          color: var(--green);
          display: block;
          margin-bottom: 8px;
        }

        .education-card h3 {
          font-size: 20px;
          font-weight: 700;
          letter-spacing: -0.02em;
          margin: 0 0 8px;
          line-height: 1.3;
        }

        .education-school {
          font-size: 14px;
          font-weight: 600;
          color: var(--text);
          margin-bottom: 8px;
        }

        .education-location {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          color: var(--muted);
        }

        /* =========================
           CTA
        ========================= */

        .about-cta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 40px;
          padding: 48px;
          background: linear-gradient(135deg, var(--green-soft), var(--white));
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 20px;
        }

        .about-cta-content {
          flex: 1;
        }

        .about-cta .section-number {
          margin-bottom: 4px;
        }

        .about-cta h2 {
          font-size: clamp(32px, 3.5vw, 42px);
          font-weight: 800;
          letter-spacing: -0.04em;
          line-height: 1.1;
          margin: 0 0 8px;
        }

        .about-cta p {
          font-size: 16px;
          color: var(--muted);
          margin: 0;
          max-width: 500px;
        }

        .about-cta-button {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 14px 32px;
          background: linear-gradient(135deg, var(--green), var(--green-light));
          color: var(--white);
          border: none;
          border-radius: 12px;
          font-size: 16px;
          font-weight: 700;
          text-decoration: none;
          transition: all 0.3s ease;
          flex-shrink: 0;
          box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
        }

        .about-cta-button:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
        }

        .about-cta-button svg {
          transition: transform 0.3s ease;
        }

        .about-cta-button:hover svg {
          transform: translateX(4px);
        }

        /* =========================
           ANIMATIONS
        ========================= */

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 1024px) {
          .about-grid {
            gap: 40px;
          }
        }

        @media (max-width: 768px) {
          .about-hero {
            padding: 60px 0 40px;
          }

          .about-hero h1 {
            font-size: 42px;
          }

          .about-hero-text {
            font-size: 16px;
          }

          .about-grid {
            grid-template-columns: 1fr;
            gap: 32px;
          }

          .experience-item {
            grid-template-columns: 1fr;
            gap: 12px;
            padding-bottom: 32px;
          }

          .experience-header {
            flex-direction: column;
            gap: 8px;
          }

          .experience-header h3 {
            font-size: 20px;
          }

          .skills-grid {
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
          }

          .education-grid {
            grid-template-columns: 1fr;
          }

          .about-cta {
            flex-direction: column;
            text-align: center;
            padding: 32px;
          }

          .about-cta p {
            max-width: 100%;
          }

          .about-section {
            padding: 60px 0;
          }

          .section-header h2 {
            font-size: 32px;
          }

          .section-header p {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .about-container {
            padding: 0 16px;
          }

          .about-hero h1 {
            font-size: 34px;
          }

          .about-info-item {
            font-size: 12px;
            padding: 8px 14px;
          }

          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .about-cta {
            padding: 24px;
          }

          .about-cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <main className="about-page">

        {/* HERO SECTION */}
        <section className="about-hero">
          <div className="about-container">
            <div className="about-badge">
              <span className="about-badge-dot"></span>
              About Me
            </div>

            <h1>
              I build things
              <br />
              <span>with purpose.</span>
            </h1>

            <p className="about-hero-text">
              Full Stack Developer passionate about creating 
              scalable, user-focused digital products. I turn 
              ideas into clean, maintainable code.
            </p>

            <div className="about-info">
              <span className="about-info-item">
                <FaCode />
                Full Stack Developer
              </span>

              <span className="about-info-item">
                <FaMapMarkerAlt />
                Nepal
              </span>

              <span className="about-info-item">
                <FaBriefcase />
                Open to opportunities
              </span>
            </div>

            <div className="about-socials">
              <a href={profile.github} target="_blank" rel="noopener noreferrer" className="about-social-link">
                <FaGithub />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="about-social-link">
                <FaLinkedin />
              </a>
              <a href={`mailto:${profile.email}`} className="about-social-link">
                <FaEnvelope />
              </a>
              <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer" className="about-social-link">
                <FaWhatsapp />
              </a>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about-section soft">
          <div className="about-container">
            <div className="section-header">
              <span className="section-number">01 — About</span>
              <h2>More than just code.</h2>
              <p>I enjoy solving real-world problems through practical software solutions.</p>
            </div>

            <div className="about-grid">
              <div>
                <h3>
                  Clean code.
                  <br />
                  Real products.
                </h3>

                <p>
                  I work across frontend development, backend systems, 
                  mobile applications, databases, and deployment. My 
                  focus is on building software that is simple to use, 
                  reliable in production, and easy to maintain.
                </p>

                <ul className="about-values">
                  <li>
                    <FaCheck />
                    Clean and maintainable code
                  </li>

                  <li>
                    <FaCheck />
                    User-focused development
                  </li>

                  <li>
                    <FaCheck />
                    Performance conscious
                  </li>

                  <li>
                    <FaCheck />
                    Continuous learning
                  </li>
                </ul>
              </div>

              <div>
                <h3>How I work</h3>

                <p>
                  I believe in understanding the problem first, then 
                  choosing the right technology and architecture to 
                  solve it effectively.
                </p>

                <p>
                  From an initial idea to a production-ready application, 
                  I enjoy working across the entire product lifecycle — 
                  planning, building, testing, and deploying.
                </p>

                <p>
                  My approach combines technical excellence with clear 
                  communication, ensuring that the final product not 
                  only works well but also meets the user's needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section className="about-section">
          <div className="about-container">
            <div className="section-header">
              <span className="section-number">02 — Toolkit</span>
              <h2>Technologies I use.</h2>
              <p>A practical stack for building modern web, mobile, and backend products.</p>
            </div>

            <div className="skills-grid">
              {technologies.map((tech) => (
                <div className="skill-card" key={tech.name}>
                  <span style={{ color: tech.color }}>{tech.icon}</span>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="about-section soft">
          <div className="about-container">
            <div className="section-header">
              <span className="section-number">03 — Experience</span>
              <h2>Where I've worked.</h2>
            </div>

            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={`${item.company}-${item.role}`}>
                  <div className="experience-year">{item.year}</div>

                  <div className="experience-content">
                    <div className="experience-header">
                      <h3>{item.role}</h3>
                      <span className="experience-type">{item.type}</span>
                    </div>

                    <div className="experience-meta">
                      <span className="experience-company">
                        <FaBriefcase />
                        {item.company}
                      </span>

                      <span className="experience-location">
                        <FaMapMarkerAlt />
                        {item.location}
                      </span>
                    </div>

                    <p className="experience-description">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section className="about-section">
          <div className="about-container">
            <div className="section-header">
              <span className="section-number">04 — Education</span>
              <h2>Academic background.</h2>
            </div>

            <div className="education-grid">
              {education.map((item) => (
                <article className="education-card" key={item.degree}>
                  <span className="education-year">{item.year}</span>
                  <h3>{item.degree}</h3>
                  <div className="education-school">{item.school}</div>
                  <div className="education-location">
                    <FaGraduationCap />
                    {item.location}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="about-section soft">
          <div className="about-container">
            <div className="about-cta">
              <div className="about-cta-content">
                <span className="section-number">Let's Work Together</span>
                <h2>
                  Have an idea?
                  <br />
                  Let's build it.
                </h2>
                <p>
                  I'm open to interesting projects, collaborations, 
                  and opportunities. Let's create something amazing together.
                </p>
              </div>

              <a href="/contact" className="about-cta-button">
                Get In Touch
                <FaArrowRight />
              </a>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}

export default About;