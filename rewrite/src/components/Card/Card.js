// this component is to create an info card for jobs and projects

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../sass/main.scss';

export const Card = (props) => {

  return (
    <Link to={`/projects/${props.title}`} className='card link'>
      <div className='card__content'>
        <div className='card__content--header'>
          <h3 className='card__content--title'>{props.title}</h3>
          <h3 className='card__content--comp'>{props.company}</h3>
        </div>
      </div>
    </Link>
  );
}

export default Card;