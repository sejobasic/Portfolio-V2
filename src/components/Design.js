import React, { useState } from 'react'
import { motion } from 'framer-motion'
import '../styling/Design.css'
import designData from '../utils/designData'
import Tilt from 'react-parallax-tilt'
import useSound from 'use-sound'
import photosound from '../assets/wand.wav'
import modalsound from '../assets/fairy.wav'
import loadsound from '../assets/pop2.wav'
import lesssound from '../assets/pop.wav'
import Divider from './Divider'
import Section from './Section'

function Design() {
  const [modal, setModal] = useState(false)
  const [tempImgSrc, setTempImgSrc] = useState('')
  const [visible, setVisible] = useState(24)

  const [playPhoto] = useSound(photosound, { volume: 0.2 })
  const [playModal] = useSound(modalsound, { volume: 0.2 })
  const [playLoad] = useSound(loadsound, { volume: 0.2 })
  const [playLess] = useSound(lesssound, { volume: 0.2 })

  const showMoreItems = () => {
    setVisible((prevValue) => prevValue + 5)
    playLoad()
  }

  const showLessItems = () => {
    setVisible((prevValue) => prevValue - 5)
    playLess()
  }

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc)
    setModal(true)
  }

  const designVariant = {
    hidden: { opacity: 0, y: '-10%' },
    visible: {
      opacity: 1,
      y: '0%',
      transition: {
        duration: 3,
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
          animate='visible'
          variants={designVariant}
        >
          <div className={modal ? 'modal open' : 'modal'}>
            <Tilt
              glareEnable={true}
              glareColor='#716040'
              glarePosition='all'
              glareMaxOpacity={0.5}
              perspective={800}
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
            >
              <div onClick={playModal}>
                <img
                  className='modal-img'
                  src={tempImgSrc}
                  alt='images modal'
                  onClick={() => setModal(false)}
                />
              </div>
            </Tilt>
            <div onClick={playModal}></div>
            <p>DESIGN WORK BY SEJO BASIC</p>
          </div>
          <div className='gallery'>
            {designData.slice(0, visible).map((item) => {
              return (
                <div
                  className='images'
                  key={item.id}
                  drag
                  dragConstraints={{ left: 0, top: 0, right: 0, bottom: 0 }}
                  dragElastic={0.7}
                  onClick={() => getImg(item.imgSrc)}
                >
                  <img
                    onClick={playPhoto}
                    src={item.imgSrc}
                    alt='design work'
                  />
                </div>
              )
            })}
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
