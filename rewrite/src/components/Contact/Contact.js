// this component will display a form to contact me as well as my info

import React from 'react';

export const Contact = () => {
  return (
    <div className="contact">
      <h3 className='contact__header'>Email Address</h3>
      <a href="mailto:stefanmartin.rpi@gmail.com">stefanmartin.rpi@gmail.com</a>
      <h3 className='contact__header'>LinkedIn</h3>
      <a href="https://www.linkedin.com/in/st%C3%A9fan-martin-687373188/" target="_blank">LinkedIn Profile</a>
      <h3 className='contact__header'>GitHub</h3>
      <a href="https://github.com/martin-stefan" target="_blank">GitHub Profile</a>
    </div>
  );
}

