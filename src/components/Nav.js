import React from "react";

const Nav = (props) => {
  const handleMove = async (position) => {
    console.log("ran")
    window.scrollTo(0, window.innerHeight * position)
    props.handleScroll(position)
  }

  return (
    <nav>
      <a onClick={() => handleMove(1)} className={props.active === "about" ? "nav__item nav__item--active" : "nav__item"}>About</a>
      <a onClick={() => handleMove(2)} className={props.active === "work" ? "nav__item nav__item--active" : "nav__item"}>Work</a>
      <a onClick={() => handleMove(3)} className={props.active === "projects" ? "nav__item nav__item--active" : "nav__item"}>Projects</a>
      <a onClick={() => handleMove(4)} className={props.active === "contact" ? "nav__item nav__item--active" : "nav__item"}>Contact</a>
    </nav>
  );
}

export default Nav;