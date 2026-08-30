
import React from "react";
import { FaArrowUpRightFromSquare, FaBookOpen } from "react-icons/fa6";
import servexImage from "../assets/servex.png";
import instagram from "../assets/instagram.png";

const projects = [
  {
    id: 1,
    name: "ServeX",
    category: "Service Marketplace",
    image: servexImage,
    link: "https://play.google.com/store/apps/details?id=com.laayo.servexapp&hl=en_IN",
    bloglink:
      "https://play.google.com/store/apps/details?id=com.laayo.servexapp&hl=en_IN",
  },
  {
    id: 2,
    name: "Instagram Video Downloader",
    category: "Web Application",
    image: instagram,
    link: "https://instagram.anujkattel.com.np",
    bloglink:
      "https://instagram.anujkattel.com.np",
  },
];

function Projects() {
  return (
    <>
      <style>{`
        .projects-page {
          --green: #08794f;
          --green-dark: #056440;
          --black: #101828;
          --muted: #667085;
          --line: #e4e7ec;
          --light: #f8faf9;
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

        .projects-container {
          width: min(1100px, calc(100% - 40px));
          margin: 0 auto;
        }

        /* =========================
           HEADER
        ========================= */

        .projects-header {
          padding: 85px 0 45px;
        }

        .projects-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          margin-bottom: 12px;

          color: var(--green);

          font-size: 10px;
          font-weight: 800;

          text-transform: uppercase;
          letter-spacing: 0.14em;
        }

        .projects-eyebrow::before {
          content: "";
          width: 24px;
          height: 1px;
          background: var(--green);
        }

        .projects-header h1 {
          margin: 0;

          font-size: clamp(42px, 6vw, 68px);
          line-height: 0.95;

          letter-spacing: -0.065em;
          font-weight: 850;
        }

        .projects-header h1 span {
          color: var(--green);
        }

        .projects-header p {
          max-width: 540px;

          margin: 18px 0 0;

          color: var(--muted);

          font-size: 13px;
          line-height: 1.7;
        }

        /* =========================
           GRID
        ========================= */

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          // padding-bottom: 100px;
        }

        /* =========================
           CARD
        ========================= */

        .project-card {
          overflow: hidden;

          border: 1px solid var(--line);
          border-radius: 18px;

          background: #fff;

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease,
            border-color 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-6px);

          border-color: #c5ddd3;

          box-shadow:
            0 20px 50px rgba(16, 24, 40, 0.09);
        }

        /* =========================
           IMAGE
        ========================= */

        .project-image-wrapper {
          position: relative;

          width: 100%;
          aspect-ratio: 16 / 10;

          overflow: hidden;

          background: var(--light);
        }

        .project-image {
          width: 100%;
          height: 100%;

          display: block;

          object-fit: cover;

          transition:
            transform 0.55s cubic-bezier(0.2, 0.8, 0.2, 1);
        }

        .project-card:hover .project-image {
          transform: scale(1.045);
        }

        .project-number {
          position: absolute;

          top: 12px;
          left: 12px;

          padding: 6px 10px;

          border: 1px solid rgba(255, 255, 255, 0.5);
          border-radius: 30px;

          background: rgba(255, 255, 255, 0.9);

          backdrop-filter: blur(10px);

          color: var(--black);

          font-size: 8px;
          font-weight: 900;

          letter-spacing: 0.05em;
        }

        /* =========================
           CONTENT
        ========================= */

        .project-content {
          padding: 18px;
        }

        .project-category {
          display: block;

          margin-bottom: 7px;

          color: var(--green);

          font-size: 8px;
          font-weight: 900;

          text-transform: uppercase;
          letter-spacing: 0.1em;
        }

        .project-content h2 {
          margin: 0;

          font-size: 18px;
          line-height: 1.2;

          letter-spacing: -0.035em;
          font-weight: 800;
        }

        /* =========================
           FOOTER
        ========================= */

        .project-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 10px;

          margin-top: 17px;
          padding-top: 14px;

          border-top: 1px solid var(--line);
        }

        .project-index {
          color: #98a2b3;

          font-size: 8px;
          font-weight: 800;

          white-space: nowrap;
        }

        .project-actions {
          display: flex;
          align-items: center;
          gap: 7px;
        }

        .project-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 6px;

          padding: 8px 11px;

          border-radius: 8px;

          text-decoration: none;

          font-size: 8px;
          font-weight: 800;

          transition:
            background 0.2s ease,
            color 0.2s ease,
            transform 0.2s ease;
        }

        .project-link:hover {
          transform: translateY(-1px);
        }

        /* VIEW PROJECT */

        .project-link.primary {
          background: var(--green);
          color: #fff;
        }

        .project-link.primary:hover {
          background: var(--green-dark);
        }

        /* BLOG */

        .project-link.secondary {
          border: 1px solid var(--line);
          background: #fff;
          color: var(--black);
        }

        .project-link.secondary:hover {
          border-color: #b7d3c8;
          background: #f5faf7;
          color: var(--green);
        }

        .project-link svg {
          font-size: 7px;
        }

        /* =========================
           RESPONSIVE
        ========================= */

        @media (max-width: 850px) {
          .projects-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 560px) {
          .projects-container {
            width: calc(100% - 28px);
          }

          .projects-header {
            padding: 65px 0 35px;
          }

          .projects-header h1 {
            font-size: 43px;
          }

          .projects-header p {
            font-size: 12px;
          }

          .projects-grid {
            grid-template-columns: 1fr;
            gap: 16px;
            padding-bottom: 70px;
          }

          .project-content {
            padding: 16px;
          }

          .project-content h2 {
            font-size: 19px;
          }

          .project-footer {
            align-items: flex-end;
          }

          .project-actions {
            flex-wrap: wrap;
            justify-content: flex-end;
          }
        }
      `}</style>

      <main className="projects-page">
        <div className="projects-container">

          {/* HEADER */}

          <header className="projects-header">
            <span className="projects-eyebrow">
              Selected Work
            </span>

            <h1>
              Things I've <span>Built.</span>
            </h1>

            <p>
              A collection of projects I've designed and developed,
              focused on solving real-world problems through clean,
              practical and user-friendly digital experiences.
            </p>
          </header>

          {/* PROJECTS */}

          <section
            className="projects-grid"
            aria-label="Projects"
          >
            {projects.map((project) => (
              <article
                className="project-card"
                key={project.id}
              >
                {/* IMAGE */}

                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="project-image"
                  />

                  <span className="project-number">
                    0{project.id}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="project-content">
                  <span className="project-category">
                    {project.category}
                  </span>

                  <h2>{project.name}</h2>

                  {/* FOOTER */}

                  <div className="project-footer">
                    <span className="project-index">
                      PROJECT 0{project.id}
                    </span>

                    <div className="project-actions">

                      {/* READ BLOG */}

                      {project.bloglink && (
                        <a
                          href={project.bloglink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link secondary"
                        >
                          Read Blog
                          <FaBookOpen />
                        </a>
                      )}

                      {/* VIEW PROJECT */}

                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link primary"
                        >
                          View Project
                          <FaArrowUpRightFromSquare />
                        </a>
                      )}

                    </div>
                  </div>
                </div>
              </article>
            ))}
          </section>
        </div>
      </main>
    </>
  );
}

export default Projects;
