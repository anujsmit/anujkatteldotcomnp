import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { 
  FaGlobe, 
  FaMobileAlt, 
  FaSearch, 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaServer,
  FaDatabase,
  FaCloud,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaAws,
  FaStar,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaHeart,
  FaAward
} from "react-icons/fa";

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: "001",
    slug: "digitalkhata",
    title: "Digital Khata",
    year: "2024",
    description: "Complete business management solution for small businesses in Nepal. Features customer management, transaction tracking, invoice generation, business analytics, and multi-business support with premium plans.",
    tech: ["Flutter", "Node.js", "Supabase", "REST API", "Push Notifications", "Payment Gateway"],
    accent: "#10b981",
    github: "https://github.com/anujsmit",
    liveDemo: "/digitalkhata/",
    features: ["10,000+ Users", "50,000+ Transactions", "4.9 Rating", "Premium Features"]
  }
];

const services = [
  {
    num: "01",
    title: "Full Stack Development",
    desc: "End-to-end web and mobile applications with React, Flutter, Node.js, and modern databases. Scalable architecture ready for growth.",
    tags: ["React", "Flutter", "Node.js", "Supabase"],
    icon: <FaCode />
  },
  {
    num: "02",
    title: "SaaS Development",
    desc: "Build subscription-based platforms with payment integration, user management, analytics, and multi-tenancy support.",
    tags: ["SaaS", "Payments", "Analytics", "Multi-tenant"],
    icon: <FaCloud />
  },
  {
    num: "03",
    title: "API & Backend",
    desc: "Robust RESTful APIs, microservices, database design, authentication, and real-time features with Supabase/Firebase.",
    tags: ["REST API", "Supabase", "Auth", "Real-time"],
    icon: <FaServer />
  }
];

const techStack = ["React", "Flutter", "Node.js", "Supabase", "PostgreSQL", "Firebase", "Docker", "TypeScript", "Tailwind", "Next.js"];

const stats = [
  { value: 10000, suffix: "+", label: "Active Users", icon: <FaUsers /> },
  { value: 50000, suffix: "+", label: "Transactions", icon: <FaChartLine /> },
  { value: 4.9, suffix: "/5", label: "User Rating", icon: <FaStar /> },
  { value: 100, suffix: "%", label: "Data Security", icon: <FaShieldAlt /> }
];

const achievements = [
  { icon: <FaRocket />, title: "Fast Performance", desc: "< 2s load time" },
  { icon: <FaShieldAlt />, title: "Secure", desc: "Bank-level encryption" },
  { icon: <FaHeart />, title: "User Love", desc: "99% satisfaction" },
  { icon: <FaAward />, title: "Top Rated", desc: "4.9/5 stars" }
];

// ─────────────────────────────────────────────────────────────
// REUSABLE COMPONENTS
// ─────────────────────────────────────────────────────────────

const CountUp = ({ target, suffix = "", duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const step = Math.ceil(target / (duration / 16));
          const timer = setInterval(() => {
            start += step;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(start);
            }
          }, 16);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration, hasAnimated]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const SectionTitle = ({ label, title, subtitle }) => (
  <div className="section-title">
    <p className="section-label">{label}</p>
    <h2 className="section-heading">{title}</h2>
    {subtitle && <p className="section-subtitle">{subtitle}</p>}
  </div>
);

// ─────────────────────────────────────────────────────────────
// MAIN PORTFOLIO COMPONENT
// ─────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Anuj Kattel | Full Stack Developer – Creator of Digital Khata</title>
        <meta name="description" content="I'm Anuj Kattel, the creator of Digital Khata. I build high-performance web and mobile applications with React, Flutter, Node.js, and Supabase." />
        <meta name="keywords" content="Anuj Kattel, Digital Khata, Full Stack Developer, React Developer, Flutter Developer, Node.js, Supabase" />
        <meta property="og:title" content="Anuj Kattel | Full Stack Developer & Creator of Digital Khata" />
        <meta property="og:description" content="Building Digital Khata - Nepal's leading business management app. Available for freelance work." />
        <meta property="og:image" content="https://anujkattel.com.np/og-image.jpg" />
        <meta property="og:url" content="https://anujkattel.com.np" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://anujkattel.com.np" />
      </Helmet>

      <div className="portfolio">
        {/* Animated Background Blobs */}
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>

        {/* Progress Bar */}
        <motion.div className="progress-bar" style={{ scaleX, transformOrigin: "0%" }} />

        {/* Header Navigation */}
        <header className={`header ${scrolled ? "header-scrolled" : ""}`}>
          <div className="container header-container">
            <button onClick={() => scrollToSection("hero")} className="logo">
              AK<span className="logo-accent">.</span>
            </button>
            
            <nav className="desktop-nav">
              {["Work", "Services", "Contact"].map((item) => (
                <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="nav-link">
                  {item}
                </button>
              ))}
              <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="btn-hire">
                Hire Me
              </a>
            </nav>

            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn" aria-label="Menu">
              <span className={`menu-line ${mobileMenuOpen ? "open" : ""}`}></span>
              <span className={`menu-line ${mobileMenuOpen ? "open" : ""}`}></span>
              <span className={`menu-line ${mobileMenuOpen ? "open" : ""}`}></span>
            </button>
          </div>

          <AnimatePresence>
            {mobileMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, height: 0 }} 
                animate={{ opacity: 1, height: "auto" }} 
                exit={{ opacity: 0, height: 0 }} 
                className="mobile-nav"
              >
                <div className="mobile-nav-inner">
                  {["Work", "Services", "Contact"].map((item) => (
                    <button key={item} onClick={() => scrollToSection(item.toLowerCase())} className="mobile-nav-link">
                      {item}
                    </button>
                  ))}
                  <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="btn-hire-mobile">Contact Me</a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </header>

        <main>
          {/* Hero Section */}
          <section id="hero" className="hero">
            <div className="container hero-container">
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="hero-badge">
                  <span className="hero-badge-dot"></span>
                  <span>Creator of Digital Khata</span>
                </div>
                <h1 className="hero-title">
                  Hi, I'm <span className="hero-title-accent">Anuj Kattel</span>
                </h1>
                <p className="hero-description">
                  Full-stack developer and creator of <strong>Digital Khata</strong> - Nepal's leading business management app with 10,000+ users. I build scalable applications that solve real business problems.
                </p>
                <div className="hero-buttons">
                  <button onClick={() => scrollToSection("work")} className="btn-primary">
                    View Digital Khata <FaArrowRight />
                  </button>
                  <button onClick={() => scrollToSection("contact")} className="btn-secondary">
                    Let's Talk
                  </button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Stats Section with Icons */}
          <section className="stats">
            <div className="container stats-grid">
              {stats.map((stat, idx) => (
                <div key={idx} className="stat-card">
                  <div className="stat-icon">{stat.icon}</div>
                  <div className="stat-value">
                    <CountUp target={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="stat-label">{stat.label}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Digital Khata Showcase - Special Section */}
          <section className="showcase">
            <div className="container">
              <div className="showcase-card">
                <div className="showcase-badge">⭐ Featured Project</div>
                <h2 className="showcase-title">Digital Khata</h2>
                <p className="showcase-description">
                  Nepal's premier business management application helping thousands of small businesses digitize their operations.
                </p>
                <div className="showcase-stats">
                  <div className="showcase-stat">
                    <div className="showcase-stat-value">10,000+</div>
                    <div className="showcase-stat-label">Active Users</div>
                  </div>
                  <div className="showcase-stat">
                    <div className="showcase-stat-value">50K+</div>
                    <div className="showcase-stat-label">Transactions</div>
                  </div>
                  <div className="showcase-stat">
                    <div className="showcase-stat-value">4.9</div>
                    <div className="showcase-stat-label">⭐ Rating</div>
                  </div>
                </div>
                <div className="showcase-buttons">
                  <a href="/digitalkhata/" className="btn-showcase">
                    Explore Digital Khata <FaArrowRight />
                  </a>
                  <a href="https://github.com/anujsmit" target="_blank" rel="noopener noreferrer" className="btn-showcase-secondary">
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="achievements">
            <div className="container achievements-grid">
              {achievements.map((item, idx) => (
                <div key={idx} className="achievement-card">
                  <div className="achievement-icon">{item.icon}</div>
                  <h3 className="achievement-title">{item.title}</h3>
                  <p className="achievement-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Tech Stack */}
          <section className="tech">
            <div className="container">
              <SectionTitle label="Expertise" title="Technologies I Master" subtitle="Modern tools that power Digital Khata and other scalable applications." />
              <div className="tech-grid">
                {techStack.map((tech) => (
                  <div key={tech} className="tech-item">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="services">
            <div className="container">
              <SectionTitle label="What I Do" title="Core Capabilities" subtitle="End-to-end development services tailored to your business needs." />
              <div className="services-grid">
                {services.map((service) => (
                  <div key={service.num} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <div className="service-num">{service.num}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                    <div className="service-tags">
                      {service.tags.map((tag) => (
                        <span key={tag} className="service-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Work Section - Digital Khata Featured */}
          <section id="work" className="work">
            <div className="container">
              <SectionTitle label="Portfolio" title="Featured Project" subtitle="Digital Khata - A complete business management solution." />
              <div className="work-grid">
                {projects.map((project) => (
                  <div key={project.id} className="work-card">
                    <div className="work-card-header">
                      <div>
                        <span className="work-meta">{project.id} · {project.year}</span>
                        <h3 className="work-title">{project.title}</h3>
                      </div>
                      <div className="work-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="work-link">
                          <FaGithub />
                        </a>
                      </div>
                    </div>
                    <p className="work-description">{project.description}</p>
                    <div className="work-features">
                      {project.features.map((feature, idx) => (
                        <span key={idx} className="work-feature-tag">
                          <FaCheckCircle className="feature-icon" /> {feature}
                        </span>
                      ))}
                    </div>
                    <div className="work-tech">
                      {project.tech.map((t) => (
                        <span key={t} className="work-tech-tag">{t}</span>
                      ))}
                    </div>
                    <div className="work-buttons">
                      <a href={project.liveDemo} className="work-case-link">
                        Explore Digital Khata <FaArrowRight />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="testimonial">
            <div className="container">
              <div className="testimonial-card">
                <FaHeart className="testimonial-icon" />
                <p className="testimonial-text">
                  "Digital Khata has transformed how I manage my business. The app is intuitive, secure, and saves me hours every week."
                </p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">R</div>
                  <div>
                    <div className="testimonial-name">Ram Shrestha</div>
                    <div className="testimonial-role">Store Owner, Kathmandu</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact">
            <div className="container contact-container">
              <SectionTitle label="Get in Touch" title="Start Your Next Project" subtitle="Have an idea? Let's turn it into reality." />
              <div className="contact-card">
                <FaEnvelope className="contact-icon" />
                <h3 className="contact-title">Let's Build Something Great</h3>
                <p className="contact-text">Reach out for a free consultation. I typically respond within 24 hours.</p>
                <div className="contact-buttons">
                  <a href="mailto:anujkattel62@gmail.com" className="btn-primary">
                    anujkattel62@gmail.com <FaArrowRight />
                  </a>
                  <a href="https://github.com/anujsmit" target="_blank" rel="noopener noreferrer" className="btn-social">
                    <FaGithub /> GitHub
                  </a>
                  <a href="https://linkedin.com/in/anujkattel" target="_blank" rel="noopener noreferrer" className="btn-social">
                    <FaLinkedin /> LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container footer-container">
            <p>© 2026 Anuj Kattel — Creator of Digital Khata</p>
            <div className="footer-links">
              <button onClick={() => scrollToSection("hero")} className="footer-link">Home</button>
              <button onClick={() => scrollToSection("work")} className="footer-link">Projects</button>
              <button onClick={() => scrollToSection("contact")} className="footer-link">Contact</button>
            </div>
          </div>
        </footer>
      </div>

      <style jsx>{`
        /* Reset & Base */
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .portfolio {
          background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
          color: #111827;
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
          min-height: 100vh;
          overflow-x: hidden;
          position: relative;
        }

        ::selection {
          background: #10b981;
          color: white;
        }

        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        /* Animated Background Blobs */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.3;
          animation: blob 20s infinite;
          pointer-events: none;
          z-index: 0;
        }

        .blob-1 {
          width: 300px;
          height: 300px;
          background: #10b981;
          top: 100px;
          left: -100px;
        }

        .blob-2 {
          width: 400px;
          height: 400px;
          background: #3b82f6;
          bottom: 100px;
          right: -100px;
          animation-delay: -5s;
        }

        .blob-3 {
          width: 350px;
          height: 350px;
          background: #8b5cf6;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -10s;
        }

        /* Progress Bar */
        .progress-bar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: linear-gradient(90deg, #10b981, #14b8a6, #06b6d4);
          z-index: 9999;
        }

        /* Header */
        .header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 100;
          transition: all 0.3s ease;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(12px);
        }

        .header-scrolled {
          border-bottom: 1px solid #e5e7eb;
          box-shadow: 0 1px 3px rgba(0,0,0,0.05);
        }

        .header-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 1.5rem;
          max-width: 1280px;
          margin: 0 auto;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          background: none;
          border: none;
          color: #111827;
          cursor: pointer;
        }

        .logo-accent {
          color: #10b981;
        }

        .desktop-nav {
          display: none;
          gap: 2rem;
          align-items: center;
        }

        @media (min-width: 768px) {
          .desktop-nav {
            display: flex;
          }
          .mobile-menu-btn {
            display: none;
          }
        }

        .nav-link {
          background: none;
          border: none;
          color: #4b5563;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: #10b981;
        }

        .btn-hire {
          background: #10b981;
          padding: 0.5rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          color: white;
          text-decoration: none;
          transition: all 0.2s;
        }

        .btn-hire:hover {
          background: #059669;
          transform: translateY(-1px);
        }

        .mobile-menu-btn {
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 8px;
        }

        .menu-line {
          width: 24px;
          height: 2px;
          background: #111827;
          transition: all 0.3s;
        }

        .menu-line.open:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }
        .menu-line.open:nth-child(2) {
          opacity: 0;
        }
        .menu-line.open:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        .mobile-nav {
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .mobile-nav-inner {
          display: flex;
          flex-direction: column;
          padding: 1.5rem;
          gap: 1rem;
        }

        .mobile-nav-link {
          background: none;
          border: none;
          color: #374151;
          font-size: 1rem;
          text-align: left;
          padding: 0.5rem 0;
          cursor: pointer;
        }

        .btn-hire-mobile {
          background: #10b981;
          color: white;
          text-align: center;
          padding: 0.75rem;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 500;
          margin-top: 0.5rem;
        }

        /* Hero Section */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 6rem 0 4rem;
          position: relative;
          z-index: 10;
        }

        .hero-container {
          width: 100%;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: #ecfdf5;
          padding: 0.5rem 1rem;
          border-radius: 9999px;
          margin-bottom: 2rem;
        }

        .hero-badge-dot {
          width: 8px;
          height: 8px;
          background: #10b981;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        .hero-badge span:last-child {
          font-size: 0.75rem;
          color: #059669;
          font-weight: 500;
        }

        .hero-title {
          font-size: clamp(2.5rem, 8vw, 5rem);
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          color: #111827;
        }

        .hero-title-accent {
          background: linear-gradient(135deg, #10b981, #14b8a6);
          background-clip: text;
          -webkit-background-clip: text;
          color: transparent;
        }

        .hero-description {
          font-size: clamp(1rem, 2vw, 1.25rem);
          color: #4b5563;
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 2rem;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .btn-primary, .btn-secondary, .btn-social {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.75rem 1.75rem;
          border-radius: 9999px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-primary {
          background: #10b981;
          color: white;
          border: none;
        }

        .btn-primary:hover {
          background: #059669;
          transform: translateY(-2px);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid #d1d5db;
          color: #374151;
        }

        .btn-secondary:hover {
          background: #f9fafb;
        }

        .btn-social {
          background: #f3f4f6;
          border: 1px solid #e5e7eb;
          color: #374151;
        }

        .btn-social:hover {
          background: #e5e7eb;
        }

        /* Stats Section */
        .stats {
          padding: 4rem 0;
          position: relative;
          z-index: 10;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
        }

        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s;
        }

        .stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          border-color: #10b981;
        }

        .stat-icon {
          font-size: 2rem;
          color: #10b981;
          margin-bottom: 0.5rem;
        }

        .stat-value {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
        }

        @media (min-width: 768px) {
          .stat-value {
            font-size: 2rem;
          }
        }

        .stat-label {
          color: #6b7280;
          font-size: 0.875rem;
          margin-top: 0.25rem;
        }

        /* Showcase Section */
        .showcase {
          padding: 4rem 0;
          position: relative;
          z-index: 10;
        }

        .showcase-card {
          background: linear-gradient(135deg, #10b981, #14b8a6);
          border-radius: 2rem;
          padding: 3rem;
          text-align: center;
          color: white;
        }

        .showcase-badge {
          display: inline-block;
          background: rgba(255,255,255,0.2);
          padding: 0.25rem 1rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          margin-bottom: 1rem;
        }

        .showcase-title {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .showcase-title {
            font-size: 2.5rem;
          }
        }

        .showcase-description {
          max-width: 600px;
          margin: 0 auto 2rem;
          opacity: 0.95;
        }

        .showcase-stats {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-bottom: 2rem;
          flex-wrap: wrap;
        }

        .showcase-stat-value {
          font-size: 1.5rem;
          font-weight: 700;
        }

        .showcase-stat-label {
          font-size: 0.75rem;
          opacity: 0.9;
        }

        .showcase-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-showcase {
          background: white;
          color: #10b981;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .btn-showcase:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        }

        .btn-showcase-secondary {
          background: rgba(255,255,255,0.2);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          text-decoration: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .btn-showcase-secondary:hover {
          background: rgba(255,255,255,0.3);
        }

        /* Achievements */
        .achievements {
          padding: 4rem 0;
          position: relative;
          z-index: 10;
        }

        .achievements-grid {
          display: grid;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .achievements-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .achievement-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.5rem;
          text-align: center;
          transition: all 0.3s;
        }

        .achievement-card:hover {
          transform: translateY(-4px);
          border-color: #10b981;
        }

        .achievement-icon {
          font-size: 2rem;
          color: #10b981;
          margin-bottom: 0.75rem;
        }

        .achievement-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 0.25rem;
        }

        .achievement-desc {
          font-size: 0.75rem;
          color: #6b7280;
        }

        /* Section Titles */
        .section-title {
          margin-bottom: 3rem;
          text-align: center;
        }

        .section-label {
          color: #10b981;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          font-size: 0.7rem;
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .section-heading {
          font-size: clamp(1.75rem, 5vw, 2.5rem);
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .section-subtitle {
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Tech */
        .tech {
          padding: 4rem 0;
          position: relative;
          z-index: 10;
        }

        .tech-grid {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 0.75rem;
        }

        .tech-item {
          background: white;
          border: 1px solid #e5e7eb;
          padding: 0.75rem 1.25rem;
          border-radius: 9999px;
          font-size: 0.875rem;
          transition: all 0.2s;
        }

        .tech-item:hover {
          border-color: #10b981;
          background: #ecfdf5;
          transform: translateY(-2px);
        }

        /* Services */
        .services {
          padding: 4rem 0;
          background: #f9fafb;
          position: relative;
          z-index: 10;
        }

        .services-grid {
          display: grid;
          gap: 1.5rem;
        }

        @media (min-width: 768px) {
          .services-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .service-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.75rem;
          transition: all 0.3s;
        }

        .service-card:hover {
          transform: translateY(-5px);
          border-color: #10b981;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .service-icon {
          font-size: 2rem;
          color: #10b981;
          margin-bottom: 1rem;
        }

        .service-num {
          color: #10b981;
          font-family: monospace;
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .service-title {
          font-size: 1.25rem;
          font-weight: 600;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .service-desc {
          color: #6b7280;
          font-size: 0.875rem;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .service-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .service-tag {
          background: #ecfdf5;
          color: #059669;
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }

        /* Work */
        .work {
          padding: 4rem 0;
          position: relative;
          z-index: 10;
        }

        .work-grid {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .work-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 1.75rem;
          transition: all 0.3s;
        }

        .work-card:hover {
          transform: translateY(-5px);
          border-color: #10b981;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }

        .work-card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          margin-bottom: 1rem;
        }

        .work-meta {
          color: #6b7280;
          font-size: 0.7rem;
          font-family: monospace;
        }

        .work-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-top: 0.25rem;
          color: #111827;
        }

        .work-links {
          display: flex;
          gap: 0.75rem;
        }

        .work-link {
          color: #6b7280;
          transition: color 0.2s;
        }

        .work-link:hover {
          color: #10b981;
        }

        .work-description {
          color: #4b5563;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .work-features {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .work-feature-tag {
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: #ecfdf5;
          color: #059669;
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }

        .feature-icon {
          font-size: 0.6rem;
        }

        .work-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-bottom: 1.25rem;
        }

        .work-tech-tag {
          background: #f3f4f6;
          color: #4b5563;
          font-size: 0.7rem;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
        }

        .work-buttons {
          display: flex;
          gap: 1rem;
        }

        .work-case-link {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #10b981;
          text-decoration: none;
          font-size: 0.875rem;
          font-weight: 500;
          transition: gap 0.2s;
        }

        .work-case-link:hover {
          gap: 0.75rem;
        }

        /* Testimonial */
        .testimonial {
          padding: 4rem 0;
          background: #f9fafb;
          position: relative;
          z-index: 10;
        }

        .testimonial-card {
          background: white;
          border-radius: 1rem;
          padding: 2rem;
          text-align: center;
          max-width: 600px;
          margin: 0 auto;
          border: 1px solid #e5e7eb;
        }

        .testimonial-icon {
          font-size: 2rem;
          color: #10b981;
          margin-bottom: 1rem;
        }

        .testimonial-text {
          color: #4b5563;
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
        }

        .testimonial-avatar {
          width: 48px;
          height: 48px;
          background: #ecfdf5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #10b981;
        }

        .testimonial-name {
          font-weight: 600;
          color: #111827;
        }

        .testimonial-role {
          font-size: 0.75rem;
          color: #6b7280;
        }

        /* Contact */
        .contact {
          padding: 4rem 0;
          position: relative;
          z-index: 10;
        }

        .contact-container {
          text-align: center;
        }

        .contact-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2rem;
        }

        @media (min-width: 768px) {
          .contact-card {
            padding: 3rem;
          }
        }

        .contact-icon {
          font-size: 3rem;
          color: #10b981;
          margin-bottom: 1.5rem;
        }

        .contact-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.75rem;
          color: #111827;
        }

        .contact-text {
          color: #6b7280;
          max-width: 400px;
          margin: 0 auto 2rem;
        }

        .contact-buttons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1rem;
        }

        /* Footer */
        .footer {
          border-top: 1px solid #e5e7eb;
          padding: 2rem 0;
          background: white;
          position: relative;
          z-index: 10;
        }

        .footer-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          text-align: center;
        }

        @media (min-width: 768px) {
          .footer-container {
            flex-direction: row;
            justify-content: space-between;
          }
        }

        .footer-links {
          display: flex;
          gap: 1.5rem;
        }

        .footer-link {
          background: none;
          border: none;
          color: #6b7280;
          cursor: pointer;
          transition: color 0.2s;
        }

        .footer-link:hover {
          color: #10b981;
        }
      `}</style>
    </>
  );
}