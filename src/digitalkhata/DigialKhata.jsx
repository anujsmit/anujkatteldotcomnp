import React, { useState, useEffect } from 'react';

const APK_URL = "https://github.com/anujsmit/digitalkhataapp/releases/download/digitalkhata/Digital_khata.apk";

const DigitalKhata = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: "fas fa-users", title: "Customer Management", description: "Manage customers, track dues, and maintain communication history easily." },
    { icon: "fas fa-receipt", title: "Transaction Tracking", description: "Record credit/debit transactions with detailed notes and timestamps." },
    { icon: "fas fa-chart-line", title: "Business Analytics", description: "Get real-time reports and insights about your business performance." },
    { icon: "fas fa-file-invoice", title: "Invoice Management", description: "Create professional invoices, track payments, and manage dues." },
    { icon: "fas fa-mobile-alt", title: "Mobile First", description: "Access your business data anytime, anywhere from your mobile device." },
    { icon: "fas fa-shield-alt", title: "Secure & Reliable", description: "Your data is encrypted and securely stored with enterprise-grade security." }
  ];

  const pricing = [
    { name: "Free", price: "रु 0", period: "/month", popular: false, features: ["Up to 15 customers", "Basic transaction tracking", "Simple reporting", "Contains ads", "30 days data history"] },
    { name: "Premium", price: "रु 499", period: "/month", popular: true, features: ["Unlimited customers", "Advanced analytics", "No advertisements", "Priority support", "Export data (Excel, PDF)"] },
    { name: "Yearly", price: "रु 4900", period: "/year", popular: false, features: ["Everything in Premium", "2 months free", "Priority support", "No advertisements", "Dedicated account manager"] }
  ];

  const testimonials = [
    { name: "Ram Shrestha", role: "Store Owner", content: "Digital Khata has transformed my business! Premium plan is worth every rupee.", rating: 5 },
    { name: "Sita Gurung", role: "Business Owner", content: "The free plan is great for small shops. The features are amazing!", rating: 5 },
    { name: "Hari Bahadur", role: "Retailer", content: "Upgraded to Premium just for the no-ads feature. Best decision ever!", rating: 5 }
  ];

  const faqs = [
    { q: "Is Digital Khata really free?", a: "Yes! We offer a completely free plan with basic features. The free plan includes advertisements to support the service." },
    { q: "Is my data secure?", a: "Absolutely! We use bank-level encryption to protect your data. Your information is safe and secure with us." },
    { q: "Can I switch from Free to Premium?", a: "Absolutely! You can upgrade anytime from within the app. Your data will be preserved." },
    { q: "What payment methods do you accept?", a: "We accept Esewa, Khalti, ConnectIPS, and all major credit/debit cards." }
  ];

  const stats = [
    { number: "10,000+", label: "Active Users" },
    { number: "50,000+", label: "Daily Transactions" },
    { number: "99.9%", label: "Uptime" },
    { number: "4.9", label: "User Rating" }
  ];

  return (
    <>
      {/* Font Awesome CDN */}
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          line-height: 1.6;
          color: #1a1a2e;
          overflow-x: hidden;
        }

        /* Smooth Scroll */
        html {
          scroll-behavior: smooth;
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
          border-bottom: 1px solid rgba(0, 0, 0, 0.05);
        }

        .navbar.scrolled {
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
          padding: 0.5rem 0;
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
          font-size: 1.75rem;
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

        .download-btn {
          background: #059669;
          color: white !important;
          padding: 0.5rem 1.25rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }

        .download-btn:hover {
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

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 1rem 2rem;
          background: white;
          border-top: 1px solid #e5e7eb;
        }

        .mobile-menu.open {
          display: flex;
        }

        .mobile-menu a {
          padding: 0.75rem 0;
          text-decoration: none;
          color: #4b5563;
        }

        .mobile-menu a:hover {
          color: #059669;
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

        .hero-title {
          font-size: 3rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          animation: fadeInUp 0.6s ease-out;
        }

        .hero-highlight {
          color: #059669;
        }

        .hero-description {
          font-size: 1.125rem;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto 2rem;
          animation: fadeInUp 0.6s ease-out 0.1s both;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          animation: fadeInUp 0.6s ease-out 0.2s both;
        }

        .hero-buttons a,
        .hero-buttons button {
          text-decoration: none;
        }

        .btn-primary {
          background: #059669;
          color: white;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-primary:hover {
          background: #047857;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(5, 150, 105, 0.3);
        }

        .btn-secondary {
          background: transparent;
          color: #059669;
          padding: 0.75rem 2rem;
          border: 2px solid #059669;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
          text-decoration: none;
        }

        .btn-secondary:hover {
          background: rgba(5, 150, 105, 0.05);
          transform: translateY(-2px);
        }

        .hero-note {
          font-size: 0.875rem;
          color: #9ca3af;
          margin-top: 2rem;
        }

        /* Stats Section */
        .stats-section {
          background: #f9fafb;
          padding: 3rem 2rem;
        }

        .stats-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 2rem;
          text-align: center;
        }

        .stat-number {
          font-size: 2rem;
          font-weight: bold;
          color: #059669;
          margin-bottom: 0.5rem;
        }

        .stat-label {
          color: #6b7280;
        }

        /* Section Styles */
        .section {
          padding: 5rem 2rem;
        }

        .section-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .section-title {
          font-size: 2.25rem;
          font-weight: bold;
          text-align: center;
          color: #1f2937;
          margin-bottom: 1rem;
        }

        .section-subtitle {
          text-align: center;
          color: #6b7280;
          max-width: 600px;
          margin: 0 auto 3rem;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .feature-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
          transition: all 0.3s;
          cursor: pointer;
          text-align: center;
        }

        .feature-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          border-color: #059669;
        }

        .feature-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          color: #059669;
          display: inline-block;
        }

        .feature-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
        }

        .feature-description {
          color: #6b7280;
          font-size: 0.875rem;
        }

        /* Problem Solution Grid */
        .problem-solution-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }

        .problem-box, .solution-box {
          background: #f9fafb;
          padding: 2rem;
          border-radius: 1rem;
        }

        .box-title {
          font-size: 1.5rem;
          font-weight: bold;
          margin-bottom: 1.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .problem-list, .solution-list {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .list-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          color: #4b5563;
        }

        .check-icon {
          color: #059669;
          font-weight: bold;
        }

        .close-icon {
          color: #ef4444;
          font-weight: bold;
        }

        /* Pricing Grid */
        .pricing-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .pricing-card {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 1rem;
          padding: 2rem;
          position: relative;
          transition: all 0.3s;
        }

        .pricing-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .pricing-card.popular {
          border: 2px solid #059669;
          transform: scale(1.02);
        }

        .popular-badge {
          position: absolute;
          top: -0.75rem;
          left: 50%;
          transform: translateX(-50%);
          background: #059669;
          color: white;
          padding: 0.25rem 1rem;
          border-radius: 2rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .pricing-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: #1f2937;
          margin-bottom: 1rem;
          text-align: center;
        }

        .pricing-price {
          text-align: center;
          margin-bottom: 1.5rem;
        }

        .price-amount {
          font-size: 2.5rem;
          font-weight: bold;
          color: #059669;
        }

        .price-period {
          color: #6b7280;
        }

        .pricing-features {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .pricing-features li {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 0;
          color: #4b5563;
          font-size: 0.875rem;
        }

        .pricing-features li i {
          color: #059669;
          width: 1.25rem;
        }

        .pricing-btn {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 600;
        }

        .pricing-btn-primary {
          background: #059669;
          color: white;
          border: none;
        }

        .pricing-btn-primary:hover {
          background: #047857;
          transform: translateY(-2px);
        }

        .pricing-btn-secondary {
          background: transparent;
          color: #059669;
          border: 2px solid #059669;
        }

        .pricing-btn-secondary:hover {
          background: rgba(5, 150, 105, 0.05);
          transform: translateY(-2px);
        }

        /* Testimonials Grid */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .testimonial-card {
          background: white;
          padding: 1.5rem;
          border-radius: 1rem;
          border: 1px solid #e5e7eb;
          transition: all 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }

        .star {
          color: #fbbf24;
          font-size: 1rem;
        }

        .testimonial-content {
          color: #4b5563;
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .author-avatar {
          width: 3rem;
          height: 3rem;
          background: #d1fae5;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          color: #059669;
          font-size: 1.25rem;
        }

        .author-name {
          font-weight: 600;
          color: #1f2937;
        }

        .author-role {
          font-size: 0.875rem;
          color: #6b7280;
        }

        /* FAQ Section */
        .faq-grid {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }

        .faq-item {
          background: #f9fafb;
          padding: 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.3s;
          cursor: pointer;
        }

        .faq-item:hover {
          background: #f3f4f6;
          transform: translateX(5px);
        }

        .faq-question {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .faq-question i {
          color: #059669;
        }

        .faq-answer {
          color: #6b7280;
          padding-left: 1.75rem;
        }

        /* Contact Section */
        .contact-section {
          background: #f9fafb;
          padding: 5rem 2rem;
        }

        .contact-grid {
          max-width: 900px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
        }

        .contact-card {
          background: white;
          padding: 1.5rem;
          border-radius: 0.75rem;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          display: block;
        }

        .contact-card:hover {
          transform: translateY(-3px);
          border-color: #059669;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }

        .contact-icon {
          font-size: 2rem;
          margin-bottom: 0.5rem;
          color: #059669;
        }

        .contact-label {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 0.25rem;
        }

        .contact-value {
          font-size: 0.875rem;
          color: #6b7280;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #059669, #047857);
          padding: 5rem 2rem;
          text-align: center;
        }

        .cta-title {
          font-size: 2rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
        }

        .cta-description {
          color: #d1fae5;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn-cta-primary {
          background: white;
          color: #059669;
          padding: 0.75rem 2rem;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
          font-weight: 600;
          text-decoration: none;
        }

        .btn-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .btn-cta-secondary {
          background: transparent;
          color: white;
          padding: 0.75rem 2rem;
          border: 2px solid white;
          border-radius: 0.5rem;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
          font-weight: 600;
        }

        .btn-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Footer */
        .footer {
          background: #111827;
          color: white;
          padding: 3rem 2rem;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          margin-bottom: 2rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1rem;
        }

        .footer-logo-icon {
          font-size: 1.5rem;
        }

        .footer-logo-text {
          font-size: 1.125rem;
          font-weight: bold;
        }

        .footer-description {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 1rem;
        }

        .footer-links {
          list-style: none;
        }

        .footer-links li {
          margin-bottom: 0.5rem;
        }

        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #059669;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
          font-size: 0.875rem;
        }

        /* Animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .nav-links {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .hero-title {
            font-size: 2rem;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
          }

          .problem-solution-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 1.75rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary, .btn-secondary {
            width: 100%;
            max-width: 250px;
            justify-content: center;
          }
        }

        @media (max-width: 480px) {
          .stats-container {
            grid-template-columns: 1fr;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .pricing-grid {
            grid-template-columns: 1fr;
          }

          .features-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="logo">
            <i className="fas fa-wallet logo-icon"></i>
            <span className="logo-text">Digital Khata</span>
          </div>
          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
            <a href="#faq">FAQ</a>
            <a href={APK_URL} className="download-btn">
              <i className="fas fa-download"></i> Download APK
            </a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#features" onClick={() => setMobileMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}>FAQ</a>
          <a href={APK_URL} onClick={() => setMobileMenuOpen(false)}><i className="fas fa-download"></i> Download APK</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Digital Khata for{' '}
            <span className="hero-highlight">Smart Business</span>
          </h1>
          <p className="hero-description">
            The ultimate business management app for small businesses in Nepal.
            Track customers, manage transactions, and grow with ease.
          </p>
          <div className="hero-buttons">
            <a href={APK_URL} className="btn-primary">
              <i className="fas fa-download"></i> Download for Android
            </a>
            <button className="btn-secondary">
              <i className="fas fa-play"></i> Watch Demo
            </button>
          </div>
          <p className="hero-note">
            <i className="fas fa-info-circle"></i> Free plan includes ads • Premium starts at रु 499/month
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, idx) => (
            <div key={idx}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section">
        <div className="section-container">
          <h2 className="section-title">Features You'll Love</h2>
          <p className="section-subtitle">Everything you need to manage your business efficiently</p>
          <div className="features-grid">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card">
                <i className={`${feature.icon} feature-icon`}></i>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem vs Solution */}
      <section className="section" style={{ background: '#f9fafb' }}>
        <div className="section-container">
          <div className="problem-solution-grid">
            <div className="problem-box">
              <h3 className="box-title">
                <i className="fas fa-exclamation-triangle" style={{ color: '#ef4444' }}></i>
                <span>The Problem</span>
              </h3>
              <div className="problem-list">
                <div className="list-item"><span className="close-icon"><i className="fas fa-times"></i></span> Paper khata gets lost or damaged</div>
                <div className="list-item"><span className="close-icon"><i className="fas fa-times"></i></span> Manual calculations lead to errors</div>
                <div className="list-item"><span className="close-icon"><i className="fas fa-times"></i></span> No easy way to track customer dues</div>
                <div className="list-item"><span className="close-icon"><i className="fas fa-times"></i></span> Time-consuming bookkeeping</div>
                <div className="list-item"><span className="close-icon"><i className="fas fa-times"></i></span> No business insights</div>
              </div>
            </div>
            <div className="solution-box">
              <h3 className="box-title">
                <i className="fas fa-check-circle" style={{ color: '#059669' }}></i>
                <span>Our Solution</span>
              </h3>
              <div className="solution-list">
                <div className="list-item"><span className="check-icon"><i className="fas fa-check"></i></span> Digital record keeping - never lose data</div>
                <div className="list-item"><span className="check-icon"><i className="fas fa-check"></i></span> Automatic 100% accurate calculations</div>
                <div className="list-item"><span className="check-icon"><i className="fas fa-check"></i></span> Real-time customer due tracking</div>
                <div className="list-item"><span className="check-icon"><i className="fas fa-check"></i></span> Save hours with automation</div>
                <div className="list-item"><span className="check-icon"><i className="fas fa-check"></i></span> Powerful analytics & insights</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="section-container">
          <h2 className="section-title">Simple Pricing</h2>
          <p className="section-subtitle">Choose the plan that works for you</p>
          <div className="pricing-grid">
            {pricing.map((plan, idx) => (
              <div key={idx} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                {plan.popular && <div className="popular-badge"><i className="fas fa-star"></i> Most Popular</div>}
                <div className="pricing-name">{plan.name}</div>
                <div className="pricing-price">
                  <span className="price-amount">{plan.price}</span>
                  <span className="price-period">{plan.period}</span>
                </div>
                <ul className="pricing-features">
                  {plan.features.map((feature, i) => (
                    <li key={i}>
                      <i className={`fas ${feature.includes('No ads') || feature.includes('Unlimited') ? 'fa-check-circle' : feature.includes('Contains ads') ? 'fa-ad' : 'fa-check'}`}></i>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`pricing-btn ${plan.popular ? 'pricing-btn-primary' : 'pricing-btn-secondary'}`}>
                  {plan.name === "Free" ? <><i className="fas fa-download"></i> Download Free</> : plan.name === "Yearly" ? <><i className="fas fa-tag"></i> Save 17%</> : <><i className="fas fa-crown"></i> Start Free Trial</>}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section" style={{ background: '#f9fafb' }}>
        <div className="section-container">
          <h2 className="section-title">What Our Users Say</h2>
          <p className="section-subtitle">Trusted by thousands of business owners</p>
          <div className="testimonials-grid">
            {testimonials.map((testimonial, idx) => (
              <div key={idx} className="testimonial-card">
                <div className="testimonial-rating">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star star"></i>
                  ))}
                </div>
                <p className="testimonial-content">"{testimonial.content}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div>
                    <div className="author-name">{testimonial.name}</div>
                    <div className="author-role">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="section">
        <div className="section-container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div key={idx} className="faq-item">
                <div className="faq-question">
                  <i className="fas fa-question-circle"></i>
                  <span>{faq.q}</span>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section">
        <div className="section-container">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Have questions? We're here to help</p>
          <div className="contact-grid">
            <a href="mailto:anujkattel62@gmail.com" className="contact-card">
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-label">Email</div>
              <div className="contact-value">anujkattel62@gmail.com</div>
            </a>
            <a href="tel:+9779825995421" className="contact-card">
              <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">9825995421</div>
            </a>
            <a href="https://wa.me/9779825995421" target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon"><i className="fab fa-whatsapp"></i></div>
              <div className="contact-label">WhatsApp</div>
              <div className="contact-value">9825995421</div>
            </a>
            <div className="contact-card">
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-label">Location</div>
              <div className="contact-value">Jhapa, Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="section-container">
          <h2 className="cta-title">Ready to Transform Your Business?</h2>
          <p className="cta-description">Join thousands of business owners who trust Digital Khata</p>
          <div className="cta-buttons">
            <a href={APK_URL} className="btn-cta-primary">
              <i className="fas fa-download"></i> Download Free
            </a>
            <button className="btn-cta-secondary">
              <i className="fas fa-crown"></i> Upgrade to Premium
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <i className="fas fa-wallet footer-logo-icon"></i>
                <span className="footer-logo-text">Digital Khata</span>
              </div>
              <p className="footer-description">Empowering small businesses in Nepal with digital solutions.</p>
            </div>
            <div>
              <h4 className="footer-title">Product</h4>
              <ul className="footer-links">
                <li><a href="#features"><i className="fas fa-chevron-right"></i> Features</a></li>
                <li><a href="#pricing"><i className="fas fa-chevron-right"></i> Pricing</a></li>
                <li><a href={APK_URL}><i className="fas fa-chevron-right"></i> Download</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                <li><a href="#"><i className="fas fa-chevron-right"></i> Privacy Policy</a></li>
                <li><a href="#"><i className="fas fa-chevron-right"></i> Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Connect</h4>
              <ul className="footer-links">
                <li><a href="mailto:anujkattel62@gmail.com"><i className="fas fa-envelope"></i> Email Us</a></li>
                <li><a href="https://wa.me/9779825995421"><i className="fab fa-whatsapp"></i> WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 Digital Khata. All rights reserved. | Made with <i className="fas fa-heart" style={{ color: '#ef4444' }}></i> in Nepal</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default DigitalKhata;