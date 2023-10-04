import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Project from '../Project';
import PictureOne from '../../assets/photos/project_item_photos/mockups/audiowave_project_image.jpg';
import PictureTwo from '../../assets/photos/project_item_photos/mockups/portfolio2020_project_image.jpg';
import PictureThree from '../../assets/photos/project_item_photos/mockups/applystartapp_project_image.jpg';
import PictureFour from '../../assets/photos/project_item_photos/mockups/quizgame_project_image.jpg';
import PictureFive from '../../assets/photos/project_item_photos/mockups/notesapp_project_image.jpg';

function ProjectsPage() {

  const currentYear = new Date().getFullYear();

  const customBlurrerStyling__red01 = 'backgroundRedden01';
  const customBlurrerStyling__yellow01 = 'backgroundYellow01';
  const pulserDarken = 'pulserDarken';

  return (
    <div className='projectsPage'>
      <Parallax pages={3}>

        <ParallaxLayer
            speed={2}>
            <div className="projectsPage__containerOne">
                <h1 className="projectsPage__heading-01 text-butlerstencil">Projects...</h1>
            </div>
        </ParallaxLayer>


        <ParallaxLayer
            speed={1}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_left projectsPage__containerProjects_first">
              <Project 
                picture={PictureOne}
                title="Music Player"
                description="This app was created as the final project for the university's web development course, with a team of six. I took the responsibility of designing and building the entire front-end of the app, making components etc. where needed."
                relevant="Vue.js , HTML, CSS/SCSS, JavaScript, Node.js, Figma"
                link01="https://github.com/Dewan-Mohammad-Tasinuzzaman/Music_Player_App_Audiowave" linkName01="Github"
                link02="" linkName02=""
              />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            speed={1.5}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_right projectsPage__containerProjects_second">
              <Project 
                picture={PictureThree}
                title="Applystart"
                description="Worked with a team of 4 and built the entire UI for the React-App and Landing Page. Also configured and customized UI/UX templates using React.js to fit Applystart's needs."
                relevant="React.js, Node.js, JavaScript, HTML, CSS/SCSS, Adobe Illustrator, Adobe Photoshop"
                link01="https://applystart.com" linkName01="applystart.com"
                link02="" linkName02=""
                customBlurrerStyling={customBlurrerStyling__red01}
                pulserDarken={pulserDarken} />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            speed={2}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_left projectsPage__containerProjects_third">
              <Project                 
                picture={PictureTwo}
                title="Portfolio 2020"
                description="This was the very first page I designed for myself in Photoshop and coded up so I can put eveything I had learned at the time to the test."
                relevant="Vue.js , HTML, CSS/SCSS, JavaScript, Node.js, Photoshop, Illustrator"
                link01="https://github.com/Dewan-Mohammad-Tasinuzzaman/Portfolio_Website_01" linkName01="Github"
                link02="" linkName02="" />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            speed={2.5}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_right projectsPage__containerProjects_fourth">
              <Project
                picture={PictureFour}
                title="Quiz Game"
                description="Worked with a team of 4 and designed the UI for a JavaFX application as part of the University's Software Development Course"
                relevant="Java, JavaFX/FXML, CSS"
                link01="https://github.com/PreeminentLexa/ssdi_final" linkName01="Github"
                link02="" linkName02=""
              />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            
            speed={3}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_left projectsPage__containerProjects_fifth">
              <Project 
                picture={PictureFive}
                title="Notes App"
                description="Created a simple Notes Web-App with the most basic functionalities using React.js. This was done as part of a Udemy Web Development Bootcamp."
                relevant="React.js, JavaScript, HTML, CSS, Node.js"
                link01="https://github.com/Dewan-Mohammad-Tasinuzzaman/Simple-Notes-App" linkName01="Github"
                link02="" linkName02=""
                customBlurrerStyling={customBlurrerStyling__yellow01}
                pulserDarken={pulserDarken} />
            </div>
        </ParallaxLayer>



        <ParallaxLayer
            offset={2}
            speed={2.5}
            >
            <div className="about__containerOne">
                <h1 className="about__heading-end text-butlerstencil">Dewan Mohammad Tasinuzzaman {currentYear}</h1>
            </div>
        </ParallaxLayer>


      </Parallax>
    </div>
  );
}

export default ProjectsPage;