import React, { useRef } from 'react';
import { PDFExport } from '@progress/kendo-react-pdf';
import { ResumePageComponent } from './ResumePage/ResumePage';
import { Button } from 'reactstrap';
import './Resume.css';
import { ResumeHeader } from './ResumeHeader/ResumeHeader';

// uncomment for conversion ///////////////////////////////
// import { CanvasConverter } from './CanvasConverter/CanvasConverter';
// import { THEME_COLOR } from './ResumeConstants';

///////////////////////////?///////////////////////////////

export const Resume: React.FC = () => {
    const pdf = useRef<PDFExport>(null);

    // uncomment for conversion ///////////////////////////
    // const devCanvas = useRef<HTMLCanvasElement>(null);
    // const [canvasConverter] = useState<CanvasConverter>(new CanvasConverter());
    // const [canvasLoaded, setCanvasLoaded] = useState<boolean>(false);

    // useEffect(() => {
    //     canvasConverter.registerDevCanvas(devCanvas.current);
    //     setCanvasLoaded(true);
    // }, [devCanvas]);

    ////////////////////////////////////////////////////////

    return <>
        {/** uncomment for conversion */}
        {/* <canvas ref={devCanvas} className="resume-dev-canvas"></canvas>
        {canvasLoaded &&
            <>
                <img src={canvasConverter.convertFontAwesomeIconToImage(faWrench, "2x", {
                    width: 500,
                    height: 500,
                    color: THEME_COLOR
                })} />
            </>
        } */}
        {/** ************************* */}
        <>
            <Button onClick={() => {
                if (pdf.current) {
                    pdf.current.save()
                }
            }}>Download</Button>
            <PDFExport paperSize={'Letter'}
                scale={0.9} /** dont ask me */
                fileName="WilliamKwokResume.pdf"
                title="William Kwok"
                subject="William Kwok"
                ref={pdf}
            >
                <ResumePageComponent>
                    <ResumeHeader />
                </ResumePageComponent>
            </PDFExport>
        </>
    </>
}
