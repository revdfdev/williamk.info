import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import canvg from 'canvg';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';

export class CanvasConverter {
    private devCanvas: HTMLCanvasElement | null;
    constructor() {
        this.devCanvas = null;
    }

    public registerDevCanvas = (devCanvas: HTMLCanvasElement | null) => {
        this.devCanvas = devCanvas;
    }

    public convertFontAwesomeIconToImage = (icon: IconDefinition, size: SizeProp, style: React.CSSProperties) => {
        this.throwIfCanvasUnregistered();

        let htmlString = ReactDOMServer.renderToStaticMarkup(
            <FontAwesomeIcon size={size} icon={icon} style={style} fixedWidth />);
        canvg(this.devCanvas!, htmlString);
        return this.devCanvas!.toDataURL("image/png");
    }

    private throwIfCanvasUnregistered = () => {
        if (!this.devCanvas) {
            throw new Error("Canvas not registered");
        }
    }
}