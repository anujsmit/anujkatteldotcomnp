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