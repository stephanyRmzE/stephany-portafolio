import React from 'react'
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs'

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <div>
        <a href="https://www.linkedin.com/in/stephanyramireze/">
          <BsLinkedin/>
        </a>

      </div>
      <div>
        <a href="https://github.com/stephanyRmzE">
          <BsGithub/>
        </a>
      </div>
      <div>
        <a href="https://www.instagram.com/stephany.rmz/">
          <BsInstagram/>
        </a>
      </div>
    </div>
  )
}

export default SocialMedia
