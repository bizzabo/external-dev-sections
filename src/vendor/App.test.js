import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mockSection = {
  id: 440241,
  rootKey: 440241,
  type: "header",
  template: "business"
};

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App section={mockSection}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
