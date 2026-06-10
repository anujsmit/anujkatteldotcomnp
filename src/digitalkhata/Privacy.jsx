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
    Home,
    UserCheck,
    Share2
} from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPage = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [activeSection, setActiveSection] = useState('introduction');
    const lastUpdated = "June 1, 2024";

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 300);

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
        { id: 'data-sharing', title: 'Data Sharing', icon: <Share2 size={16} /> },
        { id: 'your-rights', title: 'Your Rights', icon: <UserCheck size={16} /> },
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
            icon: <Share2 className="w-5 h-5" />,
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
            icon: <UserCheck className="w-5 h-5" />,
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
                { icon: <Mail size={18} />, label: 'Email', value: 'anujkattel62@gmail.com', href: 'mailto:anujkattel62@gmail.com' },
                { icon: <Phone size={18} />, label: 'WhatsApp', value: '+977 9825995421', href: 'https://wa.me/9779825995421' },
                { icon: <MapPin size={18} />, label: 'Location', value: 'Jhapa, Nepal', href: null },
                { icon: <Globe size={18} />, label: 'Website', value: 'www.anujkattel.com.np', href: 'https://www.anujkattel.com.np' }
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
                    font-family: -apple-system, BlinkMacSystemFont, 'Inter', system-ui, sans-serif;
                    -webkit-font-smoothing: antialiased;
                    background: #ffffff;
                }

                .privacy-page {
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

                /* Points Grid */
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

                /* Contact Grid */
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

                /* Trust Badges */
                .trust-badges-bar {
                    margin-top: 1rem;
                    padding: 1.5rem;
                    background: #f9fafb;
                    border: 1px solid #e5e7eb;
                    border-radius: 1rem;
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
                    gap: 8px;
                }

                .trust-icon {
                    color: #059669;
                }

                .trust-text {
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: #6b7280;
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
                        <Shield size={14} /> Privacy & Security
                    </div>
                    <h1 className="hero-title">
                        Your <span className="hero-highlight">Data</span>, Your Privacy
                    </h1>
                    <p className="hero-description">
                        We take your privacy seriously. Learn how we collect, use, and protect your information with enterprise-grade security.
                    </p>
                    <div className="last-updated-badge">
                        <Clock size={12} /> Last Updated: {lastUpdated}
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

                    {/* Trust Badges */}
                    <div className="trust-badges-bar">
                        <div className="badges-inner-flex">
                            <div className="trust-item"><Lock className="trust-icon" size={16} /><span className="trust-text">AES-256 Bit Encryption</span></div>
                            <div className="trust-item"><Shield className="trust-icon" size={16} /><span className="trust-text">GDPR Compliant</span></div>
                            <div className="trust-item"><Fingerprint className="trust-icon" size={16} /><span className="trust-text">Biometric Security</span></div>
                            <div className="trust-item"><Zap className="trust-icon" size={16} /><span className="trust-text">Real-time Backup</span></div>
                        </div>
                    </div>
                </main>
            </div>

            {/* Footer - Matching Homepage */}
            <footer className="footer">
                <div className="footer-container">
                    <div className="footer-grid">
                        <div>
                            <div className="footer-logo-box">
                                <Wallet className="footer-logo-icon" />
                                <span className="footer-logo-text">Digital Khata</span>
                            </div>
                            <p className="footer-description">Empowering small businesses with secure digital ledger solutions.</p>
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
                                <li><Link to="/digitalkhata/termsandcondition" className="footer-link">Terms & Conditions</Link></li>
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

export default PrivacyPage;