import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

import { FaArrowUpRightFromSquare } from "react-icons/fa6";
function Contact() {
  return (
    <>
      <style>{`
        .contact-page {
          --green: #08794f;
          --green-dark: #056440;
          --black: #101828;
          --text: #344054;
          --muted: #667085;
          --line: #e4e7ec;
          --soft: #f8faf9;

          min-height: 100vh;
          background: #fff;
          color: var(--black);

          font-family:
            "Inter",
            system-ui,
            -apple-system,
            BlinkMacSystemFont,
            "Segoe UI",
            sans-serif;
        }

        .contact-container {
          width: min(950px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =========================
           HERO
        ========================= */

        .contact-hero {
          padding: 90px 0 65px;
          border-bottom: 1px solid var(--line);
        }

        .contact-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 14px;

          color: var(--green);

          font-size: 9px;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .contact-eyebrow::before {
          content: "";

          width: 22px;
          height: 1px;

          background: var(--green);
        }

        .contact-hero h1 {
          max-width: 700px;

          margin: 0;

          font-size: clamp(45px, 7vw, 70px);
          line-height: 0.96;

          letter-spacing: -0.07em;
          font-weight: 850;
        }

        .contact-hero h1 span {
          color: var(--green);
        }

        .contact-hero p {
          max-width: 520px;

          margin: 18px 0 0;

          color: var(--muted);

          font-size: 13px;
          line-height: 1.8;
        }

        /* =========================
           CONTACT CONTENT
        ========================= */

        .contact-section {
          padding: 70px 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        /* =========================
           CONTACT CARD
        ========================= */

        .contact-card {
          padding: 24px;

          border: 1px solid var(--line);
          border-radius: 14px;

          background: #fff;

          transition:
            transform 0.25s ease,
            border-color 0.25s ease,
            box-shadow 0.25s ease;
        }

        .contact-card:hover {
          transform: translateY(-4px);

          border-color: #c6ded4;

          box-shadow:
            0 15px 35px rgba(16, 24, 40, 0.07);
        }

        .contact-card-icon {
          width: 38px;
          height: 38px;

          display: grid;
          place-items: center;

          margin-bottom: 18px;

          border-radius: 9px;

          background: var(--soft);
          color: var(--green);

          font-size: 13px;
        }

        .contact-card-label {
          display: block;

          margin-bottom: 6px;

          color: #98a2b3;

          font-size: 8px;
          font-weight: 900;

          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .contact-card h2 {
          margin: 0 0 8px;

          font-size: 18px;
          line-height: 1.2;

          letter-spacing: -0.03em;
        }

        .contact-card p {
          margin: 0;

          color: var(--muted);

          font-size: 10px;
          line-height: 1.7;
        }

        .contact-card-link {
          display: inline-flex;
          align-items: center;
          gap: 7px;

          margin-top: 16px;

          color: var(--green);

          text-decoration: none;

          font-size: 10px;
          font-weight: 800;
        }

        .contact-card-link:hover {
          color: var(--green-dark);
        }

        .contact-card-link svg {
          font-size: 8px;
        }

        /* =========================
           DIRECT CONTACT
        ========================= */

        .contact-list {
          margin-top: 18px;

          border-top: 1px solid var(--line);
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 13px;

          padding: 14px 0;

          border-bottom: 1px solid var(--line);

          text-decoration: none;

          color: var(--black);

          transition: 0.2s ease;
        }

        .contact-item:hover {
          padding-left: 5px;
          color: var(--green);
        }

        .contact-item-icon {
          width: 32px;
          height: 32px;

          display: grid;
          place-items: center;

          flex-shrink: 0;

          border: 1px solid var(--line);
          border-radius: 7px;

          color: var(--green);

          font-size: 11px;
        }

        .contact-item-content {
          flex: 1;
          min-width: 0;
        }

        .contact-item-label {
          display: block;

          margin-bottom: 3px;

          color: #98a2b3;

          font-size: 7px;
          font-weight: 900;

          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .contact-item-value {
          display: block;

          overflow: hidden;

          color: var(--text);

          font-size: 10px;
          font-weight: 700;

          text-overflow: ellipsis;
          white-space: nowrap;
        }

        .contact-item-arrow {
          color: #98a2b3;
          font-size: 8px;
        }

        /* =========================
           SOCIALS
        ========================= */

        .social-section {
          margin-top: 45px;
        }

        .social-heading {
          margin-bottom: 14px;

          color: #98a2b3;

          font-size: 8px;
          font-weight: 900;

          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .socials {
          display: flex;
          gap: 8px;
        }

        .social {
          width: 38px;
          height: 38px;

          display: grid;
          place-items: center;

          border: 1px solid var(--line);
          border-radius: 8px;

          background: #fff;

          color: var(--text);

          text-decoration: none;

          font-size: 13px;

          transition: 0.2s ease;
        }

        .social:hover {
          transform: translateY(-2px);

          border-color: #b9d8cc;

          background: var(--soft);

          color: var(--green);
        }

        /* =========================
           AVAILABILITY
        ========================= */

        .availability {
          display: flex;
          align-items: flex-start;
          gap: 10px;

          margin-top: 25px;
          padding: 15px;

          border: 1px solid #d7ebe1;
          border-radius: 9px;

          background: #f5fbf8;
        }

        .availability-dot {
          width: 7px;
          height: 7px;

          margin-top: 4px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #16a34a;
        }

        .availability strong {
          display: block;

          margin-bottom: 3px;

          color: var(--green);

          font-size: 9px;
        }

        .availability span {
          display: block;

          color: var(--muted);

          font-size: 8px;
          line-height: 1.6;
        }

        /* =========================
           CTA
        ========================= */

        .contact-cta {
          padding: 35px;

          border: 1px solid #cfe4da;
          border-radius: 14px;

          background: var(--soft);

          text-align: center;
        }

        .contact-cta h2 {
          margin: 8px 0 10px;

          font-size: clamp(30px, 5vw, 43px);
          line-height: 1;

          letter-spacing: -0.055em;
        }

        .contact-cta p {
          max-width: 480px;

          margin: 0 auto;

          color: var(--muted);

          font-size: 11px;
          line-height: 1.7;
        }

        .contact-cta a {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-top: 20px;
          padding: 10px 14px;

          border-radius: 8px;

          background: var(--green);
          color: #fff;

          text-decoration: none;

          font-size: 9px;
          font-weight: 800;

          transition: 0.2s ease;
        }

        .contact-cta a:hover {
          background: var(--green-dark);
          transform: translateY(-2px);
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 650px) {
          .contact-container {
            width: calc(100% - 28px);
          }

          .contact-hero {
            padding: 65px 0 50px;
          }

          .contact-hero h1 {
            font-size: 46px;
          }

          .contact-section {
            padding: 55px 0;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-card {
            padding: 20px;
          }

          .contact-cta {
            padding: 28px 20px;
          }
        }
      `}</style>

      <main className="contact-page">

        {/* HERO */}

        <header className="contact-hero">
          <div className="contact-container">

            <span className="contact-eyebrow">
              Contact
            </span>

            <h1>
              Let's work
              <br />
              <span>together.</span>
            </h1>

            <p>
              Have a project, idea, or opportunity?
              Feel free to reach out. I'm always open
              to interesting conversations and new
              projects.
            </p>

          </div>
        </header>

        {/* CONTACT */}

        <section className="contact-section">
          <div className="contact-container">

            <div className="contact-grid">

              {/* EMAIL */}

              <article className="contact-card">

                <div className="contact-card-icon">
                  <FaEnvelope />
                </div>

                <span className="contact-card-label">
                  Email
                </span>

                <h2>
                  Let's talk
                </h2>

                <p>
                  The best way to reach me for projects,
                  opportunities and collaborations.
                </p>

                <a
                  href="mailto:anujkattel62@gmail.com"
                  className="contact-card-link"
                >
                  anujkattel62@gmail.com
                  <FaArrowUpRightFromSquare />
                </a>

              </article>


              {/* LOCATION */}

              <article className="contact-card">

                <div className="contact-card-icon">
                  <FaMapMarkerAlt />
                </div>

                <span className="contact-card-label">
                  Location
                </span>

                <h2>
                  Nepal
                </h2>

                <p>
                  Based in Jhapa, Nepal and available
                  for remote opportunities.
                </p>

              </article>

            </div>


            {/* DIRECT CONTACT */}

            <div className="contact-list">

              <a
                href="tel:+9779825995421"
                className="contact-item"
              >

                <span className="contact-item-icon">
                  <FaPhone />
                </span>

                <span className="contact-item-content">

                  <span className="contact-item-label">
                    Phone
                  </span>

                  <span className="contact-item-value">
                    +977 9825995421
                  </span>

                </span>

                <FaArrowUpRightFromSquare
                  className="contact-item-arrow"
                />

              </a>


              <a
                href="https://wa.me/9779825995421"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >

                <span className="contact-item-icon">
                  <FaWhatsapp />
                </span>

                <span className="contact-item-content">

                  <span className="contact-item-label">
                    WhatsApp
                  </span>

                  <span className="contact-item-value">
                    Message me on WhatsApp
                  </span>

                </span>

                <FaArrowUpRightFromSquare
                  className="contact-item-arrow"
                />

              </a>

            </div>


            {/* SOCIALS */}

            <div className="social-section">

              <div className="social-heading">
                Find me online
              </div>

              <div className="socials">

                <a
                  href="https://github.com/anujsmit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://linkedin.com/in/anujkattel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="https://wa.me/9779825995421"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social"
                  aria-label="WhatsApp"
                >
                  <FaWhatsapp />
                </a>

              </div>


              <div className="availability">

                <span className="availability-dot" />

                <div>
                  <strong>
                    Currently available
                  </strong>

                  <span>
                    Open to freelance projects,
                    collaborations and new opportunities.
                  </span>
                </div>

              </div>

            </div>


            {/* CTA */}

            <div style={{ marginTop: "70px" }}>

              <div className="contact-cta">

                <span className="contact-eyebrow">
                  Have an idea?
                </span>

                <h2>
                  Let's build something.
                </h2>

                <p>
                  Send me an email and tell me what
                  you're working on. I'll get back to you.
                </p>

                <a href="mailto:anujkattel62@gmail.com">
                  Send Email
                  <FaArrowUpRightFromSquare />
                </a>

              </div>

            </div>

          </div>
        </section>

      </main>
    </>
  );
}

export default Contact;