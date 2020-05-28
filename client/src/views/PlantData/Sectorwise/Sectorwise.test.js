import React from 'react';
import ReactDOM from 'react-dom';
import SectorWise from './Sectorwise';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SectorWise />, div);
  ReactDOM.unmountComponentAtNode(div);
});