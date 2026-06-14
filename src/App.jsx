import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Portfolio from './Pages/Portfolio';
import NotFound from './Pages/NotFound';
import DigitalKhata from './digitalkhata/DigialKhata';
import PrivacyPage from './digitalkhata/Privacy';
import TermsAndConditions from './digitalkhata/terms_and_conditions';
import DeleteAccount from './digitalkhata/Deleteaccount';

// SEO Component for dynamic meta tags
const SEO = ({ title, description, keywords, url, image }) => {
  const siteTitle = 'Digital Khata - Smart Business Management App';
  const siteDescription = 'Digital Khata is a business management app for small businesses in Nepal. Track customers, manage transactions, and grow your business with ease.';
  const siteUrl = 'https://anujkattel.com.np';
  const defaultImage = 'https://anujkattel.com.np/og-image.jpg';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title ? `${title} | Digital Khata` : siteTitle}</title>
      <meta name="description" content={description || siteDescription} />
      <meta name="keywords" content={keywords || 'digital khata, business management, customer management, transaction tracking, invoice management, business app, nepal business, small business, khata app, digital ledger'} />
      <meta name="author" content="Anuj Kattel" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      
      {/* Open Graph / Facebook Meta Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || siteUrl} />
      <meta property="og:title" content={title || siteTitle} />
      <meta property="og:description" content={description || siteDescription} />
      <meta property="og:image" content={image || defaultImage} />
      <meta property="og:site_name" content="Digital Khata" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url || siteUrl} />
      <meta name="twitter:title" content={title || siteTitle} />
      <meta name="twitter:description" content={description || siteDescription} />
      <meta name="twitter:image" content={image || defaultImage} />
      <meta name="twitter:creator" content="@digitalkhata" />
      
      {/* Additional SEO Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      <meta name="language" content="English" />
      <meta name="revisit-after" content="7 days" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="General" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url || siteUrl} />
      
      {/* Alternate Language Versions */}
      <link rel="alternate" hrefLang="en" href={url || siteUrl} />
      <link rel="alternate" hrefLang="ne" href={`${siteUrl}/np`} />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data / JSON-LD */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "Digital Khata",
          "applicationCategory": "BusinessApplication",
          "operatingSystem": "Android, iOS, Web",
          "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "NPR",
            "description": "Free plan with ads, Premium at रु 100/month"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "ratingCount": "10000"
          },
          "description": "Digital Khata is a business management app for small businesses in Nepal. Track customers, manage transactions, and grow your business with ease.",
          "keywords": "digital khata, business management, customer tracking, transaction management",
          "author": {
            "@type": "Person",
            "name": "Anuj Kattel"
          },
          "sameAs": [
            "https://facebook.com/digitalkhata",
            "https://twitter.com/digitalkhata",
            "https://instagram.com/digitalkhata",
            "https://linkedin.com/company/digitalkhata"
          ]
        })}
      </script>
    </Helmet>
  );
};

// DigitalKhataWrapper component with SEO
const DigitalKhataWrapper = () => {
  return (
    <>
      <SEO 
        title="Digital Khata - Smart Business Management App"
        description="Digital Khata is the ultimate business management app for small businesses in Nepal. Track customers, manage transactions, create invoices, and get business insights. Download now for free!"
        keywords="digital khata, business management, customer management, transaction tracking, invoice management, business app, nepal business, small business, khata app, digital ledger, business analytics, nepali business app"
        url="https://anujkattel.com.np"
      />
      <DigitalKhata />
    </>
  );
};

// PrivacyPageWrapper component with SEO
const PrivacyPageWrapper = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Digital Khata"
        description="Read Digital Khata's privacy policy to understand how we collect, use, and protect your personal information. Your privacy and data security are our top priorities."
        keywords="privacy policy, data privacy, data security, digital khata privacy, gdpr compliant, data protection, personal information security"
        url="https://anujkattel.com.np/privacy"
      />
      <PrivacyPage />
    </>
  );
};

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Portfolio />} />
          <Route path="/digitalkhata/" element={<DigitalKhataWrapper />} />
          <Route path="/digitalkhata/home" element={<DigitalKhataWrapper />} />
          <Route path="/digitalkhata/privacy" element={<PrivacyPageWrapper />} />
          <Route path="/digitalkhata/termsandcondition" element={<TermsAndConditions />} />
          <Route path="/digitalkhata/deleteaccount" element={<DeleteAccount/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;