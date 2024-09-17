import React from "react";

const Work = () => {
  return (
    <div id="section5" className="frame work">
      <h1 className="frame__title">Work Experience</h1>
      <div className="work__items">
        <div className="work__card">
          <h5>Software Engineering Consultant</h5>
          <div className="work__header u-margin-top-small">
            <p>Bai Engineers</p>
            <p>May 2023 - Current</p>
          </div>
          <p className="u-margin-top-med">
            Coninued working on wasterwater management application. Implemented 7+ 
            new features and enhanced 10+ existing ones based on client feedback. 
          </p>
        </div>
        <div className="work__card">
          <h5>Software Engineering Intern</h5>
          <div className="work__header u-margin-top-small">
            <p>Bai Engineers</p>
            <p>January 2022 - August 2022</p>
          </div>
          <p className="u-margin-top-med">
            Worked as a full stack developer to create an application that overlays asset management onto an
            interactive map of sewer systems that is being used by three communities across the U.S.
          </p>
        </div>
        <div className="work__card">
          <h5>Computer Science Instructor</h5>
          <div className="work__header u-margin-top-small">
            <p>Juni Learning</p>
            <p>June 2020 - Current</p>
          </div>
          <p className="u-margin-top-med">
            Teach courses in Python and JavaScript in a 1 on 1 format to more than 10 students during a minimum
            of a three-month period each.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Work;