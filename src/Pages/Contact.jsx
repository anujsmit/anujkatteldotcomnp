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