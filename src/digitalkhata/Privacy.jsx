import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  Lock, 
  Eye, 
  Database, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  Clock,
  Users,
  Globe,
  ArrowUp,
  Menu,
  X,
  Sparkles,
  Fingerprint,
  Zap,
  Wallet,
  Home
} from 'lucide-react';

const PrivacyPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const lastUpdated = "June 1, 2024";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      // Update active section based on scroll position
      const sections = ['introduction', 'information-collect', 'how-we-use', 'data-security', 'data-sharing', 'your-rights', 'data-retention', 'contact-us'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 90; 
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: <Shield size={16} /> },
    { id: 'information-collect', title: 'Information We Collect', icon: <Database size={16} /> },
    { id: 'how-we-use', title: 'How We Use Data', icon: <Eye size={16} /> },
    { id: 'data-security', title: 'Storage & Security', icon: <Lock size={16} /> },
    { id: 'data-sharing', title: 'Data Sharing', icon: <Users size={16} /> },
    { id: 'your-rights', title: 'Your Rights', icon: <CheckCircleIcon size={16} /> },
    { id: 'data-retention', title: 'Data Retention', icon: <Clock size={16} /> },
    { id: 'contact-us', title: 'Contact Us', icon: <Mail size={16} /> }
  ];

  const contentSections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <Shield className="w-5 h-5" />,
      content: 'Digital Khata ("we", "our", "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application ("App"). Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the App.'
    },
    {
      id: 'information-collect',
      title: 'Information We Collect',
      icon: <Database className="w-5 h-5" />,
      content: 'We collect information that you provide directly to us, including:',
      subPoints: [
        'Personal Information: Name, phone number, email address, profile information',
        'Business Information: Business name, address, PAN/VAT number, business type',
        'Customer Data: Customer names, contact information, transaction history',
        'Transaction Records: Credit/debit entries, invoice details, payment history',
        'Product Information: Product names, prices, stock quantities, categories',
        'Device Information: Device model, operating system, unique device identifiers',
        'Usage Data: App interactions, features used, time spent on different sections'
      ]
    },
    {
      id: 'how-we-use',
      title: 'How We Use Your Information',
      icon: <Eye className="w-5 h-5" />,
      content: 'We use the information we collect for various purposes, including:',
      subPoints: [
        'Create and manage your account',
        'Process and record business transactions',
        'Generate invoices and manage payments',
        'Maintain customer relationships and history',
        'Provide customer support and respond to inquiries',
        'Improve and optimize our App features',
        'Analyze usage patterns and trends',
        'Detect, prevent, and address technical issues',
        'Comply with legal obligations',
        'Send important notifications and updates'
      ]
    },
    {
      id: 'data-security',
      title: 'Data Storage and Security',
      icon: <Lock className="w-5 h-5" />,
      content: 'We implement appropriate technical and organizational measures to protect your personal information:',
      subPoints: [
        'Encryption: All data is encrypted in transit using SSL/TLS and at rest using AES-256',
        'Access Controls: Strict access controls limit who can access user data',
        'Regular Audits: We conduct regular security audits and vulnerability assessments',
        'Secure Servers: Data is stored on secure servers with firewall protection',
        'Backup Systems: Regular automated backups to prevent data loss',
        'Employee Training: Regular security awareness training for all employees'
      ]
    },
    {
      id: 'data-sharing',
      title: 'Data Sharing and Disclosure',
      icon: <Users className="w-5 h-5" />,
      content: 'We do not sell, trade, or rent your personal information to third parties. We may share your information in the following circumstances:',
      subPoints: [
        'With your consent or at your direction',
        'To comply with legal obligations or respond to lawful requests',
        'To protect our rights, privacy, safety, or property',
        'With service providers who assist in operating our App (payment processing, data hosting)',
        'In connection with a business transfer, merger, or acquisition',
        'To prevent or investigate possible wrongdoing in connection with the App'
      ]
    },
    {
      id: 'your-rights',
      title: 'Your Rights and Choices',
      icon: <CheckCircleIcon className="w-5 h-5" />,
      content: 'Depending on your location, you may have certain rights regarding your personal information:',
      subPoints: [
        'Access: Request a copy of your personal data',
        'Correction: Correct inaccurate or incomplete information',
        'Deletion: Request deletion of your personal data',
        'Portability: Receive your data in a structured, machine-readable format',
        'Restriction: Limit how we use your personal information',
        'Objection: Object to certain data processing activities',
        'Withdraw Consent: Withdraw previously given consent at any time'
      ]
    },
    {
      id: 'data-retention',
      title: 'Data Retention',
      icon: <Clock className="w-5 h-5" />,
      content: 'We retain your personal information for as long as your account is active or as needed to provide you with services.',
      subPoints: [
        'Active accounts: Data retained while account is active',
        'Free plan: 30 days transaction history',
        'Premium plan: Lifetime data history',
        'Account deletion: Data exported and permanently deleted within 30 days',
        'Legal requirements: Some data may be retained to comply with tax and accounting laws'
      ]
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      icon: <Mail className="w-5 h-5" />,
      content: 'If you have any questions about this Privacy Policy or our data practices, please contact us:',
      contacts: [
        { icon: <Mail size={16} />, label: 'Email', value: 'anujkattel62@gmail.com', href: 'mailto:anujkattel62@gmail.com' },
        { icon: <Phone size={16} />, label: 'Phone', value: '9825995421', href: 'tel:+9779825995421' },
        { icon: <MapPin size={16} />, label: 'Location', value: 'Jhapa, Nepal', href: null },
        { icon: <Globe size={16} />, label: 'Website', value: 'www.digitalkhata.com', href: 'https://www.digitalkhata.com' }
      ]
    }
  ];

  return (
    <div className="privacy-page">
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', Roboto, sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          background-color: #f8fafc;
          color: #334155;
        }

        .privacy-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
        }

        /* Navigation - Visible on all screens with logo and home button only */
        .navbar {
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #e2e8f0;
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
          text-decoration: none;
        }

        .logo-icon {
          width: 28px;
          height: 28px;
          color: #10b981;
        }

        .logo-text {
          font-size: 1.15rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.025em;
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
          transition: all 0.2s ease;
        }

        .home-link:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .mobile-menu-btn {
          display: none;
          padding: 8px;
          border-radius: 8px;
          background: transparent;
          border: none;
          cursor: pointer;
          color: #475569;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }
          .home-link {
            display: none;
          }
        }

        /* Mobile Slide Out Menu */
        .mobile-menu {
          position: fixed;
          top: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          max-width: 300px;
          background: white;
          transform: translateX(100%);
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 200;
          box-shadow: -4px 0 24px rgba(0,0,0,0.08);
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
          border-bottom: 1px solid #f1f5f9;
        }

        .mobile-menu-items {
          display: flex;
          flex-direction: column;
          padding: 1rem;
          gap: 4px;
          overflow-y: auto;
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
          color: #475569;
          font-weight: 500;
          font-size: 0.9rem;
          text-align: left;
          width: 100%;
          transition: background 0.15s;
        }

        .mobile-menu-item:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .mobile-menu-item.active {
          background: #ecfdf5;
          color: #10b981;
        }

        .menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(15, 23, 42, 0.3);
          backdrop-filter: blur(2px);
          z-index: 199;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s ease;
        }

        .menu-overlay.open {
          opacity: 1;
          visibility: visible;
        }

        /* Hero Layout Header */
        .hero {
          background: white;
          border-bottom: 1px solid #e2e8f0;
          padding: 4rem 1.5rem 3.5rem;
          text-align: center;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 5px 14px;
          background: #f0fdf4;
          border: 1px solid #bbf7d0;
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #15803d;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #0f172a;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.25rem;
          }
        }

        .hero-description {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #64748b;
          max-width: 42rem;
          margin: 0 auto 1.5rem;
        }

        .last-updated-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #64748b;
        }

        /* Main Workspace Wrapper Container Split Layout */
        .layout-wrapper {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .layout-wrapper {
            grid-template-columns: 260px 1fr;
          }
        }

        /* Sidebar Index Tree - Always visible on desktop */
        .sidebar-panel {
          display: none;
          position: sticky;
          top: 30px;
          height: fit-content;
        }

        @media (min-width: 1024px) {
          .sidebar-panel {
            display: flex;
            flex-direction: column;
            gap: 6px;
          }
        }

        .sidebar-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          background: transparent;
          border: none;
          border-radius: 10px;
          text-align: left;
          color: #64748b;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sidebar-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        .sidebar-btn.active {
          background: #ecfdf5;
          color: #10b981;
          font-weight: 600;
        }

        .sidebar-btn.active svg {
          color: #10b981;
        }

        /* Content Panel */
        .content-body {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .section-block {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          padding: 2rem;
          box-shadow: 0 1px 3px rgba(0,0,0,0.02);
          scroll-margin-top: 90px;
          transition: all 0.2s;
        }

        .section-block:hover {
          border-color: #cbd5e1;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
        }

        .section-heading-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #f1f5f9;
        }

        .section-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: #ecfdf5;
          color: #10b981;
        }

        .section-block-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.02em;
        }

        .section-main-paragraph {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #475569;
        }

        /* Points Items Lists */
        .points-list-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        @media (min-width: 640px) {
          .points-list-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .list-item-card {
          display: flex;
          gap: 8px;
          align-items: flex-start;
          background: #f8fafc;
          border: 1px solid #f1f5f9;
          border-radius: 10px;
          padding: 12px 14px;
        }

        .list-item-chevron {
          color: #10b981;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .list-item-text {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #475569;
        }

        /* Contact Details Frame Grid */
        .contact-display-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
          margin-top: 1.5rem;
        }

        @media (min-width: 640px) {
          .contact-display-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .contact-display-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .contact-detail-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 1rem;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .contact-detail-card:hover {
          border-color: #10b981;
          background: #f0fdf4;
          transform: translateY(-2px);
        }

        .contact-avatar-box {
          width: 42px;
          height: 42px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #10b981;
          flex-shrink: 0;
        }

        .contact-text-node {
          overflow: hidden;
        }

        .contact-mini-label {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #94a3b8;
          margin-bottom: 2px;
        }

        .contact-main-value {
          font-weight: 600;
          color: #1e293b;
          font-size: 0.85rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        /* Verification Badge Footnotes */
        .trust-badges-bar {
          margin-top: 1rem;
          padding: 1.5rem;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
        }

        .badges-inner-flex {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 1.5rem;
          align-items: center;
        }

        .trust-item {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .trust-icon {
          color: #10b981;
        }

        .trust-text {
          font-size: 0.8rem;
          font-weight: 500;
          color: #64748b;
        }

        /* Footer Frame layout */
        .footer {
          background-color: #0f172a;
          color: #94a3b8;
          padding: 4rem 0 3rem;
          margin-top: auto;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }

        .footer-grid {
          display: grid;
          gap: 2.5rem;
          margin-bottom: 3rem;
        }

        @media (min-width: 640px) {
          .footer-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .footer-grid {
            grid-template-columns: 2fr repeat(3, 1fr);
          }
        }

        .footer-logo-box {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 0.75rem;
        }

        .footer-logo-icon {
          width: 24px;
          height: 24px;
          color: #34d399;
        }

        .footer-logo-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          letter-spacing: -0.02em;
        }

        .footer-description {
          font-size: 0.85rem;
          line-height: 1.5;
          max-width: 18rem;
        }

        .footer-title {
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          color: #94a3b8;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.15s;
        }

        .footer-link:hover {
          color: white;
        }

        .footer-bottom {
          border-top: 1px solid #1e293b;
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: #64748b;
        }

        /* Floating Top Button */
        .scroll-top-btn {
          position: fixed;
          bottom: 2rem;
          right: 2rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #10b981;
          border: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          transition: all 0.2s ease;
          z-index: 90;
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
          background: #059669;
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }

        .scroll-top-btn svg {
          color: white;
        }

        /* Responsive Adjustments */
        @media (max-width: 768px) {
          .hero {
            padding: 3rem 1rem 2.5rem;
          }
          .hero-title {
            font-size: 1.75rem;
          }
          .section-block {
            padding: 1.5rem;
          }
          .section-block-title {
            font-size: 1.2rem;
          }
          .layout-wrapper {
            padding: 2rem 1rem;
          }
        }
      `}</style>

      {/* Navigation - Logo and Home button only */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-content">
            <div className="logo" onClick={scrollToTop}>
              <Wallet className="logo-icon" />
              <span className="logo-text">Digital Khata</span>
            </div>
            <a href="/digitalkhata/" className="home-link">
              <Home size={16} />
              Home
            </a>
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open navigation list"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
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
            <button 
              className="mobile-menu-item"
              onClick={() => {
                window.location.href = '/digitalkhata/';
                setMobileMenuOpen(false);
              }}
            >
              <Home size={16} />
              <span>Home</span>
            </button>
            {sections.map((section) => (
              <button
                key={section.id}
                className={`mobile-menu-item ${activeSection === section.id ? 'active' : ''}`}
                onClick={() => scrollToSection(section.id)}
              >
                <span style={{ color: '#10b981', display: 'flex' }}>{section.icon}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <Shield size={14} />
          <span>Privacy & Security Guardrails</span>
          <Sparkles size={12} />
        </div>
        <h1 className="hero-title">Your Data, Your Privacy</h1>
        <p className="hero-description">
          We process digital business records with absolute transparency. Read how we collect, safeguard, and secure your ledger ecosystem operations below.
        </p>
        <div className="last-updated-badge">
          <Clock size={12} />
          <span>Document Version Effective: {lastUpdated}</span>
        </div>
      </section>

      {/* Main Layout - Sidebar + Content */}
      <div className="layout-wrapper">
        
        {/* Sidebar - Always visible on desktop */}
        <aside className="sidebar-panel">
          {sections.map((section) => (
            <button 
              key={section.id}
              className={`sidebar-btn ${activeSection === section.id ? 'active' : ''}`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.icon}
              <span>{section.title}</span>
            </button>
          ))}
        </aside>

        {/* Main Content */}
        <main className="content-body">
          {contentSections.map((section) => (
            <section key={section.id} id={section.id} className="section-block">
              <div className="section-heading-box">
                <div className="section-icon-container">
                  {section.icon}
                </div>
                <h2 className="section-block-title">{section.title}</h2>
              </div>
              <p className="section-main-paragraph">{section.content}</p>
              
              {section.subPoints && (
                <div className="points-list-grid">
                  {section.subPoints.map((point, idx) => (
                    <div key={idx} className="list-item-card">
                      <ChevronRight className="list-item-chevron" size={14} />
                      <span className="list-item-text">{point}</span>
                    </div>
                  ))}
                </div>
              )}

              {section.contacts && (
                <div className="contact-display-grid">
                  {section.contacts.map((contact, idx) => {
                    const AnchorElement = contact.href ? 'a' : 'div';
                    return (
                      <AnchorElement
                        key={idx}
                        href={contact.href || undefined}
                        className="contact-detail-card"
                      >
                        <div className="contact-avatar-box">
                          {contact.icon}
                        </div>
                        <div className="contact-text-node">
                          <div className="contact-mini-label">{contact.label}</div>
                          <div className="contact-main-value" title={contact.value}>{contact.value}</div>
                        </div>
                      </AnchorElement>
                    );
                  })}
                </div>
              )}
            </section>
          ))}

          {/* Trust Badges */}
          <div className="trust-badges-bar">
            <div className="badges-inner-flex">
              <div className="trust-item">
                <Lock className="trust-icon" size={16} />
                <span className="trust-text">AES-256 Bit Encryption</span>
              </div>
              <div className="trust-item">
                <Shield className="trust-icon" size={16} />
                <span className="trust-text">Regulatory Compliant</span>
              </div>
              <div className="trust-item">
                <Fingerprint className="trust-icon" size={16} />
                <span className="trust-text">Biometric Access Ready</span>
              </div>
              <div className="trust-item">
                <Zap className="trust-icon" size={16} />
                <span className="trust-text">Real-time Automated Backups</span>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo-box">
                <Wallet className="footer-logo-icon" />
                <span className="footer-logo-text">Digital Khata</span>
              </div>
              <p className="footer-description">
                Empowering small business environments and digital ledgers across Nepal with secure record keeping tools.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li><a href="/digitalkhata/" className="footer-link">Features</a></li>
                <li><a href="/digitalkhata/" className="footer-link">Pricing</a></li>
                <li><a href="#" className="footer-link">Downloads</a></li>
                <li><a href="#" className="footer-link">Updates</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Company</h4>
              <ul className="footer-links">
                <li><a href="#" className="footer-link">About Us</a></li>
                <li><a href="#" className="footer-link">Contact</a></li>
                <li><a href="#" className="footer-link">Careers</a></li>
                <li><a href="#" className="footer-link">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                <li><a href="/digitalkhata/privacy" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Digital Khata. All architecture frameworks reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll back to top"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

// CheckCircleIcon component
const CheckCircleIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={props.size || 16} height={props.size || 16} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={props.className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

export default PrivacyPage;