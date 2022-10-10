import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Divider() {

  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  

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
    animate={controls}
    variants={lineVariant}
    ref={ref}
  ></motion.div>
  )
}

export default Divider