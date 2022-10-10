import React from 'react'
import { motion, useAnimation } from 'framer-motion'
import '../styling/Header.css'

function Header() {

  const header = 'SEJO BASIC'
  
  const headerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }

  const lineVariant = {
    hidden: { width: '0%' },
    visible: {
      width: '100%',
      transition: {
        duration: 3,
        type: 'tween',
      },
    },
  }

  const titleVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.3,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  }

  const itemVariant = {
    hidden: { y: '-100% ' },
    visible: {
      y: '0%',
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <>
      <div className='header'>
        <div className='header-container'>
          <motion.h1
            initial='hidden'
            animate='visible'
            variants={headerVariant}
          >
            {header.split('').map((letter, index) => {
              return (
                <motion.span 
                  key={`${letter}-${index}`}
                  variants={letterVariant}
                >{letter}</motion.span>
              )
            })}
          </motion.h1>
          <div className='divider-block'></div>
          <motion.div
            className='divider'
            initial='hidden'
            animate='visible'
            variants={lineVariant}
          ></motion.div>
          <motion.div
            className='title-container'
            initial='hidden'
            animate='visible'
            variants={titleVariant}
          >
            <motion.span variants={itemVariant}>Creative Developer</motion.span>
            <motion.span variants={itemVariant}>+</motion.span>
            <motion.span variants={itemVariant}>Designer</motion.span>
            <motion.span variants={itemVariant}>+</motion.span>
            <motion.span variants={itemVariant}>Musician</motion.span>
            <motion.span variants={itemVariant}>+</motion.span>
            <motion.span variants={itemVariant}>Artist</motion.span>
          </motion.div>
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
