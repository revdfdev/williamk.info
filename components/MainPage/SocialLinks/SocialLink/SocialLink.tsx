import React, { useState } from 'react';
import './SocialLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLinkType } from '../SocialLinks';
import Link from 'next/link';

type SocialLinkProps = {
    link: SocialLinkType
}

export const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
    return <div key={link.text} className="social-item">
        {link.internalLink &&
            <Link href={link.link}>
                <a>
                    <FontAwesomeIcon icon={link.icon} size="2x" />
                </a>
            </Link>
        }
        {!link.internalLink &&
            <a href={link.link} className="social-flex">
                <FontAwesomeIcon icon={link.icon} size="2x" />
            </a>
        }
    </div>
}