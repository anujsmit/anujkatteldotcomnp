import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Portfolio from './Pages/Portfolio';
import NotFound from './Pages/NotFound';
import DigitalKhata from './digitalkhata/DigialKhata';
import PrivacyPage from './digitalkhata/Privacy';
import TermsAndConditions from './digitalkhata/terms_and_conditions';
import DeleteAccount from './digitalkhata/Deleteaccount';
import PrivacyPolicy from "./servex/Privacypolicy";
import TermsOfUse from "./servex/TermsOfUse";
import ServeX from "./servex/ServeX";

// Centralized SEO configuration
const SEO_CONFIG = {
  defaultTitle: 'Anuj Kattel - Software Developer ',
  defaultDescription: 'Anuj Kattel is a software developer from Nepal, creator of Digital Khata - Nepal\'s leading business management app for small businesses.',
  defaultKeywords: 'anuj kattel, software developer, digital khata, nepal, web developer, app developer, portfolio',
  siteUrl: 'https://anujkattel.com.np',
  defaultImage: 'https://anujkattel.com.np/og-image.jpg',
  twitterHandle: '@anujkattel',
  
  pages: {
    '/': {
      title: 'Anuj Kattel - Software Developer',
      description: 'Hi, I\'m Anuj Kattel - a passionate software developer from Nepal. Creator of Digital Khata, Nepal\'s #1 business management app. Explore my work and projects.',
      keywords: 'anuj kattel, software developer, digital khata, web developer, app developer, nepal developer, portfolio'
    },
    '/digitalkhata/': {
      title: 'Digital Khata - #1 Business Management App in Nepal',
      description: 'Digital Khata is Nepal\'s leading business management app. Track customers, manage transactions, create invoices, and grow your business. Used by 10,000+ businesses. Download now!',
      keywords: 'digital khata, business management app, customer management, transaction tracking, invoice app, nepal business, small business app, khata app'
    },
    '/digitalkhata/home': {
      title: 'Digital Khata - #1 Business Management App in Nepal',
      description: 'Digital Khata is Nepal\'s leading business management app. Track customers, manage transactions, create invoices, and grow your business. Used by 10,000+ businesses. Download now!',
      keywords: 'digital khata, business management app, customer management, transaction tracking, invoice app, nepal business, small business app, khata app'
    },
    '/digitalkhata/privacy': {
      title: 'Privacy Policy - Digital Khata',
      description: 'Learn how Digital Khata protects your privacy and secures your business data. We are committed to GDPR compliance and data protection standards.',
      keywords: 'privacy policy, data protection, gdpr, digital khata privacy, data security, business data privacy'
    },
    '/digitalkhata/termsandcondition': {
      title: 'Terms and Conditions - Digital Khata',
      description: 'Read the terms and conditions for using Digital Khata. Understand your rights, responsibilities, and our service terms for business management.',
      keywords: 'terms and conditions, terms of service, digital khata terms, legal, user agreement'
    },
    '/digitalkhata/deleteaccount': {
      title: 'Delete Account - Digital Khata',
      description: 'Learn how to permanently delete your Digital Khata account. Understand the data deletion process and what happens to your business data.',
      keywords: 'delete account, data deletion, account removal, digital khata account, cancel account'
    },
    '/servex/': {
      title: 'ServeX - Professional Service Marketplace',
      description: 'ServeX is a professional service marketplace connecting talented service providers with clients. Find expert services or offer your skills.',
      keywords: 'servex, service marketplace, professional services, freelancing, nepal services, service provider'
    },
    '/servex/home': {
      title: 'ServeX - Professional Service Marketplace',
      description: 'ServeX is a professional service marketplace connecting talented service providers with clients. Find expert services or offer your skills.',
      keywords: 'servex, service marketplace, professional services, freelancing, nepal services, service provider'
    },
    '/servex/privacypolicy': {
      title: 'Privacy Policy - ServeX',
      description: 'Read ServeX privacy policy to understand how we protect your data and privacy. We follow strict data protection guidelines.',
      keywords: 'servex privacy, data protection, privacy policy, service marketplace privacy'
    },
    '/servex/termsofuse': {
      title: 'Terms of Use - ServeX',
      description: 'Review the terms of use for ServeX service marketplace. Understand the service rules, user responsibilities, and platform guidelines.',
      keywords: 'servex terms, terms of use, service marketplace rules, user agreement'
    }
  }
};

// Enhanced SEO Component with dynamic title suffix
const SEO = ({ 
  title, 
  description, 
  keywords, 
  url, 
  image,
  noIndex = false,
  noFollow = false,
  article = false,
  publishedTime,
  modifiedTime,
  author = 'Anuj Kattel'
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  
  // Get page-specific SEO or use defaults
  const pageConfig = SEO_CONFIG.pages[currentPath] || {};
  const finalTitle = title || pageConfig.title || SEO_CONFIG.defaultTitle;
  const finalDescription = description || pageConfig.description || SEO_CONFIG.defaultDescription;
  const finalKeywords = keywords || pageConfig.keywords || SEO_CONFIG.defaultKeywords;
  const finalUrl = url || `${SEO_CONFIG.siteUrl}${currentPath}`;
  const finalImage = image || SEO_CONFIG.defaultImage;
  
  // Generate structured data based on page type
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
      "@type": article ? "Article" : "WebPage",
      "name": finalTitle,
      "description": finalDescription,
      "url": finalUrl,
      "author": {
        "@type": "Person",
        "name": author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Anuj Kattel",
        "logo": {
          "@type": "ImageObject",
          "url": "https://anujkattel.com.np/logo.png"
        }
      }
    };

    // Add article-specific data
    if (article) {
      return {
        ...baseData,
        "datePublished": publishedTime || new Date().toISOString(),
        "dateModified": modifiedTime || new Date().toISOString(),
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": finalUrl
        }
      };
    }

    // Add breadcrumbs for better SEO
    const breadcrumbs = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": SEO_CONFIG.siteUrl
        }
      ]
    };

    // Add current page to breadcrumbs if not home
    if (currentPath !== '/') {
      const pathParts = currentPath.split('/').filter(Boolean);
      breadcrumbs.itemListElement.push({
        "@type": "ListItem",
        "position": 2,
        "name": pathParts[0].charAt(0).toUpperCase() + pathParts[0].slice(1),
        "item": `${SEO_CONFIG.siteUrl}${currentPath}`
      });
    }

    return [baseData, breadcrumbs];
  };

  const robotsDirective = [];
  if (noIndex) robotsDirective.push('noindex');
  if (noFollow) robotsDirective.push('nofollow');
  const robots = robotsDirective.length ? robotsDirective.join(', ') : 'index, follow';

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={finalUrl} />
      
      {/* Open Graph Tags */}
      <meta property="og:type" content={article ? "article" : "website"} />
      <meta property="og:url" content={finalUrl} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content="Anuj Kattel - Software Developer" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={finalUrl} />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalImage} />
      <meta name="twitter:creator" content={SEO_CONFIG.twitterHandle} />
      <meta name="twitter:site" content={SEO_CONFIG.twitterHandle} />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#4F46E5" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Language Alternatives */}
      <link rel="alternate" hrefLang="en" href={finalUrl} />
      <link rel="alternate" hrefLang="ne" href={`${SEO_CONFIG.siteUrl}/np${currentPath}`} />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(getStructuredData())}
      </script>
      
      {/* Preconnect for Performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    </Helmet>
  );
};

// Wrapper components with SEO
const DigitalKhataWrapper = () => (
  <>
    <SEO />
    <DigitalKhata />
  </>
);

const PrivacyPageWrapper = () => (
  <>
    <SEO />
    <PrivacyPage />
  </>
);

// Route with SEO component wrapper
const RouteWithSEO = ({ element, seoProps }) => (
  <>
    <SEO {...seoProps} />
    {element}
  </>
);

function App() {
  return (
    <HelmetProvider>
      <Router>
        <Routes>
          {/* Portfolio Route */}
          <Route path="/" element={<RouteWithSEO element={<Portfolio />} />} />
          
          {/* DigitalKhata Routes */}
          <Route path="/digitalkhata/" element={<DigitalKhataWrapper />} />
          <Route path="/digitalkhata/home" element={<DigitalKhataWrapper />} />
          <Route path="/digitalkhata/privacy" element={<PrivacyPageWrapper />} />
          <Route path="/digitalkhata/termsandcondition" element={<RouteWithSEO element={<TermsAndConditions />} />} />
          <Route path="/digitalkhata/deleteaccount" element={<RouteWithSEO element={<DeleteAccount />} />} />
          
          {/* ServeX Routes */}
          <Route path="/servex/" element={<RouteWithSEO element={<ServeX />} />} />
          <Route path="/servex/home" element={<RouteWithSEO element={<ServeX />} />} />
          <Route path="/servex/privacypolicy" element={<RouteWithSEO element={<PrivacyPolicy />} />} />
          <Route path="/servex/termsofuse" element={<RouteWithSEO element={<TermsOfUse />} />} />
          
          {/* 404 Not Found */}
          <Route path="*" element={<RouteWithSEO element={<NotFound />} seoProps={{ noIndex: true }} />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;