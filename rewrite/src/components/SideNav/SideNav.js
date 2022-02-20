import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sidenav link">
      <Link to="/" className="sidenav__link">Home</Link>
      <Link to="/experience" className="sidenav__link">Skills and Experience</Link>
      <Link to="/projects" className="sidenav__link">Projects</Link>
      <Link to="/courses" className="sidenav__link">Courses</Link>
      <Link to="/contact" className="sidenav__link">Contact</Link>

    </div>
  )
}

export default SideNav;