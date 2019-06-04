import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ReactGA from 'react-ga';
import { gaTrackingID } from './_data/gaTracking';

console.log("v0.0.1");

ReactGA.initialize(gaTrackingID, { debug: process.env.NODE_ENV !== "production" });
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
