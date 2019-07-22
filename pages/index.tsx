import React from 'react';
import "../pageStyles/index.css";
import { MainGear } from '../components/MainGear/MainGear';
import { IntroBlurb } from '../components/MainPage/IntroBlurb/IntroBlurb';

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
        </div>
        <div>
            test
        </div>
    </>
}

export default IndexPage;