import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

function Section({ sectionTitle, sectionOrder, sectionId }) {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])
  const sectionVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 3,
      },
    },
  }

  return (
    <div className='section-header' id={sectionId}>
      <div className='section-header-container'>
        <motion.p
          className='section-title'
          initial='hidden'
          animate={controls}
          variants={sectionVariant}
          ref={ref}
        >
          {sectionTitle}
        </motion.p>
        <motion.p
          className='section-order'
          initial='hidden'
          animate={controls}
          variants={sectionVariant}
          ref={ref}
        >
          {sectionOrder}
        </motion.p>
      </div>
    </div>
  )
}

export default Section
