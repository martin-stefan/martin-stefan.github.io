import React, { useState, useEffect } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom'; 
import Card from '../../components/Card/Card';
import Details from '../../components/Details/Details';

const Projects = (props) => {

  const projects = {
    "DeFazio's": {
      title: "DeFazio's",
      company: "DeFazio's/RPI",
      time: "August 2021 - December 2021",
      desc: "Worked as the lead developer for a team of five creating a mobile application for a \
                    pizzeria in Troy, NY to give customers the ability to view the menu, \
                    make a reservation, cater, and more.",
    },

    "Pizzi": {
      title: "Pizzi",
      company: "RPI",
      time: "August 2020 - December 2020",
      desc: "Co-led a team of five individuals to develop a social media application which focused on creating \
             a simplistic method of sharing and connecting with others through music.",
    },

    "Spects": {
      title: "Spects",
      company: "Personal",
      time: "June 2021 - Present",
      desc: "Application which aims to provide a rewarding experience in completing and \
            managing tasks using a visually focused design and currency system built \
            with React, Firebase, and Node.",
    },
    "The Loop": {
      title: "The Loop",
      company: "RPI",
      time: "August 2021 - December 2019",
      desc: "Application designed to display all events around a college campus. \
            Served as an introduction to the software development process as well as \
            web techonologies including PHP, MySQL, and JavaScript.",
    },
  }

  let { path, url } = useRouteMatch()
  let content = "";
  const keys = Object.keys(projects);
  console.log(keys)

    content = 
      <section className="cardDisplay">
        <section className="cards">
          <article className="cards__list">
            {
              keys.map(el => {
                return <Card 
                  title={projects[el].title}
                  company={projects[el].company}
                  time={projects[el].time}
                  desc={projects[el].desc}
                />
              })
            }
          </article>
        </section>
      </section>

  return (
    <div id="projects">
      <Switch>
        <Route exact path={path}>
          {content}
        </Route>
        <Route path={`${path}/:projectTitle`}>
          <Details projectData={projects}/>
        </Route>
      </Switch>
    </div>
  );
}

export default Projects;
