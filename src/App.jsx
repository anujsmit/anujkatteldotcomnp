import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Portfolio from "./Pages/Portfolio";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

import DigitalKhata from "./digitalkhata/DigialKhata";
import PrivacyPage from "./digitalkhata/Privacy";
import TermsAndConditions from "./digitalkhata/terms_and_conditions";
import DeleteAccount from "./digitalkhata/Deleteaccount";

import PrivacyPolicy from "./servex/Privacypolicy";
import TermsOfUse from "./servex/TermsOfUse";
import ServeX from "./servex/ServeX";

import Navbar from "./components/Navbar";
import LocationFetch from "./Pages/projects/Locationfetch";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        <Route path="/digitalkhata/" element={<DigitalKhata />} />
        <Route path="/digitalkhata/home" element={<DigitalKhata />} />
        <Route path="/digitalkhata/privacy" element={<PrivacyPage />} />
        <Route
          path="/digitalkhata/termsandcondition"
          element={<TermsAndConditions />}
        />
        <Route
          path="/digitalkhata/deleteaccount"
          element={<DeleteAccount />}
        />

        <Route path="/servex/" element={<ServeX />} />
        <Route path="/servex/home" element={<ServeX />} />
        <Route path="/servex/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/servex/termsofuse" element={<TermsOfUse />} />

        {/* projects */}
        <Route path="/projects/location" element={<LocationFetch />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;