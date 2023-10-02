import React, {useRef, useEffect} from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import ImageOne from '../../assets/photos/about_photo-desktop.jpg';
import Resume from '../../assets/files/Resume_Dewan_Mohammad_Tasinuzzaman.pdf';

function About() {


    const imageContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        if (imageContainerRef.current) {
            const scrollTop = window.scrollY;
            // Adjust the vertical position of the image based on the scroll position
            imageContainerRef.current.style.transform = `translateY(-${scrollTop * 0.3}px)`;
        }
        };

        // Attach the scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener when the component unmounts
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className="about">

        <Parallax pages={2}>

            <ParallaxLayer 
                speed={0.5}>
                {/* First picture */}
                <div className="about__imageOne" ref={imageContainerRef}>
                    <img src={ImageOne} alt="Dewan" className="about__imageOne_img" />
                </div>
            </ParallaxLayer>


            <ParallaxLayer
                speed={1}>
                <div className="about__containerOne">
                    <h1 className="about__heading-01 text-butlerstencil">About</h1>
                </div>

                <div className="about__intro">
                    <p className="about__intro_text">I’m currently an international student from Bangladesh studying Computer<br/>Science at Ontario Tech University, in my 4th Year.<br/>I love making cool things!</p>
                    <p className="about__intro_message">Actively looking for Winter and Summer 2024 Co-Op/Internships.</p>
                    
                    <div className="btn-box about__intro_btnBox">
                        <a href={Resume} target="_blank" className="text-butler btn-primary about__intro_btnBox-btn" rel="noreferrer">Resume</a>
                    </div>
                </div>
            </ParallaxLayer>

            <ParallaxLayer
                speed={1}
                offset={1}>
                <div className="about__containerOne">
                    <h1 className="about__heading-end text-butlerstencil">Dewan Mohammad Tasinuzzaman 2023</h1>
                </div>
            </ParallaxLayer>

        </Parallax>

    </div>
  );
}

export default About;