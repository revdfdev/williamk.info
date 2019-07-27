import React from 'react';
import "../pageStyles/index.css";
import { MainGear } from '../components/MainGear/MainGear';
import { IntroBlurb } from '../components/MainPage/IntroBlurb/IntroBlurb';
import { SocialLinks } from '../components/MainPage/SocialLinks/SocialLinks';
import { Experience } from '../components/MainPage/Experience/Experience';
import { Projects } from '../components/MainPage/Projects/Projects';

/**
 * IndexPage is the home page shown at route "/"
 * 
 * Last Modified
 *      William Kwok
 *      July 21, 2019
 */
const IndexPage: React.FC = () => {
    return <>
        <div className="main-intro">
            <div className="main-gear-container">
                <MainGear />
            </div>
            <IntroBlurb />
            <SocialLinks />
            <div className="main-see-below">See some of my work below!</div>
        </div>
        <Experience />
        <Projects />
    </>
}

export default IndexPage;