import React from 'react'
import { motion } from 'framer-motion'

function Section({ sectionTitle, sectionOrder, sectionId }) {
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
          animate='visible'
          variants={sectionVariant}
        >
          {sectionTitle}
        </motion.p>
        <motion.p
          className='section-order'
          initial='hidden'
          animate='visible'
          variants={sectionVariant}
        >
          {sectionOrder}
        </motion.p>
      </div>
    </div>
  )
}

export default Section
