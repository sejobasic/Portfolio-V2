import React from 'react'
import '../styling/Header.css'

function Header() {
  return (
    <>
      <div className='header'>
        <div className='header-container'>
          <h1>SEJO BASIC</h1>
          <div className='divider'></div>
          <div className='title-container'>
            <span>Creative Developer</span>
            <span>+</span>
            <span>Designer</span>
            <span>+</span>
            <span>Musician</span>
            <span>+</span>
            <span>Artist</span>
          </div>
          <p>
            HI MY NAME IS SEJO, I AM A SOFTWARE ENGINEER AND UI/GRAPHIC DESIGNER
            BASED IN ARIZONA. I SPECIALIZE IN FRONT-END DEVELOPMENT, CREATIVE
            DESIGN AND USER EXPERIENCE. MY PASSION FOR CREATIVITY MOTIVATES ME
            TO CONTINUOUSLY EXPAND MY SKILL SET THROUGH NEW TECHNOLOGIES,
            INSPIRE OTHERS, AND WORK COLLECTIVELY TO BRING NEW IDEAS TO LIFE.
          </p>
        </div>
      </div>
      <div className='whitespace'></div>
    </>
  )
}

export default Header
