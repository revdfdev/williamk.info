import React from 'react';
import Link from 'next/link';
import { Button } from 'reactstrap';
import { Resume } from '../components/Resume/ResumeComponent';
import '../pageStyles/resume.css';
import Fade from 'react-reveal/Fade';

const ResumePage: React.FC = () => {
    return <>
        <Fade duration={1500}>

            <Link href="/">
                <a>
                    <Button className="whitetext margin-top-15px">
                        Home
                </Button>
                </a>
            </Link>

            <div className="centered min-vh-100">
                <p className="margin-top-15px">This page does not work on mobile.</p>
                <Resume />
            </div>
        </Fade>
    </>
}

export default ResumePage;