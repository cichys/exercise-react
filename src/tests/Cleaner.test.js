import React from 'react';
import ReactDOM from 'react-dom';
import Cleaner from '../components/Cleaner';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Cleaner />, div);
    ReactDOM.unmountComponentAtNode(div);
});
