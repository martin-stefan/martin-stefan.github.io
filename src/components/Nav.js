import React from "react";

const Nav = (props) => {
 
  return (
    <nav>
      <button onClick={() => props.handleMove(1)} className={props.active === "about" ? "nav__item nav__item--active" : "nav__item"}>About</button>
      <button onClick={() => props.handleMove(2)} className={props.active === "work" ? "nav__item nav__item--active" : "nav__item"}>Work</button>
      <button onClick={() => props.handleMove(3)} className={props.active === "projects" ? "nav__item nav__item--active" : "nav__item"}>Projects</button>
      <button onClick={() => props.handleMove(4)} className={props.active === "contact" ? "nav__item nav__item--active" : "nav__item"}>Contact</button>
    </nav>
  );
}

export default Nav;