// this component is to be a universal button throughtout the application

import React from 'react';
import '../../sass/main.scss';

export const Button = (props) => {
  return (
    <div className={`${props.class} button`}>
      <h3>{props.message}</h3>
    </div>
  );
  
}

export default Button;