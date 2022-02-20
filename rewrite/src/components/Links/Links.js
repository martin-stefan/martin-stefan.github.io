// this components will display my important links

import React from 'react';
import '../../sass/main.scss';
import gitLogo from '../../images/github.png';


export const Links = () => {
  return (
    <div className="Links">
      <a href="https://www.linkedin.com/in/st%C3%A9fan-martin-687373188/" target="_blank">
        LinkedIn
      </a>


      <a href="https://github.com/martin-stefan" target="_blank">
        {/* <img src={gitLogo} alt="Github logo"/> */}
        Github
      </a>

    </div>
  );
}

export default Links;