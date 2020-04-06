import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import 'video.js/dist/video-js.css'
import App from './app';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom';
export const default_root_url = "http://localhost:8000"

ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
