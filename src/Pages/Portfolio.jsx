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
              <span style={styles.typingCursor}>▌</span>
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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px 20px",
  },

  hero: {
    width: "100%",
    maxWidth: 1200,
    margin: "0 auto",
  },

  heroContent: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 60,
    padding: "20px",
    flexWrap: "wrap",
    minHeight: "calc(100vh - 80px)",
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
    padding: "8px 20px 8px 14px",
    borderRadius: 50,
    fontSize: 13,
    fontWeight: 600,
    border: "1px solid rgba(16, 185, 129, 0.2)",
    marginBottom: "8px",
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
    fontSize: "clamp(42px, 5.5vw, 64px)",
    fontWeight: 900,
    margin: "16px 0 8px",
    lineHeight: 1.05,
    letterSpacing: "-0.03em",
  },

  gradient: {
    background: "linear-gradient(135deg, #0a7a4f, #10b981)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },

  subtitle: {
    fontSize: "clamp(20px, 2.5vw, 26px)",
    fontWeight: 700,
    color: "#4b5563",
    margin: "0 0 16px",
    minHeight: "48px",
    display: "flex",
    alignItems: "center",
  },

  typingCursor: {
    color: "#0a7a4f",
    display: "inline-block",
    animation: "blink 1s step-end infinite",
    marginRight: "6px",
    fontSize: "clamp(22px, 2.5vw, 28px)",
    fontWeight: 300,
  },

  cursor: {
    color: "#0a7a4f",
    display: "inline-block",
    animation: "blink 1s step-end infinite",
    fontWeight: 300,
    fontSize: "clamp(22px, 2.5vw, 28px)",
    marginLeft: "2px",
  },

  bio: {
    fontSize: 17,
    color: "#6b7280",
    lineHeight: 1.8,
    marginBottom: 32,
    maxWidth: 480,
  },

  buttons: {
    display: "flex",
    gap: 14,
    flexWrap: "wrap",
    marginBottom: 32,
  },

  btn: {
    padding: "14px 32px",
    borderRadius: 12,
    textDecoration: "none",
    fontWeight: 700,
    fontSize: 15,
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    cursor: "pointer",
    border: "none",
  },

  btnPrimary: {
    background: "linear-gradient(135deg, #0a7a4f, #10b981)",
    color: "white",
    boxShadow: "0 4px 20px rgba(16, 185, 129, 0.35)",
  },

  btnSecondary: {
    background: "white",
    color: "#1a1a1a",
    border: "1.5px solid #e5e7eb",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },

  btnIcon: {
    transition: "transform 0.3s ease",
    fontSize: 16,
  },

  socials: {
    display: "flex",
    gap: 12,
    marginBottom: 32,
  },

  socialLink: {
    width: 48,
    height: 48,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "white",
    borderRadius: 12,
    color: "#4b5563",
    border: "1px solid #e5e7eb",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    textDecoration: "none",
    fontSize: 20,
  },

  stats: {
    display: "flex",
    gap: 40,
    paddingTop: 24,
    borderTop: "1.5px solid #e5e7eb",
    alignItems: "center",
  },

  stat: {
    display: "flex",
    flexDirection: "column",
  },

  statValue: {
    fontSize: 28,
    fontWeight: 900,
    color: "#0a7a4f",
    letterSpacing: "-0.02em",
  },

  statLabel: {
    fontSize: 13,
    color: "#6b7280",
    marginTop: 2,
    fontWeight: 500,
  },

  statDivider: {
    width: 1.5,
    height: 35,
    background: "#e5e7eb",
  },

  card: {
    background: "white",
    borderRadius: 28,
    padding: 24,
    boxShadow: "0 20px 60px rgba(0,0,0,0.08)",
    border: "1px solid rgba(229, 231, 235, 0.5)",
    position: "relative",
    transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
  },

  cardBadge: {
    position: "absolute",
    top: 32,
    right: 32,
    zIndex: 10,
    background: "rgba(16, 185, 129, 0.12)",
    backdropFilter: "blur(12px)",
    WebkitBackdropFilter: "blur(12px)",
    padding: "6px 16px",
    borderRadius: 50,
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 12,
    fontWeight: 700,
    color: "#0a7a4f",
    border: "1px solid rgba(16, 185, 129, 0.2)",
  },

  imageWrapper: {
    background: "linear-gradient(145deg, #f7fcf9, #e6f6ee)",
    borderRadius: 20,
    overflow: "hidden",
  },

  image: {
    width: "100%",
    height: 400,
    objectFit: "contain",
    objectPosition: "bottom center",
    display: "block",
  },

  cardFooter: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 8px 4px",
  },

  cardName: {
    fontSize: 20,
    fontWeight: 800,
    margin: 0,
    letterSpacing: "-0.02em",
  },

  cardRole: {
    fontSize: 14,
    color: "#6b7280",
    margin: "4px 0 0",
    fontWeight: 500,
  },

  cardStatus: {
    display: "flex",
    alignItems: "center",
    gap: 8,
    fontSize: 13,
    fontWeight: 700,
    color: "#0a7a4f",
    background: "rgba(16, 185, 129, 0.1)",
    padding: "6px 16px",
    borderRadius: 50,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: "50%",
    background: "#10b981",
    display: "inline-block",
    animation: "pulse 2s infinite",
  },
};

// Inject animations and hover styles
const styleSheet = document.createElement("style");
styleSheet.textContent = `
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

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
    transform: translateY(-3px);
    box-shadow: 0 8px 30px rgba(16, 185, 129, 0.45);
  }

  .portfolio-btn-primary:active {
    transform: translateY(0);
  }

  .portfolio-btn-secondary:hover {
    transform: translateY(-3px);
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
    border-color: #0a7a4f;
  }

  .portfolio-btn-secondary:active {
    transform: translateY(0);
  }

  .portfolio-social-link:hover {
    transform: translateY(-3px);
    border-color: #0a7a4f;
    color: #0a7a4f;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }

  .portfolio-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
  }

  .portfolio-btn-primary:hover .portfolio-btn-icon {
    transform: translateX(6px);
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .portfolio-card:hover {
      transform: translateY(-3px);
    }
    
    .portfolio-social-link {
      width: 44px;
      height: 44px;
    }
  }

  @media (max-width: 480px) {
    .portfolio-btn-primary,
    .portfolio-btn-secondary {
      width: 100%;
      justify-content: center;
    }
  }
`;

document.head.appendChild(styleSheet);

export default Portfolio;