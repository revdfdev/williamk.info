import React, { useContext } from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { DevCanvasContext } from '../DevCanvasContext/DevCanvasContext';
import { THEME_COLOR } from '../ResumeConstants';

type ContactIconsProps = {
    contactIcon: IconDefinition,
    iconAlt: string
}

export const ContactIcons: React.FC<ContactIconsProps> = ({ contactIcon, children, iconAlt }) => {
    const { canvasConverter } = useContext(DevCanvasContext);

    let iconAsImage = canvasConverter.convertFontAwesomeIconToImage(contactIcon, "3x", {
        height: 500,
        width: 500,
        color: THEME_COLOR
    });

    return <div className="row margin-none align-items-center resume-contact-icon-container">
        <div>
            <img src={iconAsImage} alt={iconAlt} className="resume-contact-icon" />
        </div>
        <div className="resume-contact-children">
            {children}
        </div>
    </div>
}