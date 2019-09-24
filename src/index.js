import React from 'react';
import ReactDOM from 'react-dom';
import './vendor/index.css';
import App from './vendor/App';
import * as serviceWorker from './vendor/serviceWorker';

const mockSection = {
    id: 440241,
    rootKey: 440241,
    type: "header",
    template: "business",
    elements: [
        {"type":"eventName","id":1469900,"rootKey":"1469900","position":1,"visibility":true,"customizationVersion":1,"column":-1,"visibilityParent":false,"eventName":"guy2"},
        {"type":"eventDate","id":1469901,"rootKey":"1469901","position":2,"visibility":true,"customizationVersion":1,"column":-1,"visibilityParent":false,"localStartDate":"2020-05-07 12:00","localEndDate":"2020-05-07 13:00"},
        {"type":"eventLogo","id":1469902,"rootKey":"1469902","position":3,"visibility":true,"customizationVersion":1,"column":-1,"visibilityParent":false},
        {"type":"image","id":1469903,"rootKey":"1469903","position":4,"visibility":true,"customizationVersion":1,"column":-1,"visibilityParent":false,"isVideo":false},
        {"type":"eventSecondaryHeaders","id":1469905,"rootKey":"1469905","position":5,"visibility":true,"customizationVersion":1,"column":-1,"visibilityParent":false,"header1":"United States","header2":"Doors open at:"},
        {"type":"registerButton","id":1469906,"rootKey":"1469906","position":6,"visibility":true,"customizationVersion":1,"column":-1,"visibilityParent":false,"name":"Register","mode":"register","newTab":false},
        {"type":"socialShare","id":1469907,"rootKey":"1469907","position":7,"visibility":true,"customizationVersion":1,"column":-1,"visibilityParent":false,"eventName":"guy2","landingPageUrl":"https://events.bizzabo.com/215205","twitter":true,"facebook":true,"linkedin":true}
    ]
};
ReactDOM.render(<App section={mockSection}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
