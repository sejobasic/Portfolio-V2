import React from 'react'
import '../styling/Navbar.css'

function Navbar() {
  return (
    <div className='navbar'>
      <div className="navbar-container">
        <span className="logo">SB</span>
        <nav className='nav-links'>
          <span>PROJECTS</span>
          <span>DESIGN</span>
          <span>CONTACT</span>
        </nav>
      </div>
    </div>
  )
}

export default Navbar