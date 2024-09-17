import React, { useState } from "react";

const projects = [
    {
      name: "Bai Asset",
      organization: "Bai Engineers",
      date: "Spring 2022 - Current",
      desc: "Worked as a solo developer creating an application that overlays sewer systems onto a map that is used in three different communities for asset management. The application was built using Mapbox GL-JS and parses GeoJSON data to output a layered system of information that can be embedded with further documentation such as images, pdf’s, and CCTV video recordings.",
      tech: ["React.js", "Node.js", "Mapbox GL JS", "AWS"]
    },
    {
      name: "Virtual Order",
      organization: "IT & Web Science Capstone",
      date: "Fall 2022",
      desc: "Worked with Johnson & Johnson Vision to develop an application that enables sales representatives to control the flow of overstocked supply of contact lens kits between eye care physicians. The application is projected to decrease the number of kits that expire before being used as well as increase the number of kit sales.",
      tech: ["React Native", "Node.js", "Express.js", "PostgreSQL"]
    },
    {
      name: "Plateable",
      organization: "Software Design & Documentation",
      date: "Fall 2022",
      desc: "Lead a team of five students to develop an application that provides an easy-to-use platform for users to keep track of items within their pantry, create a grocery lists, and search for recipes based on the ingredients that they have readily available.",
      tech: ["TypeScript", "React.js", "Node.js", "Firebase"]
    },
  ]

const Projects = () => {
  const [curItem, setCurItem] = useState(0)
  
  return (
    <div id="section4" className="frame">
      <h1>Projects</h1>
      <div className="projects">
        <ul className="carousel">   
          {
            projects.map((el, i) => {
              return (
                <li key={i} 
                  className={curItem === i ? "carousel__item--active" : "carousel__item"}
                >
                  <div className="item__header">
                    <h3>{el.name}</h3>
                    <div className="header__details">
                      <p>{el.organization}</p>
                      <p>{el.date}</p>
                    </div>
                  </div>
                  <div className="item__content">
                    <p className="item__desc">{el.desc}</p>
                    <ul className="skills__list">
                      { 
                        el.tech.map( t => (
                          <li key={t} className="skills__item">{ <p>{ t }</p> }</li>
                        ))
                      }
                    </ul>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className="projects__btns">
        { projects.map((el, i) => (
          <button 
            key={i}
            className={curItem === i ? "projects__btn--active" : "projects__btn"}
            onClick={() => setCurItem(i)}
          >
          </button>
        ))}
      </div>      
    </div>
  );
}

export default Projects;