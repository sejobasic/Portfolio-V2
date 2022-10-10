import React from 'react'
import { motion } from 'framer-motion'

function Divider() {

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
  return (
    <motion.div
    className='divider'
    initial='hidden'
    animate='visible'
    variants={lineVariant}
  ></motion.div>
  )
}

export default Divider