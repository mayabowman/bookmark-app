import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './rating';

it('Renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Rating />, div);
  ReactDOM.unmountComponentAtNode(div);
});