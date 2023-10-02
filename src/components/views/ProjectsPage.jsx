import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Project from '../Project';
import PictureOne from '../../assets/photos/project_item_photos/mockups/audiowave_project_image.jpg';

function ProjectsPage() {

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
                relevant="Vue.js , HTML, CSS/SCSS, JavaScript, Node"
                link01="https://github.com/Dewan-Mohammad-Tasinuzzaman/Music_Player_App_Audiowave" linkName01="Github"
                link02="" linkName02=""
              />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            
            speed={1.5}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_right projectsPage__containerProjects_second">
              <Project />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            
            speed={2}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_left projectsPage__containerProjects_third">
              <Project />
            </div>
        </ParallaxLayer>

        <ParallaxLayer
            
            speed={2.5}
            >
            <div className="projectsPage__containerProjects projectsPage__containerProjects_right projectsPage__containerProjects_fourth">
              <Project />
            </div>
        </ParallaxLayer>


      </Parallax>
    </div>
  );
}

export default ProjectsPage;