import React from 'react'
import '../styling/Navbar.css'

function Navbar() {
  return (
    <div className="nav">
    <div className='navbar'>
      <div className="navbar-container">
        <span className="logo">SB</span>
        <nav className='nav-links'>
          <span className='link-item'>PROJECTS</span>
          <span className='link-item'>DESIGN</span>
          <span className='link-item'>CONTACT</span>
        </nav>
      </div>
    </div>
    </div>
  )
}

export default Navbar