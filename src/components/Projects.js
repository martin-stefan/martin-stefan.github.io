import React from "react";

const Projects = () => {
  return (
    <section className="section">

      <h2 id="projects">Projects</h2>

      <div className="projects">
        <button id="prev" className="projects__btn">&#8592;</button>
        <ul className="carousel">
          <li className="carousel__item">
            <div className="item__header">
              <h3>Bai Asset</h3>
              <p>Bai Engineers</p>
              <p>Spring 2022</p>
            </div>
            <div className="item__content">
              <p className="item__desc">
                Worked as a solo developer creating an application that overlays sewer systems onto a map that is used
                in three different communities for asset management. The application was built using Mapbox GL-JS
                and parses GeoJSON data to output a layered system of information that can be embedded with further
                documentation such as images, pdf’s, and CCTV video recordings.
              </p>
              <div className="images">
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
              </div>
            </div>
          </li>
          <li className="carousel__item">
            <div className="item__header">
              <h3>Virtual Order</h3>
              <p>IT & Web Science Capstone</p>
              <p>Fall 2022</p>
            </div>
            <div className="item__content">
              <p className="item__desc">
                Worked with Johnson & Johnson Vision to develop an application that enables sales representatives to
                control the flow of overstocked supply of contact lens kits between eye care physicians. The application
                is projected to decrease the number of kits that expire before being used as well as increase the number
                of kit sales.
              </p>
              <div className="images">
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
              </div>
            </div>
          </li>
          <li className="carousel__item">
            <div className="item__header">
              <h3>Plateable</h3>
              <p>Software Design & Documentation</p>
              <p>Fall 2022</p>
            </div>
            <div className="item__content">
              <p className="item__desc">
                Lead a team of five students to develop an application that provides an easy-to-use platform for users to
                keep track of items within their pantry, create a grocery lists, and search for recipes based on the
                ingredients that they have readily available.
              </p>
              <div className="images">
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
              </div>
            </div>
          </li>
          <li className="carousel__item">
            <div className="item__header">
              <p>Portfolio</p>
              <h3>Modern Design Methodologies</h3>
              <p>Fall 2022</p>
            </div>
            <div className="item__content">
              <p className="item__desc">Semester-long research project oriented around understanding modern best practices 
                for designing user intuitive applications. Topics covered within this research included visual hierarchy, 
                typography, color design, and much more. The research resulted in a methodology focused design of a 
                personal portfolio website.
              </p>
              <div className="images">
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
                <img src="#" alt="image1" srcSet="#" />
              </div>
            </div>
          </li>
        </ul>
        <button id="next" className="projects__btn">&#8594;</button>
      </div>
      
      <div className="indicator">
        <input type="radio" className="indicator__item" />
        <input type="radio" className="indicator__item" />
        <input type="radio" className="indicator__item" />
        <input type="radio" className="indicator__item" />
      </div>
    </section>
  );
}

export default Projects;