import React, { useContext, useEffect } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DevCanvasContext } from './DevCanvasContext/DevCanvasContext';

export const Test: React.FC = () => {
    const { canvasConverter } = useContext(DevCanvasContext);

    let githubIconUrl = canvasConverter.convertFontAwesomeIconToImage(faGithub, "2x", "test");
    return <>
        <img src={githubIconUrl} />
    </>
}