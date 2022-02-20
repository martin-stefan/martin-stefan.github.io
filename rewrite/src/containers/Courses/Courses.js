import React, { useState } from "react";
import Course from "../../components/Course/Course";


const Courses = () => {

  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  

  const data = [
    {
      title: "Managing IT Resources",
      desc: "Provides an introduction to fundamental concepts of project management. Inclues information systems, development \
            life cycle, project management, and applies these concepts to IT.",
      time: "Fall 2021"
    }, 
    {
      title: "Introduction to Algorithms",
      desc: "Mathematical techniques for designing and analyzing algorithm efficiency. Algorithm design \
             includes dynamic programming, greedy algorithms, divide and conquer, and more",
      time: "Fall 2021"
    },
    {
      title: "Data Structures",
      desc: "Learn programming concepts such as data structures, order notation, proofs, and basic algorithms",
      time: "Spring 2020"
    },
    {
      title: "Foundations of Computer Science",
      desc: "Introduces mathematical tools and theories for computer science. Includes topics such as \
            probability, Turing Machines, set theory, and computational complexity.",
      time: "Fall 2020"
    },

    {
      title: "Web Science Systems Develeopment",
      desc: "Hands-on classroom experience focusing on modern web design topics such as API's & \
      authentication/authorization using tools including AngularJS, React, Express, and MongoDB. ",
      time: "Spring 2021"
    },
    {
      title: "Web Systems Development",
      desc: "Involves studying the methods of dynamic information on the World Wide Web and learning about the \
            installation, configuration, and managament of Web servers.",
      time: "Fall 2020"
    },
    {
      title: "Computer Science 1",
      desc: "Introduction to basic computer science topics using top-down design to solve complex problems.",
      time: "Fall 2019"
    },

  ]
  return (
    <div className="courses">
      {
        data.map((el, i) => (
          <Course title={el.title} desc={el.desc} time={el.time} clickHandler={toggle} open={selected} item={i}/>
        ))
      }
    </div>
  );
}

export default Courses;