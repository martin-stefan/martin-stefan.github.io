import React from "react";

const About = props => {
  return (
    <section className="section" id="about">
      <h2>About</h2>
        <div className="about">
          <div className="cards">
            <div id="who" className="card">
              <h5>Who</h5>
              <p className="u-margin-top-med">I am a senior studying Information Technology and Web Science at Rensselaer Polytechnic Institude.</p>
            </div>
            <div id="what" className="card">
              <h5>What</h5>
              <p className="u-margin-top-med">Over the past four years, I have spent my time learning about programming, application development, user experience, and project management.</p>
            </div>
            <div id="why"className="card">
              <h5>Why</h5>
              <p className="u-margin-top-med">I am passionate about learning. My goal is learn as much as I can and use that knowledge to do something important.</p>
            </div>
          </div>
          <button className="lightBtn" id="aboutBtn" onClick={() => props.handleMove(2)}>What's the outcome?</button>
        </div>
    </section>
  );
}

export default About;