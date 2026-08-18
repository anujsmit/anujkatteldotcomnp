import React from "react";
import {
  FaArrowRight,
  FaBriefcase,
  FaCheck,
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

import {
  SiDocker,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiSupabase,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";


/* =========================================================
   EXPERIENCE
========================================================= */

const experience = [
  {
    year: "2026",
    role: "Co-founder & Lead Developer",
    company: "ServeX",
    location: "Jhapa, Nepal",
    type: "Startup",

    description:
      "Leading the technical development of ServeX, a service marketplace connecting customers with verified professionals.",

    points: [
      "Built a service marketplace connecting customers with verified professionals.",
      "Architected the product with React Native, Node.js, Supabase, and PostgreSQL.",
      "Implemented real-time analytics and multi-business support.",
      "Managed the product lifecycle from ideation through deployment.",
    ],
  },

  {
    year: "2021 — Present",
    role: "Full Stack Developer",
    company: "Freelance",
    location: "Remote",
    type: "Contract",

    description:
      "Developing web and mobile applications for clients across different projects and industries.",

    points: [
      "Delivered web and mobile applications for clients across multiple countries.",
      "Optimized application performance and reduced page-load times.",
      "Integrated authentication, REST APIs, and payment gateways.",
      "Provided architecture planning, code review, and technical consulting.",
    ],
  },
];


/* =========================================================
   EDUCATION
========================================================= */

const education = [
  {
    year: "2024 — Present",
    degree: "Bachelor of Computer Application (BCA)",
    school: "Sikkim Manipal Institute of Technology",
    location: "India",
    type: "Bachelor's Degree",
  },

  {
    year: "2020 — 2022",
    degree: "SEE",
    school: "Nidi Education & Indreni Campus",
    location: "Nepal",
    type: "Secondary Education",
  },
];


/* =========================================================
   TECHNOLOGIES
========================================================= */

const technologies = [
  {
    name: "React",
    icon: <SiReact />,
  },

  {
    name: "Next.js",
    icon: <SiNextdotjs />,
  },

  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },

  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },

  {
    name: "PostgreSQL",
    icon: <SiPostgresql />,
  },

  {
    name: "Supabase",
    icon: <SiSupabase />,
  },

  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
  },

  {
    name: "Docker",
    icon: <SiDocker />,
  },
];


/* =========================================================
   STRENGTHS
========================================================= */

const strengths = [
  {
    number: "01",
    title: "Problem Solving",
    text:
      "Breaking complex problems into simple, practical and scalable solutions.",
  },

  {
    number: "02",
    title: "Product Thinking",
    text:
      "Thinking beyond code and focusing on how technology creates real value.",
  },

  {
    number: "03",
    title: "Clean Development",
    text:
      "Building maintainable architecture, readable code and reliable systems.",
  },

  {
    number: "04",
    title: "Continuous Learning",
    text:
      "Exploring new technologies and continuously improving my development workflow.",
  },
];


/* =========================================================
   SECTION HEADER
========================================================= */

function SectionHeader({
  number,
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="about-section-header">

      <div className="about-section-number">
        {number}
      </div>

      <div>

        <span className="about-section-eyebrow">
          {eyebrow}
        </span>

        <h2>
          {title}
        </h2>

        {description && (
          <p>
            {description}
          </p>
        )}

      </div>

    </div>
  );
}


/* =========================================================
   ABOUT PAGE
========================================================= */

function About() {
  return (
    <>
      <style>{`

        /* =====================================================
           ROOT
        ===================================================== */

        .about-page {
          --about-green: #08794f;
          --about-green-dark: #056440;
          --about-green-soft: #ecfdf5;

          --about-black: #101828;
          --about-text: #344054;
          --about-muted: #667085;

          --about-line: #e4e7ec;
          --about-soft: #f8fafc;

          --about-width: 1180px;

          min-height: 100vh;

          background: #ffffff;

          color: var(--about-black);

          font-family:
            "Manrope",
            "Inter",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;

          overflow: hidden;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .about-container {
          width:
            min(
              var(--about-width),
              calc(100% - 48px)
            );

          margin: 0 auto;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .about-hero {
          position: relative;

          padding:
            105px 0 95px;

          border-bottom:
            1px solid var(--about-line);

          background:
            radial-gradient(
              circle at 82% 15%,
              rgba(16, 185, 129, 0.08),
              transparent 26rem
            ),

            linear-gradient(
              180deg,
              #ffffff,
              #fbfdfc
            );
        }


        .about-hero-grid {
          display: grid;

          grid-template-columns:
            minmax(0, 1.2fr)
            minmax(280px, 0.8fr);

          gap: 100px;

          align-items: end;
        }


        /* =====================================================
           HERO COPY
        ===================================================== */

        .about-hero-eyebrow {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          color:
            var(--about-green);

          font-size: 11px;

          font-weight: 800;

          letter-spacing:
            0.15em;

          text-transform:
            uppercase;
        }


        .about-hero-eyebrow::before {
          content: "";

          width: 8px;
          height: 8px;

          border-radius: 50%;

          background:
            var(--about-green);

          box-shadow:
            0 0 0 5px
            rgba(16, 185, 129, 0.10);
        }


        .about-hero-title {
          max-width: 800px;

          margin:
            23px 0 24px;

          font-size:
            clamp(
              50px,
              7vw,
              82px
            );

          line-height:
            0.96;

          letter-spacing:
            -0.075em;

          font-weight:
            800;
        }


        .about-hero-title span {
          color:
            var(--about-green);
        }


        .about-hero-description {
          max-width: 650px;

          margin: 0;

          color:
            var(--about-muted);

          font-size: 16px;

          line-height: 1.85;
        }


        /* =====================================================
           HERO SIDE
        ===================================================== */

        .about-hero-side {
          padding-left: 30px;

          border-left:
            1px solid #dce5e0;
        }


        .about-hero-side-label {
          display: block;

          margin-bottom: 12px;

          color:
            var(--about-black);

          font-size: 11px;

          font-weight: 800;

          text-transform:
            uppercase;

          letter-spacing:
            0.1em;
        }


        .about-hero-side p {
          margin: 0;

          color:
            var(--about-muted);

          font-size: 13px;

          line-height: 1.8;
        }


        /* =====================================================
           QUICK INFO
        ===================================================== */

        .about-quick-info {
          display: flex;

          flex-wrap: wrap;

          gap: 8px;

          margin-top: 28px;
        }


        .about-quick-item {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          padding:
            8px 10px;

          border:
            1px solid var(--about-line);

          border-radius: 7px;

          color:
            var(--about-text);

          background:
            #ffffff;

          font-size: 10px;

          font-weight: 700;
        }


        .about-quick-item svg {
          color:
            var(--about-green);

          font-size: 10px;
        }


        /* =====================================================
           GENERAL SECTION
        ===================================================== */

        .about-section {
          padding:
            105px 0;
        }


        .about-section.soft {
          background:
            var(--about-soft);
        }


        /* =====================================================
           SECTION HEADER
        ===================================================== */

        .about-section-header {
          display: grid;

          grid-template-columns:
            60px 1fr;

          gap: 25px;

          margin-bottom:
            55px;
        }


        .about-section-number {
          color:
            var(--about-green);

          font-size: 11px;

          font-weight: 800;

          letter-spacing:
            0.08em;
        }


        .about-section-eyebrow {
          display: block;

          margin-bottom: 10px;

          color:
            var(--about-green);

          font-size: 10px;

          font-weight: 800;

          text-transform:
            uppercase;

          letter-spacing:
            0.13em;
        }


        .about-section-header h2 {
          max-width: 700px;

          margin: 0;

          font-size:
            clamp(
              34px,
              4vw,
              52px
            );

          line-height:
            1.02;

          letter-spacing:
            -0.06em;

          font-weight:
            800;
        }


        .about-section-header p {
          max-width: 650px;

          margin:
            15px 0 0;

          color:
            var(--about-muted);

          font-size: 13px;

          line-height: 1.8;
        }


        /* =====================================================
           ABOUT CONTENT
        ===================================================== */

        .about-intro-grid {
          display: grid;

          grid-template-columns:
            0.95fr 1.05fr;

          gap: 90px;

          align-items: start;
        }


        .about-intro-heading {
          margin: 0 0 20px;

          font-size: 28px;

          line-height: 1.2;

          letter-spacing:
            -0.045em;
        }


        .about-intro-copy p {
          margin: 0 0 17px;

          color:
            var(--about-muted);

          font-size: 13px;

          line-height: 1.85;
        }


        /* =====================================================
           CHECK LIST
        ===================================================== */

        .about-check-list {
          display: grid;

          gap: 11px;

          margin: 28px 0 0;

          padding: 0;

          list-style: none;
        }


        .about-check-list li {
          display: flex;

          align-items: center;

          gap: 10px;

          color:
            var(--about-text);

          font-size: 12px;

          font-weight: 600;
        }


        .about-check-list svg {
          flex-shrink: 0;

          color:
            var(--about-green);

          font-size: 11px;
        }


        /* =====================================================
           STRENGTHS
        ===================================================== */

        .about-strengths {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 1px;

          overflow: hidden;

          border:
            1px solid var(--about-line);

          border-radius: 15px;

          background:
            var(--about-line);
        }


        .about-strength {
          min-height: 185px;

          padding: 26px;

          background:
            #ffffff;

          transition:
            background 0.2s ease;
        }


        .about-strength:hover {
          background:
            #f9fcfa;
        }


        .about-strength-number {
          display: block;

          margin-bottom: 30px;

          color:
            #98a2b3;

          font-size: 10px;

          font-weight: 800;
        }


        .about-strength h3 {
          margin: 0 0 9px;

          font-size: 15px;

          letter-spacing:
            -0.02em;
        }


        .about-strength p {
          margin: 0;

          color:
            var(--about-muted);

          font-size: 11px;

          line-height: 1.7;
        }


        /* =====================================================
           TECHNOLOGIES
        ===================================================== */

        .about-tech {
          display: flex;

          flex-wrap: wrap;

          gap: 9px;
        }


        .about-tech-item {
          display: inline-flex;

          align-items: center;

          gap: 8px;

          padding:
            10px 12px;

          border:
            1px solid var(--about-line);

          border-radius: 8px;

          color:
            var(--about-text);

          background:
            #ffffff;

          font-size: 10px;

          font-weight: 700;

          transition:
            border-color 0.2s ease,
            color 0.2s ease,
            background 0.2s ease;
        }


        .about-tech-item svg {
          color:
            #667085;

          font-size: 15px;
        }


        .about-tech-item:hover {
          border-color:
            #b7dfcf;

          background:
            var(--about-green-soft);

          color:
            var(--about-green-dark);
        }


        .about-tech-item:hover svg {
          color:
            var(--about-green);
        }


        /* =====================================================
           EXPERIENCE
        ===================================================== */

        .about-experience {
          position: relative;

          margin-left: 60px;

          border-left:
            1px solid #d8e3de;
        }


        .about-experience-item {
          position: relative;

          display: grid;

          grid-template-columns:
            125px 1fr;

          gap: 50px;

          padding:
            0 0 70px 45px;
        }


        .about-experience-item:last-child {
          padding-bottom: 0;
        }


        .about-experience-item::before {
          content: "";

          position: absolute;

          left: -5px;

          top: 2px;

          width: 9px;
          height: 9px;

          border-radius: 50%;

          background:
            var(--about-green);

          box-shadow:
            0 0 0 5px
            #eaf8f1;
        }


        .about-experience-year {
          color:
            #475467;

          font-size: 11px;

          font-weight: 800;

          line-height: 1.6;
        }


        .about-experience-content {
          max-width: 760px;
        }


        .about-experience-top {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 20px;

          margin-bottom: 10px;
        }


        .about-experience-role {
          margin: 0;

          font-size: 23px;

          line-height: 1.2;

          letter-spacing:
            -0.04em;
        }


        .about-experience-type {
          padding:
            6px 9px;

          border-radius: 6px;

          background:
            var(--about-green-soft);

          color:
            var(--about-green-dark);

          font-size: 9px;

          font-weight: 800;

          white-space: nowrap;
        }


        .about-experience-company {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 7px;

          color:
            var(--about-green);

          font-size: 11px;

          font-weight: 800;
        }


        .about-experience-location {
          display: inline-flex;

          align-items: center;

          gap: 5px;

          margin-left: 7px;

          color:
            var(--about-muted);

          font-weight: 500;
        }


        .about-experience-description {
          max-width: 700px;

          margin:
            16px 0;

          color:
            var(--about-muted);

          font-size: 12px;

          line-height: 1.8;
        }


        .about-experience-points {
          display: grid;

          gap: 9px;

          margin: 0;

          padding: 0;

          list-style: none;
        }


        .about-experience-points li {
          display: flex;

          gap: 9px;

          color:
            #475467;

          font-size: 11px;

          line-height: 1.6;
        }


        .about-experience-points svg {
          flex-shrink: 0;

          margin-top: 3px;

          color:
            var(--about-green);

          font-size: 9px;
        }


        /* =====================================================
           EDUCATION
        ===================================================== */

        .about-education {
          display: grid;

          grid-template-columns:
            repeat(2, 1fr);

          gap: 16px;
        }


        .about-education-card {
          position: relative;

          padding: 28px;

          border:
            1px solid var(--about-line);

          border-radius: 14px;

          background:
            #ffffff;

          transition:
            transform 0.2s ease,
            box-shadow 0.2s ease,
            border-color 0.2s ease;
        }


        .about-education-card:hover {
          transform:
            translateY(-3px);

          border-color:
            #cdd9d4;

          box-shadow:
            0 18px 45px
            rgba(15, 23, 42, 0.07);
        }


        .about-education-top {
          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 15px;

          margin-bottom: 28px;
        }


        .about-education-icon {
          width: 42px;
          height: 42px;

          display: grid;

          place-items: center;

          border-radius: 10px;

          background:
            var(--about-green-soft);

          color:
            var(--about-green);

          font-size: 14px;
        }


        .about-education-type {
          color:
            var(--about-muted);

          font-size: 9px;

          font-weight: 700;

          padding:
            6px 8px;

          background:
            var(--about-soft);

          border-radius: 6px;
        }


        .about-education-year {
          color:
            var(--about-green);

          font-size: 10px;

          font-weight: 800;
        }


        .about-education-card h3 {
          margin:
            9px 0 8px;

          font-size: 19px;

          line-height: 1.25;

          letter-spacing:
            -0.035em;
        }


        .about-education-school {
          color:
            var(--about-text);

          font-size: 11px;

          font-weight: 700;
        }


        .about-education-location {
          display: flex;

          align-items: center;

          gap: 5px;

          margin-top: 8px;

          color:
            var(--about-muted);

          font-size: 10px;
        }


        /* =====================================================
           CTA
        ===================================================== */

        .about-cta {
          position: relative;

          overflow: hidden;

          display: flex;

          align-items: center;

          justify-content:
            space-between;

          gap: 40px;

          padding:
            55px;

          border:
            1px solid #d9ebe2;

          border-radius: 20px;

          background:
            radial-gradient(
              circle at 90% 15%,
              rgba(16, 185, 129, 0.13),
              transparent 18rem
            ),

            linear-gradient(
              135deg,
              #f4fbf7,
              #ffffff
            );
        }


        .about-cta::after {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          right: -90px;
          bottom: -100px;

          border:
            1px solid
            rgba(8, 121, 79, 0.10);

          border-radius: 50%;
        }


        .about-cta-content {
          position: relative;

          z-index: 1;
        }


        .about-cta-label {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          color:
            var(--about-green);

          font-size: 10px;

          font-weight: 800;

          text-transform:
            uppercase;

          letter-spacing:
            0.12em;
        }


        .about-cta-label svg {
          font-size: 9px;
        }


        .about-cta h2 {
          margin:
            10px 0 12px;

          font-size:
            clamp(
              30px,
              4vw,
              44px
            );

          line-height:
            1;

          letter-spacing:
            -0.06em;
        }


        .about-cta p {
          max-width: 570px;

          margin: 0;

          color:
            var(--about-muted);

          font-size: 12px;

          line-height: 1.7;
        }


        .about-cta-button {
          position: relative;

          z-index: 2;

          flex-shrink: 0;

          display: inline-flex;

          align-items: center;

          gap: 9px;

          min-height: 46px;

          padding:
            0 17px;

          border-radius: 9px;

          background:
            var(--about-green);

          color:
            #ffffff;

          text-decoration: none;

          font-size: 11px;

          font-weight: 800;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            box-shadow 0.2s ease;
        }


        .about-cta-button:hover {
          background:
            var(--about-green-dark);

          transform:
            translateY(-2px);

          box-shadow:
            0 12px 25px
            rgba(8, 121, 79, 0.18);
        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 900px) {

          .about-hero-grid {
            grid-template-columns: 1fr;

            gap: 40px;
          }


          .about-hero-side {
            max-width: 650px;

            padding:
              24px 0 0;

            border-left: 0;

            border-top:
              1px solid #dce5e0;
          }


          .about-intro-grid {
            grid-template-columns: 1fr;

            gap: 55px;
          }


          .about-experience {
            margin-left: 20px;
          }


          .about-experience-item {
            grid-template-columns:
              100px 1fr;

            gap: 30px;
          }
        }


        @media (max-width: 700px) {

          .about-container {
            width:
              calc(100% - 28px);
          }


          .about-hero {
            padding:
              75px 0 65px;
          }


          .about-section {
            padding:
              75px 0;
          }


          .about-section-header {
            grid-template-columns:
              45px 1fr;

            gap: 15px;

            margin-bottom:
              40px;
          }


          .about-section-header h2 {
            font-size:
              36px;
          }


          .about-strengths {
            grid-template-columns:
              1fr;
          }


          .about-strength {
            min-height:
              auto;
          }


          .about-education {
            grid-template-columns:
              1fr;
          }


          .about-experience {
            margin-left: 8px;
          }


          .about-experience-item {
            display: block;

            padding:
              0 0 55px 30px;
          }


          .about-experience-year {
            margin-bottom:
              10px;
          }


          .about-experience-top {
            align-items:
              flex-start;

            flex-direction:
              column;

            gap: 8px;
          }


          .about-experience-role {
            font-size:
              20px;
          }


          .about-cta {
            align-items:
              flex-start;

            flex-direction:
              column;

            padding:
              35px 28px;

            gap: 25px;
          }
        }


        @media (max-width: 500px) {

          .about-hero-title {
            font-size:
              48px;
          }


          .about-hero-description {
            font-size:
              14px;
          }


          .about-quick-info {
            display:
              grid;

            grid-template-columns:
              1fr 1fr;
          }


          .about-quick-item {
            justify-content:
              center;
          }


          .about-section-header {
            grid-template-columns:
              1fr;

            gap: 8px;
          }


          .about-section-number {
            margin-bottom:
              5px;
          }


          .about-intro-heading {
            font-size:
              24px;
          }


          .about-tech {
            display:
              grid;

            grid-template-columns:
              1fr 1fr;
          }


          .about-tech-item {
            justify-content:
              center;
          }
        }


        @media (prefers-reduced-motion: reduce) {

          .about-page *,
          .about-page *::before,
          .about-page *::after {
            animation:
              none !important;

            transition:
              none !important;
          }
        }

      `}</style>


      <main className="about-page">


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="about-hero">

          <div className="about-container">

            <div className="about-hero-grid">

              <div>

                <span className="about-hero-eyebrow">
                  About Me
                </span>


                <h1 className="about-hero-title">
                  Developer who
                  <br />
                  <span>
                    builds with purpose.
                  </span>
                </h1>


                <p className="about-hero-description">
                  I'm a Full Stack Developer who enjoys
                  turning ideas into useful, scalable and
                  user-focused digital products.
                </p>


                <div className="about-quick-info">

                  <span className="about-quick-item">
                    <FaCode />
                    Full Stack Development
                  </span>

                  <span className="about-quick-item">
                    <FaMapMarkerAlt />
                    Nepal
                  </span>

                  <span className="about-quick-item">
                    <FaBriefcase />
                    Open to opportunities
                  </span>

                </div>

              </div>


              <div className="about-hero-side">

                <span className="about-hero-side-label">
                  What I do
                </span>

                <p>
                  My work covers frontend development,
                  backend systems, mobile applications,
                  databases and deployment. I enjoy
                  working across the entire product
                  lifecycle — from an initial idea to a
                  production-ready application.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            ABOUT
        ===================================================== */}

        <section className="about-section">

          <div className="about-container">

            <SectionHeader
              number="01"
              eyebrow="About"
              title="More than just writing code."
              description="I enjoy solving problems and creating products that have a real purpose."
            />


            <div className="about-intro-grid">


              {/* LEFT */}

              <div className="about-intro-copy">

                <h3 className="about-intro-heading">
                  Clean code.
                  <br />
                  Real products.
                  <br />
                  Meaningful impact.
                </h3>


                <p>
                  I enjoy solving real-world problems
                  through software, from frontend
                  interfaces to backend systems and
                  mobile applications.
                </p>


                <p>
                  I believe good software should be
                  simple to use, reliable in production
                  and easy to maintain as the product
                  grows.
                </p>


                <ul className="about-check-list">

                  <li>
                    <FaCheck />
                    Clean, maintainable and scalable code
                  </li>

                  <li>
                    <FaCheck />
                    User-experience focused development
                  </li>

                  <li>
                    <FaCheck />
                    Performance and security conscious
                  </li>

                  <li>
                    <FaCheck />
                    Always learning and exploring new technology
                  </li>

                </ul>

              </div>


              {/* RIGHT */}

              <div className="about-strengths">

                {strengths.map((item) => (

                  <article
                    className="about-strength"
                    key={item.number}
                  >

                    <span className="about-strength-number">
                      {item.number}
                    </span>

                    <h3>
                      {item.title}
                    </h3>

                    <p>
                      {item.text}
                    </p>

                  </article>

                ))}

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            TECHNOLOGIES
        ===================================================== */}

        <section className="about-section soft">

          <div className="about-container">

            <SectionHeader
              number="02"
              eyebrow="Toolkit"
              title="Technologies I work with."
              description="A practical stack for building modern web, mobile and backend products."
            />


            <div className="about-tech">

              {technologies.map((technology) => (

                <span
                  key={technology.name}
                  className="about-tech-item"
                >

                  {technology.icon}

                  {technology.name}

                </span>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        <section
          className="about-section"
          id="experience"
        >

          <div className="about-container">

            <SectionHeader
              number="03"
              eyebrow="Experience"
              title="My professional journey."
              description="The work and experiences that have shaped how I approach software development."
            />


            <div className="about-experience">

              {experience.map((item) => (

                <article
                  className="about-experience-item"
                  key={`${item.company}-${item.role}`}
                >

                  <div className="about-experience-year">
                    {item.year}
                  </div>


                  <div className="about-experience-content">

                    <div className="about-experience-top">

                      <h3 className="about-experience-role">
                        {item.role}
                      </h3>

                      <span className="about-experience-type">
                        {item.type}
                      </span>

                    </div>


                    <div className="about-experience-company">

                      <FaBriefcase />

                      {item.company}

                      <span className="about-experience-location">
                        <FaMapMarkerAlt />
                        {item.location}
                      </span>

                    </div>


                    <p className="about-experience-description">
                      {item.description}
                    </p>


                    <ul className="about-experience-points">

                      {item.points.map((point) => (

                        <li key={point}>

                          <FaCheck />

                          {point}

                        </li>

                      ))}

                    </ul>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            EDUCATION
        ===================================================== */}

        <section
          className="about-section soft"
          id="education"
        >

          <div className="about-container">

            <SectionHeader
              number="04"
              eyebrow="Education"
              title="Academic background."
              description="The academic foundation behind my technical journey."
            />


            <div className="about-education">

              {education.map((item) => (

                <article
                  className="about-education-card"
                  key={item.degree}
                >

                  <div className="about-education-top">

                    <div className="about-education-icon">
                      <FaGraduationCap />
                    </div>

                    <span className="about-education-type">
                      {item.type}
                    </span>

                  </div>


                  <span className="about-education-year">
                    {item.year}
                  </span>


                  <h3>
                    {item.degree}
                  </h3>


                  <div className="about-education-school">
                    {item.school}
                  </div>


                  <div className="about-education-location">

                    <FaMapMarkerAlt />

                    {item.location}

                  </div>

                </article>

              ))}

            </div>

          </div>

        </section>


        {/* =====================================================
            CTA
        ===================================================== */}

        <section className="about-section">

          <div className="about-container">

            <div className="about-cta">

              <div className="about-cta-content">

                <span className="about-cta-label">
                  <FaStar />
                  Let's work together
                </span>


                <h2>
                  Have an idea?
                  <br />
                  Let's build it.
                </h2>


                <p>
                  I'm open to interesting projects,
                  collaborations and opportunities where
                  technology can make a real difference.
                </p>

              </div>


              <a
                href="/contact"
                className="about-cta-button"
              >
                Get In Touch

                <FaArrowRight />

              </a>

            </div>

          </div>

        </section>


      </main>
    </>
  );
}

export default About;