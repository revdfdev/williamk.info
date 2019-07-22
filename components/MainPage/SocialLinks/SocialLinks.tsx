import React from 'react';
import './SocialLinks.css';
import { faGithub, faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { SocialLink } from './SocialLink/SocialLink';

export type SocialLinkType = {
    icon: IconDefinition,
    text: string,
    link: string,
    internalLink?: boolean
}

const LINKS: SocialLinkType[] = [
    {
        icon: faGithub,
        text: "Github",
        link: "https://github.com/kwokwilliam"
    },
    {
        icon: faLinkedin,
        text: "LinkedIn",
        link: "https://linkedin.com/in/william-w-kwok/"
    },
    {
        icon: faEnvelope,
        text: "Email",
        link: "mailto:wkwok1998@gmail.com"
    },
    {
        icon: faFileAlt,
        text: "Resume",
        link: "/Resume",
        internalLink: true
    }
];

export const SocialLinks: React.FC = () => {
    return <div className="social-links">
        {LINKS.map(link => {
            return <SocialLink link={link} />
        })}
    </div>
}