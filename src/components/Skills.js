import React from "react";

const Skills = () => {

  const programming = ["React.js", "CSS", "HTML", "JavaScript", "Python", "React Native", "TypeScript", "Node.js", "C", "SQL", "Java", "C++"]
  const dev = ["Figma", "GitHub", "LucidChart", "Firebase", "AWS"]
  
  return (
    <div id="section6" className="frame">
      <h1>Skills</h1>
      <div>
        <p className="u-sub-title">Programming Languages</p>
        <ul className="skills__list">
          { 
            programming.map(el => (
              <li key={el} className="skills__item">
                <p>{el}</p>
              </li>
            ))
          }
        </ul>
      </div>

      <div>
        <p className="u-sub-title">Development Tools</p>
        <ul className="skills__list">
          { dev.map(el => (
              <li key={el} className="skills__item">
                <p>{el}</p>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Skills;