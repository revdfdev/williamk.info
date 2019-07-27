import React, { useState } from 'react';
import './SocialLink.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SocialLinkType } from '../SocialLinks';
import Link from 'next/link';
import { Popover, PopoverBody } from 'reactstrap';

type SocialLinkProps = {
    link: SocialLinkType
}

export const SocialLink: React.FC<SocialLinkProps> = ({ link }) => {
    const [hover, setHover] = useState<boolean>(false);

    return <>
        <div key={link.text} className="social-item" id={link.text} onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}>
            {link.internalLink &&
                <Link href={link.link}>
                    <a title={link.text}>
                        <FontAwesomeIcon icon={link.icon} size="2x" />
                    </a>
                </Link>
            }
            {!link.internalLink &&
                <a href={link.link} className="social-flex" title={link.text}>
                    <FontAwesomeIcon icon={link.icon} size="2x" />
                </a>
            }
        </div>
        <Popover placement="top" isOpen={hover} target={link.text}>
            <PopoverBody>{link.text}</PopoverBody>
        </Popover>
    </>
}