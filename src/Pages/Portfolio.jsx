import React, { useState, useEffect } from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
} from "react-icons/fa";
import profileImg from "../assets/profile.png";

const profile = {
  name: "Anuj Kattel",
  title: "Full Stack Developer",
  email: "anujkattel62@gmail.com",
  github: "https://github.com/anujsmit",
  linkedin: "https://linkedin.com/in/anujkattel",
  whatsapp: "https://wa.me/9779825995421",
  bio: "I build fast, scalable, and user-focused digital products. Specializing in modern web and mobile applications with clean architecture.",
};

function Portfolio() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = [
    "Full Stack Developer",
    "App Developer",
    "Website Developer",
    "API Developer",
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentRole.length) {
          setDisplayText(currentRole.substring(0, displayText.length + 1));
          setTypingSpeed(150);
        } else {
          setIsDeleting(true);
          setTypingSpeed(2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentRole.substring(0, displayText.length - 1));
          setTypingSpeed(100);
        } else {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(150);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, typingSpeed]);

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <section style={styles.hero}>
        <div style={styles.heroContent}>
          <div style={styles.left}>
            <div style={styles.badge}>
              <span style={styles.badgeDot}></span>
              Available for opportunities
            </div>

            <h1 style={styles.title}>
              Hi, I'm <span style={styles.gradient}>{profile.name}</span>
            </h1>

            <p style={styles.subtitle}>
              <span style={styles.typingCursor}></span>{" "}
              {displayText || "\u00A0"}
              <span style={styles.cursor}>|</span>
            </p>

            <p style={styles.bio}>{profile.bio}</p>

            <div style={styles.buttons}>
              <a
                href="/projects"
                style={{ ...styles.btn, ...styles.btnPrimary }}
                className="portfolio-btn-primary"
              >
                View My Work
                <FaArrowRight
                  style={styles.btnIcon}
                  className="portfolio-btn-icon"
                />
              </a>

              <a
                href={`mailto:${profile.email}`}
                style={{ ...styles.btn, ...styles.btnSecondary }}
                className="portfolio-btn-secondary"
              >
                <FaEnvelope />
                Contact Me
              </a>
            </div>

            <div style={styles.socials}>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                className="portfolio-social-link"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                className="portfolio-social-link"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                style={styles.socialLink}
                className="portfolio-social-link"
              >
                <FaEnvelope size={22} />
              </a>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.socialLink}
                className="portfolio-social-link"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>

            <div style={styles.stats}>
              <div style={styles.stat}>
                <strong style={styles.statValue}>4+</strong>
                <span style={styles.statLabel}>Years Experience</span>
              </div>

              <div style={styles.statDivider}></div>

              <div style={styles.stat}>
                <strong style={styles.statValue}>20+</strong>
                <span style={styles.statLabel}>Projects Built</span>
              </div>

              <div style={styles.statDivider}></div>

              <div style={styles.stat}>
                <strong style={styles.statValue}>8</strong>
                <span style={styles.statLabel}>Countries Served</span>
              </div>
            </div>
          </div>

          <div style={styles.right}>
            <div style={styles.card} className="portfolio-card">
              <div style={styles.cardBadge}>
                <FaCode size={14} />
                <span>Full Stack</span>
              </div>

              <div style={styles.imageWrapper}>
                <img
                  src={profileImg}
                  alt={profile.name}
                  style={styles.image}
                />
              </div>

              <div style={styles.cardFooter}>
                <div>
                  <h3 style={styles.cardName}>{profile.name}</h3>
                  <p style={styles.cardRole}>{profile.title}</p>
                </div>

                <div style={styles.cardStatus}>
                  <span style={styles.statusDot}></span>
                  Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    background: "linear-gradient(135deg, #fafcfa 0%, #f0f7f3 100%)",
    color: "#1a1a1a",
    minHeight: "100vh",
  },

  hero: {
    padding: "40px 20px",
    maxWidth: 1200,
    margin: "0 auto",
  },

  heroContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
    padding: "40px 20px",
    flexWrap: "wrap",
  },

  left: {
    flex: 1,
    minWidth: 300,
    maxWidth: 580,
  },

  right: {
    flex: 1,
    minWidth: 280,
    maxWidth: 420,
  },

  badge: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "rgba(16, 185, 129, 0.1)",
    color: "#0a7a4f",
    padding: "6px 16px 6px 12px",
    borderRadius: 20,
    fontSize: 13,
    fontWeight: 600,
    border: "1px solid rgba(16, 185, 129, 0.2)",
  },

  badgeDot: {
    width: 8,
    height: 8,
    borderRadius: "50%",
    background: "#10b981",
    display: "inline-block",
    animation: "pulse 2s infinite",
  },

  title: {
    fontSize: "clamp(40px, 5vw, 56px)",
    fontWeight: 800,
    margin: "20px 0 8px",
    lineHeight: 1.1,
  },

  gradient: {
    background: "linear-gradient(135deg, #0a7a4f, #10b981)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    fontSize: "clamp(18px, 2vw, 22px)",
    fontWeight: 600,
    color: "#4b5563",
    margin: "0 0 12px",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
  },

  typingCursor: {
    color: "#0a7a4f",
    display: "inline-block",
    animation: "blink 1s step-end infinite",
    marginRight: "4px",
  },

  cursor: {
    color: "#0a7a4f",
    display: "inline-block",
    animation: "blink 1s step-end infinite",
    fontWeight: 300,
    fontSize: "clamp(20px, 2vw, 26px)",
  },

  bio: {
    fontSize: 16,
    color: "#6b7280",
    lineHeight: 1.7,
    marginBottom: 28,
    maxWidth: 480,
  },

  buttons: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
    marginBottom: 28,
  },

  btn: {
    padding: "12px 28px",
    borderRadius: 10,
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 14,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    transition: "all 0.3s ease",
    cursor: "pointer",
  },

  btnPrimary: {
    background: "linear-gradient(135deg, #0a7a4f, #10b981)",
    color: "white",
    boxShadow: "0 4px 15px rgba(16, 185, 129, 0.3)",
    border: "none",
  },

  btnSecondary: {
    background: "white",
    color: "#1a1a1a",
    border: "1px solid #d1d5db",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },

  btnIcon: {
    transition: "transform 0.3s ease",
  },

  socials: {
    display: "flex",
    gap: 12,
    marginBottom: 28,
  },

  socialLink: {
    width: 44,
    height: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    borderRadius: 10,
    color: "#4b5563",
    border: "1px solid #e5e7eb",
    transition: "all 0.3s ease",
    textDecoration: "none",
  },

  stats: {
    display: "flex",
    gap: 32,
    paddingTop: 20,
    borderTop: "1px solid #e5e7eb",
    alignItems: "center",
  },

  stat: {
    display: "flex",
    flexDirection: "column",
  },

  statValue: {
    fontSize: 24,
    fontWeight: 800,
    color: "#0a7a4f",
  },

  statLabel: {
    fontSize: 12,
    color: "#6b7280",
    marginTop: 2,
  },

  statDivider: {
    width: 1,
    height: 30,
    background: "#e5e7eb",
  },

  card: {
    background: "white",
    borderRadius: 24,
    padding: 20,
    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
    border: "1px solid rgba(229, 231, 235, 0.5)",
    position: "relative",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  },

  cardBadge: {
    position: "absolute",
    top: 30,
    right: 30,
    zIndex: 10,
    background: "rgba(16, 185, 129, 0.1)",
    backdropFilter: "blur(10px)",
    padding: "6px 14px",
    borderRadius: 20,
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    fontWeight: 600,
    color: "#0a7a4f",
    border: "1px solid rgba(16, 185, 129, 0.2)",
  },

  imageWrapper: {
    background: "linear-gradient(145deg, #f7fcf9, #e6f6ee)",
    borderRadius: 16,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 380,
    objectFit: "contain",
    objectPosition: "bottom center",
    display: "block",
  },

  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "16px 8px 4px",
  },

  cardName: {
    fontSize: 18,
    fontWeight: 700,
    margin: 0,
  },

  cardRole: {
    fontSize: 13,
    color: "#6b7280",
    margin: "4px 0 0",
  },

  cardStatus: {
    display: "flex",
    alignItems: "center",
    gap: 6,
    fontSize: 12,
    fontWeight: 600,
    color: "#0a7a4f",
    background: "rgba(16, 185, 129, 0.08)",
    padding: "4px 12px",
    borderRadius: 20,
  },

  statusDot: {
    width: 6,
    height: 6,
    borderRadius: "50%",
    background: "#10b981",
    display: "inline-block",
    animation: "pulse 2s infinite",
  },
};

// Inject only required animations and hover styles
const styleSheet = document.createElement("style");

styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% {
      opacity: 1;
    }

    50% {
      opacity: 0.5;
    }
  }

  @keyframes blink {
    0%, 100% {
      opacity: 1;
    }

    50% {
      opacity: 0;
    }
  }

  .portfolio-btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(16, 185, 129, 0.4);
  }

  .portfolio-btn-secondary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }

  .portfolio-social-link:hover {
    transform: translateY(-2px);
    border-color: #0a7a4f;
    color: #0a7a4f;
  }

  .portfolio-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
  }

  .portfolio-btn-primary:hover .portfolio-btn-icon {
    transform: translateX(4px);
  }
`;

document.head.appendChild(styleSheet);

export default Portfolio;
