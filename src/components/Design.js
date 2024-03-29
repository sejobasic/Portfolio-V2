import React, { useEffect, useState } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import '../styles/Design.css'
import designData from '../utils/designData'
import useSound from 'use-sound'
import photosound from '../assets/wand.wav'
import modalsound from '../assets/fairy.wav'
import loadsound from '../assets/pop2.wav'
import lesssound from '../assets/pop.wav'
import Divider from './Divider'
import Section from './Section'
import Modal from './Modal'

function Design() {
  const [modal, setModal] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')
  const [visible, setVisible] = useState(17)

  const [playPhoto] = useSound(photosound, { volume: 0.2 })
  const [playModal] = useSound(modalsound, { volume: 0.2 })
  const [playLoad] = useSound(loadsound, { volume: 0.2 })
  const [playLess] = useSound(lesssound, { volume: 0.2 })

  const showMoreItems = () => {
    if (visible <= 48) {
      setVisible((prevValue) => prevValue + 5)
      playLoad()
    }
  }

  const showLessItems = () => {
    if (visible > 10) {
      setVisible((prevValue) => prevValue - 5)
      playLess()
    }
  }

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModal(true)
  }

  const closeModal = () => {
    playModal()
    setModal(false)
  }

  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  useEffect(() => {
    if (modal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [modal])

  const designVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  }

  return (
    <>
      <Section
        sectionTitle={'DESIGN'}
        sectionOrder={'/002'}
        sectionId={'design'}
      />
      <Divider />

      <section className='design-section'>
        <motion.div
          className='design-container'
          initial='hidden'
          animate={controls}
          variants={designVariant}
          ref={ref}
        >
          <Modal
            modal={modal}
            tempImgSrc={tempImgSrc}
            closeModal={closeModal}
          />
          <div className='gallery'>
            {designData.slice(0, visible).map(({ id, imgSrc }) => (
              <div className='images' key={id} onClick={() => getImg(imgSrc)}>
                <LazyLoadImage
                  onClick={playPhoto}
                  effect='blur'
                  src={imgSrc}
                  alt='design work'
                />
              </div>
            ))}
          </div>
        </motion.div>
        <div className='load-container'>
          <button className='load-btn link-item' onClick={showMoreItems}>
            LOAD MORE
          </button>
          <button className='load-btn link-item' onClick={showLessItems}>
            LOAD LESS
          </button>
        </div>
      </section>

      <div className='whitespace'></div>
    </>
  )
}

export default Design
