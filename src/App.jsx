// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ThemeToggle from "./components/ThemeToggle";

import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";
import Random from "./Pages/Random";

import PrivacyPolicy from "./servex/Privacypolicy";
import TermsOfUse from "./servex/TermsOfUse";
import ServeX from "./servex/ServeX";

import Navbar from "./components/Navbar";
import LocationFetch from "./Pages/projects/Location.jsx";
import Packages from "./Pages/Packages.jsx";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <ThemeToggle />

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/random" element={<Random />} />

        <Route path="/servex/" element={<ServeX />} />
        <Route path="/servex/home" element={<ServeX />} />
        <Route path="/servex/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/servex/termsofuse" element={<TermsOfUse />} />

        <Route path="/projects/location" element={<LocationFetch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;