import React from 'react';
import './ResumeHeader.css';
import { ContactIcons } from '../ContactIcons/ContactIcons';
import { faEnvelope, faPhone, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

export const ResumeHeader: React.FC = () => {
    return <>
        <div className="row no-gutter margin-none">
            <div className="resume-header-side">
                <ContactIcons contactIcon={faEnvelope} iconAlt={"email"}>
                    wkwok16@uw.edu
                </ContactIcons>
                <ContactIcons contactIcon={faPhone} iconAlt={"phone"}>
                    (808) 218 - 3017
                </ContactIcons>
            </div>
            <div className="resume-header-main">
                William Kwok
            </div>
            <div className="resume-header-side row no-gutter justify-content-end">
                <div>
                    <ContactIcons contactIcon={faGithub} iconAlt={"email"}>
                        kwokwilliam
                    </ContactIcons>
                    <ContactIcons contactIcon={faLinkedin} iconAlt={"email"}>
                        william-w-kwok
                    </ContactIcons>
                    <ContactIcons contactIcon={faGlobe} iconAlt={"email"}>
                        https://williamk.info
                    </ContactIcons>
                </div>
            </div>
        </div>
    </>
}