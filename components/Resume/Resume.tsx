import React, { useState, useRef, useEffect } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { ResumePage } from './ResumePage/ResumePage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { Button } from 'reactstrap';
import './Resume.css';
import { CanvasConverter } from './CanvasConverter/CanvasConverter';
import { DevCanvasContext } from './DevCanvasContext/DevCanvasContext';
import { Test } from './Test';

export const Resume: React.FC = () => {
    const pdf = useRef<PDFExport>(null);
    const devCanvas = useRef<HTMLCanvasElement>(null);
    const [canvasConverter] = useState<CanvasConverter>(new CanvasConverter());
    const [canvasLoaded, setCanvasLoaded] = useState<boolean>(false);

    useEffect(() => {
        canvasConverter.registerDevCanvas(devCanvas.current);
        setCanvasLoaded(true);
    }, [devCanvas]);

    return <>
        <DevCanvasContext.Provider value={{
            canvasConverter
        }}>
            <canvas ref={devCanvas} className="resume-dev-canvas"></canvas>
            {canvasLoaded &&
                <>
                    <Button onClick={() => {
                        if (pdf.current) {
                            pdf.current.save()
                        }
                    }}>Download</Button>
                    <PDFExport paperSize={'Letter'}
                        fileName="WilliamKwokResume.pdf"
                        title="William Kwok"
                        subject="William Kwok"
                        ref={pdf}
                    >
                        <ResumePage>

                        </ResumePage>
                    </PDFExport>
                </>
            }

        </DevCanvasContext.Provider>
    </>
}
