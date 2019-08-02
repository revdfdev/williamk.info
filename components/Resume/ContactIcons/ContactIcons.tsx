import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';

type ContactIconsProps = {
    imgSrc: string
    iconAlt: string
}

export const ContactIcons: React.FC<ContactIconsProps> = ({ imgSrc, children, iconAlt }) => {


    return <div className="row margin-none align-items-center resume-contact-icon-container">
        <div>
            <img src={imgSrc} alt={iconAlt} className="resume-contact-icon" />
        </div>
        <div className="resume-contact-children">
            {children}
        </div>
    </div>
}