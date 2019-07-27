import React from 'react';
import './IntroBlurb.css';

export const IntroBlurb: React.FC = () => {
    return <div className="intro-blurb-container">
        <h1 className="intro-blurb">Hi, I'm William Kwok</h1>
        <p className="intro-blurb">I'm a full stack developer and fourth year at the
            <a href="https://www.washington.edu/"> University of Washington Seattle</a> obtaining a B.S. in
            <a href="https://ischool.uw.edu/"> Informatics</a>.</p>
        <p className="intro-blurb">Currently, I am a Software Engineering Intern at
            <a href="https://qualtrics.com"> Qualtrics</a>.</p>
        <p>I TA for <a href="https://drstearns.github.io/tutorials/">Server Side Development</a>,
        program websites for <a href="http://2018.igem.org/Team:Washington">Washington iGEM</a>,
        and am the director of IT for <a href="https://iuga.info">IUGA</a>.</p>
    </div>
}