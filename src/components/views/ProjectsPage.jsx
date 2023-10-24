import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Project from '../Project';
import PictureOne from '../../assets/photos/project_item_photos/mockups/audiowave_project_image.jpg';
import PictureTwo from '../../assets/photos/project_item_photos/mockups/portfolio2020_project_image.jpg';
import PictureThree from '../../assets/photos/project_item_photos/mockups/applystartapp_project_image.jpg';
import PictureFour from '../../assets/photos/project_item_photos/mockups/quizgame_project_image.jpg';
import PictureFive from '../../assets/photos/project_item_photos/mockups/portfolio2023_project_image.jpg';

function ProjectsPage() {

  const currentYear = new Date().getFullYear();

  const customBlurrerStyling__red01 = 'backgroundRedden01';
  // const customBlurrerStyling__yellow01 = 'backgroundYellow01';
  const pulserDarken = 'pulserDarken';

  return (
    <div className='projectsPage'>
      <Parallax pages={3}>

        <ParallaxLayer
            speed={2}>
            <div className="projectsPage__containerOne">
                <h1 className="projectsPage__heading-01 text-butlerstencil">Projects</h1>
            </div>
        </ParallaxLayer>


        <ParallaxLayer
            speed={1}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_left projectsPage__containerProjects_first">
              <Project 
                picture={PictureFive}
                title="Portfolio 2023"
                description="Designed the app in Figma and built it using React.js while also making use of public libraries and package via NPM. This was made in preperation for Co-Op Applications and in a total rush."
                relevant="React.js, JavaScript, HTML, CSS/SCSS, Node.js, Illustrator, Photoshop"
                link01="https://github.com/Dewan-Mohammad-Tasinuzzaman/portfolio_app_2023" linkName01="Github"
                link02="" linkName02=""
              />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            speed={1.5}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_right projectsPage__containerProjects_second">
              <Project 
                picture={PictureOne}
                title="Music Player"
                description="This app was created as the final project for the university's web development course, with a team of six. I took the responsibility of designing and building the entire front-end of the app, making components etc. where needed."
                relevant="Vue.js , HTML, CSS/SCSS, JavaScript, Node.js, MongoDB, Figma"
                link01="https://github.com/Dewan-Mohammad-Tasinuzzaman/Music_Player_App_Audiowave" linkName01="Github"
                link02="" linkName02="" 
              />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            speed={2}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_left projectsPage__containerProjects_third">
              <Project 
                picture={PictureThree}
                title="Applystart"
                description="Worked with a team of 3 and built the entire UI//UX for the React-App and Landing Page. Configured and customized UI/UX templates using React.js to fit Applystart's needs."
                relevant="React.js, Node.js, JavaScript, HTML, CSS/SCSS, Adobe Illustrator, Adobe Photoshop"
                link01="https://applystart.com" linkName01="applystart.com"
                link02="" linkName02=""
                customBlurrerStyling={customBlurrerStyling__red01}
                pulserDarken={pulserDarken}                
              />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            speed={2.5}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_right projectsPage__containerProjects_fourth">
              <Project
                picture={PictureTwo}
                title="Portfolio 2020"
                description="This was the very first page I designed for myself in Photoshop and coded up so I can put eveything I had learned at the time to the test."
                relevant="Vue.js , HTML, CSS/SCSS, JavaScript, Node.js, Photoshop, Illustrator"
                link01="https://github.com/Dewan-Mohammad-Tasinuzzaman/Portfolio_Website_01" linkName01="Github"
                link02="https://dewan-mohammad-tasinuzzaman.github.io/Portfolio_Website_01/" linkName02="Live" 
              />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            
            speed={3}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_left projectsPage__containerProjects_fifth">
              <Project 
                picture={PictureFour}
                title="Quiz Game"
                description="Worked with a team of 4 and designed the UI for a JavaFX application as part of the University's Software Development Course. This project had a functioning Client and Server."
                relevant="Java, JavaFX/FXML, CSS"
                link01="https://github.com/PreeminentLexa/ssdi_final" linkName01="Github"
                link02="" linkName02=""
              />
            </div>
        </ParallaxLayer>



        <ParallaxLayer
            offset={2}
            speed={4}
            >
            <div className="projectsPage__containerOne">
                <h1 className="projectsPage__heading-end text-butlerstencil">&copy; Dewan Mohammad Tasinuzzaman {currentYear}</h1>
            </div>
        </ParallaxLayer>


      </Parallax>
    </div>
  );
}

export default ProjectsPage;