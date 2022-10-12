import React from 'react'
import { motion } from 'framer-motion'
import projectData from '../utils/projectData'
import '../styling/Projects.css'
import Divider from './Divider'
import Section from './Section'

function Projects() {
  const projectVariant = {
    hidden: { opacity: 0, x: '-80%' },
    visible: {
      opacity: 1,
      x: '0%',
      transition: {
        duration: 2,
      },
    },
  }

  const renderProjectData = projectData.map((project) => {
    return (
      <>
        <motion.div
          className='menu-item'
          initial='hidden'
          animate='visible'
          variants={projectVariant}
        >
          <a
            href={project.link}
            target='_blank'
            rel='noreferrer'
            className='menu-item-link'
          >
            {project.title}
          </a>
          <img
            src={project.image}
            alt={project.title + 'project image'}
            className='menu-item-img'
          />
          <div className='marquee'>
            <div className='marquee-inner'>
              <span>{project.title}</span>
              <span>{project.title}</span>
              <span>{project.title}</span>
              <span>{project.title}</span>
            </div>
          </div>
        </motion.div>
        <Divider />
      </>
    )
  })

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
            <nav className='menu'>{renderProjectData}</nav>
          </div>
        </div>
      </section>

      <div className='whitespace'></div>
    </>
  )
}

export default Projects
