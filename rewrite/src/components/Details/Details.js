import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import images from '../../images/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCircleArrowRight, faCircleArrowLeft  } from '@fortawesome/free-solid-svg-icons'

library.add(faCircleArrowRight, faCircleArrowLeft);

const Details = props => {


  let [curImg, setCurImg] = useState(0);
  let { projectTitle } = useParams();

  const handleImgChange = (dir) => {
    const imgLen = images[projectTitle].length;
    if (curImg + dir > imgLen -1) {
      setCurImg(0);
    } else if (curImg + dir < 0) {
      setCurImg(imgLen - 1);
    } else {
      setCurImg(curImg + dir);
    }
  }

  return (
    <div>

      <Link to={"/projects"} className='link'>Return</Link>

      <div className="project__info">
        <div className="project__info--header">
          <h3 className="project__info--title">{props.projectData[projectTitle].title}</h3>
          <p className="projectInfo__desc">{props.projectData[projectTitle].time}</p>
        </div>

        <p className="projectInfo__desc">{props.projectData[projectTitle].desc}</p>
      </div>

      {images[projectTitle].length > 0 ? 
        <div className="imgCarousel">
        
          <button className="imageScroll" onClick={() => handleImgChange(-1)}>
            <FontAwesomeIcon icon="circle-arrow-left" className='imageScroll__icon'/>
          </button>
          <img src={images[projectTitle][curImg]} alt="Project image" className='previewImg'/>
          <button className="imageScroll" onClick={() => handleImgChange(1)}>
            <FontAwesomeIcon icon="circle-arrow-right" className='imageScroll__icon'/>
          </button>
        </div> 
        : <p className='imgMessage'>No images yet</p>}
      
    </div>
  )
}

export default Details;