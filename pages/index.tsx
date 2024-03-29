import React from 'react';
import "../pageStyles/index.css";
import { MainGear } from '../components/MainGear/MainGear';
import { IntroBlurb } from '../components/MainPage/IntroBlurb/IntroBlurb';
import { SocialLinks } from '../components/MainPage/SocialLinks/SocialLinks';
import { Experience } from '../components/MainPage/Experience/Experience';
import { Projects } from '../components/Projects/Projects';
import Fade from 'react-reveal/Fade';
import { Skills } from '../components/MainPage/Skills/Skills';
// @ts-ignore
import ScrollableAnchor from 'react-scrollable-anchor';

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
            <Fade duration={1000}>
                <div>
                    <IntroBlurb />
                    <SocialLinks />
                    <div className="main-see-below">See some of my work below!</div>
                </div>
            </Fade>
        </div>

        <ScrollableAnchor id="experience">
            <div>
                <Experience />
            </div>
        </ScrollableAnchor>
        <div className="spacer"></div>

        <ScrollableAnchor id="projects">
            <div>
                <Projects />
            </div>
        </ScrollableAnchor>
        <div className="spacer"></div>

        <ScrollableAnchor id="skills">
            <div>
                <Skills />
            </div>
        </ScrollableAnchor>
        <div className="spacer"></div>
    </>
}

export default IndexPage;