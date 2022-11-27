import React from "react";

const Work = () => {
  return (
    <section className="section">
      <h2 id="work">Work</h2>
      
      <div className="work">
        <div className="card">
          <h5>Software Engineering Intern</h5>
          <p>Bai Engineers</p>
          <p>January 2022 - Augusts 2022</p>
          <p>
            Worked as a full stack developer to create an application that overlays asset management onto an
            interactive map of sewer systems that is being used by three communities across the U.S.
          </p>
        </div>
        <div className="card">
          <h5>Computer Science Instructor</h5>
          <p>June 2020 - Current</p>
          <p>
            Teach courses in Python and JavaScript in a 1 on 1 format to more than 10 students during a minimum
            of a three-month period each.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Work;