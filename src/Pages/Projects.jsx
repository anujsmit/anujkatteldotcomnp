
import React from "react";
import { FaArrowUpRightFromSquare, FaBookOpen } from "react-icons/fa6";
import servexImage from "../assets/servex.png";
import instagram from "../assets/instagram.png";
import location from "../assets/locationfetch.png";

const projects = [
  {
    id: 1,
    name: "ServeX",
    category: "Service Marketplace",
    image: servexImage,
    link: "https://play.google.com/store/apps/details?id=com.laayo.servexapp&hl=en_IN",
  },
  {
    id: 2,
    name: "Instagram Video Downloader",
    category: "Web Application",
    image: instagram,
    link: "https://instagram.anujkattel.com.np",
  },
  {
    id: 3,
    name: "Location fetch",
    category: "Web Application",
    image: location,
    link: "/projects/location",
  },
];

function Projects() {
  return (
    <>


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
