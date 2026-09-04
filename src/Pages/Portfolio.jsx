// Pages/Portfolio.jsx
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
    <div className="portfolio-container">
      <section className="portfolio-hero">
        <div className="portfolio-hero-content">
          <div className="portfolio-left">
            <div className="portfolio-badge">
              <span className="portfolio-badge-dot"></span>
              Available for opportunities
            </div>

            <h1 className="portfolio-title">
              Hi, I'm <span className="portfolio-title-gradient">{profile.name}</span>
            </h1>

            <p className="portfolio-subtitle">
              <span className="portfolio-typing-cursor">▌</span>
              {displayText || "\u00A0"}
              <span className="portfolio-cursor">|</span>
            </p>

            <p className="portfolio-bio">{profile.bio}</p>

            <div className="portfolio-buttons">
              <a
                href="/projects"
                className="portfolio-btn portfolio-btn-primary"
              >
                View My Work
                <FaArrowRight className="portfolio-btn-icon" />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="portfolio-btn portfolio-btn-secondary"
              >
                <FaEnvelope />
                Contact Me
              </a>
            </div>

            <div className="portfolio-socials">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-social-link"
              >
                <FaGithub size={22} />
              </a>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-social-link"
              >
                <FaLinkedin size={22} />
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="portfolio-social-link"
              >
                <FaEnvelope size={22} />
              </a>

              <a
                href={profile.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="portfolio-social-link"
              >
                <FaWhatsapp size={22} />
              </a>
            </div>

            <div className="portfolio-stats">
              <div className="portfolio-stat">
                <strong className="portfolio-stat-value">4+</strong>
                <span className="portfolio-stat-label">Years Experience</span>
              </div>

              <div className="portfolio-stat-divider"></div>

              <div className="portfolio-stat">
                <strong className="portfolio-stat-value">20+</strong>
                <span className="portfolio-stat-label">Projects Built</span>
              </div>

              <div className="portfolio-stat-divider"></div>

              <div className="portfolio-stat">
                <strong className="portfolio-stat-value">8</strong>
                <span className="portfolio-stat-label">Countries Served</span>
              </div>
            </div>
          </div>

          <div className="portfolio-right">
            <div className="portfolio-card">
              <div className="portfolio-card-badge">
                <FaCode size={14} />
                <span>Full Stack</span>
              </div>

              <div className="portfolio-card-image-wrapper">
                <img
                  src={profileImg}
                  alt={profile.name}
                  className="portfolio-card-image"
                />
              </div>

              <div className="portfolio-card-footer">
                <div>
                  <h3 className="portfolio-card-name">{profile.name}</h3>
                  <p className="portfolio-card-role">{profile.title}</p>
                </div>

                <div className="portfolio-card-status">
                  <span className="portfolio-status-dot"></span>
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

export default Portfolio;