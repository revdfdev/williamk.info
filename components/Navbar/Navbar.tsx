import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo/Logo';

export const Navbar: React.FC = () => {
    return <header>
        <Navbar>
            <Link href="/">
                <a>
                    <Logo />
                </a>
            </Link>
        </Navbar>
    </header>
}