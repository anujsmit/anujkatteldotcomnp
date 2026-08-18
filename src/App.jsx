import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import {
  Helmet,
  HelmetProvider,
} from "react-helmet-async";

/* =========================================================
   MAIN PORTFOLIO PAGES
========================================================= */

import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

/* =========================================================
   DIGITAL KHATA
========================================================= */

import DigitalKhata from "./digitalkhata/DigialKhata";
import PrivacyPage from "./digitalkhata/Privacy";
import TermsAndConditions from "./digitalkhata/terms_and_conditions";
import DeleteAccount from "./digitalkhata/Deleteaccount";

/* =========================================================
   SERVEX
========================================================= */

import PrivacyPolicy from "./servex/Privacypolicy";
import TermsOfUse from "./servex/TermsOfUse";
import ServeX from "./servex/ServeX";

/* =========================================================
   NAVBAR
========================================================= */

import Navbar from "./components/Navbar";

/* =========================================================
   SITE CONFIG
========================================================= */

const SITE = {
  name: "Anuj Kattel",

  title: "Anuj Kattel | Full Stack Developer",

  description:
    "Anuj Kattel is a Full Stack Developer from Nepal building fast, scalable and user-focused web and mobile applications.",

  url: "https://anujkattel.com.np",

  image:
    "https://anujkattel.com.np/og-image.jpg",

  email:
    "anujkattel62@gmail.com",

  github:
    "https://github.com/anujsmit",

  linkedin:
    "https://linkedin.com/in/anujkattel",
};

/* =========================================================
   PAGE SEO
========================================================= */

const PAGE_SEO = {
  "/": {
    title:
      "Anuj Kattel | Full Stack Developer",

    description:
      "Anuj Kattel is a Full Stack Developer from Nepal building fast, scalable and user-focused web and mobile applications.",

    type: "website",
  },

  "/about": {
    title:
      "About Anuj Kattel | Full Stack Developer",

    description:
      "Learn about Anuj Kattel, his background, education, experience and approach to software development.",

    type: "profile",
  },

  "/projects": {
    title:
      "Projects | Anuj Kattel",

    description:
      "Explore web, mobile and full-stack projects built by Anuj Kattel, including Digital Khata and ServeX.",

    type: "website",
  },

  "/contact": {
    title:
      "Contact Anuj Kattel | Full Stack Developer",

    description:
      "Contact Anuj Kattel for software development projects, collaborations, freelance work and professional opportunities.",

    type: "website",
  },

  /* =======================================================
     DIGITAL KHATA
  ======================================================= */

  "/digitalkhata/": {
    title:
      "Digital Khata | Business Management Platform",

    description:
      "Digital Khata is a business management platform for managing customers, transactions, invoices and business operations.",

    type: "website",
  },

  "/digitalkhata/home": {
    title:
      "Digital Khata | Business Management Platform",

    description:
      "Manage customers, transactions, invoices and everyday business operations with Digital Khata.",

    type: "website",
  },

  "/digitalkhata/privacy": {
    title:
      "Privacy Policy | Digital Khata",

    description:
      "Read the Digital Khata privacy policy and learn how user and business data is handled.",

    type: "website",
  },

  "/digitalkhata/termsandcondition": {
    title:
      "Terms and Conditions | Digital Khata",

    description:
      "Read the terms and conditions for using Digital Khata.",

    type: "website",
  },

  "/digitalkhata/deleteaccount": {
    title:
      "Delete Account | Digital Khata",

    description:
      "Learn how to permanently delete your Digital Khata account.",

    type: "website",
  },

  /* =======================================================
     SERVEX
  ======================================================= */

  "/servex/": {
    title:
      "ServeX | Service Marketplace",

    description:
      "ServeX connects customers with service providers through a professional service marketplace.",

    type: "website",
  },

  "/servex/home": {
    title:
      "ServeX | Service Marketplace",

    description:
      "Discover and connect with service providers through ServeX.",

    type: "website",
  },

  "/servex/privacypolicy": {
    title:
      "Privacy Policy | ServeX",

    description:
      "Read the ServeX privacy policy.",

    type: "website",
  },

  "/servex/termsofuse": {
    title:
      "Terms of Use | ServeX",

    description:
      "Read the terms of use for the ServeX service marketplace.",

    type: "website",
  },
};

/* =========================================================
   NORMALIZE URL
========================================================= */

function getCanonicalUrl(pathname) {
  if (!pathname || pathname === "/") {
    return SITE.url;
  }

  return `${SITE.url}${pathname}`;
}

/* =========================================================
   STRUCTURED DATA
========================================================= */

function createStructuredData({
  pathname,
  title,
  description,
  canonical,
  type,
}) {
  /* =======================================================
     HOMEPAGE
  ======================================================= */

  if (pathname === "/") {
    return [
      {
        "@context": "https://schema.org",
        "@type": "Person",

        name: SITE.name,

        url: SITE.url,

        jobTitle: "Full Stack Developer",

        description: SITE.description,

        email: SITE.email,

        sameAs: [
          SITE.github,
          SITE.linkedin,
        ],
      },

      {
        "@context": "https://schema.org",
        "@type": "WebSite",

        name: SITE.name,

        url: SITE.url,

        description: SITE.description,
      },

      {
        "@context": "https://schema.org",
        "@type": "WebPage",

        name: title,

        description,

        url: canonical,

        isPartOf: {
          "@type": "WebSite",

          name: SITE.name,

          url: SITE.url,
        },

        about: {
          "@type": "Person",

          name: SITE.name,

          url: SITE.url,
        },
      },
    ];
  }

  /* =======================================================
     INTERNAL PAGE
  ======================================================= */

  const pageData = {
    "@context": "https://schema.org",

    "@type": "WebPage",

    name: title,

    description,

    url: canonical,

    isPartOf: {
      "@type": "WebSite",

      name: SITE.name,

      url: SITE.url,
    },

    author: {
      "@type": "Person",

      name: SITE.name,

      url: SITE.url,
    },
  };

  /* =======================================================
     BREADCRUMB
  ======================================================= */

  const pathParts = pathname
    .split("/")
    .filter(Boolean);

  const breadcrumbItems = [
    {
      "@type": "ListItem",

      position: 1,

      name: "Home",

      item: SITE.url,
    },
  ];

  if (pathParts.length > 0) {
    const currentName = pathParts[
      pathParts.length - 1
    ]
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) =>
        char.toUpperCase()
      );

    breadcrumbItems.push({
      "@type": "ListItem",

      position: 2,

      name: currentName,

      item: canonical,
    });
  }

  const breadcrumbData = {
    "@context": "https://schema.org",

    "@type": "BreadcrumbList",

    itemListElement: breadcrumbItems,
  };

  return [
    pageData,
    breadcrumbData,
  ];
}

/* =========================================================
   SEO COMPONENT
========================================================= */

function SEO({
  title,
  description,
  image,
  noIndex = false,
}) {
  const location = useLocation();

  const pathname =
    location.pathname;

  const pageSeo =
    PAGE_SEO[pathname] || {};

  const finalTitle =
    title ||
    pageSeo.title ||
    SITE.title;

  const finalDescription =
    description ||
    pageSeo.description ||
    SITE.description;

  const finalImage =
    image ||
    SITE.image;

  const canonical =
    getCanonicalUrl(pathname);

  const structuredData =
    createStructuredData({
      pathname,
      title: finalTitle,
      description: finalDescription,
      canonical,
      type: pageSeo.type,
    });

  const robots =
    noIndex
      ? "noindex, nofollow"
      : "index, follow";

  return (
    <Helmet>

      {/* =====================================================
          BASIC SEO
      ===================================================== */}

      <html lang="en" />

      <title>
        {finalTitle}
      </title>

      <meta
        name="description"
        content={finalDescription}
      />

      <meta
        name="author"
        content={SITE.name}
      />

      <meta
        name="robots"
        content={robots}
      />

      <link
        rel="canonical"
        href={canonical}
      />

      {/* =====================================================
          OPEN GRAPH
      ===================================================== */}

      <meta
        property="og:type"
        content={
          pathname === "/"
            ? "website"
            : "website"
        }
      />

      <meta
        property="og:title"
        content={finalTitle}
      />

      <meta
        property="og:description"
        content={finalDescription}
      />

      <meta
        property="og:url"
        content={canonical}
      />

      <meta
        property="og:image"
        content={finalImage}
      />

      <meta
        property="og:image:width"
        content="1200"
      />

      <meta
        property="og:image:height"
        content="630"
      />

      <meta
        property="og:site_name"
        content={SITE.name}
      />

      <meta
        property="og:locale"
        content="en_US"
      />

      {/* =====================================================
          TWITTER / X
      ===================================================== */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={finalTitle}
      />

      <meta
        name="twitter:description"
        content={finalDescription}
      />

      <meta
        name="twitter:image"
        content={finalImage}
      />

      {/* =====================================================
          THEME
      ===================================================== */}

      <meta
        name="theme-color"
        content="#0f9f68"
      />

      {/* =====================================================
          FAVICON
      ===================================================== */}

      <link
        rel="icon"
        type="image/svg+xml"
        href="/favicon.svg"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />

      <link
        rel="apple-touch-icon"
        href="/apple-touch-icon.png"
      />

      <link
        rel="manifest"
        href="/site.webmanifest"
      />

      {/* =====================================================
          STRUCTURED DATA
      ===================================================== */}

      {structuredData.map(
        (schema, index) => (
          <script
            key={index}
            type="application/ld+json"
          >
            {JSON.stringify(schema)}
          </script>
        )
      )}

    </Helmet>
  );
}

/* =========================================================
   ROUTE + SEO
========================================================= */

function RouteWithSEO({
  element,
  seoProps = {},
}) {
  return (
    <>
      <SEO {...seoProps} />

      {element}
    </>
  );
}

/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <HelmetProvider>

      <Router>

        {/* =================================================
            GLOBAL NAVBAR

            Your custom Navbar stays outside Routes,
            so it appears on portfolio pages.
        ================================================= */}

        <Navbar />

        <Routes>

          {/* =================================================
              PORTFOLIO
          ================================================= */}

          <Route
            path="/"
            element={
              <RouteWithSEO
                element={
                  <Portfolio />
                }
              />
            }
          />

          <Route
            path="/about"
            element={
              <RouteWithSEO
                element={
                  <About />
                }
              />
            }
          />


          <Route
            path="/projects"
            element={
              <RouteWithSEO
                element={
                  <Projects />
                }
              />
            }
          />

          <Route
            path="/contact"
            element={
              <RouteWithSEO
                element={
                  <Contact />
                }
              />
            }
          />

          {/* =================================================
              DIGITAL KHATA
          ================================================= */}

          <Route
            path="/digitalkhata/"
            element={
              <RouteWithSEO
                element={
                  <DigitalKhata />
                }
              />
            }
          />

          <Route
            path="/digitalkhata/home"
            element={
              <RouteWithSEO
                element={
                  <DigitalKhata />
                }
              />
            }
          />

          <Route
            path="/digitalkhata/privacy"
            element={
              <RouteWithSEO
                element={
                  <PrivacyPage />
                }
              />
            }
          />

          <Route
            path="/digitalkhata/termsandcondition"
            element={
              <RouteWithSEO
                element={
                  <TermsAndConditions />
                }
              />
            }
          />

          <Route
            path="/digitalkhata/deleteaccount"
            element={
              <RouteWithSEO
                element={
                  <DeleteAccount />
                }
              />
            }
          />

          {/* =================================================
              SERVEX
          ================================================= */}

          <Route
            path="/servex/"
            element={
              <RouteWithSEO
                element={
                  <ServeX />
                }
              />
            }
          />

          <Route
            path="/servex/home"
            element={
              <RouteWithSEO
                element={
                  <ServeX />
                }
              />
            }
          />

          <Route
            path="/servex/privacypolicy"
            element={
              <RouteWithSEO
                element={
                  <PrivacyPolicy />
                }
              />
            }
          />

          <Route
            path="/servex/termsofuse"
            element={
              <RouteWithSEO
                element={
                  <TermsOfUse />
                }
              />
            }
          />

          {/* =================================================
              404
          ================================================= */}

          <Route
            path="*"
            element={
              <RouteWithSEO
                element={
                  <NotFound />
                }
                seoProps={{
                  noIndex: true,
                }}
              />
            }
          />

        </Routes>

      </Router>

    </HelmetProvider>
  );
}

export default App;