import React from 'react';

function Project(props) {

  return (
    <div className='project'>
        <div className="project__picturebox">
          <img src={props.picture} alt="visual" className="project__picturebox_picture" />
        </div>

        <div className="project__pictureBlurrer">
          <h2 className="project__pictureBlurrer_header text-butlerstencil">{props.title}</h2>
        </div>

        <div className="project__detailsContainer">
          <div className="project__details">
            <h2 className="project__details_title text-butlerstencil">{props.title}</h2>
            <p className="project__details_description">{props.description}</p>
            <p className="project__details_relevant">Relevant:&nbsp;{props.relevant}</p>
            <div className="project__details_view">View:&nbsp;
              <a href={props.link01} target='_blank' className='project__details_view-link' rel="noreferrer">{props.linkName01}</a>
              <a href={props.link02} target='_blank' className='project__details_view-link' rel="noreferrer">{props.linkName02}</a>
            </div>
          </div>
        </div>

        
    </div>
  );
}

export default Project;
