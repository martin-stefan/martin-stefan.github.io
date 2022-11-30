import React, { useState } from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from 'react-icons/bs'

const Projects = () => {

  const [curItem, setCurItem] = useState(0)

  const handleItemSwitch = (amount) => {
    console.log("ran")
    if (curItem + amount < 0 || curItem + amount > 3) {
      return 
    }
    setCurItem(curItem + amount);
  }


  const projects = [
    {
      key: 0,
      name: "Bai Asset",
      organization: "Bai Engineers",
      date: "Spring 2022",
      desc: "Worked as a solo developer creating an application that overlays sewer systems onto a map that is used\
      in three different communities for asset management. The application was built using Mapbox GL-JS\
      and parses GeoJSON data to output a layered system of information that can be embedded with further\
      documentation such as images, pdf’s, and CCTV video recordings.",
      images: [
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"}
      ]
    },
    {
      key: 1,
      name: "Virtual Order",
      organization: "IT & Web Science Capstone",
      date: "Fall 2022",
      desc: "Worked with Johnson & Johnson Vision to develop an application that enables sales representatives to\
      control the flow of overstocked supply of contact lens kits between eye care physicians. The application\
      is projected to decrease the number of kits that expire before being used as well as increase the number\
      of kit sales.",
      images: [
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"}
      ]
    },
    {
      key: 2,
      name: "Plateable",
      organization: "Software Design & Documentation",
      date: "Fall 2022",
      desc: "Lead a team of five students to develop an application that provides an easy-to-use platform for users to\
      keep track of items within their pantry, create a grocery lists, and search for recipes based on the\
      ingredients that they have readily available.",
      images: [
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"}
      ]
    },
    {
      key: 3,
      name: "Portfolio",
      organization: "Modern Design Methodologies",
      date: "Fall 2022",
      desc: "Semester-long research project oriented around understanding modern best practices \
      for designing user intuitive applications. Topics covered within this research included visual hierarchy, \
      typography, color design, and much more. The research resulted in a methodology focused design of a \
      personal portfolio website.",
      images: [
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"},
        {alt:"", src: "#"}
      ]
    },
  ]

  const activeClasses =  "carousel__item carousel__item--active";
  const leftClasses =  "carousel__item carousel__item--left";
  const rightClasses =  "carousel__item carousel__item--right";

  return (
    <section className="section">

      <h2 id="projects">Projects</h2>

      <div className="projects">
        
        <ul className="carousel">   
          {
            projects.map(el => {
              
              return (
                <li key={el.key} 
                  className={curItem === el.key ? activeClasses : 
                             curItem === el.key + 1 ? leftClasses : 
                             curItem === el.key - 1 ? rightClasses : "carousel__item"}
                >
                  <div className="item__header">
                    <h3>{el.name}</h3>
                    <div>
                      <p>{el.organization}</p>
                      <p>{el.date}</p>
                    </div>
                  </div>
                  <div className="item__content">
                    <p className="item__desc">{el.desc}</p>
                    <div className="images">
                      {el.images.map(img => {
                        <img src={img.src} alt={img.alt} srcSet="#" />
                      })}
                    
                    </div>
                  </div>
                </li>
              )
            })
          }
        </ul>

        <div className="projects__btns">
          <button 
            id="prev" 
            className={curItem === 0 ? "projects__btn--disabled" : "projects__btn"} 
            onClick={() => handleItemSwitch(-1)}
            disabled={curItem === 0 ? true : false}
          >
            <BsArrowLeftCircle/>
          </button>
          <button 
            id="next" 
            className={curItem === 3 ? "projects__btn--disabled" : "projects__btn"} 
            onClick={() => handleItemSwitch(1)}
            disabled={curItem === 3 ? true : false}
          >
            <BsArrowRightCircle/>
          </button>
        </div>
      </div>

      
   
    </section>
  );
}

export default Projects;