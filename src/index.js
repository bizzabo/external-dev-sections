import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/index.css';
import App from './vendor/App';
import * as serviceWorker from './vendor/serviceWorker';

const mockSection = {
    id: 440241,
    rootKey: 440241,
    type: "header",
    template: "business"
};
ReactDOM.render(<App section={mockSection}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
