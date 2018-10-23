import React from 'react';
import ReactDOM from 'react-dom';
import CleanerContainer from '../containers/CleanerContainer';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CleanerContainer />, div);
    ReactDOM.unmountComponentAtNode(div);
});
