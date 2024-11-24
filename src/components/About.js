import React from 'react'
import njambi2 from './assets/njambi2.jpg';
import './About.css'
import karitu from './assets/karitu.jpg'

const About = () => {
  return (
    <div>
        <section  className="about" id="about">

            <div className='about-img'>
                <img src={karitu} alt="about"/>
            </div>
            <div className='about-content'>
                <h2 className="heading"> About <span> Me</span></h2>
                <h3> FUllstack Developer</h3>
                <p>I'm a Full Stack Developer who has a passion for building innovative applications. I've worked with various programming languages, including JavaScript, Python, and React.js. I'm currently based in Nairobi, Kenya, but I'm open to remote work.</p>
                 <a href="#" className="btn">Read More</a>
            </div>


        </section>           
               

    </div>

  )
}

export default About;