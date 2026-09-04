import React from "react";
import { FaArrowUpRightFromSquare, FaGithub } from "react-icons/fa6";

function Packages() {
  return (
    <>
      <main className="packages-page">
        <div className="packages-container">

          <header className="packages-header">
            <span className="packages-eyebrow">
              Open Source
            </span>

            <h1>
              Things I've <span>Published.</span>
            </h1>

            <p>
              Developer tools and npm packages I've built to solve
              practical problems and make development easier.
            </p>
          </header>

          <section className="package-card">

            <div className="package-top">

              <div className="package-name-wrapper">
                <div className="package-icon">
                  📦
                </div>

                <div>
                  <h2 className="package-name">
                    ip-based-location
                  </h2>
                </div>
              </div>

            </div>

            <p className="package-description">
              A simple Node.js package for detecting a user's public IP
              address and retrieving IP-based location information such
              as country, region, city, postal code, latitude, longitude,
              timezone, and ISP.
            </p>

            <div className="package-meta">
              <span className="package-tag">
                npm
              </span>

              <span className="package-tag">
                Node.js
              </span>

              <span className="package-tag">
                JavaScript
              </span>

              <span className="package-tag">
                MIT
              </span>
            </div>

            <code className="package-install">
              npm install ip-based-location
            </code>

            <div className="package-footer">

              <span className="package-version">
                VERSION 1.0.2
              </span>

              <div className="package-actions">

                <a
                  href="https://www.npmjs.com/package/ip-based-location"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-link primary"
                >
                  View on npm
                  <FaArrowUpRightFromSquare />
                </a>

                <a
                  href="https://github.com/anujsmit/ipbasedlocation"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="package-link secondary"
                >
                  GitHub
                  <FaGithub />
                </a>

              </div>

            </div>

          </section>

        </div>
      </main>
    </>
  );
}

export default Packages;