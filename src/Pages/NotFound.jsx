import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaHome, FaSearch } from 'react-icons/fa';

function NotFound() {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        {/* Decorative elements */}
        <div style={styles.decorativeCircle1}></div>
        <div style={styles.decorativeCircle2}></div>
        <div style={styles.decorativeCircle3}></div>

        {/* 404 Number */}
        <div style={styles.errorNumber}>
          <span style={styles.number}>4</span>
          <span style={styles.zero}>0</span>
          <span style={styles.number}>4</span>
        </div>

        {/* Message */}
        <h1 style={styles.title}>Page Not Found</h1>
        <p style={styles.description}>
          Oops! The page you're looking for seems to have gone on vacation.
          <br />
          Let's get you back on track.
        </p>

        {/* Search suggestion */}
        <div style={styles.searchSuggestion}>
          <FaSearch style={styles.searchIcon} />
          <span>Try checking the URL or use the navigation menu</span>
        </div>

        {/* Buttons */}
        <div style={styles.buttonGroup}>
          <Link to="/" style={styles.primaryButton}>
            <FaHome style={styles.buttonIcon} />
            Back to Home
          </Link>
          <Link to="/" style={styles.secondaryButton}>
            <FaArrowLeft style={styles.buttonIcon} />
            Go Back
          </Link>
        </div>

        {/* Footer message */}
        <p style={styles.footerText}>
          Need help? <a href="mailto:anujkattel62@gmail.com" style={styles.emailLink}>Contact me</a>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(135deg, #fafcfa 0%, #f0f7f3 100%)',
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
  },
  content: {
    maxWidth: '600px',
    width: '100%',
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
  },
  decorativeCircle1: {
    position: 'absolute',
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    background: 'rgba(16, 185, 129, 0.05)',
    top: '-150px',
    right: '-150px',
    zIndex: 0,
  },
  decorativeCircle2: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'rgba(16, 185, 129, 0.08)',
    bottom: '-100px',
    left: '-100px',
    zIndex: 0,
  },
  decorativeCircle3: {
    position: 'absolute',
    width: '100px',
    height: '100px',
    borderRadius: '50%',
    background: 'rgba(16, 185, 129, 0.1)',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 0,
  },
  errorNumber: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '20px',
    position: 'relative',
    zIndex: 1,
  },
  number: {
    fontSize: 'clamp(80px, 20vw, 150px)',
    fontWeight: 900,
    color: '#1a1a1a',
    lineHeight: 1,
    textShadow: '0 4px 20px rgba(0,0,0,0.05)',
  },
  zero: {
    fontSize: 'clamp(80px, 20vw, 150px)',
    fontWeight: 900,
    background: 'linear-gradient(135deg, #0a7a4f, #10b981)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    lineHeight: 1,
    textShadow: '0 4px 20px rgba(16, 185, 129, 0.2)',
  },
  title: {
    fontSize: 'clamp(28px, 4vw, 40px)',
    fontWeight: 800,
    color: '#1a1a1a',
    margin: '0 0 16px',
    letterSpacing: '-0.02em',
    position: 'relative',
    zIndex: 1,
  },
  description: {
    fontSize: 'clamp(16px, 1.5vw, 18px)',
    color: '#6b7280',
    lineHeight: 1.7,
    margin: '0 0 24px',
    position: 'relative',
    zIndex: 1,
  },
  searchSuggestion: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '10px',
    padding: '12px 20px',
    background: 'white',
    borderRadius: '12px',
    border: '1px solid #e5e7eb',
    marginBottom: '32px',
    fontSize: '14px',
    color: '#6b7280',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    position: 'relative',
    zIndex: 1,
  },
  searchIcon: {
    color: '#0a7a4f',
    fontSize: '16px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '12px',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginBottom: '32px',
    position: 'relative',
    zIndex: 1,
  },
  primaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    background: 'linear-gradient(135deg, #0a7a4f, #10b981)',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '15px',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 16px rgba(16, 185, 129, 0.3)',
    border: 'none',
    cursor: 'pointer',
  },
  secondaryButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    padding: '14px 32px',
    background: 'white',
    color: '#1a1a1a',
    textDecoration: 'none',
    borderRadius: '12px',
    fontWeight: 600,
    fontSize: '15px',
    transition: 'all 0.3s ease',
    border: '1px solid #e5e7eb',
    boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
    cursor: 'pointer',
  },
  buttonIcon: {
    fontSize: '16px',
  },
  footerText: {
    fontSize: '14px',
    color: '#6b7280',
    margin: 0,
    position: 'relative',
    zIndex: 1,
  },
  emailLink: {
    color: '#0a7a4f',
    textDecoration: 'none',
    fontWeight: 600,
    transition: 'color 0.3s ease',
  },
};

// Add hover effects with CSS
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  .primary-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(16, 185, 129, 0.4);
  }
  
  .secondary-button:hover {
    transform: translateY(-2px);
    border-color: #0a7a4f;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  }
  
  .email-link:hover {
    color: #056440;
    text-decoration: underline;
  }
`;
document.head.appendChild(styleSheet);

export default NotFound;