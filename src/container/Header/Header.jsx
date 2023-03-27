import React from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'

import './Header.scss'

const scaleVariants = {
  whileInView: {
    scale: [0,1],
    opacity: [0,1],
    transition: {
      duration: 1,
      ease: 'easeInOut'
    }
  }
}


const Header = () => {
  return (
    <div id= "home" className='app__header app__flex'>
      <motion.div
        whileInView={{ x: [-100,0], opacity:[0,1] }}
        transition={{ duration: 0.5}}
        className = 'app__header-info'
      >

        <div className="app__header-badge">
          <div className="badge-cmp app__flex">

            <div>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Stephany</h1>
            </div>
            <span style ={{ marginLeft:20}}>✨</span>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Full Stack Developer</p>
            <p className="p-text">Freelancer</p>
          </div>
        </div>

      </motion.div>

      <motion.div
        whileInView={{ x: [-100,0], opacity:[0,1] }}
        transition={{ duration: 0.5, delayChildren: 0.5}}
        className = 'app__header-img'
      >
        <img src={images.profile} alt="profile_bg" />

        <motion.img
          whileInView={{ scale: [0,1]}}
          transition={{ duration: 1, ease: 'easeInOut'}}
          className = 'overlay-circle'
          src={images.circle}
          alt='profile_circle'
        />
      </motion.div>

      <motion.div
        variant={scaleVariants}
        whileInView = {scaleVariants.whileInView }
        className = 'app__header-circles'
      >

        {[images.rails, images.react_grande, images.nextjs].map((circle, index) => (
        <div className="circle-cmp app__flex" key={`circle-${index}`}>
          <img src={circle} alt="circle" />
        </div>
      ))}

      </motion.div>


    </div>
  )
}

export default Header
