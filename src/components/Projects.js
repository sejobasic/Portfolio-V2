import React from 'react'

// Project images
import filmList from '../assets/film.png'
import layr from '../assets/layr.png'
import simple from '../assets/simple.png'
import trails from '../assets/trails.png'

function Projects() {
  return (
    <>
      <div className='section-header'>
        <div className='section-header-container'>
          <div className='section-title'>PROJECTS</div>
          <div className='section-order'>/001</div>
        </div>
      </div>
      <div className='divider'></div>

      <section className='project-section'>
        <div className='project-container'>
          <div>
            <nav className='menu'>
              <div className='menu-item'>
                <a
                  href='https://filmlist-project.netlify.app/'
                  className='menu-item-link'
                >
                  / FILM LIST
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
              </div>

              <div className='divider'></div>

              <div className='menu-item'>
                <a
                  href='https://filmlist-project.netlify.app/'
                  className='menu-item-link'
                >
                  / LAYR
                </a>
                <img src={layr} alt='layr project' className='menu-item-img' />
                <div className='marquee'>
                  <div className='marquee-inner'>
                    <span>LAYR</span>
                    <span>LAYR</span>
                    <span>LAYR</span>
                    <span>LAYR</span>
                  </div>
                </div>
              </div>

              <div className='divider'></div>

              <div className='menu-item'>
                <a
                  href='https://filmlist-project.netlify.app/'
                  className='menu-item-link'
                >
                  / SIMPLE FRIDGE
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
              </div>

              <div className='divider'></div>

              <div className='menu-item'>
                <a
                  href='https://filmlist-project.netlify.app/'
                  className='menu-item-link'
                >
                  / TRAILS
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
                  </div>
                </div>
              </div>

              <div className='divider'></div>
            </nav>
          </div>
        </div>
      </section>

      <div className='whitespace'></div>
    </>
  )
}

export default Projects
