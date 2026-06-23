import React, { useEffect, useRef, useState } from "react";

const TermsOfUse = () => {
  const [scrolled, setScrolled] = useState(false);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    sectionRefs.current.forEach((el) => { if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const sections = [
    {
      icon: "fas fa-handshake",
      title: "1. Acceptance of Terms",
      content: "By accessing or using ServeX, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, please do not use our services.",
      type: "text"
    },
    {
      icon: "fas fa-concierge-bell",
      title: "2. Description of Services",
      content: "ServeX is a platform that connects customers with trusted service professionals for home and business services such as plumbing, electrical work, painting, carpentry, cleaning, AC repair, and other related services.",
      type: "text"
    },
    {
      icon: "fas fa-user-circle",
      title: "3. User Accounts",
      items: [
        "You must provide accurate and complete information when registering.",
        "You are responsible for maintaining the security of your account credentials.",
        "ServeX may suspend or terminate accounts that violate these terms."
      ],
      type: "list"
    },
    {
      icon: "fas fa-clipboard-check",
      title: "4. User Responsibilities",
      items: [
        "Provide accurate and detailed service request information.",
        "Use the platform lawfully, respectfully, and as intended.",
        "Pay agreed service fees in a timely manner when applicable.",
        "Maintain professional and courteous behavior at all times."
      ],
      type: "list"
    },
    {
      icon: "fas fa-calendar-alt",
      title: "5. Service Requests & Bookings",
      content: "Customers can submit service requests through the platform. ServeX may assign requests to suitable service providers based on availability, location, and service type. Booking confirmation is subject to provider acceptance.",
      type: "text"
    },
    {
      icon: "fas fa-ban",
      title: "6. Prohibited Activities",
      items: [
        "Using the platform for any illegal or unauthorized purpose.",
        "Creating fake accounts or impersonating other users or entities.",
        "Attempting to gain unauthorized access to our systems or data.",
        "Posting harmful, offensive, discriminatory, or misleading content.",
        "Distributing malware, spam, or malicious software of any kind."
      ],
      type: "list"
    },
    {
      icon: "fas fa-star-half-alt",
      title: "7. Ratings and Reviews",
      content: "Reviews must reflect genuine service experiences and be honest and fair. ServeX reserves the right to remove, edit, or moderate inappropriate, defamatory, or misleading reviews at its discretion.",
      type: "text"
    },
    {
      icon: "fas fa-copyright",
      title: "8. Intellectual Property",
      content: "All ServeX branding, logos, designs, software, interfaces, and content are owned by ServeX and protected under applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without explicit written permission.",
      type: "text"
    },
    {
      icon: "fas fa-exclamation-triangle",
      title: "9. Limitation of Liability",
      content: "ServeX provides services on an \"as-is\" basis and is not liable for indirect, incidental, special, or consequential damages resulting from the use of the platform. Our total liability shall not exceed the amount paid by you for the specific service in question.",
      type: "text"
    },
    {
      icon: "fas fa-gavel",
      title: "10. Governing Law",
      content: "These Terms of Use shall be governed by and interpreted under the laws of Nepal. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Nepal.",
      type: "text"
    },
    {
      icon: "fas fa-sync-alt",
      title: "11. Changes to Terms",
      content: "We may update these Terms of Use from time to time to reflect changes in our practices or legal requirements. Continued use of the platform after updates constitutes acceptance of the revised terms.",
      type: "text"
    }
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />

      <style>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }

        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
          line-height: 1.6;
          color: #0f172a;
          overflow-x: hidden;
          background: #ffffff;
        }

        html { scroll-behavior: smooth; }

        /* Scroll reveal */
        .reveal-up {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-up.revealed { opacity: 1; transform: translateY(0); }
        .stagger-1 { transition-delay: 0.04s !important; }
        .stagger-2 { transition-delay: 0.08s !important; }
        .stagger-3 { transition-delay: 0.12s !important; }
        .stagger-4 { transition-delay: 0.16s !important; }
        .stagger-5 { transition-delay: 0.2s !important; }
        .stagger-6 { transition-delay: 0.24s !important; }
        .stagger-7 { transition-delay: 0.28s !important; }
        .stagger-8 { transition-delay: 0.32s !important; }
        .stagger-9 { transition-delay: 0.36s !important; }
        .stagger-10 { transition-delay: 0.4s !important; }
        .stagger-11 { transition-delay: 0.44s !important; }
        .stagger-12 { transition-delay: 0.48s !important; }

        /* Navigation */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 1rem 0;
          background: rgba(15, 23, 42, 0.95);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.85);
          border-bottom: 1px solid rgba(0, 0, 0, 0.06);
          box-shadow: 0 1px 20px rgba(0, 0, 0, 0.04);
          padding: 0.6rem 0;
        }

        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          cursor: pointer;
          text-decoration: none;
        }

        .logo-icon-wrap {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
          box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
        }

        .logo-text {
          font-size: 1.3rem;
          font-weight: 800;
          color: white;
          letter-spacing: -0.02em;
        }

        .navbar.scrolled .logo-text { color: #0f172a; }
        .logo-text span { color: #60a5fa; }
        .navbar.scrolled .logo-text span { color: #2563eb; }

        .nav-back {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: rgba(255, 255, 255, 0.7);
          text-decoration: none;
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.5rem 1rem;
          border-radius: 10px;
          transition: all 0.2s;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .navbar.scrolled .nav-back {
          color: #475569;
          border-color: #e2e8f0;
        }

        .nav-back:hover {
          color: white;
          background: rgba(255, 255, 255, 0.08);
        }

        .navbar.scrolled .nav-back:hover {
          color: #2563eb;
          background: #eff6ff;
          border-color: #bfdbfe;
        }

        .nav-back i { font-size: 0.75rem; }

        /* Page Header */
        .page-header {
          padding: 8rem 2rem 4rem;
          background: linear-gradient(160deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          position: relative;
          overflow: hidden;
        }

        .page-header::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -10%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1), transparent 70%);
          pointer-events: none;
        }

        .page-header::after {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .page-header-content {
          max-width: 800px;
          margin: 0 auto;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        .page-header-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(99, 102, 241, 0.15);
          border: 1px solid rgba(99, 102, 241, 0.25);
          color: #a78bfa;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          margin-bottom: 1.25rem;
          letter-spacing: 0.06em;
          text-transform: uppercase;
        }

        .page-header h1 {
          font-size: 3rem;
          font-weight: 900;
          color: white;
          margin-bottom: 0.75rem;
          letter-spacing: -0.03em;
        }

        .page-header-date {
          color: #64748b;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .page-header-date i { color: #7c3aed; font-size: 0.8rem; }

        /* Content */
        .content-section {
          padding: 4rem 2rem 6rem;
        }

        .content-container {
          max-width: 800px;
          margin: 0 auto;
        }

        .policy-section {
          margin-bottom: 1.25rem;
          background: white;
          border-radius: 20px;
          border: 1px solid #f1f5f9;
          overflow: hidden;
          transition: all 0.3s;
        }

        .policy-section:hover {
          border-color: #e2e8f0;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.04);
        }

        .policy-section-header {
          padding: 1.5rem 2rem;
          display: flex;
          align-items: flex-start;
          gap: 1rem;
        }

        .policy-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #f1f5f9, #eef2ff);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s;
        }

        .policy-icon i {
          font-size: 1rem;
          color: #7c3aed;
          transition: all 0.3s;
        }

        .policy-section:hover .policy-icon {
          background: linear-gradient(135deg, #7c3aed, #6366f1);
        }

        .policy-section:hover .policy-icon i {
          color: white;
        }

        .policy-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          letter-spacing: -0.01em;
          padding-top: 0.6rem;
        }

        .policy-body {
          padding: 0 2rem 1.75rem 4.5rem;
        }

        .policy-text {
          color: #475569;
          font-size: 0.925rem;
          line-height: 1.8;
        }

        .policy-list {
          list-style: none;
          padding: 0;
        }

        .policy-list li {
          position: relative;
          padding: 0.6rem 0 0.6rem 1.75rem;
          color: #475569;
          font-size: 0.925rem;
          line-height: 1.7;
          border-bottom: 1px solid #f8fafc;
        }

        .policy-list li:last-child { border-bottom: none; }

        .policy-list li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 1.1rem;
          width: 6px;
          height: 6px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          border-radius: 50%;
        }

        /* Contact Card */
        .contact-card-section {
          margin-top: 2rem;
        }

        .contact-card {
          background: linear-gradient(135deg, #f8fafc, #f1f5f9);
          border-radius: 20px;
          padding: 2.5rem;
          border: 1px solid #e2e8f0;
          position: relative;
          overflow: hidden;
        }

        .contact-card::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -30%;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(124, 58, 237, 0.06), transparent 70%);
          pointer-events: none;
        }

        .contact-card-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
          position: relative;
          z-index: 1;
        }

        .contact-card-icon {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #7c3aed, #6366f1);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 1rem;
        }

        .contact-card-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .contact-card-subtitle {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 1rem;
          position: relative;
          z-index: 1;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1rem;
          background: white;
          border-radius: 14px;
          border: 1px solid #f1f5f9;
          text-decoration: none;
          transition: all 0.25s;
        }

        .contact-item:hover {
          border-color: #7c3aed;
          box-shadow: 0 4px 15px rgba(124, 58, 237, 0.08);
          transform: translateY(-2px);
        }

        .contact-item-icon {
          width: 38px;
          height: 38px;
          background: linear-gradient(135deg, #f1f5f9, #eef2ff);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.25s;
        }

        .contact-item-icon i { font-size: 0.9rem; color: #7c3aed; }

        .contact-item:hover .contact-item-icon {
          background: linear-gradient(135deg, #7c3aed, #6366f1);
        }

        .contact-item:hover .contact-item-icon i { color: white; }

        .contact-item-label {
          font-size: 0.7rem;
          color: #94a3b8;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.06em;
        }

        .contact-item-value {
          font-size: 0.9rem;
          color: #0f172a;
          font-weight: 600;
        }

        /* Footer */
        .footer {
          background: #0f172a;
          color: white;
          padding: 2rem;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
        }

        .footer-left {
          display: flex;
          align-items: center;
          gap: 0.6rem;
        }

        .footer-logo-icon-wrap {
          width: 32px;
          height: 32px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.8rem;
        }

        .footer-logo-text {
          font-size: 1rem;
          font-weight: 800;
        }

        .footer-logo-text span { color: #60a5fa; }

        .footer-copy {
          color: #475569;
          font-size: 0.8rem;
        }

        .footer-heart { color: #ef4444; }

        /* Responsive */
        @media (max-width: 768px) {
          .page-header { padding: 7rem 1.5rem 3rem; }
          .page-header h1 { font-size: 2.25rem; }
          .content-section { padding: 3rem 1rem 4rem; }
          .policy-section-header { padding: 1.25rem 1.5rem; }
          .policy-body { padding: 0 1.5rem 1.5rem 1.5rem; }
          .contact-card { padding: 1.5rem; }
          .contact-grid { grid-template-columns: 1fr; }
          .footer-container { flex-direction: column; text-align: center; }
        }

        @media (max-width: 480px) {
          .page-header h1 { font-size: 1.875rem; }
          .policy-section-header { padding: 1rem 1.25rem; flex-direction: column; gap: 0.75rem; }
          .policy-body { padding: 0 1.25rem 1.25rem 1.25rem; }
          .policy-title { padding-top: 0; }
        }
      `}</style>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="/servex/" className="logo">
            <div className="logo-icon-wrap"><i className="fas fa-tools"></i></div>
            <span className="logo-text">Serve<span>X</span></span>
          </a>
          <a href="/servex/" className="nav-back">
            <i className="fas fa-arrow-left"></i> Back to Home
          </a>
        </div>
      </nav>

      {/* Page Header */}
      <section className="page-header">
        <div className="page-header-content">
          <div className="page-header-badge">
            <i className="fas fa-file-contract"></i> Legal Document
          </div>
          <h1>Terms of Use</h1>
          <div className="page-header-date">
            <i className="fas fa-calendar-alt"></i>
            Last Updated: June 23, 2026
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="content-section">
        <div className="content-container">
          {sections.map((section, idx) => (
            <div
              key={idx}
              className={`policy-section reveal-up stagger-${Math.min(idx + 1, 12)}`}
              ref={addToRefs}
            >
              <div className="policy-section-header">
                <div className="policy-icon">
                  <i className={section.icon}></i>
                </div>
                <h2 className="policy-title">{section.title}</h2>
              </div>
              <div className="policy-body">
                {section.type === 'text' ? (
                  <p className="policy-text">{section.content}</p>
                ) : (
                  <ul className="policy-list">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}

          {/* Contact Card */}
          <div className="contact-card-section reveal-up stagger-12" ref={addToRefs}>
            <div className="contact-card">
              <div className="contact-card-header">
                <div className="contact-card-icon">
                  <i className="fas fa-headset"></i>
                </div>
                <div>
                  <div className="contact-card-title">Questions About These Terms?</div>
                  <div className="contact-card-subtitle">Reach out to our support team for any clarifications.</div>
                </div>
              </div>
              <div className="contact-grid">
                <a href="mailto:servex@gmail.com" className="contact-item">
                  <div className="contact-item-icon"><i className="fas fa-envelope"></i></div>
                  <div>
                    <div className="contact-item-label">Email</div>
                    <div className="contact-item-value">servex@gmail.com</div>
                  </div>
                </a>
                <a href="tel:+9779825995421" className="contact-item">
                  <div className="contact-item-icon"><i className="fas fa-phone-alt"></i></div>
                  <div>
                    <div className="contact-item-label">Phone</div>
                    <div className="contact-item-value">9825995421</div>
                  </div>
                </a>
                <a href="https://wa.me/9779825995421" target="_blank" rel="noopener noreferrer" className="contact-item">
                  <div className="contact-item-icon"><i className="fab fa-whatsapp"></i></div>
                  <div>
                    <div className="contact-item-label">WhatsApp</div>
                    <div className="contact-item-value">9825995421</div>
                  </div>
                </a>
                <div className="contact-item" style={{ cursor: 'default' }}>
                  <div className="contact-item-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div>
                    <div className="contact-item-label">Location</div>
                    <div className="contact-item-value">Nepal</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-left">
            <div className="footer-logo-icon-wrap"><i className="fas fa-tools"></i></div>
            <span className="footer-logo-text">Serve<span>X</span></span>
          </div>
          <div className="footer-copy">
            © 2026 ServeX. All rights reserved. · Made with <i className="fas fa-heart footer-heart"></i> in Nepal
          </div>
        </div>
      </footer>
    </>
  );
};

export default TermsOfUse;