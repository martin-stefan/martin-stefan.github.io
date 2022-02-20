import React, { useState } from "react";

const Course = props => {

  return (
    <div className="course" onClick={() => props.clickHandler(props.item)}>
      <div className="course__header">
        <h4 className={props.open == props.item ?  "course__title--show":"course__title"}>{ props.title }</h4>
        <div className="course__add">
          <p className="course__open">{props.open == props.item ? "-": "+"}</p>
        </div>
      </div>
      <div className={props.open == props.item ? "content show": "content"}>
        <p className="course__time">{ props.time }</p>
        <p className="course__desc">{ props.desc }</p>
      </div>
    </div>
  );
}

export default Course;