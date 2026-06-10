import React, { useState, useEffect } from 'react';
import { Trash2, Mail, Clock, Database, User, Building, Receipt, Settings, AlertCircle, ArrowUp, Menu, X, Wallet, Home } from 'lucide-react';

const DeleteAccount = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const dataToDelete = [
    { icon: <User size={16} />, text: "User account information" },
    { icon: <Building size={16} />, text: "Business profile information" },
    { icon: <Users size={16} />, text: "Customer records" },
    { icon: <Receipt size={16} />, text: "Transaction history" },
    { icon: <Settings size={16} />, text: "Application preferences and settings" }
  ];

  return (
    <div className="delete-account-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
          -webkit-font-smoothing: antialiased;
          background: #ffffff;
        }

        .delete-account-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(10px);
          z-index: 1000;
          transition: all 0.3s ease;
          border-bottom: 1px solid #e5e7eb;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          cursor: pointer;
        }

        .logo-icon {
          color: #059669;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: bold;
          color: #1f2937;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-links a {
          text-decoration: none;
          color: #4b5563;
          transition: color 0.2s;
        }

        .nav-links a:hover {
          color: #059669;
        }

        .home-link {
          background: #059669;
          color: white !important;
          padding: 0.5rem 1.25rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }

        .home-link:hover {
          background: #047857;
          transform: translateY(-1px);
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #4b5563;
        }

        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }
          .mobile-menu-btn {
            display: block;
          }
          .nav-container {
            padding: 1rem;
          }
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 300px;
          background: white;
          border-left: 1px solid #e5e7eb;
          transform: translateX(100%);
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 200;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .mobile-menu-items {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 8px;
        }

        .mobile-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px;
          border-radius: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #4b5563;
          font-weight: 500;
          font-size: 0.9rem;
          text-align: left;
          width: 100%;
          transition: all 0.2s;
        }

        .mobile-menu-item:hover {
          background: #f3f4f6;
          color: #059669;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 199;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s;
        }

        .menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* Hero Section */
        .hero {
          padding: 8rem 2rem 4rem;
          background: linear-gradient(135deg, #ecfdf5 0%, #ffffff 100%);
          text-align: center;
        }

        .hero-content {
          max-width: 900px;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 16px;
          background: #ecfdf5;
          border: 1px solid #d1fae5;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #059669;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .hero-description {
          font-size: 1.125rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto;
        }

        /* Content Container */
        .content-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 2rem;
        }

        @media (max-width: 768px) {
          .content-container {
            padding: 2rem 1.5rem;
          }
        }

        /* Cards */
        .info-card {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2rem;
          margin-bottom: 1.5rem;
          transition: all 0.3s;
        }

        .info-card:hover {
          border-color: #d1fae5;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .card-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.5rem;
          font-weight: 700;
          color: #1f2937;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .card-icon {
          width: 44px;
          height: 44px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #ecfdf5;
          border-radius: 12px;
          color: #059669;
        }

        .card-content {
          color: #6b7280;
          line-height: 1.6;
        }

        /* Steps List */
        .steps-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 1rem;
        }

        .step-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          background: #f9fafb;
          border-radius: 12px;
          transition: all 0.2s;
        }

        .step-item:hover {
          background: #f3f4f6;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: #ecfdf5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #059669;
        }

        .step-text {
          color: #4b5563;
        }

        .step-text strong {
          color: #059669;
        }

        /* Data Grid */
        .data-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        @media (min-width: 640px) {
          .data-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .data-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 14px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          color: #4b5563;
          font-size: 0.9rem;
          transition: all 0.2s;
        }

        .data-item:hover {
          border-color: #d1fae5;
          background: #ffffff;
        }

        .data-item svg {
          color: #ef4444;
        }

        /* Contact Card */
        .contact-email {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 24px;
          background: #ecfdf5;
          border: 1px solid #d1fae5;
          border-radius: 12px;
          color: #059669;
          text-decoration: none;
          font-weight: 500;
          margin-top: 1rem;
          transition: all 0.2s;
        }

        .contact-email:hover {
          background: #d1fae5;
          transform: translateY(-2px);
        }

        /* Warning Box */
        .warning-box {
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 1.5rem;
        }

        .warning-text {
          color: #dc2626;
          font-size: 0.875rem;
        }

        /* Footer */
        .footer {
          background: #111827;
          color: white;
          padding: 3rem 2rem;
          margin-top: auto;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: #9ca3af;
        }

        /* Scroll Top Button */
        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 44px;
          height: 44px;
          border-radius: 0.5rem;
          background: #059669;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
          transition: all 0.2s;
          z-index: 100;
          opacity: 0;
          visibility: hidden;
          transform: translateY(8px);
        }

        .scroll-top-btn.visible {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }

        .scroll-top-btn:hover {
          background: #047857;
          transform: translateY(-2px);
        }

        .scroll-top-btn svg {
          color: white;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .hero {
            padding: 6rem 1rem 3rem;
          }
          .hero-title {
            font-size: 2rem;
          }
          .card-title {
            font-size: 1.25rem;
          }
          .content-container {
            padding: 2rem 1rem;
          }
          .info-card {
            padding: 1.5rem;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={scrollToTop}>
            <Wallet className="logo-icon" />
            <span className="logo-text">Digital Khata</span>
          </div>
          <div className="nav-links">
            <a href="/digitalkhata/">Home</a>
            <a href="/digitalkhata/privacy">Privacy</a>
            <a href="/digitalkhata/termsandcondition">Terms</a>
            <a href="/digitalkhata/" className="home-link">
              <Home size={16} /> Back to App
            </a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <>
        <div className={`menu-overlay ${mobileMenuOpen ? 'open' : ''}`} onClick={() => setMobileMenuOpen(false)}></div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-header">
            <div className="logo">
              <Wallet className="logo-icon" />
              <span className="logo-text">Digital Khata</span>
            </div>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(false)}>
              <X size={20} />
            </button>
          </div>
          <div className="mobile-menu-items">
            <button className="mobile-menu-item" onClick={() => { window.location.href = '/digitalkhata/'; setMobileMenuOpen(false); }}>
              <Home size={16} /> Home
            </button>
            <button className="mobile-menu-item" onClick={() => { window.location.href = '/digitalkhata/privacy'; setMobileMenuOpen(false); }}>
              Privacy Policy
            </button>
            <button className="mobile-menu-item" onClick={() => { window.location.href = '/digitalkhata/termsandcondition'; setMobileMenuOpen(false); }}>
              Terms & Conditions
            </button>
          </div>
        </div>
      </>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <Trash2 size={14} /> Account Deletion
          </div>
          <h1 className="hero-title">Delete Your Account</h1>
          <p className="hero-description">
            We understand that sometimes you need to say goodbye. Learn how to delete your account and what happens to your data.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="content-container">
        {/* How to Delete */}
        <div className="info-card">
          <div className="card-title">
            <div className="card-icon"><Trash2 size={20} /></div>
            How to Delete Your Account
          </div>
          <div className="card-content">
            <div className="steps-list">
              <div className="step-item">
                <div className="step-number">1</div>
                <div className="step-text">Open the Digital Khata application</div>
              </div>
              <div className="step-item">
                <div className="step-number">2</div>
                <div className="step-text">Go to <strong>Profile</strong> section</div>
              </div>
              <div className="step-item">
                <div className="step-number">3</div>
                <div className="step-text">Select <strong>Delete Account</strong> option</div>
              </div>
              <div className="step-item">
                <div className="step-number">4</div>
                <div className="step-text">Confirm your request</div>
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Method */}
        <div className="info-card">
          <div className="card-title">
            <div className="card-icon"><Mail size={20} /></div>
            Alternative Request Method
          </div>
          <div className="card-content">
            <p>If you cannot access the application, send an email to:</p>
            <a href="mailto:anujkattel62@gmail.com" className="contact-email">
              <Mail size={18} /> anujkattel62@gmail.com
            </a>
          </div>
        </div>

        {/* Data That Will Be Deleted */}
        <div className="info-card">
          <div className="card-title">
            <div className="card-icon"><Database size={20} /></div>
            Data That Will Be Deleted
          </div>
          <div className="card-content">
            <div className="data-grid">
              {dataToDelete.map((item, idx) => (
                <div key={idx} className="data-item">
                  {item.icon}
                  {item.text}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Data Retention */}
        <div className="info-card">
          <div className="card-title">
            <div className="card-icon"><Clock size={20} /></div>
            Data Retention
          </div>
          <div className="card-content">
            <p>After a deletion request is confirmed, your account and associated data will be permanently deleted within 30 days unless retention is required by applicable laws or regulations.</p>
            <div className="warning-box">
              <AlertCircle size={20} />
              <div className="warning-text">
                This action is irreversible. Please export any important data before deleting your account.
              </div>
            </div>
          </div>
        </div>

        {/* Need Help */}
        <div className="info-card">
          <div className="card-title">
            <div className="card-icon"><Mail size={20} /></div>
            Need Help?
          </div>
          <div className="card-content">
            <p>If you have any questions about account deletion or need assistance, please contact our support team:</p>
            <a href="mailto:anujkattel62@gmail.com" className="contact-email" style={{ marginTop: '1rem' }}>
              <Mail size={18} /> anujkattel62@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-bottom">
            © {new Date().getFullYear()} Digital Khata. All rights reserved. | Made with ❤️ in Nepal
          </div>
        </div>
      </footer>

      {/* Scroll to Top */}
      <button className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop}>
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

// Users icon component
const Users = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 24} height={props.size || 24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

export default DeleteAccount;