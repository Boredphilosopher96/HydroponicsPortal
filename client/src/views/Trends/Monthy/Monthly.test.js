import React from 'react';
import ReactDOM from 'react-dom';
import Monthly from './Monthly';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Monthly />, div);
  ReactDOM.unmountComponentAtNode(div);
});
