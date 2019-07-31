import { createContext } from 'react';
import { CanvasConverter } from '../CanvasConverter/CanvasConverter';

type DevCanvasContext = {
    canvasConverter: CanvasConverter
}

export const DevCanvasContext = createContext<DevCanvasContext>({
    canvasConverter: new CanvasConverter()
})