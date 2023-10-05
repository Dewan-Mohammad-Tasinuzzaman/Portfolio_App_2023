import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faInstagramSquare} from '@fortawesome/free-brands-svg-icons';
import {faFacebookSquare} from '@fortawesome/free-brands-svg-icons';
import {faDribbbleSquare} from '@fortawesome/free-brands-svg-icons';

function ContactsPage() {
    
    return (
        <div className="contactsPage">
            <div className="contactsPage__containerOne">
                <div className="contactsPage__containerOne_content">
                    <h1 className="contactsPage__containerOne_content-header text-butlerstencil">~ Reach Out ~</h1>
                    <div className="contactsPage__containerOne_content-linksBox">
                        <a href="mailto:zmn.tasin@gmail.com" className="contactsPage__containerOne_content-linksBox--link" title='Email'>
                            <FontAwesomeIcon icon={faEnvelope} className="contactsPage__containerOne_content-linksBox--link---icon"></FontAwesomeIcon>
                            <p className="contactsPage__containerOne_content-linksBox--link---text">zmn.tasin@gmail.com</p>
                        </a>

                        <div className="contactsPage__containerOne_content-linksBox--socialsBox">
                            <a href="https://www.linkedin.com/in/tasin-zaman/" className="contactsPage__containerOne_content-linksBox--socialsBox---link linkedin_hoverClass" title='Email'>
                                <FontAwesomeIcon icon={faLinkedin} className="contactsPage__containerOne_content-linksBox--socialsBox---link----icon"></FontAwesomeIcon>
                                <p className="contactsPage__containerOne_content-linksBox--socialsBox---link----text">LinkedIn</p>
                            </a>
                            <a href="https://www.instagram.com/tasin.zmn_/" className="contactsPage__containerOne_content-linksBox--socialsBox---link instagram_hoverClass" title='Email'>
                                <FontAwesomeIcon icon={faInstagramSquare} className="contactsPage__containerOne_content-linksBox--socialsBox---link----icon"></FontAwesomeIcon>
                                <p className="contactsPage__containerOne_content-linksBox--socialsBox---link----text">Instagram</p>
                            </a>
                            <a href="https://www.facebook.com/tasin.zaman.10/" className="contactsPage__containerOne_content-linksBox--socialsBox---link facebook_hoverClass" title='Email'>
                                <FontAwesomeIcon icon={faFacebookSquare} className="contactsPage__containerOne_content-linksBox--socialsBox---link----icon"></FontAwesomeIcon>
                                <p className="contactsPage__containerOne_content-linksBox--socialsBox---link----text">Facebook</p>
                            </a>
                            <a href="https://dribbble.com/zmndesigns" className="contactsPage__containerOne_content-linksBox--socialsBox---link dribble_hoverClass" title='Email'>
                                <FontAwesomeIcon icon={faDribbbleSquare} className="contactsPage__containerOne_content-linksBox--socialsBox---link----icon"></FontAwesomeIcon>
                                <p className="contactsPage__containerOne_content-linksBox--socialsBox---link----text">Dribble</p>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}


export default ContactsPage;