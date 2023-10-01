// Home.jsx

import React, { useRef, useEffect } from 'react';
import '../../styles/main.scss';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedinIn} from '@fortawesome/free-brands-svg-icons';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faFile} from '@fortawesome/free-solid-svg-icons';
import Resume from '../../assets/files/Resume_Dewan_Mohammad_Tasinuzzaman.pdf';
import PointerCircle from '../../assets/svgs/pointer_circle.svg';

function Home() {

  // Reference to the 'pointer' image
  const pointerRef = useRef(null);

  // Function to update the rotation of the 'pointer' image
  const updatePointerRotation = (event) => {
    // Get the position of the 'pointer' image
    const pointerRect = pointerRef.current.getBoundingClientRect();
    const pointerCenterX = pointerRect.left + pointerRect.width / 2;
    const pointerCenterY = pointerRect.top + pointerRect.height / 2;

    // Calculate the angle between the cursor position and the 'pointer' image center
    const angle = Math.atan2(event.clientY - pointerCenterY, event.clientX - pointerCenterX);

    // Rotate the 'pointer' image
    pointerRef.current.style.transform = `rotate(${angle}rad)`;
  };

  // Add event listeners to update the rotation when the mouse moves
  useEffect(() => {
    document.addEventListener('mousemove', updatePointerRotation);
    return () => {
      document.removeEventListener('mousemove', updatePointerRotation);
    };
  }, []);

  return (
    <div className='home'>
      
      {/* Background */}
      <div className="home__backgroundbox z_index_1">
        {/* Triangles */}
        <div className="home__backgroundbox_triangles">
          
        </div>
        {/* Squares */}
        <div className="home__backgroundbox_squares">
          
        </div>
      </div>

      {/* Blur Layer */}
      <div className="home__blurrer z_index_2"></div>

      <div className="home__content z_index_3">

        {/* Text */}
        <div className="home__content_textsBox">
          <p className="home__content_textsBox-intro">I'm</p>
          <h1 className="home__content_textsBox-name text-butlerstencil">DEWAN</h1>
          <h2 className="home__content_textsBox-title">Front-End Developer</h2>
        </div>


        {/* Group of Links */}
        <div className="home__content_linksBox">
          <a href="mailto:zmn.tasin@gmail.com" className="home__content_linksBox-link" title='Email'>
            <FontAwesomeIcon icon={faEnvelope} className="home__content_linksBox-link--icon"></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/tasin-zaman/" target='_blank' rel="noreferrer" className="home__content_linksBox-link" title='LinkedIn'>
            <FontAwesomeIcon icon={faLinkedinIn} className="home__content_linksBox-link--icon"></FontAwesomeIcon>
          </a>
          <a href="https://github.com/Dewan-Mohammad-Tasinuzzaman" target='_blank' rel="noreferrer" className="home__content_linksBox-link" title='Github'>
            <FontAwesomeIcon icon={faGithub} className="home__content_linksBox-link--icon"></FontAwesomeIcon>
          </a>
          <a href={Resume} target='_blank' rel="noreferrer" className="home__content_linksBox-link" title='Resume'>
            <FontAwesomeIcon icon={faFile} className="home__content_linksBox-link--icon"></FontAwesomeIcon>
          </a>
        </div>


        {/* Arrow Pointer (Follows Mouse) */}
        <div className="home__content_pointerCircleBox">
          <img
            id='pointer'
            ref={pointerRef}
            src={PointerCircle}
            alt="Pointer"
            className="home__content_pointerCircleBox-icon"
          />
        </div>

      </div>
      
    </div>
  );
}

export default Home;