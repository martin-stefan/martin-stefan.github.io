// this will be the landing page of the website

import React from 'react';
import '../../sass/main.scss';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="Welcome">
      <div className="intro">
        <div className="intro__main">
          <h1 className="intro__text">Stéfan Martin</h1>
        </div>

        <p className="intro__desc">
          I am a rising senior at Rensselaer Polytechnic Institute pursuing 
          my bachelor's degree in Information Technology and Web Science
          seeking an internship for the Summer of 2022 working as a
          Web Developer, Software Engineer, or Project Manager.
        </p>

        <div className="intro__btn">
          <Link to="/projects" className="intro__btn--link">View My Projects</Link>
        </div>
      </div>
    </div>
  );
}

export default Welcome;