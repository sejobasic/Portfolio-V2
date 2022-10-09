import React, { useState } from 'react'
import '../styling/Design.css'
import designData from '../utils/designData'
import Tilt from 'react-parallax-tilt'
import useSound from 'use-sound'
import close from '../assets/close.png'
import photosound from '../assets/wand.wav'
import modalsound from '../assets/fairy.wav'
import loadsound from '../assets/pop2.wav'
import lesssound from '../assets/pop.wav'

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

  return (
    <>
      <div className='section-header' id='design'>
        <div className='section-header-container'>
          <div className='section-title'>DESIGN</div>
          <div className='section-order'>/002</div>
        </div>
      </div>
      <div className='divider'></div>

      <section className='design-section'>
        <div className='design-container'>
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
        </div>
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
