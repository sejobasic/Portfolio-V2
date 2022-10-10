import React from 'react'
import { motion } from 'framer-motion'
import '../styling/Projects.css'

// Project images
import filmList from '../assets/film.png'
import layr from '../assets/layr.png'
import simple from '../assets/simple.png'
import trails from '../assets/trails.png'
import Divider from './Divider'
import Section from './Section'

function Projects() {
  const projectVariant = {
    hidden: { opacity: 0, x: '-80%' },
    visible: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 3,
      },
    },
  }

  return (
    <>
      <Section
        sectionTitle={'PROJECTS'}
        sectionOrder={'/001'}
        sectionId={'projects'}
      />
      <Divider />

      <section className='project-section'>
        <div className='project-container'>
          <div>
            <nav className='menu'>
              <motion.div
                className='menu-item'
                initial='hidden'
                animate='visible'
                variants={projectVariant}
              >
                <a
                  href='https://filmlist-project.netlify.app/'
                  target='_blank'
                  rel='noreferrer'
                  className='menu-item-link'
                >
                  ✣ FILM LIST
                </a>
                <img
                  src={filmList}
                  alt='film list project'
                  className='menu-item-img'
                />
                <div className='marquee'>
                  <div className='marquee-inner'>
                    <span>FILM LIST</span>
                    <span>FILM LIST</span>
                    <span>FILM LIST</span>
                    <span>FILM LIST</span>
                  </div>
                </div>
              </motion.div>

              <Divider />

              <motion.div
                className='menu-item'
                initial='hidden'
                animate='visible'
                variants={projectVariant}
              >
                <a
                  href='http://www.layrsequencer.com/'
                  target='_blank'
                  rel='noreferrer'
                  className='menu-item-link'
                >
                  ✣ LAYR SEQUENCER
                </a>
                <img src={layr} alt='layr project' className='menu-item-img' />
                <div className='marquee'>
                  <div className='marquee-inner'>
                    <span>LAYR SEQUENCER</span>
                    <span>LAYR SEQUENCER</span>
                    <span>LAYR SEQUENCER</span>
                    <span>LAYR SEQUENCER</span>
                  </div>
                </div>
              </motion.div>

              <Divider />

              <motion.div
                className='menu-item'
                initial='hidden'
                animate='visible'
                variants={projectVariant}
              >
                <a
                  href='https://github.com/weiwei-out/MagicFridge'
                  target='_blank'
                  rel='noreferrer'
                  className='menu-item-link'
                >
                  ✣ SIMPLE FRIDGE
                </a>
                <img
                  src={simple}
                  alt='simple fridge project'
                  className='menu-item-img'
                />
                <div className='marquee'>
                  <div className='marquee-inner'>
                    <span>SIMPLE FRIDGE</span>
                    <span>SIMPLE FRIDGE</span>
                    <span>SIMPLE FRIDGE</span>
                    <span>SIMPLE FRIDGE</span>
                  </div>
                </div>
              </motion.div>

              <Divider />

              <motion.div
                className='menu-item'
                initial='hidden'
                animate='visible'
                variants={projectVariant}
              >
                <a
                  href='https://github.com/sejobasic/Trails-app'
                  target='_blank'
                  rel='noreferrer'
                  className='menu-item-link'
                >
                  ✣ TRAILS
                </a>
                <img
                  src={trails}
                  alt='trails project'
                  className='menu-item-img'
                />
                <div className='marquee'>
                  <div className='marquee-inner'>
                    <span>TRAILS</span>
                    <span>TRAILS</span>
                    <span>TRAILS</span>
                    <span>TRAILS</span>
                    <span>TRAILS</span>
                  </div>
                </div>
              </motion.div>

              <Divider />
            </nav>
          </div>
        </div>
      </section>

      <div className='whitespace'></div>
    </>
  )
}

export default Projects
