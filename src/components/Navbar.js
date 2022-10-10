import React from 'react'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'
import '../styling/Navbar.css'

function Navbar() {

  const navVariant = {
    hidden: { opacity: 0, y: '-60%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 3,
      },
    },
  }

  return (
    <div className='nav'>
      <div className='navbar'>
        <motion.div
          className='navbar-container'
          initial='hidden'
          animate='visible'
          variants={navVariant}
        >
          {/* <span className='logo'>SB</span> */}
          <nav className='nav-links'>
            <Link to='home' spy={true} smooth={true} duration={1000}>
              <span className='link-item'>HOME</span>
            </Link>
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
        </motion.div>
      </div>
    </div>
  )
}

export default Navbar
