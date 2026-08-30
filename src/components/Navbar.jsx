import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaCode,
} from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Projects", path: "/projects" },
    { label: "Contact", path: "/contact" },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

  return (
    <>
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <Link
            to="/"
            className="navbar-brand"
            onClick={closeMenu}
            aria-label="Anuj Kattel - Home"
          >
            <span className="navbar-logo">
              <FaCode />
            </span>
            <span className="navbar-name">
              ANUJ KATTEL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`navbar-links ${menuOpen ? "navbar-links-open" : ""}`}
            aria-label="Main navigation"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                className={({ isActive }) =>
                  `navbar-link ${isActive ? "navbar-link-active" : ""}`
                }
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="navbar-menu-button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* CSS Styles */}
      <style>{`
        /* ========== IMPORT FONTS ========== */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');

        /* ========== NAVBAR STYLES ========== */
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(229, 231, 235, 0.3);
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          height: 80px;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }

        .navbar-scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.08);
          height: 72px;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 32px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 100%;
          transition: all 0.3s ease;
        }

        /* ========== BRAND / LOGO ========== */
        .navbar-brand {
          display: flex;
          align-items: center;
          gap: 14px;
          text-decoration: none;
          color: #1a1a1a;
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.02em;
          transition: all 0.3s ease;
          flex-shrink: 0;
        }

        .navbar-brand:hover {
          transform: scale(1.02);
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #0a7a4f, #10b981);
          color: white;
          border-radius: 12px;
          font-size: 20px;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.25);
        }

        .navbar-brand:hover .navbar-logo {
          transform: scale(1.05) rotate(-6deg);
          box-shadow: 0 6px 20px rgba(16, 185, 129, 0.35);
        }

        .navbar-name {
          font-size: 17px;
          font-weight: 800;
          letter-spacing: 0.08em;
          color: #1a1a1a;
          background: linear-gradient(135deg, #1a1a1a, #4b5563);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* ========== DESKTOP NAVIGATION ========== */
        .navbar-links {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .navbar-link {
          position: relative;
          padding: 10px 20px;
          color: #4b5563;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          border-radius: 10px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          letter-spacing: 0.01em;
        }

        .navbar-link:hover {
          color: #0a7a4f;
          background: rgba(16, 185, 129, 0.08);
          transform: translateY(-1px);
        }

        .navbar-link-active {
          color: #0a7a4f;
          background: rgba(16, 185, 129, 0.1);
          font-weight: 700;
        }

        .navbar-link-active::before {
          content: '';
          position: absolute;
          bottom: 6px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 3px;
          background: linear-gradient(90deg, #0a7a4f, #10b981);
          border-radius: 4px;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from {
            width: 0;
            opacity: 0;
          }
          to {
            width: 24px;
            opacity: 1;
          }
        }

        /* ========== MOBILE MENU BUTTON ========== */
        .navbar-menu-button {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          color: #1a1a1a;
          cursor: pointer;
          padding: 10px;
          border-radius: 10px;
          transition: all 0.3s ease;
          width: 48px;
          height: 48px;
          align-items: center;
          justify-content: center;
        }

        .navbar-menu-button:hover {
          background: rgba(16, 185, 129, 0.08);
        }

        .navbar-menu-button svg {
          transition: transform 0.3s ease;
        }

        .navbar-menu-button:hover svg {
          transform: scale(1.1);
        }

        /* ========== MOBILE RESPONSIVE ========== */
        @media (max-width: 768px) {
          .navbar {
            height: 68px;
          }

          .navbar-scrolled {
            height: 64px;
          }

          .navbar-container {
            padding: 0 20px;
          }

          .navbar-name {
            font-size: 14px;
            letter-spacing: 0.06em;
          }

          .navbar-logo {
            width: 38px;
            height: 38px;
            font-size: 17px;
          }

          .navbar-menu-button {
            display: flex;
          }

          .navbar-links {
            position: fixed;
            top: 68px;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(255, 255, 255, 0.98);
            backdrop-filter: blur(20px);
            -webkit-backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 40px 24px 24px;
            gap: 8px;
            transform: translateX(100%);
            transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            overflow-y: auto;
            align-items: stretch;
            border-top: 1px solid rgba(229, 231, 235, 0.3);
          }

          .navbar-links-open {
            transform: translateX(0);
          }

          .navbar-link {
            padding: 16px 24px;
            font-size: 18px;
            width: 100%;
            text-align: center;
            border-radius: 14px;
            font-weight: 600;
            letter-spacing: 0.02em;
          }

          .navbar-link:hover {
            transform: none;
          }

          .navbar-link-active::before {
            display: none;
          }

          .navbar-link-active {
            background: linear-gradient(135deg, #0a7a4f, #10b981);
            color: white;
            box-shadow: 0 4px 16px rgba(16, 185, 129, 0.3);
          }

          .navbar-link-active:hover {
            background: linear-gradient(135deg, #0a7a4f, #10b981);
            color: white;
            box-shadow: 0 4px 20px rgba(16, 185, 129, 0.4);
          }
        }

        @media (max-width: 480px) {
          .navbar {
            height: 60px;
          }

          .navbar-scrolled {
            height: 56px;
          }

          .navbar-container {
            padding: 0 16px;
          }

          .navbar-name {
            font-size: 12px;
            letter-spacing: 0.04em;
          }

          .navbar-logo {
            width: 34px;
            height: 34px;
            font-size: 15px;
            border-radius: 10px;
          }

          .navbar-links {
            top: 60px;
            padding: 24px 16px 16px;
          }

          .navbar-link {
            font-size: 16px;
            padding: 14px 20px;
            border-radius: 12px;
          }
        }

        /* ========== SCROLLBAR STYLING ========== */
        .navbar-links::-webkit-scrollbar {
          width: 4px;
        }

        .navbar-links::-webkit-scrollbar-track {
          background: transparent;
        }

        .navbar-links::-webkit-scrollbar-thumb {
          background: linear-gradient(135deg, #0a7a4f, #10b981);
          border-radius: 4px;
        }

        /* ========== UTILITY ========== */
        @media (min-width: 769px) {
          .navbar-links {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}

export default Navbar;