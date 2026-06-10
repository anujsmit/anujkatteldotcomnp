import React, { useState, useEffect } from 'react';
import { 
  FileText, 
  Scale, 
  Users, 
  Shield, 
  Lock, 
  Mail, 
  Phone, 
  MapPin,
  ChevronRight,
  CheckCircle,
  Clock,
  Globe,
  ArrowUp,
  Menu,
  X,
  Sparkles,
  Wallet,
  Home,
  AlertCircle,
  CreditCard,
  Database,
  UserCheck,
  FileCheck
} from 'lucide-react';

const TermsAndConditions = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [activeSection, setActiveSection] = useState('introduction');
  const lastUpdated = "June 1, 2024";

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      
      const sections = ['introduction', 'acceptance', 'service-description', 'user-accounts', 'user-responsibilities', 'payments', 'data-ownership', 'intellectual-property', 'prohibited-activities', 'limitation-liability', 'termination', 'governing-law', 'contact-us'];
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
    { id: 'introduction', title: 'Introduction', icon: <FileText size={16} /> },
    { id: 'acceptance', title: 'Acceptance', icon: <CheckCircle size={16} /> },
    { id: 'service-description', title: 'Service Description', icon: <Database size={16} /> },
    { id: 'user-accounts', title: 'User Accounts', icon: <Users size={16} /> },
    { id: 'user-responsibilities', title: 'Responsibilities', icon: <UserCheck size={16} /> },
    { id: 'payments', title: 'Payments', icon: <CreditCard size={16} /> },
    { id: 'data-ownership', title: 'Data Ownership', icon: <Database size={16} /> },
    { id: 'intellectual-property', title: 'Intellectual Property', icon: <Scale size={16} /> },
    { id: 'prohibited-activities', title: 'Prohibited Activities', icon: <Shield size={16} /> },
    { id: 'limitation-liability', title: 'Limitation of Liability', icon: <AlertCircle size={16} /> },
    { id: 'termination', title: 'Termination', icon: <Clock size={16} /> },
    { id: 'governing-law', title: 'Governing Law', icon: <Scale size={16} /> },
    { id: 'contact-us', title: 'Contact Us', icon: <Mail size={16} /> }
  ];

  const contentSections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: <FileText className="w-5 h-5" />,
      content: 'Welcome to Digital Khata ("we", "our", "us"). These Terms and Conditions ("Terms") govern your use of our mobile application, website, and services ("Service"). By accessing or using our Service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the Service.'
    },
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      icon: <CheckCircle className="w-5 h-5" />,
      content: 'By using Digital Khata, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions. These Terms constitute a legally binding agreement between you and Digital Khata.',
      subPoints: [
        'You must be at least 18 years old to use this Service',
        'You must have the legal capacity to enter into a binding agreement',
        'You agree to comply with all applicable laws and regulations',
        'These Terms may be updated from time to time with notice'
      ]
    },
    {
      id: 'service-description',
      title: 'Description of Service',
      icon: <Database className="w-5 h-5" />,
      content: 'Digital Khata is a business management platform that provides tools for small businesses to manage their operations efficiently.',
      subPoints: [
        'Customer management and relationship tracking',
        'Transaction recording and history maintenance',
        'Invoice generation and payment processing',
        'Business analytics and reporting',
        'Product inventory management',
        'Multi-business account support',
        'Data export and backup capabilities'
      ]
    },
    {
      id: 'user-accounts',
      title: 'User Accounts',
      icon: <Users className="w-5 h-5" />,
      content: 'To access certain features of our Service, you must create a user account. You are responsible for maintaining the confidentiality of your account credentials.',
      subPoints: [
        'You are solely responsible for all activities under your account',
        'You must notify us immediately of any unauthorized account use',
        'You may not share your account credentials with third parties',
        'We reserve the right to suspend or terminate accounts that violate these Terms',
        'You must provide accurate and complete registration information',
        'Accounts are non-transferable'
      ]
    },
    {
      id: 'user-responsibilities',
      title: 'User Responsibilities',
      icon: <UserCheck className="w-5 h-5" />,
      content: 'As a user of Digital Khata, you agree to fulfill the following responsibilities:',
      subPoints: [
        'Provide accurate, current, and complete information when using the Service',
        'Maintain the accuracy of your business and customer data',
        'Operate only legitimate and legal businesses',
        'Comply with all applicable laws, regulations, and tax obligations',
        'Not use the Service for any illegal or unauthorized purpose',
        'Not attempt to disrupt or compromise the Service\'s security',
        'Not reverse engineer, decompile, or disassemble the Service',
        'Not transfer your account to any third party without our consent'
      ]
    },
    {
      id: 'payments',
      title: 'Payments and Billing',
      icon: <CreditCard className="w-5 h-5" />,
      content: 'Digital Khata offers both free and paid subscription plans. The following terms apply to our paid services:',
      subPoints: [
        'Free Plan: रु 0/month - Includes basic features with advertisements and 30-day data history',
        'Premium Plan: रु 100/month - No ads, unlimited customers, lifetime data history, priority support',
        'Yearly Premium: रु 1000/year - Save 17% with annual billing, includes all Premium features',
        'Payments are processed securely through Esewa, Khalti, ConnectIPS, and major credit/debit cards',
        'All payments are non-refundable unless required by applicable law',
        'We reserve the right to change pricing with 30 days advance notice',
        'Your subscription will automatically renew unless cancelled before the renewal date'
      ]
    },
    {
      id: 'data-ownership',
      title: 'Data Ownership and Privacy',
      icon: <Database className="w-5 h-5" />,
      content: 'You retain full ownership of all data you input into Digital Khata. However, you grant us certain rights to use your data to provide and improve our services.',
      subPoints: [
        'You own all customer, transaction, and business data you enter',
        'We do not sell, trade, or rent your personal information to third parties',
        'You may export your data at any time using our export features',
        'Upon account deletion, we offer data export before permanent deletion',
        'We use your data to provide, maintain, and improve our Service',
        'We comply with applicable data protection laws and regulations',
        'Please review our Privacy Policy for detailed information on data handling'
      ]
    },
    {
      id: 'intellectual-property',
      title: 'Intellectual Property',
      icon: <Scale className="w-5 h-5" />,
      content: 'The Service and its original content, features, and functionality are owned by Digital Khata and are protected by intellectual property laws.',
      subPoints: [
        'The Digital Khata name, logo, and branding are our trademarks',
        'You may not copy, modify, distribute, or create derivative works of our Service',
        'You retain all rights to the data you input into the Service',
        'We respect intellectual property rights and expect users to do the same',
        'Unauthorized use of our intellectual property may result in legal action'
      ]
    },
    {
      id: 'prohibited-activities',
      title: 'Prohibited Activities',
      icon: <Shield className="w-5 h-5" />,
      content: 'You may not use the Service for any illegal or unauthorized purpose. Prohibited activities include:',
      subPoints: [
        'Engaging in any illegal activity or violating any laws',
        'Transmitting any harmful, malicious, or destructive code',
        'Attempting to gain unauthorized access to other users\' accounts',
        'Interfering with or disrupting the Service\'s servers or networks',
        'Using the Service for any fraudulent or deceptive purpose',
        'Infringing upon the intellectual property rights of others',
        'Harassing, abusing, or harming other users',
        'Collecting user data without consent'
      ]
    },
    {
      id: 'limitation-liability',
      title: 'Limitation of Liability',
      icon: <AlertCircle className="w-5 h-5" />,
      content: 'To the maximum extent permitted by law, Digital Khata shall not be liable for any indirect, incidental, special, consequential, or punitive damages.',
      subPoints: [
        'Loss of profits, revenue, or business opportunities',
        'Loss or corruption of data',
        'Business interruption',
        'Any unauthorized access to or use of our secure servers',
        'Any bugs, viruses, or other harmful code',
        'Third-party conduct or content',
        'In no event shall our total liability exceed the amount you paid us, if any'
      ]
    },
    {
      id: 'termination',
      title: 'Termination',
      icon: <Clock className="w-5 h-5" />,
      content: 'We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation breach of these Terms.',
      subPoints: [
        'Violation of these Terms',
        'Violation of applicable laws',
        'Request by law enforcement',
        'Unexpected technical or security issues',
        'Non-payment of fees (for paid plans)',
        'Extended periods of inactivity',
        'Upon termination, your right to use the Service will immediately cease',
        'You may export your data before termination upon request'
      ]
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      icon: <Scale className="w-5 h-5" />,
      content: 'These Terms shall be governed and construed in accordance with the laws of Nepal, without regard to its conflict of law provisions.',
      subPoints: [
        'Any disputes shall be subject to the exclusive jurisdiction of Kathmandu, Nepal courts',
        'The United Nations Convention on Contracts for the International Sale of Goods does not apply',
        'If any provision of these Terms is found to be unenforceable, the remaining provisions shall remain in effect',
        'Our failure to enforce any right or provision does not waive our right to enforce it in the future'
      ]
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      icon: <Mail className="w-5 h-5" />,
      content: 'If you have any questions about these Terms and Conditions, please contact us:',
      contacts: [
        { icon: <Mail size={18} />, label: 'Email', value: 'anujkattel62@gmail.com', href: 'mailto:anujkattel62@gmail.com' },
        { icon: <Phone size={18} />, label: 'WhatsApp', value: '9825995421', href: 'https://wa.me/9779825995421' },
        { icon: <MapPin size={18} />, label: 'Location', value: 'Jhapa, Nepal', href: null },
        { icon: <Globe size={18} />, label: 'Website', value: 'www.anujkattel.com.np', href: 'https://www.anujkattel.com.np' }
      ]
    }
  ];

  return (
    <div className="terms-page">
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

        .terms-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #ffffff;
        }

        /* Navigation - Matching Homepage */
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
          color: #4b5563;
          font-weight: 500;
          font-size: 0.9rem;
          text-align: left;
          width: 100%;
          transition: background 0.15s;
        }

        .mobile-menu-item:hover {
          background: #f3f4f6;
          color: #059669;
        }

        .mobile-menu-item.active {
          background: #ecfdf5;
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
          transition: all 0.2s ease;
        }

        .menu-overlay.open {
          opacity: 1;
          visibility: visible;
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

        /* Hero Section - Matching Homepage */
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

        .hero-highlight {
          color: #059669;
        }

        .hero-description {
          font-size: 1.125rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto 1.5rem;
        }

        .last-updated-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 14px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #6b7280;
        }

        /* Layout */
        .layout-wrapper {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 3rem 2rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
        }

        @media (min-width: 1024px) {
          .layout-wrapper {
            grid-template-columns: 280px 1fr;
          }
        }

        /* Sidebar */
        .sidebar-panel {
          display: none;
          position: sticky;
          top: 100px;
          height: fit-content;
        }

        @media (min-width: 1024px) {
          .sidebar-panel {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }
        }

        .sidebar-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 18px;
          background: transparent;
          border: none;
          border-radius: 8px;
          text-align: left;
          color: #6b7280;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sidebar-btn:hover {
          background: #f9fafb;
          color: #059669;
        }

        .sidebar-btn.active {
          background: #ecfdf5;
          color: #059669;
          font-weight: 600;
        }

        /* Content */
        .content-body {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .section-block {
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2rem;
          transition: all 0.3s;
          scroll-margin-top: 90px;
        }

        .section-block:hover {
          border-color: #d1fae5;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .section-heading-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid #e5e7eb;
        }

        .section-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: #ecfdf5;
          color: #059669;
        }

        .section-block-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #1f2937;
        }

        .section-main-paragraph {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #6b7280;
          margin-bottom: 1rem;
        }

        .points-list-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.75rem;
          margin-top: 1rem;
        }

        @media (min-width: 640px) {
          .points-list-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .list-item-card {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.5rem;
          padding: 12px 14px;
          transition: all 0.2s;
        }

        .list-item-card:hover {
          border-color: #d1fae5;
          background: #ffffff;
        }

        .list-item-chevron {
          color: #059669;
          flex-shrink: 0;
          margin-top: 2px;
        }

        .list-item-text {
          font-size: 0.85rem;
          line-height: 1.5;
          color: #4b5563;
        }

        /* Contact Cards */
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
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 0.75rem;
          text-decoration: none;
          transition: all 0.2s;
        }

        .contact-detail-card:hover {
          border-color: #059669;
          background: #ecfdf5;
          transform: translateY(-2px);
        }

        .contact-avatar-box {
          width: 44px;
          height: 44px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #059669;
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
          color: #9ca3af;
          margin-bottom: 4px;
        }

        .contact-main-value {
          font-weight: 600;
          color: #1f2937;
          font-size: 0.85rem;
          word-break: break-word;
        }

        /* Footer - Matching Homepage */
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

        .footer-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;
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
          color: #10b981;
        }

        .footer-logo-text {
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
        }

        .footer-description {
          color: #9ca3af;
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
          color: #e5e7eb;
        }

        .footer-links {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.15s;
        }

        .footer-link:hover {
          color: #10b981;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: #9ca3af;
        }

        /* Scroll to Top Button */
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

      {/* Navigation - Matching Homepage */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo" onClick={scrollToTop}>
            <Wallet className="logo-icon" />
            <span className="logo-text">Digital Khata</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href="/digitalkhata/" className="home-link">Home</a>
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
            {sections.map((section) => (
              <button key={section.id} className={`mobile-menu-item ${activeSection === section.id ? 'active' : ''}`} onClick={() => scrollToSection(section.id)}>
                <span style={{ color: '#059669' }}>{section.icon}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <FileText size={14} /> Terms & Conditions
          </div>
          <h1 className="hero-title">
            Terms and <span className="hero-highlight">Conditions</span>
          </h1>
          <p className="hero-description">
            Please read these Terms and Conditions carefully before using Digital Khata. By accessing or using our service, you agree to be bound by these terms.
          </p>
          <div className="last-updated-badge">
            <Clock size={12} /> Effective Date: {lastUpdated}
          </div>
        </div>
      </section>

      {/* Main Layout */}
      <div className="layout-wrapper">
        <aside className="sidebar-panel">
          {sections.map((section) => (
            <button key={section.id} className={`sidebar-btn ${activeSection === section.id ? 'active' : ''}`} onClick={() => scrollToSection(section.id)}>
              {section.icon} {section.title}
            </button>
          ))}
        </aside>

        <main className="content-body">
          {contentSections.map((section) => (
            <section key={section.id} id={section.id} className="section-block">
              <div className="section-heading-box">
                <div className="section-icon-container">{section.icon}</div>
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
                      <AnchorElement key={idx} href={contact.href || undefined} target={contact.href ? "_blank" : undefined} rel="noopener noreferrer" className="contact-detail-card">
                        <div className="contact-avatar-box">{contact.icon}</div>
                        <div className="contact-text-node">
                          <div className="contact-mini-label">{contact.label}</div>
                          <div className="contact-main-value">{contact.value}</div>
                        </div>
                      </AnchorElement>
                    );
                  })}
                </div>
              )}
            </section>
          ))}
        </main>
      </div>

      {/* Footer - Matching Homepage */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo-box">
                <FileText className="footer-logo-icon" />
                <span className="footer-logo-text">Digital Khata</span>
              </div>
              <p className="footer-description">
                Empowering small businesses with transparent and fair terms for digital ledger management.
              </p>
            </div>
            <div>
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li><a href="/digitalkhata/" className="footer-link">Features</a></li>
                <li><a href="/digitalkhata/" className="footer-link">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                <li><a href="/digitalkhata/privacy" className="footer-link">Privacy Policy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Connect</h4>
              <ul className="footer-links">
                <li><a href="mailto:anujkattel62@gmail.com" className="footer-link">Email Us</a></li>
                <li><a href="https://wa.me/9779825995421" className="footer-link">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Digital Khata. All rights reserved. | Made with ❤️ in Nepal
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`} onClick={scrollToTop}>
        <ArrowUp size={20} />
      </button>
    </div>
  );
};

export default TermsAndConditions;