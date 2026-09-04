// Pages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa';

function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        {/* Decorative elements */}
        <div className="notfound-deco notfound-deco-1"></div>
        <div className="notfound-deco notfound-deco-2"></div>
        <div className="notfound-deco notfound-deco-3"></div>

        {/* 404 Number */}
        <div className="notfound-error-number">
          <span className="notfound-number">4</span>
          <span className="notfound-zero">0</span>
          <span className="notfound-number">4</span>
        </div>

        {/* Message */}
        <h1 className="notfound-title">Page Not Found</h1>
        <p className="notfound-description">
          Oops! The page you're looking for seems to have gone on vacation.
          <br />
          Let's get you back on track.
        </p>

        {/* Search suggestion */}
        <div className="notfound-search">
          <FaSearch className="notfound-search-icon" />
          <span>Try checking the URL or use the navigation menu</span>
        </div>

        {/* Buttons */}
        <div className="notfound-buttons">
          <Link to="/" className="notfound-btn notfound-btn-primary">
            <FaHome className="notfound-btn-icon" />
            Back to Home
          </Link>
          <Link to="/" className="notfound-btn notfound-btn-secondary">
            <FaArrowLeft className="notfound-btn-icon" />
            Go Back
          </Link>
        </div>

        {/* Footer message */}
        <p className="notfound-footer">
          Need help? <a href="mailto:anujkattel62@gmail.com" className="notfound-email-link">Contact me</a>
        </p>
      </div>
    </div>
  );
}

export default NotFound;