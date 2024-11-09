import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import  Home from './components/Home';
import Footer from './components/Footer';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Services from './components/Services';

function App() {
  return ( 
    <>
      <Nav />
      <Home/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/> 
      <Footer/>    
    </>
  );
}

export default App;
