import React from 'react'
import '../styling/Contact.css'
import Divider from './Divider'
import Section from './Section'

function Contact() {
  return (
    <>
      <Section
        sectionTitle={'CONTACT'}
        sectionOrder={'/003'}
        sectionId={'contact'}
      />
      <Divider />

      <section className='contact-section'>
        <div className='contact-container'>
          <a
            href='mailto:sejobasicwork@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='socials link-item'
          >
            EMAIL
          </a>
          <a
            href='http://www.linkedin.com/in/sejo-basic'
            target='_blank'
            rel='noreferrer'
            className='socials link-item'
          >
            LINKEDIN
          </a>
          <a
            href='https://github.com/sejobasic'
            target='_blank'
            rel='noreferrer'
            className='socials link-item'
          >
            GITHUB
          </a>
          <a
            href='https://codepen.io/sejobasic'
            target='_blank'
            rel='noreferrer'
            className='socials link-item'
          >
            CODEPEN
          </a>
          <a
            href='https://open.spotify.com/artist/0KPmCqiU6iscwxQo62WBXN?si=Uu9zCLLPQrKDIRFBe8fn0Q'
            target='_blank'
            rel='noreferrer'
            className='socials link-item'
          >
            SPOTIFY
          </a>
          <a
            href='https://medium.com/@sejobasic'
            target='_blank'
            rel='noreferrer'
            className='socials link-item'
          >
            BLOG
          </a>
        </div>
      </section>

      <Divider />
    </>
  )
}

export default Contact
