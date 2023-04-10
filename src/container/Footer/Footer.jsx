import React, {useState} from 'react'
import { images } from "../../constants";
import {AppWrap, MotionWrap} from '../../wrapper';
import { client} from '../../client'

import './Footer.scss'

const Footer = () => {
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      message: ''
  })

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {name, email, message} = formData;

  const handleChange = (e) => {
    const {name, value} = e.target;

    setFormData({...formData, [name]: value})
  }

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    }

    client.create(contact)
      .then(() =>{
        setLoading(false);
        setIsFormSubmitted(true)
      })
  }

  return (
    <>
      <h2 className="head-text">Take A Coffee & Chat With Me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:stephany.ramireze@gmail.com" className='p-text'>stephany.ramireze@gmail.com</a>
        </div>
        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel: +52 662 1397203" className='p-text'>+52 (662) 139-7203</a>
        </div>
      </div>

    {!isFormSubmitted ?
      <div className="app__footer-form app__flex">
        <div className="app__flex">
          <input type="text" className="p-text" placeholder='Your name' name='name' value ={name} onChange={handleChange} />
        </div>
        <div className="app__flex">
          <input type="email" className="p-text" placeholder='Your email' name='email' value ={email} onChange={handleChange} />
        </div>
        <div>
          <textarea
            className='p-text'
            placeholder='Your Message'
            value={message}
            name='message'
            onChange={handleChange}
          />
        </div>
        <button className="p-text" type='button' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'} </button>
      </div>
    : <div>
        <h3 className="head-text">Thank you for getting in touch!</h3>
      </div>
    }
    </>

  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
  );
