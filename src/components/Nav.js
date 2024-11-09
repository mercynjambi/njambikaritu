import React from 'react'
import './Nav.css';

const Nav = () => {
  return (
    <div>
        <header className='header'>
            <a href ="#" className='logo'>Porfolio</a>

            <i class='bx bx-menu' id="menu-icon"></i>

                <nav className='navbar'>
                    <a href="#" class="active">Home</a>
                    <a href="#">About</a>
                    <a href="#"> Services</a>
                    <a href="#">Projects</a>
                    <a href="#"Contact ></a>

                </nav>
            

        </header>

    </div>
  )
}

export default Nav