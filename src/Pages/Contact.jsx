import React, { useState } from "react";
import {
  FaArrowRight,
  FaCheck,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const mailto = `mailto:anujkattel62@gmail.com?subject=${encodeURIComponent(
      formData.subject || "Portfolio Contact"
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;

    window.location.href = mailto;

    setSubmitted(true);
  };

  return (
    <>
      <style>{`

        /* =====================================================
           CONTACT PAGE
        ===================================================== */

        .contact-page {

          --contact-green: #08794f;
          --contact-green-dark: #056440;
          --contact-green-soft: #ecfdf5;

          --contact-black: #101828;
          --contact-text: #344054;
          --contact-muted: #667085;

          --contact-line: #e4e7ec;
          --contact-soft: #f8fafc;

          min-height: 100vh;

          background: #ffffff;

          color: var(--contact-black);

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

        .contact-container {

          width:
            min(
              1180px,
              calc(100% - 48px)
            );

          margin: 0 auto;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .contact-hero {

          position: relative;

          padding:
            115px 0 105px;

          border-bottom:
            1px solid var(--contact-line);

          background:

            radial-gradient(
              circle at 85% 15%,
              rgba(16,185,129,.09),
              transparent 25rem
            ),

            linear-gradient(
              180deg,
              #ffffff,
              #fbfdfc
            );
        }


        .contact-hero-grid {

          display: grid;

          grid-template-columns:
            1.2fr .8fr;

          gap:
            100px;

          align-items:
            end;
        }


        .contact-eyebrow {

          display: inline-flex;

          align-items:
            center;

          gap:
            9px;

          color:
            var(--contact-green);

          font-size:
            10px;

          font-weight:
            900;

          text-transform:
            uppercase;

          letter-spacing:
            .15em;
        }


        .contact-eyebrow::before {

          content: "";

          width: 8px;
          height: 8px;

          border-radius:
            50%;

          background:
            var(--contact-green);

          box-shadow:
            0 0 0 5px
            rgba(16,185,129,.10);
        }


        .contact-hero h1 {

          margin:
            22px 0 24px;

          font-size:
            clamp(
              52px,
              7vw,
              84px
            );

          line-height:
            .94;

          letter-spacing:
            -.075em;

          font-weight:
            850;
        }


        .contact-hero h1 span {

          color:
            var(--contact-green);
        }


        .contact-hero-description {

          max-width:
            650px;

          margin:
            0;

          color:
            var(--contact-muted);

          font-size:
            15px;

          line-height:
            1.85;
        }


        .contact-hero-side {

          padding-left:
            30px;

          border-left:
            1px solid #dce6e1;
        }


        .contact-hero-side-label {

          display:
            block;

          margin-bottom:
            11px;

          color:
            var(--contact-black);

          font-size:
            10px;

          font-weight:
            900;

          text-transform:
            uppercase;

          letter-spacing:
            .12em;
        }


        .contact-hero-side p {

          max-width:
            400px;

          margin:
            0;

          color:
            var(--contact-muted);

          font-size:
            12px;

          line-height:
            1.85;
        }


        /* =====================================================
           MAIN SECTION
        ===================================================== */

        .contact-section {

          padding:
            100px 0 120px;
        }


        .contact-layout {

          display:
            grid;

          grid-template-columns:
            .72fr 1.28fr;

          gap:
            100px;

          align-items:
            start;
        }


        /* =====================================================
           LEFT INTRO
        ===================================================== */

        .contact-intro {

          position:
            sticky;

          top:
            100px;
        }


        .contact-intro h2 {

          margin:
            15px 0 17px;

          font-size:
            clamp(
              36px,
              4vw,
              48px
            );

          line-height:
            .98;

          letter-spacing:
            -.065em;
        }


        .contact-intro > p {

          max-width:
            410px;

          margin:
            0 0 35px;

          color:
            var(--contact-muted);

          font-size:
            12px;

          line-height:
            1.85;
        }


        /* =====================================================
           CONTACT LINKS
        ===================================================== */

        .contact-links {

          display:
            grid;

          gap:
            2px;

          border-top:
            1px solid var(--contact-line);
        }


        .contact-link {

          display:
            flex;

          align-items:
            center;

          gap:
            14px;

          padding:
            17px 0;

          border-bottom:
            1px solid var(--contact-line);

          color:
            var(--contact-black);

          text-decoration:
            none;

          transition:
            .2s ease;
        }


        .contact-link:hover {

          padding-left:
            7px;

          color:
            var(--contact-green);
        }


        .contact-link-icon {

          width:
            36px;

          height:
            36px;

          display:
            grid;

          place-items:
            center;

          flex-shrink:
            0;

          border:
            1px solid var(--contact-line);

          border-radius:
            8px;

          background:
            #fff;

          color:
            var(--contact-green);

          font-size:
            12px;
        }


        .contact-link-content {

          min-width:
            0;

          flex:
            1;
        }


        .contact-link-label {

          display:
            block;

          margin-bottom:
            4px;

          color:
            #98a2b3;

          font-size:
            8px;

          font-weight:
            900;

          text-transform:
            uppercase;

          letter-spacing:
            .1em;
        }


        .contact-link-value {

          display:
            block;

          overflow:
            hidden;

          color:
            var(--contact-text);

          font-size:
            11px;

          font-weight:
            700;

          text-overflow:
            ellipsis;

          white-space:
            nowrap;
        }


        .contact-link-arrow {

          color:
            #98a2b3;

          font-size:
            9px;

          transition:
            .2s ease;
        }


        .contact-link:hover
        .contact-link-arrow {

          color:
            var(--contact-green);

          transform:
            translateX(3px);
        }


        /* =====================================================
           SOCIALS
        ===================================================== */

        .contact-social-row {

          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          margin-top:
            28px;
        }


        .contact-social-label {

          margin-right:
            5px;

          color:
            #98a2b3;

          font-size:
            8px;

          font-weight:
            900;

          text-transform:
            uppercase;

          letter-spacing:
            .1em;
        }


        .contact-social {

          width:
            34px;

          height:
            34px;

          display:
            grid;

          place-items:
            center;

          border:
            1px solid var(--contact-line);

          border-radius:
            7px;

          background:
            #fff;

          color:
            var(--contact-text);

          text-decoration:
            none;

          font-size:
            12px;

          transition:
            .2s ease;
        }


        .contact-social:hover {

          border-color:
            #b7dfcf;

          background:
            var(--contact-green-soft);

          color:
            var(--contact-green);

          transform:
            translateY(-2px);
        }


        /* =====================================================
           AVAILABILITY
        ===================================================== */

        .contact-availability {

          display:
            flex;

          align-items:
            flex-start;

          gap:
            10px;

          margin-top:
            30px;

          padding:
            15px;

          border:
            1px solid #dceee5;

          border-radius:
            9px;

          background:
            #f4fbf7;
        }


        .availability-dot {

          width:
            7px;

          height:
            7px;

          margin-top:
            4px;

          flex-shrink:
            0;

          border-radius:
            50%;

          background:
            #16a34a;

          box-shadow:
            0 0 0 4px
            rgba(22,163,74,.10);
        }


        .availability-content strong {

          display:
            block;

          margin-bottom:
            4px;

          color:
            var(--contact-green);

          font-size:
            10px;
        }


        .availability-content span {

          display:
            block;

          color:
            var(--contact-muted);

          font-size:
            9px;

          line-height:
            1.6;
        }


        /* =====================================================
           FORM AREA
        ===================================================== */

        .contact-form-area {

          position:
            relative;

        }


        .form-number {

          position:
            absolute;

          top:
            -45px;

          right:
            0;

          color:
            #e4e7ec;

          font-size:
            11px;

          font-weight:
            900;

          letter-spacing:
            .1em;
        }


        .contact-form-heading {

          margin-bottom:
            30px;
        }


        .contact-form-heading span {

          display:
            block;

          margin-bottom:
            9px;

          color:
            var(--contact-green);

          font-size:
            9px;

          font-weight:
            900;

          text-transform:
            uppercase;

          letter-spacing:
            .13em;
        }


        .contact-form-heading h2 {

          margin:
            0 0 9px;

          font-size:
            30px;

          line-height:
            1;

          letter-spacing:
            -.05em;
        }


        .contact-form-heading p {

          margin:
            0;

          color:
            var(--contact-muted);

          font-size:
            11px;

          line-height:
            1.7;
        }


        /* =====================================================
           FORM
        ===================================================== */

        .contact-form {

          border-top:
            1px solid var(--contact-line);
        }


        .form-row {

          display:
            grid;

          grid-template-columns:
            1fr 1fr;

          gap:
            30px;
        }


        .form-group {

          padding:
            21px 0;

          border-bottom:
            1px solid var(--contact-line);
        }


        .form-group label {

          display:
            block;

          margin-bottom:
            8px;

          color:
            #475467;

          font-size:
            9px;

          font-weight:
            900;

          text-transform:
            uppercase;

          letter-spacing:
            .08em;
        }


        .form-group input,
        .form-group textarea {

          display:
            block;

          width:
            100%;

          padding:
            0;

          border:
            0;

          outline:
            none;

          resize:
            none;

          background:
            transparent;

          color:
            var(--contact-black);

          font-family:
            inherit;

          font-size:
            13px;

          line-height:
            1.7;
        }


        .form-group input {

          height:
            25px;
        }


        .form-group textarea {

          min-height:
            125px;

          resize:
            vertical;
        }


        .form-group input::placeholder,
        .form-group textarea::placeholder {

          color:
            #b1b8c2;
        }


        .form-group:focus-within {

          border-color:
            var(--contact-green);
        }


        .form-group:focus-within label {

          color:
            var(--contact-green);
        }


        /* =====================================================
           FORM FOOTER
        ===================================================== */

        .form-footer {

          display:
            flex;

          align-items:
            center;

          justify-content:
            space-between;

          gap:
            25px;

          padding-top:
            25px;
        }


        .form-note {

          max-width:
            320px;

          color:
            #98a2b3;

          font-size:
            9px;

          line-height:
            1.6;
        }


        .form-submit {

          display:
            inline-flex;

          align-items:
            center;

          justify-content:
            center;

          gap:
            10px;

          min-width:
            145px;

          min-height:
            44px;

          padding:
            0 17px;

          border:
            0;

          border-radius:
            8px;

          background:
            var(--contact-green);

          color:
            #fff;

          font-family:
            inherit;

          font-size:
            10px;

          font-weight:
            900;

          cursor:
            pointer;

          transition:
            .2s ease;
        }


        .form-submit:hover {

          background:
            var(--contact-green-dark);

          transform:
            translateY(-2px);

          box-shadow:
            0 12px 25px
            rgba(8,121,79,.16);
        }


        .form-submit svg:last-child {

          font-size:
            9px;
        }


        /* =====================================================
           SUCCESS
        ===================================================== */

        .success-message {

          display:
            flex;

          align-items:
            center;

          gap:
            8px;

          margin-top:
            16px;

          padding:
            11px 13px;

          border:
            1px solid #cceedd;

          border-radius:
            7px;

          background:
            #f0fdf7;

          color:
            var(--contact-green);

          font-size:
            9px;

          font-weight:
            700;
        }


        /* =====================================================
           BOTTOM CTA
        ===================================================== */

        .contact-bottom {

          padding:
            0 0 100px;
        }


        .contact-cta {

          position:
            relative;

          overflow:
            hidden;

          padding:
            65px 50px;

          border:
            1px solid #d9ebe2;

          border-radius:
            18px;

          background:

            radial-gradient(
              circle at 88% 20%,
              rgba(16,185,129,.12),
              transparent 18rem
            ),

            linear-gradient(
              135deg,
              #f4fbf7,
              #ffffff
            );
        }


        .contact-cta::after {

          content:
            "";

          position:
            absolute;

          right:
            -100px;

          bottom:
            -120px;

          width:
            250px;

          height:
            250px;

          border:
            1px solid
            rgba(8,121,79,.08);

          border-radius:
            50%;
        }


        .contact-cta-content {

          position:
            relative;

          z-index:
            1;

          max-width:
            720px;
        }


        .contact-cta h2 {

          margin:
            11px 0 13px;

          font-size:
            clamp(
              34px,
              5vw,
              52px
            );

          line-height:
            .95;

          letter-spacing:
            -.065em;
        }


        .contact-cta p {

          max-width:
            590px;

          margin:
            0;

          color:
            var(--contact-muted);

          font-size:
            11px;

          line-height:
            1.8;
        }


        /* =====================================================
           RESPONSIVE
        ===================================================== */

        @media (max-width: 950px) {

          .contact-hero-grid {

            grid-template-columns:
              1fr;

            gap:
              40px;
          }


          .contact-hero-side {

            max-width:
              650px;

            padding:
              25px 0 0;

            border-left:
              0;

            border-top:
              1px solid #dce6e1;
          }


          .contact-layout {

            grid-template-columns:
              1fr;

            gap:
              70px;
          }


          .contact-intro {

            position:
              static;
          }

        }


        @media (max-width: 650px) {

          .contact-container {

            width:
              calc(100% - 28px);
          }


          .contact-hero {

            padding:
              75px 0 65px;
          }


          .contact-section {

            padding:
              70px 0 80px;
          }


          .contact-hero h1 {

            font-size:
              50px;
          }


          .contact-hero-description {

            font-size:
              13px;
          }


          .contact-intro h2 {

            font-size:
              40px;
          }


          .form-row {

            grid-template-columns:
              1fr;

            gap:
              0;
          }


          .form-footer {

            align-items:
              stretch;

            flex-direction:
              column;
          }


          .form-submit {

            width:
              100%;
          }


          .contact-cta {

            padding:
              40px 28px;
          }


          .contact-cta h2 {

            font-size:
              35px;
          }

        }


        @media (prefers-reduced-motion: reduce) {

          .contact-page *,
          .contact-page *::before,
          .contact-page *::after {

            transition:
              none !important;

            animation:
              none !important;
          }

        }

      `}</style>


      <main className="contact-page">


        {/* =====================================================
            HERO
        ===================================================== */}

        <header className="contact-hero">

          <div className="contact-container">

            <div className="contact-hero-grid">

              <div>

                <span className="contact-eyebrow">
                  Contact Me
                </span>


                <h1>

                  Let's build
                  <br />

                  <span>
                    something great.
                  </span>

                </h1>


                <p className="contact-hero-description">

                  Have a project, idea, or opportunity
                  in mind? I'd love to hear about it.
                  Tell me what you're working on and
                  let's start a conversation.

                </p>

              </div>


              <aside className="contact-hero-side">

                <span className="contact-hero-side-label">
                  Open to conversations
                </span>

                <p>

                  I'm available for freelance projects,
                  full-time opportunities, technical
                  collaborations and interesting product ideas.

                </p>

              </aside>

            </div>

          </div>

        </header>


        {/* =====================================================
            CONTACT CONTENT
        ===================================================== */}

        <section
          className="contact-section"
          aria-labelledby="contact-form-title"
        >

          <div className="contact-container">

            <div className="contact-layout">


              {/* =================================================
                  CONTACT INFORMATION
              ================================================= */}

              <aside className="contact-intro">

                <span className="contact-eyebrow">
                  Get In Touch
                </span>


                <h2>

                  Start a
                  <br />

                  conversation.

                </h2>


                <p>

                  Whether you need help building a
                  product, have a technical question,
                  or simply want to connect, feel free
                  to reach out.

                </p>


                {/* CONTACT LINKS */}

                <div className="contact-links">


                  <a
                    className="contact-link"
                    href="mailto:anujkattel62@gmail.com"
                  >

                    <span className="contact-link-icon">
                      <FaEnvelope />
                    </span>


                    <span className="contact-link-content">

                      <span className="contact-link-label">
                        Email
                      </span>

                      <span className="contact-link-value">
                        anujkattel62@gmail.com
                      </span>

                    </span>


                    <FaArrowRight
                      className="contact-link-arrow"
                    />

                  </a>


                  <a
                    className="contact-link"
                    href="tel:+9779825995421"
                  >

                    <span className="contact-link-icon">
                      <FaPhone />
                    </span>


                    <span className="contact-link-content">

                      <span className="contact-link-label">
                        Phone
                      </span>

                      <span className="contact-link-value">
                        +977 9825995421
                      </span>

                    </span>


                    <FaArrowRight
                      className="contact-link-arrow"
                    />

                  </a>


                  <div className="contact-link">

                    <span className="contact-link-icon">
                      <FaMapMarkerAlt />
                    </span>


                    <span className="contact-link-content">

                      <span className="contact-link-label">
                        Location
                      </span>

                      <span className="contact-link-value">
                        Jhapa, Nepal
                      </span>

                    </span>

                  </div>


                </div>


                {/* SOCIALS */}

                <div className="contact-social-row">

                  <span className="contact-social-label">
                    Follow
                  </span>


                  <a
                    className="contact-social"
                    href="https://github.com/anujsmit"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>


                  <a
                    className="contact-social"
                    href="https://linkedin.com/in/anujkattel"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedin />
                  </a>


                  <a
                    className="contact-social"
                    href="https://wa.me/9779825995421"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <FaWhatsapp />
                  </a>

                </div>


                {/* AVAILABILITY */}

                <div className="contact-availability">

                  <span className="availability-dot" />

                  <div className="availability-content">

                    <strong>
                      Currently available
                    </strong>

                    <span>
                      Open to freelance projects,
                      full-time roles, collaborations
                      and new opportunities.
                    </span>

                  </div>

                </div>

              </aside>


              {/* =================================================
                  FORM
              ================================================= */}

              <div className="contact-form-area">

                <span className="form-number">
                  01 / CONTACT
                </span>


                <div className="contact-form-heading">

                  <span>
                    Send an enquiry
                  </span>

                  <h2 id="contact-form-title">
                    Tell me about your project.
                  </h2>

                  <p>
                    Fill out the form and your email
                    client will open with the message
                    prepared for me.
                  </p>

                </div>


                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >


                  <div className="form-row">


                    <div className="form-group">

                      <label htmlFor="name">
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                        autoComplete="name"
                        required
                      />

                    </div>


                    <div className="form-group">

                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        required
                      />

                    </div>


                  </div>


                  <div className="form-group">

                    <label htmlFor="subject">
                      Subject
                    </label>

                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="Project inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-group">

                    <label htmlFor="message">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me a little about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="form-footer">

                    <p className="form-note">
                      Your message will be prepared
                      in your default email application.
                    </p>


                    <button
                      type="submit"
                      className="form-submit"
                    >

                      Send Message

                      <FaArrowRight />

                    </button>

                  </div>


                  {submitted && (

                    <div className="success-message">

                      <FaCheck />

                      Your email client should
                      open shortly.

                    </div>

                  )}

                </form>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="contact-bottom">

          <div className="contact-container">

            <div className="contact-cta">

              <div className="contact-cta-content">

                <span className="contact-eyebrow">
                  Have an idea?
                </span>


                <h2>
                  Let's turn your idea
                  <br />
                  into reality.
                </h2>


                <p>

                  Great products start with a conversation.
                  Don't hesitate to reach out — even if your
                  idea is still just a rough concept.

                </p>

              </div>

            </div>

          </div>

        </section>


      </main>
    </>
  );
}

export default Contact;