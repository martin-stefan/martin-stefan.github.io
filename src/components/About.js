import React from "react";

const About = () => {
  return (
    <section className="section" id="about">
      <h2>About</h2>
        <div className="about">
          <div className="cards">
            <div id="who" className="card">
              <h5>Who</h5>
              <p>I am a senior studying Information Technology and Web Science at Rensselaer Polytechnic Institude.</p>
            </div>
            <div id="what" className="card">
              <h5>What</h5>
              <p>Over the past four years, I have spent my time learning about programming, application development, user experience, and project management.</p>
            </div>
            <div id="why"className="card">
              <h5>Why</h5>
              <p>I am passionate about learning. My goal is learn as much as I can and use that knowledge to make a difference.</p>
            </div>
          </div>
          <a href="#work" className="lightBtn">What's the outcome?</a>
        </div>
    </section>
  );
}

export default About;