import React from "react";

const Nav = () => {
  return (
    <nav> 
      <a href="#home">Home</a>
      <span className="ellipses">&#8230;</span>
      <a href="#about">About</a>
      <span className="ellipses">&#8230;</span>
      <a href="#work">Work</a>
      <span className="ellipses">&#8230;</span>
      <a href="#projects">Projects</a>
      <span className="ellipses">&#8230;</span>
      <a href="#contact">Contact</a>
    </nav>
  );
}

export default Nav;