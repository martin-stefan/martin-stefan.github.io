import React from "react";
import { BsGithub, BsLinkedin, BsEnvelopeFill } from 'react-icons/bs'

const Contact = () => {
  return (
    <div id="section1" className="frame">
      <h1>Contact</h1>
      <div className="contact__links">
        <a href="mailto:stefanmartin.rpi@gmail.com" target="_new" className="icon contact__item">
          <BsEnvelopeFill />
          <p className="u-normal-font">stefanmartin.rpi@gmail.com</p>
        </a>
        <a href="https://www.linkedin.com/in/st%C3%A9fan-martin-687373188/" target="_new" className="icon contact__item">
          <BsLinkedin/>
          <p className="u-normal-font">LinkedIn</p>
        </a>
        <a href="https://github.com/martin-stefan" target="_new" className="icon contact__item">
          <BsGithub />
          <p className="u-normal-font">GitHub</p>
        </a>
      </div>
    </div>
  )
}

export default Contact;