import React, { useState, useEffect } from 'react';
import { Trash2, Mail, Clock, Database, User, Building, Receipt, Settings, AlertCircle, CheckCircle, ArrowUp, Menu, X, Wallet, Home } from 'lucide-react';

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
          background: #0a0a0f;
        }

        .delete-account-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #0a0a0f;
        }

        /* Animated Background */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }

        .blob {
          position: fixed;
          border-radius: 50%;
          filter: blur(100px);
          opacity: 0.15;
          animation: blob 20s infinite;
          pointer-events: none;
          z-index: 0;
        }

        .blob-1 { width: 400px; height: 400px; background: #10b981; top: 100px; left: -100px; }
        .blob-2 { width: 500px; height: 500px; background: #ef4444; bottom: 100px; right: -100px; animation-delay: -5s; }
        .blob-3 { width: 450px; height: 450px; background: #8b5cf6; top: 50%; left: 50%; transform: translate(-50%, -50%); animation-delay: -10s; }

        /* Navigation */
        .navbar {
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          position: sticky;
          top: 0;
          z-index: 50;
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .nav-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 64px;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
        }

        .logo-icon { width: 28px; height: 28px; color: #10b981; }
        .logo-text {
          font-size: 1.15rem;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .home-link {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          text-decoration: none;
          border-radius: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          transition: all 0.2s;
        }

        .home-link:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .mobile-menu-btn {
          display: none;
          padding: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn { display: flex; }
          .home-link { display: none; }
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 300px;
          background: #0a0a0f;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          transform: translateX(100%);
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 200;
          display: flex;
          flex-direction: column;
        }

        .mobile-menu.open { transform: translateX(0); }

        .mobile-menu-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.25rem 1.5rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .mobile-menu-items {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 4px;
        }

        .mobile-menu-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 10px 12px;
          border-radius: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          font-weight: 500;
          font-size: 0.9rem;
          text-align: left;
          width: 100%;
        }

        .mobile-menu-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          backdrop-filter: blur(4px);
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
          background: rgba(255, 255, 255, 0.02);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 1.5rem 3.5rem;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #ef4444;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .hero-title { font-size: 3.5rem; }
        }

        .hero-description {
          font-size: 1.05rem;
          color: #9ca3af;
          max-width: 42rem;
          margin: 0 auto;
        }

        /* Content Container */
        .content-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          position: relative;
          z-index: 10;
        }

        /* Cards */
        .info-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 2rem;
          margin-bottom: 2rem;
          transition: all 0.3s;
        }

        .info-card:hover {
          border-color: rgba(16, 185, 129, 0.3);
          transform: translateY(-2px);
        }

        .card-title {
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.5rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 1.5rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .card-icon {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(16, 185, 129, 0.1);
          border-radius: 12px;
          color: #10b981;
        }

        .card-content {
          color: #9ca3af;
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
          background: rgba(255, 255, 255, 0.03);
          border-radius: 12px;
        }

        .step-number {
          width: 32px;
          height: 32px;
          background: rgba(16, 185, 129, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #10b981;
        }

        .step-text {
          color: #e5e7eb;
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
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 10px;
          color: #9ca3af;
          font-size: 0.9rem;
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
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 12px;
          color: #10b981;
          text-decoration: none;
          font-weight: 500;
          margin-top: 1rem;
          transition: all 0.2s;
        }

        .contact-email:hover {
          background: rgba(16, 185, 129, 0.2);
          transform: translateY(-2px);
        }

        /* Warning Box */
        .warning-box {
          background: rgba(239, 68, 68, 0.1);
          border: 1px solid rgba(239, 68, 68, 0.2);
          border-radius: 12px;
          padding: 1rem;
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 1.5rem;
        }

        .warning-text {
          color: #fca5a5;
          font-size: 0.875rem;
        }

        /* Footer */
        .footer {
          background: #0a0a0f;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 3rem 1.5rem;
          margin-top: auto;
          position: relative;
          z-index: 10;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: #6b7280;
        }

        /* Scroll Top Button */
        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: linear-gradient(135deg, #10b981, #059669);
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
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
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero-title { font-size: 2rem; }
          .card-title { font-size: 1.25rem; }
          .content-container { padding: 2rem 1rem; }
        }
      `}</style>

      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo" onClick={scrollToTop}>
              <Wallet className="logo-icon" />
              <span className="logo-text">Digital Khata</span>
            </div>
            <a href="/digitalkhata/" className="home-link">
              <Home size={16} /> Home
            </a>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(true)}>
              <Menu size={22} />
            </button>
          </div>
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
        <div className="hero-badge">
          <Trash2 size={14} /> Account Deletion
        </div>
        <h1 className="hero-title">Delete Your Account</h1>
        <p className="hero-description">
          We understand that sometimes you need to say goodbye. Learn how to delete your account and what happens to your data.
        </p>
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
            © {new Date().getFullYear()} Digital Khata. All rights reserved.
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