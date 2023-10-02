import React, {} from 'react';
import '../../styles/main.scss';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ImageOne from '../../assets/photos/about_photo-desktop.jpg';

function About() {
  return (
    <div className="about">
        {/* First picture */}
        <img src={ImageOne} alt="" className="about__imageOne" />

        <h1 className="about__heading-01">About</h1>
    </div>
  );
}

export default About;
