import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar, Nav, NavItem, NavbarToggler, Collapse } from 'reactstrap';
// import { Logo } from './Logo/Logo';
import './Wavbar.css';
import { Logo } from './Logo/Logo';

type WavbarLink = {
    title: string,
    link: string
}

const wavbarLinks: WavbarLink[] = [
    {
        title: "Home",
        link: "/"
    },
    {
        title: "Projects",
        link: "/projects"
    }
]

type WavbarProps = {
    pathname?: string
}

export const Wavbar: React.FC<WavbarProps> = ({ pathname }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    return <header>
        <Navbar className="wavbar" dark expand="md">
            <Logo />
            <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
            <Collapse isOpen={isOpen} navbar className="wavbar-collapse">
                <Nav className="ml-auto" navbar>
                    {wavbarLinks.map(wavbarLink => {
                        if (wavbarLink.link === pathname) {
                            return <React.Fragment key={wavbarLink.link}></React.Fragment>
                        }
                        return <NavItem key={wavbarLink.link}>
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
    </header>
}