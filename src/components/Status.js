import React from "react";
import { BsBoxArrowUpRight } from "react-icons/bs";


const Status = () => {
  return (
    <div id="section7" className="frame status">
      <div className="status__item">
        <p className="status__title">Job Status:</p>
        <p>Looking for work...</p>
      </div>
      <div className="status__item">
        <p className="status__title">Currently reading:</p>
        <p>System Design Interview - Alex Xu</p>
        <p className="u-margin-top-small">60%</p>
        <div className="status__progress"></div>
      </div>
      <div className="status__item">
        <p className="status__title">Inspiration: </p>
        <a href="https://codepen.io/Podgro/pen/oNOKYqr" target="_new" className="link">
          <p>Glassmorphism & Background <BsBoxArrowUpRight /></p>
        </a>
      </div>
    </div>
  )
}

export default Status;