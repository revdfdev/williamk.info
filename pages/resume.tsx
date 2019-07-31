import React from 'react';
import Link from 'next/link';
import { Button } from 'reactstrap';
import { Resume } from '../components/Resume/Resume';
import '../pageStyles/resume.css';

const ResumePage: React.FC = () => {
    return <>
        <Link href="/">
            <a>
                <Button className="whitetext margin-top-15px">
                    Home
                </Button>
            </a>
        </Link>

        <div className="centered min-vh-100">
            <p className="margin-top-15px">This page does not work on mobile.</p>
            {/* <div className="margin-bottom-15px">
                <PDFDownloadLink document={<Resume />} fileName="WilliamKwokResume.pdf">
                    {({ loading }) => {
                        return loading ? <div>Loading...</div> : <Button>Download now!</Button>
                    }}
                </PDFDownloadLink>
            </div>
            <PDFViewer className="resume-pdf-viewer" >
        </PDFViewer> */}
            <Resume />
        </div>
    </>
}

export default ResumePage;