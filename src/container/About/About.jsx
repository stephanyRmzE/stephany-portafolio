import React, {useState, useEffect} from 'react'
import {motion} from 'framer-motion'
import {images} from '../../constants'

import './About.scss'

const abouts = [
  {title:'Full-Stack', description: 'Strong understanding of both front-end and back-end development.', imgUrl: images.about01},
  {title:'Back-End', description: 'Proficiency in Ruby, good at problem-solving, and passion for creating efficient, scalable web applications.', imgUrl: images.about02},
  {title:'Front-End', description: 'Experienced in HTML, CSS, and JavaScript, creativity, attention to detail, and a passion for user experience.', imgUrl: images.about03},
];

const About = () => {
  return (
    <>
      <h2 className="head-text">I Know that <span> Good Development </span> <br />means  <span> Good Business </span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) =>(
          <motion.div
            whileInView={{opacity: 1}}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className='app__profile-item'
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10}}>{about.description}</p>

          </motion.div>
        ))}
      </div>
    </>
  )
}

export default About
