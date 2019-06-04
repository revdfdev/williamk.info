import { useEffect, useState } from 'react';

export const useWindowWidth: () => number = () => {
    const [width, setWidth] = useState<number>(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, [])

    return width;
}