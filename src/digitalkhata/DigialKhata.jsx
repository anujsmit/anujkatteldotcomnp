import React from 'react';
import {
    ShoppingCart,
    Users,
    TrendingUp,
    Shield,
    Smartphone,
    BarChart3,
    CheckCircle,
    Star,
    ArrowRight,
    Wallet,
    Receipt,
    Download,
    Apple,
    AlertCircle,
    Mail,
    Phone,
    MapPin,
    Globe
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa';

const DigitalKhata = () => {
    const features = [
        {
            icon: <Users className="w-6 h-6" />,
            title: "Customer Management",
            description: "Easily manage all your customers, track their dues, and maintain communication history."
        },
        {
            icon: <Receipt className="w-6 h-6" />,
            title: "Transaction Tracking",
            description: "Record every credit and debit transaction with detailed notes and timestamps."
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Business Analytics",
            description: "Get insights into your business performance with real-time reports and analytics."
        },
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            title: "Invoice Management",
            description: "Create professional invoices, track payments, and manage outstanding dues."
        },
        {
            icon: <Smartphone className="w-6 h-6" />,
            title: "Mobile First",
            description: "Access your business data anytime, anywhere from your mobile device."
        },
        {
            icon: <Shield className="w-6 h-6" />,
            title: "Secure & Reliable",
            description: "Your data is encrypted and securely stored with enterprise-grade security."
        }
    ];

    const pricing = [
        {
            name: "Free",
            price: "रु 0",
            period: "/month",
            description: "Perfect for small businesses just starting out",
            features: [
                "✓ Up to 50 customers",
                "✓ Basic transaction tracking",
                "✓ Simple reporting",
                "✓ Email support",
                "✓ Mobile app access",
                "⚠️ Contains advertisements",
                "⚠️ Limited to 30 days data history"
            ],
            buttonText: "Download Free",
            buttonIcon: <Download className="w-4 h-4" />,
            popular: false,
            ads: true
        },
        {
            name: "Premium",
            price: "रु 299",
            period: "/month",
            description: "Ideal for growing businesses - No Ads!",
            features: [
                "✓ Unlimited customers",
                "✓ Advanced analytics & reports",
                "✓ Custom invoices with logo",
                "✓ Priority support 24/7",
                "✓ Export data (Excel, PDF)",
                "✓ Multi-business support",
                "✓ No advertisements",
                "✓ Lifetime data history",
                "✓ API access for developers"
            ],
            buttonText: "Start Free Trial",
            buttonIcon: null,
            popular: true,
            ads: false
        },
        {
            name: "Yearly Premium",
            price: "रु 2900",
            period: "/year",
            description: "Save 17% with annual billing - No Ads!",
            features: [
                "✓ Everything in Premium",
                "✓ 2 months free",
                "✓ Priority support",
                "✓ Early access to new features",
                "✓ No advertisements",
                "✓ Lifetime data history",
                "✓ Dedicated account manager"
            ],
            buttonText: "Save 17%",
            buttonIcon: null,
            popular: false,
            ads: false
        }
    ];

    const testimonials = [
        {
            name: "Ram Shrestha",
            role: "Store Owner",
            content: "Premium plan is totally worth it! No ads and unlimited customers. Digital Khata has transformed my business!",
            rating: 5,
            avatar: "R"
        },
        {
            name: "Sita Gurung",
            role: "Business Owner",
            content: "The free plan is great for small shops. The ads are non-intrusive and the features are amazing!",
            rating: 5,
            avatar: "S"
        },
        {
            name: "Hari Bahadur",
            role: "Retailer",
            content: "Upgraded to Premium just for the no-ads feature. Best decision ever! Worth every rupee.",
            rating: 5,
            avatar: "H"
        }
    ];

    const stats = [
        { number: "10,000+", label: "Active Users" },
        { number: "50,000+", label: "Daily Transactions" },
        { number: "99.9%", label: "Uptime" },
        { number: "4.9", label: "User Rating" }
    ];

    return (
        <div className="landing-page">
            <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .landing-page {
          min-height: 100vh;
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
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
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
          cursor: pointer;
        }

        .logo-icon {
          width: 32px;
          height: 32px;
          color: #10b981;
        }

        .logo-text {
          margin-left: 8px;
          font-size: 1.25rem;
          font-weight: bold;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .nav-links {
          display: none;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .nav-links {
            display: flex;
          }
        }

        .nav-link {
          color: #9ca3af;
          text-decoration: none;
          transition: color 0.2s;
        }

        .nav-link:hover {
          color: #10b981;
        }

        .download-buttons {
          display: flex;
          gap: 0.75rem;
        }

        .btn-download {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          border: none;
        }

        .btn-download-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .btn-download-primary:hover {
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        /* Hero Section */
        .hero {
          max-width: 1280px;
          margin: 0 auto;
          padding: 5rem 1rem;
          text-align: center;
          position: relative;
          z-index: 10;
        }

        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 1.5rem;
        }

        @media (min-width: 768px) {
          .hero-title {
            font-size: 3.75rem;
          }
        }

        .hero-highlight {
          background: linear-gradient(135deg, #10b981, #14b8a6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .hero-description {
          font-size: 1.25rem;
          color: #9ca3af;
          max-width: 48rem;
          margin: 0 auto 2rem;
        }

        .hero-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .btn-secondary {
          border: 2px solid #10b981;
          color: #10b981;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-secondary:hover {
          background: rgba(16, 185, 129, 0.1);
          transform: translateY(-2px);
        }

        /* Stats Section */
        .stats-section {
          background: rgba(255, 255, 255, 0.02);
          padding: 3rem 0;
          position: relative;
          z-index: 10;
        }

        .stats-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .stats-container {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .stat-item {
          text-align: center;
        }

        .stat-number {
          font-size: 1.875rem;
          font-weight: bold;
          color: #10b981;
        }

        @media (min-width: 768px) {
          .stat-number {
            font-size: 2.25rem;
          }
        }

        .stat-label {
          color: #9ca3af;
          margin-top: 0.5rem;
        }

        /* Section Styles */
        .section {
          padding: 5rem 0;
          position: relative;
          z-index: 10;
        }

        .section-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .section-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: #ffffff;
          text-align: center;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .section-title {
            font-size: 2.25rem;
          }
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #9ca3af;
          text-align: center;
          max-width: 48rem;
          margin: 0 auto 3rem;
        }

        /* Problem/Solution Grid */
        .problem-solution-grid {
          display: grid;
          gap: 3rem;
          margin-bottom: 4rem;
        }

        @media (min-width: 768px) {
          .problem-solution-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        .problem-box, .solution-box {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          backdrop-filter: blur(10px);
        }

        .box-title {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 1rem;
        }

        .grid-row-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1rem;
        }

        .problem-item p, .solution-item p {
          color: #d1d5db;
        }

        /* Features Grid */
        .features-grid {
          display: grid;
          gap: 2rem;
          margin-top: 3rem;
        }

        @media (min-width: 768px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .feature-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.3s;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          border-color: #10b981;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .feature-icon {
          color: #10b981;
          margin-bottom: 1rem;
        }

        .feature-title {
          font-size: 1.25rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .feature-description {
          color: #9ca3af;
        }

        /* Pricing Section */
        .pricing-section {
          background: rgba(255, 255, 255, 0.02);
        }

        .pricing-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .pricing-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .pricing-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 0.75rem;
          overflow: hidden;
          position: relative;
          transition: all 0.3s;
          backdrop-filter: blur(10px);
        }

        .pricing-card:hover {
          transform: translateY(-4px);
          border-color: #10b981;
          box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }

        .pricing-popular {
          border: 2px solid #10b981;
          transform: scale(1.02);
        }

        .popular-badge {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
          text-align: center;
          padding: 0.5rem;
          font-size: 0.875rem;
          font-weight: 600;
        }

        .ads-badge {
          background-color: #f59e0b;
          color: white;
          text-align: center;
          padding: 0.25rem;
          font-size: 0.75rem;
          font-weight: 600;
          display: inline-block;
          margin-left: 0.5rem;
          border-radius: 0.25rem;
        }

        .pricing-content {
          padding: 1.5rem;
        }

        .pricing-name {
          font-size: 1.5rem;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .pricing-price {
          margin-bottom: 1rem;
        }

        .price-amount {
          font-size: 2.25rem;
          font-weight: bold;
          color: #10b981;
        }

        .price-period {
          color: #9ca3af;
        }

        .pricing-description {
          color: #9ca3af;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
        }

        .pricing-features {
          list-style: none;
          margin-bottom: 1.5rem;
        }

        .pricing-feature {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 0.75rem;
          color: #d1d5db;
          font-size: 0.875rem;
        }

        .btn-pricing {
          width: 100%;
          padding: 0.75rem;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
        }

        .btn-pricing-primary {
          background: linear-gradient(135deg, #10b981, #059669);
          color: white;
        }

        .btn-pricing-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
        }

        .btn-pricing-secondary {
          border: 2px solid #10b981;
          color: #10b981;
          background: transparent;
        }

        .btn-pricing-secondary:hover {
          background: rgba(16, 185, 129, 0.1);
        }

        /* Testimonials */
        .testimonials-grid {
          display: grid;
          gap: 2rem;
        }

        @media (min-width: 768px) {
          .testimonials-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .testimonial-card {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.3s;
        }

        .testimonial-card:hover {
          transform: translateY(-4px);
          border-color: #10b981;
        }

        .testimonial-rating {
          display: flex;
          gap: 0.25rem;
          margin-bottom: 1rem;
        }

        .star-icon {
          color: #fbbf24;
          fill: #fbbf24;
        }

        .testimonial-content {
          color: #d1d5db;
          font-style: italic;
          margin-bottom: 1.5rem;
        }

        .testimonial-author {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .author-avatar {
          width: 2.5rem;
          height: 2.5rem;
          background: rgba(16, 185, 129, 0.2);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          color: #10b981;
        }

        .author-name {
          font-weight: 600;
          color: #ffffff;
        }

        .author-role {
          font-size: 0.875rem;
          color: #9ca3af;
        }

        /* Contact Section */
        .contact-section {
          padding: 4rem 0;
          position: relative;
          z-index: 10;
          background: rgba(255, 255, 255, 0.02);
        }

        .contact-grid {
          display: grid;
          gap: 1.5rem;
          grid-template-columns: repeat(1, 1fr);
          max-width: 1000px;
          margin: 0 auto;
        }

        @media (min-width: 480px) {
          .contact-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 768px) {
          .contact-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .contact-grid {
            grid-template-columns: repeat(5, 1fr);
            gap: 1.25rem;
          }
        }

        @media (min-width: 1280px) {
          .contact-grid {
            max-width: 1100px;
            gap: 1.5rem;
          }
        }

        .contact-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 1.25rem;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .contact-card:hover {
          transform: translateY(-4px);
          border-color: #10b981;
          background: rgba(16, 185, 129, 0.08);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .contact-card.whatsapp-card {
          background: rgba(37, 211, 102, 0.08);
          border-color: rgba(37, 211, 102, 0.2);
        }

        .contact-card.whatsapp-card:hover {
          background: rgba(37, 211, 102, 0.15);
          border-color: #25D366;
          box-shadow: 0 10px 25px rgba(37, 211, 102, 0.15);
        }

        .contact-icon-box {
          width: 48px;
          height: 48px;
          background: rgba(16, 185, 129, 0.12);
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          transition: all 0.3s ease;
        }

        .contact-card:hover .contact-icon-box {
          transform: scale(1.05);
          background: rgba(16, 185, 129, 0.2);
        }

        .contact-card.whatsapp-card .contact-icon-box {
          background: rgba(37, 211, 102, 0.15);
        }

        .contact-card.whatsapp-card:hover .contact-icon-box {
          background: #25D366;
        }

        .contact-card.whatsapp-card:hover .contact-icon-box svg {
          color: white;
        }

        .contact-icon-box svg {
          width: 22px;
          height: 22px;
          color: #10b981;
          transition: all 0.3s ease;
        }

        .contact-info {
          flex: 1;
          min-width: 0;
        }

        .contact-label {
          font-size: 0.65rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #6b7280;
          margin-bottom: 4px;
        }

        .contact-value {
          font-weight: 600;
          color: #e5e7eb;
          font-size: 0.85rem;
          word-break: break-word;
          line-height: 1.4;
        }

        .contact-card[href*="mailto"] .contact-value {
          font-size: 0.8rem;
          word-break: break-all;
        }

        .contact-card[href*="digitalkhata"] .contact-value {
          font-size: 0.8rem;
        }

        /* FAQ Section */
        .faq-section {
          background: rgba(255, 255, 255, 0.02);
        }

        .faq-grid {
          max-width: 48rem;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .faq-item {
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 1.5rem;
          border-radius: 0.75rem;
          transition: all 0.3s;
        }

        .faq-item:hover {
          border-color: #10b981;
        }

        .faq-question {
          font-size: 1.125rem;
          font-weight: 600;
          color: #ffffff;
          margin-bottom: 0.5rem;
        }

        .faq-answer {
          color: #9ca3af;
        }

        /* CTA Section */
        .cta-section {
          background: linear-gradient(135deg, #10b981, #059669);
          padding: 4rem 0;
          position: relative;
          z-index: 10;
        }

        .cta-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
          text-align: center;
        }

        .cta-title {
          font-size: 1.875rem;
          font-weight: bold;
          color: white;
          margin-bottom: 1rem;
        }

        @media (min-width: 768px) {
          .cta-title {
            font-size: 2.25rem;
          }
        }

        .cta-description {
          font-size: 1.25rem;
          color: #bbf7d0;
          margin-bottom: 2rem;
        }

        .cta-buttons {
          display: flex;
          justify-content: center;
          gap: 1rem;
          flex-wrap: wrap;
        }

        .btn-cta-primary {
          background-color: white;
          color: #10b981;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          border: none;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          transition: all 0.2s;
        }

        .btn-cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        }

        .btn-cta-secondary {
          border: 2px solid white;
          color: white;
          padding: 0.75rem 1.5rem;
          border-radius: 0.5rem;
          font-weight: 500;
          background: transparent;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-cta-secondary:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        /* Footer */
        .footer {
          background: #0a0a0f;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: white;
          padding: 3rem 0;
          position: relative;
          z-index: 10;
        }

        .footer-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .footer-grid {
          display: grid;
          gap: 2rem;
          margin-bottom: 2rem;
        }

        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }

        .footer-logo {
          display: flex;
          align-items: center;
          margin-bottom: 1rem;
        }

        .footer-logo-icon {
          width: 2rem;
          height: 2rem;
          color: #4ade80;
        }

        .footer-logo-text {
          margin-left: 0.5rem;
          font-size: 1.25rem;
          font-weight: bold;
          background: linear-gradient(135deg, #10b981, #14b8a6);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .footer-description {
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .footer-title {
          font-weight: 600;
          margin-bottom: 1rem;
          color: #ffffff;
        }

        .footer-links {
          list-style: none;
        }

        .footer-link {
          color: #9ca3af;
          text-decoration: none;
          font-size: 0.875rem;
          transition: color 0.2s;
          display: block;
          margin-bottom: 0.5rem;
        }

        .footer-link:hover {
          color: #10b981;
        }

        .footer-bottom {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 2rem;
          text-align: center;
          color: #9ca3af;
          font-size: 0.875rem;
        }

        .warning-text {
          color: #f59e0b;
          font-size: 0.75rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          margin-top: 0.5rem;
        }

        /* Responsive Global Overrides */
        @media (max-width: 768px) {
          .hero-title {
            font-size: 2rem;
          }
          .section-title {
            font-size: 1.5rem;
          }
          .contact-card {
            padding: 1rem;
          }
          .contact-icon-box {
            width: 40px;
            height: 40px;
          }
          .contact-icon-box svg {
            width: 18px;
            height: 18px;
          }
          .contact-value {
            font-size: 0.75rem;
          }
          .contact-label {
            font-size: 0.6rem;
          }
        }

        @media (max-width: 480px) {
          .contact-card {
            padding: 0.875rem;
          }
          .contact-value {
            font-size: 0.7rem;
          }
          .contact-icon-box {
            width: 36px;
            height: 36px;
          }
          .contact-icon-box svg {
            width: 16px;
            height: 16px;
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
                        <div className="logo">
                            <Wallet className="logo-icon" />
                            <span className="logo-text">Digital Khata</span>
                        </div>
                        <div className="nav-links">
                            <a href="#features" className="nav-link">Features</a>
                            <a href="#pricing" className="nav-link">Pricing</a>
                            <a href="#testimonials" className="nav-link">Testimonials</a>
                            <a href="#faq" className="nav-link">FAQ</a>
                        </div>
                        <div className="download-buttons">
                            <button className="btn-download btn-download-primary">
                                <Download className="w-4 h-4" /> Download App
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="hero">
                <h1 className="hero-title">
                    Digital Khata for{" "}
                    <span className="hero-highlight">Smart Business</span>
                </h1>
                <p className="hero-description">
                    The ultimate business management app for small businesses in Nepal.
                    Track customers, manage transactions, and grow your business with ease.
                    <br />
                    <span style={{ fontSize: '0.875rem', color: '#f59e0b' }}>Free plan includes ads • Premium plan starting at just रु 299 /month</span>
                </p>
                <div className="hero-buttons">
                    <button className="btn-primary">
                        <Download className="w-5 h-5" /> Download for Android
                    </button>
                    <button className="btn-primary">
                        <Apple className="w-5 h-5" /> Download for iOS
                    </button>
                    <button className="btn-secondary">
                        Watch Demo <ArrowRight className="w-5 h-5" />
                    </button>
                </div>
            </section>

            {/* Stats Section */}
            <section className="stats-section">
                <div className="stats-container">
                    {stats.map((stat, index) => (
                        <div key={index} className="stat-item">
                            <div className="stat-number">{stat.number}</div>
                            <div className="stat-label">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Why Digital Khata Section */}
            <section id="features" className="section">
                <div className="section-container">
                    <h2 className="section-title">Why Choose Digital Khata?</h2>
                    <p className="section-subtitle">
                        We built Digital Khata to solve real problems faced by small business owners in Nepal
                    </p>

                    <div className="problem-solution-grid">
                        <div className="problem-box">
                            <h3 className="box-title">The Problem We're Solving</h3>
                            <div className="problem-list">
                                <div className="grid-row-item problem-item">
                                    <span style={{ color: '#ef4444' }}>✗</span>
                                    <p>Traditional paper khata gets lost or damaged</p>
                                </div>
                                <div className="grid-row-item problem-item">
                                    <span style={{ color: '#ef4444' }}>✗</span>
                                    <p>Manual calculations lead to errors</p>
                                </div>
                                <div className="grid-row-item problem-item">
                                    <span style={{ color: '#ef4444' }}>✗</span>
                                    <p>No easy way to track customer dues</p>
                                </div>
                                <div className="grid-row-item problem-item">
                                    <span style={{ color: '#ef4444' }}>✗</span>
                                    <p>Time-consuming bookkeeping process</p>
                                </div>
                                <div className="grid-row-item problem-item">
                                    <span style={{ color: '#ef4444' }}>✗</span>
                                    <p>No business insights or analytics</p>
                                </div>
                            </div>
                        </div>
                        <div className="solution-box">
                            <h3 className="box-title">Our Solution</h3>
                            <div className="solution-list">
                                <div className="grid-row-item solution-item">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <p>Digital record keeping - never lose your data</p>
                                </div>
                                <div className="grid-row-item solution-item">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <p>Automatic calculations with 100% accuracy</p>
                                </div>
                                <div className="grid-row-item solution-item">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <p>Real-time customer due tracking</p>
                                </div>
                                <div className="grid-row-item solution-item">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <p>Save hours with automated bookkeeping</p>
                                </div>
                                <div className="grid-row-item solution-item">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <p>Powerful analytics and business insights</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <div key={index} className="feature-card">
                                <div className="feature-icon">{feature.icon}</div>
                                <h3 className="feature-title">{feature.title}</h3>
                                <p className="feature-description">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="pricing-section section">
                <div className="section-container">
                    <h2 className="section-title">Simple, Transparent Pricing</h2>
                    <p className="section-subtitle">
                        Choose the plan that works best for your business. No hidden fees.
                    </p>

                    <div className="pricing-grid">
                        {pricing.map((plan, index) => (
                            <div key={index} className={`pricing-card ${plan.popular ? 'pricing-popular' : ''}`}>
                                {plan.popular && <div className="popular-badge">⭐ Most Popular</div>}
                                <div className="pricing-content">
                                    <div className="pricing-name">
                                        {plan.name}
                                        {plan.ads && <span className="ads-badge">Contains Ads</span>}
                                    </div>
                                    <div className="pricing-price">
                                        <span className="price-amount">{plan.price}</span>
                                        <span className="price-period">{plan.period}</span>
                                    </div>
                                    <p className="pricing-description">{plan.description}</p>
                                    <ul className="pricing-features">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="pricing-feature">
                                                {feature.includes('⚠️') ? (
                                                    <AlertCircle className="w-4 h-4 text-orange-500" />
                                                ) : (
                                                    <CheckCircle className="w-4 h-4 text-green-600" />
                                                )}
                                                <span style={feature.includes('⚠️') ? { color: '#f59e0b' } : {}}>
                                                    {feature.replace('✓ ', '').replace('⚠️ ', '')}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                    <button className={`btn-pricing ${plan.popular ? 'btn-pricing-primary' : 'btn-pricing-secondary'}`}>
                                        {plan.buttonIcon}
                                        {plan.buttonText}
                                    </button>
                                    {plan.ads && (
                                        <div className="warning-text">
                                            <AlertCircle className="w-3 h-3" />
                                            Contains advertisements
                                        </div>
                                    )}
                                    {!plan.ads && plan.name !== "Free" && (
                                        <div className="warning-text" style={{ color: '#10b981' }}>
                                            <CheckCircle className="w-3 h-3" />
                                            No advertisements
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section id="testimonials" className="section">
                <div className="section-container">
                    <h2 className="section-title">What Our Users Say</h2>
                    <p className="section-subtitle">Trusted by thousands of business owners</p>

                    <div className="testimonials-grid">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="testimonial-card">
                                <div className="testimonial-rating">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="star-icon w-5 h-5" />
                                    ))}
                                </div>
                                <p className="testimonial-content">"{testimonial.content}"</p>
                                <div className="testimonial-author">
                                    <div className="author-avatar">{testimonial.avatar}</div>
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

            {/* Contact Section */}
            <section className="contact-section">
                <div className="section-container">
                    <h2 className="section-title">Get in Touch</h2>
                    <p className="section-subtitle">Have questions? Reach out to us anytime.</p>
                    <div className="contact-grid">
                        {/* Email */}
                        <a href="mailto:anujkattel62@gmail.com" className="contact-card">
                            <div className="contact-icon-box">
                                <Mail size={22} />
                            </div>
                            <div className="contact-info">
                                <div className="contact-label">EMAIL</div>
                                <div className="contact-value">anujkattel62@gmail.com</div>
                            </div>
                        </a>

                        {/* Phone */}
                        <a href="tel:+9779825995421" className="contact-card">
                            <div className="contact-icon-box">
                                <Phone size={22} />
                            </div>
                            <div className="contact-info">
                                <div className="contact-label">PHONE</div>
                                <div className="contact-value">9825995421</div>
                            </div>
                        </a>

                        {/* WhatsApp */}
                        <a href="https://wa.me/9779825995421" target="_blank" rel="noopener noreferrer" className="contact-card whatsapp-card">
                            <div className="contact-icon-box">
                                <FaWhatsapp size={22} />
                            </div>
                            <div className="contact-info">
                                <div className="contact-label">WHATSAPP</div>
                                <div className="contact-value">9825995421</div>
                            </div>
                        </a>

                        {/* Location */}
                        <div className="contact-card">
                            <div className="contact-icon-box">
                                <MapPin size={22} />
                            </div>
                            <div className="contact-info">
                                <div className="contact-label">LOCATION</div>
                                <div className="contact-value">Jhapa, Nepal</div>
                            </div>
                        </div>

                        {/* Website */}
                        <a href="https://www.anujkattel.com.np" target="_blank" rel="noopener noreferrer" className="contact-card">
                            <div className="contact-icon-box">
                                <Globe size={22} />
                            </div>
                            <div className="contact-info">
                                <div className="contact-label">WEBSITE</div>
                                <div className="contact-value">www.anujkattel.com.np</div>
                            </div>
                        </a>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section id="faq" className="faq-section section">
                <div className="section-container">
                    <h2 className="section-title">Frequently Asked Questions</h2>
                    <div className="faq-grid">
                        <div className="faq-item">
                            <h3 className="faq-question">Is Digital Khata really free?</h3>
                            <p className="faq-answer">Yes! We offer a completely free plan with basic features. The free plan includes advertisements to support the service. You can upgrade to Premium for रु 299/month to remove ads and get unlimited features.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">What payment methods do you accept?</h3>
                            <p className="faq-answer">We accept Esewa, Khalti, ConnectIPS, and all major credit/debit cards. Payments are securely processed through Nepal's leading payment gateways.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">Can I switch from Free to Premium?</h3>
                            <p className="faq-answer">Absolutely! You can upgrade anytime from within the app. Your data will be preserved, and you'll immediately get access to all Premium features without ads.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">Is my data secure?</h3>
                            <p className="faq-answer">Absolutely! We use bank-level encryption to protect your data. Your information is safe and secure with us, both in Free and Premium plans.</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">What happens if I cancel my Premium subscription?</h3>
                            <p className="faq-answer">If you cancel, your account will revert to the Free plan. Your data will still be accessible, but with the limitations of the Free plan (ads, customer limit, etc.).</p>
                        </div>
                        <div className="faq-item">
                            <h3 className="faq-question">Can I export my data?</h3>
                            <p className="faq-answer">Yes! Premium users can export their customer data, transactions, and reports in various formats including Excel and PDF. Free users have limited export options.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="cta-section">
                <div className="cta-container">
                    <h2 className="cta-title">Ready to Transform Your Business?</h2>
                    <p className="cta-description">
                        Join thousands of business owners who trust Digital Khata
                    </p>
                    <div className="cta-buttons">
                        <button className="btn-cta-primary">
                            <Download className="w-5 h-5" /> Download Free
                        </button>
                        <button className="btn-cta-secondary">
                            Upgrade to Premium (रु 299/month)
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
                                <Wallet className="footer-logo-icon" />
                                <span className="footer-logo-text">Digital Khata</span>
                            </div>
                            <p className="footer-description">
                                Empowering small businesses in Nepal with digital solutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="footer-title">Product</h4>
                            <ul className="footer-links">
                                <li><a href="#features" className="footer-link">Features</a></li>
                                <li><a href="#pricing" className="footer-link">Pricing</a></li>
                                <li><a href="#" className="footer-link">Downloads</a></li>
                                <li><a href="#" className="footer-link">Updates</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="footer-title">Company</h4>
                            <ul className="footer-links">
                                <li><a href="#" className="footer-link">About Us</a></li>
                                <li><a href="/" className="footer-link">Contact</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="footer-title">Legal</h4>
                            <ul className="footer-links">
                                <li><Link to="/digitalkhata/privacy" className="footer-link">Privacy Policy</Link></li>
                                <li><Link to="/digitalkhata/termsandcondition" className="footer-link">Terms and services</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        © 2026 Digital Khata. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default DigitalKhata;