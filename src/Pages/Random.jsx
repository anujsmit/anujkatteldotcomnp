import React, { useEffect, useState } from "react";

const API_URL =
    "https://linkgeneratorbackend.anujkattel.com.np/api/link";

function Random() {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        let mounted = true;

        const getLink = async () => {
            try {
                const response = await fetch(API_URL, {
                    method: "GET",
                    cache: "no-store",
                    headers: {
                        Accept: "application/json",
                    },
                });

                if (!response.ok) {
                    throw new Error(
                        `Backend returned ${response.status}`
                    );
                }

                const data = await response.json();

                console.log("Smart link response:", data);

                if (data?.success === true && data?.link) {
                    window.location.replace(data.link);
                    return;
                }

                throw new Error("Invalid backend response");
            } catch (err) {
                console.error("Failed to get smart link:", err);

                if (mounted) {
                    setError(true);
                    setLoading(false);
                }
            }
        };

        getLink();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div style={styles.page}>
            <style>{`
                * {
                    box-sizing: border-box;
                }

                html {
                    scroll-behavior: smooth;
                }

                body {
                    margin: 0;
                    font-family: Inter, -apple-system, BlinkMacSystemFont,
                        "Segoe UI", Arial, sans-serif;
                    background: #f6f7fb;
                }

                a {
                    text-decoration: none;
                    color: inherit;
                }

                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }

                    to {
                        transform: rotate(360deg);
                    }
                }

                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }

                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .web-flow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 10px;
                    flex-wrap: wrap;
                    padding: 28px 15px;
                    margin: 30px 0;
                    background: #f8fafc;
                    border: 1px solid #e5e7eb;
                    border-radius: 15px;
                }

                .web-flow-item {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    padding: 11px 14px;
                    background: #fff;
                    border: 1px solid #e5e7eb;
                    border-radius: 10px;
                    font-size: 13px;
                    font-weight: 600;
                }

                .web-flow-arrow {
                    color: #6366f1;
                    font-size: 22px;
                    font-weight: 700;
                }

                .web-hero-inner {
                    max-width: 1000px;
                    margin: 0 auto;
                    padding: 105px 22px 95px;
                    animation: fadeIn 0.8s ease-out;
                }

                .web-hero-title {
                    margin: 25px 0 20px;
                    font-size: clamp(48px, 8vw, 82px);
                    line-height: 1;
                    letter-spacing: -5px;
                    max-width: 850px;
                }

                .web-article-section {
                    max-width: 1050px;
                    margin: 0 auto;
                    padding: 65px 20px;
                }

                .web-article {
                    background: #fff;
                    border: 1px solid #e5e7eb;
                    border-radius: 22px;
                    padding: 55px;
                    box-shadow: 0 15px 50px rgba(15, 23, 42, 0.06);
                    animation: fadeIn 0.6s ease-out;
                }

                .web-article h2 {
                    margin: 40px 0 16px;
                    font-size: 28px;
                    letter-spacing: -0.5px;
                }

                .web-article p {
                    margin: 0 0 16px;
                    line-height: 1.8;
                    color: #374151;
                    font-size: 16px;
                }

                .web-parts-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 18px;
                    margin: 30px 0;
                }

                .web-two-cards {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin: 30px 0;
                }

                .web-api-row {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 15px;
                    flex-wrap: wrap;
                }

                .web-render-flow {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    gap: 14px;
                    flex-wrap: wrap;
                    padding: 30px;
                    margin: 30px 0;
                    background: #f8fafc;
                    border-radius: 15px;
                }

                .web-render-plus {
                    color: #6366f1;
                    font-size: 22px;
                    font-weight: 700;
                }

                .web-timeline {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 12px;
                    margin: 30px 0;
                }

                .web-about {
                    max-width: 1050px;
                    margin: 0 auto 70px;
                    padding: 50px;
                    background: #111827;
                    color: #fff;
                    border-radius: 20px;
                }

                .web-about h2 {
                    font-size: 32px;
                    margin: 16px 0;
                }

                .web-about p {
                    font-size: 18px;
                    line-height: 1.8;
                    color: #d1d5db;
                    max-width: 700px;
                }

                .web-footer-inner {
                    max-width: 1050px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    gap: 30px;
                }

                @media (max-width: 800px) {
                    .web-hero-inner {
                        padding: 75px 20px;
                    }

                    .web-hero-title {
                        font-size: 48px;
                        letter-spacing: -2px;
                    }

                    .web-article-section {
                        padding: 30px 14px;
                    }

                    .web-article {
                        padding: 28px 20px;
                        border-radius: 15px;
                    }

                    .web-article h2 {
                        font-size: 22px;
                    }

                    .web-parts-grid,
                    .web-two-cards {
                        grid-template-columns: 1fr;
                    }

                    .web-flow {
                        flex-direction: column;
                    }

                    .web-flow-arrow {
                        transform: rotate(90deg);
                    }

                    .web-api-row {
                        flex-direction: column;
                    }

                    .web-render-flow {
                        flex-direction: column;
                    }

                    .web-render-plus {
                        transform: rotate(90deg);
                    }

                    .web-timeline {
                        grid-template-columns: 1fr;
                    }

                    .web-about {
                        margin: 20px 14px 50px;
                        padding: 30px 22px;
                    }

                    .web-about h2 {
                        font-size: 24px;
                    }

                    .web-footer-inner {
                        flex-direction: column;
                        text-align: center;
                    }
                }
            `}</style>

            <main>
                <section style={styles.hero}>
                    <div className="web-hero-inner">
                        <div style={styles.badge}>
                            TECHNOLOGY • WEB DEVELOPMENT • GUIDES
                        </div>

                        <h1 className="web-hero-title">
                            How Websites Work
                        </h1>

                        <p style={styles.heroDescription}>
                            Ever wondered what happens behind the scenes
                            when you type a website address and press Enter?
                            Let's understand how the modern web works.
                        </p>

                        <div style={styles.meta}>
                            <span>📖 Beginner Guide</span>
                            <span>•</span>
                            <span>8 min read</span>
                        </div>
                    </div>
                </section>

                <section className="web-article-section">
                    <article className="web-article">
                        <p style={styles.introduction}>
                            Every time you visit a website, your browser and
                            several other systems work together to deliver
                            the page you see. From DNS and web servers to
                            HTML, CSS, JavaScript and databases, a modern
                            website is the result of many technologies
                            working together.
                        </p>

                        <h2>
                            What happens when you visit a website?
                        </h2>

                        <p>
                            Imagine that you type the following address into
                            your browser:
                        </p>

                        <div style={styles.urlBox}>
                            <span style={styles.protocol}>
                                https://
                            </span>

                            <span style={styles.domain}>
                                example.com
                            </span>

                            <span style={styles.path}>
                                /article
                            </span>
                        </div>

                        <p>
                            When you press Enter, your browser starts a chain
                            of operations to locate the website, connect to
                            its server, request the required resources and
                            display the final page.
                        </p>

                        <div className="web-flow">
                            <FlowItem number="1" text="Enter URL" />
                            <FlowArrow />
                            <FlowItem number="2" text="DNS Lookup" />
                            <FlowArrow />
                            <FlowItem number="3" text="Connect" />
                            <FlowArrow />
                            <FlowItem number="4" text="HTTP Request" />
                            <FlowArrow />
                            <FlowItem number="5" text="Web Page" />
                        </div>

                        <h2>1. Your browser reads the URL</h2>

                        <p>
                            A URL, or Uniform Resource Locator, tells the
                            browser where a resource can be found.
                        </p>

                        <p>
                            A URL commonly contains a protocol, domain name
                            and path.
                        </p>

                        <div className="web-parts-grid">
                            <PartCard
                                number="01"
                                title="Protocol"
                                text="HTTPS tells the browser how it should communicate with the server."
                            />

                            <PartCard
                                number="02"
                                title="Domain"
                                text="The domain is the human-readable address of the website."
                            />

                            <PartCard
                                number="03"
                                title="Path"
                                text="The path identifies a particular resource or page."
                            />
                        </div>

                        <h2>2. DNS finds the server</h2>

                        <p>
                            Computers communicate across networks using IP
                            addresses, while humans generally use domain
                            names.
                        </p>

                        <p>
                            DNS, which stands for Domain Name System, helps
                            translate a domain name into an IP address so the
                            browser can locate the appropriate server.
                        </p>

                        <div style={styles.infoCard}>
                            <div style={styles.infoIcon}>
                                🌐
                            </div>

                            <div>
                                <h3 style={styles.infoTitle}>
                                    Think of DNS as an Internet address book
                                </h3>

                                <p style={styles.infoText}>
                                    Instead of remembering a numerical IP
                                    address, you can use a domain name such
                                    as example.com. DNS helps find where that
                                    domain should connect.
                                </p>
                            </div>
                        </div>

                        <h2>3. The browser connects to the server</h2>

                        <p>
                            Once the browser knows the server's IP address,
                            it establishes a network connection to that
                            server.
                        </p>

                        <p>
                            When HTTPS is used, TLS is also involved in
                            establishing a secure connection so that data
                            exchanged between the browser and server can be
                            protected.
                        </p>

                        <h2>4. The browser sends an HTTP request</h2>

                        <p>
                            After establishing the connection, the browser
                            sends an HTTP request asking the server for a
                            resource.
                        </p>

                        <pre style={styles.code}>{`GET /article HTTP/1.1
Host: example.com
Accept: text/html`}</pre>

                        <h2>5. The server processes the request</h2>

                        <p>
                            A server may simply return a stored file, or it
                            may run backend application code to generate a
                            response.
                        </p>

                        <div className="web-two-cards">
                            <ServerCard
                                icon="📄"
                                title="Static Website"
                                text="The server returns files that already exist, such as HTML, CSS, JavaScript and images."
                            />

                            <ServerCard
                                icon="⚙️"
                                title="Dynamic Website"
                                text="Backend code can process requests, communicate with databases and generate responses dynamically."
                            />
                        </div>

                        <h2>6. Backend and databases</h2>

                        <p>
                            Modern applications often have a backend between
                            the browser and the database.
                        </p>

                        <div style={styles.architecture}>
                            <ArchitectureBox text="Browser" />
                            <ArchitectureArrow />
                            <ArchitectureBox text="Web Server" />
                            <ArchitectureArrow />
                            <ArchitectureBox text="Backend Application" />
                            <ArchitectureArrow />
                            <ArchitectureBox text="Database" />
                        </div>

                        <p>
                            For example, when you log into an application,
                            the frontend can send your credentials to an API.
                            The backend can validate them and communicate
                            with the database before returning a response.
                        </p>

                        <h2>7. The server sends a response</h2>

                        <p>
                            After processing the request, the server sends
                            an HTTP response back to the browser.
                        </p>

                        <pre style={styles.code}>{`HTTP/1.1 200 OK
Content-Type: text/html

<html>
    <body>
        <h1>Hello World</h1>
    </body>
</html>`}</pre>

                        <h2>8. HTML creates the structure</h2>

                        <p>
                            HTML provides the structure of the webpage.
                            Headings, paragraphs, links, images, forms and
                            other elements are represented using HTML.
                        </p>

                        <pre style={styles.code}>{`<main>
    <h1>How Websites Work</h1>

    <p>
        Learn what happens behind the scenes.
    </p>

    <a href="/about">
        Learn More
    </a>
</main>`}</pre>

                        <h2>9. CSS makes the page look good</h2>

                        <p>
                            CSS controls the visual presentation of HTML.
                            Developers use CSS for colors, spacing,
                            typography, layouts, animations and responsive
                            designs.
                        </p>

                        <pre style={styles.code}>{`.article {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px;
}

.article h1 {
    font-size: 42px;
}`}</pre>

                        <h2>10. JavaScript makes websites interactive</h2>

                        <p>
                            JavaScript allows webpages to respond to user
                            interactions and communicate with backend
                            services.
                        </p>

                        <p>
                            JavaScript can send an API request, receive JSON
                            data and update the page without reloading the
                            entire document.
                        </p>

                        <div style={styles.apiBox}>
                            <div className="web-api-row">
                                <ApiItem
                                    title="Frontend"
                                    subtitle="React / JavaScript"
                                />

                                <div style={styles.apiArrow}>
                                    →
                                </div>

                                <ApiItem
                                    title="API"
                                    subtitle="HTTP Request"
                                />

                                <div style={styles.apiArrow}>
                                    →
                                </div>

                                <ApiItem
                                    title="Backend"
                                    subtitle="Node.js / Server"
                                />
                            </div>

                            <div style={styles.apiResponse}>
                                ← JSON Response
                            </div>
                        </div>

                        <h2>11. The browser renders the page</h2>

                        <p>
                            Receiving HTML is only part of the process. The
                            browser can also download CSS, JavaScript,
                            images, fonts and other resources required by
                            the page.
                        </p>

                        <div className="web-render-flow">
                            <RenderBox
                                title="HTML"
                                subtitle="Structure"
                            />

                            <span className="web-render-plus">
                                +
                            </span>

                            <RenderBox
                                title="CSS"
                                subtitle="Appearance"
                            />

                            <span className="web-render-plus">
                                +
                            </span>

                            <RenderBox
                                title="JavaScript"
                                subtitle="Behavior"
                            />

                            <span className="web-render-plus">
                                →
                            </span>

                            <div style={styles.finalRender}>
                                Web Page
                            </div>
                        </div>

                        <h2>The complete journey</h2>

                        <p>
                            Putting everything together, a simplified
                            website request looks like this:
                        </p>

                        <div className="web-timeline">
                            <TimelineItem
                                number="01"
                                text="You enter a URL in your browser."
                            />

                            <TimelineItem
                                number="02"
                                text="DNS helps locate the server."
                            />

                            <TimelineItem
                                number="03"
                                text="The browser establishes a connection."
                            />

                            <TimelineItem
                                number="04"
                                text="The browser sends an HTTP request."
                            />

                            <TimelineItem
                                number="05"
                                text="The server processes the request."
                            />

                            <TimelineItem
                                number="06"
                                text="The server sends an HTTP response."
                            />

                            <TimelineItem
                                number="07"
                                text="The browser downloads required resources."
                            />

                            <TimelineItem
                                number="08"
                                text="The browser renders the webpage."
                            />
                        </div>

                        <div style={styles.conclusion}>
                            <div style={styles.conclusionIcon}>
                                💡
                            </div>

                            <div>
                                <h3 style={styles.conclusionTitle}>
                                    The big picture
                                </h3>

                                <p style={styles.conclusionText}>
                                    A website is a combination of browsers,
                                    networks, DNS, servers, backend
                                    applications, APIs, databases and
                                    frontend technologies working together.
                                </p>
                            </div>
                        </div>

                        <h2>Why understanding this matters</h2>

                        <p>
                            If you are learning web development,
                            understanding this process makes technologies
                            such as React, Node.js, Express, APIs, databases
                            and cloud deployment much easier to understand.
                        </p>

                        <p>
                            Once you understand how the browser communicates
                            with a server, you can understand what happens
                            when an API request fails, why CORS errors occur,
                            how domains point to servers and how frontend and
                            backend applications communicate.
                        </p>
                    </article>
                </section>

                <section className="web-about">
                    <div style={styles.badgeDark}>
                        ABOUT THIS GUIDE
                    </div>

                    <h2>
                        Understanding the web starts with understanding the
                        request.
                    </h2>

                    <p>
                        Whether you are learning frontend development,
                        backend development or cloud deployment, knowing how
                        a browser communicates with a server gives you a
                        strong foundation for building modern applications.
                    </p>
                </section>
            </main>

            <footer style={styles.footer}>
                <div className="web-footer-inner">
                    <div>
                        <div style={styles.footerLogo}>
                            WebGuide
                        </div>

                        <p style={styles.footerText}>
                            Simple explanations for modern web technology.
                        </p>
                    </div>

                    <p style={styles.footerCopyright}>
                        © 2026 WebGuide
                    </p>
                </div>
            </footer>

            {loading && !error && (
                <div style={styles.loadingOverlay}>
                    <div style={styles.spinner} />

                    <h3 style={styles.loadingTitle}>
                        Please wait...
                    </h3>

                    <p style={styles.loadingSubtitle}>
                        Preparing your content
                    </p>
                </div>
            )}
        </div>
    );
}

function FlowItem({ number, text }) {
    return (
        <div className="web-flow-item">
            <strong style={styles.flowNumber}>
                {number}
            </strong>

            <span>{text}</span>
        </div>
    );
}

function FlowArrow() {
    return (
        <span className="web-flow-arrow">
            →
        </span>
    );
}

function PartCard({ number, title, text }) {
    return (
        <div style={styles.partCard}>
            <div style={styles.partNumber}>
                {number}
            </div>

            <h3 style={styles.partTitle}>
                {title}
            </h3>

            <p style={styles.partText}>
                {text}
            </p>
        </div>
    );
}

function ServerCard({ icon, title, text }) {
    return (
        <div style={styles.serverCard}>
            <div style={styles.cardIcon}>
                {icon}
            </div>

            <h3 style={styles.serverCardTitle}>
                {title}
            </h3>

            <p style={styles.serverCardText}>
                {text}
            </p>
        </div>
    );
}

function ArchitectureBox({ text }) {
    return (
        <div style={styles.archBox}>
            {text}
        </div>
    );
}

function ArchitectureArrow() {
    return (
        <div style={styles.archArrow}>
            ↓
        </div>
    );
}

function ApiItem({ title, subtitle }) {
    return (
        <div style={styles.apiItem}>
            <strong>{title}</strong>
            <span>{subtitle}</span>
        </div>
    );
}

function RenderBox({ title, subtitle }) {
    return (
        <div style={styles.renderBox}>
            <strong>{title}</strong>
            <span>{subtitle}</span>
        </div>
    );
}

function TimelineItem({ number, text }) {
    return (
        <div style={styles.timelineItem}>
            <strong style={styles.timelineNumber}>
                {number}
            </strong>

            <span>{text}</span>
        </div>
    );
}

const styles = {
    page: {
        minHeight: "100vh",
        background: "#f6f7fb",
        color: "#172033",
    },

    hero: {
        background:
            "linear-gradient(135deg, #111827 0%, #312e81 55%, #4f46e5 100%)",
        color: "#fff",
    },

    badge: {
        display: "inline-block",
        padding: "8px 14px",
        borderRadius: "999px",
        background: "rgba(255,255,255,.1)",
        border: "1px solid rgba(255,255,255,.18)",
        color: "#c7d2fe",
        fontSize: "12px",
        fontWeight: 700,
        letterSpacing: "1px",
    },

    heroDescription: {
        maxWidth: "720px",
        margin: 0,
        fontSize: "20px",
        lineHeight: 1.7,
        color: "#dbeafe",
    },

    meta: {
        display: "flex",
        gap: "12px",
        marginTop: "28px",
        color: "#c7d2fe",
        fontSize: "14px",
    },

    introduction: {
        marginTop: 0,
        paddingBottom: "32px",
        borderBottom: "1px solid #e5e7eb",
        fontSize: "20px",
        lineHeight: 1.85,
        color: "#374151",
    },

    urlBox: {
        padding: "22px",
        margin: "25px 0",
        borderRadius: "12px",
        background: "#111827",
        color: "#fff",
        fontFamily: "monospace",
        fontSize: "16px",
        overflowX: "auto",
    },

    protocol: {
        color: "#a5b4fc",
    },

    domain: {
        color: "#67e8f9",
    },

    path: {
        color: "#86efac",
    },

    flowNumber: {
        color: "#4f46e5",
    },

    partCard: {
        padding: "25px",
        border: "1px solid #e5e7eb",
        borderRadius: "15px",
        background: "#fafafa",
    },

    partNumber: {
        fontSize: "12px",
        color: "#6366f1",
        fontWeight: 800,
        letterSpacing: "1px",
    },

    partTitle: {
        margin: "10px 0 8px",
        fontSize: "18px",
    },

    partText: {
        margin: 0,
        fontSize: "14px",
        color: "#6b7280",
        lineHeight: 1.6,
    },

    infoCard: {
        display: "flex",
        gap: "18px",
        padding: "25px",
        margin: "30px 0",
        background: "#eef2ff",
        border: "1px solid #c7d2fe",
        borderRadius: "15px",
    },

    infoIcon: {
        fontSize: "30px",
        flexShrink: 0,
    },

    infoTitle: {
        marginTop: 0,
        marginBottom: "8px",
        fontSize: "18px",
    },

    infoText: {
        marginBottom: 0,
        color: "#374151",
        lineHeight: 1.7,
    },

    code: {
        padding: "25px",
        margin: "25px 0",
        borderRadius: "14px",
        background: "#0f172a",
        color: "#e2e8f0",
        fontFamily: "monospace",
        fontSize: "14px",
        lineHeight: 1.7,
        overflowX: "auto",
        whiteSpace: "pre-wrap",
        wordBreak: "break-word",
    },

    serverCard: {
        padding: "28px",
        border: "1px solid #e5e7eb",
        borderRadius: "15px",
        background: "#f8fafc",
    },

    cardIcon: {
        fontSize: "30px",
        marginBottom: "10px",
    },

    serverCardTitle: {
        margin: "0 0 8px",
        fontSize: "18px",
    },

    serverCardText: {
        margin: 0,
        color: "#6b7280",
        lineHeight: 1.6,
    },

    architecture: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        padding: "35px 20px",
        margin: "30px 0",
        background: "#f8fafc",
        borderRadius: "15px",
    },

    archBox: {
        width: "280px",
        maxWidth: "100%",
        padding: "16px",
        textAlign: "center",
        background: "#fff",
        border: "1px solid #c7d2fe",
        borderRadius: "10px",
        color: "#3730a3",
        fontWeight: 700,
    },

    archArrow: {
        color: "#6366f1",
        fontSize: "22px",
    },

    apiBox: {
        padding: "28px",
        margin: "30px 0",
        background: "#f8fafc",
        border: "1px solid #e5e7eb",
        borderRadius: "15px",
    },

    apiItem: {
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        minWidth: "150px",
        padding: "18px",
        textAlign: "center",
        background: "#fff",
        border: "1px solid #c7d2fe",
        borderRadius: "10px",
    },

    apiArrow: {
        color: "#4f46e5",
        fontSize: "22px",
        fontWeight: 700,
    },

    apiResponse: {
        marginTop: "22px",
        textAlign: "center",
        color: "#059669",
        fontWeight: 700,
    },

    renderBox: {
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        minWidth: "120px",
        padding: "16px",
        textAlign: "center",
        background: "#fff",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
    },

    finalRender: {
        padding: "18px 24px",
        background: "#4f46e5",
        color: "#fff",
        borderRadius: "10px",
        fontWeight: 700,
    },

    timelineItem: {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "18px",
        background: "#f8fafc",
        border: "1px solid #e5e7eb",
        borderRadius: "10px",
    },

    timelineNumber: {
        color: "#4f46e5",
        fontSize: "14px",
        minWidth: "30px",
    },

    conclusion: {
        display: "flex",
        gap: "20px",
        padding: "28px",
        marginTop: "40px",
        background:
            "linear-gradient(135deg, #eef2ff, #f5f3ff)",
        border: "1px solid #c7d2fe",
        borderRadius: "16px",
    },

    conclusionIcon: {
        fontSize: "30px",
        flexShrink: 0,
    },

    conclusionTitle: {
        marginTop: 0,
        marginBottom: "8px",
        fontSize: "18px",
    },

    conclusionText: {
        marginBottom: 0,
        color: "#374151",
        lineHeight: 1.7,
    },

    badgeDark: {
        display: "inline-block",
        color: "#a5b4fc",
        fontSize: "12px",
        fontWeight: 800,
        letterSpacing: "1px",
    },

    footer: {
        padding: "45px 20px",
        background: "#0b1120",
        color: "#94a3b8",
    },

    footerLogo: {
        color: "#fff",
        fontSize: "20px",
        fontWeight: 800,
        marginBottom: "4px",
    },

    footerText: {
        margin: 0,
        fontSize: "14px",
    },

    footerCopyright: {
        margin: 0,
        fontSize: "14px",
    },

    loadingOverlay: {
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(255,255,255,.97)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
    },

    spinner: {
        width: "45px",
        height: "45px",
        border: "4px solid #e5e7eb",
        borderTop: "4px solid #4f46e5",
        borderRadius: "50%",
        animation: "spin .8s linear infinite",
    },

    loadingTitle: {
        margin: "18px 0 5px",
        color: "#111827",
        fontSize: "20px",
    },

    loadingSubtitle: {
        margin: 0,
        color: "#6b7280",
        fontSize: "14px",
    },
};

export default Random;