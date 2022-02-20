import React from "react";
import Skills from '../Skills/Skills';

const Experience = () => {

  const jobs = [
    {
      title: "Software Engineering Intern",
      company: "Bai Engineers", 
      time: "January 2022 - May 2022",
      desc: "Built a web application which dynamically displays the geological structure of \
            wastewater systems onto an interactive map."
    },
    {
      title: "Computer Science Instructor",
      company: "Juni Learning", 
      time: "June 2020 - Present",
      desc: "Teach courses in Python to learn the basics of programming as well as JavaScript to serve as an \
      introduction to web development including topics ranging from the box model to CRUD and SQL."
    },
    {
      title: "Stock Worker",
      company: "Haywards Ice Cream Shop", 
      time: "June 2019 - May 2020",
      desc: ""
    },
    {
      title: "Birthday Party Host",
      company: "Launch Trampoline Park", 
      time: "June 2017 - July 2019",
      desc: ""
    }
  ]
  return (
    <div className="experience">

      <h2 className="experience__title">Work Experience</h2>
      <div className="work">

        {
          jobs.map((el, i) => (
            <div className="work__item">
              <p className="work__item--title">{el.title}</p>
              <p className="work__item--company">{el.company}</p>
              <p className="work__item--time">{el.time}</p>
              {el.desc.length > 0 ? <p className="work__item--desc">{el.desc}</p> : ''}
            </div>
          ))
        }
      </div>
      <Skills/>
    </div>
  )
}

export default Experience;