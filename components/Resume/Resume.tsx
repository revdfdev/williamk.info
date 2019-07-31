import React, { useRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { ResumePage } from './ResumePage/ResumePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'reactstrap';
import './Resume.css';

export const Resume: React.FC = () => {
    const pdf = useRef(null);
    const devCanvas = useRef(null);
    // TODO: Create a context for devCanvas and svgToImage function that takes devCanvas as parameter
    return <>
        <canvas ref={devCanvas} className="resume-dev-canvas"></canvas>
        <Button onClick={() => {
            // @ts-ignore
            pdf.current.save()
        }}>Download</Button>
        <PDFExport paperSize={'Letter'}
            fileName="WilliamKwokResume.pdf"
            title="William Kwok"
            subject="William Kwok"
            ref={pdf}
        >
            <ResumePage>
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </ResumePage>
        </PDFExport>
    </>
}
