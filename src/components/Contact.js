import React from "react";
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Contact = () => {
  return (
    <section id="contact" className="section contact">
      <div className="contact__container">
        <h3 className="contact__header">Contact</h3>
        <div className="contact__content">
          <div className="contact__left">
            <div>
              <p id="email">Email:&nbsp;</p>
              <a href="mailto:stefanmartin.rpi@gmail.com">stefanmartin.rpi@gmail.com</a>
            </div>
            <a href="https://github.com/martin-stefan" target="_new" className="contact__link">
              <span>GitHub </span>
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/st%C3%A9fan-martin-687373188/" target="_new" className="contact__link">
              <span>LinkedIn</span>
              <BsLinkedin/>
            </a>
          </div>

          <div className="contact__right">
            <label htmlFor="name">Name</label>
            <br />
            <input type="text" name="name" id="name" placeholder="Name"/>
            <br />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <textarea name="message" id="message" rows={4} placeholder="Message"/>
            <br />
            <button id="send">Send Message</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;