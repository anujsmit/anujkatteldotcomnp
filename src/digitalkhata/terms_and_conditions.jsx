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
        { icon: <Mail size={16} />, label: 'Email', value: 'anujkattel62@gmail.com', href: 'mailto:anujkattel62@gmail.com' },
        { icon: <Phone size={16} />, label: 'Phone', value: '9825995421', href: 'tel:+9779825995421' },
        { icon: <MapPin size={16} />, label: 'Location', value: 'Jhapa, Nepal', href: null },
        { icon: <Globe size={16} />, label: 'Website', value: 'www.digitalkhata.com', href: 'https://www.digitalkhata.com' }
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
          -moz-osx-font-smoothing: grayscale;
        }

        .terms-page {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          background: #0a0a0f;
        }

        /* Animated Background Blobs */
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

        .blob-1 {
          width: 400px;
          height: 400px;
          background: #10b981;
          top: 100px;
          left: -100px;
        }

        .blob-2 {
          width: 500px;
          height: 500px;
          background: #3b82f6;
          bottom: 100px;
          right: -100px;
          animation-delay: -5s;
        }

        .blob-3 {
          width: 450px;
          height: 450px;
          background: #8b5cf6;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation-delay: -10s;
        }

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

        .logo-icon {
          width: 28px;
          height: 28px;
          color: #10b981;
        }

        .logo-text {
          font-size: 1.15rem;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
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
          color: #9ca3af;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
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
          background: #0a0a0f;
          border-left: 1px solid rgba(255, 255, 255, 0.05);
          transform: translateX(100%);
          transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 200;
          box-shadow: -4px 0 24px rgba(0,0,0,0.5);
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
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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
          color: #9ca3af;
          font-weight: 500;
          font-size: 0.9rem;
          text-align: left;
          width: 100%;
          transition: background 0.15s;
        }

        .mobile-menu-item:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .mobile-menu-item.active {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
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
          transition: all 0.2s ease;
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
          background: rgba(16, 185, 129, 0.1);
          border: 1px solid rgba(16, 185, 129, 0.2);
          border-radius: 9999px;
          font-size: 0.8rem;
          font-weight: 600;
          color: #10b981;
          margin-bottom: 1.5rem;
        }

        .hero-title {
          font-size: 2.25rem;
          font-weight: 800;
          color: #ffffff;
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
          color: #9ca3af;
          max-width: 42rem;
          margin: 0 auto 1.5rem;
        }

        .last-updated-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 6px;
          font-size: 0.75rem;
          font-weight: 500;
          color: #9ca3af;
        }

        /* Main Layout */
        .layout-wrapper {
          max-width: 1200px;
          width: 100%;
          margin: 0 auto;
          padding: 3rem 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          position: relative;
          z-index: 10;
        }

        @media (min-width: 1024px) {
          .layout-wrapper {
            grid-template-columns: 260px 1fr;
          }
        }

        /* Sidebar */
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
          color: #9ca3af;
          font-size: 0.875rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .sidebar-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          color: #ffffff;
        }

        .sidebar-btn.active {
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
          font-weight: 600;
        }

        /* Content */
        .content-body {
          display: flex;
          flex-direction: column;
          gap: 2.5rem;
        }

        .section-block {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          padding: 2rem;
          transition: all 0.3s;
          scroll-margin-top: 90px;
        }

        .section-block:hover {
          border-color: rgba(16, 185, 129, 0.3);
          transform: translateY(-2px);
        }

        .section-heading-box {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 1.25rem;
          padding-bottom: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .section-icon-container {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(16, 185, 129, 0.1);
          color: #10b981;
        }

        .section-block-title {
          font-size: 1.35rem;
          font-weight: 700;
          color: #ffffff;
          letter-spacing: -0.02em;
        }

        .section-main-paragraph {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #9ca3af;
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
          gap: 8px;
          align-items: flex-start;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
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
          color: #9ca3af;
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
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          text-decoration: none;
          transition: all 0.2s;
        }

        .contact-detail-card:hover {
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.05);
          transform: translateY(-2px);
        }

        .contact-avatar-box {
          width: 42px;
          height: 42px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
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
          color: #6b7280;
          margin-bottom: 2px;
        }

        .contact-main-value {
          font-weight: 600;
          color: #e5e7eb;
          font-size: 0.85rem;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
        }

        /* Footer */
        .footer {
          background: #0a0a0f;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 4rem 0 3rem;
          margin-top: auto;
          position: relative;
          z-index: 10;
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
          color: #4ade80;
        }

        .footer-logo-text {
          font-size: 1.1rem;
          font-weight: 700;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          letter-spacing: -0.02em;
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
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 1.5rem;
          text-align: center;
          font-size: 0.8rem;
          color: #6b7280;
        }

        /* Scroll to Top Button */
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
          transition: all 0.2s ease;
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
          box-shadow: 0 6px 16px rgba(16, 185, 129, 0.4);
        }

        .scroll-top-btn svg {
          color: white;
        }

        @media (max-width: 768px) {
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

      {/* Animated Background Blobs */}
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
              <Home size={16} />
              Home
            </a>
            <button 
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(true)}
            >
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
            <button 
              className="mobile-menu-item"
              onClick={() => { window.location.href = '/digitalkhata/'; setMobileMenuOpen(false); }}
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
                <span style={{ color: '#10b981' }}>{section.icon}</span>
                <span>{section.title}</span>
              </button>
            ))}
          </div>
        </div>
      </>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-badge">
          <FileText size={14} />
          <span>Terms & Conditions</span>
          <Sparkles size={12} />
        </div>
        <h1 className="hero-title">Terms and Conditions</h1>
        <p className="hero-description">
          Please read these Terms and Conditions carefully before using Digital Khata. By accessing or using our service, you agree to be bound by these terms.
        </p>
        <div className="last-updated-badge">
          <Clock size={12} />
          <span>Effective Date: {lastUpdated}</span>
        </div>
      </section>

      {/* Main Layout */}
      <div className="layout-wrapper">
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

      {/* Footer */}
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
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-links">
                <li><a href="mailto:anujkattel62@gmail.com" className="footer-link">anujkattel62@gmail.com</a></li>
                <li><a href="tel:+9779825995421" className="footer-link">9825995421</a></li>
                <li><span className="footer-link">Jhapa, Nepal</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            © {new Date().getFullYear()} Digital Khata. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <button 
        className={`scroll-top-btn ${showScrollTop ? 'visible' : ''}`}
        onClick={scrollToTop}
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
};

export default TermsAndConditions;