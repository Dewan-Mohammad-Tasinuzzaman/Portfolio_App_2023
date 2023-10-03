import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  // State to keep track of the active link
  const [activeLink, setActiveLink] = useState('');

  // Function to handle link click
  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
  };

  return (
    <nav className='navigation'>
      <ul className='navigation__list'>
        <li className='navigation__list_items'>
          <Link
            title='Home'
            className={`navigation__list_items-links navigation__list_items-links--1 ${activeLink === '/' ? 'nav_active_page' : ''}`}
            to="/"
            onClick={() => handleLinkClick('/')}
          >
            <svg className='nav_icons home_icon' width="36" height="50" viewBox="0 0 32 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 13.0598L15.9316 1.44629L30.8633 13.0598V31.3096C30.8633 32.1896 30.5137 33.0336 29.8914 33.6559C29.2692 34.2781 28.4252 34.6277 27.5451 34.6277H4.31814C3.43812 34.6277 2.59413 34.2781 1.97186 33.6559C1.34959 33.0336 1 32.1896 1 31.3096V13.0598Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M10.9544 34.6278V18.0371H20.9088V34.6278" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Link>
        </li>
        <li className='navigation__list_items'>
          <Link
            title='About'
            className={`navigation__list_items-links navigation__list_items-links--2 ${activeLink === '/about' ? 'nav_active_page' : ''}`}
            to="/about"
            onClick={() => handleLinkClick('/about')}
          >
            <svg className='nav_icons about_icon' width="36" height="50" viewBox="0 0 37 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M35.0945 38.5157V34.3473C35.0945 32.1362 34.2162 30.0157 32.6527 28.4522C31.0893 26.8888 28.9688 26.0104 26.7577 26.0104H10.084C7.87296 26.0104 5.75245 26.8888 4.18899 28.4522C2.62553 30.0157 1.74719 32.1362 1.74719 34.3473V38.5157" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M18.4209 17.6737C23.0252 17.6737 26.7577 13.9411 26.7577 9.33684C26.7577 4.73253 23.0252 1 18.4209 1C13.8166 1 10.0841 4.73253 10.0841 9.33684C10.0841 13.9411 13.8166 17.6737 18.4209 17.6737Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Link>
        </li>
        <li className='navigation__list_items'>
          <Link
            title='Projects'
            className={`navigation__list_items-links navigation__list_items-links--3 ${activeLink === '/projects' ? 'nav_active_page' : ''}`}
            to="/projects"
            onClick={() => handleLinkClick('/projects')}
          >
            <svg className='nav_icons projects_icon' width="36" height="50" viewBox="0 0 36 33" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M31.0631 7.78787H4.51794C2.68538 7.78787 1.1998 9.27346 1.1998 11.106V27.6967C1.1998 29.5293 2.68538 31.0149 4.51794 31.0149H31.0631C32.8957 31.0149 34.3812 29.5293 34.3812 27.6967V11.106C34.3812 9.27346 32.8957 7.78787 31.0631 7.78787Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M24.4268 31.0148V4.46963C24.4268 3.58961 24.0772 2.74562 23.4549 2.12335C22.8326 1.50108 21.9887 1.15149 21.1086 1.15149H14.4723C13.5923 1.15149 12.7483 1.50108 12.1261 2.12335C11.5038 2.74562 11.1542 3.58961 11.1542 4.46963V31.0148" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Link>
        </li>
        <li className='navigation__list_items'>
          <Link
            title='Contacts'
            className={`navigation__list_items-links navigation__list_items-links--4 ${activeLink === '/contacts' ? 'nav_active_page' : ''}`}
            to="/contacts"
            onClick={() => handleLinkClick('/contacts')}
          >
            <svg className='nav_icons contact_icon' width="36" height="50" viewBox="0 0 36 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.98744 1.85693H31.6653C33.4994 1.85693 35.0001 3.35756 35.0001 5.19167V25.2001C35.0001 27.0342 33.4994 28.5348 31.6653 28.5348H4.98744C3.15334 28.5348 1.65271 27.0342 1.65271 25.2001V5.19167C1.65271 3.35756 3.15334 1.85693 4.98744 1.85693Z" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M34.9997 5.19159L18.3261 16.8632L1.6524 5.19159" stroke="#7B7B7B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
