import React from 'react';

export class CanvasConverter {
    public devCanvas: HTMLCanvasElement | null;
    constructor() {
        this.devCanvas = null;
    }

    registerDevCanvas = (devCanvas: HTMLCanvasElement | null) => {
        this.devCanvas = devCanvas;
    }

    getDevCanvas = () => {
        return this.devCanvas;
    }

}