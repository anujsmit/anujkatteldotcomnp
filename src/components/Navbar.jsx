import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaArrowDown,
} from "react-icons/fa";

import "./styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Projects",
      path: "/projects",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">

      <div className="navbar-container">

        {/* =================================================
            LOGO
        ================================================= */}

        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
          aria-label="Anuj Kattel - Home"
        >
          <span className="navbar-logo">
            AK
          </span>

          <span className="navbar-name">
            ANUJ KATTEL
          </span>
        </Link>

        {/* =================================================
            DESKTOP / MOBILE NAVIGATION
        ================================================= */}

        <nav
          className={`navbar-links ${
            menuOpen
              ? "navbar-links-open"
              : ""
          }`}
          aria-label="Main navigation"
        >

          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `navbar-link ${
                  isActive
                    ? "navbar-link-active"
                    : ""
                }`
              }
              onClick={closeMenu}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Mobile CV */}

          <a
            href="/Anuj-Kattel-CV.pdf"
            download
            className="navbar-mobile-cv"
            onClick={closeMenu}
          >
            Download CV
            <FaArrowDown />
          </a>

        </nav>

        {/* =================================================
            DESKTOP CV
        ================================================= */}

        <a
          href="/Anuj-Kattel-CV.pdf"
          download
          className="navbar-cv"
        >
          <span>
            Download CV
          </span>

          <FaArrowDown />
        </a>

        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <button
          type="button"
          className="navbar-menu-button"
          onClick={() =>
            setMenuOpen(
              (previous) => !previous
            )
          }
          aria-label={
            menuOpen
              ? "Close navigation"
              : "Open navigation"
          }
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <FaTimes />
          ) : (
            <FaBars />
          )}
        </button>

      </div>

    </header>
  );
}

export default Navbar;