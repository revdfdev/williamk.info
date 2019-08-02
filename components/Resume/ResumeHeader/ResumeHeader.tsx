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
        <div className="row no-gutter margin-none resume-header-container">
            <div className="resume-header-side">
                <ContactIcons imgSrc={emailIcon} iconAlt={"email"} link="mailto:wkwok1998@gmail.com">
                    wkwok1998@gmail.com
                </ContactIcons>
                <ContactIcons imgSrc={phoneIcon} iconAlt={"phone"} link="tel:808-218-3017">
                    (808) 218 - 3017
                </ContactIcons>
            </div>
            <div className="resume-header-main">
                William Kwok
            </div>
            <div className="resume-header-side row margin-none justify-content-end">
                <div>
                    <ContactIcons imgSrc={githubIcon} iconAlt={"github"} link="https://github.com/kwokwilliam">
                        kwokwilliam
                    </ContactIcons>
                    <ContactIcons imgSrc={linkedinIcon} iconAlt={"linkedin"} link="https://linkedin.com/in/william-w-kwok">
                        william-w-kwok
                    </ContactIcons>
                    <ContactIcons imgSrc={websiteIcon} iconAlt={"website"} link="https://williamk.info">
                        williamk.info
                    </ContactIcons>
                </div>
            </div>
        </div>
    </>
}