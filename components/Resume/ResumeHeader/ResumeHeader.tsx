import React from 'react';
import './ResumeHeader.css';
import { ContactIcons } from '../ContactIcons/ContactIcons';
import emailIcon from '../../_assets/Images/Resume/envelopeIcon.png';
import phoneIcon from '../../_assets/Images/Resume/phoneIcon.png';
import githubIcon from '../../_assets/Images/Resume/githubIcon.png';
import linkedinIcon from '../../_assets/Images/Resume/linkedinIcon.png';
import websiteIcon from '../../_assets/Images/Resume/globeIcon.png';

export const ResumeHeader: React.FC = () => {
    return <>
        <div className="row no-gutter margin-none">
            <div className="resume-header-side">
                <ContactIcons imgSrc={emailIcon} iconAlt={"email"}>
                    wkwok16@uw.edu
                </ContactIcons>
                <ContactIcons imgSrc={phoneIcon} iconAlt={"phone"}>
                    (808) 218 - 3017
                </ContactIcons>
            </div>
            <div className="resume-header-main">
                William Kwok
            </div>
            <div className="resume-header-side row no-gutter justify-content-end">
                <div>
                    <ContactIcons imgSrc={githubIcon} iconAlt={"github"}>
                        kwokwilliam
                    </ContactIcons>
                    <ContactIcons imgSrc={linkedinIcon} iconAlt={"linkedin"}>
                        william-w-kwok
                    </ContactIcons>
                    <ContactIcons imgSrc={websiteIcon} iconAlt={"website"}>
                        https://williamk.info
                    </ContactIcons>
                </div>
            </div>
        </div>
    </>
}