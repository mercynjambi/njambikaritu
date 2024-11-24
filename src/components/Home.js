import React from 'react';
import karitu from './assets/karitu.jpg';
import './Home.css';
import 'boxicons/css/boxicons.min.css';

const Home = () => {
  return (
    <div>
      <section className="home" id="home">
        <div className='home-content'>
          <h3>Hello, It's Me</h3>
          <h1>Mercy Njambi</h1>
          <h3> And I'm a <span>FullStack Developer</span></h3>
          <p>
            With a strong foundation in front-end and back-end technologies, I build impactful digital solutions that are user-focused and innovative. Whether it's crafting engaging charity websites or tackling complex coding projects, my goal is to bring ideas to life with code and creativity.
          </p>

          <div className='social-media'>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-twitter'></i>
            </a>
            <a href="https://github.com/mercynjambi" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-github'></i>
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-instagram-alt'></i>
            </a>
            <a href="https://www.linkedin.com/in/mercy-njambi-b31a70222/" target="_blank" rel="noopener noreferrer">
              <i className='bx bxl-linkedin'></i>
            </a>
          </div>

          <a 
            href="file:///C:/Users/MERCY%20NJAMBI/Documents/mercynjambicv.pdf" 
            className="btn" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
        <div className='home-img'>
          <img src={karitu} alt="home"/>
        </div>
      </section>
    </div>
  );
};

export default Home;
