import React from 'react';
import ReactDOM from 'react-dom';
import Hourly from './Hourly';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Hourly />, div);
  ReactDOM.unmountComponentAtNode(div);
});
