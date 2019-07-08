import React from 'react';
import './IntroBlurb.css';

export const IntroBlurb: React.FC = () => {
    return <div className="intro-blurb-container">
        <h1 className="intro-blurb">Hi, I'm <span className="em-color">William Kwok</span></h1>
        <p className="intro-blurb">I'm a full stack developer and fourth year student at the
            <span className="em-color"> University of Washington Seattle</span> obtaining a B.S. in
            <span className="em-color"> Informatics</span>.</p>
        <p className="intro-blurb">Currently, I am a Software Engineering Intern at
            <span className="em-color"> Qualtrics</span>. I also program websites for </p>
        {/* <p className="intro-blurb">Full stack developer</p>
        <p className="intro-blurb">Fourth-year @ <span className="em-color">University of Washington Seattle</span>, BS in <span className="em-color">Informatics</span></p>
        <p className="intro-blurb"><span className="em-color">Qualtrics</span></p> */}
    </div>
}