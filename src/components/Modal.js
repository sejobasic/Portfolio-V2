import React from 'react'
import Tilt from 'react-parallax-tilt'
import { motion, AnimatePresence } from 'framer-motion'

const modalVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

function Modal({ modal, setModal, tempImgSrc, closeModal }) {
  return (
    <AnimatePresence exitBeforeEnter>
      {modal && (
        <motion.div
          className='backdrop'
          initial='hidden'
          animate='visible'
          exit='hidden'
          variants={modalVariant}
        >
          <Tilt
            glareEnable={false}
            perspective={700}
            tiltMaxAngleX={35}
            tiltMaxAngleY={35}
          >
            <motion.img
              title='CLOSE'
              className='modal-img'
              src={tempImgSrc}
              alt='images modal'
              onClick={closeModal}
            />
          </Tilt>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Modal
