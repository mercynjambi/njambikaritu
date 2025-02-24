import React, { useRef, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio"; 
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectDetails  from './components/Portfolio/ProjectDetails'; 

function App() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const section = document.querySelector(hash);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <div id="hero" ref={heroRef}>
              <Hero />
            </div>
            <div id="about" ref={aboutRef}>
              <About />
            </div>
            <div id="portfolio" ref={portfolioRef}>
              <Portfolio />
            </div>
            <div id="contact" ref={contactRef}>
              <Contact />
            </div>
          </>
        } />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default () => (
  <Router>
    <App />
  </Router>
);
