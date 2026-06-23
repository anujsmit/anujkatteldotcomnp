import React, { useState, useEffect, useRef } from 'react';

const ServeX = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [counts, setCounts] = useState([0, 0, 0, 0]);
  const [countsStarted, setCountsStarted] = useState(false);

  const statsRef = useRef(null);
  const sectionRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll reveal observer
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
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  // Animated counter
  useEffect(() => {
    const targets = [10000, 500, 4.9, 98];
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countsStarted) {
          setCountsStarted(true);
          targets.forEach((target, idx) => {
            const isFloat = target % 1 !== 0;
            const duration = 2000;
            const steps = 60;
            const increment = target / steps;
            let current = 0;
            const interval = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(interval);
              }
              setCounts((prev) => {
                const next = [...prev];
                next[idx] = isFloat ? parseFloat(current.toFixed(1)) : Math.floor(current);
                return next;
              });
            }, duration / steps);
          });
        }
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [countsStarted]);

  const addToRefs = (el) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  const services = [
    { icon: "fas fa-wrench", title: "Plumbing Services", description: "Expert plumbing solutions for homes and businesses. From leak repairs to full installations.", color: "#0ea5e9" },
    { icon: "fas fa-bolt", title: "Electrical Services", description: "Professional electrical work including wiring, repairs, installations, and safety inspections.", color: "#f59e0b" },
    { icon: "fas fa-paint-roller", title: "Painting Services", description: "Interior and exterior painting with premium quality paints and professional finish.", color: "#ec4899" },
    { icon: "fas fa-hammer", title: "Carpentry Services", description: "Custom furniture, repairs, installations, and woodworking for all your needs.", color: "#f97316" },
    { icon: "fas fa-broom", title: "Cleaning Services", description: "Deep cleaning, regular maintenance, and specialized cleaning for homes and offices.", color: "#10b981" },
    { icon: "fas fa-snowflake", title: "AC Repair & Maintenance", description: "AC installation, repair, servicing, and maintenance to keep you cool all year.", color: "#6366f1" }
  ];

  const whyChooseUs = [
    { icon: "fas fa-user-check", title: "Verified Professionals", description: "All service providers are verified and background checked for your safety." },
    { icon: "fas fa-shield-alt", title: "Service Guarantee", description: "We stand behind our work with a 100% satisfaction guarantee." },
    { icon: "fas fa-clock", title: "On-Time Service", description: "Punctual service delivery with real-time tracking and updates." },
    { icon: "fas fa-phone-alt", title: "24/7 Support", description: "Round-the-clock customer support for all your service needs." },
    { icon: "fas fa-tags", title: "Transparent Pricing", description: "No hidden charges. Get upfront pricing before any work begins." },
    { icon: "fas fa-star", title: "Trusted by Thousands", description: "Over 10,000 satisfied customers trust ServeX for their service needs." }
  ];

  const testimonials = [
    { name: "Rajesh Kumar", role: "Homeowner", content: "ServeX connected me with an amazing plumber. Fixed my leak in under an hour! Absolutely incredible service.", rating: 5 },
    { name: "Priya Sharma", role: "Business Owner", content: "Best cleaning service I've ever used. Professional, thorough, and the team was incredibly polite. Highly recommended!", rating: 5 },
    { name: "Sunil Thapa", role: "Property Manager", content: "Great platform for finding reliable contractors. The quality of service is outstanding. Will use again.", rating: 5 }
  ];

  const faqs = [
    { q: "How do I book a service?", a: "Simply browse our services, select what you need, choose a convenient time, and book instantly. You can also book through our mobile app for a faster experience." },
    { q: "Are the service providers verified?", a: "Yes! All service providers undergo thorough background checks, skill verification, and training before joining our platform. Your safety is our top priority." },
    { q: "What happens if I'm not satisfied with the service?", a: "We offer a satisfaction guarantee. If you're not happy, we'll re-do the service at no extra cost or provide a full refund. No questions asked." },
    { q: "How does pricing work?", a: "You get upfront pricing before booking. There are no hidden charges or surprise fees. What you see is what you pay." },
    { q: "Can I reschedule or cancel a booking?", a: "Absolutely! You can reschedule or cancel your booking up to 2 hours before the scheduled time at no extra charge through the app or website." }
  ];

  const statsTargets = [
    { value: "10,000+", label: "Services Completed", suffix: "+" },
    { value: "500+", label: "Expert Professionals", suffix: "+" },
    { value: "4.9", label: "Average Rating", suffix: "" },
    { value: "98%", label: "Satisfaction Rate", suffix: "%" }
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

        /* === SCROLL REVEAL === */
        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-up.revealed { opacity: 1; transform: translateY(0); }

        .reveal-scale {
          opacity: 0;
          transform: scale(0.92);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-scale.revealed { opacity: 1; transform: scale(1); }

        .reveal-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-left.revealed { opacity: 1; transform: translateX(0); }

        .reveal-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal-right.revealed { opacity: 1; transform: translateX(0); }

        .stagger-1 { transition-delay: 0.05s !important; }
        .stagger-2 { transition-delay: 0.1s !important; }
        .stagger-3 { transition-delay: 0.15s !important; }
        .stagger-4 { transition-delay: 0.2s !important; }
        .stagger-5 { transition-delay: 0.25s !important; }
        .stagger-6 { transition-delay: 0.3s !important; }

        /* === NAVIGATION === */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 1rem 0;
        }

        .navbar:not(.scrolled) {
          background: transparent;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.85);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
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

        .nav-links {
          display: flex;
          align-items: center;
          gap: 0.25rem;
        }

        .nav-links a {
          text-decoration: none;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.2s;
          font-weight: 500;
          font-size: 0.9rem;
          padding: 0.5rem 0.9rem;
          border-radius: 8px;
        }

        .navbar.scrolled .nav-links a { color: #475569; }

        .nav-links a:hover {
          color: white;
          background: rgba(255, 255, 255, 0.1);
        }

        .navbar.scrolled .nav-links a:hover {
          color: #2563eb;
          background: #eff6ff;
        }

        .nav-btn-download {
          margin-left: 0.75rem;
          padding: 0.55rem 1.25rem !important;
          background: linear-gradient(135deg, #2563eb, #4f46e5) !important;
          color: white !important;
          border-radius: 10px !important;
          font-weight: 600 !important;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          box-shadow: 0 4px 15px rgba(37, 99, 235, 0.3);
          transition: all 0.25s !important;
        }

        .nav-btn-download:hover {
          transform: translateY(-1px) !important;
          box-shadow: 0 6px 20px rgba(37, 99, 235, 0.4) !important;
          background: linear-gradient(135deg, #1d4ed8, #4338ca) !important;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 1.4rem;
          cursor: pointer;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          align-items: center;
          justify-content: center;
        }

        .navbar.scrolled .mobile-menu-btn { color: #0f172a; }

        .mobile-menu {
          display: none;
          flex-direction: column;
          padding: 1rem 2rem 1.5rem;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(0, 0, 0, 0.06);
        }

        .mobile-menu.open { display: flex; }

        .mobile-menu a {
          padding: 0.8rem 0;
          text-decoration: none;
          color: #334155;
          font-weight: 500;
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .mobile-menu a:last-child { border-bottom: none; }
        .mobile-menu a:hover { color: #2563eb; }

        /* === HERO === */
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: 7rem 2rem 5rem;
          background: linear-gradient(160deg, #0f172a 0%, #1e293b 40%, #0f172a 100%);
          overflow: hidden;
        }

        .hero::before {
          content: '';
          position: absolute;
          top: -20%;
          right: -10%;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.15) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero::after {
          content: '';
          position: absolute;
          bottom: -10%;
          left: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .hero-grid-pattern {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 60px 60px;
          pointer-events: none;
        }

        .hero-content {
          max-width: 1280px;
          margin: 0 auto;
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          align-items: center;
          position: relative;
          z-index: 1;
        }

        .hero-left { animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both; }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(37, 99, 235, 0.15);
          border: 1px solid rgba(37, 99, 235, 0.25);
          color: #60a5fa;
          padding: 0.35rem 1rem;
          border-radius: 100px;
          font-size: 0.8rem;
          font-weight: 600;
          margin-bottom: 1.5rem;
          letter-spacing: 0.02em;
        }

        .hero-badge i { font-size: 0.7rem; }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 1.25rem;
          line-height: 1.1;
          letter-spacing: -0.03em;
        }

        .hero-highlight {
          background: linear-gradient(135deg, #60a5fa, #a78bfa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-description {
          font-size: 1.1rem;
          color: #94a3b8;
          margin-bottom: 2rem;
          max-width: 480px;
          line-height: 1.7;
          font-weight: 400;
        }

        .hero-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          align-items: center;
        }

        .btn-play-store {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: white;
          color: #0f172a;
          padding: 0.75rem 1.75rem;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .btn-play-store:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
        }

        .btn-play-store .play-icon {
          font-size: 1.75rem;
          color: #0f172a;
        }

        .btn-play-store .play-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.15;
        }

        .btn-play-store .play-text small {
          font-size: 0.6rem;
          font-weight: 500;
          color: #64748b;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .btn-play-store .play-text span {
          font-size: 1rem;
        }

        .btn-hero-ghost {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: #94a3b8;
          padding: 0.75rem 1.5rem;
          border: 1px solid rgba(148, 163, 184, 0.2);
          border-radius: 14px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.25s;
        }

        .btn-hero-ghost:hover {
          color: white;
          border-color: rgba(255, 255, 255, 0.3);
          background: rgba(255, 255, 255, 0.05);
        }

        .hero-trust {
          margin-top: 2.5rem;
          display: flex;
          gap: 1.75rem;
          flex-wrap: wrap;
        }

        .hero-trust-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          color: #64748b;
          font-size: 0.8rem;
          font-weight: 500;
        }

        .hero-trust-item i {
          color: #34d399;
          font-size: 0.75rem;
        }

        /* Phone mockup */
        .hero-right {
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s both;
          position: relative;
        }

        .hero-phone-mockup {
          position: relative;
          width: 280px;
          height: 570px;
        }

        .phone-frame {
          width: 100%;
          height: 100%;
          background: #1a1a2e;
          border-radius: 44px;
          padding: 10px;
          box-shadow:
            0 30px 80px rgba(0, 0, 0, 0.4),
            0 0 0 1px rgba(255, 255, 255, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
          position: relative;
        }

        .phone-notch {
          position: absolute;
          top: 10px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 28px;
          background: #1a1a2e;
          border-radius: 0 0 18px 18px;
          z-index: 2;
        }

        .phone-screen {
          width: 100%;
          height: 100%;
          background: linear-gradient(160deg, #1e3a5f 0%, #0f172a 50%, #1a1040 100%);
          border-radius: 36px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: white;
          padding: 3.5rem 1.5rem 2rem;
          text-align: center;
          gap: 0.5rem;
          overflow: hidden;
          position: relative;
        }

        .phone-screen::before {
          content: '';
          position: absolute;
          top: -30%;
          right: -30%;
          width: 200px;
          height: 200px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.3), transparent 70%);
          pointer-events: none;
        }

        .phone-screen-icon {
          width: 70px;
          height: 70px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.75rem;
          margin-bottom: 1rem;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.4);
          position: relative;
          z-index: 1;
        }

        .phone-screen h3 {
          font-size: 1.5rem;
          font-weight: 800;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 1;
        }

        .phone-screen p {
          opacity: 0.7;
          font-size: 0.8rem;
          max-width: 180px;
          line-height: 1.5;
          position: relative;
          z-index: 1;
        }

        .phone-mini-cards {
          display: flex;
          gap: 0.5rem;
          margin-top: 1.25rem;
          position: relative;
          z-index: 1;
        }

        .phone-mini-card {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          padding: 0.6rem 0.75rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.3rem;
        }

        .phone-mini-card i { font-size: 1rem; color: #60a5fa; }
        .phone-mini-card span { font-size: 0.55rem; color: rgba(255, 255, 255, 0.7); font-weight: 500; }

        .phone-rating-badge {
          position: absolute;
          bottom: 2rem;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 0.4rem;
          z-index: 1;
        }

        .phone-rating-badge i { color: #fbbf24; font-size: 0.65rem; }

        /* Floating decorations around phone */
        .float-card {
          position: absolute;
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.12);
          border-radius: 14px;
          padding: 0.75rem 1rem;
          display: flex;
          align-items: center;
          gap: 0.6rem;
          animation: float 6s ease-in-out infinite;
          z-index: 2;
        }

        .float-card-1 {
          top: 15%;
          left: -30px;
          animation-delay: 0s;
        }

        .float-card-2 {
          bottom: 20%;
          right: -25px;
          animation-delay: 2s;
        }

        .float-card-icon {
          width: 32px;
          height: 32px;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.85rem;
        }

        .float-card-text {
          color: white;
          font-size: 0.7rem;
          font-weight: 600;
          line-height: 1.3;
        }

        .float-card-text small {
          color: rgba(255, 255, 255, 0.5);
          font-weight: 400;
          font-size: 0.6rem;
          display: block;
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }

        /* === STATS === */
        .stats-section {
          background: white;
          padding: 0;
          position: relative;
          z-index: 2;
          margin-top: -3rem;
        }

        .stats-container {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          background: white;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.04);
          overflow: hidden;
        }

        .stat-item {
          padding: 2rem 1.5rem;
          text-align: center;
          position: relative;
        }

        .stat-item:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0;
          top: 20%;
          height: 60%;
          width: 1px;
          background: #e2e8f0;
        }

        .stat-number {
          font-size: 2.25rem;
          font-weight: 900;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          letter-spacing: -0.03em;
          margin-bottom: 0.25rem;
        }

        .stat-label {
          color: #64748b;
          font-size: 0.8rem;
          font-weight: 500;
        }

        /* === SECTION COMMON === */
        .section {
          padding: 6rem 2rem;
        }

        .section-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        .section-header {
          text-align: center;
          margin-bottom: 3.5rem;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #2563eb;
          margin-bottom: 0.75rem;
        }

        .section-label::before,
        .section-label::after {
          content: '';
          width: 20px;
          height: 2px;
          background: linear-gradient(90deg, #2563eb, transparent);
          border-radius: 2px;
        }

        .section-label::after {
          background: linear-gradient(90deg, transparent, #2563eb);
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: #0f172a;
          margin-bottom: 0.75rem;
          letter-spacing: -0.03em;
        }

        .section-subtitle {
          color: #64748b;
          max-width: 560px;
          margin: 0 auto;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        /* === SERVICES === */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .service-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid #f1f5f9;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          cursor: pointer;
          position: relative;
          overflow: hidden;
        }

        .service-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          background: var(--card-accent);
          opacity: 0;
          transition: opacity 0.3s;
        }

        .service-card:hover::before { opacity: 1; }

        .service-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.08);
          border-color: transparent;
        }

        .service-icon-wrap {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          margin-bottom: 1.25rem;
          transition: transform 0.3s;
        }

        .service-card:hover .service-icon-wrap {
          transform: scale(1.1) rotate(-3deg);
        }

        .service-title {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.5rem;
          letter-spacing: -0.01em;
        }

        .service-description {
          color: #64748b;
          font-size: 0.875rem;
          line-height: 1.65;
        }

        .service-arrow {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          margin-top: 1.25rem;
          color: #2563eb;
          font-size: 0.8rem;
          font-weight: 600;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.3s;
        }

        .service-card:hover .service-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        /* === HOW IT WORKS === */
        .how-section {
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }

        .how-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-image:
            radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.03) 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, rgba(124, 58, 237, 0.03) 0%, transparent 50%);
          pointer-events: none;
        }

        .steps-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          position: relative;
        }

        .steps-connector {
          position: absolute;
          top: 44px;
          left: calc(33.33% - 1rem);
          right: calc(33.33% - 1rem);
          height: 2px;
          background: linear-gradient(90deg, #2563eb, #7c3aed);
          opacity: 0.2;
        }

        .step {
          text-align: center;
          position: relative;
        }

        .step-number-wrap {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1.25rem;
        }

        .step-number {
          width: 56px;
          height: 56px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          color: white;
          border-radius: 16px;
          font-size: 1.25rem;
          font-weight: 800;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 25px rgba(37, 99, 235, 0.3);
          position: relative;
          z-index: 1;
        }

        .step-number-glow {
          position: absolute;
          inset: -4px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          border-radius: 20px;
          opacity: 0.15;
          z-index: 0;
        }

        .step-title {
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.4rem;
          font-size: 1.05rem;
        }

        .step-description {
          font-size: 0.875rem;
          color: #64748b;
          max-width: 240px;
          margin: 0 auto;
          line-height: 1.65;
        }

        /* === WHY CHOOSE US === */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .why-card {
          padding: 2rem;
          background: #f8fafc;
          border-radius: 20px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid transparent;
        }

        .why-card:hover {
          transform: translateY(-4px);
          background: white;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.06);
          border-color: #e2e8f0;
        }

        .why-icon-wrap {
          width: 48px;
          height: 48px;
          background: linear-gradient(135deg, #eff6ff, #eef2ff);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 1rem;
          transition: all 0.3s;
        }

        .why-icon-wrap i {
          font-size: 1.15rem;
          color: #2563eb;
          transition: transform 0.3s;
        }

        .why-card:hover .why-icon-wrap {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
        }

        .why-card:hover .why-icon-wrap i {
          color: white;
          transform: scale(1.1);
        }

        .why-title {
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.35rem;
          font-size: 1rem;
        }

        .why-description {
          font-size: 0.85rem;
          color: #64748b;
          line-height: 1.65;
        }

        /* === TESTIMONIALS === */
        .testimonials-section {
          background: #f8fafc;
          position: relative;
          overflow: hidden;
        }

        .testimonials-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.05), transparent 70%);
          pointer-events: none;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
        }

        .testimonial-card {
          background: white;
          padding: 2rem;
          border-radius: 20px;
          border: 1px solid #f1f5f9;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          position: relative;
        }

        .testimonial-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.07);
          border-color: transparent;
        }

        .testimonial-quote-icon {
          position: absolute;
          top: 1.5rem;
          right: 1.5rem;
          font-size: 2rem;
          color: #e2e8f0;
          font-family: Georgia, serif;
          line-height: 1;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.15rem;
          margin-bottom: 1rem;
        }

        .star { color: #fbbf24; font-size: 0.85rem; }

        .testimonial-content {
          color: #334155;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
          line-height: 1.7;
          font-style: normal;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding-top: 1.25rem;
          border-top: 1px solid #f1f5f9;
        }

        .author-avatar {
          width: 44px;
          height: 44px;
          background: linear-gradient(135deg, #2563eb, #7c3aed);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 800;
          color: white;
          font-size: 1.1rem;
        }

        .author-name {
          font-weight: 700;
          color: #0f172a;
          font-size: 0.9rem;
        }

        .author-role {
          font-size: 0.8rem;
          color: #94a3b8;
        }

        /* === APP BANNER === */
        .app-banner {
          background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
          padding: 4rem 2rem;
          color: white;
          position: relative;
          overflow: hidden;
        }

        .app-banner::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(37, 99, 235, 0.12), transparent 70%);
          pointer-events: none;
        }

        .app-banner-content {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 2rem;
          position: relative;
          z-index: 1;
        }

        .app-banner-text h2 {
          font-size: 1.75rem;
          font-weight: 800;
          margin-bottom: 0.5rem;
          letter-spacing: -0.02em;
        }

        .app-banner-text p {
          color: #94a3b8;
          font-size: 0.95rem;
        }

        .app-banner-buttons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-banner-play {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          background: white;
          color: #0f172a;
          padding: 0.85rem 1.75rem;
          border-radius: 14px;
          text-decoration: none;
          font-weight: 700;
          transition: all 0.25s;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
        }

        .btn-banner-play:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.3);
        }

        .btn-banner-play i { font-size: 1.5rem; }

        .btn-banner-play .play-text {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          line-height: 1.15;
        }

        .btn-banner-play .play-text small {
          font-size: 0.6rem;
          color: #64748b;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
        }

        .btn-banner-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          color: white;
          padding: 0.85rem 1.75rem;
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 14px;
          text-decoration: none;
          font-weight: 600;
          font-size: 0.9rem;
          transition: all 0.25s;
        }

        .btn-banner-secondary:hover {
          border-color: rgba(255, 255, 255, 0.4);
          background: rgba(255, 255, 255, 0.05);
        }

        /* === FAQ === */
        .faq-grid {
          max-width: 780px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .faq-item {
          background: #f8fafc;
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s;
          border: 1px solid transparent;
        }

        .faq-item.active {
          background: white;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
          border-color: #e2e8f0;
        }

        .faq-question {
          font-weight: 600;
          color: #0f172a;
          padding: 1.25rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          cursor: pointer;
          transition: color 0.2s;
          user-select: none;
        }

        .faq-question:hover { color: #2563eb; }

        .faq-question-left {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .faq-question-left i {
          color: #2563eb;
          font-size: 0.9rem;
          width: 32px;
          height: 32px;
          background: #eff6ff;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .faq-question-text { font-size: 0.95rem; }

        .faq-chevron {
          color: #94a3b8;
          transition: transform 0.3s;
          font-size: 0.8rem;
          flex-shrink: 0;
        }

        .faq-item.active .faq-chevron { transform: rotate(180deg); color: #2563eb; }

        .faq-answer {
          color: #64748b;
          padding: 0 1.5rem 1.25rem 4.25rem;
          font-size: 0.9rem;
          line-height: 1.7;
          max-height: 0;
          overflow: hidden;
          opacity: 0;
          transition: all 0.35s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .faq-item.active .faq-answer {
          max-height: 200px;
          opacity: 1;
          padding-bottom: 1.25rem;
        }

        /* === CONTACT === */
        .contact-section {
          background: #f8fafc;
          padding: 6rem 2rem;
        }

        .contact-grid {
          max-width: 1000px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1rem;
        }

        .contact-card {
          background: white;
          padding: 2rem 1.5rem;
          border-radius: 20px;
          text-align: center;
          text-decoration: none;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border: 1px solid #f1f5f9;
          cursor: pointer;
          display: block;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          border-color: #2563eb;
          box-shadow: 0 15px 40px rgba(37, 99, 235, 0.1);
        }

        .contact-icon {
          width: 52px;
          height: 52px;
          background: linear-gradient(135deg, #eff6ff, #eef2ff);
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          transition: all 0.3s;
        }

        .contact-icon i { font-size: 1.25rem; color: #2563eb; }

        .contact-card:hover .contact-icon {
          background: linear-gradient(135deg, #2563eb, #4f46e5);
        }

        .contact-card:hover .contact-icon i { color: white; }

        .contact-label {
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 0.25rem;
          font-size: 0.9rem;
        }

        .contact-value {
          font-size: 0.8rem;
          color: #64748b;
        }

        /* === CTA === */
        .cta-section {
          background: linear-gradient(160deg, #2563eb 0%, #4f46e5 50%, #7c3aed 100%);
          padding: 6rem 2rem;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .cta-section::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -20%;
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 70%);
          pointer-events: none;
        }

        .cta-section::after {
          content: '';
          position: absolute;
          bottom: -40%;
          right: -10%;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent 70%);
          pointer-events: none;
        }

        .cta-title {
          font-size: 2.5rem;
          font-weight: 900;
          color: white;
          margin-bottom: 1rem;
          letter-spacing: -0.03em;
          position: relative;
          z-index: 1;
        }

        .cta-description {
          color: rgba(255, 255, 255, 0.8);
          margin-bottom: 2.5rem;
          font-size: 1.05rem;
          position: relative;
          z-index: 1;
        }

        .cta-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          position: relative;
          z-index: 1;
        }

        .btn-cta-primary {
          background: white;
          color: #2563eb;
          padding: 0.85rem 2rem;
          border: none;
          border-radius: 14px;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.25s;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
        }

        .btn-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
        }

        .btn-cta-secondary {
          background: transparent;
          color: white;
          padding: 0.85rem 2rem;
          border: 1px solid rgba(255, 255, 255, 0.3);
          border-radius: 14px;
          font-size: 1rem;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          transition: all 0.25s;
          font-weight: 600;
          text-decoration: none;
        }

        .btn-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.5);
        }

        /* === FOOTER === */
        .footer {
          background: #0f172a;
          color: white;
          padding: 4rem 2rem 2rem;
        }

        .footer-container { max-width: 1280px; margin: 0 auto; }

        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 3rem;
          margin-bottom: 3rem;
        }

        .footer-logo {
          display: flex;
          align-items: center;
          gap: 0.6rem;
          margin-bottom: 1rem;
          text-decoration: none;
        }

        .footer-logo-icon-wrap {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #2563eb, #4f46e5);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 0.9rem;
        }

        .footer-logo-text {
          font-size: 1.2rem;
          font-weight: 800;
        }

        .footer-logo-text span { color: #60a5fa; }

        .footer-description {
          color: #64748b;
          font-size: 0.875rem;
          line-height: 1.7;
          max-width: 320px;
        }

        .footer-socials {
          display: flex;
          gap: 0.75rem;
          margin-top: 1.25rem;
        }

        .footer-social-link {
          width: 36px;
          height: 36px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #94a3b8;
          text-decoration: none;
          transition: all 0.2s;
          font-size: 0.9rem;
        }

        .footer-social-link:hover {
          background: #2563eb;
          border-color: #2563eb;
          color: white;
        }

        .footer-title {
          font-weight: 700;
          margin-bottom: 1.25rem;
          font-size: 0.85rem;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #94a3b8;
        }

        .footer-links { list-style: none; }

        .footer-links li { margin-bottom: 0.6rem; }

        .footer-links a {
          color: #64748b;
          text-decoration: none;
          font-size: 0.875rem;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .footer-links a i { font-size: 0.6rem; opacity: 0.5; }

        .footer-links a:hover {
          color: #60a5fa;
          transform: translateX(4px);
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.06);
          padding-top: 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 1rem;
          color: #475569;
          font-size: 0.8rem;
        }

        .footer-bottom-heart { color: #ef4444; }

        /* === ANIMATIONS === */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* === RESPONSIVE === */
        @media (max-width: 1024px) {
          .hero-content { grid-template-columns: 1fr; text-align: center; }
          .hero-right { order: -1; }
          .hero-phone-mockup { width: 220px; height: 450px; }
          .hero-buttons { justify-content: center; }
          .hero-trust { justify-content: center; }
          .hero-description { margin: 0 auto 2rem; }
          .float-card { display: none; }
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .why-grid { grid-template-columns: repeat(2, 1fr); }
          .testimonials-grid { grid-template-columns: repeat(2, 1fr); }
          .footer-grid { grid-template-columns: repeat(2, 1fr); }
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu-btn { display: flex; }
          .hero { padding: 6rem 1.5rem 4rem; min-height: auto; }
          .hero-title { font-size: 2.5rem; }
          .hero-phone-mockup { width: 180px; height: 370px; }
          .phone-mini-cards { display: none; }
          .stats-container { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(2)::after { display: none; }
          .section { padding: 4rem 1.5rem; }
          .section-title { font-size: 2rem; }
          .services-grid { grid-template-columns: 1fr; }
          .why-grid { grid-template-columns: 1fr; }
          .steps-grid { grid-template-columns: 1fr; gap: 2rem; }
          .steps-connector { display: none; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .contact-grid { grid-template-columns: repeat(2, 1fr); }
          .app-banner-content { flex-direction: column; text-align: center; }
          .app-banner-buttons { justify-content: center; }
          .footer-grid { grid-template-columns: 1fr; gap: 2rem; }
          .footer-bottom { flex-direction: column; text-align: center; }
          .cta-title { font-size: 2rem; }
        }

        @media (max-width: 480px) {
          .hero-title { font-size: 2rem; }
          .stats-container { grid-template-columns: 1fr; }
          .stat-item::after { display: none; }
          .contact-grid { grid-template-columns: 1fr; }
          .hero-buttons { flex-direction: column; align-items: center; }
          .hero-buttons a { width: 100%; max-width: 300px; justify-content: center; }
          .app-banner-buttons { flex-direction: column; align-items: center; }
          .app-banner-buttons a { width: 100%; max-width: 300px; justify-content: center; }
          .cta-buttons { flex-direction: column; align-items: center; }
        }
      `}</style>

      {/* ===== NAVIGATION ===== */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a href="/servex/" className="logo">
            <div className="logo-icon-wrap"><i className="fas fa-tools"></i></div>
            <span className="logo-text">Serve<span>X</span></span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#why">Why Us</a>
            <a href="#testimonials">Reviews</a>
            <a href="#faq">FAQ</a>
            <a href="/servex/privacypolicy">Privacy</a>
            <a href="/servex/termsofuse">Terms</a>
            <a href="https://play.google.com/store/apps/details?id=com.laayo.servexapp&pli=1" className="nav-btn-download">
              <i className="fas fa-download"></i> Get App
            </a>
          </div>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
        <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-concierge-bell"></i> Services</a>
          <a href="#why" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-award"></i> Why Us</a>
          <a href="#testimonials" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-star"></i> Reviews</a>
          <a href="#faq" onClick={() => setMobileMenuOpen(false)}><i className="fas fa-question-circle"></i> FAQ</a>
          <a href="/servex/privacypolicy"><i className="fas fa-lock"></i> Privacy Policy</a>
          <a href="/servex/termsofuse"><i className="fas fa-file-contract"></i> Terms of Use</a>
          <a href="https://play.google.com/store/apps/details?id=com.laayo.servexapp&pli=1" onClick={() => setMobileMenuOpen(false)}><i className="fab fa-google-play"></i> Download App</a>
        </div>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <div className="hero-grid-pattern"></div>
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-badge">
              <i className="fas fa-bolt"></i> Trusted Service Platform
            </div>
            <h1 className="hero-title">
              Your Trusted<br /><span className="hero-highlight">Service</span> Partner
            </h1>
            <p className="hero-description">
              Connect with verified professionals for all your home and business service needs. Quality work, guaranteed — right at your fingertips.
            </p>
            <div className="hero-buttons">
              <a href="https://play.google.com/store/apps/details?id=com.laayo.servexapp&pli=1" className="btn-play-store">
                <i className="fab fa-google-play play-icon"></i>
                <span className="play-text">
                  <small>GET IT ON</small>
                  <span>Google Play</span>
                </span>
              </a>
              <a href="#services" className="btn-hero-ghost">
                <i className="fas fa-arrow-right"></i> Explore Services
              </a>
            </div>
            <div className="hero-trust">
              <span className="hero-trust-item"><i className="fas fa-check-circle"></i> Verified Pros</span>
              <span className="hero-trust-item"><i className="fas fa-shield-alt"></i> Guaranteed</span>
              <span className="hero-trust-item"><i className="fas fa-clock"></i> On-Time</span>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-phone-mockup">
              <div className="float-card float-card-1">
                <div className="float-card-icon" style={{ background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>
                  <i className="fas fa-check"></i>
                </div>
                <div className="float-card-text">
                  Booking Confirmed
                  <small>Plumbing Service</small>
                </div>
              </div>
              <div className="float-card float-card-2">
                <div className="float-card-icon" style={{ background: 'rgba(251, 191, 36, 0.2)', color: '#fbbf24' }}>
                  <i className="fas fa-star"></i>
                </div>
                <div className="float-card-text">
                  4.9 Rating
                  <small>10K+ Reviews</small>
                </div>
              </div>
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="phone-screen-icon"><i className="fas fa-tools"></i></div>
                  <h3>ServeX</h3>
                  <p>Book trusted services right from your phone</p>
                  <div className="phone-mini-cards">
                    <div className="phone-mini-card">
                      <i className="fas fa-wrench"></i>
                      <span>Plumb</span>
                    </div>
                    <div className="phone-mini-card">
                      <i className="fas fa-bolt"></i>
                      <span>Electric</span>
                    </div>
                    <div className="phone-mini-card">
                      <i className="fas fa-paint-roller"></i>
                      <span>Paint</span>
                    </div>
                  </div>
                  <div className="phone-rating-badge">
                    <i className="fas fa-star"></i> 4.9 App Rating
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-section" ref={statsRef}>
        <div className="stats-container">
          <div className="stat-item reveal-up" ref={addToRefs}>
            <div className="stat-number">{countsStarted ? (counts[0] >= 10000 ? '10,000+' : counts[0].toLocaleString()) : '0'}</div>
            <div className="stat-label">Services Completed</div>
          </div>
          <div className="stat-item reveal-up stagger-1" ref={addToRefs}>
            <div className="stat-number">{countsStarted ? (counts[1] >= 500 ? '500+' : counts[1]) : '0'}</div>
            <div className="stat-label">Expert Professionals</div>
          </div>
          <div className="stat-item reveal-up stagger-2" ref={addToRefs}>
            <div className="stat-number">{countsStarted ? counts[2] : '0'}</div>
            <div className="stat-label">Average Rating</div>
          </div>
          <div className="stat-item reveal-up stagger-3" ref={addToRefs}>
            <div className="stat-number">{countsStarted ? (counts[3] >= 98 ? '98%' : counts[3] + '%') : '0%'}</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="section">
        <div className="section-container">
          <div className="section-header reveal-up" ref={addToRefs}>
            <div className="section-label">Our Services</div>
            <h2 className="section-title">What We Offer</h2>
            <p className="section-subtitle">Professional services delivered by verified experts, right to your doorstep.</p>
          </div>
          <div className="services-grid">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="service-card reveal-up stagger-${idx + 1}"
                ref={addToRefs}
                style={{ '--card-accent': service.color }}
              >
                <div className="service-icon-wrap" style={{ background: `${service.color}12`, color: service.color }}>
                  <i className={service.icon}></i>
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
                <div className="service-arrow">
                  Learn more <i className="fas fa-arrow-right"></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== HOW IT WORKS ===== */}
      <section className="section how-section" id="how">
        <div className="section-container">
          <div className="section-header reveal-up" ref={addToRefs}>
            <div className="section-label">How It Works</div>
            <h2 className="section-title">3 Simple Steps</h2>
            <p className="section-subtitle">Getting quality service has never been this easy.</p>
          </div>
          <div className="steps-grid">
            <div className="steps-connector"></div>
            <div className="step reveal-up stagger-1" ref={addToRefs}>
              <div className="step-number-wrap">
                <div className="step-number-glow"></div>
                <div className="step-number">1</div>
              </div>
              <div className="step-title">Book a Service</div>
              <div className="step-description">Select the service you need and pick a convenient time slot.</div>
            </div>
            <div className="step reveal-up stagger-2" ref={addToRefs}>
              <div className="step-number-wrap">
                <div className="step-number-glow"></div>
                <div className="step-number">2</div>
              </div>
              <div className="step-title">Get Matched</div>
              <div className="step-description">We connect you with a verified, skilled professional near you.</div>
            </div>
            <div className="step reveal-up stagger-3" ref={addToRefs}>
              <div className="step-number-wrap">
                <div className="step-number-glow"></div>
                <div className="step-number">3</div>
              </div>
              <div className="step-title">Service Done</div>
              <div className="step-description">Sit back while we handle everything. Rate and share your experience.</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section id="why" className="section">
        <div className="section-container">
          <div className="section-header reveal-up" ref={addToRefs}>
            <div className="section-label">Why ServeX</div>
            <h2 className="section-title">Why Choose Us</h2>
            <p className="section-subtitle">We're committed to delivering the best service experience, every time.</p>
          </div>
          <div className="why-grid">
            {whyChooseUs.map((item, idx) => (
              <div key={idx} className={`why-card reveal-up stagger-${idx + 1}`} ref={addToRefs}>
                <div className="why-icon-wrap"><i className={item.icon}></i></div>
                <div className="why-title">{item.title}</div>
                <div className="why-description">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section id="testimonials" className="section testimonials-section">
        <div className="section-container">
          <div className="section-header reveal-up" ref={addToRefs}>
            <div className="section-label">Testimonials</div>
            <h2 className="section-title">What Customers Say</h2>
            <p className="section-subtitle">Real reviews from real customers who trust ServeX.</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, idx) => (
              <div key={idx} className={`testimonial-card reveal-up stagger-${idx + 1}`} ref={addToRefs}>
                <div className="testimonial-quote-icon">"</div>
                <div className="testimonial-rating">
                  {[...Array(t.rating)].map((_, i) => (
                    <i key={i} className="fas fa-star star"></i>
                  ))}
                </div>
                <p className="testimonial-content">{t.content}</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name.charAt(0)}</div>
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== APP BANNER ===== */}
      <section className="app-banner">
        <div className="app-banner-content">
          <div className="app-banner-text reveal-left" ref={addToRefs}>
            <h2><i className="fas fa-mobile-alt" style={{ marginRight: '0.5rem' }}></i> Download the ServeX App</h2>
            <p>Book services, track appointments, and manage everything on the go.</p>
          </div>
          <div className="app-banner-buttons reveal-right" ref={addToRefs}>
            <a href="https://play.google.com/store/apps/details?id=com.laayo.servexapp&pli=1" className="btn-banner-play">
              <i className="fab fa-google-play"></i>
              <span className="play-text">
                <small>GET IT ON</small>
                <span>Google Play</span>
              </span>
            </a>
            <a href="#services" className="btn-banner-secondary">
              <i className="fas fa-calendar-check"></i> Book a Service
            </a>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="section">
        <div className="section-container">
          <div className="section-header reveal-up" ref={addToRefs}>
            <div className="section-label">FAQ</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
          </div>
          <div className="faq-grid">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`faq-item ${openFaq === idx ? 'active' : ''} reveal-up stagger-${Math.min(idx + 1, 6)}`}
                ref={addToRefs}
              >
                <div className="faq-question" onClick={() => setOpenFaq(openFaq === idx ? null : idx)}>
                  <div className="faq-question-left">
                    <i className="fas fa-question-circle"></i>
                    <span className="faq-question-text">{faq.q}</span>
                  </div>
                  <i className="fas fa-chevron-down faq-chevron"></i>
                </div>
                <div className="faq-answer">{faq.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT ===== */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header reveal-up" ref={addToRefs}>
            <div className="section-label">Contact</div>
            <h2 className="section-title">Get in Touch</h2>
            <p className="section-subtitle">Have questions? We're always here to help.</p>
          </div>
          <div className="contact-grid">
            <a href="mailto:servex@gmail.com" className="contact-card reveal-up stagger-1" ref={addToRefs}>
              <div className="contact-icon"><i className="fas fa-envelope"></i></div>
              <div className="contact-label">Email</div>
              <div className="contact-value">servex@gmail.com</div>
            </a>
            <a href="tel:+9779825995421" className="contact-card reveal-up stagger-2" ref={addToRefs}>
              <div className="contact-icon"><i className="fas fa-phone-alt"></i></div>
              <div className="contact-label">Phone</div>
              <div className="contact-value">9825995421</div>
            </a>
            <a href="https://wa.me/9779825995421" target="_blank" rel="noopener noreferrer" className="contact-card reveal-up stagger-3" ref={addToRefs}>
              <div className="contact-icon"><i className="fab fa-whatsapp"></i></div>
              <div className="contact-label">WhatsApp</div>
              <div className="contact-value">9825995421</div>
            </a>
            <div className="contact-card reveal-up stagger-4" ref={addToRefs}>
              <div className="contact-icon"><i className="fas fa-map-marker-alt"></i></div>
              <div className="contact-label">Location</div>
              <div className="contact-value">Nepal</div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section id="book" className="cta-section">
        <div className="section-container">
          <h2 className="cta-title reveal-up" ref={addToRefs}>Ready to Get Started?</h2>
          <p className="cta-description reveal-up stagger-1" ref={addToRefs}>Book a service today or download our app for the fastest experience.</p>
          <div className="cta-buttons reveal-up stagger-2" ref={addToRefs}>
            <a href="https://play.google.com/store/apps/details?id=com.laayo.servexapp&pli=1" className="btn-cta-primary">
              <i className="fab fa-google-play"></i> Download App
            </a>
            <a href="#services" className="btn-cta-secondary">
              <i className="fas fa-concierge-bell"></i> Browse Services
            </a>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-grid">
            <div>
              <a href="/servex/" className="footer-logo">
                <div className="footer-logo-icon-wrap"><i className="fas fa-tools"></i></div>
                <span className="footer-logo-text">Serve<span>X</span></span>
              </a>
              <p className="footer-description">Connecting you with trusted service professionals for all your home and business needs. Quality, reliability, and convenience — that's ServeX.</p>
              <div className="footer-socials">
                <a href="#" className="footer-social-link"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="footer-social-link"><i className="fab fa-instagram"></i></a>
                <a href="#" className="footer-social-link"><i className="fab fa-twitter"></i></a>
                <a href="#" className="footer-social-link"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
            <div>
              <h4 className="footer-title">Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#services"><i className="fas fa-chevron-right"></i> Services</a></li>
                <li><a href="#why"><i className="fas fa-chevron-right"></i> Why Us</a></li>
                <li><a href="#testimonials"><i className="fas fa-chevron-right"></i> Reviews</a></li>
                <li><a href="#faq"><i className="fas fa-chevron-right"></i> FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Legal</h4>
              <ul className="footer-links">
                <li><a href="/servex/privacypolicy"><i className="fas fa-chevron-right"></i> Privacy Policy</a></li>
                <li><a href="/servex/termsofuse"><i className="fas fa-chevron-right"></i> Terms of Use</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title">Contact</h4>
              <ul className="footer-links">
                <li><a href="mailto:servex@gmail.com"><i className="fas fa-envelope"></i> servex@gmail.com</a></li>
                <li><a href="tel:+9779825995421"><i className="fas fa-phone"></i> 9825995421</a></li>
                <li><a href="https://wa.me/9779825995421"><i className="fab fa-whatsapp"></i> WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 ServeX. All rights reserved.</p>
            <p>Made with <i className="fas fa-heart footer-bottom-heart"></i> in Nepal</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ServeX;