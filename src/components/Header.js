import React from 'react'
import { motion } from 'framer-motion'
import '../styles/Header.css'
import Divider from './Divider'

function Header() {
  const header = 'SEJO BASIC'

  const headerVariant = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.2,
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

  const titleVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
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

  const aboutVariant = {
    hidden: { opacity: 0, x: '-80%' },
    visible: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 2,
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
                >
                  {letter}
                </motion.span>
              )
            })}
          </motion.h1>
          <div className='divider-block'></div>
          <Divider />
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
          <motion.div
            className='about-container'
            initial='hidden'
            animate='visible'
            variants={aboutVariant}
          >
            <p>
              HI MY NAME IS SEJO, I AM A SOFTWARE ENGINEER AND UI/GRAPHIC
              DESIGNER BORN IN CROATIA, BASED IN ARIZONA. I SPECIALIZE IN
              FRONT-END DEVELOPMENT, CREATIVE DESIGN AND USER EXPERIENCE. I HAVE
              ALSO BEEN DOING MUSIC PRODUCTION FOR 7 YEARS SPECIALIZING IN
              ELECTRONIC MUSIC AND SOUND DESIGN.
            </p>
          </motion.div>
        </div>
      </div>
      <div className='whitespace'></div>
    </>
  )
}

export default Header
