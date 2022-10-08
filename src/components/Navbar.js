import React from 'react'
import { Link } from 'react-scroll'
import '../styling/Navbar.css'

function Navbar() {
  return (
    <div className='nav'>
      <div className='navbar'>
        <div className='navbar-container'>
          <span className='logo'>SB</span>
          <nav className='nav-links'>
            <Link to='projects' spy={true} smooth={true} duration={1000}>
              <span className='link-item'>PROJECTS</span>
            </Link>
            <Link to='design' spy={true} smooth={true} duration={1000}>
              <span className='link-item'>DESIGN</span>
            </Link>
            <Link to='contact' spy={true} smooth={true} duration={1000}>
              <span className='link-item'>CONTACT</span>
            </Link>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
