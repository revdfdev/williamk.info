import React from 'react';
import { useWindowWidth } from './_hooks/useWindowWidth';
import { WindowWidthContext } from './_contexts/WindowWidth';

const App: React.FC = () => {
    const windowWidth = useWindowWidth();

    return <>
        <WindowWidthContext.Provider value={{ windowWidth }}>


        </WindowWidthContext.Provider>
    </>
}

export default App;
