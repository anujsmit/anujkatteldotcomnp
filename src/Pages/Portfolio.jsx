import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaCode,
  FaCheck,
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

import profileImg from "../assets/profile.png";

/* =========================================================
   PROFILE
========================================================= */

const profile = {
  name: "Anuj Kattel",

  title: "Full Stack Developer",

  email: "anujkattel62@gmail.com",

  github: "https://github.com/anujsmit",

  linkedin: "https://linkedin.com/in/anujkattel",

  bio:
    "I build digital products that are fast, scalable, and user-focused. I enjoy turning real-world problems into practical web and mobile solutions with clean architecture and thoughtful UX.",
};


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
    name: "Tailwind",
    icon: <SiTailwindcss />,
  },

  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },

  {
    name: "TypeScript",
    icon: <SiTypescript />,
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
    name: "React Native",
    icon: <SiReact />,
  },

  {
    name: "Docker",
    icon: <SiDocker />,
  },
];


/* =========================================================
   STATS
========================================================= */

const stats = [
  {
    value: "4+",
    label: "Years Experience",
  },

  {
    value: "20+",
    label: "Projects Built",
  },

  {
    value: "8",
    label: "Countries Served",
  },
];


/* =========================================================
   HOME PAGE
========================================================= */

function Portfolio() {
  return (
    <>
      <style>{`

        /* =====================================================
           DESIGN SYSTEM
        ===================================================== */

        .portfolio-home {
          --p-green: #08794f;
          --p-green-dark: #056440;
          --p-green-soft: #ecfdf5;

          --p-black: #101828;
          --p-text: #344054;
          --p-muted: #667085;

          --p-border: #e4e7ec;
          --p-background: #ffffff;
          --p-soft: #f8fafc;

          --p-container: 1180px;

          position: relative;

          min-height: calc(100vh - 78px);

          overflow: hidden;

          background:
            radial-gradient(
              circle at 78% 16%,
              rgba(8, 121, 79, 0.07),
              transparent 28rem
            ),
            #ffffff;

          color: var(--p-black);

          font-family:
            "Manrope",
            "Inter",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }


        /* =====================================================
           CONTAINER
        ===================================================== */

        .portfolio-container {
          width:
            min(
              var(--p-container),
              calc(100% - 48px)
            );

          margin: 0 auto;
        }


        /* =====================================================
           BACKGROUND DETAILS
        ===================================================== */

        .portfolio-grid-pattern {
          position: absolute;

          top: 0;
          right: 0;

          width: 360px;
          height: 360px;

          opacity: 0.45;

          background-image:
            linear-gradient(
              rgba(8, 121, 79, 0.055) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(8, 121, 79, 0.055) 1px,
              transparent 1px
            );

          background-size: 30px 30px;

          mask-image:
            radial-gradient(
              circle at top right,
              black,
              transparent 72%
            );

          pointer-events: none;
        }


        .portfolio-orb {
          position: absolute;

          width: 220px;
          height: 220px;

          left: -120px;
          bottom: 90px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(8, 121, 79, 0.06),
              transparent 70%
            );

          pointer-events: none;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .portfolio-hero {
          position: relative;

          min-height: 680px;

          display: flex;

          align-items: center;

          padding:
            70px 0 95px;
        }


        .portfolio-hero-grid {
          position: relative;

          z-index: 2;

          display: grid;

          grid-template-columns:
            minmax(0, 1.05fr)
            minmax(390px, 0.95fr);

          gap: 80px;

          align-items: center;
        }


        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .portfolio-content {
          max-width: 690px;
        }


        /* STATUS */

        .portfolio-status {
          display: inline-flex;

          align-items: center;

          gap: 9px;

          padding:
            7px 11px;

          border:
            1px solid #d7efe4;

          border-radius: 999px;

          background:
            rgba(236, 253, 245, 0.75);

          color:
            var(--p-green-dark);

          font-size: 10px;

          font-weight: 800;

          letter-spacing:
            0.08em;

          text-transform:
            uppercase;
        }


        .portfolio-status-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            #10b981;

          box-shadow:
            0 0 0 4px
            rgba(16, 185, 129, 0.12);
        }


        /* EYEBROW */

        .portfolio-eyebrow {
          display: block;

          margin-top: 25px;

          color:
            var(--p-green);

          font-size: 12px;

          font-weight: 800;

          letter-spacing:
            0.16em;

          text-transform:
            uppercase;
        }


        /* TITLE */

        .portfolio-title {
          max-width: 720px;

          margin:
            12px 0 22px;

          color:
            var(--p-black);

          font-size:
            clamp(
              54px,
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


        .portfolio-title-highlight {
          color:
            var(--p-green);
        }


        /* LEAD */

        .portfolio-lead {
          max-width: 620px;

          margin: 0;

          color:
            var(--p-text);

          font-size: 21px;

          line-height: 1.55;

          letter-spacing:
            -0.025em;

          font-weight: 600;
        }


        /* DESCRIPTION */

        .portfolio-description {
          max-width: 610px;

          margin:
            16px 0 0;

          color:
            var(--p-muted);

          font-size: 14px;

          line-height: 1.8;

          font-weight: 400;
        }


        /* =====================================================
           ACTIONS
        ===================================================== */

        .portfolio-actions {
          display: flex;

          flex-wrap: wrap;

          gap: 10px;

          margin-top: 30px;
        }


        .portfolio-button {
          min-height: 48px;

          display: inline-flex;

          align-items: center;

          justify-content: center;

          gap: 9px;

          padding:
            0 17px;

          border-radius: 9px;

          text-decoration: none;

          font-size: 12px;

          font-weight: 800;

          transition:
            transform 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease,
            box-shadow 0.2s ease;
        }


        .portfolio-button-primary {
          background:
            var(--p-green);

          border:
            1px solid var(--p-green);

          color:
            #ffffff;
        }


        .portfolio-button-primary:hover {
          background:
            var(--p-green-dark);

          transform:
            translateY(-2px);

          box-shadow:
            0 12px 25px
            rgba(8, 121, 79, 0.18);
        }


        .portfolio-button-secondary {
          background:
            #ffffff;

          border:
            1px solid var(--p-border);

          color:
            var(--p-black);
        }


        .portfolio-button-secondary:hover {
          background:
            var(--p-soft);

          border-color:
            #cfd5dc;

          transform:
            translateY(-2px);
        }


        /* =====================================================
           SOCIALS
        ===================================================== */

        .portfolio-socials {
          display: flex;

          align-items: center;

          flex-wrap: wrap;

          gap: 7px;

          margin-top: 25px;
        }


        .portfolio-social {
          width: 34px;
          height: 34px;

          display: inline-flex;

          align-items: center;
          justify-content: center;

          border:
            1px solid var(--p-border);

          border-radius: 8px;

          background:
            #ffffff;

          color:
            #475467;

          text-decoration: none;

          font-size: 13px;

          transition:
            color 0.2s ease,
            background 0.2s ease,
            border-color 0.2s ease,
            transform 0.2s ease;
        }


        .portfolio-social:hover {
          color:
            var(--p-green);

          border-color:
            #b7dfcf;

          background:
            var(--p-green-soft);

          transform:
            translateY(-2px);
        }


        .portfolio-social-email {
          width: auto;

          padding:
            0 12px;

          gap: 7px;

          font-size: 10px;

          font-weight: 700;
        }


        /* =====================================================
           STATS
        ===================================================== */

        .portfolio-stats {
          display: flex;

          align-items: center;

          gap: 0;

          margin-top: 36px;

          padding-top: 22px;

          border-top:
            1px solid var(--p-border);

          max-width: 600px;
        }


        .portfolio-stat {
          min-width: 125px;

          padding-right: 25px;

          margin-right: 25px;

          border-right:
            1px solid var(--p-border);
        }


        .portfolio-stat:last-child {
          border-right: 0;

          margin-right: 0;

          padding-right: 0;
        }


        .portfolio-stat-value {
          display: block;

          color:
            var(--p-black);

          font-size: 22px;

          line-height: 1;

          font-weight: 800;

          letter-spacing:
            -0.05em;
        }


        .portfolio-stat-label {
          display: block;

          margin-top: 6px;

          color:
            var(--p-muted);

          font-size: 9px;

          line-height: 1.4;

          text-transform:
            uppercase;

          letter-spacing:
            0.07em;

          font-weight: 700;
        }


        /* =====================================================
           RIGHT PROFILE CARD
        ===================================================== */

        .portfolio-profile-area {
          position: relative;

          min-height: 520px;

          display: flex;

          align-items: center;

          justify-content: center;
        }


        .portfolio-profile-glow {
          position: absolute;

          width: 390px;
          height: 390px;

          border-radius: 50%;

          background:
            radial-gradient(
              circle,
              rgba(16, 185, 129, 0.12),
              rgba(16, 185, 129, 0.035) 45%,
              transparent 72%
            );
        }


        /* PROFILE CARD */

        .portfolio-profile-card {
          position: relative;

          width: min(
            420px,
            100%
          );

          padding: 12px;

          border:
            1px solid #e5ebe8;

          border-radius: 24px;

          background:
            rgba(255, 255, 255, 0.88);

          box-shadow:
            0 25px 70px
            rgba(15, 23, 42, 0.10);

          backdrop-filter:
            blur(15px);
        }


        /* IMAGE */

        .portfolio-image-box {
          position: relative;

          height: 405px;

          overflow: hidden;

          border-radius: 17px;

          background:
            linear-gradient(
              145deg,
              #f5faf7,
              #eaf6f0
            );
        }


        .portfolio-image-box::before {
          content: "";

          position: absolute;

          width: 280px;
          height: 280px;

          top: 40px;
          left: 50%;

          transform:
            translateX(-50%);

          border-radius: 50%;

          background:
            rgba(255, 255, 255, 0.72);
        }


        .portfolio-image-box::after {
          content: "";

          position: absolute;

          width: 180px;
          height: 180px;

          right: -60px;
          bottom: -80px;

          border-radius: 50%;

          background:
            rgba(8, 121, 79, 0.07);
        }


        .portfolio-profile-image {
          position: absolute;

          z-index: 2;

          left: 10px;
          right: 10px;
          bottom: 0;

          width:
            calc(100% - 20px);

          height: 100%;

          object-fit: contain;

          object-position:
            bottom center;

          filter:
            drop-shadow(
              0 20px 20px
              rgba(15, 23, 42, 0.13)
            );
        }


        /* PROFILE INFO */

        .portfolio-profile-info {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 15px;

          padding:
            17px 9px 7px;
        }


        .portfolio-profile-name {
          margin: 0;

          color:
            var(--p-black);

          font-size: 14px;

          font-weight: 800;

          letter-spacing:
            -0.025em;
        }


        .portfolio-profile-role {
          margin: 4px 0 0;

          color:
            var(--p-muted);

          font-size: 10px;
        }


        .portfolio-code-icon {
          width: 38px;
          height: 38px;

          display: grid;

          place-items: center;

          flex-shrink: 0;

          border-radius: 9px;

          background:
            var(--p-green-soft);

          color:
            var(--p-green);

          font-size: 14px;
        }


        /* =====================================================
           FLOATING AVAILABILITY CARD
        ===================================================== */

        .portfolio-availability {
          position: absolute;

          z-index: 5;

          top: 38px;
          left: -25px;

          display: flex;

          align-items: center;

          gap: 9px;

          padding:
            10px 12px;

          border:
            1px solid #dceee6;

          border-radius: 10px;

          background:
            rgba(255, 255, 255, 0.96);

          box-shadow:
            0 12px 30px
            rgba(15, 23, 42, 0.08);
        }


        .portfolio-availability-dot {
          width: 7px;
          height: 7px;

          border-radius: 50%;

          background:
            #10b981;

          box-shadow:
            0 0 0 4px
            rgba(16, 185, 129, 0.10);
        }


        .portfolio-availability span {
          color:
            #344054;

          font-size: 9px;

          font-weight: 800;
        }


        /* =====================================================
           FLOATING CODE CARD
        ===================================================== */

        .portfolio-code-card {
          position: absolute;

          z-index: 5;

          right: -26px;

          bottom: 58px;

          width: 145px;

          padding:
            13px;

          border:
            1px solid #e7ecea;

          border-radius: 11px;

          background:
            rgba(255, 255, 255, 0.96);

          box-shadow:
            0 15px 35px
            rgba(15, 23, 42, 0.09);
        }


        .portfolio-code-line {
          height: 5px;

          margin-bottom: 7px;

          border-radius: 20px;

          background:
            #dce6e1;
        }


        .portfolio-code-line:nth-child(1) {
          width: 55%;
        }


        .portfolio-code-line:nth-child(2) {
          width: 85%;
        }


        .portfolio-code-line:nth-child(3) {
          width: 68%;
        }


        .portfolio-code-line:nth-child(4) {
          width: 45%;

          margin-bottom: 0;

          background:
            #b9dfcf;
        }


        /* =====================================================
           TECHNOLOGY SECTION
        ===================================================== */

        .portfolio-tech-section {
          position: relative;

          border-top:
            1px solid var(--p-border);

          background:
            #ffffff;
        }


        .portfolio-tech-inner {
          min-height: 100px;

          display: grid;

          grid-template-columns:
            180px 1fr;

          align-items: center;

          gap: 35px;
        }


        .portfolio-tech-heading {
          display: flex;

          flex-direction: column;

          gap: 4px;
        }


        .portfolio-tech-heading strong {
          color:
            var(--p-black);

          font-size: 11px;

          font-weight: 800;

          text-transform:
            uppercase;

          letter-spacing:
            0.1em;
        }


        .portfolio-tech-heading span {
          color:
            var(--p-muted);

          font-size: 9px;

          line-height: 1.4;
        }


        .portfolio-tech-list {
          display: flex;

          align-items: center;

          justify-content: space-between;

          gap: 14px;

          flex-wrap: wrap;
        }


        .portfolio-tech-item {
          display: inline-flex;

          align-items: center;

          gap: 7px;

          padding:
            8px 10px;

          border:
            1px solid transparent;

          border-radius: 7px;

          color:
            #475467;

          font-size: 10px;

          font-weight: 700;

          transition:
            background 0.2s ease,
            border-color 0.2s ease,
            color 0.2s ease;
        }


        .portfolio-tech-item svg {
          color:
            #667085;

          font-size: 15px;

          transition:
            color 0.2s ease;
        }


        .portfolio-tech-item:hover {
          border-color:
            #d9ebe3;

          background:
            var(--p-green-soft);

          color:
            var(--p-green-dark);
        }


        .portfolio-tech-item:hover svg {
          color:
            var(--p-green);
        }


        /* =====================================================
           BOTTOM SCROLL INDICATOR
        ===================================================== */

        .portfolio-scroll {
          position: absolute;

          left: 50%;

          bottom: 25px;

          transform:
            translateX(-50%);

          display: flex;

          align-items: center;

          gap: 8px;

          color:
            #98a2b3;

          font-size: 8px;

          font-weight: 700;

          text-transform:
            uppercase;

          letter-spacing:
            0.12em;
        }


        .portfolio-scroll-line {
          width: 28px;

          height: 1px;

          background:
            #d0d5dd;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1050px) {

          .portfolio-hero-grid {
            grid-template-columns:
              minmax(0, 1fr)
              minmax(340px, 0.85fr);

            gap: 45px;
          }


          .portfolio-title {
            font-size:
              clamp(
                50px,
                7vw,
                70px
              );
          }


          .portfolio-lead {
            font-size: 19px;
          }


          .portfolio-profile-card {
            width: 370px;
          }


          .portfolio-image-box {
            height: 370px;
          }


          .portfolio-availability {
            left: -10px;
          }


          .portfolio-code-card {
            right: -10px;
          }


          .portfolio-tech-inner {
            grid-template-columns:
              150px 1fr;

            gap: 20px;
          }
        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 800px) {

          .portfolio-container {
            width:
              calc(100% - 32px);
          }


          .portfolio-hero {
            min-height: auto;

            padding:
              55px 0 75px;
          }


          .portfolio-hero-grid {
            grid-template-columns: 1fr;

            gap: 55px;
          }


          .portfolio-content {
            max-width:
              680px;

            text-align: center;

            margin: 0 auto;
          }


          .portfolio-status {
            justify-content:
              center;
          }


          .portfolio-eyebrow {
            margin-top: 20px;
          }


          .portfolio-title {
            margin:
              12px auto 20px;

            font-size:
              clamp(
                48px,
                13vw,
                68px
              );
          }


          .portfolio-lead {
            margin:
              0 auto;

            font-size: 18px;
          }


          .portfolio-description {
            margin:
              15px auto 0;

            font-size: 13px;
          }


          .portfolio-actions {
            justify-content:
              center;
          }


          .portfolio-socials {
            justify-content:
              center;
          }


          .portfolio-stats {
            justify-content:
              center;

            margin:
              30px auto 0;
          }


          .portfolio-profile-area {
            min-height:
              430px;
          }


          .portfolio-profile-card {
            width:
              min(
                390px,
                100%
              );
          }


          .portfolio-image-box {
            height: 380px;
          }


          .portfolio-tech-inner {
            display:
              block;

            padding:
              22px 0;
          }


          .portfolio-tech-heading {
            margin-bottom:
              14px;

            text-align:
              center;
          }


          .portfolio-tech-list {
            justify-content:
              center;
          }


          .portfolio-scroll {
            display:
              none;
          }
        }


        /* =====================================================
           SMALL MOBILE
        ===================================================== */

        @media (max-width: 520px) {

          .portfolio-container {
            width:
              calc(100% - 24px);
          }


          .portfolio-hero {
            padding:
              45px 0 60px;
          }


          .portfolio-title {
            font-size:
              49px;

            letter-spacing:
              -0.065em;
          }


          .portfolio-lead {
            font-size:
              17px;
          }


          .portfolio-actions {
            flex-direction:
              column;

            width: 100%;
          }


          .portfolio-button {
            width:
              100%;
          }


          .portfolio-socials {
            gap: 6px;
          }


          .portfolio-social {
            width:
              35px;

            height:
              35px;
          }


          .portfolio-social-email {
            width:
              auto;

            padding:
              0 10px;
          }


          .portfolio-stats {
            width:
              100%;

            display:
              grid;

            grid-template-columns:
              repeat(3, 1fr);

            gap: 10px;
          }


          .portfolio-stat {
            min-width:
              0;

            margin:
              0;

            padding:
              0 5px;
          }


          .portfolio-stat-value {
            font-size:
              18px;
          }


          .portfolio-stat-label {
            font-size:
              7px;
          }


          .portfolio-profile-area {
            min-height:
              400px;
          }


          .portfolio-profile-card {
            padding:
              8px;

            border-radius:
              19px;
          }


          .portfolio-image-box {
            height:
              350px;

            border-radius:
              13px;
          }


          .portfolio-profile-info {
            padding:
              14px 7px 5px;
          }


          .portfolio-availability {
            top:
              20px;

            left:
              0;
          }


          .portfolio-code-card {
            right:
              0;

            bottom:
              45px;

            width:
              115px;
          }


          .portfolio-grid-pattern {
            width:
              220px;

            height:
              220px;
          }
        }


        /* =====================================================
           VERY SMALL
        ===================================================== */

        @media (max-width: 360px) {

          .portfolio-title {
            font-size:
              43px;
          }


          .portfolio-profile-area {
            min-height:
              360px;
          }


          .portfolio-image-box {
            height:
              310px;
          }


          .portfolio-code-card {
            display:
              none;
          }


          .portfolio-stat-label {
            font-size:
              6.5px;
          }
        }


        /* =====================================================
           ACCESSIBILITY
        ===================================================== */

        .portfolio-home a:focus-visible {
          outline:
            2px solid
            var(--p-green);

          outline-offset:
            3px;
        }


        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {

          .portfolio-home *,
          .portfolio-home *::before,
          .portfolio-home *::after {
            transition:
              none !important;

            animation:
              none !important;
          }
        }

      `}</style>


      {/* =====================================================
          PAGE
      ===================================================== */}

      <main className="portfolio-home">

        {/* Decorative background */}

        <div
          className="portfolio-grid-pattern"
          aria-hidden="true"
        />

        <div
          className="portfolio-orb"
          aria-hidden="true"
        />


        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          className="portfolio-hero"
          aria-labelledby="portfolio-title"
        >

          <div className="portfolio-container">

            <div className="portfolio-hero-grid">

              {/* =================================================
                  LEFT
              ================================================= */}

              <div className="portfolio-content">

                {/* Availability */}

                <div className="portfolio-status">
                  <span
                    className="portfolio-status-dot"
                    aria-hidden="true"
                  />

                  Available for opportunities
                </div>


                {/* Role */}

                <span className="portfolio-eyebrow">
                  {profile.title}
                </span>


                {/* Main heading */}

                <h1
                  id="portfolio-title"
                  className="portfolio-title"
                >
                  Building
                  <br />

                  <span className="portfolio-title-highlight">
                    digital products
                  </span>
                  <br />

                  that matter.
                </h1>


                {/* Lead */}

                <p className="portfolio-lead">
                  Hi, I'm {profile.name}. I turn ideas
                  and real-world problems into useful
                  digital experiences.
                </p>


                {/* Description */}

                <p className="portfolio-description">
                  {profile.bio}
                </p>


                {/* =================================================
                    ACTIONS
                ================================================= */}

                <div className="portfolio-actions">

                  <a
                    href="/projects"
                    className="
                      portfolio-button
                      portfolio-button-primary
                    "
                  >
                    Explore my work

                    <FaArrowRight
                      aria-hidden="true"
                    />
                  </a>


                  <a
                    href={`mailto:${profile.email}`}
                    className="
                      portfolio-button
                      portfolio-button-secondary
                    "
                  >
                    Let's talk

                    <FaEnvelope
                      aria-hidden="true"
                    />
                  </a>

                </div>


                {/* =================================================
                    SOCIALS
                ================================================= */}

                <div className="portfolio-socials">

                  <a
                    href={profile.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-social"
                    aria-label="GitHub"
                    title="GitHub"
                  >
                    <FaGithub />
                  </a>


                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-social"
                    aria-label="LinkedIn"
                    title="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>


                  <a
                    href={`mailto:${profile.email}`}
                    className="
                      portfolio-social
                      portfolio-social-email
                    "
                    aria-label="Email"
                  >
                    <FaEnvelope />

                    Email
                  </a>


                  <a
                    href="https://wa.me/9779825995421"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="portfolio-social"
                    aria-label="WhatsApp"
                    title="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>

                </div>


                {/* =================================================
                    STATS
                ================================================= */}

                <div className="portfolio-stats">

                  {stats.map((stat) => (
                    <div
                      className="portfolio-stat"
                      key={stat.label}
                    >

                      <strong
                        className="
                          portfolio-stat-value
                        "
                      >
                        {stat.value}
                      </strong>

                      <span
                        className="
                          portfolio-stat-label
                        "
                      >
                        {stat.label}
                      </span>

                    </div>
                  ))}

                </div>

              </div>


              {/* =================================================
                  RIGHT PROFILE
              ================================================= */}

              <div className="portfolio-profile-area">

                <div
                  className="portfolio-profile-glow"
                  aria-hidden="true"
                />


                {/* Availability */}

                <div className="portfolio-availability">

                  <span
                    className="
                      portfolio-availability-dot
                    "
                  />

                  <span>
                    Open to work
                  </span>

                </div>


                {/* Profile card */}

                <div className="portfolio-profile-card">

                  <div className="portfolio-image-box">

                    <img
                      src={profileImg}
                      alt={`${profile.name} — ${profile.title}`}
                      className="portfolio-profile-image"
                      loading="eager"
                    />

                  </div>


                  {/* Profile information */}

                  <div className="portfolio-profile-info">

                    <div>

                      <h2 className="portfolio-profile-name">
                        {profile.name}
                      </h2>

                      <p className="portfolio-profile-role">
                        Full Stack Developer · Web & Mobile
                      </p>

                    </div>


                    <div
                      className="portfolio-code-icon"
                      aria-hidden="true"
                    >
                      <FaCode />
                    </div>

                  </div>

                </div>


                {/* Small code decoration */}

                <div
                  className="portfolio-code-card"
                  aria-hidden="true"
                >

                  <div
                    className="
                      portfolio-code-line
                    "
                  />

                  <div
                    className="
                      portfolio-code-line
                    "
                  />

                  <div
                    className="
                      portfolio-code-line
                    "
                  />

                  <div
                    className="
                      portfolio-code-line
                    "
                  />

                </div>

              </div>

            </div>

          </div>

        </section>

      </main>
    </>
  );
}

export default Portfolio;