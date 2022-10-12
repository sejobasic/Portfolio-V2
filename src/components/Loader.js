import React from 'react'
import CountUp from 'react-countup'
import { motion } from 'framer-motion'
import AnimatedText from 'react-animated-text-content'
import '../styling/Loader.css'

function Loader() {
  const loaderVariant = {
    hidden: { fontSize: '15rem' },
    visible: {
      fontSize: '5rem',
      x: '100vw',
      transition: {
        duration: 2,
        delay: 2,
      },
    },
  }

  return (
    <motion.div
      className='loader-container'
      initial='hidden'
      animate='visible'
      variants={loaderVariant}
    >
      <AnimatedText
        className='name'
        type='chars'
        animation={{
          x: '200px',
          y: '-20px',
          scale: 1.1,
          ease: 'ease-in-out',
        }}
        animationType='float'
        duration={1}
        threshold={0.1}
        rootMargin='20%'
      >
        WELCOME
      </AnimatedText>
    </motion.div>
  )
}

export default Loader
