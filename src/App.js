import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero"
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio"; 
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ProjectDetails  from './components/Portfolio/ProjectDetails'; 
// import { ProjectDetails } from './ProjectDetails';
// import { ProjectCard } from './ProjectCard';



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Hero/>
        <About/>
        <Portfolio/>
        <Contact/>
        <Footer/>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
