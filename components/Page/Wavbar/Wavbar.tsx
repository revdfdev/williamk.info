import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
// import { Logo } from './Logo/Logo';
import './Wavbar.css';
import { Logo } from './Logo/Logo';
import Fade from 'react-reveal/Fade';

type WavbarLink = {
    title: string,
    link?: string,
    hashLinkIfIndex?: string
}

const wavbarLinks: WavbarLink[] = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Experience",
        link: "/experience",
        hashLinkIfIndex: "#experience"
    },
    {
        title: "Projects",
        link: "/projects",
        hashLinkIfIndex: "#projects"
    },
    {
        title: "Skills",
        hashLinkIfIndex: "#skills"
    },
    {
        title: "Resume",
        link: "/resume"
    }
]

type WavbarProps = {
    pathname?: string
}

export const Wavbar: React.FC<WavbarProps> = ({ pathname }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <header>
        <Fade duration={600}>
            <Navbar className="wavbar" dark expand="md">
                {pathname === "/" ?
                    <Logo /> :
                    <Link href="/">
                        <a>
                            <Logo />
                        </a>
                    </Link>
                }
                <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
                <Collapse isOpen={isOpen} navbar className="wavbar-collapse">
                    <Nav className="ml-auto" navbar>
                        {wavbarLinks.map(wavbarLink => {
                            if (pathname === "/" && wavbarLink.hashLinkIfIndex) {
                                return <NavItem key={wavbarLink.title}>
                                    <a href={wavbarLink.hashLinkIfIndex}>
                                        {wavbarLink.title}
                                    </a>
                                </NavItem>
                            }

                            if (wavbarLink.link === pathname || !wavbarLink.link) {
                                return <React.Fragment key={wavbarLink.title}></React.Fragment>
                            }

                            return <NavItem key={wavbarLink.title}>
                                <Link href={wavbarLink.link}>
                                    <a>
                                        {wavbarLink.title}
                                    </a>
                                </Link>
                            </NavItem>
                        })}
                    </Nav>
                </Collapse>
            </Navbar>
        </Fade>
    </header>
}