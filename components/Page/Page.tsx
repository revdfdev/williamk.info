import React from 'react';
import './Page.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HelmetContent } from './HelmetContent/HelmetContent';
import { Wavbar } from './Wavbar/Wavbar';
import { Footbar } from './Footbar/Footbar';

type PageProps = {
    children: React.ReactNode,
    pathname?: string
}

/**
 * Page is the base page used for all the pages on the IUGA website. It will provide the Navigation
 * bar with the appropriately selected menu option (If none are appropriate, it will remain black).
 * 
 * Last Modified
 *      William Kwok
 *      June 7, 2019
 */
export const Page: React.FC<PageProps> = ({ children, pathname }) => {
    return <>
        <HelmetContent />
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div style={{ paddingBottom: '5rem' }}>
                <Wavbar pathname={pathname} />
                <div className="page-content">
                    {children}
                </div>
            </div>
            <Footbar />
        </div>
    </>
}
