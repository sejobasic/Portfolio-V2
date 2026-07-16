import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import '../styles/Loader.css'

const welcomes = [
  'WELCOME',
  'DOBRODOŠLI',
  'BIENVENUE',
  'WILLKOMMEN',
  'VELKOMMEN',
  '¡BIENVENIDO!',
  'MERHABA',
  'YÔKOSO',
  'MALIGAYANG PAGDATING',
  'AHLAN WA SAHLAN',
]

function Loader() {
  const [currentWelcome, setCurrentWelcome] = useState(welcomes[0])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentWelcome((prevWelcome) => {
        const currentIndex = welcomes.indexOf(prevWelcome)
        const nextIndex = (currentIndex + 1) % welcomes.length
        return welcomes[nextIndex]
      })
    }, 500)

    return () => clearInterval(intervalId)
  }, [])

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
      <motion.span
        key={currentWelcome}
        className='loader-text'
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
      >
        {currentWelcome}
      </motion.span>
    </motion.div>
  )
}

export default Loader
