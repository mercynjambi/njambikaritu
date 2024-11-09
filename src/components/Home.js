import React from 'react'
import njambi1 from './assets/njambi1.jpg';
import './Home.css'
import 'boxicons/css/boxicons.min.css';


const Home = () => {
  return (
    <div>
        <section className="home" id="home">
            <div className='home-content'>
                <h3>Hello, Its Me</h3>
                <h1>Mercy Njambi</h1>
                <h3> And I'm a<span> FullStack Developer</span></h3>
                <p>With a strong foundation in front-end and back-end technologies, I build impactful digital solutions that are user-focused and innovative. Whether it's crafting engaging charity websites or tackling complex coding projects, my goal is to bring ideas to life with code and creativity.
                </p>


            <div className='social-media'>
                <a href="#"><i class='bx bxl-twitter'></i></a>
                <a href="#"><i class='bx bxl-facebook'></i></a>
                <a href="#"><i class='bx bxl-instagram-alt'></i></a>
                <a href=""><i class='bx bxl-linkedin'></i></a>               

            </div>
            <a href="#" className="btn"> Download CV</a>
            </div>
            <div className='home-img'>
                <img src={njambi1.jpg} alt="home"/>
            </div>

        </section>
    </div>
  )
}

export default Home