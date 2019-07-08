import React, { useState } from 'react';
import Anime from 'react-anime';
import MainImage from '../../components/_assets/Images/Main/Main.jpg';
import './MainGear.css';

export const MainGear: React.FC = () => {
    const [complete, setComplete] = useState<boolean>(false);

    return <div>
    <svg style={{ display: 'inline', position: 'absolute', margin: 'auto'}} 
        version="1.1" xmlns="http://www.w3.org/2000/svg" width={500} height={500} viewBox="-75 167 460 460">
    {!complete && <Anime easing="easeOutCubic"
        duration={1000}
        loop={false}
        delay={(_, index) => {
            return index ? index * 200 : 0}}
        complete={() => {
            setComplete(true);
        }}
        // @ts-ignore
        strokeDashoffset={(el) => {
            var pathLength = 0;
            // @ts-ignore
            if (el.getTotalLength) {
                // @ts-ignore
                pathLength = el.getTotalLength();
                // @ts-ignore
                el.setAttribute('stroke-dasharray', pathLength);
            }
            return [pathLength, 0];
        }
        }
        key={"1"}>
        <circle className="st1" cx="155.4" cy="397" r="164.928"/>
        <path className="st1" d="M381.9,411.4v-28.9c-10,0-18.7-4.7-23.7-11.8c-1.2-9.3-3-18.4-5.4-27.3
            c1.9-8.4,8.1-16.1,17.3-19.9l-11-26.7c-9.2,3.8-19.1,2.8-26.3-1.9c-4.6-8-9.8-15.8-15.4-23.1c-1.5-8.5,1.3-18,8.3-25.1l-20.4-20.4
            c-7.1,7.1-16.6,9.9-25.1,8.4c-7.3-5.6-15-10.8-23.1-15.4c-4.7-7.3-5.7-17.1-1.9-26.4l-26.7-11.1c-3.8,9.2-11.5,15.4-19.9,17.3
            c-8.9-2.4-18-4.2-27.3-5.4c-7.1-4.9-11.9-13.6-11.9-23.7h-28.9c0,10-4.7,18.7-11.8,23.7c-9.3,1.2-18.4,3-27.3,5.4
            c-8.4-1.9-16.1-8.1-19.9-17.3l-26.7,11.1c3.8,9.2,2.8,19.1-1.9,26.4c-8,4.6-15.8,9.8-23.1,15.4c-8.5,1.5-18-1.3-25.1-8.4l-20.4,20.4
            c7.1,7.1,9.9,16.6,8.3,25.1c-5.6,7.3-10.8,15-15.4,23.1c-7.3,4.7-17.1,5.7-26.3,1.9l-11.1,26.7c9.2,3.8,15.4,11.5,17.3,19.9
            c-2.4,8.9-4.2,18-5.4,27.3c-4.9,7.1-13.6,11.8-23.7,11.8v28.9c10,0,18.7,4.7,23.6,11.9c1.2,9.3,3,18.4,5.4,27.3
            c-1.9,8.4-8.1,16.1-17.3,19.9l11.1,26.7c9.2-3.8,19.1-2.8,26.4,1.9c4.6,8,9.8,15.8,15.4,23.1c1.5,8.5-1.3,18-8.4,25.1l20.4,20.4
            c7.1-7.1,16.6-9.9,25.1-8.3c7.3,5.6,15,10.8,23.1,15.4c4.7,7.3,5.7,17.1,1.9,26.3l26.7,11.1c3.8-9.2,11.5-15.4,19.9-17.3
            c8.9,2.4,18,4.2,27.3,5.4c7.1,4.9,11.8,13.6,11.8,23.7h28.9c0-10,4.7-18.7,11.9-23.7c9.3-1.2,18.4-3,27.3-5.4
            c8.4,1.8,16.1,8.1,19.9,17.3l26.7-11.1c-3.8-9.2-2.8-19.1,1.9-26.3c8-4.6,15.8-9.8,23.1-15.4c8.5-1.5,18,1.3,25.1,8.3l20.4-20.4
            c-7.1-7.1-9.9-16.6-8.4-25.1c5.6-7.3,10.8-15,15.4-23.1c7.3-4.7,17.1-5.7,26.4-1.9l11.1-26.7c-9.2-3.8-15.4-11.5-17.3-19.9
            c2.4-8.9,4.2-18,5.4-27.3C363.3,416.2,371.9,411.4,381.9,411.4z"/>
        <path className="st1" d="M124.7,437.9l-9.5,0.1l-16.8-49.1L81.7,438l-9.5-0.1l-15.8-71.1h-3.7c-1.8,0-3.1-0.4-3.9-1.1
            c-0.8-0.7-1.2-1.7-1.2-2.8c0-1.1,0.4-2,1.2-2.7s2.1-1.1,3.9-1.1h21c1.8,0,3.1,0.4,3.9,1.1s1.2,1.7,1.2,2.8c0,1.1-0.4,2-1.2,2.7
            c-0.8,0.7-2.1,1.1-3.9,1.1H64l13.6,60.6L93.8,379h9.1l16.7,48.4l13-60.6h-9.6c-1.8,0-3.1-0.4-4-1.1c-0.8-0.7-1.2-1.7-1.2-2.8
            c0-1.1,0.4-2,1.2-2.7c0.8-0.7,2.1-1.1,4-1.1H144c1.9,0,3.2,0.4,4,1.1c0.8,0.7,1.2,1.7,1.2,2.8c0,1.1-0.4,2-1.2,2.7
            c-0.8,0.7-2.1,1.1-4,1.1h-3.6L124.7,437.9z"/>
        <path className="st1" d="M194.6,403.9v34h-17.9c-1.8,0-3.1-0.4-3.9-1.1s-1.2-1.6-1.2-2.7c0-1.2,0.4-2.1,1.2-2.8
            c0.8-0.7,2.1-1,3.9-1h10.3v-98.8h-10.3c-1.8,0-3.1-0.4-3.9-1.1s-1.2-1.7-1.2-2.8c0-1.1,0.4-2,1.2-2.7c0.8-0.7,2.1-1.1,3.9-1.1h17.9
            v70.4l32.5-27.3h-3.9c-1.8,0-3.1-0.4-3.9-1.1s-1.2-1.6-1.2-2.7c0-1.2,0.4-2.1,1.2-2.8c0.8-0.7,2.1-1.1,3.9-1.1h24.5
            c1.9,0,3.2,0.4,4,1.1c0.8,0.7,1.2,1.7,1.2,2.8c0,1.1-0.4,2-1.2,2.7c-0.8,0.7-2.1,1.1-4,1.1H239l-29.8,24.9l37.8,38.5h8.8
            c1.9,0,3.2,0.3,4,1s1.2,1.6,1.2,2.8c0,1.1-0.4,2-1.2,2.7c-0.8,0.7-2.1,1.1-4,1.1h-24.7c-1.8,0-3.1-0.4-3.9-1.1
            c-0.8-0.7-1.2-1.6-1.2-2.7c0-1.2,0.4-2.1,1.2-2.8c0.8-0.7,2.1-1,3.9-1h5.4l-32.8-33.8L194.6,403.9z"/>
    </Anime>}
    </svg>
    <svg style={{ display: 'inline', position: 'absolute', margin: 'auto'}} 
        className={`${complete ? "spin" : ""}`}
        version="1.1" xmlns="http://www.w3.org/2000/svg" width={500} height={500} viewBox="-75 167 460 460">
    <>
        {complete && <circle className="st1 st3" cx="155.4" cy="397" r="165.5" />}
        {complete && <path className="st1" d="M381.9,411.4v-28.9c-10,0-18.7-4.7-23.7-11.8c-1.2-9.3-3-18.4-5.4-27.3
            c1.9-8.4,8.1-16.1,17.3-19.9l-11-26.7c-9.2,3.8-19.1,2.8-26.3-1.9c-4.6-8-9.8-15.8-15.4-23.1c-1.5-8.5,1.3-18,8.3-25.1l-20.4-20.4
            c-7.1,7.1-16.6,9.9-25.1,8.4c-7.3-5.6-15-10.8-23.1-15.4c-4.7-7.3-5.7-17.1-1.9-26.4l-26.7-11.1c-3.8,9.2-11.5,15.4-19.9,17.3
            c-8.9-2.4-18-4.2-27.3-5.4c-7.1-4.9-11.9-13.6-11.9-23.7h-28.9c0,10-4.7,18.7-11.8,23.7c-9.3,1.2-18.4,3-27.3,5.4
            c-8.4-1.9-16.1-8.1-19.9-17.3l-26.7,11.1c3.8,9.2,2.8,19.1-1.9,26.4c-8,4.6-15.8,9.8-23.1,15.4c-8.5,1.5-18-1.3-25.1-8.4l-20.4,20.4
            c7.1,7.1,9.9,16.6,8.3,25.1c-5.6,7.3-10.8,15-15.4,23.1c-7.3,4.7-17.1,5.7-26.3,1.9l-11.1,26.7c9.2,3.8,15.4,11.5,17.3,19.9
            c-2.4,8.9-4.2,18-5.4,27.3c-4.9,7.1-13.6,11.8-23.7,11.8v28.9c10,0,18.7,4.7,23.6,11.9c1.2,9.3,3,18.4,5.4,27.3
            c-1.9,8.4-8.1,16.1-17.3,19.9l11.1,26.7c9.2-3.8,19.1-2.8,26.4,1.9c4.6,8,9.8,15.8,15.4,23.1c1.5,8.5-1.3,18-8.4,25.1l20.4,20.4
            c7.1-7.1,16.6-9.9,25.1-8.3c7.3,5.6,15,10.8,23.1,15.4c4.7,7.3,5.7,17.1,1.9,26.3l26.7,11.1c3.8-9.2,11.5-15.4,19.9-17.3
            c8.9,2.4,18,4.2,27.3,5.4c7.1,4.9,11.8,13.6,11.8,23.7h28.9c0-10,4.7-18.7,11.9-23.7c9.3-1.2,18.4-3,27.3-5.4
            c8.4,1.8,16.1,8.1,19.9,17.3l26.7-11.1c-3.8-9.2-2.8-19.1,1.9-26.3c8-4.6,15.8-9.8,23.1-15.4c8.5-1.5,18,1.3,25.1,8.3l20.4-20.4
            c-7.1-7.1-9.9-16.6-8.4-25.1c5.6-7.3,10.8-15,15.4-23.1c7.3-4.7,17.1-5.7,26.4-1.9l11.1-26.7c-9.2-3.8-15.4-11.5-17.3-19.9
            c2.4-8.9,4.2-18,5.4-27.3C363.3,416.2,371.9,411.4,381.9,411.4z"/>}
            </>
        </svg>
        <svg style={{ display: 'inline', position: 'absolute', margin: 'auto'}} 
        version="1.1" xmlns="http://www.w3.org/2000/svg" width={500} height={500} viewBox="-75 167 460 460"> 
            <defs>
                <circle cx="155.4" cy="397" r="164.928" id="clip-circle" />
            </defs>
            <clipPath id="clip-circle-path">
                <use xlinkHref="#clip-circle" style={{overflow: "visible"}} />
            </clipPath>
            <g className={`gear-image`}>
                <image className={`gear-image-image ${complete ? "gear-image-show" : "gear-image-hidden"}`}
                xlinkHref={MainImage} transform={"matrix(0.7676 0 0 0.7676 -75.3 170)"} width="1000" height="667"/>
            </g>
        </svg>
    </div>
}