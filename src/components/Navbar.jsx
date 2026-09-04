import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import profileimg from "../assets/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const [scrolled, setScrolled] = useState(false);

  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme) {
      return savedTheme === "dark";
    }

    return window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
  });

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
      label: "Packages",
      path: "/packages",
    },
    {
      label: "Contact",
      path: "/contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen
      ? "hidden"
      : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const theme = darkMode
      ? "dark"
      : "light";

    document.documentElement.setAttribute(
      "data-theme",
      theme
    );

    localStorage.setItem(
      "theme",
      theme
    );
  }, [darkMode]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode((previous) => !previous);
  };

  return (
    <header
      className={`navbar ${
        scrolled
          ? "navbar-scrolled"
          : ""
      }`}
    >
      <div className="navbar-container">

        {/* Logo */}
        <Link
          to="/"
          className="navbar-brand"
          onClick={closeMenu}
        >
          <div className="navbar-profile">
            <img
              src={profileimg}
              alt="Anuj Kattel"
            />
          </div>

          <span className="navbar-name">
            Anuj Kattel
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={
                item.path === "/"
              }
              onClick={closeMenu}
              className={({
                isActive,
              }) =>
                `navbar-link ${
                  isActive
                    ? "navbar-link-active"
                    : ""
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right Side */}
        <div className="navbar-actions">

          {/* Theme Toggle */}
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              darkMode
                ? "Switch to light theme"
                : "Switch to dark theme"
            }
            title={
              darkMode
                ? "Light mode"
                : "Dark mode"
            }
          >
            {darkMode ? (
              <FaSun />
            ) : (
              <FaMoon />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="navbar-menu-button"
            onClick={() =>
              setMenuOpen(
                (previous) =>
                  !previous
              )
            }
            aria-label={
              menuOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={
              menuOpen
            }
          >
            {menuOpen ? (
              <FaTimes />
            ) : (
              <FaBars />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Overlay */}
      <div
        className={`mobile-overlay ${
          menuOpen
            ? "mobile-overlay-open"
            : ""
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu */}
      <div
        className={`mobile-menu ${
          menuOpen
            ? "mobile-menu-open"
            : ""
        }`}
      >
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            end={
              item.path === "/"
            }
            onClick={closeMenu}
            className={({
              isActive,
            }) =>
              `mobile-link ${
                isActive
                  ? "mobile-link-active"
                  : ""
              }`
            }
          >
            {item.label}
          </NavLink>
        ))}

        {/* Mobile Theme Button */}
        <button
          type="button"
          className="mobile-theme-button"
          onClick={toggleTheme}
        >
          {darkMode ? (
            <>
              <FaSun />
              Light Mode
            </>
          ) : (
            <>
              <FaMoon />
              Dark Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
}

export default Navbar;