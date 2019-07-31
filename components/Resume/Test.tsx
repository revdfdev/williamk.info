import React, { useContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { DevCanvasContext } from './DevCanvasContext/DevCanvasContext';

export const Test: React.FC = () => {
    const { canvasConverter } = useContext(DevCanvasContext);

    // console.log(canvasConverter.getDevCanvas());

    return <>
        <FontAwesomeIcon icon={faGithub} size="2x" />
    </>
}