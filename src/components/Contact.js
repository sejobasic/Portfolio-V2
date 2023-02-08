import React, { useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { saveAs } from 'file-saver'
import { useInView } from 'react-intersection-observer'
import img from '../assets/sejoresume.pdf'
import '../styles/Contact.css'
import Divider from './Divider'
import Section from './Section'

function Contact() {
  const controls = useAnimation()
  const { ref, inView } = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const contactVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
        ease: [0.17, 0.67, 0.83, 0.67],
      },
    },
  }

  const itemVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
      },
    },
  }

  function downloadImage() {
    saveAs(img, 'sejobasic-resume.pdf')
  }

  return (
    <>
      <Section
        sectionTitle={'CONTACT'}
        sectionOrder={'/003'}
        sectionId={'contact'}
      />
      <Divider />

      <section className='contact-section'>
        <motion.div
          className='contact-container'
          initial='hidden'
          animate={controls}
          variants={contactVariant}
          ref={ref}
        >
          <motion.a
            className='socials link-item'
            href='mailto:sejobasicwork@gmail.com'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            EMAIL
          </motion.a>
          <motion.a
            className='socials link-item'
            href='http://www.linkedin.com/in/sejo-basic'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            LINKEDIN
          </motion.a>
          <motion.a
            className='socials link-item'
            href='https://github.com/sejobasic'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            GITHUB
          </motion.a>
          <motion.a
            className='socials link-item'
            href='https://codepen.io/sejobasic'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            CODEPEN
          </motion.a>
          <motion.a
            className='socials link-item'
            onClick={downloadImage}
            variants={itemVariant}
          >
            RESUME
          </motion.a>
          {/* <motion.a
            className='socials link-item'
            href='https://medium.com/@sejobasic'
            target='_blank'
            rel='noreferrer'
            variants={itemVariant}
          >
            BLOG
          </motion.a> */}
        </motion.div>
      </section>

      <Divider />
    </>
  )
}

export default Contact
