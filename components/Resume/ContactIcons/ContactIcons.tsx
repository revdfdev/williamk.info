import React from 'react';

type ContactIconsProps = {
    imgSrc: string
    iconAlt: string,
    link?: string
}

export const ContactIcons: React.FC<ContactIconsProps> = ({ imgSrc, children, iconAlt, link }) => {
    return <a {...{ href: link ? link : undefined }}>
        <div className="row margin-none align-items-center resume-contact-icon-container">
            <div>
                <img src={imgSrc} alt={iconAlt} className="resume-contact-icon" />
            </div>
            <div className="resume-contact-children">
                {children}
            </div>
        </div>
    </a>
}