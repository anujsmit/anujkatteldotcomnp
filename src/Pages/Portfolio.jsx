import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope,
  FaArrowRight,
  FaCheckCircle,
  FaCode,
  FaServer,
  FaCloud,
  FaStar,
  FaUsers,
  FaChartLine,
  FaShieldAlt,
  FaRocket,
  FaHeart,
  FaAward,
  FaGem,
  FaWhatsapp,
  FaExternalLinkAlt,
  FaLaptopCode,
  FaMobileAlt,
  FaDatabase,
  FaLayerGroup,
  FaTools
} from "react-icons/fa";
import { 
  SiSupabase, 
  SiFlutter, 
  SiTailwindcss, 
  SiNextdotjs, 
  SiPostgresql, 
  SiFirebase, 
  SiDocker, 
  SiTypescript, 
  SiReact, 
  SiNodedotjs 
} from "react-icons/si";

// Simple icon components
const FaBuilding = () => <span>🏢</span>;
const FaCalendarAlt = () => <span>📅</span>;
const FaMapMarkerAlt = () => <span>📍</span>;
const FaBriefcase = () => <span>💼</span>;

// ─────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: "01",
    title: "Digital Khata",
    category: "SaaS Platform",
    year: "2024",
    description: "Complete business management solution for small businesses in Nepal. Features customer management, transaction tracking, invoice generation, business analytics, and multi-business support with premium plans.",
    tech: ["Flutter", "Node.js", "Supabase", "REST API", "Push Notifications"],
    icon: <FaMobileAlt />,
    gradient: "linear-gradient(135deg, #10b981, #059669)",
    github: "https://github.com/anujsmit",
    liveDemo: "/digitalkhata/",
    stats: ["10K+ Users", "50K+ Transactions", "4.9 Rating"]
  }
];

const services = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "Modern, responsive web applications with React, Next.js, and Tailwind CSS.",
    features: ["SPA & SSR", "Responsive Design", "SEO Optimized"]
  },
  {
    icon: <FaMobileAlt />,
    title: "Mobile Development",
    desc: "Cross-platform mobile apps with Flutter for iOS and Android.",
    features: ["Native Performance", "Custom UI/UX", "App Store Ready"]
  },
  {
    icon: <FaServer />,
    title: "Backend Development",
    desc: "Scalable APIs and microservices with Node.js and Supabase.",
    features: ["RESTful APIs", "Real-time Data", "Authentication"]
  },
  {
    icon: <FaDatabase />,
    title: "Database Design",
    desc: "Efficient database architecture with PostgreSQL and Firebase.",
    features: ["Data Modeling", "Optimization", "Security"]
  },
  {
    icon: <FaLayerGroup />,
    title: "SaaS Development",
    desc: "Subscription-based platforms with payment integration.",
    features: ["Payment Gateway", "Multi-tenancy", "Analytics"]
  },
  {
    icon: <FaTools />,
    title: "Technical Consulting",
    desc: "Expert advice on tech stack, architecture, and best practices.",
    features: ["Code Review", "Architecture", "Performance"]
  }
];

const techStack = [
  { name: "React", icon: <SiReact />, color: "#61dafb" },
  { name: "Flutter", icon: <SiFlutter />, color: "#02569b" },
  { name: "Node.js", icon: <SiNodedotjs />, color: "#339933" },
  { name: "Supabase", icon: <SiSupabase />, color: "#3ecf8e" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
  { name: "Firebase", icon: <SiFirebase />, color: "#ffca28" },
  { name: "Docker", icon: <SiDocker />, color: "#2496ed" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "Tailwind", icon: <SiTailwindcss />, color: "#06b6d4" },
  { name: "Next.js", icon: <SiNextdotjs />, color: "#000000" }
];

const stats = [
  { value: 10000, suffix: "+", label: "Active Users", icon: <FaUsers />, color: "#10b981" },
  { value: 50000, suffix: "+", label: "Transactions", icon: <FaChartLine />, color: "#3b82f6" },
  { value: 4.9, suffix: "/5", label: "User Rating", icon: <FaStar />, color: "#f59e0b" },
  { value: 100, suffix: "%", label: "Data Security", icon: <FaShieldAlt />, color: "#ef4444" }
];

const experiences = [
  {
    title: "Founder & Lead Developer",
    company: "Digital Khata",
    period: "2023 - Present",
    location: "Jhapa, Nepal",
    description: "Building Nepal's leading business management platform serving 10,000+ users."
  },
  {
    title: "Full Stack Developer",
    company: "Freelance",
    period: "2021 - Present",
    location: "Remote",
    description: "Delivered 20+ web and mobile applications for clients worldwide."
  }
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
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

// ─────────────────────────────────────────────────────────────
// MAIN PORTFOLIO COMPONENT
// ─────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ["home", "work", "services", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Anuj Kattel | Full Stack Developer – Creator of Digital Khata</title>
        <meta name="description" content="I'm Anuj Kattel, creator of Digital Khata. I build high-performance web and mobile applications." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <div className="portfolio">
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }

          body {
            background: #ffffff;
          }

          .portfolio {
            background: #ffffff;
            color: #1f2937;
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
            min-height: 100vh;
            overflow-x: hidden;
          }

          ::selection {
            background: #10b981;
            color: #ffffff;
          }

          .container {
            max-width: 1280px;
            margin: 0 auto;
            padding: 0 2rem;
          }

          @media (max-width: 768px) {
            .container {
              padding: 0 1.5rem;
            }
          }

          /* Header */
          .header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 100;
            transition: all 0.3s ease;
            padding: 1rem 0;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
          }

          .header.scrolled {
            border-bottom: 1px solid #e5e7eb;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
            padding: 0.75rem 0;
          }

          .header-inner {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }

          .logo {
            display: flex;
            align-items: center;
            gap: 0.75rem;
            background: none;
            border: none;
            cursor: pointer;
          }

          .logo-mark {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, #10b981, #059669);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 700;
            font-size: 1.25rem;
            color: white;
          }

          .logo-text {
            font-size: 1.25rem;
            font-weight: 600;
            color: #1f2937;
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
          }

          .nav-link {
            background: none;
            border: none;
            color: #6b7280;
            font-size: 0.875rem;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            padding: 0.5rem 0;
          }

          .nav-link:hover, .nav-link.active {
            color: #10b981;
          }

          .btn-hire {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #10b981;
            color: white;
            padding: 0.5rem 1.25rem;
            border-radius: 9999px;
            font-size: 0.875rem;
            font-weight: 500;
            text-decoration: none;
            transition: all 0.2s;
          }

          .btn-hire:hover {
            background: #059669;
            transform: translateY(-2px);
          }

          .mobile-menu-btn {
            background: none;
            border: none;
            cursor: pointer;
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          @media (min-width: 768px) {
            .mobile-menu-btn {
              display: none;
            }
          }

          .hamburger {
            width: 24px;
            height: 2px;
            background: #1f2937;
            position: relative;
            transition: all 0.3s;
          }

          .hamburger::before,
          .hamburger::after {
            content: '';
            position: absolute;
            width: 24px;
            height: 2px;
            background: #1f2937;
            transition: all 0.3s;
          }

          .hamburger::before {
            transform: translateY(-8px);
          }

          .hamburger::after {
            transform: translateY(8px);
          }

          .hamburger.open {
            background: transparent;
          }

          .hamburger.open::before {
            transform: rotate(45deg);
          }

          .hamburger.open::after {
            transform: rotate(-45deg);
          }

          .mobile-nav {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: white;
            border-bottom: 1px solid #e5e7eb;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
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
            color: #4b5563;
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
            padding: 8rem 0 4rem;
          }

          .hero-grid {
            display: grid;
            gap: 3rem;
          }

          @media (min-width: 1024px) {
            .hero-grid {
              grid-template-columns: 1fr 1fr;
              align-items: center;
            }
          }

          .hero-badge {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            background: #ecfdf5;
            border: 1px solid #d1fae5;
            padding: 0.5rem 1rem;
            border-radius: 9999px;
            margin-bottom: 1.5rem;
            font-size: 0.875rem;
            color: #059669;
          }

          .badge-dot {
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

          .hero-title {
            font-size: clamp(2rem, 5vw, 3.5rem);
            font-weight: 700;
            line-height: 1.2;
            margin-bottom: 1.5rem;
            color: #1f2937;
          }

          .gradient-text {
            background: linear-gradient(135deg, #10b981, #059669);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
          }

          .hero-description {
            font-size: 1.125rem;
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 2rem;
          }

          .hero-description .highlight {
            color: #10b981;
          }

          .hero-buttons {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 2rem;
          }

          .btn-primary, .btn-outline {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.75rem;
            border-radius: 9999px;
            font-weight: 500;
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

          .btn-outline {
            background: transparent;
            border: 1px solid #d1d5db;
            color: #4b5563;
          }

          .btn-outline:hover {
            background: #f9fafb;
            border-color: #10b981;
            color: #10b981;
          }

          .hero-social {
            display: flex;
            gap: 1rem;
          }

          .hero-social a {
            width: 40px;
            height: 40px;
            display: flex;
            align-items: center;
            justify-content: center;
            background: #f3f4f6;
            border-radius: 50%;
            color: #6b7280;
            transition: all 0.2s;
          }

          .hero-social a:hover {
            background: #10b981;
            color: white;
            transform: translateY(-2px);
          }

          .stats-grid-hero {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
          }

          .stat-card-hero {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 1rem;
            padding: 1.5rem;
            text-align: center;
            transition: all 0.3s;
          }

          .stat-card-hero:hover {
            transform: translateY(-4px);
            border-color: #10b981;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
          }

          .stat-icon-hero {
            width: 50px;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 1rem;
            margin: 0 auto 1rem;
            font-size: 1.5rem;
            color: white;
          }

          .stat-number-hero {
            font-size: 1.75rem;
            font-weight: 700;
            color: #1f2937;
            margin-bottom: 0.25rem;
          }

          .stat-label-hero {
            color: #6b7280;
            font-size: 0.75rem;
          }

          /* Showcase */
          .showcase {
            padding: 4rem 0;
          }

          .showcase-card {
            background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
            border: 1px solid #d1fae5;
            border-radius: 2rem;
            padding: 3rem;
            text-align: center;
          }

          .showcase-icon {
            width: 60px;
            height: 60px;
            background: #d1fae5;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: #10b981;
            margin: 0 auto 1rem;
          }

          .showcase-badge {
            display: inline-block;
            background: #d1fae5;
            color: #059669;
            padding: 0.25rem 1rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            margin-bottom: 1rem;
          }

          .showcase-title {
            font-size: 2rem;
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1f2937;
          }

          @media (min-width: 768px) {
            .showcase-title {
              font-size: 2.5rem;
            }
          }

          .showcase-description {
            max-width: 600px;
            margin: 0 auto 2rem;
            color: #6b7280;
          }

          .showcase-stats {
            display: flex;
            justify-content: center;
            gap: 2rem;
            margin-bottom: 2rem;
            flex-wrap: wrap;
          }

          .showcase-stat-value {
            font-size: 1rem;
            font-weight: 600;
            color: #10b981;
          }

          .showcase-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }

          .btn-showcase, .btn-showcase-secondary {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            padding: 0.75rem 1.5rem;
            border-radius: 9999px;
            font-weight: 600;
            text-decoration: none;
            transition: all 0.2s;
          }

          .btn-showcase {
            background: #10b981;
            color: white;
          }

          .btn-showcase:hover {
            background: #059669;
            transform: translateY(-2px);
          }

          .btn-showcase-secondary {
            background: white;
            border: 1px solid #d1fae5;
            color: #059669;
          }

          .btn-showcase-secondary:hover {
            background: #f0fdf4;
            transform: translateY(-2px);
          }

          /* Section Header */
          .section-header {
            text-align: center;
            margin-bottom: 3rem;
          }

          .section-tag {
            color: #10b981;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 0.7rem;
            font-weight: 600;
            display: inline-block;
            margin-bottom: 1rem;
          }

          .section-title {
            font-size: clamp(1.75rem, 4vw, 2.5rem);
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1f2937;
          }

          .section-subtitle {
            color: #6b7280;
            max-width: 600px;
            margin: 0 auto;
          }

          /* Tech Stack */
          .tech {
            padding: 4rem 0;
          }

          .tech-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 1rem;
          }

          .tech-card {
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            padding: 0.75rem 1.25rem;
            border-radius: 9999px;
            display: flex;
            align-items: center;
            gap: 0.5rem;
            transition: all 0.2s;
            color: #4b5563;
          }

          .tech-card:hover {
            border-color: #10b981;
            transform: translateY(-2px);
            background: #ecfdf5;
          }

          .tech-icon {
            font-size: 1.25rem;
          }

          .tech-name {
            font-size: 0.875rem;
          }

          /* Services */
          .services {
            padding: 4rem 0;
            background: #f9fafb;
          }

          .services-grid {
            display: grid;
            gap: 1.5rem;
          }

          @media (min-width: 768px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }

          @media (min-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(3, 1fr);
            }
          }

          .service-card {
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 1rem;
            padding: 2rem;
            transition: all 0.3s;
          }

          .service-card:hover {
            transform: translateY(-5px);
            border-color: #10b981;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
          }

          .service-icon {
            font-size: 2.5rem;
            color: #10b981;
            margin-bottom: 1rem;
          }

          .service-title {
            font-size: 1.25rem;
            font-weight: 600;
            margin-bottom: 0.75rem;
            color: #1f2937;
          }

          .service-desc {
            color: #6b7280;
            font-size: 0.875rem;
            line-height: 1.6;
            margin-bottom: 1rem;
          }

          .service-features {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
          }

          .service-feature {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
            font-size: 0.7rem;
            color: #10b981;
            background: #ecfdf5;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
          }

          /* Experience */
          .experience {
            padding: 4rem 0;
          }

          .experience-grid {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
            max-width: 800px;
            margin: 0 auto;
          }

          .experience-card {
            display: flex;
            gap: 1rem;
            background: #f9fafb;
            border: 1px solid #e5e7eb;
            border-radius: 1rem;
            padding: 1.5rem;
            transition: all 0.3s;
          }

          .experience-card:hover {
            border-color: #10b981;
          }

          .experience-icon {
            font-size: 1.5rem;
            color: #10b981;
          }

          .experience-content h3 {
            font-size: 1.125rem;
            font-weight: 600;
            margin-bottom: 0.5rem;
            color: #1f2937;
          }

          .experience-meta {
            display: flex;
            flex-wrap: wrap;
            gap: 1rem;
            margin-bottom: 0.75rem;
            font-size: 0.75rem;
            color: #6b7280;
          }

          .experience-meta span {
            display: inline-flex;
            align-items: center;
            gap: 0.25rem;
          }

          .experience-content p {
            color: #6b7280;
            font-size: 0.875rem;
            line-height: 1.6;
          }

          /* Work Section */
          .work {
            padding: 4rem 0;
            background: #f9fafb;
          }

          .work-grid {
            display: flex;
            flex-direction: column;
            gap: 2rem;
            max-width: 900px;
            margin: 0 auto;
          }

          .work-card {
            display: grid;
            gap: 1.5rem;
            background: white;
            border: 1px solid #e5e7eb;
            border-radius: 1.5rem;
            padding: 2rem;
            transition: all 0.3s;
          }

          @media (min-width: 768px) {
            .work-card {
              grid-template-columns: auto 1fr;
            }
          }

          .work-card:hover {
            border-color: #10b981;
            transform: translateY(-5px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
          }

          .work-icon {
            width: 80px;
            height: 80px;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 2rem;
            color: white;
          }

          .work-links {
            display: flex;
            gap: 0.75rem;
            justify-content: flex-end;
          }

          .work-links a {
            color: #6b7280;
            transition: color 0.2s;
          }

          .work-links a:hover {
            color: #10b981;
          }

          .work-meta {
            display: flex;
            gap: 1rem;
            margin-bottom: 0.5rem;
          }

          .work-category {
            font-size: 0.7rem;
            color: #10b981;
            text-transform: uppercase;
            letter-spacing: 0.05em;
          }

          .work-year {
            font-size: 0.7rem;
            color: #6b7280;
          }

          .work-title {
            font-size: 1.5rem;
            font-weight: 700;
            margin-bottom: 0.75rem;
            color: #1f2937;
          }

          .work-description {
            color: #6b7280;
            line-height: 1.6;
            margin-bottom: 1rem;
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

          .work-link-btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
            color: #10b981;
            text-decoration: none;
            font-size: 0.875rem;
            font-weight: 500;
            transition: gap 0.2s;
          }

          .work-link-btn:hover {
            gap: 0.75rem;
          }

          /* Contact Section */
          .contact {
            padding: 4rem 0;
          }

          .contact-card {
            background: linear-gradient(135deg, #ecfdf5, #f0fdf4);
            border: 1px solid #d1fae5;
            border-radius: 2rem;
            padding: 3rem;
            text-align: center;
          }

          .contact-badge {
            display: inline-block;
            background: #d1fae5;
            color: #059669;
            padding: 0.25rem 1rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            margin-bottom: 1rem;
          }

          .contact-title {
            font-size: clamp(1.5rem, 4vw, 2rem);
            font-weight: 700;
            margin-bottom: 1rem;
            color: #1f2937;
          }

          .contact-text {
            color: #6b7280;
            margin-bottom: 2rem;
          }

          .contact-buttons {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
          }

          /* Footer */
          .footer {
            border-top: 1px solid #e5e7eb;
            padding: 2rem 0;
            background: white;
          }

          .footer-inner {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            text-align: center;
          }

          @media (min-width: 768px) {
            .footer-inner {
              flex-direction: row;
              justify-content: space-between;
            }
          }

          .footer-inner p {
            color: #6b7280;
            font-size: 0.875rem;
          }

          .footer-links {
            display: flex;
            gap: 1.5rem;
            flex-wrap: wrap;
          }

          .footer-links button, .footer-links a {
            background: none;
            border: none;
            color: #6b7280;
            cursor: pointer;
            transition: color 0.2s;
            text-decoration: none;
            font-size: 0.875rem;
          }

          .footer-links button:hover, .footer-links a:hover {
            color: #10b981;
          }
        `}</style>

        {/* Header */}
        <header className={`header ${scrolled ? "scrolled" : ""}`}>
          <div className="container">
            <div className="header-inner">
              <button onClick={() => scrollToSection("home")} className="logo">
                <span className="logo-mark">A</span>
                <span className="logo-text">nuj Kattel</span>
              </button>
              
              <nav className="desktop-nav">
                {["home", "work", "services", "contact"].map((item) => (
                  <button 
                    key={item} 
                    onClick={() => scrollToSection(item)} 
                    className={`nav-link ${activeSection === item ? "active" : ""}`}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="btn-hire">
                  Hire Me <FaArrowRight />
                </a>
              </nav>

              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="mobile-menu-btn">
                <span className={`hamburger ${mobileMenuOpen ? "open" : ""}`}></span>
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="mobile-nav">
              <div className="mobile-nav-inner">
                {["home", "work", "services", "contact"].map((item) => (
                  <button key={item} onClick={() => scrollToSection(item)} className="mobile-nav-link">
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </button>
                ))}
                <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }} className="btn-hire-mobile">
                  Hire Me
                </a>
              </div>
            </div>
          )}
        </header>

        <main>
          {/* Hero Section */}
          <section id="home" className="hero">
            <div className="container">
              <div className="hero-grid">
                <div className="hero-content">
                  <div className="hero-badge">
                    <span className="badge-dot"></span>
                    Available for work
                  </div>
                  <h1 className="hero-title">
                    Building digital<br />
                    <span className="gradient-text">experiences that matter</span>
                  </h1>
                  <p className="hero-description">
                    I'm <strong>Anuj Kattel</strong>, creator of <strong className="highlight">Digital Khata</strong> - Nepal's leading business management app with 10,000+ users. I specialize in building scalable web and mobile applications.
                  </p>
                  <div className="hero-buttons">
                    <button onClick={() => scrollToSection("work")} className="btn-primary">
                      View My Work <FaArrowRight />
                    </button>
                    <button onClick={() => scrollToSection("contact")} className="btn-outline">
                      Let's Connect
                    </button>
                  </div>
                  <div className="hero-social">
                    <a href="https://github.com/anujsmit" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://linkedin.com/in/anujkattel" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://wa.me/9779825995421" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
                    <a href="mailto:anujkattel62@gmail.com"><FaEnvelope /></a>
                  </div>
                </div>

                <div className="hero-stats">
                  <div className="stats-grid-hero">
                    {stats.map((stat, idx) => (
                      <div key={idx} className="stat-card-hero">
                        <div className="stat-icon-hero" style={{ background: stat.color }}>{stat.icon}</div>
                        <div className="stat-number-hero"><CountUp target={stat.value} suffix={stat.suffix} /></div>
                        <div className="stat-label-hero">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Digital Khata Showcase */}
          <section className="showcase">
            <div className="container">
              <div className="showcase-card">
                <div className="showcase-icon">
                  <FaGem />
                </div>
                <span className="showcase-badge">Featured Project</span>
                <h2 className="showcase-title">Digital Khata</h2>
                <p className="showcase-description">
                  Nepal's premier business management application helping thousands of small businesses digitize their operations with ease and security.
                </p>
                <div className="showcase-stats">
                  {projects[0].stats.map((stat, idx) => (
                    <div key={idx} className="showcase-stat">
                      <div className="showcase-stat-value">{stat}</div>
                    </div>
                  ))}
                </div>
                <div className="showcase-buttons">
                  <a href="/digitalkhata/" className="btn-showcase">
                    Explore Digital Khata <FaExternalLinkAlt />
                  </a>
                  <a href="https://github.com/anujsmit" target="_blank" rel="noopener noreferrer" className="btn-showcase-secondary">
                    <FaGithub /> View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Tech Stack */}
          <section className="tech">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Tech Stack</span>
                <h2 className="section-title">Technologies I <span className="gradient-text">Master</span></h2>
                <p className="section-subtitle">Modern tools that power Digital Khata and other scalable applications</p>
              </div>
              <div className="tech-grid">
                {techStack.map((tech) => (
                  <div key={tech.name} className="tech-card">
                    <div className="tech-icon" style={{ color: tech.color }}>{tech.icon}</div>
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section id="services" className="services">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">What I Do</span>
                <h2 className="section-title">Services I <span className="gradient-text">Provide</span></h2>
                <p className="section-subtitle">End-to-end development services tailored to your business needs</p>
              </div>
              <div className="services-grid">
                {services.map((service, idx) => (
                  <div key={idx} className="service-card">
                    <div className="service-icon">{service.icon}</div>
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.desc}</p>
                    <div className="service-features">
                      {service.features.map((feature, i) => (
                        <span key={i} className="service-feature">
                          <FaCheckCircle /> {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className="experience">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Experience</span>
                <h2 className="section-title">Work <span className="gradient-text">Journey</span></h2>
              </div>
              <div className="experience-grid">
                {experiences.map((exp, idx) => (
                  <div key={idx} className="experience-card">
                    <div className="experience-icon"><FaBriefcase /></div>
                    <div className="experience-content">
                      <h3>{exp.title}</h3>
                      <div className="experience-meta">
                        <span><FaBuilding /> {exp.company}</span>
                        <span><FaCalendarAlt /> {exp.period}</span>
                        <span><FaMapMarkerAlt /> {exp.location}</span>
                      </div>
                      <p>{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Work Section */}
          <section id="work" className="work">
            <div className="container">
              <div className="section-header">
                <span className="section-tag">Portfolio</span>
                <h2 className="section-title">Featured <span className="gradient-text">Project</span></h2>
              </div>
              <div className="work-grid">
                {projects.map((project) => (
                  <div key={project.id} className="work-card">
                    <div className="work-icon" style={{ background: project.gradient }}>{project.icon}</div>
                    <div className="work-info">
                      <div className="work-links">
                        <a href={project.github} target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                      </div>
                      <div className="work-meta">
                        <span className="work-category">{project.category}</span>
                        <span className="work-year">{project.year}</span>
                      </div>
                      <h3 className="work-title">{project.title}</h3>
                      <p className="work-description">{project.description}</p>
                      <div className="work-tech">
                        {project.tech.map((t) => (
                          <span key={t} className="work-tech-tag">{t}</span>
                        ))}
                      </div>
                      <a href={project.liveDemo} className="work-link-btn">
                        View Project <FaArrowRight />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="contact">
            <div className="container">
              <div className="contact-card">
                <span className="contact-badge">Get in Touch</span>
                <h2 className="contact-title">Let's work <span className="gradient-text">together</span></h2>
                <p className="contact-text">Have a project in mind? I'd love to hear about it.</p>
                <div className="contact-buttons">
                  <a href="mailto:anujkattel62@gmail.com" className="btn-primary">
                    <FaEnvelope /> anujkattel62@gmail.com
                  </a>
                  <a href="https://wa.me/9779825995421" target="_blank" rel="noopener noreferrer" className="btn-outline">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-inner">
              <p>© 2024 Anuj Kattel — Creator of Digital Khata</p>
              <div className="footer-links">
                <button onClick={() => scrollToSection("home")}>Home</button>
                <button onClick={() => scrollToSection("work")}>Work</button>
                <button onClick={() => scrollToSection("contact")}>Contact</button>
                <a href="/digitalkhata/privacy">Privacy</a>
                <a href="/digitalkhata/deleteaccount">Delete Account</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}