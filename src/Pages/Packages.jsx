import React, { useState } from "react";
import {
  FaArrowUpRightFromSquare,
  FaGithub,
  FaCopy,
  FaCheck,
} from "react-icons/fa6";

const packages = [
  {
    id: 1,
    name: "ip-based-location",
    description:
      "A simple Node.js package for detecting a user's public IP address and retrieving IP-based location information such as country, region, city, postal code, latitude, longitude, timezone, and ISP.",
    tags: ["npm", "Node.js", "JavaScript", "MIT"],
    install: "npm install ip-based-location",
    version: "1.0.2",
    npmLink: "https://www.npmjs.com/package/ip-based-location",
    githubLink: "https://github.com/anujsmit/ipbasedlocation",
  },

  // Add more packages here
  // {
  //   id: 2,
  //   name: "your-package",
  //   description: "Your package description.",
  //   tags: ["npm", "Node.js", "JavaScript", "MIT"],
  //   install: "npm install your-package",
  //   version: "1.0.0",
  //   npmLink: "https://www.npmjs.com/package/your-package",
  //   githubLink: "https://github.com/anujsmit/your-package",
  // },
];

function Packages() {
  const [copiedId, setCopiedId] = useState(null);

  const copyInstallCommand = async (command, id) => {
    try {
      await navigator.clipboard.writeText(command);
      setCopiedId(id);

      setTimeout(() => {
        setCopiedId(null);
      }, 2000);
    } catch (error) {
      console.error("Failed to copy installation command:", error);
    }
  };

  return (
    <main className="packages-page">
      <div className="packages-container">
        <header className="packages-header">
          <span className="packages-eyebrow">Open Source</span>

          <h1>
            Things I've <span>Published.</span>
          </h1>

          <p>
            Developer tools and npm packages I've built to solve practical
            problems and make development easier.
          </p>
        </header>

        <section className="packages-grid" aria-label="Published packages">
          {packages.map((pkg) => (
            <article className="package-card" key={pkg.id}>
              <div className="package-top">
                <div className="package-name-wrapper">
                  <div className="package-icon" aria-hidden="true">
                    📦
                  </div>

                  <h2 className="package-name">{pkg.name}</h2>
                </div>
              </div>

              <p className="package-description">{pkg.description}</p>

              <div className="package-meta">
                {pkg.tags.map((tag) => (
                  <span className="package-tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>

              <div className="package-install-wrapper">
                <div className="package-terminal">
                  <span className="package-terminal-symbol">$</span>

                  <code className="package-install">
                    {pkg.install}
                  </code>
                </div>

                <button
                  type="button"
                  className="package-copy-button"
                  onClick={() =>
                    copyInstallCommand(pkg.install, pkg.id)
                  }
                  aria-label={
                    copiedId === pkg.id
                      ? "Installation command copied"
                      : "Copy installation command"
                  }
                >
                  {copiedId === pkg.id ? (
                    <>
                      <FaCheck />
                      <span>Copied</span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="package-footer">
                <span className="package-version">
                  VERSION {pkg.version}
                </span>

                <div className="package-actions">
                  <a
                    href={pkg.npmLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="package-link primary"
                  >
                    View on npm
                    <FaArrowUpRightFromSquare />
                  </a>

                  <a
                    href={pkg.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="package-link secondary"
                  >
                    GitHub
                    <FaGithub />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Packages;