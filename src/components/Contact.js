import React from 'react'

function Contact() {
  return (
    <>
      <div className='section-header'>
        <div className='section-header-container'>
          <div className='section-title'>CONTACT</div>
          <div className='section-order'>/003</div>
        </div>
      </div>
      <div className='divider'></div>

      <section className='contact-section'>
        <div className='contact-container'>
          <a
            href='mailto:sejobasicwork@gmail.com'
            target='_blank'
            rel='noreferrer'
            className='socials'
          >
            EMAIL
          </a>
          <a
            href='http://www.linkedin.com/in/sejo-basic'
            target='_blank'
            rel='noreferrer'
            className='socials'
          >
            LINKEDIN
          </a>
          <a
            href='https://github.com/sejobasic'
            target='_blank'
            rel='noreferrer'
            className='socials'
          >
            GITHUB
          </a>
          <a
            href='https://codepen.io/sejobasic'
            target='_blank'
            rel='noreferrer'
            className='socials'
          >
            CODEPEN
          </a>
          <a
            href='https://open.spotify.com/artist/0KPmCqiU6iscwxQo62WBXN?si=Uu9zCLLPQrKDIRFBe8fn0Q'
            target='_blank'
            rel='noreferrer'
            className='socials'
          >
            SPOTIFY
          </a>
          <a
            href='https://medium.com/@sejobasic'
            target='_blank'
            rel='noreferrer'
            className='socials'
          >
            BLOG
          </a>
        </div>
      </section>

      <div className="divider"></div>

      <div className='whitespace'></div>
    </>
  )
}

export default Contact
